from flask import Flask, request, send_file, render_template
import subprocess, os

app = Flask(__name__)

UPLOAD_PATH = os.path.join("static", "upload", "user_input.wav")
DOWNLOAD_PATH = os.path.join("static", "download", "ts9_drive.wav")
MODEL_PATH = "models/ts9_model.h5"

# 폴더 생성
os.makedirs(os.path.dirname(UPLOAD_PATH), exist_ok=True)
os.makedirs(os.path.dirname(DOWNLOAD_PATH), exist_ok=True)


@app.route("/")
def index():
    return render_template("ts9_dashboard.html")


@app.route("/upload", methods=["POST"])
def upload():
    file = request.files["file"]
    if file and file.filename.endswith(".wav"):
        file.save(UPLOAD_PATH)
        subprocess.run(["python", "predict.py", UPLOAD_PATH, DOWNLOAD_PATH, MODEL_PATH])
        return "success"
    return "fail", 400


@app.route("/download")
def download():
    if os.path.exists(DOWNLOAD_PATH):
        return send_file(DOWNLOAD_PATH, as_attachment=True)
    else:
        return "파일이 생성되지 않았습니다. 먼저 예측을 수행해주세요.", 404


if __name__ == "__main__":
    app.run(debug=True)
