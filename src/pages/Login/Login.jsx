import { Button } from "antd";
import React from "react";
import { CLIENT_ID, GITHUB_AUTH_URL, REDIRECT_URI } from "../../config/oauth";

const Login = () => {
  const handleLogin = () => {
    const githubAuthUrl = `${GITHUB_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user repo`;
    window.location.href = githubAuthUrl;
  };
  return (
    <div>
      <Button type="primary" onClick={handleLogin}>
        Войти с помощью github
      </Button>
    </div>
  );
};

export default Login;
