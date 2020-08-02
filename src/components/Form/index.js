import React from 'react';
import { Form, Input, Typography, Button, Divider, Alert } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const FormCommon = (props) => {
    const { onAction, isLogin, isError, isLoading, onSetLoading } = props;
    const message = isLogin ? 'Thông tin đăng nhập không chính xác' : isError;

    const handleSubmit = (values) => {
        onSetLoading();
        onAction(values);
    }

    return (
        <div className="form-wrap">
            <div className="container">
                <div className="form-box">
                    <div className="form-title">
                        {isLogin ? (<Title level={3}>Đăng nhập</Title>) : (
                            <Title level={3}>Đăng ký</Title>
                        )}
                    </div>
                    {isError && <Alert 
                        message={message} 
                        type="error" 
                        showIcon
                        closable 
                    />}
                    <Form 
                        className="form"
                        onFinish={handleSubmit}
                    >
                    {!isLogin && (
                        <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            type="text" 
                            placeholder="Tên đăng nhập" 
                        />
                        </Form.Item>
                    )}
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            type="email" 
                            placeholder="Email/Số điện thoại" 
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
                        {isLogin ? (<Button htmlType="submit" className="login-form-button" loading={isLoading}>
                            Đăng nhập
                        </Button>) : (
                            <Button htmlType="submit" className="login-form-button" loading={isLoading}>
                            Đăng ký
                        </Button>
                        )}
                    </Form.Item>
                    {isLogin ? (<Form.Item>
                        <div className="form-note">
                            <Link to="/">
                                Quên mật khẩu
                            </Link>
                            <Link to="/">
                                Đăng nhập với SMS
                            </Link>
                        </div>                        
                    </Form.Item>) : null }
                    <Divider className="form-divider">Hoặc</Divider>
                    <div className="form-desc">
                        <span>Bạn mới biết đến Shopee?</span>
                        {isLogin ? (<Link to="/signup">Đăng ký</Link>) : (
                            <Link to="/login">Đăng nhập</Link>
                        )}
                    </div>
                </Form>
                </div>
            </div>
        </div>
    );
}

export default FormCommon;