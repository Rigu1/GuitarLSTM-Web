# GuitarLSTM Flask Web Interface

이 프로젝트는 [GuitarLSTM](https://github.com/GuitarML/GuitarLSTM) 기반의 사전 학습된 이펙터 모델을 사용하여 사용자가 업로드한 기타 음원(wav 파일)에 대해 이펙터 효과를 적용하고, 변환된 음원을 다운로드할 수 있는 웹 인터페이스를 제공합니다.

Flask 서버와 HTML/CSS/JS 기반의 간단한 대시보드를 통해 작동하며, 현재는 Ibanez TS9 오버드라이브 모델을 기본으로 제공하고 있습니다.

---

## 📦 설치 방법

먼저 해당 저장소를 클론한 뒤, Python 가상환경을 만들고 필요한 패키지를 설치합니다:

```bash
git clone https://github.com/yourusername/GuitarLSTM-Web.git
cd GuitarLSTM-Web

python3 -m venv venv
source venv/bin/activate

pip install -r requirements.txt
```

---

## 🚀 실행 방법

Flask 서버를 실행합니다:

```bash
python app.py
```

웹 브라우저에서 `http://127.0.0.1:5000` 으로 접속하면 웹 인터페이스를 통해 `.wav` 파일 업로드 및 이펙터 적용 결과를 확인할 수 있습니다.

---

## 📂 파일 구조

```
.
├── app.py                  # Flask 백엔드 서버
├── predict.py              # wav 파일에 이펙터 적용하는 로직
├── static/
│   ├── style.css
│   ├── script.js
│   ├── ts9.png
│   ├── uploads/            # 업로드된 원본 wav 파일 저장 폴더
│   └── downloads/          # 이펙터 적용된 wav 파일 저장 폴더
├── templates/
│   └── ts9_dashboard.html  # 웹 프론트엔드
├── models/
│   └── ts9_model.h5        # 사전 학습된 TS9 이펙터 모델
└── requirements.txt        # 필요한 패키지 리스트
```

---

## ⚙️ 시스템 아키텍처

- **Frontend**: HTML/CSS/JavaScript로 구성된 간단한 UI.
- **Backend**: Flask를 통한 REST API 기반의 서버.
- **Model Inference**: `predict.py` 스크립트를 통해 `.h5` 모델을 로드하고 사용자 음원에 적용.
- **파일 관리**:
  - 업로드된 음원 → `static/uploads/` 저장
  - 변환된 음원 → `static/downloads/` 저장

---

## 📝 사용법 요약

- WAV 음원을 업로드하면 서버에서 `.h5` 모델을 통해 이펙터를 적용합니다.
- 처리된 결과는 다운로드 링크로 제공합니다.
- 모델은 TS9 외에도 원하는 모델(.h5)을 교체하여 활용 가능합니다.

---

## 🎸 참고

- 모델 학습 방법은 원 프로젝트 [GuitarLSTM](https://github.com/GuitarML/GuitarLSTM)을 참고하세요.