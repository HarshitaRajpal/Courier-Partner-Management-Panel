import {
  MenuFoldOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as AntdMenu, Button, Divider, Layout } from "antd";
import React, { useState } from "react";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const Menu: React.FC = () => {
  const [current, setCurrent] = useState("partners");
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    {
      key: "partners",
      icon: <TeamOutlined />,
      label: "Partners",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      className="shadow-lg pt-3"
      width={250}
    >
      <div className="flex items-center justify-between h-16">
        {!collapsed ? (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg">
              <ShopOutlined className="text-white text-xl" />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              Courier Partner
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg">
              <ShopOutlined className="text-white text-xl" />
            </div>
          </div>
        )}
        <Button
          type="text"
          icon={<MenuFoldOutlined className="text-white text-xl!" />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <Divider />

      <AntdMenu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        className="border-r-0"
      />
    </Sider>
  );
};

export default Menu;
