import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  contactEmail?: SortOrder;
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
