import { Button, Form, Modal } from "antd";
import React from "react";
import FormFields from "./form";
import { useCreatePartner, useUpdatePartner } from "./queries";
import type { Partner } from "./types";

const CreateOrUpdatePartnerModal: React.FC<{
  open: boolean;
  intialData?: Partner;
  onClose: () => void;
  action: "create" | "update";
}> = ({ open, intialData, onClose, action }) => {
  const [form] = Form.useForm();
  const createMutation = useCreatePartner();
  const updateMutation = useUpdatePartner();

  const handleSubmit = (formData: Partner) => {
    if (action === "create") {
      createMutation.mutate(formData, {
        onSuccess: onClose,
      });
    } else {
      if (intialData)
        updateMutation.mutate(
          { id: intialData?.id, partner: formData },
          {
            onSuccess: onClose,
          }
        );
    }
  };

  return (
    <Modal
      open={open}
      title={action === "create" ? "Create Partner" : "Update Partner"}
      onCancel={onClose}
      footer={null}
    >
      <Form
        onFinish={(values) => handleSubmit(values)}
        form={form}
        initialValues={intialData}
        layout="vertical"
      >
        <FormFields />

        <div className="flex items-center justify-end gap-2">
          <Button type="default" onClick={onClose} danger>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {action === "create" ? "Create" : "Update"} Partner
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateOrUpdatePartnerModal;
