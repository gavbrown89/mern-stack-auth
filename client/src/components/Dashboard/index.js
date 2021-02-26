import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../Redux/Actions/authActions';
import {
    Button
} from 'react-bootstrap';

class Dashboard extends Component {

    onLogout = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { user } = this.props.auth;
        return (
            <div className="container">
                <div className="text-center justify-content-center">
                    <h2>Dashboard</h2>
                    <p><strong>Welcome</strong> {user.name.split(" ")[0]}</p>
                    <Button variant="danger"
                        onClick={this.onLogout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (Dashboard);