export type Partner = {
  id: string;
  name: string;
  email: string;
  phone: string;
  baseRate: number;
  deliverySpeed: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface FieldConfig {
  label: string;
  name: string;
  layout?: "vertical" | "horizontal";
  rules: Array<{ required: boolean; message: string }>;
  placeholder?: string;
  type?: "email" | "number" | "text";
  initialValue?: number;
  component?: "rate" | "input";
  width?: string;
}
