# Three Reads Book AI

<img align="right" width="300" height="569" src="https://github.com/user-attachments/assets/02050bb7-0e1e-4db6-80af-2eb8a72c8b06">Three Reads is a React-based application designed to recommend three books to users based on the books they like using artificial intelligence. The app leverages Google Gemini API and Google Books API to analyze user preferences and provide three personalized book recommendations.

<h3>Installation</h3>
<h4>Install Dependencies</h4>

```bash
npm install
```
<h4>Create a .env file and add your Gemini 1.5 Flash API key.</h4>
The app also requires a Google Analytics 4 key; however, if you don't need it, the GA4 code implementation can be easily removed from src/app.jsx

```bash
VITE_API_KEY = YOUR GEMINI 1.5 FLASH API KEY HERE
VITE_ANALYTICS_ID = YOUR GOOGLE ANALYTICS 4 KEY HERE
```

<h4>Start the Application</h4>

```bash
npm run dev
```

<h3>Technologies Used</h3>
<p></p><b>React:</b> JavaScript library for building user interfaces.</p>
<p><b>Vite:</b> Next-generation frontend tooling.</p>
<p><b>Zustand:</b> State management library.</p>
<p><b>Google Gemini API:</b> Gemini 1.5 Flash API was used for analyzing user preferences. </p>
<p><b>Google Books API:</b> Used for fetching book details.</p>
<p><b>Google Analytics 4:</b> Used for tracking basic user visits.</p>
