import React, { useEffect, useRef, useState } from 'react'
import Body from '../components/Body'
import { Button, Form } from 'react-bootstrap'
import InputField from '../components/InputField'
import { useApi } from '../contexts/ApiProvider';
import { useFlash } from '../contexts/FlashProvider';

export default function ResetRequestPage() {
    const [formErrors, setFormErrors] = useState({});
    const emailField = useRef();
    const api = useApi();
    const flash = useFlash();

    useEffect(() => {
        emailField.current.focus();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/tokens/reset', {
            email: emailField.current.value,
        });

        if(!response.ok) {
            setFormErrors(response.body.errors.json)
        }
        else {
            emailField.current.value = '';
            setFormErrors({});
            flash('You will receive an email with instructions to reset your password.', 'info');
        }
    }

  return (
    <Body>
        <h1>Reset Your password</h1>
        <Form onSubmit={onSubmit}>
            <InputField name="email" label="Email Address" error={formErrors.email} fieldRef={emailField} />
            <Button variant='primary' type="submit">Reset Password</Button>
        </Form>
    </Body>
  )
}
