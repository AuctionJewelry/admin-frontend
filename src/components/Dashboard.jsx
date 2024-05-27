import { Card, Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const Dashboard = ({ totalUsers }) => {
  return (
    <div className='container' style={{ marginTop: '2rem' }}>
      <Title level={2} style={{ marginBottom: '1.5rem' }}>
        Dashboard
      </Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Title level={4}>Total Users</Title>
            <Text className='display-4' style={{ fontSize: '2rem' }}>
              {totalUsers}
            </Text>
          </Card>
        </Col>
        {/* Add more cards for other statistics as needed */}
      </Row>
    </div>
  );
};

export default Dashboard;
