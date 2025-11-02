import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const BaseLayout: React.FC = () => {
  return (
    <Layout className="h-dvh bg-gray-50">
      {/* <Menu /> // TODO: Add menu back when we have more pages */}
      <Layout>
        <Content className="m-2 p-4 min-h-dvh bg-white rounded-lg shadow-sm">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
