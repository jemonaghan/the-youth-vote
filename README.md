# The Youth Vote
Full-Stack Group 4

Susan Bailey, Rana Khoury, Alexandra Lavin, Joanne Monaghan, and Jemilla Scotten

## The Project
Our website is an online voting web application with the aim of encouraging young people to vote.

## Setting up
To avoid clashes of dependencies we recommend you first set up a virtual environment to run the project within. Information on how to do this can be found here https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/

### Configuring the SQL database
1. Run the SQL script given in the file `\backend\pollcards.sql` to initalise your database
2. Configure the options within the `\backend\config.py` file to match your database settings

### Starting the backend
In the terminal:
(activate the virtual environment)
1. Navigate to `\backend`
2. install dependencies by running `pip install -r requirements.txt`
3. run `python app.py`
(This will run on localhost:5000)

### Running the frontend
Once your other configurations are complete, in a separate terminal:
(activate the virtual environment)
1. Navigate to `\frontend\react-website`
2. run `npm install`
3. run `npm start`
(This will run on localhost:3000)

## How to use the site:

### First Step - Sign Up
1. Search for the name of your school
2. Enter how many poll cards your school needs (1 poll card represents 1 student vote)
3. Submit you request and recieve your pollcards
4. Print the page and hand out pollcard numbers to students (1 pollcard number per student)

### Next Step - VOTE!
Once Sign up is complete and you have been given your pollcard you can now navigate to the voting page where you can enter your details and vote.

## More info
Anyone can browse the site and look at the vote results and access the links to external online resources which align with the mission of the project; getting young people involved in democracy.