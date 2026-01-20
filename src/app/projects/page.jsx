import { Button, Column, Flex, Heading, IconButton, Text } from "@/once-ui/components";
import { projects } from "@/utils/content";
import LinkPreview from "@/components/LinkPreview";

export default function Projects() {
    return (
        <Column fillWidth fillHeight paddingX="s" horizontal="center">
            <Heading as="h2" id={projects.title} variant="display-strong-s" marginBottom="m">
                {projects.title}
            </Heading>
            <Heading as="h3" onBackground="neutral-strong" style={{ marginBottom: "0px"}}>
                <Flex alignItems="center" justifyContent="center" gap="8">
                <span>Visit my github to see more projects:</span>
                    <Flex>
                        <Button
                            className="s-flex-hide"
                            href={"https://github.com/uggoprince"}
                            prefixIcon={"github"}
                            label={"GitHub"}
                            size="s"
                            variant="secondary"
                        />
                        <IconButton
                            className="s-flex-show"
                            size="l"
                            href={"https://github.com/uggoprince"}
                            icon={"github"}
                            variant="secondary"
                        />
                    </Flex>
                </Flex>
            </Heading>
            <Column fillWidth marginTop="l">
                <Column fillWidth gap="l" marginBottom="40">
                    {projects.work.map((my_project, index) => (
                        <Column key={`${my_project.title}-${index}`} fillWidth>
                            <Text id={my_project.title} variant="heading-strong-l">
                                {my_project.title}
                            </Text>
                            <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                                {my_project.description}
                            </Text>
                            {my_project.preview && 
                                <Column fillWidth marginBottom="s" horizontal="center">
                                    <LinkPreview url={my_project.link} />
                                </Column>
                            }
                            <Column as="ul" gap="16">
                                {my_project.about.map((about, index) => (
                                    <Text
                                        as="li"
                                        variant="body-default-m"
                                        key={`${"about"}-${index}`}>
                                        {about}
                                    </Text>
                                ))}
                            </Column>
                        </Column>
                    ))}
                </Column>
            </Column>
        </Column>
    );
};
