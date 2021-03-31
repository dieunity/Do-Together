CREATE TABLE "Users" (
	"_ID" serial,
	"userID" VARCHAR(255) NOT NULL UNIQUE,
	"firstName" VARCHAR(255) DEFAULT 'User',
	"lastName" VARCHAR(255) DEFAULT 'testLastName',
	"ZipCode" integer DEFAULT '90024',
	CONSTRAINT "Users_pk" PRIMARY KEY ("_ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Todo List Collections" (
	"_id" serial NOT NULL,
	"CollectionOwner" integer NOT NULL,
	"CollectionName" VARCHAR(255),
	"CollectionColor" VARCHAR(255) DEFAULT 'TrueBlue',
	CONSTRAINT "Todo List Collections_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Tasks" (
	"_id" integer NOT NULL,
	"Task Collection" integer NOT NULL,
	"AdultWalletID" integer NOT NULL,
	"Task description" VARCHAR(200) NOT NULL,
	"Reward Jar" integer NOT NULL DEFAULT '0',
	"Completion Status" BOOLEAN,
	CONSTRAINT "Tasks_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "AdultWallet" (
	"_WalletID" serial NOT NULL,
	"AdultTokens" integer NOT NULL DEFAULT '50',
	"WalletOwner" integer NOT NULL,
	CONSTRAINT "AdultWallet_pk" PRIMARY KEY ("_WalletID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Todo List Collections" ADD CONSTRAINT "Todo List Collections_fk0" FOREIGN KEY ("CollectionOwner") REFERENCES "Users"("_ID");

ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_fk0" FOREIGN KEY ("Task Collection") REFERENCES "Todo List Collections"("_id");
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_fk1" FOREIGN KEY ("AdultWalletID") REFERENCES "AdultWallet"("_WalletID");

ALTER TABLE "AdultWallet" ADD CONSTRAINT "AdultWallet_fk0" FOREIGN KEY ("WalletOwner") REFERENCES "Users"("_ID");

