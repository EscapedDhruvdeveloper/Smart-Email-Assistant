Email Assistant

🚀 Features
Contextual AI-generated email replies (via Gemini)

Tone selection: professional, casual, friendly

Gmail integration via Chrome Extension

Web interface for manual reply generation

📁 Structure
bash
Copy
Edit
Email-assistant/
├── Assistant/ # Spring Boot API
├── Email-Assistat-React/ # React App
└── Email-Assistant-Ext/ # Chrome Extension
🛠️ Tech Stack
Backend: Java 21, Spring Boot, WebFlux, Maven, Gemini API

Frontend: React 19, Vite, Material UI, Axios

Extension: Manifest V3, Vanilla JS, Gmail DOM API

🔐 Gemini API Key
Get it from: https://aistudio.google.com/app/apikey

Add to backend config:

properties
Copy
Edit
gemini.api.key=YOUR_API_KEY_HERE
▶ Getting Started
Backend
bash
Copy
Edit
cd Assistant
./mvnw spring-boot:run
Runs at: http://localhost:8080

React App
bash
Copy
Edit
cd Email-Assistat-React
npm install
npm run dev
Runs at: http://localhost:5173

Chrome Extension
Go to chrome://extensions/

Enable Developer Mode

Click "Load unpacked" and select Email-Assistant-Ext/

⚙️ Config Notes
CORS: @CrossOrigin(origins = "\*")

Extension Permissions:

activeTab, storage

Hosts: localhost:8080, mail.google.com

📚 Resources
Gemini API: Google AI Studio

Chrome Extensions: Chrome Extension Docs
