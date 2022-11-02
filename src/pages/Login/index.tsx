import React from 'react';
import './index.less';
import { Button, Form, Input, InputNumber } from 'antd';
import moment from 'moment';
import { apiOpenLogin } from '@/services';

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    apiOpenLogin(values).then((res: any) => {
      console.log('res ===>', res);
      localStorage.setItem('token', res.data.token);
    });
  };

  const [form] = Form.useForm();
  return (
    <div className="login-container">
      <div className="content">
        <div className="left-box">
          <p>欢迎您登录！</p>
          <p>现在的时间是：{moment().format('YYYY-MM-DD hh:mm:ss')}</p>
        </div>
        <div className="right-box">
          <Form
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 22 }}
            style={{ width: '100%' }}
            onFinish={onFinish}
          >
            <Form.Item
              name={'phone'}
              label="手机号"
              rules={[{ required: true, message: '请输入手机号!' }]}
            >
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name={'sms_code'}
              label="验证码"
              rules={[{ required: true, message: '请输入验证码!' }]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 22 }}>
              <Button
                htmlType="submit"
                type="primary"
                size="middle"
                style={{ width: '100%' }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
