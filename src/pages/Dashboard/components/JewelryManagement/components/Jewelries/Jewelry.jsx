import React, { useState, useEffect } from "react";
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    Select,
    InputNumber,
    Row,
    Col,
} from "antd";

const { Option } = Select;

const jewelryColumns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Seller ID", dataIndex: "seller_id", key: "seller_id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Category ID", dataIndex: "category_id", key: "category_id" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Size", dataIndex: "size", key: "size" },
    { title: "Color", dataIndex: "color", key: "color" },
    { title: "Sex", dataIndex: "sex", key: "sex" },
    { title: "Brand ID", dataIndex: "brand_id", key: "brand_id" },
    { title: "Condition", dataIndex: "condition", key: "condition" },
    {
        title: "Starting Price",
        dataIndex: "starting_price",
        key: "starting_price",
    },
    { title: "Status", dataIndex: "status", key: "status" },
    {
        title: "Collection ID",
        dataIndex: "collection_id",
        key: "collection_id",
    },
    { title: "Created At", dataIndex: "created_at", key: "created_at" },
    { title: "Updated At", dataIndex: "updated_at", key: "updated_at" },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <span>
                <Button type="link">Edit</Button>
                <Button type="link" danger>
                    Delete
                </Button>
            </span>
        ),
    },
];

const JewelryAdmin = () => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const [jewelryData, setJewelryData] = useState([]);

    useEffect(() => {
        // Fetch data from API and setJewelryData
    }, []);

    const handleAdd = () => {
        setVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            // Send values to API to add/edit jewelry
            setVisible(false);
            form.resetFields();
        });
    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={handleAdd}
                style={{ marginBottom: 16 }}
            >
                Add Jewelry
            </Button>
            <Table
                columns={jewelryColumns}
                dataSource={jewelryData}
                rowKey="id"
            />
            <Modal
                title="Add/Edit Jewelry"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="seller_id"
                                label="Seller ID"
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[{ required: true }]}
                            >
                                <Input.TextArea />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="category_id"
                                label="Category ID"
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="weight"
                                label="Weight"
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="size"
                                label="Size"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="color"
                                label="Color"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="sex"
                                label="Sex"
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="brand_id"
                                label="Brand ID"
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="condition"
                                label="Condition"
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="new">New</Option>
                                    <Option value="used">Used</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="starting_price"
                                label="Starting Price"
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="status"
                                label="Status"
                                rules={[{ required: true }]}
                            >
                                <Select>
                                    <Option value="available">Available</Option>
                                    <Option value="sold">Sold</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="collection_id"
                                label="Collection ID"
                                rules={[{ required: true }]}
                            >
                                <InputNumber style={{ width: "100%" }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
};

export default JewelryAdmin;