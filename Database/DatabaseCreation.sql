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

CREATE TABLE public.tipocomidas (
    id integer NOT NULL,
    name character varying
);
CREATE SEQUENCE public.tipocomidas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tipocomidas_id_seq OWNED BY public.tipocomidas.id;
ALTER TABLE ONLY public.tipocomidas ALTER COLUMN id SET DEFAULT nextval('public.tipocomidas_id_seq'::regclass);
ALTER TABLE ONLY public.tipocomidas
    ADD CONSTRAINT tipocomidas_pkey PRIMARY KEY (id);


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
        ON DELETE SET NULL,
    id_tipocomida integer,
    CONSTRAINT fk_restaurantes_tipocomidas FOREIGN KEY (id_tipocomida) 
        REFERENCES public.tipocomidas(id)
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


CREATE TABLE public.restaurantes_tipocomidas (
    id integer NOT NULL,
    id_restaurante integer,
    CONSTRAINT fk_restaurantes_tipocomidas_restaurantes FOREIGN KEY (id_restaurante) 
        REFERENCES public.restaurantes(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    id_tipocomida integer,
    CONSTRAINT fk_restaurantes_tipocomidas_tipocomidas FOREIGN KEY (id_tipocomida) 
        REFERENCES public.tipocomidas(id)
        ON UPDATE CASCADE
        ON DELETE SET NULL
);
CREATE SEQUENCE public.restaurantes_tipocomidas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.restaurantes_tipocomidas_id_seq OWNED BY public.restaurantes_tipocomidas.id;
ALTER TABLE ONLY public.restaurantes_tipocomidas ALTER COLUMN id SET DEFAULT nextval('public.restaurantes_tipocomidas_id_seq'::regclass);
ALTER TABLE ONLY public.restaurantes_tipocomidas
    ADD CONSTRAINT restaurantes_tipocomidas_pkey PRIMARY KEY (id);



INSERT INTO public.tipocomidas (name)
VALUES 
  ('Comida rápida'),
  ('Comida típica'),
  ('Comida internacional'),
  ('Comida gourmet'),
  ('Comida vegetariana'),
  ('Comida vegana'),
  ('Comida sin gluten'),
  ('Comida sin lactosa'),
  ('Comida para celíacos'),
  ('Comida para diabéticos');

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

INSERT INTO public.restaurantes (name, location, webLink, image, id_departamento)
VALUES 
  ('Restaurante 1', 'Ubicación 1', 'http://restaurante1.com', 'http://restaurante1.com/image.jpg', 1),
  ('Restaurante 2', 'Ubicación 2', 'http://restaurante2.com', 'http://restaurante2.com/image.jpg', 2),
  ('Restaurante 3', 'Ubicación 3', 'http://restaurante3.com', 'http://restaurante3.com/image.jpg', 3),
  ('Restaurante 4', 'Ubicación 4', 'http://restaurante4.com', 'http://restaurante4.com/image.jpg', 4),
  ('Restaurante 5', 'Ubicación 5', 'http://restaurante5.com', 'http://restaurante5.com/image.jpg', 5);

  
INSERT INTO public.restaurantes_tipocomidas (id_restaurante, id_tipocomida)
VALUES
(1, 2),
(1, 3),
(2, 1),
(2, 4),
(3, 5);