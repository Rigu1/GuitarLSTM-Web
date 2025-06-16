document.getElementById("uploadButton").addEventListener("click", () => {
  document.getElementById("audioInput").click();
});

document.getElementById("audioInput").addEventListener("change", () => {
  handleUpload();
});

async function handleUpload() {
  const fileInput = document.getElementById("audioInput");
  const file = fileInput.files[0];
  const audioPlayer = document.getElementById("uploadedPlayer");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const downloadSection = document.getElementById("downloadSection");

  if (!file || !file.name.endsWith(".wav")) {
    alert("WAV 파일만 업로드할 수 있습니다.");
    return;
  }

  downloadSection.style.display = "none";

  // 오디오 미리보기
  const fileURL = URL.createObjectURL(file);
  audioPlayer.src = fileURL;
  audioPlayer.style.display = "block";

  // 로딩 표시
  loadingSpinner.style.display = "block";

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      downloadSection.style.display = "block";
    } else {
      alert("업로드 실패 또는 서버 오류가 발생했습니다.");
    }
  } catch (err) {
    alert("오류가 발생했습니다.");
  } finally {
    loadingSpinner.style.display = "none";
  }
}
