import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Partner } from "./types";
import { useGetAllPartners } from "./queries";
import { EditOutlined } from "@ant-design/icons";

const PartnersPage = () => {
  const { data, isLoading } = useGetAllPartners();

  const handleEdit = (id: string) => {
    console.log(id);
  };

  const columns: ColumnsType<Partner> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Base Rate",
      dataIndex: "baseRate",
      key: "baseRate",
    },
    {
      title: "Delivery Speed",
      dataIndex: "deliverySpeed",
      key: "deliverySpeed",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          type="primary"
          ghost
          onClick={() => handleEdit(record.id)}
          icon={<EditOutlined />}
        >
          Edit
        </Button>
      ),
    },
  ];
  return (
    <div className="border border-gray-200 rounded-xl">
      <Table
        rowKey="id"
        loading={isLoading}
        columns={columns}
        dataSource={data}
        className="custom-table rounded-xl overflow-scroll"
      />
    </div>
  );
};

export default PartnersPage;
