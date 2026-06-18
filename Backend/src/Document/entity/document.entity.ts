import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "src/users/entity/user.entity";

export enum DocumentStatus {
  UPLOADED = "UPLOADED",
  SIGNED = "SIGNED",
}

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  filePath: string;

  @Column({ nullable: true })
  signedFilePath: string;

  @Column({
    type: "enum",
    enum: DocumentStatus,
    default: DocumentStatus.UPLOADED,
  })
  status: DocumentStatus;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}