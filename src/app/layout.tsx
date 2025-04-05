import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { headers } from "next/headers";
// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from "next";

import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config";
import { Background, Column, Flex, ToastProvider } from "@/once-ui/components";

import { Inter } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { effects } from "@/utils/config";
import "@/app/globals.scss"; // Ensure this is a global SCSS file

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const code = Roboto_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: `https://${baseURL}`,
      images: [
				{
					url: og.image,
					alt: og.title,
				},
			],
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    twitter: {
			card: 'summary_large_image',
			title: og.title,
			description: og.description,
			images: [og.image],
		},
    metadataBase,
  };
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": schema.type,
  url: `https://${baseURL}`,
  logo: schema.logo,
  name: schema.name,
  description: schema.description,
  email: schema.email,
  sameAs: Object.values(social).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-theme={style.theme}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        primary.variable,
        code.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
      )}
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <ToastProvider>
        <Column 
        as="body" fillWidth margin="0" padding="0">
          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: 75,
              cursor: true,
            }}
            gradient={{
              display: true,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              opacity: effects.gradient.opacity as
                | 0
                | 10
                | 20
                | 30
                | 40
                | 50
                | 60
                | 70
                | 80
                | 90
                | 100,
              // colorStart: "accent-background-strong",
              colorStart: "brand-background-strong",
              colorEnd: "page-background",
              // colorEnd: "static-transparent",
            }}
            grid={{
              display: false,
              opacity: 100,
              // width: "0.15rem",
              color: "neutral-alpha-weak",
              // height: "0.15rem",
            }}
            dots={{
              display: effects.dots.display,
              color: effects.dots.color,
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              size: effects.dots.size as any,
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              opacity: effects.dots.opacity as any,
            }}
            lines={{
              display: effects.lines.display,
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              opacity: effects.lines.opacity as any,
            }}
          />
          <Header />
          <Flex
            position="relative"
            zIndex={0}
            fillWidth
            fillHeight
            paddingY="s"
            paddingX="24"
            horizontal="center"
            flex={1}
            style={{ minHeight: "80dvh" }}
          >
            <Flex horizontal="center" fillWidth maxWidth={62} style={{}}>
              {children}
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </ToastProvider>
    </Flex>
  );
}
