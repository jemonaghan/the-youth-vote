CREATE DATABSE youth_vote;

CREATE TABLE Pollcards (
school_urn INTEGER,
voter_ID INTEGER unsigned NOT NULL,
age INTEGER,
vote VARCHAR(128),
primary key(school_urn, voter_ID)
);