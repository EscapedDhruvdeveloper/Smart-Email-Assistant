# Smart Email Assistant

🚀 **Features**  
- Contextual AI-generated email replies (via Gemini)  
- Tone selection: professional, casual, friendly  
- Gmail integration via Chrome Extension  
- Web interface for manual reply generation  

---

## 📁 Project Structure

```
Email-assistant/
├── Assistant/               # Spring Boot API
├── Email-Assistat-React/    # React App
└── Email-Assistant-Ext/     # Chrome Extension
```

---

## 🛠️ Tech Stack

- **Backend**: Java 21, Spring Boot, WebFlux, Maven, Gemini API  
- **Frontend**: React 19, Vite, Material UI, Axios  
- **Extension**: Manifest V3, Vanilla JS, Gmail DOM API  

---

## 🔐 Gemini API Key

- Get your API key from [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)  
- Add to `application.properties`:

```properties
gemini.api.key=YOUR_API_KEY_HERE
```

---

## ▶ Getting Started

### 🔧 Backend

```bash
cd Assistant
./mvnw spring-boot:run
```

Runs at: [http://localhost:8080](http://localhost:8080)

---

### 💻 React App

```bash
cd Email-Assistat-React
npm install
npm run dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

---

### 🧩 Chrome Extension

1. Open Chrome → `chrome://extensions/`  
2. Enable **Developer Mode**  
3. Click **Load unpacked** → Select `Email-Assistant-Ext/`  

---

## ⚙️ Config Notes

- **CORS**:
```java
@CrossOrigin(origins = "*")
only for this project
```

- **Extension Permissions**:
  - `activeTab`, `storage`
  - Host access: `localhost:8080`, `mail.google.com`

---

## 📚 Resources

- [Gemini API – Google AI Studio](https://aistudio.google.com/app/apikey)  
- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/reference/)
