import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-4">
          Privacy Policy — Interviewly
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Effective date: February 9, 2026
        </p>

        <section className="mb-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-2 text-gray-700">
            Interviewly collects minimal information to run interview sessions:
            the interview setup (job role, seniority, number of questions) and
            the answers (transcribed text) you submit. Speech-to-text is
            performed in the browser via the Web Speech API when available. The
            backend uses ephemeral in-memory sessions and does not persist
            session data by default. We use Google Gemini (via LangChain) for
            generation and feedback; data submitted to that service will be
            processed by Google according to their policies.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Information We Collect</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Interview setup: role, seniority, number of questions.</li>
            <li>Answers: transcribed text submitted through the app.</li>
            <li>
              Session identifiers and basic request metadata (timestamps,
              user-agent, IP) for operation and security.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Speech & Transcription</h3>
          <p className="mt-2 text-gray-700">
            The app uses the browser's Web Speech API for speech recognition.
            Typically audio is processed locally or by the browser vendor and
            the app receives transcribed text. If your browser sends audio to a
            third-party speech service, that service's privacy policy applies.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">In-Memory Sessions & Retention</h3>
          <p className="mt-2 text-gray-700">
            Sessions are stored in server memory (ephemeral). Data is not
            persisted by default and will be lost when the server restarts or
            sessions expire. Contact us if you need permanent storage or
            deletion guarantees.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Third-Party Services</h3>
          <p className="mt-2 text-gray-700">
            We use Google Gemini for content generation. Data sent to Google
            will be processed under Google's terms. We do not control how third
            parties handle data; avoid submitting highly sensitive personal data
            through the app.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Sharing & Disclosure</h3>
          <p className="mt-2 text-gray-700">
            We will not sell your personal data. We may disclose data to service
            providers for processing, to comply with law, or to protect rights
            and safety.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Client-Side Storage</h3>
          <p className="mt-2 text-gray-700">
            The frontend may use localStorage or sessionStorage for session
            identifiers and small state. We do not use tracking cookies by
            default.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Security</h3>
          <p className="mt-2 text-gray-700">
            We implement reasonable measures to protect data in our control. No
            system is 100% secure. Use HTTPS when accessing the app.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Your Rights</h3>
          <p className="mt-2 text-gray-700">
            Depending on jurisdiction, you may have rights to access, correct,
            or delete personal data. Because the app uses ephemeral sessions,
            many requests can be handled by clearing session state or server
            restart. Contact us for assistance.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Children</h3>
          <p className="mt-2 text-gray-700">
            The app is not intended for children under 13.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">International Transfers</h3>
          <p className="mt-2 text-gray-700">
            Data may be processed in countries outside your own, including by
            Google services.
          </p>
        </section>

        <section className="mb-4">
          <h3 className="font-semibold">Updates</h3>
          <p className="mt-2 text-gray-700">
            We may update this policy. The effective date at the top shows when
            it was last updated.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2 text-gray-700">
            If you have questions or requests, contact:{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:yaser.alhamad2016@gmail.com"
            >
              yaser.alhamad2016@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
