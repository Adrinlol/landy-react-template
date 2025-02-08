import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import styled from 'styled-components';
import { useFirebase } from '../../hooks/useFirebase';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding-top: 100px;
`;

interface LoginFormValues {
  email: string;
  password: string;
}

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
`;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useFirebase();
  const history = useHistory();

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      await signIn(values.email, values.password);
      history.push('/admin');
    } catch (error) {
      message.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <StyledForm 
        onFinish={onFinish as (values: any) => void}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </StyledForm>
    </LoginContainer>
  );
};

export default Login; 