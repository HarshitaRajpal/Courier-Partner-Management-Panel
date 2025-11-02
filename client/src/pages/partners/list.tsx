import { EditOutlined, StarFilled } from "@ant-design/icons";
import { Button, Empty, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formatCurrency, formatDate } from "../../utils";
import { useGetAllPartners } from "./queries";
import type { Partner } from "./types";

const PartnersList = ({
  handleEdit,
}: {
  handleEdit: (record: Partner) => void;
}) => {
  const { data, isLoading, isError } = useGetAllPartners();
  const columns: ColumnsType<Partner> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="font-medium text-gray-900">{text}</span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <span className="text-gray-600">{text || "-"}</span>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <span className="text-gray-600">{text || "-"}</span>,
    },
    {
      title: "Base Rate",
      dataIndex: "baseRate",
      key: "baseRate",
      ellipsis: true,
      render: (value) => formatCurrency(value),
    },
    {
      title: "Delivery Speed",
      dataIndex: "deliverySpeed",
      key: "deliverySpeed",
      ellipsis: true,
      render: (text) => (
        <Tag color="blue" className="border-none">
          {text || "-"}
        </Tag>
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      align: "center",
      render: (rating) => {
        return (
          <Tag color={rating >= 4 ? "green" : rating >= 3 ? "orange" : "red"}>
            {rating.toFixed(1)} <StarFilled />
          </Tag>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      ellipsis: true,
      render: (date) => (
        <span className="text-gray-500 text-sm">{formatDate(date)}</span>
      ),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      ellipsis: true,
      render: (date) => (
        <span className="text-gray-500 text-sm">{formatDate(date)}</span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      width: 100,
      render: (_, record) => (
        <Button
          type="primary"
          ghost
          size="small"
          onClick={() => handleEdit(record)}
          icon={<EditOutlined />}
        >
          Edit
        </Button>
      ),
    },
  ];
  return (
    <div>
      {" "}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <Table
          rowKey="id"
          loading={isLoading}
          columns={columns}
          dataSource={data}
          className="custom-table"
          tableLayout="auto"
          scroll={{ x: 1000 }}
          locale={{
            emptyText: isError ? (
              <Empty description="Error fetching partners" />
            ) : (
              <Empty description="No partners found" />
            ),
          }}
          pagination={{
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} partners`,
            pageSizeOptions: ["10", "20", "50", "100"],
            defaultPageSize: 10,
          }}
        />
      </div>
    </div>
  );
};

export default PartnersList;
