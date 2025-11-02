import { Form, Input, InputNumber, Rate } from "antd";
import { formFieldsConfig } from "./config";
import type { FieldConfig } from "./types";

const FormFields = () => {
  const InputComponent = ({ field }: { field: FieldConfig }) => {
    return field.type === "number" ? (
      <InputNumber
        placeholder={field.placeholder}
        className="w-full!"
        min={0}
      />
    ) : (
      <Input placeholder={field.placeholder} type={field.type} />
    );
  };

  return formFieldsConfig.map((field) => (
    <Form.Item
      key={field.name}
      label={field.label}
      name={field.name}
      rules={field.rules}
      initialValue={field.initialValue}
    >
      {field.component === "rate" ? (
        <Rate allowHalf />
      ) : (
        <InputComponent field={field} />
      )}
    </Form.Item>
  ));
};

export default FormFields;
