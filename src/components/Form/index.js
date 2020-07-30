import React from 'react';
import { Form, Input, Typography, Button, Divider } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const FormCommon = () => {
    return (
        <div className="form-wrap">
            <div className="container">
                <div className="form-box">
                    <div className="form-title">
                        <Title level={3}>Đăng nhập</Title>
                    </div>
                    <Form className="form">
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your text!' }]}
                    >
                        <Input 
                            placeholder="Email/Số điện thoại/Tên đăng nhập" 
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item className="form-btn">
                        <Button htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <div className="form-note">
                            <Link to="/">
                                Quên mật khẩu
                            </Link>
                            <Link to="/">
                                Đăng nhập với SMS
                            </Link>
                        </div>                        
                    </Form.Item>
                    <Divider className="form-divider">Hoặc</Divider>
                    <div className="form-desc">
                        <span>Bạn mới biết đến Shopee?</span>
                        <Link to="/signup">Đăng ký</Link>
                    </div>
                </Form>
                </div>
            </div>
        </div>
    );
}

export default FormCommon;