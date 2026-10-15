
import type { Metadata } from "next";

import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Theball handles personal information, cookies, analytics, advertising, and third-party services when you visit our website.",

  alternates: {
    canonical: "/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Theball",
    description:
      "Understand how Theball may collect, use, and protect information, including through cookies, analytics, and advertising services.",
    url: "https://theball.lol/privacy-policy",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Theball",
    description:
      "Understand how Theball may collect, use, and protect information, including through cookies, analytics, and advertising services.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      currentPath="/privacy-policy"
      title="Privacy Policy"
      description="How information may be collected, used, stored, and shared when you visit Theball."
      lastUpdated="October 2026"
      sections={[
        {
          id: "introduction",
          title: "1. Introduction",
          content: (
            <>
              <p>
                Theball is an independent football publication focused on
                stories, commentary, satire, fiction, and entertainment. We
                respect visitors' privacy and aim to explain clearly how
                information may be handled when you use our website.
              </p>

              <p>
                This Privacy Policy describes the information that may be
                collected, the purposes for which it may be used, and the
                choices that may be available to you.
              </p>

              <p>
                The information actually collected depends on which website
                features and third-party services are enabled at a given time.
                References to potential future services in this policy do not
                mean that those services are already active.
              </p>
            </>
          ),
        },
        {
          id: "information-we-collect",
          title: "2. Information we may collect",
          content: (
            <>
              <p>
                Readers can browse publicly available articles without
                creating an account. Depending on how the website is accessed
                and which services are enabled, the following categories of
                information may be processed:
              </p>

              <ul>
                <li>
                  <strong>Technical information:</strong> IP address, browser
                  type, device information, operating system, and language
                  settings.
                </li>
                <li>
                  <strong>Usage information:</strong> pages viewed, navigation
                  activity, referring pages, approximate visit times, and
                  interactions with website features.
                </li>
                <li>
                  <strong>General location information:</strong> approximate
                  location inferred from an IP address, where available.
                </li>
                <li>
                  <strong>Communication information:</strong> details you
                  choose to provide when contacting us.
                </li>
                <li>
                  <strong>Cookie and advertising information:</strong>{" "}
                  identifiers and preferences processed by cookies or similar
                  technologies, where these are used.
                </li>
              </ul>

              <p>
                Some technical information may be processed automatically by
                hosting providers or other services needed to deliver and
                protect the website. The specific information processed
                depends on the services in use.
              </p>

              <p>
                We do not ask readers to provide personal information merely
                to read publicly available articles.
              </p>
            </>
          ),
        },
        {
          id: "information-you-provide",
          title: "3. Information you provide",
          content: (
            <>
              <p>
                If you contact Theball, you may choose to provide your name,
                email address, message, and any other information you include
                in your communication.
              </p>

              <p>
                We may use this information to respond to questions, review
                correction requests, investigate reported problems, address
                complaints, or manage editorial and business enquiries.
              </p>

              <p>
                Please avoid including sensitive personal information in
                messages unless it is genuinely necessary for your enquiry.
              </p>
            </>
          ),
        },
        {
          id: "purposes-and-legal-bases",
          title: "4. How information may be used",
          content: (
            <>
              <p>
                Depending on the services enabled and applicable law,
                information may be used to:
              </p>

              <ul>
                <li>Deliver and maintain the website and its content.</li>
                <li>Diagnose errors, improve performance, and protect against abuse.</li>
                <li>Understand readership and general website usage.</li>
                <li>Respond to messages, complaints, and correction requests.</li>
                <li>Store and respect privacy or advertising preferences.</li>
                <li>
                  Display, measure, and manage advertising where advertising
                  services are enabled.
                </li>
                <li>Meet applicable legal obligations.</li>
              </ul>

              <p>
                Where required by applicable law, processing will rely on an
                appropriate legal basis, such as consent, legitimate interests,
                contractual necessity, or compliance with a legal obligation.
                The relevant basis depends on the processing activity and
                jurisdiction.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "5. Cookies and similar technologies",
          content: (
            <>
              <p>
                Cookies are small files stored by a website or service on your
                device. Similar technologies may also be used to remember
                settings, maintain security, measure usage, or support
                advertising.
              </p>

              <p>
                Depending on the features enabled, Theball or its service
                providers may use:
              </p>

              <ul>
                <li>
                  <strong>Essential technologies</strong> needed for website
                  delivery, security, or core functionality.
                </li>
                <li>
                  <strong>Preference technologies</strong> that remember
                  settings or choices.
                </li>
                <li>
                  <strong>Analytics technologies</strong> that help understand
                  website traffic and usage.
                </li>
                <li>
                  <strong>Advertising technologies</strong> used to deliver,
                  limit, personalise, or measure advertisements where
                  applicable.
                </li>
              </ul>

              <p>
                You may be able to manage or delete cookies through your
                browser settings. Blocking certain cookies may affect some
                website functions. Browser controls do not necessarily prevent
                all forms of data processing by third-party services.
              </p>

              <p>
                Where consent is legally required for non-essential cookies or
                similar technologies, those technologies should be used in
                accordance with the applicable consent requirements.
              </p>
            </>
          ),
        },
        {
          id: "analytics",
          title: "6. Analytics and performance measurement",
          content: (
            <>
              <p>
                Theball may use analytics or performance measurement services
                to understand readership, identify technical issues, and
                improve the website.
              </p>

              <p>
                Depending on the provider and configuration, analytics may
                process information such as pages viewed, referral sources,
                device categories, approximate location, and interactions with
                website features.
              </p>

              <p>
                If analytics services are enabled, their providers may process
                information under their own terms and privacy policies.
                Applicable consent requirements and available privacy controls
                should be respected.
              </p>

              <p>
                This section describes possible analytics practices and is
                not a statement that any particular analytics tool is
                currently installed or active.
              </p>
            </>
          ),
        },
        {
          id: "advertising",
          title: "7. Advertising and Google AdSense",
          content: (
            <>
              <p>
                Theball may display advertisements through third-party
                advertising providers, including Google AdSense, if and when
                advertising is enabled.
              </p>

              <p>
                Advertising providers may use cookies, device identifiers,
                IP addresses, or similar technologies to deliver and measure
                advertisements, limit repeated advertisements, detect invalid
                activity, or personalise advertisements where permitted.
              </p>

              <p>
                Depending on your location, consent choices, and applicable
                requirements, advertisements may be personalised or
                non-personalised. The information processed and the controls
                available may differ between advertising providers.
              </p>

              <p>
                Third-party advertising services operate under their own
                policies. For Google's advertising practices and available
                controls, consult Google's Privacy Policy and advertising
                information.
              </p>

              <p>
                The presence of AdSense code or an advertising configuration
                does not necessarily mean that advertisements are currently
                being displayed or that an advertising account has been
                approved.
              </p>

              <p>
                Where required, appropriate consent mechanisms and disclosures
                should be implemented before relevant advertising technologies
                are used.
              </p>
            </>
          ),
        },
        {
          id: "third-party-services",
          title: "8. Hosting and third-party services",
          content: (
            <>
              <p>
                Theball relies on technical infrastructure and may use
                third-party providers for hosting, security, website delivery,
                analytics, advertising, email, or other services.
              </p>

              <p>
                These providers may process information as necessary to
                provide their services, subject to the arrangements and
                policies applicable to those services.
              </p>

              <p>
                The website may also link to external websites, videos,
                publications, or social media platforms. When you visit an
                external service, its own privacy policy and practices apply.
                Theball does not control the data practices of independent
                third-party websites.
              </p>
            </>
          ),
        },
        {
          id: "sharing-information",
          title: "9. Sharing and disclosure of information",
          content: (
            <>
              <p>
                We do not intend to sell personal information that visitors
                provide directly to Theball.
              </p>

              <p>
                Information may be disclosed to service providers where
                reasonably necessary to operate, secure, or maintain the
                website, or to provide a feature you use.
              </p>

              <p>
                Information may also be disclosed where required by law,
                pursuant to a valid legal process, to protect the rights and
                security of the publication or others, or in connection with
                a legitimate organisational change.
              </p>

              <p>
                Third-party services may process information independently
                under their own terms. Their practices should be reviewed
                separately.
              </p>
            </>
          ),
        },
        {
          id: "international-transfers",
          title: "10. International processing",
          content: (
            <>
              <p>
                Some hosting, analytics, or advertising providers may process
                information in countries other than the country where you
                live.
              </p>

              <p>
                Where applicable law requires safeguards for international
                transfers of personal information, the relevant parties should
                implement appropriate safeguards.
              </p>
            </>
          ),
        },
        {
          id: "data-retention",
          title: "11. Data retention",
          content: (
            <>
              <p>
                Information should be retained only for as long as reasonably
                necessary for the purpose for which it was collected, subject
                to applicable legal, security, and operational requirements.
              </p>

              <p>
                For example, correspondence may be retained while an enquiry
                is being handled and for a reasonable period afterwards.
                Technical logs may be retained according to the practices of
                the relevant hosting or service provider.
              </p>

              <p>
                Retention periods may differ depending on the type of
                information, the service involved, and applicable law.
              </p>
            </>
          ),
        },
        {
          id: "data-security",
          title: "12. Data security",
          content: (
            <>
              <p>
                We aim to take reasonable measures to protect information
                against unauthorised access, loss, misuse, alteration, or
                disclosure.
              </p>

              <p>
                No website, online transmission, or storage system can be
                guaranteed to be completely secure. We therefore cannot
                promise absolute security.
              </p>
            </>
          ),
        },
        {
          id: "your-rights-and-choices",
          title: "13. Your privacy rights and choices",
          content: (
            <>
              <p>
                Depending on your location and applicable law, you may have
                rights concerning your personal information. These may include
                requesting access, correction, deletion, restriction of
                processing, or a copy of certain information.
              </p>

              <p>
                You may also have the right to withdraw consent where
                processing relies on consent, or to object to certain
                processing activities.
              </p>

              <p>
                You can manage some cookie settings through your browser and,
                where available, use the privacy controls provided by
                advertising or analytics services.
              </p>

              <p>
                To make a privacy request concerning information you have
                provided directly to Theball, contact us using the contact
                details available on the website. We may need to verify your
                request before taking action. Rights and exceptions vary by
                jurisdiction.
              </p>
            </>
          ),
        },
        {
          id: "childrens-privacy",
          title: "14. Children's privacy",
          content: (
            <>
              <p>
                Theball is a general-audience publication and does not
                intentionally seek to collect personal information from
                children in violation of applicable law.
              </p>

              <p>
                If you believe a child has provided personal information
                directly to us and it should be reviewed or deleted, please
                contact us with sufficient details to identify the concern.
              </p>
            </>
          ),
        },
        {
          id: "changes-to-this-policy",
          title: "15. Changes to this policy",
          content: (
            <>
              <p>
                We may update this Privacy Policy as the website, its
                features, third-party services, or applicable legal
                requirements change.
              </p>

              <p>
                The revised policy will be published on this page, with the
                update date changed where appropriate. Readers should review
                this page periodically.
              </p>
            </>
          ),
        },
      ]}
      finalNote={{
        title: "Privacy questions",
        text: "If you have questions or concerns about this Privacy Policy or information you have provided directly to Theball, please contact us through the Contact page. Please do not include unnecessary sensitive information in your message.",
      }}
    />
  );
}
