import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const domainesEtudes = [
  { libelle : 'Informatique' },
  { libelle: 'Télécommunications' },
  { libelle: 'Génie Civil' },
  { libelle: 'Électromécanique' },
  { libelle: 'Électronique' },
  { libelle: 'Automatique et Informatique Industrielle' },
  { libelle: 'Finance' },
  { libelle: 'Comptabilité' },
  { libelle: 'Marketing' },
  { libelle: 'Management' },
  { libelle: 'Droit' },
  { libelle: 'Sciences Politiques' },
  { libelle: 'Médecine' },
  { libelle: 'Pharmacie' },
  { libelle: 'Dentisterie' },
  { libelle: 'Sciences Biologiques' },
  { libelle: 'Chimie' },
  { libelle: 'Physique' },
  { libelle: 'Mathématiques' },
  { libelle: 'Sciences de l’Éducation' },
  { libelle: 'Langues Étrangères' },
  { libelle: 'Lettres' },
  { libelle: 'Architecture' },
  { libelle: 'Design' },
  { libelle: 'Agronomie' },
  { libelle: 'Environnement' },
  { libelle: 'Tourisme et Hôtellerie' }
];

export default async function seedDomaine(prisma: PrismaClient)  {
  for (const domaine of domainesEtudes) {
    await prisma.domaineEtude.upsert({
      where: { libelle: domaine.libelle },
      update: {},
      create: domaine
    });
  }
  console.log('✅ Domaines d\'études insérés avec succès');
}

