import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";

export default component$(() => {
  return (
    <Parentcont>
      <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-4">Terms of Service for Love-Language-GPT</h1>
      <p class="text-gray-600 mb-4"><strong>Last Updated: 04/25/2025</strong></p>

      <h2 class="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p class="text-gray-700 mb-4">
        By using Love-Language-GPT, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms may be updated from time to time, and your continued use of the application constitutes acceptance of any changes.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">2. Project Status</h2>
      <p class="text-gray-700 mb-4">
        Love-Language-GPT is currently in development and is not a finished product. Features, functionalities, and user experiences may change as the project evolves. There is no guarantee that the application will be completed or that it will be offered commercially in the future.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">3. Open Source License</h2>
      <p class="text-gray-700 mb-4">
        Love-Language-GPT is an open-source project. You are free to use, modify, and distribute the code under the terms of the <Link href="https://github.com/jellyfishing2346/Love-Language-GPT/blob/20-create-licensemd-files/LICENSE" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">MIT License & Bionic GPT LTD License</Link>. However, you must provide proper attribution to the original creators and include a copy of the license in any distributed software.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">4. Use of AI</h2>
      <p class="text-gray-700 mb-4">
        Love-Language-GPT utilizes artificial intelligence technologies to enhance user interactions and experiences. While we strive to provide accurate and helpful responses, we cannot guarantee the reliability or accuracy of the AI-generated content. Users should exercise caution and discretion when relying on AI-generated information.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">5. User Responsibilities</h2>
      <p class="text-gray-700 mb-4">
        By using Love-Language-GPT, you agree to:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Use the application in compliance with all applicable laws and regulations.</li>
        <li>Respect the rights of other users and refrain from any behavior that may be considered harmful, abusive, or disruptive.</li>
        <li>Not use the application for any illegal or unauthorized purpose.</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">6. Disclaimers</h2>
      <p class="text-gray-700 mb-4">
        <strong>No Warranty:</strong> Love-Language-GPT is provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the application’s reliability, availability, or suitability for any purpose.
      </p>
      <p class="text-gray-700 mb-4">
        <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the application.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">7. Indemnification</h2>
      <p class="text-gray-700 mb-4">
        You agree to indemnify and hold harmless the creators and contributors of Love-Language-GPT from any claims, losses, liabilities, damages, costs, or expenses (including reasonable attorneys' fees) arising out of your use of the application or violation of these Terms of Service.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p class="text-gray-700 mb-4">
        These Terms of Service shall be governed by and construed in accordance with the laws of New York City, New York, United States of America. Any disputes arising from these terms shall be resolved in the courts of New York County.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">9. Contact Information</h2>
      <p class="text-gray-700 mb-4">
        If you have any questions or concerns about these Terms of Service, please contact us at <Link href="https://github.com/jellyfishing2346/Love-Language-GPT/issues" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">https://github.com/jellyfishing2346/Love-Language-GPT/issues</Link>.
      </p>

      <p class="text-gray-700 mt-4">
        By using Love-Language-GPT, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. Thank you for being a part of our community!
      </p>

      <br />

      <Link href="/" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">← Back To Homepage</Link>
    </div>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "Terms of Service",
  meta: [
    {
      name: "description",
      content: "Terms of service page for Love-Language-GPT",
    },
  ],
};