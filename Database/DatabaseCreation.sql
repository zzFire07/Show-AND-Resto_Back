SET statement_timeout = 30000; -- 30 segundos
SET lock_timeout = 5000; -- 5 segundos
SET idle_in_transaction_session_timeout = 60000; -- 1 minuto
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = on;
SET default_tablespace = '';
SET default_table_access_method = heap;

CREATE TABLE public.restaurant (
    id integer NOT NULL,
    name character varying,
    location character varying,
    link character varying,
    image character varying
);

CREATE SEQUENCE public.restaurantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurantes_id_seq OWNED BY public.restaurant.id;

CREATE TABLE public.show (
    id integer NOT NULL,
    name character varying,
    location character varying,
    link character varying,
    image character varying
);

CREATE SEQUENCE public.show_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.show_id_seq OWNED BY public.show.id;

ALTER TABLE ONLY public.restaurant ALTER COLUMN id SET DEFAULT nextval('public.restaurantes_id_seq'::regclass);
ALTER TABLE ONLY public.show ALTER COLUMN id SET DEFAULT nextval('public.show_id_seq'::regclass);

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurantes_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.show
    ADD CONSTRAINT show_pkey PRIMARY KEY (id);