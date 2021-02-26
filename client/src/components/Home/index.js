import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card
} from 'react-bootstrap';

function Homepage() {
    return (
        <Card className="container" style={{ width: 500 }}>
            <Card.Header>
                <h4 className="text-center" style={{ fontFamily: "montserrat", fontSize: '1em', margin: 0 }}>
                    Auth Development with MERN Stack (Mongo, Express, React, Node)
                </h4>
            </Card.Header>
            <Card.Body>
                <div className="row valign-wrapper justify-content-center">
                    <div className="col s12 center-align">
                        <br />
                        <div className="col s6">
                            <Button
                                href="/register"
                                variant="primary"
                                style={{ width: 140 }}
                            >
                                Register
                            </Button>
                        </div>
                        <div className="col s6">
                            <Button
                                href="/login"
                                variant="primary"
                                style={{ width: 140 }}
                            >
                                Login
                            </Button>                        
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Homepage;