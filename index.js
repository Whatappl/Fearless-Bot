<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fearless Panel 1.0</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            user-select: none;
        }

        body {
            background-color: #000000;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .container {
            width: 90%;
            max-width: 380px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Title styling with glowing effect */
        .title-brand {
            color: #ffffff;
            font-size: 26px;
            font-weight: 900;
            letter-spacing: 2px;
            text-shadow: 0 0 10px rgba(255, 46, 115, 0.5);
            margin-bottom: 5px;
        }

        .title-brand span {
            color: #ff2e73; /* Pink accent */
        }

        .subtitle {
            color: #555555;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 30px;
        }

        /* Card Container */
        .card {
            background-color: #0b0b0c;
            border: 1px solid #1a1a1c;
            border-radius: 24px;
            padding: 35px 25px;
            width: 100%;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
        }

        .card-title {
            color: #ffffff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 25px;
            letter-spacing: 0.5px;
        }

        /* Form styling */
        .input-group {
            text-align: left;
            margin-bottom: 20px;
            width: 100%;
        }

        .input-label {
            color: #555555;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 8px;
            display: block;
        }

        .input-field {
            width: 100%;
            background-color: #050505;
            border: 1.5px solid #1f1f22;
            border-radius: 14px;
            padding: 16px;
            color: #ffffff;
            font-size: 15px;
            text-align: center;
            outline: none;
            transition: all 0.3s ease;
            letter-spacing: 1px;
        }

        .input-field:focus {
            border-color: #ff2e73;
            box-shadow: 0 0 12px rgba(255, 46, 115, 0.2);
            background-color: #08080a;
        }

        /* Button styling */
        .btn-submit {
            width: 100%;
            background: #ff2e73;
            color: #ffffff;
            border: none;
            border-radius: 16px;
            padding: 16px;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 1.5px;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-top: 10px;
            box-shadow: 0 6px 20px rgba(255, 46, 115, 0.3);
        }

        .btn-submit:active {
            transform: scale(0.97);
            background: #e02461;
            box-shadow: 0 3px 10px rgba(255, 46, 115, 0.2);
        }

        /* Error/Status messages */
        .status-msg {
            font-size: 12px;
            margin-top: 15px;
            height: 18px;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .error {
            color: #ff3b30;
        }

        .success {
            color: #4cd964;
        }

        /* Shaking animation for wrong key entry */
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-8px); }
            40%, 80% { transform: translateX(8px); }
        }

        .shake {
            animation: shake 0.4s ease-in-out;
            border-color: #ff3b30 !important;
            box-shadow: 0 0 12px rgba(255, 59, 48, 0.2) !important;
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Logo Header -->
        <h1 class="title-brand">FEARLESS <span>PANEL 1.0</span></h1>
        <p class="subtitle">SISTEMA DE CONTROLE</p>

        <!-- Login Card -->
        <div class="card">
            <h2 class="card-title">Acesse sua conta</h2>

            <div class="input-group">
                <label class="input-label" for="accessKey">Chave de Acesso</label>
                <input type="text" id="accessKey" class="input-field" placeholder="Insira seu código..." autocomplete="off">
            </div>

            <button type="button" class="btn-submit" onclick="verifyKey()">ENTRAR</button>

            <!-- Error output -->
            <div id="statusBox" class="status-msg"></div>
        </div>
    </div>

    <script>
        function verifyKey() {
            const enteredKey = document.getElementById('accessKey').value.trim();
            const statusBox = document.getElementById('statusBox');
            const inputField = document.getElementById('accessKey');
            
            // Define your master key here
            const masterKey = "FEARLESS-PROXYV1";

            // Reset classes and status text
            statusBox.className = "status-msg";
            statusBox.innerHTML = "";
            inputField.classList.remove('shake');

            if (enteredKey === "") {
                inputField.classList.add('shake');
                statusBox.classList.add('error');
                statusBox.innerHTML = "Por favor, insira uma chave!";
                return;
            }

            if (enteredKey === masterKey) {
                statusBox.classList.add('success');
                statusBox.innerHTML = "Acesso Permitido! Carregando...";
                
                // Optional: Action after successful login
                setTimeout(() => {
                    alert("Bem-vindo ao Fearless Panel!");
                    // If you have a second dashboard page inside assets, redirect there:
                    // window.location.href = "dashboard.html";
                }, 800);
            } else {
                // Shake the input box if wrong key
                inputField.classList.add('shake');
                statusBox.classList.add('error');
                statusBox.innerHTML = "Chave incorreta ou expirada!";
            }
        }
    </script>
</body>
</html>
