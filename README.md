# 🌤️ Weather MCP Server

## 📌 Overview

**Weather MCP Server** that demonstrates how to extend **Claude Desktop** using the **Model Context Protocol (MCP)**.

Instead of relying on static knowledge, Claude can fetch **real-time weather data** by calling this MCP server.

### 💡 Example

> "What's the weather in Delhi?"  
> Claude → MCP Server → OpenWeatherMap API → Live Response

---

## 🧠 Why This Project?

- Shows real-world use of **MCP (Model Context Protocol)**
- Converts AI from static → **real-time intelligent system**

---

## 🏗️ Architecture


Claude Desktop
│
│ stdio (JSON-RPC)
▼
Weather MCP Server (Node.js)
│
│ REST API call
▼
OpenWeatherMap API
│
▼
Live Weather Data → Claude Response


---

## 🚀 Features

- 🌐 Real-time weather data
- 🔌 MCP (Model Context Protocol) integration
- ⚡ Fast JSON-RPC communication (stdio)
- 🛡️ Input validation using Zod
- 🔄 Live API integration
- 🧠 Extends AI capabilities beyond training data

---

## 🛠️ Tech Stack

- TypeScript 5.9
- Node.js
- @modelcontextprotocol/sdk
- Zod
- OpenWeatherMap API
- Claude Desktop

---

## 📁 Project Structure


MCP-Server/
├── src/
│ └── server.ts
├── dist/
│ └── server.js
├── package.json
├── tsconfig.json
└── README.md


---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Nitin-lohumi/MCP-Server.git
cd MCP-Server
2. Install Dependencies
npm install
3. Build Project
npm run build
🔑 Get API Key

Visit: https://openweathermap.org

Sign up / login

Generate your API key

⚙️ Claude Desktop Configuration

Open the config file:

C:\Users\<username>\AppData\Local\Packages\Claude_pzs8sxrjxfjjc\LocalCache\Roaming\Claude\claude_desktop_config.json

Add this configuration:

{
  "mcpServers": {
    "Weather-MCP-Server": {
      "command": "node",
      "args": ["C:/path/to/MCP-Server/dist/server.js"],
      "env": {
        "WEATHER_API": "your_openweathermap_api_key"
      }
    }
  }
}
▶️ Scripts
npm run build   # Compile TypeScript → JavaScript
npm run start   # Run server
npm run dev     # Development mode
🧪 How to Test

Start Claude Desktop

Ask:

What's the weather in Delhi?

Claude will:

Call MCP server

Fetch live data

Return real-time result

🌱 Future Improvements

📅 5-day / hourly forecast

🌫️ Air Quality Index (AQI)

🚨 Weather alerts

🌅 Sunrise / Sunset timing

🌍 Multi-city comparison

📊 Graph visualization

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch

Make changes

Submit a Pull Request

🧾 License

This project is licensed under the MIT License.

👨‍💻 Author

Nitin Lohumi
💻 Full Stack Developer (MERN + Next.js + AI)

⭐ Support

If you found this project helpful:

⭐ Star the repo

🍴 Fork it

🧑‍💻 Share with others

📬 Contact

GitHub: https://github.com/Nitin-lohumi