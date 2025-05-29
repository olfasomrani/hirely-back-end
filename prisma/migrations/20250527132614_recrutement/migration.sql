-- CreateEnum
CREATE TYPE "Mention" AS ENUM ('passable', 'assez_bien', 'bien', 'tres_bien', 'excellent');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('debutant', 'intermediare', 'avancée');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'recruteur', 'candidat');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "birthDate" TIMESTAMP(3),
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recruiter" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT,
    "position" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Recruiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "resumeUrl" TEXT,
    "experience" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" DECIMAL(10,2) NOT NULL,
    "image" TEXT,
    "recruiterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "jobOfferId" INTEGER NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "recruiterId" INTEGER NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Information_General" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3),
    "adress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "profilId" INTEGER NOT NULL,

    CONSTRAINT "Information_General_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formation" (
    "id" SERIAL NOT NULL,
    "profilId" INTEGER NOT NULL,
    "etablissementId" INTEGER NOT NULL,
    "domainId" INTEGER NOT NULL,
    "diploma" TEXT NOT NULL,
    "startYear" TEXT NOT NULL,
    "endYear" TEXT NOT NULL,
    "mention" "Mention" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DomaineEtude" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,

    CONSTRAINT "DomaineEtude_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etablissement" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,

    CONSTRAINT "Etablissement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "profilId" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "startYear" TEXT NOT NULL,
    "endYear" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competence_Technique" (
    "id" SERIAL NOT NULL,
    "profilId" INTEGER NOT NULL,
    "libelle" TEXT NOT NULL,
    "level" "Level" NOT NULL,

    CONSTRAINT "Competence_Technique_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competence_Linguistique" (
    "id" SERIAL NOT NULL,
    "profilId" INTEGER NOT NULL,
    "libelle" TEXT NOT NULL,
    "level" "Level" NOT NULL,

    CONSTRAINT "Competence_Linguistique_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competence_Personnel" (
    "id" SERIAL NOT NULL,
    "profilId" INTEGER NOT NULL,
    "libelle" TEXT NOT NULL,

    CONSTRAINT "Competence_Personnel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "cv" TEXT NOT NULL,
    "cover_letter" TEXT NOT NULL,
    "diploma" TEXT NOT NULL,
    "cin" TEXT NOT NULL,
    "profilId" INTEGER NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_userId_key" ON "Recruiter"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_userId_key" ON "Candidate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_candidateId_key" ON "Profil"("candidateId");

-- CreateIndex
CREATE UNIQUE INDEX "Information_General_profilId_key" ON "Information_General"("profilId");

-- CreateIndex
CREATE UNIQUE INDEX "DomaineEtude_libelle_key" ON "DomaineEtude"("libelle");

-- CreateIndex
CREATE UNIQUE INDEX "Documents_profilId_key" ON "Documents"("profilId");

-- AddForeignKey
ALTER TABLE "Recruiter" ADD CONSTRAINT "Recruiter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobOffer" ADD CONSTRAINT "JobOffer_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Information_General" ADD CONSTRAINT "Information_General_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "DomaineEtude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_etablissementId_fkey" FOREIGN KEY ("etablissementId") REFERENCES "Etablissement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formation" ADD CONSTRAINT "Formation_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competence_Technique" ADD CONSTRAINT "Competence_Technique_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competence_Linguistique" ADD CONSTRAINT "Competence_Linguistique_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competence_Personnel" ADD CONSTRAINT "Competence_Personnel_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
