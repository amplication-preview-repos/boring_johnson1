/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Product as PrismaProduct,
  Order as PrismaOrder,
  Category as PrismaCategory,
  Supplier as PrismaSupplier,
} from "@prisma/client";

export class ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProductCountArgs, "select">): Promise<number> {
    return this.prisma.product.count(args);
  }

  async products<T extends Prisma.ProductFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>
  ): Promise<PrismaProduct[]> {
    return this.prisma.product.findMany<Prisma.ProductFindManyArgs>(args);
  }
  async product<T extends Prisma.ProductFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductFindUniqueArgs>
  ): Promise<PrismaProduct | null> {
    return this.prisma.product.findUnique(args);
  }
  async createProduct<T extends Prisma.ProductCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductCreateArgs>
  ): Promise<PrismaProduct> {
    return this.prisma.product.create<T>(args);
  }
  async updateProduct<T extends Prisma.ProductUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductUpdateArgs>
  ): Promise<PrismaProduct> {
    return this.prisma.product.update<T>(args);
  }
  async deleteProduct<T extends Prisma.ProductDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductDeleteArgs>
  ): Promise<PrismaProduct> {
    return this.prisma.product.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.product
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getSupplier(parentId: string): Promise<PrismaSupplier | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .supplier();
  }
}
