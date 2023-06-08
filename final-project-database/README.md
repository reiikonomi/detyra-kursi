# Ky eshte projekti final per lenden Database Design Concepts.

# Per te shoqeruar databazen eshte krijuar metoda e authentication/login/signup me jwt auth tokens dhe eshte krijuar nje REST API qe kap te gjitha tabelat dhe marredheniet midis tyre!

### Entitetet qe definojne tabelat fizike ndodhen ne folderin packages/models/src/lib/entities

### Eshte ndjekur metoda code first database generation e cila qe nga emri sygjeron menyren e krijimit te databases; Nepermjet klasave te cilat jane "annotated" me vleren Entity, nje shembull i vogel:
```javascript
@Entity()
export class TableToBeCreatedInDatabase {
  
  @PrimaryGeneratedColumn('uuid')
  id!: number;
  
  @Column({ nullable: false })
  first_name: string;
  
}
```

### Databaza eshte Postgres, neqoftese deshironi te startoni aplikacionin atehere duhet te ndiqni disa hapa (Duke asumuar qe keni PostgreSql dhe Node.js ne kompjuterin tuaj):
* Instaloni librarite nga terminali
```powershell
npm install
```
* Ne file models.ts ne folderin packages/models/src/lib/ zevendesoni kredencialet qe jane me kredencialet tuaja te postgresql (Note: Gjenerimi i databazes behet automatikisht pa nevojen e migrimeve)
```typescript
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: "postgres",
      host: "<INSERT_HOST_HERE>", // or localhost
      port: <INSERT_PORT_HERE>, // default postgres port 5432
      username: "<INSERT_USERNAME_HERE>",
      password: "<INSERT_PASSWORD_HERE>",
      database: "<INSERT_DATABASE_NAME_HERE>",
      entities: [
       ....
      ],
      migrations: ['./database/migrations'],
      migrationsTableName: "migrations",
      extra: {
        charset: 'utf8mn4_unicode_ci'
      },
      synchronize: true, // Kjo linje kodi mundeson krijimin e databases pa eksekutuar migrime
      logging: true, // Ne console mund te shikoni queries qe behen ne database per cdo request
    }
  }
}
```
* Eksekutoni komanden nga terminali dhe aplikacioni eshte gati:
```powershell
npm run recruiting-api:serve:dev
```
