import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import Flex from "./Flex";
import Text from "../Text";
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
  z-index: 4;
  transform: ${(p) => (p.isOpen ? "translate(0, 152px)" : "none")};
  ${(p) => p.theme.transition(["transform"])}

  #toggleButton {
    transform: rotate(90deg);
    text-shadow: 0.3rem 0px ${(p) => p.theme.colors.neutral.c00},
      0.35rem 0px ${(p) => p.theme.colors.neutral.c00};
  }
  #toggleThemeButton {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
  #title {
    padding-top: 0.5rem;
    line-height: 44px;
    text-shadow: 0.95rem 0px ${(p) => p.theme.colors.primary.c80},
      1.05rem 0px ${(p) => p.theme.colors.primary.c80};
  }
`;

const ColorBox = styled(Flex).attrs({
  bg: "primary.c80",
  color: "primary.c80",
  flex: 1,
})<{ isOpen?: boolean }>`
  position: sticky;
  top: -174px;
  left: 0;
  width: 100%;
  min-height: 152px;
  z-index: 0;
  transform: ${(p) => (p.isOpen ? "translate(0, 152px)" : "none")};
  box-shadow: 0px -5px 0px 0px currentColor;

  ${(p) => p.theme.transition(["transform"])}
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

export default function Header() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { t } = useTranslation("nav");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  useEffect(() => {
    document.body.className = theme || "";
  }, [theme]);

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={
            theme === "light" ? "hsl(247, 56%, 68%)" : "hsl(120, 80%, 50%)"
          }
        />
      </Head>
      <ColorBox isOpen={isOpen} />
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
            {theme === "light" ? "🌝" : "🌚"}
          </Button>
          <Button
            variant="h5"
            onClick={() => router.push("/")}
            tabIndex={isOpen ? 0 : -1}
            color="textContrast"
          >
            {router.asPath == "/" ? ">>>" : ""}
            {t("home")}
          </Button>
          <Button
            variant="h5"
            onClick={() => router.push("/nft")}
            tabIndex={isOpen ? 0 : -1}
            color="textContrast"
          >
            {router.asPath == "/nft" ? ">>>" : undefined}
            {t("nft")}
          </Button>
          <Button
            variant="h5"
            onClick={() => router.push("/about")}
            tabIndex={isOpen ? 0 : -1}
            color="textContrast"
          >
            {router.asPath == "/about" ? ">>>" : undefined}
            {t("about")}
          </Button>
        </MenuContainer>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          height="75px"
        >
          <Text id="title" variant="h1">
            W3BBZ
          </Text>

          <Button id="toggleButton" onClick={toggle} variant="h5">
            {isOpen ? "<<<" : ">>>"}
          </Button>
        </Flex>
      </Container>
    </>
  );
}
