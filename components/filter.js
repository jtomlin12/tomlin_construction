import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'reactstrap'
import Isotope from 'isotope-layout'

export default function Filter({ buttons, data }) {

  const gridRef = useRef()
  const [isotope, setIsotope] = useState({})



  useEffect(() => {
    const iso = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      masonry: {
        isFitWidth: false
      }
    })
    setIsotope(iso)
    setTimeout(() => {
      iso.layout()
    }, 1000)
  }, [])

  return (
    <div>
      {
        buttons.map(button => <Button key={button.name} className="mx-1 my-3" onClick={() => isotope.arrange({ filter: button.filter })}>{button.name}</Button>)
      }
      <div id="grid" ref={gridRef}>
        {
          data.map(item => (<img key={item.src} src={item.src} className={`grid-item ${item.filter}`} style={{ width: "20%" }} />))
        }
      </div>
    </div >
  )
}
