import React, { useEffect } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const {
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation,
        getValues,
    } = useForm();

    useEffect(() => {
        register(
            { name: 'username' },
            {
                required: 'Please, enter your name',
                minLength: {
                    value: 4,
                    message: 'Name is too short',
                },
            }
        );
        register(
            { name: 'email' },
            {
                required: 'Please, enter your email',
                pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Invalid email',
                },
            }
        );
        register(
            { name: 'password' },
            {
                required: `
                        The password should contain 8-32 characters, 
                        at least one digit (0-9), 
                        uppercase (A-Z) and lowercase (a-z) letter.
                        `,
                validate: {
                    minLength: (value) =>
                        value.toString().length >= 8 ||
                        'The password should contain at least 8 characters',
                    maxLength: (value) =>
                        value.toString().length <= 32 ||
                        'The password should contain maximum 32 characters',
                    isIncludeDigits: (value) =>
                        value.toString().match(/(?=.*[0-9])/) ||
                        'The password should contain at least one digit (0-9)',
                    isIncludeUpperCase: (value) =>
                        value.toString().match(/(?=.*[A-Z])/) ||
                        'The password should contain at least one uppercase (A-Z) letter',
                },
            }
        );
        register(
            { name: 'confirmPassword' },
            {
                required: 'Please confirm the password',
                validate: {
                    matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || 'Passwords should match';
                    },
                },
            }
        );
        register(
            { name: 'agreeTaC' },
            {
                required: 'You must agree to the terms and conditions',
            }
        );
    }, []);

    const handleChangeInput = (e, { name, value }) => {
        setValue(name, value);
    };

    const handleChangeCheckBox = (e, { name, checked }) => {
        setValue(name, checked);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" className="login-text">
                    Creating a new diary
                </Header>
                <Form size="large" onSubmit={handleSubmit(onSubmit)}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder={
                                !errors.username
                                    ? 'Name'
                                    : errors.username.message
                            }
                            name="username"
                            onChange={handleChangeInput}
                            error={
                                !!errors.username && {
                                    content: errors.username.message,
                                }
                            }
                        />

                        <Form.Input
                            fluid
                            icon="mail"
                            iconPosition="left"
                            placeholder={
                                !errors.email
                                    ? 'E-mail address'
                                    : 'Please, enter your e-mail'
                            }
                            name="email"
                            onChange={handleChangeInput}
                            error={
                                !!errors.email && {
                                    content: errors.email.message,
                                }
                            }
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder={
                                !errors.password
                                    ? 'Password'
                                    : 'Please, enter password'
                            }
                            type="password"
                            name="password"
                            onChange={handleChangeInput}
                            error={
                                !!errors.password && {
                                    content: errors.password.message,
                                }
                            }
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder={
                                !errors.confirmPassword
                                    ? 'Confirm password'
                                    : 'Please, confirm password'
                            }
                            type="password"
                            name="confirmPassword"
                            onChange={handleChangeInput}
                            error={
                                !!errors.confirmPassword && {
                                    content: errors.confirmPassword.message,
                                }
                            }
                        />
                        <Form.Field
                            control={Checkbox}
                            required
                            name="agreeTaC"
                            onChange={handleChangeCheckBox}
                            error={
                                errors.agreeTaC && {
                                    content: errors.agreeTaC.message,
                                }
                            }
                            label={
                                <label>
                                    I agree to the{' '}
                                    <a href="/terms-and-conditions">Terms and Conditions</a>
                                </label>
                            }
                        />
                        <Button
                            className="login-button"
                            fluid
                            size="large"
                            type="submit"
                        >
                            Register
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already with us?
                    <a href="/login"> Sign In</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default RegisterForm;
