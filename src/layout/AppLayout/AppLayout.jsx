import React from "react";
import { Layout, Menu } from "antd";
import { Outlet, Link, useNavigate } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import { useAuth } from "../../hooks/useAuth";
const { Header, Content } = Layout;

const AppLayout = () => {
  const { clearToken } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    clearToken();
    navigate("/login");
  };

  const menuItems = (handleLogOut) => [
    {
      key: "profile",
      label: <Link to="/profile">Профиль</Link>,
    },
    {
      key: "repos",
      label: <Link to="/repos">Репозитории</Link>,
    },
    {
      key: "users",
      label: <Link to="/users">Пользователи</Link>,
    },
    {
      key: "logout",
      label: <span onClick={handleLogOut}>Выйти</span>,
    },
  ];

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Menu
          className={styles.menu}
          theme="dark"
          mode="horizontal"
          items={menuItems(handleLogOut)}
        />
      </Header>
      <Content className={styles.content}>
        <div className={styles.innerContent}>
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default AppLayout;
