import express from "express";
import { makeWASocket, useSingleFileAuthState, DisconnectReason } from "@adiwajshing/baileys";
import qrcode from "qrcode";

const { state, saveState } = useSingleFileAuthState("session.json");

const app = express();
app.use(express.json());
app.use(express.static("public")); // serve frontend
import cors from "cors";
app.use(cors());

let sock;

async function connectWhatsApp() {
  sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
  });

  sock.ev.on("connection.update", (update) => {
    const { qr, connection, lastDisconnect } = update;
    if (qr) {
      // QR is sent to frontend via API
      currentQR = qr;
    }
    if (connection === "close") {
      if ((lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
        connectWhatsApp();
      }
    }
    if (connection === "open") console.log("Connected!");
  });

  sock.ev.on("creds.update", saveState);
}

await connectWhatsApp();

let currentQR = null;

app.get("/get-qr", async (req, res) => {
  if (!currentQR) return res.json({ qr: null });
  const qrImage = await qrcode.toDataURL(currentQR);
  res.json({ qr: qrImage });
});

app.listen(3000, () => console.log("Server running on port 3000"));
