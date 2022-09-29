--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: individuals; Type: TABLE; Schema: public; Owner: tpl522_3
--

-- CREATE TABLE public.individuals (
--     id integer NOT NULL,
--     nick_name character varying(50),
--     seen_on timestamp without time zone,
--     species_id integer
-- );


-- ALTER TABLE public.individuals OWNER TO tpl522_3;

-- --
-- -- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
-- --

-- CREATE SEQUENCE public.individuals_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.individuals_id_seq OWNER TO tpl522_3;

-- --
-- -- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_3
-- --

-- ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


-- --
-- -- Name: sightings; Type: TABLE; Schema: public; Owner: tpl522_3
-- --

-- CREATE TABLE public.sightings (
--     id integer NOT NULL,
--     date_time timestamp without time zone,
--     location character varying(50),
--     healthy boolean,
--     individual_id integer,
--     created_on date,
--     email character varying(50)
-- );


-- ALTER TABLE public.sightings OWNER TO tpl522_3;

-- --
-- -- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
-- --

-- CREATE SEQUENCE public.sightings_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.sightings_id_seq OWNER TO tpl522_3;

-- --
-- -- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_3
-- --

-- ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


-- --
-- -- Name: species; Type: TABLE; Schema: public; Owner: tpl522_3
-- --

-- CREATE TABLE public.species (
--     id integer NOT NULL,
--     common_name character varying(50),
--     scientific_name character varying(50),
--     population character varying(50),
--     conservation_status character varying(2),
--     created_on timestamp with time zone DEFAULT CURRENT_TIMESTAMP
-- );


-- ALTER TABLE public.species OWNER TO tpl522_3;

-- --
-- -- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_3
-- --

-- CREATE SEQUENCE public.species_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.species_id_seq OWNER TO tpl522_3;

-- --
-- -- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_3
-- --

-- ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


-- --
-- -- Name: individuals id; Type: DEFAULT; Schema: public; Owner: tpl522_3
-- --

-- ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


-- --
-- -- Name: sightings id; Type: DEFAULT; Schema: public; Owner: tpl522_3
-- --

-- ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


-- --
-- -- Name: species id; Type: DEFAULT; Schema: public; Owner: tpl522_3
-- --

-- ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


-- --
-- -- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: tpl522_3
-- --

-- COPY public.individuals (id, nick_name, seen_on, species_id) FROM stdin;
-- 1	Anny	2022-01-01 00:00:00	1
-- 2	Gabriell	2021-10-15 00:00:00	2
-- 3	Nani	2021-07-02 00:00:00	1
-- 4	Leonanie	2021-07-11 00:00:00	2
-- 5	Duffie	2021-04-25 00:00:00	3
-- 6	Marshall	2021-06-29 00:00:00	3
-- 7	Sophia	2021-06-01 00:00:00	4
-- 8	Angie	2021-04-30 00:00:00	4
-- 9	Lion	2021-12-28 00:00:00	4
-- 10	Robinette	2021-07-16 00:00:00	5
-- 11	Lindi	2021-10-03 00:00:00	6
-- 12	Duffy	2021-08-04 00:00:00	6
-- 13	Ax	2021-06-13 00:00:00	7
-- 14	Kelly	2021-06-28 00:00:00	7
-- 15	Ulrika	2022-04-01 00:00:00	8
-- 16	Helyn	2021-05-06 00:00:00	8
-- 17	Keefer	2021-05-14 00:00:00	9
-- 18	Johan	2021-08-16 00:00:00	9
-- 19	Casey	2022-02-10 00:00:00	10
-- 20	Udall	2022-03-08 00:00:00	10
-- \.


-- --
-- -- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: tpl522_3
-- --

-- COPY public.sightings (id, date_time, location, healthy, individual_id, created_on, email) FROM stdin;
-- 1	2021-06-25 00:00:00	Westport	t	1	2021-06-14	hfeldmus0@cdbaby.com
-- 2	2022-03-30 00:00:00	Express	t	2	2022-04-15	cupstone1@telegraph.co.uk
-- 3	2021-08-17 00:00:00	Homewood	f	3	2021-06-12	fspreckley2@elegantthemes.com
-- 4	2021-10-31 00:00:00	Waywood	t	4	2021-04-26	dcarlucci3@tiny.cc
-- 5	2021-10-19 00:00:00	Duke	f	5	2022-01-10	jstracey4@blog.com
-- 6	2022-04-06 00:00:00	Amoth	f	6	2022-02-22	jbelding5@ow.ly
-- 7	2021-10-26 00:00:00	Porter	f	7	2021-10-03	agerritsma6@desdev.cn
-- 8	2021-06-27 00:00:00	Brentwood	f	8	2022-04-04	kboness7@gmpg.org
-- 9	2022-04-05 00:00:00	Hayes	t	9	2021-12-27	tlarver8@comsenz.com
-- 10	2021-09-10 00:00:00	Lighthouse Bay	t	10	2021-08-31	lmacmichael9@free.fr
-- 11	2021-09-23 00:00:00	Mariners Cove	f	11	2021-04-27	smeneoa@studiopress.com
-- 12	2021-05-23 00:00:00	Huxley	f	12	2022-03-28	mcursonb@jimdo.com
-- 13	2021-06-06 00:00:00	Mayer	f	13	2021-12-31	bedgertonc@wikipedia.org
-- 14	2021-05-26 00:00:00	Portage	f	14	2021-07-15	spersenced@ezinearticles.com
-- 15	2021-12-15 00:00:00	Vahlen	t	15	2021-08-18	mladewige@ameblo.jp
-- 16	2022-02-14 00:00:00	School	f	16	2021-05-02	bhannef@samsung.com
-- 17	2022-02-21 00:00:00	Goodland	t	17	2021-09-08	smaccrossong@themeforest.net
-- 18	2022-02-02 00:00:00	Spenser	f	18	2022-04-12	plansdowneh@webs.com
-- 19	2021-10-21 00:00:00	Hoepker	t	19	2021-06-04	nwillmetti@fda.gov
-- 20	2022-03-05 00:00:00	Sunnyside	f	20	2022-02-28	fgarbuttj@mediafire.com
-- 21	2022-09-28 09:41:00	Los Angeles	t	2	2022-09-28	doli@gmail.com
-- \.


-- --
-- -- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: tpl522_3
-- --

-- COPY public.species (id, common_name, scientific_name, population, conservation_status, created_on) FROM stdin;
-- 2	Vine snake (unidentified)	Oxybelis sp.	985	CE	2022-02-15 00:00:00-08
-- 3	European badger	Meles meles	489	CE	2021-10-27 00:00:00-07
-- 4	Baboon, yellow	Papio cynocephalus	85	CE	2021-10-14 00:00:00-07
-- 5	Black curlew	Haematopus ater	530	CE	2022-02-01 00:00:00-08
-- 6	Brazilian otter	Pteronura brasiliensis	09	CE	2022-03-29 00:00:00-07
-- 7	Ring-necked pheasant	Phasianus colchicus	2529	CE	2021-05-29 00:00:00-07
-- 8	American beaver	Castor canadensis	257	CE	2021-07-21 00:00:00-07
-- 9	European badger	Meles meles	9	CE	2021-08-13 00:00:00-07
-- 10	Scaly-breasted lorikeet	Trichoglossus chlorolepidotus	919	CE	2021-05-15 00:00:00-07
-- 1	Leo, indian	P pardus	500	CE	2022-01-21 00:00:00-08
-- \.


-- --
-- -- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
-- --

-- SELECT pg_catalog.setval('public.individuals_id_seq', 20, true);


-- --
-- -- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
-- --

-- SELECT pg_catalog.setval('public.sightings_id_seq', 20, true);


-- --
-- -- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_3
-- --

-- SELECT pg_catalog.setval('public.species_id_seq', 10, true);


-- --
-- -- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
-- --

-- ALTER TABLE ONLY public.individuals
--     ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


-- --
-- -- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
-- --

-- ALTER TABLE ONLY public.sightings
--     ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


-- --
-- -- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_3
-- --

-- ALTER TABLE ONLY public.species
--     ADD CONSTRAINT species_pkey PRIMARY KEY (id);


-- --
-- -- PostgreSQL database dump complete
-- --