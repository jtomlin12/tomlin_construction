import { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { useForm } from "react-hook-form"

export default function ContactCard() {

  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
    router.reload()
  }

  const formFields = [
    {
      name: "Name",
      validation: {
        required: true,
        minLength: 3
      }
    },
    {
      name: "Email",
      validation: {
        pattern: /\S+@\S+\.\S+/,
        required: true
      }
    },
    {
      name: "Phone",
      validation: {
        required: false
      }
    }
  ]

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = (data, e) => {
    console.log(data)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
      .then(() => setModal(true))
      .catch(error => alert(error))
    e.preventDefault()
  }

  return (
    <>
      <Card className="text-justify p-4">
        <h5 className="font-weight-bold">Inquiries</h5>
        <Form name="contact" data-netlify="true" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="form-name" value="contact" />
          {
            formFields.map(field => (
              <FormGroup key={field.name}>
                <Label for={field.name}>{field.name}</Label>
                <Input type={field.name.toLowerCase()} name={field.name.toLowerCase()} id={field.name.toLowerCase()} placeholder={`Enter your ${field.name.toLowerCase()}`} innerRef={register(field.validation)} />
              </FormGroup>
            ))
          }
          <Label for="request">Special Requests</Label>
          <Input type="textarea" name="request" id="request" innerRef={register} />
          <br />
          <div className="d-flex justify-content-center">
            <Button className="mx-auto" color="success">Submit</Button>
          </div>
        </Form>
      </Card>
      <Modal isOpen={modal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Success</ModalHeader>
        <ModalBody>
          We have received your response
                  </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={closeModal}>Go Back</Button>{' '}
          <Button color="danger" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}