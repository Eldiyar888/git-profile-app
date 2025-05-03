import React from "react";
import { List, Typography } from "antd";

const { Text, Link } = Typography;

const RepoList = ({ repos }) => {
  return (
    <List
      dataSource={repos}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Link href={item.html_url} target="_blank">
                {item.name}
              </Link>
            }
            description={
              <>
                <Text>Владелец: </Text>
                <Link href={item.owner.html_url} target="_blank">
                  {item.owner.login}
                </Link>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default RepoList;
