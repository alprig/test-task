import React, {FC} from 'react';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Button, Layout, Row,} from "antd";
import {useHistory} from 'react-router-dom';




const Navbar: FC = () => {
    const router = useHistory();
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions()
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <div style={{color: "white"}}>
                        <span className="username">{user.username}</span>
                        <Button
                            onClick={logout}
                            type="primary"
                        >
                            Logout
                        </Button>
                    </div>

                    :
                    <Button
                        onClick={()=> router.push(RouteNames.LOGIN)}
                        type="primary"
                    >
                        Login
                    </Button>

                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;