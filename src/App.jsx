import React from 'react';
import {
  Card,
  Typography,
  Space,
  Row,
  Col,
  Divider,
  Tag,
  Timeline
} from 'antd';
import {
  SunOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  CoffeeOutlined,
  HeartOutlined,
  StarOutlined,
  SmileOutlined
} from '@ant-design/icons';
import './App.css';

const { Title, Text, Paragraph } = Typography;

function App() {
  return (
    <div className="app-container">
      <div className="background-decoration">
        <div className="sun-rays"></div>
        <div className="floating-elements">
          <SunOutlined className="floating-icon sun-1" />
          <CoffeeOutlined className="floating-icon coffee-1" />
          <StarOutlined className="floating-icon star-1" />
          <HeartOutlined className="floating-icon heart-1" />
          <SmileOutlined className="floating-icon smile-1" />
        </div>
      </div>

      <Row justify="center" align="middle" style={{ minHeight: '100vh', padding: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Card
            className="invitation-card"
            bordered={false}
            style={{
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(255, 193, 7, 0.15)',
              background: 'linear-gradient(135deg, #fff9e6 0%, #fff1b3 100%)',
            }}
          >
            {/* Header */}
            <div className="invitation-header">
              <SunOutlined className="main-sun-icon" />
              <Title level={1} className="invitation-title">
                MORNING PARTY
              </Title>
              <Text className="invitation-subtitle">
                Встречаем новый день вместе!
              </Text>
            </div>

            <Divider style={{ borderColor: '#ffd700', margin: '32px 0' }} />

            {/* Event Details */}
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Timeline
                items={[
                  {
                    dot: <CalendarOutlined className="timeline-icon" />,
                    children: (
                      <div>
                        <Text strong style={{ fontSize: '18px', lineHeight: '1.4' }}>Дата</Text>
                        <br />
                        <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.4' }}>
                          Пятница, 13 июня 2025
                        </Text>
                      </div>
                    ),
                  },
                  {
                    dot: <ClockCircleOutlined className="timeline-icon" />,
                    children: (
                      <div>
                        <Text strong style={{ fontSize: '18px', lineHeight: '1.4' }}>Время</Text>
                        <br />
                        <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.4' }}>
                          10:00 - 12:00
                        </Text>
                      </div>
                    ),
                  },
                  {
                    dot: <EnvironmentOutlined className="timeline-icon" />,
                    children: (
                      <div>
                        <Text strong style={{ fontSize: '18px', lineHeight: '1.4' }}>Место</Text>
                        <br />
                        <Text style={{ fontSize: '16px', color: '#666', lineHeight: '1.4' }}>
                          Улица Воровского, 17стр2<br />
                          п1, этаж 10, кв 36
                        </Text>
                      </div>
                    ),
                  },
                ]}
              />
            </Space>

            <Divider style={{ borderColor: '#ffd700', margin: '32px 0' }} />

            {/* What to Expect */}
            <div className="event-highlights">
              <Title level={3} style={{ textAlign: 'center', color: '#d48806', fontSize: '24px', marginBottom: '20px' }}>
                Что нас ждёт:
              </Title>
              <div style={{ textAlign: 'center' }}>
                <Tag
                  icon={<CoffeeOutlined />}
                  color="orange"
                  style={{ padding: '10px 16px', fontSize: '16px', margin: '8px' }}
                >
                  Завтрак
                </Tag>
                <Tag
                  icon={<StarOutlined />}
                  color="gold"
                  style={{ padding: '10px 16px', fontSize: '16px', margin: '8px' }}
                >
                  Кофе и чай
                </Tag>
                <Tag
                  icon={<SmileOutlined />}
                  color="green"
                  style={{ padding: '10px 16px', fontSize: '16px', margin: '8px' }}
                >
                  Музыка и танцы
                </Tag>
                <Tag
                  icon={<HeartOutlined />}
                  color="pink"
                  style={{ padding: '10px 16px', fontSize: '16px', margin: '8px' }}
                >
                  Хорошее настроение
                </Tag>
              </div>
            </div>

            <Divider style={{ borderColor: '#ffd700', margin: '32px 0' }} />

                        {/* Call to Action */}
            <div style={{ textAlign: 'center' }}>
              <Paragraph style={{ fontSize: '18px', marginBottom: '24px', lineHeight: '1.5' }}>
                Давайте встретим утро весело и энергично!
                Приносите завтрак с собой - соберем общий стол ☀️
              </Paragraph>
              </div>

            {/* Footer */}
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                С любовью организовано для наших друзей ❤️
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
