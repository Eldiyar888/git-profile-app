import { Typography, List, Avatar } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Link } = Typography;

const UserList = ({
  users,
  total,
  currentPage,
  pageSize = 10,
  onPageChange,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={users}
        pagination={{
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: false,
          onChange: onPageChange,
        }}
        renderItem={(user) => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/users/${user.login}/repos`)}
          >
            <List.Item.Meta
              avatar={<Avatar src={user.avatar_url} />}
              title={<Link>{user.login}</Link>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserList;
