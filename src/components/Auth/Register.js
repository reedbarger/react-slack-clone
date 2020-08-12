import React, { Component } from 'react';
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        if (this.isFormValid()) {
            event.preventDefault();
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(createdUser => {
                    console.log(createdUser);
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className='app'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="red" textAlign="center">
                        <Icon name="puzzle piece" color="red" />
            Register for Slack Chat
          </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name="username"
                                icon="user"
                                iconPosition="left"
                                placeholder="Username"
                                value={username}
                                onChange={this.handleChange}
                                type="text"
                            />
                            <Form.Input
                                fluid
                                name="email"
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email Addresss"
                                value={email}
                                onChange={this.handleChange}
                                type="email"
                            />
                            <Form.Input
                                fluid
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                                type="password"
                            />
                            <Form.Input
                                fluid
                                name="passwordConfirmation"
                                icon="repeat"
                                iconPosition="left"
                                placeholder="Password Confirmation"
                                value={passwordConfirmation}
                                onChange={this.handleChange}
                                type="password"
                            />
                            <Button fluid size="large" color="red"></Button>
                        </Segment>
                    </Form>
                    <Message>Already a User? <Link to='/login'>Login</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;
