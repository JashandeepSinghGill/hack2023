To run backend - 

cd backend
(install venv if you havent) python3 -m venv venv (mac) ( or python -m venv venv on Windows)
venv/scripts/activate (mac: source venv/bin/activate)
pip install -r requirements.txt
venv/scripts/activate
cd flask-server
$env:FLASK_APP = "server.py"
$env:FLASK_ENV = "development"
flask run or python server.py


to run frontend -
cd frontend
npm install
npm run dev