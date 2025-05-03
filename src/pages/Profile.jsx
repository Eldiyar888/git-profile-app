import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateProfile } from "../store/profileSlice";
import { Typography, Image, Row, Col, Form, Input, Button, Spin } from "antd";
import ErrorInfo from "../components/ErrorInfo";
import { formFields } from "../constants/profileFormFields";

const { Title, Text, Link } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const { data, loading, updating, error } = useSelector(
    (state) => state.profile
  );

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name,
        bio: data.bio,
        company: data.company,
        location: data.location,
      });
    }
  }, [data, form]);

  const handleFinish = (values) => {
    dispatch(updateProfile(values));
  };

  if (loading) return <Spin />;
  if (error) return <ErrorInfo message={error} />;

  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Title level={2}>Профиль</Title>
        </Col>

        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={handleFinish}>
            {formFields.map(({ name, label, placeholder, isTextArea }) => (
              <Form.Item
                key={name}
                label={label}
                name={name}
                rules={[
                  {
                    required: true,
                    message: `Пожалуйста, введите ${label.toLowerCase()}`,
                  },
                ]}
              >
                {isTextArea ? (
                  <Input.TextArea rows={3} placeholder={placeholder} />
                ) : (
                  <Input placeholder={placeholder} />
                )}
              </Form.Item>
            ))}

            <Form.Item>
              <Button type="default" htmlType="submit" loading={updating}>
                Сохранить изменения
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={24}>
          <Text strong>Логин: </Text>
          <Text>{data?.login}</Text>
        </Col>
        <Col span={24}>
          <Text strong>Почта: </Text>
          <Text>{data?.email || "Не указан"}</Text>
        </Col>
        <Col span={24}>
          <Image width={200} src={data?.avatar_url} />
        </Col>
        <Col span={24}>
          <Text strong>Ссылка на профиль: </Text>
          <Link href={data?.html_url} target="_blank">
            {data?.html_url}
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
