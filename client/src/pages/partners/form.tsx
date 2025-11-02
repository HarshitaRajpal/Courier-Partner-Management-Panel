import { Form, Input, Rate } from "antd";
import { formFieldsConfig } from "./config";

const FormFields = () => {
  return (
    <Form>
      {formFieldsConfig.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          layout={field.layout}
          rules={field.rules}
          initialValue={field.initialValue}
        >
          {field.component === "rate" ? (
            <Rate allowHalf />
          ) : (
            <Input placeholder={field.placeholder} type={field.type} />
          )}
        </Form.Item>
      ))}
    </Form>
  );
};

export default FormFields;
