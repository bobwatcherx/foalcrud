// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MyApp extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama:string;

  @Column()
  alamat:string;
}
