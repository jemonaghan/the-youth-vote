
from flask import Flask, request, Response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import select
from flask_cors import CORS
import requests
import json
from config import HOST, USER, PASSWORD, PORT, DB_NAME, PROTOCOL

app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = f"{PROTOCOL}://{USER}:{PASSWORD}@{HOST}:{PORT}/{DB_NAME}"


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)






def add_pollcards_db(urn, num, start_id=1):
    pollcard_numbers = []
    for id in range(start_id, num + start_id):
        pollcard_numbers.append(urn + get_id(id))
        addData = Pollcards(school_urn=urn, voter_ID=get_id(id))
        db.session.add(addData)
        db.session.commit()
    return pollcard_numbers
     

#turns the id into a four digits
def get_id(id, required_length=4):
    id = str(id)
    length = len(id)
    zeros_needed = required_length - length
    zero = "0" * zeros_needed
    return zero + id 

#Adds school and requested pollcards to db and adds extra if previously registered
    
@app.route("/school/register", methods = ['POST'])
   
def add_pollcards():
    if request.method == 'POST':
        json_data = request.json
        # Create sql query
        query = (
            select(Pollcards).
                where(Pollcards.school_urn == json_data.get('urn')).
                order_by(Pollcards.voter_ID.desc())
        )
        print(query)
    
        pollcard = db.session.execute(query).scalars().first()
        start_id = 1 if not matching_pollcard(pollcard) else pollcard.voter_ID +1
        num=json_data.get('numberOfPollcards')
        new_pollcard_numbers = add_pollcards_db(json_data.get('urn'), num, start_id)
       
    return success({"message": "Pollcards created", "newPollcardNumbers": new_pollcard_numbers })#download of pollcards


 

class Pollcards(db.Model):
    school_urn = db.Column(db.String(6), primary_key=True)
    voter_ID = db.Column(db.Integer, primary_key=True)
    vote = db.Column(db.String(128), primary_key=False)
    age = db.Column(db.Integer, primary_key=False)

    def __repr__(self):
        return '<Pollcards %r>' % self.school_urn + str(self.voter_ID)



#route to add voter age and vote to db

@app.route("/voter/vote", methods = ['POST'])
def vote():
    if request.method == 'POST':
        json_data = request.json
        addData = Pollcards(school_urn=json_data.get('urn'), voter_ID=get_id(id), vote=json_data.get("vote"), age=json_data.get("age"))
        db.session.add(addData)
        db.session.commit()
    return success("Vote submitted")



#backend route to check if pollcard number exists and if the vote has been used
@app.route("/voter/pollcard/<pollcard_id>")
def pollcard_check(pollcard_id):

    pollcard_id = request.args.get('v')
    
    pollcard = Pollcards.query.get((get_urn(pollcard_id), get_voter_id(pollcard_id)))
    
    if matching_pollcard(pollcard) and not has_voted(pollcard):
        return success('Exists no vote')

    if matching_pollcard(pollcard) and has_voted(pollcard):
        return error('This pollcard has already been used', 400)

    return error("A pollcard with this number cannot be found", 404)

def matching_pollcard(pollcard):
    return pollcard is not None

def has_voted(pollcard):
    return pollcard.vote is not None 

#splits pollcard number into school_urn and voter_ID
def get_urn(pollcard_id):
    return pollcard_id[0:6]

def get_voter_id(pollcard_id):
    return pollcard_id[6:10]



#external API route to retrieve Schools information. Returns urn, address, name of school
@app.route("/school/find")
def get_school():
    query = request.args.get('v')
    schools_by_postcode = get_school_info(query, 'address.postcode')
    schools_by_name = get_school_info(query, 'name')
    data = schools_by_postcode.json()['data'] + schools_by_name.json()['data']
    data = schools_by_name.json()['data']
    if (len(data) == 0):
        return error('Schools not found!', 404)
    return success(data)

#error or success functions
def error(message, status_code):
    return Response(json.dumps({ 'message': message }), status=status_code, mimetype='application/json')

def success(data):
    return Response(json.dumps(data), status=200, mimetype='application/json')

def get_school_info(query, field):
    return requests.get(f'https://api.maptivo.co.uk/schools?{field}={query}&fields=urn,address,name', headers={ 'x-apikey': '1234' })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
