import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WaterConsumption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('float')
  consumption: number;

  @Column()
  date: Date;
}
