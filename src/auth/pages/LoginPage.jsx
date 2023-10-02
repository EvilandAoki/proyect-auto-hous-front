import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import './../../styles/login.css';
import { Footer } from '../../core/footer/Footer';
import { Header } from '../../core/header/Header';

 export const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Valores capturados:', values);
    // agregar la lógica para autenticar al usuario
  };

  return (
    <div>
      <Header />
      <Row justify="center" align="middle" style={{ minHeight: '90vh' }} className="back-byw">
        <Col xs={24} sm={16} md={12} lg={10} >
          <Card title="Bienvenido de nuevo" extra={"Inicia sesión para seguir"}>
            
            <Form
              name="loginForm"
              onFinish={onFinish}
              layout="vertical"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="email"
                className='item_icon'
                rules={[
                  { required: true, message: 'Por favor ingresa tu correo electrónico' },
                  { type: 'email', message: 'Ingresa un correo electrónico válido' },
                ]}
              >
                <Input placeholder="Correo@ejemplo.com" />
              </Form.Item>

              <Form.Item
                name="password"
                className='item_icon secure'
                rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
              >
                <Input.Password placeholder="Contraseña" />
              </Form.Item>
              <div className='link_ext'>
                <a href="#">Consultar servicios</a>
              </div>
              <Form.Item  className='btn_entrar'>
                <Button type="primary" htmlType="submit" block>
                  Entrar
                </Button>
              </Form.Item>
            </Form>
            
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
