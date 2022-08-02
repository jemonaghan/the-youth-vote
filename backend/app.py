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


@app.route("/school")
def get_school():
    query = request.args.get('v')
    schools_by_postcode = get_school_info(query, 'address.postcode')
    schools_by_name = get_school_info(query, 'name')
    data = schools_by_postcode.json()['data'] + schools_by_name.json()['data']
    if (len(data) == 0):
        return error('Schools not found!', 404)
    return success(json.dumps(data))


def error(message, status_code):
    Response(json.dumps({ 'message': message }), status=status_code, mimetype='application/json')

def success(data):
    return Response(data, status=200, mimetype='application/json')

def get_school_info(query, field):
    return requests.get(f'https://api.maptivo.co.uk/schools?{field}={query}&fields=urn,address,name', headers={ 'x-apikey': '1234' })

if __name__ == "__main__":
    app.run(debug=True, port=5000)