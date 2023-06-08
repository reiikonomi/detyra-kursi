import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export * from './dto';
export * from './interfaces';
export * from './decorators';
export * from './enums';
export * from './guards';

import {
  User,
  Course,
  Education,
  Experience,
  Profile,
  Skills,
  Tecchnologies,
  Company,
  Post,
  Interview,
} from './entities';

export * from './entities';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'recruiting_test',
      entities: [
        User,
        Course,
        Education,
        Experience,
        Profile,
        Skills,
        Tecchnologies,
        Company,
        Post,
        Interview,
      ],
      migrations: ['./database/migrations'],
      migrationsTableName: 'migrations',
      extra: {
        charset: 'utf8mn4_unicode_ci',
      },
      synchronize: true,
      logging: true,
    };
  },
};
