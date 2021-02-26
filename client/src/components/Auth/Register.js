import React, { Component } from 'react';
import { 
    Link,
    withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../Redux/Actions/authActions';
import classnames from 'classnames';
import {
    Form,
    Button,
    Card
} from 'react-bootstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8">
                        <Card>
                            <Card.Header>
                                <h4>
                                    <b>Register</b> below
                                </h4>
                                <p className="grey-text text-darken-1">
                                    Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Form noValidate onSubmit={this.onSubmit}>
                                    <Form.Group className="input-field col sm12">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="name"
                                            onChange={e => this.setState({ name: e.target.value })} 
                                            className={classnames("", { invalid: this.state.errors.name })}
                                        />
                                        <span className="danger">{this.state.errors.name}</span>
                                    </Form.Group>
                                    <Form.Group className="input-field col sm12">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="email"
                                            onChange={e => this.setState({ email: e.target.value })}  
                                            className={classnames("", { invalid: this.state.errors.email })}
                                        />
                                        <span className="danger">{this.state.errors.email}</span>
                                    </Form.Group>
                                    <Form.Group className="input-field col sm12">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            name="password"
                                            onChange={e => this.setState({ password: e.target.value })} 
                                            className={classnames("", { invalid: this.state.errors.password })}
                                        />
                                        <span className="danger">{this.state.errors.password}</span>
                                    </Form.Group>
                                    <Form.Group className="input-field col sm12">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            name="password2"
                                            onChange={e => this.setState({ password2: e.target.value })} 
                                            className={classnames("", { invalid: this.state.errors.password2 })}
                                        />
                                        <span className="danger">{this.state.errors.password2}</span>
                                    </Form.Group>
                                    <Form.Group className="input-field col sm12">
                                        <Button type="submit" variant="primary">
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Form>                            
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register));