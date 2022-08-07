from distutils.log import error
from flask import Flask, jsonify, request, Response
from flask_sqlalchemy import SQLAlchemy
from db_utils import get_voter_info
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

# jemilla config
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:NANOdegree22@localhost:3306/youth_vote"
# joanne config
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:Saxophone1!@localhost:3306/youth_vote2"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# check the connection is working
@app.route("/")
def api_homepage():
    return ("Welcome to the api")

# take number of pollcards and send to db

@app.route("/school/register", methods = ['POST'])
def create_pollcard():
    if request.method == 'POST':
        json_data = request.json
        # addData = pollcard(url=json_data.get('url'), numberOfPollcards=json_data.get('number_pollcards'))
        for id in range(json_data.get('numberOfPollcards')):
            # print(id)
            addData = Pollcards(school_urn=json_data.get('urn'), voter_ID=get_id(id))
            db.session.add(addData)
            db.session.commit()
    return success("Pollcards created")#download of pollcards needed

def get_id(id, required_length=4):
    id = str(id+1)
    length = len(id)
    zeros_needed = required_length - length
    zero = "0" * zeros_needed
    return zero + id 
    
    

class Pollcards(db.Model):
    school_urn = db.Column(db.String(6), primary_key=True)
    voter_ID = db.Column(db.Integer, primary_key=True)
    vote = db.Column(db.Integer, primary_key=False)

    def __repr__(self):
        return '<Pollcards %r>' % self.school_urn + self.voter_ID


@app.route("/voter/vote", methods = ['POST'])
def vote():
    return success("Vote submitted")



#backend route to check if pollcard number has been created and if the vote has been used
@app.route("/voter/pollcard/<pollcard_id>")
def pollcard_check(pollcard_id):
    
    pollcard = Pollcards.query.get((get_urn(pollcard_id), get_voter_id(pollcard_id)))
    
    if matching_pollcard(pollcard) and not has_voted(pollcard):
        return success({ 'hasVoted': False })

    if matching_pollcard(pollcard) and has_voted(pollcard):
        return error('This pollcard has already been used', 400)

    return error("A pollcard with this number cannot be found", 404)

def matching_pollcard(pollcard):
    return pollcard is not None

def has_voted(pollcard):
    return pollcard.vote is not None 

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