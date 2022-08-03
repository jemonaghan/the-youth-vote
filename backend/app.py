from distutils.log import error
from flask import Flask, jsonify, request, Response
from flask_sqlalchemy import SQLAlchemy
from db_utils import get_voter_info
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:'NANOdegree22'@localhost/tutorial"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

pollcards = [
    {'id': '123', 'urn': '123456', 'vote': 1 },
    {'id': '123', 'urn': '789123', 'vote': 1 },
    {'id': '124', 'urn': '789123', 'vote': None }
]

@app.route("/")
def homepage():    
    return "This is the homepage"


@app.route("/voters")
def voters():
    voter_data = {
        "voters":[
            {1:"voter1", 2:"voter2", 3:"voter3", 4:"voter4"}
        ]}    
    return jsonify(voter_data)


@app.route("/voter-info")
def get_info(information):
    res = get_voter_info(information)
    return jsonify(res)


@app.route("/voter/pollcard/<pollcard_id>")
def pollcard_check(pollcard_id):
    for pollcard in pollcards:
        if matching_pollcard(pollcard_id, pollcard) and not has_voted(pollcard):
            return success({ 'hasVoted': False })

        if matching_pollcard(pollcard_id, pollcard) and has_voted(pollcard):
            return error('This pollcard has already been used', 400)

    return error("A pollcard with this number cannot be found", 404)


def has_voted(pollcard):
    return pollcard['vote'] is not None



def matching_pollcard(pollcard_id, pollcard):
    urn = pollcard_id[0:6]
    id = pollcard_id[6:9]
    return pollcard['id'] == id and pollcard['urn'] == urn




@app.route("/school/find")
def get_school():
    query = request.args.get('v')
    schools_by_postcode = get_school_info(query, 'address.postcode')
    schools_by_name = get_school_info(query, 'name')
    data = schools_by_postcode.json()['data'] + schools_by_name.json()['data']
    if (len(data) == 0):
        return error('Schools not found!', 404)
    return success(data)


def error(message, status_code):
    return Response(json.dumps({ 'message': message }), status=status_code, mimetype='application/json')

def success(data):
    return Response(json.dumps(data), status=200, mimetype='application/json')

def get_school_info(query, field):
    return requests.get(f'https://api.maptivo.co.uk/schools?{field}={query}&fields=urn,address,name', headers={ 'x-apikey': '1234' })

if __name__ == "__main__":
    app.run(debug=True, port=5000)