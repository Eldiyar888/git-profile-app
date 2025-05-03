import React, { useEffect, useState } from "react";
import { Tabs, Typography, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../store/reposSlice";
import RepoList from "../components/RepoList";
import ErrorInfo from "../components/ErrorInfo";
import { getTabItems } from "../constants/repositoriesTabItems";

const { TabPane } = Tabs;
const { Title } = Typography;

const Repositories = () => {
  const dispatch = useDispatch();
  const { publicRepos, privateRepos, loading, error } = useSelector(
    (state) => state.repos
  );

  const [activeKey, setActiveKey] = useState("public");

  useEffect(() => {
    dispatch(fetchRepos(activeKey));
  }, [dispatch, activeKey]);

  return (
    <div>
      <Title level={2}>Репозитории</Title>

      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        {getTabItems(publicRepos, privateRepos).map(({ key, label, repos }) => (
          <TabPane tab={label} key={key}>
            {loading ? <Spin /> : <RepoList repos={repos} />}
          </TabPane>
        ))}
      </Tabs>
      {error && <ErrorInfo message={error} />}
    </div>
  );
};

export default Repositories;
