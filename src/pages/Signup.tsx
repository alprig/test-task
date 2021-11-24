import React from 'react';
import {Card, Layout, Row} from "antd";
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <Card>
                    <SignUpForm />
                </Card>
            </Row>

        </Layout>
    );
};

export default Signup;