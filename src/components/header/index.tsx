"use client"

import { Flex, Line, ToggleButton } from "@/once-ui/components";
import { usePathname } from "next/navigation";
import { routes } from "../../utils/config";
import styles from "./Header.module.scss";

export const Header = () => {
    const pathname = usePathname() ?? "";

    return (
        <Flex
            fitHeight
            fillWidth
            className={styles.position}
            as="header"
            zIndex={9}
            padding="8"
            horizontal="space-evenly"
            >
        {/* <Flex paddingLeft="0" vertical="center" textVariant="body-default-s" hide="s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex> */}
        <Flex horizontal="space-evenly" fillWidth>
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line vert maxHeight="24" />
              {routes["/experience"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="people"
                    href="/experience"
                    label={"Experience"}
                    selected={pathname === "/experience"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="people"
                    href="/experience"
                    selected={pathname === "/experience"}
                  />
                </>
              )}
              {routes["/projects"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="stack"
                    href="/projects"
                    label={"Projects"}
                    selected={pathname.startsWith("/projects")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="stack"
                    href="/projects"
                    selected={pathname.startsWith("/projects")}
                  />
                </>
              )}
              {/* {routes["/education"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="education"
                    href="/education"
                    label={"Education"}
                    selected={pathname.startsWith("/education")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="education"
                    href="/education"
                    selected={pathname.startsWith("/education")}
                  />
                </>
              )} */}
              {routes["/certifications"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="computer"
                    href="/certifications"
                    label={"Certifications"}
                    selected={pathname.startsWith("/certifications")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="computer"
                    href="/certifications"
                    selected={pathname.startsWith("/certifications")}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
};
