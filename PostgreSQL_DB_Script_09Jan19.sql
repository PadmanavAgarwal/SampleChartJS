Table_Creation
------------------------------
CREATE TABLE public."TBL_USER_DETAILS"
(
    "USER_ID" bigint NOT NULL DEFAULT nextval('"TBL_USER_DETAILS_USER_ID_seq"'::regclass),
    "FIRST_NAME" character varying(20) COLLATE "default".pg_catalog NOT NULL,
    "MIDDLE_NAME" character varying(20) COLLATE "default".pg_catalog,
    "LAST_NAME" character varying(20) COLLATE "default".pg_catalog,
    "PHONE_NUMBER" character varying(10) COLLATE "default".pg_catalog,
    "GENDER" character varying(1) COLLATE "default".pg_catalog NOT NULL,
    "PASSWORD" character varying(20) COLLATE "default".pg_catalog NOT NULL,
    CONSTRAINT "TBL_USER_DETAILS_pkey" PRIMARY KEY ("USER_ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."TBL_USER_DETAILS"
    OWNER to postgres;
	
	
Insert_Query 
-------------------------------
INSERT INTO public."TBL_USER_DETAILS"("FIRST_NAME", "MIDDLE_NAME", "LAST_NAME", "PHONE_NUMBER", "GENDER", "PASSWORD") VALUES ('Tathagata', null, 'Hazra', '9474080472', 'M', '123');
INSERT INTO public."TBL_USER_DETAILS"("FIRST_NAME", "MIDDLE_NAME", "LAST_NAME", "PHONE_NUMBER", "GENDER", "PASSWORD") VALUES ('Partha', 'Sarathi', 'Hazra', '8334836360', 'M', '123');