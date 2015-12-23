from flask import Flask
from flask import render_template
from flask import request
app = Flask(__name__)

@app.route('/')
def base_converter():
	error = None;
	return render_template('main.html');

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True);