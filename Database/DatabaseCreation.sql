SET statement_timeout = 30000;
SET lock_timeout = 5000;
SET idle_in_transaction_session_timeout = 60000;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = on;
SET default_tablespace = '';
SET default_table_access_method = heap;

CREATE TABLE public.departamentos (
    id integer NOT NULL,
    name character varying
);

CREATE SEQUENCE public.departamentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.departamentos_id_seq OWNED BY public.departamentos.id;
ALTER TABLE ONLY public.departamentos ALTER COLUMN id SET DEFAULT nextval('public.departamentos_id_seq'::regclass);
ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT departamentos_pkey PRIMARY KEY (id);

CREATE TABLE public.restaurantes (
    id integer NOT NULL,
    name character varying,
    location character varying,
    webLink character varying,
    image character varying,
    id_departamento integer,
    CONSTRAINT fk_shows_departamentos FOREIGN KEY (id_departamento) 
        REFERENCES public.departamentos(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE SEQUENCE public.restaurantes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurantes_id_seq OWNED BY public.restaurantes.id;
ALTER TABLE ONLY public.restaurantes ALTER COLUMN id SET DEFAULT nextval('public.restaurantes_id_seq'::regclass);
ALTER TABLE ONLY public.restaurantes
    ADD CONSTRAINT restaurantes_pkey PRIMARY KEY (id);

CREATE TABLE public.shows (
    id integer NOT NULL,
    name character varying,
    location character varying,
    webLink character varying,
    image character varying,
    id_departamento integer,
    CONSTRAINT fk_shows_departamentos FOREIGN KEY (id_departamento) 
        REFERENCES public.departamentos(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);

CREATE SEQUENCE public.shows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.shows_id_seq OWNED BY public.shows.id;
ALTER TABLE ONLY public.shows ALTER COLUMN id SET DEFAULT nextval('public.shows_id_seq'::regclass);
ALTER TABLE ONLY public.shows
    ADD CONSTRAINT shows_pkey PRIMARY KEY (id);

INSERT INTO public.departamentos (name)
VALUES 
  ('Artigas'),
  ('Canelones'),
  ('Cerro Largo'),
  ('Colonia'),
  ('Durazno'),
  ('Flores'),
  ('Florida'),
  ('Lavalleja'),
  ('Maldonado'),
  ('Montevideo'),
  ('Paysandú'),
  ('Río Negro'),
  ('Rivera'),
  ('Rocha'),
  ('Salto'),
  ('San José'),
  ('Soriano'),
  ('Tacuarembó'),
  ('Treinta y Tres');
