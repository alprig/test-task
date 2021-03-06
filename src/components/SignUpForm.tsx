import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,

} from 'antd';
import {RouteNames} from "../router";
import {useHistory} from "react-router-dom";

const SignUpForm = () => {

    const router = useHistory();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 24,
                offset: 0,
            },
        },
    };



    return (
        <div className="form-wrapper">
            <h1 className="h1">Registration Form</h1>
            <Form
                layout="vertical"
                name="register"

            >

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name',
                        },
                    ]}
                >
                    <Input  />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Last Name',
                        },
                    ]}
                >
                    <Input  />
                </Form.Item>






                <Form.Item {...tailFormItemLayout}>
                    <div className="buttons-wrapper">
                        <Button
                            onClick={()=> router.push(RouteNames.LOGIN)}
                            type="primary"
                        >
                            Back to Login
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </div>

                </Form.Item>
            </Form>
        </div>
    );
};

export default SignUpForm;
