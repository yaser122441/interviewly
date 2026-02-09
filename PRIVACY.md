# Privacy Policy — Interviewly (AI Interview Coach)

Effective date: February 9, 2026

Thank you for using Interviewly ("we", "us", or "the App"). This Privacy Policy explains how we collect, use, disclose, and protect information when you use our web application that provides AI-powered interview coaching with browser-based speech-to-text.

Please read this policy carefully. If you do not agree with it, do not use the App.

## 1. Summary

- We collect minimal information needed to run interview sessions: the interview setup you provide (job role, seniority, number of questions), the questions generated, and your answers (text) you submit during a session.
- Speech-to-text happens in your browser using the Web Speech API; audio is processed locally by the browser when supported and the App receives transcribed text rather than raw audio in typical usage.
- The backend uses ephemeral, in-memory session storage for interview sessions. Sessions are not persistently stored by default.
- We use Google Gemini (via LangChain / Google Generative AI) to generate interview questions and feedback; that service will process submitted prompts and text and may store or analyze them according to Google’s policies.

## 2. Information We Collect

2.1 Information You Provide

- Interview setup: job role, seniority level, and number of questions.
- Answers: transcribed text you submit through the App (via the POST /interview/answer endpoint).
- Optional support or feedback messages you send to us.

  2.2 Automatically Collected Information

- Session identifiers: a randomly-generated session id may be stored in browser storage (localStorage) or passed as a query param to the backend so the App can resume or continue the interview.
- Basic technical metadata: timestamps and minimal request metadata (IP address, user-agent) recorded by the server or hosting environment for operational and security purposes.

  2.3 Audio, Speech, and Transcription

- The App uses the Web Speech API for browser-based speech recognition. In common configurations (Chrome, Edge), audio is processed by the browser and converted to text locally or by the browser vendor's service. The App typically receives only the transcribed text.
- If your browser or configuration results in audio or raw speech being sent to a third-party speech service, that processing is governed by the browser vendor and the service provider’s privacy policy (not controlled by us).

## 3. How We Use Information

We use collected information to:

- Generate interview questions and AI feedback using Google Gemini.
- Match questions and answers to the current session and present progress to you.
- Provide the interview experience and any requested feedback or scoring.
- Improve the App, debug issues, and monitor for abuse.

## 4. In-Memory Sessions and Retention

- The backend stores sessions in memory (ephemeral). This means session data exists only while the backend process is running and is not persisted to a database by default.
- Session data is cleared when the server process restarts or when sessions expire according to the server configuration.
- If you need permanent storage or explicit deletion guarantees, contact us (see Contact section) before using the service for sensitive data.

## 5. Third-Party Services

We rely on third parties to provide functionality:

- Google Gemini (via LangChain / Google Generative AI): used to generate interview content and feedback. Data you submit to produce questions or feedback (including interview prompts and your answers) will be sent to Google for processing. Review Google’s terms and privacy policy for details on how they handle data.
- Browser vendors / Web Speech API providers: handle speech recognition if you use voice input. Their handling of audio/transcripts is governed by their respective policies.

We do not control how these third parties handle or store data; please review their privacy practices. Do not submit highly sensitive personal data (e.g., social security numbers, medical/health records) through the App.

## 6. Sharing and Disclosure

We will not sell your personal data. We may disclose data:

- To third-party service providers (like Google) as described above for processing and model inference.
- When required by law or to respond to legal process.
- To protect the rights, property, or safety of the App, our users, or others.

## 7. Cookies, Local Storage, and Client-Side Storage

- The frontend may use browser storage (localStorage or sessionStorage) to keep session ids and small pieces of state to support the interview flow.
- We do not rely on tracking cookies for analytics by default. If we add analytics or tracking, we will update this policy and provide options to opt out.

## 8. Security

We implement reasonable technical and administrative measures to protect data in our control.

- Limitations: no system is 100% secure. We cannot guarantee absolute security of information provided to the App.
- Transport: you should access the App over HTTPS. If you self-host, ensure TLS is enabled on your hosting environment.

## 9. Data Subject Rights

Depending on your jurisdiction, you may have rights to access, correct, or delete personal data. Because the App primarily uses ephemeral in-memory sessions and does not persist personal data by default, the typical request will often be addressed by clearing session state or restarting the server. To exercise rights or ask about data we may have retained, contact us (see Contact section).

## 10. Children

The App is not intended for individuals under 13. We do not knowingly collect personal data from children under 13. If you believe we have collected such data, contact us and we will delete it.

## 11. International Transfers

Data you provide may be processed in countries outside your own (for example, by Google’s services). These processing operations may involve data transfers subject to the laws of the country where the processing occurs.

## 12. Updates to This Policy

We may update this Privacy Policy periodically. The effective date at the top of this document indicates when it was last updated. Where required by law, we will obtain consent for material changes.

## 13. How to Contact Us

If you have questions, requests to delete data, or privacy concerns, please contact us at:

privacy@example.com

(Replace this placeholder email with your actual support or privacy contact address.)

--

Note to site owner: Replace `privacy@example.com` with your real contact email before publishing. If you want the policy displayed as an HTML page or linked from the frontend, let me know and I can add a `privacy.html` in `frontend/public/` or a React route (e.g., `src/pages/Privacy.jsx`) and wire it into the app.
