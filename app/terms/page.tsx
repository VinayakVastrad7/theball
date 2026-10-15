import type { Metadata } from "next";
 
import InfoPage from "@/components/layout/InfoPage";
 
export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Theball, covering access to the website, content, intellectual property and acceptable use.",
 
  alternates: {
    canonical: "/terms",
  },
 
  openGraph: {
    title: "Terms of Use | Theball",
    description:
      "Terms of Use for Theball, covering access to the website, content, intellectual property and acceptable use.",
    url: "https://theball.lol/terms",
    type: "website",
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Theball",
    description:
      "Terms of Use for Theball, covering access to the website, content, intellectual property and acceptable use.",
  },
};
 
export default function TermsPage() {
  return (
    <InfoPage
      currentPath="/terms"
      title="Terms of Use"
      description="Welcome to Theball. By accessing or using https://theball.lol, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website."
      lastUpdated="October 2026"
      sections={[
        {
          id: "about-theball",
          title: "About Theball",
          content: (
            <p>
              Theball is an independent football publication covering football
              tactics, analysis, player stories, football culture, satire,
              humor and fictional or absurd stories.
            </p>
          ),
        },
        {
          id: "use-of-the-website",
          title: "Use of the Website",
          content: (
            <>
              <p>
                You may access and use Theball for personal, non-commercial
                purposes and for lawful activities.
              </p>
 
              <p>
                You agree not to use the website in a way that could damage,
                disable, overburden or interfere with the website or its
                availability to other visitors.
              </p>
            </>
          ),
        },
        {
          id: "content-and-accuracy",
          title: "Content and Accuracy",
          content: (
            <>
              <p>
                We aim to provide useful, entertaining and reasonably accurate
                football content. However, Theball does not guarantee that
                every piece of information published on the website will always
                be complete, current or error-free.
              </p>
 
              <p>
                Football analysis, opinions and predictions represent editorial
                views and should not be treated as guaranteed facts or
                outcomes.
              </p>
            </>
          ),
        },
        {
          id: "satire-and-fiction",
          title: "Satire and Fiction",
          content: (
            <>
              <p>
                Some content published by Theball may be satirical, humorous,
                fictional, exaggerated or intentionally absurd.
              </p>
 
              <p>
                Content presented as fictional or satirical should not be
                interpreted as factual reporting. Names, events,
                investigations and situations appearing in fictional stories
                may be invented for entertainment purposes.
              </p>
            </>
          ),
        },
        {
          id: "intellectual-property",
          title: "Intellectual Property",
          content: (
            <>
              <p>
                Unless otherwise stated, the original text, branding, graphics
                and other original material created for Theball belong to
                Theball or are used with appropriate permission.
              </p>
 
              <p>
                You may not reproduce, republish, redistribute or commercially
                exploit substantial portions of Theball&rsquo;s original
                content without permission.
              </p>
 
              <p>
                You may link to Theball articles and share links to publicly
                available pages provided that the source is clearly attributed.
              </p>
            </>
          ),
        },
        {
          id: "third-party-content-and-links",
          title: "Third-Party Content and Links",
          content: (
            <p>
              The website may contain links to third-party websites, services
              or platforms. These websites operate independently from Theball,
              and we are not responsible for their content, policies,
              availability or practices.
            </p>
          ),
        },
        {
          id: "advertising",
          title: "Advertising",
          content: (
            <>
              <p>
                Theball may display advertisements from third-party advertising
                providers. Advertisements may change over time and may be
                selected or delivered by third-party systems.
              </p>
 
              <p>
                Theball is not responsible for the products, services or claims
                made by third-party advertisers.
              </p>
            </>
          ),
        },
        {
          id: "limitation-of-liability",
          title: "Limitation of Liability",
          content: (
            <p>
              Theball is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the extent permitted by applicable
              law, Theball is not responsible for losses or damages arising
              from reliance on website content or temporary inability to access
              the website.
            </p>
          ),
        },
        {
          id: "changes-to-these-terms",
          title: "Changes to These Terms",
          content: (
            <p>
              These Terms of Use may be updated from time to time as the
              website develops. Any updated version will be published on this
              page with a revised update date.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          content: (
            <p>
              If you have questions about these Terms of Use or the website,
              you can contact Theball through the contact information made
              available on the website.
            </p>
          ),
        },
      ]}
    />
  );
}
 