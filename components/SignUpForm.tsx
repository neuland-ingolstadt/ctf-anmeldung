import HCaptcha from '@hcaptcha/react-hcaptcha'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface SignUpFormProps {
  hCaptchaSiteKey: string
}

const SignUpForm = React.memo(function SignUpForm({
  hCaptchaSiteKey,
}: SignUpFormProps) {
  const [verified, setVerified] = useState(false)
  return (
    <div>
      You can register for the event with the following form. The number of
      spots is limited. We will get back to you not later than 4 days before the
      event to confirm or decline your registration.
      <br />
      The event is intended for the students at Technische Hochschule
      Ingolstadt. Therefore, these registrations will be accepted preferably.
      <br />
      <br />
      <Form method="post" action="api/submit">
        <Form.Group className="mb-3">
          <Form.Label>
            Name <sup>*</sup>
          </Form.Label>
          <Form.Control name="name" type="text" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Email address <sup>*</sup>
          </Form.Label>
          <Form.Control name="email" type="email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Course of study <sup>*</sup>
          </Form.Label>
          <Form.Control
            name="course"
            type="text"
            placeholder="Computer Science 3rd semester bachelor, ..."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>T-Shirt size (unisex)</Form.Label>
          <Form.Select aria-label="T-Shirt size" name="shirt">
            <option>None selected</option>
            <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="3XL">3XL</option>
            <option value="4XL">4XL</option>
            <option value="5XL">5XL</option>
          </Form.Select>
        </Form.Group>
        <br />
        <p>
          The above data is required for the planning and execution of the
          Neuland CTF. Photographs will also be taken at the event. Further
          information on data processing can be found in the' '
          <a href="/privacy_policy.pdf" target="_blank" rel="noreferrer">
            privacy policy
          </a>
          .
        </p>
        <br />
        <div className="text-center">
          <Form.Group>
            <HCaptcha
              sitekey={hCaptchaSiteKey}
              onVerify={() => setVerified(true)}
            />
          </Form.Group>
        </div>
        <br />
        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            disabled={!verified}
            className="mx-auto"
          >
            Send
          </Button>
        </div>
      </Form>
    </div>
  )
})

export default SignUpForm
