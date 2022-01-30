import React, { useCallback, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Flex from "./Flex";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "react-use";

const Container = styled(Flex).attrs({
  flex: 1,
  p: 2,
  pl: "0.5rem",
})<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: no-wrap;
  width: 100%;
  box-sizing: border-box;
  min-height: 123px;
  flex-direction: column;
  z-index: 4000;
  transform: ${(p) => (p.isOpen ? "translate(0, 152px)" : "none")};
  ${(p) => p.theme.transition(["transform"])}
  will-change: transform;

  .toggleButton {
    height: 44px;
    width: 44px;
    padding-left: 7px;
    transform: rotate(90deg);
  }
  #toggleThemeButton {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
  .title {
    height: 44px;
    text-shadow: 0.95rem 0px ${(p) => p.theme.colors.primary.c80},
      1.05rem 0px ${(p) => p.theme.colors.primary.c80};
  }
`;

const MenuContainer = styled(Flex).attrs({
  bg: "primary.c80",
  color: "primary.c80",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  p: 4,
})`
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 152px;
  box-shadow: 0px 5px 0px 0px currentColor, 0px -5px 0px 0px currentColor;
`;

function Header() {
  const [theme, setTheme] = useLocalStorage("theme", "");
  const [prefferedTheme, setPreferedTheme] = useLocalStorage(
    "prefered-theme",
    ""
  );
  const { t } = useTranslation("nav");
  const definedTheme = theme || prefferedTheme;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  useEffect(() => {
    const onPreferenceChange = (e: { matches: boolean }) => {
      setPreferedTheme(e.matches ? "dark" : "light");
    };
    if (window.matchMedia) {
      //sombre
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setPreferedTheme("dark");
      }

      //clair
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setPreferedTheme("light");
      }
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", onPreferenceChange);
    }
    return () => {
      if (window.matchMedia) {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", onPreferenceChange);
      }
    };
  }, [setPreferedTheme]);

  useEffect(() => {
    document.body.className = definedTheme || "";
  }, [definedTheme]);

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
    toggle();
  }, [toggle]);

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={
            definedTheme === "light"
              ? "hsl(247, 56%, 68%)"
              : "hsl(120, 80%, 50%)"
          }
        />
      </Head>
      <Container isOpen={isOpen}>
        <MenuContainer>
          <Button
            id="toggleThemeButton"
            tabIndex={isOpen ? 0 : -1}
            onClick={toggleTheme}
            variant="h5"
            lineHeight="44px"
            noInvert
          >
            {definedTheme === "light" ? "🌝" : "🌚"}
          </Button>
          <Link href="/">
            <Button
              variant="h5"
              tabIndex={isOpen ? 0 : -1}
              color="textContrast"
            >
              {router.asPath == "/" ? ">>>" : ""}
              {t("home")}
            </Button>
          </Link>
          <Link href="/nft">
            <Button
              variant="h5"
              tabIndex={isOpen ? 0 : -1}
              color="textContrast"
            >
              {router.asPath == "/nft" ? ">>>" : undefined}
              {t("nft")}
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="h5"
              tabIndex={isOpen ? 0 : -1}
              color="textContrast"
            >
              {router.asPath == "/about" ? ">>>" : undefined}
              {t("about")}
            </Button>
          </Link>
        </MenuContainer>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          height="75px"
          pr={4}
        >
          <Button
            className="title"
            variant="h1"
            title="scroll to top"
            onClick={scrollToTop}
            noInvert
          >
            W3BBZ
          </Button>
          <Flex flex="1" />
          <Button
            className="toggleButton"
            noInvert
            onClick={toggle}
            variant="h2"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {isOpen ? "X" : "||"}
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default memo(Header);
