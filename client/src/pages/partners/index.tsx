import { PlusOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useState } from "react";
import CreateOrUpdatePartnerModal from "./modal";
import type { Partner } from "./types";
import PartnersList from "./list";

type ModalData = {
  open: boolean;
  intialData?: Partner;
  action: "create" | "update";
};

const PartnersPage = () => {
  const defaultModalData = {
    open: false,
    intialData: undefined,
    action: "create" as const,
  };
  const [modalData, setModalData] = useState<ModalData>(defaultModalData);

  const handleEdit = (data: Partner) => {
    setModalData({ open: true, intialData: data, action: "update" });
  };
  const handleCreate = () => {
    setModalData({ open: true, action: "create" });
  };

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <Space size="middle" className="items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
            <TeamOutlined className="text-blue-600! text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 m-0">
              Partners
            </h1>
            <p className="text-sm text-gray-500 m-0">
              Manage your delivery partners
            </p>
          </div>
        </Space>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={handleCreate}
        >
          Create Partner
        </Button>
      </div>

      <PartnersList handleEdit={handleEdit} />

      <CreateOrUpdatePartnerModal
        open={modalData.open}
        intialData={modalData.intialData}
        onClose={() => setModalData(defaultModalData)}
        action={modalData.action}
      />
    </div>
  );
};

export default PartnersPage;
