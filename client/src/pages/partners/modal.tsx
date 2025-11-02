import React from "react";
import type { Partner } from "./types";
import { Button, Form, Modal } from "antd";
import { useCreatePartner, useUpdatePartner } from "./queries";
import FormFields from "./form";

const CreateOrUpdatePartnerModal: React.FC<{
  open: boolean;
  intialData?: Partner;
  onClose: () => void;
  action: "create" | "update";
}> = ({ open, intialData, onClose, action }) => {
  const [form] = Form.useForm();
  const createMutation = useCreatePartner();
  const updateMutation = useUpdatePartner();

  const handleSubmit = () => {
    const formData = form.getFieldsValue();
    if (action === "create") {
      createMutation.mutate(formData);
    } else {
      if (intialData)
        updateMutation.mutate({ id: intialData?.id, partner: formData });
    }
  };
  return (
    <Modal
      open={open}
      title={action === "create" ? "Create Partner" : "Update Partner"}
      onCancel={onClose}
      footer={
        <div className="flex items-center justify-end gap-2">
          <Button type="default" onClick={onClose} danger>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            {action === "create" ? "Create" : "Update"} Partner
          </Button>
        </div>
      }
    >
      <Form
        onFinish={handleSubmit}
        form={form}
        initialValues={intialData}
        layout="vertical"
      >
        <FormFields />
      </Form>
    </Modal>
  );
};

export default CreateOrUpdatePartnerModal;
