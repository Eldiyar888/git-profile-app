import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "antd/dist/reset.css";
import { ConfigProvider, Empty, Typography } from "antd";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store";
import { appTheme } from "./constants/appTheme";

const { Text } = Typography;

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={appTheme}
        renderEmpty={() => <Empty description={<Text>Нет данных</Text>} />}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
