import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {RouteNames} from "../router";
import {useHistory} from "react-router-dom";

const LoginForm: FC = () => {

    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const submit = () => {
        login(username, password)
    }
    const router = useHistory();
    return (
        <div>
            <h1 className="h1">Login</h1>
            <Form
                onFinish={submit}
                layout="vertical"
                className="form-wrapper"
            >
                {error &&<div style={{color: 'red' }}>
                    {error}
                </div>}
                <Form.Item
                    label="Email"
                    name="username"

                    rules={[rules.required('Please input your Email!') ]}
                >
                    <Input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules.required('Please input your Password!') ]}
                >
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={"password"}
                    />
                </Form.Item>
                <Form.Item>
                    <div className="buttons-wrapper">
                        <Button
                            onClick={()=> router.push(RouteNames.SIGNUP)}
                            type="primary"
                        >
                            Sign up
                        </Button>
                        <Button type="primary" htmlType="submit" loading={isLoading}>
                            Login
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>

    );
};

export default LoginForm;