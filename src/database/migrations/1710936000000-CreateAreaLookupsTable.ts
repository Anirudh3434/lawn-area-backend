import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAreaLookupsTable1710936000000 implements MigrationInterface {
  name = 'CreateAreaLookupsTable1710936000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'area_lookups',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'latitude',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'longitude',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'area_m2',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'area_ft2',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    // Create index on created_at for faster history queries
    await queryRunner.query(
      `CREATE INDEX "IDX_area_lookups_created_at" ON "area_lookups" ("created_at" DESC)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_area_lookups_created_at"`);
    await queryRunner.dropTable('area_lookups');
  }
}
