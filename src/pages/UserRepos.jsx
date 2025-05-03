import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin, Typography } from "antd";
import RepoList from "../components/RepoList";
import ErrorInfo from "../components/ErrorInfo";
import { useUserRepos } from "../hooks/useUserRepos";

const UserRepos = () => {
  const { login } = useParams();
  const { Title } = Typography;

  const { repos, loading, error, getReposByLogin } = useUserRepos();

  useEffect(() => {
    getReposByLogin(login);
  }, [login]);

  return (
    <div>
      <Title level={2}>Репозитории</Title>
      {loading && <Spin />}
      {error && <ErrorInfo message={error} />}
      <RepoList repos={repos} />
    </div>
  );
};

export default UserRepos;
