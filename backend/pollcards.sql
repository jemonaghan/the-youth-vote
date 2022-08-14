-- create database
CREATE DATABASE youth_vote;

-- create table
CREATE TABLE Pollcards (
school_urn INTEGER,
voter_ID INTEGER unsigned NOT NULL,
age INTEGER,
vote VARCHAR(128),
primary key(school_urn, voter_ID)
);

-- (optional) add test values
-- voter that hasn't voted (pollcard ID = 12341234)
-- insert into Pollcards (school_urn, voter_ID)
-- VALUES (123456, 1234);