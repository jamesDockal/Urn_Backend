import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Elector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("string")
  name: string;

  @Column("boolean", { default: false })
  hasVoted: boolean;
}
