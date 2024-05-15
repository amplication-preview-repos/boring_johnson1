import { ProductUpdateManyWithoutSuppliersInput } from "./ProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contactEmail?: string | null;
  contactPhone?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutSuppliersInput;
};
