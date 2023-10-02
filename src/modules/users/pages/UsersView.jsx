import React, { useState } from 'react';
import { Layout, Row, Col, Button, Table, Modal, Form, Input } from 'antd';
import { PlusCircleOutlined, FilterOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'antd/dist/antd.css';

const { Search } = Input;

 export const UsersView = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddUserClick = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Correo Electrónico',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Sucursal',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" icon={<EyeOutlined />} />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Usuario 1',
      email: 'usuario1@example.com',
      branch: 'Sucursal A',
    },
    // Agrega más datos de usuarios aquí
  ];

  return (
    <Layout className='container'>
      <Row>
        <Col md={8}>
          <Search placeholder="Buscar usuarios" />
        </Col>
        <Col md={4}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={handleAddUserClick}
          >
            Agregar Usuario
          </Button>
        </Col>
        <Col md={4}>
          <Button type="default" icon={<FilterOutlined />}>
            Filtrar por Sucursal
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
      <Modal
        title="Agregar Usuario"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {/* Formulario para agregar usuario */}
        <Form>
          {/* Campos del formulario */}
        </Form>
      </Modal>
    </Layout>
  );
};
