from flask import Flask, request
from flask import session
from flask import jsonify
from flask_cors import CORS
from flask_session import Session


app = Flask(__name__)

# set configs
# app.config["DEBUG"] = True
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


CORS(app, supports_credentials=True)

cache = {}


@app.route('/spellcheck',  methods=['POST', 'GET'])
def spellCheck():
    data = request.get_json()
    if request.method == "POST":
        cache['testing'] = data
        # session['inputText'] = data
        # updateTestString(data)
    return ''' Recieved TEXT: {} '''.format(data)


@app.route('/checkresult',  methods=['GET'])
def checkResult():
    if 'testing' in cache:
        # toReturn = session['inputText']
        toReturn = cache['testing']
        return jsonify(toReturn)
    else:
        return jsonify("No Result")


if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(host="0.0.0.0", port=5000)
