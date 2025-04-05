import { Avatar, Button, Column, Flex, Heading, Icon, IconButton, Tag, Text } from "@/once-ui/components";
import { person, social, about, techStack, education, home } from "@/utils/content";
import React from "react";
import styles from "./index.module.scss";
import { baseURL } from "@/once-ui/resources/config";

export async function generateMetadata() {
    const title = home.title;
    const description = home.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `https://${baseURL}`,
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

export default function Home() {
    return (
        <Column fillWidth minHeight={60} paddingY="s" paddingX="s" horizontal="center">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: home.title,
                    description: home.description,
                    url: `https://${baseURL}`,
                    image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
                    publisher: {
                    "@type": "Person",
                    name: person.name,
                    image: {
                        "@type": "ImageObject",
                        url: `${baseURL}${person.avatar}`,
                    },
                    },
                }),
                }}
            />
            <Flex fillWidth mobileDirection="column" horizontal="center">
                <Column
                    className={styles.avatar}
                    minWidth="160"
                    paddingX="l"
                    paddingBottom="xl"
                    gap="m"
                    horizontal="center"
                    flex={5}
                >
                    <Avatar src={person.avatar} size="xl" />
                    <Flex gap="8" vertical="center">
                        <Icon onBackground="accent-weak" name="globe" />
                        {person.location}
                    </Flex>
                    {person.languages.length > 0 && (
                        <Flex wrap gap="8">
                            {person.languages.map((language, index) => (
                            <Tag key={language} size="l">
                                {language}
                            </Tag>
                            ))}
                        </Flex>
                    )}
                    {/* {social.length > 0 && (
                        <Flex className={styles.blockAlign} paddingTop="0" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                            {social.map(
                            (item) =>
                                item.link && (
                                    <>
                                        <Button
                                            className="s-flex-hide"
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="secondary"
                                        />
                                        <IconButton
                                            className="s-flex-show"
                                            size="l"
                                            key={`${item.name}-icon`}
                                            href={item.link}
                                            icon={item.icon}
                                            variant="secondary"
                                        />
                                    </>
                                ),
                            )}
                        </Flex>
                        )} */}
                </Column>

                <Column className={styles.blockAlign} flex={7} maxWidth={40}>

                    <Column
                        id={about.intro.title}
                        fillWidth
                        minHeight="160"
                        vertical="center"
                        marginBottom="32"
                        
                    >
                        {about.calendar.display && (
                        <Flex
                            fitWidth
                            border="brand-alpha-medium"
                            className={styles.blockAlign}
                            style={{
                            backdropFilter: "blur(var(--static-space-1))",
                            }}
                            background="brand-alpha-weak"
                            radius="full"
                            padding="4"
                            gap="8"
                            marginBottom="m"
                            vertical="center"
                        >
                            <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                            <Flex paddingX="8">Schedule a call</Flex>
                            <IconButton
                                href={about.calendar.link}
                                data-border="rounded"
                                variant="secondary"
                                icon="chevronRight"
                            />
                        </Flex>
                        )}
                        <Heading className={styles.textAlign} variant="display-strong-l">
                            {person.name}
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-s"
                            onBackground="neutral-weak"
                            paddingTop="20"
                        >
                            {person.role}
                        </Text>
                        {social.length > 0 && (
                            <Flex key={'flex-for-social'} className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                                {social.map(
                                (item) =>
                                    item.link && (
                                        <Flex key={`${item.name}_${item.icon}`}>
                                            <Button
                                                className="s-flex-hide"
                                                key={`${item.name}_button`}
                                                href={item.link}
                                                prefixIcon={item.icon}
                                                label={item.name}
                                                size="s"
                                                variant="secondary"
                                            />
                                            <IconButton
                                                className="s-flex-show"
                                                size="l"
                                                key={`${item.name}-icon`}
                                                href={item.link}
                                                icon={item.icon}
                                                variant="secondary"
                                            />
                                        </Flex>
                                    ),
                                )}
                            </Flex>
                        )}
                    </Column>
                </Column>
            </Flex>
            <Flex fillWidth mobileDirection="column">
                {about.intro.display && (
                    <Column textVariant="body-default-m" fillWidth gap="m" marginBottom="xl">
                        {about.intro.description}
                    </Column>
                )}
            </Flex>
            {techStack.display && (
                <Column fillWidth minHeight={6}>
                    <Heading as="h2" id={techStack.title} variant="display-strong-s" marginBottom="xs">
                        {techStack.title}
                    </Heading>
                    {Object.keys(techStack.stacks).map(key => {
                        const stack: string[] = techStack.stacks[key as keyof typeof techStack.stacks];
                        return (
                            <Column key={key} gap="4" paddingX="0" wrap paddingY="s" minHeight={0} mobileDirection="column" >
                                <Flex fillWidth mobileDirection="column">
                                    <Text as="li" id={`${key}_text`} variant="heading-strong-l">
                                        {key}
                                    </Text>
                                </Flex>
                                <Flex fillWidth wrap gap="8">
                                    {stack.map((item: string) => {
                                        return (
                                            <Tag
                                                key={item}
                                                variant="info"
                                                size="m"
                                                label={item}
                                            />
                                        );
                                    })}
                                </Flex>
                            </Column>
                        );
                    })}
                </Column>
            )}
            {education.display && (
                <Column fillWidth>
                    <Heading as="h2" id={education.title} variant="display-strong-s" marginTop="l" marginBottom="xs">
                        {education.title}
                    </Heading>
                    <Column fillWidth gap="l" marginBottom="40">
                        {education.schools.map((institutes, index) => (
                        <Column key={`${institutes.school}`} fillWidth gap="4">
                            <Text id={institutes.school} variant="heading-strong-l">
                                {institutes.school}
                            </Text>
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                                {institutes.course}
                            </Text>
                        </Column>
                        ))}
                    </Column>
                </Column>
            )}
        </Column>
    );
}
