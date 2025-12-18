import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 255 })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "int", default: 0 })
  quantity!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "text", nullable: true })
  createdByUser!: string;
}