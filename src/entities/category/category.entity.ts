import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

// Entities
import { BaseEntity } from '../base/base.entity';

@Entity('catogries', { orderBy: { id: 'DESC' } })
export class Category extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 100, nullable: false })
  @Unique(['name'])
  name: string;

  @Column({ length: 100, nullable: false })
  @Unique(['type'])
  type: string;

  @Column({ default: false })
  isDeleted: boolean;

  toJSON() {
    delete this.isDeleted;
    return this;
  }

}
