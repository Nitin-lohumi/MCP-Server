"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const WEATHER_API_KEY = process.env.WEATHER_API;
const server = new mcp_js_1.McpServer({
    name: "weather-mcp",
    version: "1.0.0",
});
server.tool("get_weather", "Get current weather for any city", {
    city: zod_1.z.string().describe("City name like Delhi, Mumbai, London"),
}, async ({ city }) => {
    console.error(`🔥 [weather_mcp] Tool called! City: ${city}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.error(`✅ [weather_mcp] API response received! Status: ${data.cod}`);
    if (data.cod !== 200) {
        return { content: [{ type: "text", text: `City not found: ${city}` }] };
    }
    const weather = `
🌍 City: ${data.name}, ${data.sys.country}
🌡️ Temperature: ${data.main.temp}°C
🌤️ Condition: ${data.weather[0].description}
💧 Humidity: ${data.main.humidity}%
💨 Wind: ${data.wind.speed} m/s
    `.trim();
    return { content: [{ type: "text", text: weather }] };
});
async function main() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error("✅ Weather MCP Server running...");
}
main().catch(console.error);
