-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "signUpUrl" TEXT NOT NULL,
    "eventDate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventHour" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_signUpUrl_key" ON "Event"("signUpUrl");
