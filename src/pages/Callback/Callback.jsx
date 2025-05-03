import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { Spin } from "antd";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { saveToken, token } = useAuth();

  useEffect(() => {
    const code = searchParams.get("code");

    const getToken = async (code) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/authenticate",
          {
            code,
          }
        );
        saveToken(response.data.access_token);
        navigate("/profile");
      } catch (error) {
        console.error("Ошибка при получении токена:", error);
      }
    };

    if (token) {
      navigate("/profile");
      return;
    }

    if (code) {
      getToken(code);
    }
  }, [searchParams, navigate, saveToken, token]);

  return <Spin />;
};

export default Callback;
