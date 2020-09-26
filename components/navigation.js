import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import Footer from './footer.js'

export default function Navigation(props) {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const paths = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/gallery',
      name: 'Gallery'
    },
    {
      path: '/contact',
      name: 'Contact'
    }
  ]

  const router = useRouter()

  return (
    <>
      <nav className="bg-light text-dark sticky-top">
        <Navbar light expand="md">
          <NavbarBrand style={{ cursor: "pointer" }}><Link href="/"><strong>Tomlin Construction</strong></Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                paths.map(pages => (
                  <NavItem key={pages.name} style={{ cursor: "pointer" }}>
                    <Link href={pages.path}><NavLink style={{ fontSize: '1.4em' }} active={router.pathname === pages.path} onClick={() => isOpen && toggle()}>{pages.name}</NavLink></Link>
                  </NavItem>
                ))
              }
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}