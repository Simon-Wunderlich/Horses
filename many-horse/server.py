from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit, join_room, leave_room

app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def horse():
    return render_template("index.html")

@socketio.on("message")
def horse(speed):
    emit("horse", speed, broadcast=True)

socketio.run(app, port="5677", host="0.0.0.0", debug=True)
