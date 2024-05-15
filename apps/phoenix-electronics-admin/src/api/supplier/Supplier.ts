import { Product } from "../product/Product";

export type Supplier = {
  contactEmail: string | null;
  contactPhone: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
