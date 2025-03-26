import { Column, RevealFx, Heading, Text, Flex } from "@/once-ui/components";
import { experience, person, social } from "@/utils/content";
import { baseURL } from "@/once-ui/resources/config";

export async function generateMetadata() {
    const title = experience.title;
    const description = experience.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://${baseURL}/about`,
        images: [
          {
            url: ogImage,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  }

export default function Experience() {
    return (
        <Column fillWidth fillHeight paddingY="s" paddingX="s" horizontal="center">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: person.name,
                        jobTitle: person.role,
                        description: experience.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            "@type": "Organization",
                            name: experience.work.experiences[0].company || "",
                        },
                    }),
                }}
            />

            <Column maxWidth="xl" horizontal="start">
                <Column maxWidth="s">
                    <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
                        <Heading wrap="balance" variant="display-strong-l">
                            {experience.headline}
                        </Heading>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
                        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                            {experience.subline}
                        </Text>
                    </RevealFx>
                </Column>
            </Column>
            {experience.display && (
                <Column fillWidth marginTop="xl">
                    <Heading as="h2" id={experience.work.title} variant="display-strong-s" marginBottom="m">
                        {experience.work.title}
                    </Heading>
                    <Column fillWidth gap="l" marginBottom="40">
                        {experience.work.experiences.map((my_experience, index) => (
                            <Column key={`${my_experience.company}-${experience.role}-${index}`} fillWidth>
                                <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                                <Text id={my_experience.company} variant="heading-strong-l">
                                    {my_experience.company}
                                </Text>
                                <Text variant="heading-default-xs" onBackground="neutral-weak">
                                    {my_experience.timeframe}
                                </Text>
                                </Flex>
                                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                                    {my_experience.role}
                                </Text>
                                <Column as="ul" gap="16">
                                {my_experience.achievements.map((achievement, index) => (
                                    <Text
                                        as="li"
                                        variant="body-default-m"
                                        key={`${experience.company}-${index}`}>
                                        {achievement}
                                    </Text>
                                ))}
                                </Column>
                            </Column>
                        ))}
                    </Column>
                </Column>
            )}
        </Column>
    );
};
