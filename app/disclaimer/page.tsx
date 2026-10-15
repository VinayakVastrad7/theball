
import type { Metadata } from "next";

import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read Theball's disclaimer covering fiction, satire, parody, real-world references, entertainment, editorial content, advertising, and external links.",

  alternates: {
    canonical: "/disclaimer",
  },

  openGraph: {
    title: "Disclaimer | Theball",
    description:
      "Understand the fictional, satirical, humorous, and entertainment-focused nature of Theball's content.",
    url: "https://theball.lol/disclaimer",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Theball",
    description:
      "Understand the fictional, satirical, humorous, and entertainment-focused nature of Theball's content.",
  },
};

export default function DisclaimerPage() {
  return (
    <InfoPage
      currentPath="/disclaimer"
      title="Disclaimer"
      description="Theball is built around fiction, satire, parody, humour, and entertainment. This page explains how our content should be understood."
      lastUpdated="October 2026"
      sections={[
        {
          id: "purpose-of-theball",
          title: "1. The purpose of Theball",
          content: (
            <>
              <p>
                Theball is an independent football publication created to
                entertain readers through fictional storytelling, satire,
                parody, humour, commentary, and creative interpretations of
                the world surrounding football.
              </p>

              <p>
                Our content may explore football clubs, players, managers,
                transfers, finances, politics, media, supporters, organisations,
                controversies, and the wider culture of the sport. We may use
                absurd scenarios, exaggerated situations, imaginary characters,
                invented dialogue, irony, and unconventional storytelling to
                entertain readers or make a satirical point.
              </p>

              <p>
                Unless a piece is expressly identified and presented as factual
                reporting, readers should not assume that a story, statement,
                allegation, quotation, document, event, or scenario published
                on Theball represents an actual occurrence.
              </p>

              <p>
                The primary purpose of our fictional and satirical material is
                entertainment and creative expression. It is not intended to
                deceive readers into believing that invented events are real.
              </p>
            </>
          ),
        },
        {
          id: "fiction-humour-and-satire",
          title: "2. Fiction, humour, satire and parody",
          content: (
            <>
              <p>
                Theball publishes fictional and satirical content. Some pieces
                may resemble news reports, investigations, interviews, case
                files, opinion columns, official announcements, or other forms
                of serious journalism. A realistic writing style is a creative
                choice and does not, by itself, make the content factual.
              </p>

              <p>
                Our stories may contain invented characters, fictional
                organisations, imaginary incidents, fabricated conversations,
                fictional documents, exaggerated claims, absurd premises, and
                deliberately implausible situations. These elements may be
                used to create humour, parody familiar formats, explore an
                idea, or comment on football and society.
              </p>

              <p>
                References to corruption, financial disputes, dressing-room
                conflicts, transfers, conspiracies, rivalries, investigations,
                or other dramatic events within a fictional story are not
                evidence that such events occurred. Invented allegations or
                investigative details must not be treated as verified facts.
              </p>

              <p>
                Satire may use irony, exaggeration, absurdity, and
                deliberately provocative scenarios. A satirical passage may
                not express the literal view of the publication or its
                creators, and a fictional character's words do not necessarily
                represent our views.
              </p>

              <p>
                All content should be interpreted in its proper context,
                including the article's presentation, category, accompanying
                notices, and overall satirical or fictional purpose.
              </p>
            </>
          ),
        },
        {
          id: "real-world-references",
          title: "3. Real people, clubs, events and organisations",
          content: (
            <>
              <p>
                Our fictional stories may draw inspiration from the real
                world. They may refer to actual football clubs, players,
                managers, public figures, leagues, governing bodies, companies,
                media organisations, public statements, historical events,
                controversies, or widely discussed circumstances.
              </p>

              <p>
                Such references may provide context for a joke, parody,
                fictional scenario, or satirical observation. Real-world
                inspiration does not mean that every detail in a story is
                true. Events may be reimagined, timelines altered, characters
                invented, and circumstances exaggerated for creative purposes.
              </p>

              <p>
                The appearance of a real person's or organisation's name in a
                fictional story does not, on its own, imply that the person or
                organisation participated in, approved, endorsed, or was
                responsible for the fictional events described.
              </p>

              <p>
                Any invented quotation, private conversation, accusation,
                document, action, or incident involving a recognisable person
                or organisation should not be interpreted as an authentic
                record or verified allegation merely because it appears in a
                realistic narrative.
              </p>

              <p>
                Where we discuss actual events or make factual claims, those
                claims should be distinguished from fictional embellishment,
                opinion, humour, and interpretation. Readers should consult
                reliable sources when verifying important factual matters.
              </p>
            </>
          ),
        },
        {
          id: "investigation-pieces-and-case-files",
          title: "4. Investigation Pieces and Case Files",
          content: (
            <>
              <p>
                Investigation Pieces and Case Files are creative storytelling
                formats used by Theball. They may adopt the language, structure,
                tone, or visual conventions of investigative journalism to
                create an immersive fictional experience.
              </p>

              <p>
                Stories in these sections may feature imaginary leads,
                invented evidence, fictional sources, suspicious circumstances,
                dramatic revelations, fabricated correspondence, or
                interconnected storylines. Their presentation as an
                investigation does not mean that a real investigation has
                taken place.
              </p>

              <p>
                A fictional case may be developed over several articles, with
                recurring characters, evolving narratives, and new fictional
                details. Continuity within that story is part of the creative
                format, not proof of a real-world event.
              </p>

              <p>
                Readers should not use these stories as evidence when making
                claims about real people, clubs, companies, or organisations.
                Unless clearly and independently substantiated, allegations
                and evidence presented within fiction should be understood
                as narrative elements.
              </p>
            </>
          ),
        },
        {
          id: "editorial-and-opinion-content",
          title: "5. Editorial content, opinions and analysis",
          content: (
            <>
              <p>
                Theball may also publish commentary, opinions, football
                analysis, tactical observations, cultural criticism, and
                interpretations of real-world developments.
              </p>

              <p>
                Opinions and interpretations are not necessarily statements
                of objective fact. Football analysis may involve judgment,
                incomplete information, changing circumstances, or reasonable
                differences of opinion.
              </p>

              <p>
                We aim to communicate clearly, but we do not guarantee that
                every article is exhaustive, error-free, current, or suitable
                for every reader's needs. Football information, statistics,
                transfer developments, rules, financial figures, and other
                details may change or require further verification.
              </p>

              <p>
                Nothing on Theball should be treated as professional legal,
                financial, investment, medical, or other specialised advice.
                Readers should seek appropriate professional guidance where
                necessary.
              </p>
            </>
          ),
        },
        {
          id: "accuracy-and-corrections",
          title: "6. Accuracy, errors and corrections",
          content: (
            <>
              <p>
                We make reasonable efforts to distinguish fiction and satire
                from factual material. However, errors, ambiguities, outdated
                information, or unintended misunderstandings may occur.
              </p>

              <p>
                If you believe a factual article contains an error, a
                fictional story could reasonably be mistaken for a factual
                allegation, or content requires clarification, please contact
                Theball through the website's Contact page.
              </p>

              <p>
                We may review reports and, where appropriate, correct,
                clarify, update, label, or remove material. Contacting us does
                not guarantee a particular outcome, but relevant concerns can
                be brought to our attention.
              </p>
            </>
          ),
        },
        {
          id: "copyright-and-references",
          title: "7. Copyright, trademarks and references",
          content: (
            <>
              <p>
                Names, club identities, trademarks, logos, and other
                identifying references may appear in articles for purposes
                such as discussion, commentary, criticism, parody, or
                storytelling.
              </p>

              <p>
                Unless explicitly stated otherwise, Theball is not claiming
                ownership of third-party names, marks, or materials. The
                appearance of a club, company, league, or other organisation
                on this website does not imply official affiliation,
                sponsorship, approval, or endorsement.
              </p>

              <p>
                Rights in third-party materials remain with their respective
                owners. Any use of third-party material is subject to
                applicable law and the rights of the relevant owners.
              </p>
            </>
          ),
        },
        {
          id: "external-links",
          title: "8. External websites and resources",
          content: (
            <>
              <p>
                Articles may contain links to external websites, publications,
                social media accounts, videos, or other resources for
                reference, context, or convenience.
              </p>

              <p>
                External websites operate independently of Theball. We do
                not control or guarantee their availability, accuracy,
                security, content, or privacy practices. A link does not
                necessarily constitute an endorsement of the linked website
                or its views.
              </p>

              <p>
                Readers should review the relevant website's terms and privacy
                policies before using its services or providing personal
                information.
              </p>
            </>
          ),
        },
        {
          id: "advertising-and-commercial-content",
          title: "9. Advertising and commercial content",
          content: (
            <>
              <p>
                Theball may display advertising, sponsored material,
                affiliate links, or other commercial placements in the future
                to support the publication.
              </p>

              <p>
                Where applicable, sponsored or commercial material should be
                identified clearly. Advertising does not automatically
                constitute an endorsement or guarantee of a product, service,
                company, or organisation.
              </p>

              <p>
                Third-party advertisers and services may operate under their
                own terms, policies, and practices. Readers should evaluate
                commercial claims independently and review the relevant
                terms before making purchases or using a service.
              </p>
            </>
          ),
        },
        {
          id: "limitation-of-liability",
          title: "10. Limitation of responsibility",
          content: (
            <>
              <p>
                To the extent permitted by applicable law, Theball provides
                its content on an "as is" and "as available" basis, without
                guaranteeing that the website or its content will always be
                uninterrupted, complete, accurate, or suitable for a
                particular purpose.
              </p>

              <p>
                Readers are responsible for exercising their own judgment
                when interpreting content, particularly where fiction,
                satire, commentary, and factual references appear together.
                Fictional stories should not be relied upon as evidence of
                actual events or as a basis for decisions about real people
                or organisations.
              </p>

              <p>
                To the extent permitted by applicable law, Theball disclaims
                liability for losses arising from reliance on website
                content. Nothing in this disclaimer excludes or limits any
                liability or right that cannot lawfully be excluded or
                limited.
              </p>
            </>
          ),
        },
        {
          id: "changes-to-this-disclaimer",
          title: "11. Changes to this disclaimer",
          content: (
            <>
              <p>
                This disclaimer may be updated as Theball develops its
                content, features, and publishing practices. Changes will be
                reflected on this page, together with an updated revision
                date where appropriate.
              </p>

              <p>
                Readers are encouraged to review this page periodically.
                Continued use of the website is subject to applicable terms
                and laws; it does not remove any rights that readers have
                under applicable law.
              </p>
            </>
          ),
        },
      ]}
      finalNote={{
        title: "The bottom line",
        text: "Theball is here for fun, humour, satire, parody, and creative storytelling. Our fictional stories may draw inspiration from real-world football, public figures, clubs, events, and controversies, but invented scenarios, dialogue, evidence, and allegations are not factual simply because they sound realistic. Please read our work in context, enjoy the fiction, and verify important factual claims through reliable sources.",
      }}
    />
  );
}
