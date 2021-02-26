import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/Actions/authActions';
import classnames from 'classnames';
import {
    Form,
    Button,
    Card
} from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(userData);
        this.props.loginUser(userData);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8">
                        <Card>
                            <Card.Header>
                                <h4>
                                    <b>Login</b> below
                                </h4>
                                <p className="grey-text text-darken-1">
                                    Don't have an account? <Link to="/register">Register</Link>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Form noValidate onSubmit={this.onSubmit}>
                                    <Form.Group className="input-field col sm12">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="email"
                                            onChange={e => this.setState({ email: e.target.value }) } 
                                            className={classnames("", { invalid: this.state.errors.email || this.state.errors.emailnotfound })}
                                        />
                                        <span className="danger">
                                            {this.state.errors.email}
                                            {this.state.errors.emailnotfound}
                                        </span>
                                    </Form.Group>
                                    <Form.Group className="input-field col sm12">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            name="password"
                                            onChange={e => this.setState({ password: e.target.value }) } 
                                            className={classnames("", { invalid: this.state.errors.password || this.state.errors.passwordincorrect })}
                                        />
                                        <span className="danger">
                                            {this.state.errors.password}
                                            {this.state.errors.passwordincorrect}
                                        </span>                                        
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
) (Login);