import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Image from "@theme/ThemedImage";
import styles from "@site/src/pages/index.module.css";
import Admonition from "@site/src/components/Admonition";

const socials = [
  {
    alt: "ícone do discord",
    src: "/images/assets/discord-icon.svg",
    href: "https://discord.com/invite/samp",
    size: 45,
  },
  {
    alt: "ícone do facebook",
    src: "/images/assets/facebook.svg",
    href: "https://www.facebook.com/openmultiplayer",
    size: 33,
  },
  {
    alt: "ícone do instagram",
    src: "/images/assets/instagram.svg",
    href: "https://instagram.com/openmultiplayer/",
    size: 33,
  },
  {
    alt: "ícone do twitch",
    src: "/images/assets/twitch.svg",
    href: "https://twitch.tv/openmultiplayer",
    size: 29,
  },
  {
    alt: "ícone do x",
    src: "/images/assets/x.svg",
    href: "https://x.com/openmultiplayer",
    size: 29,
    background: false,
  },
  {
    alt: "ícone do youtube",
    src: "/images/assets/youtube.svg",
    href: "https://youtube.com/openmultiplayer",
    size: 35,
  },
];

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <Admonition
        className="container"
        type="tip"
        title="Uma nova versão do servidor e launcher open.mp está disponível agora!"
      >
        A versão <b>1.4.0.2779</b> do servidor open.mp está disponível com várias correções,
        melhorias de desempenho e novos recursos!{" "}
        <Link to="https://www.open.mp/docs/changelog">Changelog</Link> |{" "}
        <Link to="https://github.com/openmultiplayer/open.mp/releases/latest">
          Download
        </Link>
        .
        <br />
        O launcher também recebeu uma atualização!{" "}
        <Link to="https://github.com/openmultiplayer/launcher/releases/latest">
          Veja o que há de novo
        </Link>
        .
      </Admonition>
      <div
        className="row"
        style={{ justifyContent: "space-evenly", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: 0,
            marginLeft: 0,
            maxWidth: 600,
          }}
        >
          <Heading as="h1" className="hero__title" style={{ color: "#9083d2" }}>
            Open Multiplayer
          </Heading>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "1.25rem" }}>
              Um mod multiplayer para Grand Theft Auto: San Andreas que é{" "}
              <b>totalmente compatível</b> com o{" "}
              <b>San Andreas Multiplayer</b>.
            </p>
          </div>
        </div>
        <div
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <div className={clsx("margin-bottom--sm", styles.buttons)}>
            <Link
              className={clsx(
                "button button--primary button--md",
                styles.button
              )}
              title="open.mp foi lançado!"
              to="https://github.com/openmultiplayer/open.mp/releases/latest"
            >
              Baixar open.mp (servidor) 🖥️
            </Link>
          </div>
          <div className={clsx("margin-bottom--sm", styles.buttons)}>
            <Link
              className={clsx(
                "button button--primary button--md",
                styles.button
              )}
              title="Baixe o launcher do open.mp"
              to="https://github.com/openmultiplayer/launcher/releases/latest"
            >
              Baixar launcher open.mp 🎮
            </Link>
          </div>
          <div className={clsx("margin-bottom--sm", styles.buttons)}>
            <Link
              className={clsx(
                "button button--secondary button--md",
                styles.button
              )}
              to="/docs/intro"
            >
              Documentação 📜
            </Link>
          </div>
        </div>
      </div>
      <div
        className="row margin-horiz--none margin-top--xl"
        style={{
          justifyContent: "center",
        }}
      >
        {socials.map((social, index) => {
          const iconSize = `${social.size}px`;
          const style: React.CSSProperties = {
            display: "flex",
            justifyContent: "center",
            ...(social.background && {
              backgroundColor: "#9083d2",
              width: `${social.size + 17}px`,
              height: `${social.size + 17}px`,
              borderRadius: 5,
            }),
          };

          return (
            <div
              style={{
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <a key={index} href={social.href} style={style} target="__blank">
                <Image
                  sources={{ light: social.src, dark: social.src }}
                  alt={social.alt}
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Open Multiplayer`}
      description="Um mod multiplayer para Grand Theft Auto: San Andreas que é totalmente compatível com San Andreas Multiplayer"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}