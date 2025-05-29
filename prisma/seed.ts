import { PrismaClient } from '@prisma/client';
import seedAdmin from './seeders/admin';
import seedDomaine from './seeders/domaineEtude';
import seedEtablissement from './seeders/etablissement';

const prisma = new PrismaClient();

async function main() {
  await seedDomaine(prisma);
  await seedAdmin(prisma);
  await seedEtablissement(prisma);
  console.log('✅ Tous les seeds exécutés avec succès');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
