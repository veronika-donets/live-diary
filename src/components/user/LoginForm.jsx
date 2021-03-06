import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';

const LoginForm = () => (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" className="login-text">
                Log-in to your account
            </Header>
            <Form size="large">
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="E-mail address"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                    />
                    <Button className="login-button" fluid size="large">
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us?
                <a href="/register"> Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
);

export default LoginForm;
