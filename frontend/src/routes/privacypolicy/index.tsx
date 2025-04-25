import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Parentcont } from "~/components/Parentcont";

export default component$(() => {
  return (
    <Parentcont>
      <div class="max-w-3xl mx-auto p-6 bg-slate-100 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4">Privacy Policy for Love-Language-GPT</h1>
        <p class="text-gray-600 mb-4"><strong>Last Updated: 04/25/2025</strong></p>

        <h2 class="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p class="text-gray-700 mb-4">
          As of now, Love-Language-GPT does not collect personally identifiable information from users. However, we may collect the following types of information:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Usage Data:</strong> We may collect information about how the application is accessed and used. This usage data may include information such as your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our application that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
        <p class="text-gray-700 mb-4">
          The information we collect is used for the following purposes:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
          <li><strong>To Improve Our Application:</strong> We may use the information to analyze usage patterns and improve the functionality and user experience of Love-Language-GPT.</li>
          <li><strong>To Communicate with Users:</strong> If you provide us with contact information, we may use it to respond to your inquiries or provide updates about the application.</li>
        </ul>

        <h2 class="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p class="text-gray-700 mb-4">
          We take the security of your data seriously. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. Please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 class="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p class="text-gray-700 mb-4">
          Love-Language-GPT may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <h2 class="text-xl font-semibold mt-6 mb-2">5. Children's Privacy</h2>
        <p class="text-gray-700 mb-4">
          Love-Language-GPT is not intended for use by children under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
        </p>

        <h2 class="text-xl font-semibold mt-6 mb-2">6. Changes to This Privacy Policy</h2>
        <p class="text-gray-700 mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 class="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p class="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at <Link href="https://github.com/jellyfishing2346/Love-Language-GPT/issues" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">https://github.com/jellyfishing2346/Love-Language-GPT/issues</Link>.
        </p>

        <p class="text-gray-700 mt-4">
          By using Love-Language-GPT, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Thank you for being a part of our community!
        </p>

        <br />

        <Link href="/" class="underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500">← Back To Homepage</Link>

      </div>
    </Parentcont>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Privacy policy page for Love-Language-GPT",
    },
  ],
};