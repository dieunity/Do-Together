CREATE TABLE "users" (
	"_id" serial,
	"username" VARCHAR(255) NOT NULL UNIQUE,
	"first_name" VARCHAR(255) DEFAULT 'User',
	"last_name" VARCHAR(255) DEFAULT 'testLastName',
	"zip_code" integer DEFAULT '90024',
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "collections" (
	"_id" serial NOT NULL,
	"owner" integer NOT NULL,
	"name" VARCHAR(255),
	"color" VARCHAR(255) DEFAULT 'TrueBlue',
	CONSTRAINT "collections_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tasks" (
	"_id" integer NOT NULL,
	"collection_id" integer NOT NULL,
	"adult_wallet_id" integer NOT NULL,
	"description" VARCHAR(200) NOT NULL,
	"reward_jar" integer NOT NULL DEFAULT '0',
	"complete_status" BOOLEAN,
	CONSTRAINT "tasks_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "adult_wallet" (
	"_id" serial NOT NULL,
	"adult_tokens" integer NOT NULL DEFAULT '50',
	"owner" integer NOT NULL,
	CONSTRAINT "adult_wallet_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "collections" ADD CONSTRAINT "collections_fk0" FOREIGN KEY ("owner") REFERENCES "users"("_id");

ALTER TABLE "tasks" ADD CONSTRAINT "tasks_fk0" FOREIGN KEY ("collection_id") REFERENCES "collections"("_id");
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_fk1" FOREIGN KEY ("adult_wallet_id") REFERENCES "adult_wallet"("_id");

ALTER TABLE "adult_wallet" ADD CONSTRAINT "adult_wallet_fk0" FOREIGN KEY ("owner") REFERENCES "users"("_id");
