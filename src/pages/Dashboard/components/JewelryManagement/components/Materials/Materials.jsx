import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, DatePicker } from "antd";
import moment from "moment";

const MaterialsManagement = () => {
    const [materials, setMaterials] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingMaterial, setEditingMaterial] = useState(null);

    const [form] = Form.useForm();

    useEffect(() => {
        // Fetch materials data from API
        // setMaterials(fetchedData);
    }, []);

    const handleAdd = () => {
        setEditingMaterial(null);
        setIsModalVisible(true);
    };

    const handleEdit = (record) => {
        setEditingMaterial(record);
        setIsModalVisible(true);
        form.setFieldsValue({
            ...record,
            created_at: moment(record.created_at),
            updated_at: moment(record.updated_at),
        });
    };

    const handleDelete = (id) => {
        // Delete material by id from API
        setMaterials(materials.filter((item) => item.id !== id));
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            if (editingMaterial) {
                // Update material
                const updatedMaterials = materials.map((item) =>
                    item.id === editingMaterial.id
                        ? { ...item, ...values }
                        : item
                );
                setMaterials(updatedMaterials);
            } else {
                // Add new material
                setMaterials([
                    ...materials,
                    { ...values, id: materials.length + 1 },
                ]);
            }
            setIsModalVisible(false);
            form.resetFields();
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Created At", dataIndex: "created_at", key: "created_at" },
        { title: "Updated At", dataIndex: "updated_at", key: "updated_at" },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <>
                    <Button type="link" onClick={() => handleEdit(record)}>
                        Edit
                    </Button>
                    <Button
                        type="link"
                        danger
                        onClick={() => handleDelete(record.id)}
                    >
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <Button type="primary" onClick={handleAdd}>
                Add Material
            </Button>
            <Table dataSource={materials} columns={columns} rowKey="id" />
            <Modal
                title={editingMaterial ? "Edit Material" : "Add Material"}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please input the name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="created_at"
                        label="Created At"
                        rules={[
                            {
                                required: true,
                                message: "Please select the created date!",
                            },
                        ]}
                    >
                        <DatePicker showTime />
                    </Form.Item>
                    <Form.Item
                        name="updated_at"
                        label="Updated At"
                        rules={[
                            {
                                required: true,
                                message: "Please select the updated date!",
                            },
                        ]}
                    >
                        <DatePicker showTime />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default MaterialsManagement;
