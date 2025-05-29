import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function seedEtablissement(prisma: PrismaClient)  {
  const etablissements = [
    { libelle: 'Institut Supérieur des Études Technologiques de Bizerte' },
    { libelle: 'Institut Supérieur des Études Technologiques de Charguia' },
    { libelle: 'Institut Supérieur des Études Technologiques de Djerba' },
    { libelle: 'Institut Supérieur des Études Technologiques de Gabès' },
    { libelle: 'Institut Supérieur des Études Technologiques de Gafsa' },
    { libelle: 'Institut Supérieur des Études Technologiques de Jendouba' },
    { libelle: 'Institut Supérieur des Études Technologiques de Kairouan' },
    { libelle: 'Institut Supérieur des Études Technologiques de Kasserine' },
    { libelle: 'Institut Supérieur des Études Technologiques de Kebili' },
    { libelle: 'Institut Supérieur des Études Technologiques de Kef' },
    { libelle: 'Institut Supérieur des Études Technologiques de Ksar Hellal' },
    { libelle: 'Institut Supérieur des Études Technologiques de Mahdia' },
    { libelle: 'Institut Supérieur des Études Technologiques de Médenine' },
    { libelle: 'Institut Supérieur des Études Technologiques de Nabeul' },
    { libelle: 'Institut Supérieur des Études Technologiques de Radès' },
    { libelle: 'Institut Supérieur des Études Technologiques de Sfax' },
    { libelle: 'Institut Supérieur des Études Technologiques de Sidi Bouzid' },
    { libelle: 'Institut Supérieur des Études Technologiques de Siliana' },
    { libelle: 'Institut Supérieur des Études Technologiques de Sousse' },
    { libelle: 'Institut Supérieur des Études Technologiques de Tataouine' },
    { libelle: 'Institut Supérieur des Études Technologiques de Tozeur' },
    { libelle: 'Institut Supérieur des Études Technologiques de Zaghouan' },
    {
      libelle:
        'Institut Supérieur des Études Technologiques en Communications (El Ghazala)',
    },

    { libelle: 'Faculté des Sciences de Tunis' },
    { libelle: 'Faculté des Lettres et des Sciences Humaines de Sfax' },
    { libelle: 'Faculté des Sciences Économiques et de Gestion de Nabeul' },
    { libelle: 'Université Privée de Tunis (UPT)' },
    { libelle: 'Université Centrale' },
    { libelle: 'Université Internationale de Tunis (UIT)' },
    { libelle: 'Université Méditerranéenne de Tunis' },
    { libelle: 'Université Privée de Sfax (UPS)' },
    { libelle: 'Université Privée de Sousse' },
    { libelle: 'Université Tunis Carthage (UTC)' },
    { libelle: 'Université Ibn Khaldoun (UIK)' },
    { libelle: 'Université Paris-Dauphine Tunis' },
    { libelle: 'South Mediterranean University (SMU)' },
    { libelle: 'Institut Privé des Hautes Études de Tunis (IHE)' },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Sousse (ISIS)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Kairouan (ISPSIK)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Hammam Sousse (ISIS)',
    },
    {
      libelle:
        "Institut Supérieur Privé des Sciences Infirmières 'Étoile de Formation' – Sousse",
    },
    {
      libelle:
        'École Supérieure Privée de Technologie et de Management – Tunis (Suptech)',
    },
    {
      libelle:
        "École Supérieure Privée d'Ingénierie et des Études Technologiques – Tunis (UAS)",
    },
    {
      libelle:
        'École Supérieure Privée de Carthage des Sciences et d’Ingénierie – Tunis (UTC)',
    },
    {
      libelle:
        'École Supérieure Privée de Carthage de Management – Tunis (UTC)',
    },
    {
      libelle:
        'École Supérieure Privée d’Administration des Affaires et de Droit (APBS)',
    },
    {
      libelle:
        'École Supérieure Privée des Sciences Appliquées et de Technologie de Gabès (ESSAT)',
    },
    {
      libelle:
        'École Supérieure Privée d’Ingénierie, des Sciences et de Technologie de Sousse (ESPITA)',
    },
    { libelle: 'École Supérieure Privée Polytechnique Ibn Khaldoun (UIK)' },
    {
      libelle:
        'École Internationale Supérieure Privée Polytechnique de Sousse (EPI)',
    },
    {
      libelle:
        'École Supérieure Privée des Sciences Appliquées et de Management – Tunis (Sesame)',
    },
    { libelle: 'Institut Supérieur Privé Tunis Dauphine – Tunis' },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Paramédicales Mahmoud Materi – Tunis (UMM)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences de la Santé de Sousse (Upsat)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Kairouan (ISPSIK)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Hammam Sousse (ISIS)',
    },
    {
      libelle:
        "Institut Supérieur Privé des Sciences Infirmières 'Étoile de Formation' – Sousse",
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Sousse (ISIS)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Sfax (FPSP)',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Paramédicales de Sfax (FPSP)',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Gabès' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Gafsa' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Monastir',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Nabeul' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Bizerte' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Kasserine',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Kef' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Mahdia' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Médenine',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Sidi Bouzid',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Siliana' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Tozeur' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Zaghouan',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Tataouine',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Jendouba',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Béja' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Kébili' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Manouba' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Ariana' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Ben Arous',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de La Marsa',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de El Mourouj',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Ezzahra' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Hammamet',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Menzel Bourguiba',
    },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Menzel Temime',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Nefza' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Ras Jebel',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Soliman' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Takelsa' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Tebourba',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Testour' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Zaghouan',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Zarzis' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de El Kef' },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Ghardimaou',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Jendouba',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Kairouan',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Kasserine',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Mahdia' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Médenine',
    },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Monastir',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Nabeul' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Sfax' },
    {
      libelle:
        'Institut Supérieur Privé des Sciences Infirmières de Sidi Bouzid',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Siliana' },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Sousse' },
    {
      libelle: 'Institut Supérieur Privé des Sciences Infirmières de Tataouine',
    },
    { libelle: 'Institut Supérieur Privé des Sciences Infirmières de Tozeur' },
  ];
 
  try {
    await prisma.etablissement.createMany({
      data: etablissements,
      skipDuplicates: true 
    });
    console.log('Établissements insérés avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des établissements:', error);
  } finally {
    await prisma.$disconnect();
  }
}

