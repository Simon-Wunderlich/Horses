from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def horse():
    return render_template("index.html")

app.run(port="5674", host="0.0.0.0", debug=True)
