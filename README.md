# FUll-Stack PERN Project: AnimalSightTracker

This project will use Express, React and Progres. 

##Overview
Let's make an app to help scientists track sightings of endangered animals.

##Data
This app will consist of three tables(Species, Sightings, and Individuals). 

##Species
This app will store data about different endagngered species. It should store the following values:
- Integer primary key
- The common name
- Scientiic name
- Number estimated living in the wild
- Conservation Status Code
- Record creation timestamp

##Individuals 
Scientists track some individual animals of endangered species each individual will have the following values:
- Integer primary key
- Nickname
- Species
- Record creation timestamp

##Sightings
This will keep track of the sightings of each individual:
- Integer primary key
- Date and Time of posting
- Individual seen (name)
- Location of Sighting (Input type = text)
- Health: Boolean (true/false) Did the animal appear healthy?

##Join 
Create a join table showing a list of all sightings including the nickname of the individual sighting at each one

##Step by Step Process on how to build your database

In your terminal, enter the following command to enter postgres
```psql postgres ```

Create database 
``` CREATE DATABASE animal_sight_tracker;```

Enter your new database
```\c animal_sight_tracker```

Create a table (follow this step for creating your Species, Sightings, and Individuals table)
```CREATE TABLE species (id SERIAL PRIMARY KEY,common_name VARCHAR ( 50 ) UNIQUE NOT NULL, scientific_name VARCHAR ( 50 ) NOT NULL, population integer, conservation_status VARCHAR (2), created_on TIMESTAMP WITH TIME zone DEFAULT CURRENT_TIMESTAMP ); ```

Insert values into your table
```insert into species (common_name, scientific_name, population, conservation_status, created_on) values ('Leopard, indian', 'Panthera pardus', '500', 'US', '1/21/2022'); ```

You can use the db.sql (pg_dump for reference to recreate database)

#Starting your project

##Navigate to the folder you want to clone the project

In your terminal, enter the desired folder
```cd Documents```

Copy the git clone link from the git project
``````


