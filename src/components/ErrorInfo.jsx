import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

const ErrorInfo = ({
  message = "Произошла ошибка. Попробуйте позже.",
  type = "danger",
}) => {
  return <Text type={type}>{message}</Text>;
};

export default ErrorInfo;
