import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('area_lookups')
export class AreaLookup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('float')
  area_m2: number;

  @Column('float')
  area_ft2: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
