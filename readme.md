# 🎥 YouTube Chat RAG App

A Retrieval-Augmented Generation (RAG) powered chat application that allows users to **interact with the content of any YouTube video** through natural language conversation.

Built using:
- 🧠 [LangChain](https://www.langchain.com/)
- ⚙️ Node.js + Express
- 🌐 React (frontend)
- 🧩 YouTube Transcript API

---

## 🚀 Features

- 🔍 Fetches and processes YouTube video transcripts
- 💬 Chat with video content using AI
- 🧠 LangChain-powered RAG for better context and responses
- 🌍 Cross-origin support (`CORS`) for frontend-backend communication
- 📦 Modular and easy to extend for other content sources

---

## 📁 Project Structure

chat-youtube/
├── client/ # React frontend (optional)
├── server/
│ ├── index.js # Express backend entry point
│ ├── routes/ # API endpoints
│ └── utils/ # LangChain and helper logic
├── .gitignore
├── README.md
└── package.json