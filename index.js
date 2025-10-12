<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WhatsApp Multi-Device Bot</title>
<style>
body { background:#111; color:#fff; font-family:sans-serif; text-align:center; padding-top:50px; }
button { padding:10px 20px; margin:10px; border:none; border-radius:6px; background:#0b67d0; color:#fff; cursor:pointer; }
img { margin-top:20px; }
</style>
</head>
<body>
<h1>Connect Your WhatsApp Number</h1>
<p>Scan this QR with WhatsApp to link your number</p>
<button id="refreshBtn">Refresh QR</button>
<br>
<img id="qr" src="" alt="QR Code">

<script>
async function loadQR() {
  const res = await fetch('/get-qr');
  const data = await res.json();
  if(data.qr) document.getElementById('qr').src = data.qr;
  else document.getElementById('qr').alt = 'No QR generated yet';
}

document.getElementById('refreshBtn').addEventListener('click', loadQR);
loadQR();
</script>
</body>
</html>
