import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Menu from "../components/ui/Menu";

const { Content } = Layout;

const BaseLayout: React.FC = () => {
  return (
    <Layout className="h-dvh bg-gray-50">
      <Menu />
      <Layout>
        <Content className="m-2 p-4 min-h-dvh bg-white rounded-lg shadow-sm">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
