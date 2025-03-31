import { Column, Heading, Text } from "@/once-ui/components";
import { projects } from "@/utils/content";

export default function Projects() {
    return (
        <Column fillWidth fillHeight paddingX="s" horizontal="center">
            {/* <Column fillWidth marginTop="xl"> */}
                <Heading as="h2" id={projects.title} variant="display-strong-s" marginBottom="m">
                    {projects.title}
                </Heading>
                <Column fillWidth gap="l" marginBottom="40">
                    {projects.work.map((my_project, index) => (
                        <Column key={`${my_project.title}-${index}`} fillWidth>
                            <Text id={my_project.title} variant="heading-strong-l">
                                {my_project.title}
                            </Text>
                            <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                                {my_project.description}
                            </Text>
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
            {/* </Column> */}
        </Column>
    );
};
