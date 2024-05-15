import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactEmail?: string | null;
  contactPhone?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
};
