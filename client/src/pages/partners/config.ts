interface FieldConfig {
  label: string;
  name: string;
  layout?: "vertical" | "horizontal";
  rules: Array<{ required: boolean; message: string }>;
  placeholder?: string;
  type?: "email" | "number" | "text";
  initialValue?: number;
  component?: "rate" | "input";
}

export const formFieldsConfig: FieldConfig[] = [
  {
    label: "Name",
    name: "name",
    layout: "vertical",
    rules: [{ required: true, message: "Please enter the name" }],
    placeholder: "Enter the name",
    component: "input",
  },
  {
    label: "Email",
    name: "email",
    layout: "vertical",
    rules: [{ required: true, message: "Please enter the email" }],
    placeholder: "Enter the email",
    type: "email",
    component: "input",
  },
  {
    label: "Phone",
    name: "phone",
    layout: "vertical",
    rules: [{ required: true, message: "Please enter the phone" }],
    placeholder: "Enter the phone",
    component: "input",
  },
  {
    label: "Base Rate",
    name: "baseRate",
    layout: "vertical",
    rules: [{ required: true, message: "Please enter the base rate" }],
    placeholder: "Enter the base rate",
    type: "number",
    component: "input",
  },
  {
    label: "Delivery Speed",
    name: "deliverySpeed",
    layout: "vertical",
    rules: [{ required: true, message: "Please enter the delivery speed" }],
    placeholder: "Enter the delivery speed",
    component: "input",
  },
  {
    label: "Rating",
    name: "rating",
    rules: [{ required: true, message: "Please enter the rating" }],
    initialValue: 0,
    component: "rate",
  },
];
