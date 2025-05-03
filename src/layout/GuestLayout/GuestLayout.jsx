import React from "react";
import { Layout } from "antd";
import styles from "./GuestLayout.module.scss";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const GuestLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default GuestLayout;
