import React from "react";
import styled from "styled-components";
import NextLink from "next/link";
import { Flex, Text, Blockquote, Image, Link, Button } from "..";
import { FlexBoxProps } from "../Layout/Flex";

type ContainerProps = FlexBoxProps & { reverse?: boolean };

const ArticleContainer = styled(Flex).attrs<ContainerProps, ContainerProps>(
  ({ reverse }) => ({
    flexDirection: reverse ? "row-reverse" : "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    width: "100%",
    mt: "5rem",
  })
)``;
const ArticleContent = styled(Flex).attrs<ContainerProps, ContainerProps>(
  ({ reverse }) => ({
    flex: "1 1 50%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: reverse ? "flex-start" : "flex-end",
    px: 4,
    pr: "3rem",
    bg: "background.main",
  })
)`
  z-index: 3;
  min-width: 300px;
  > ${Text} {
    text-align: ${(p) => (p.reverse ? "start" : "end")};
  }
`;

const Hashtag = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: Dots-Bold;
  line-height: 1.7rem;
  font-size: 1rem;
  margin: 0 10px;
  color: var--t-contrast);
`;

const HashtagContainer = styled(Flex).attrs({
  position: "absolute",
  bg: "primary.c80",
  zIndex: 2,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "flex-start",
})`
  background-image: var(--filter-noise);
  background-repeat: repeat;
`;

type Article = {
  id: string;
  title?: string;
  subTitle?: string;
  content?: string;
  blockquote?: string;
  style?: any;
  image?: string;
  noFilterImage?: boolean;
  children?: React.ReactNode;
  reverse?: boolean;
  hashtags?: string[];
  link?: { href: string; label: string }[];
  href?: { href: string; label: string };
};

type ArticlesJSON = {
  title?: string;
  subTitle?: string;
  description?: string;
  data: Article[];
};

type Props = FlexBoxProps & {
  articlesJSON: ArticlesJSON;
};

export default function Articles({ articlesJSON, ...props }: Props) {
  const { title, subTitle, description, data } = articlesJSON;

  return (
    <Flex
      flex={1}
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="flex-end"
      width="100%"
      {...props}
    >
      <ArticleContent flexDirection="column" px={4} pr="3rem" my="3rem">
        {title ? <Text variant="h3">{title}</Text> : null}
        {subTitle ? (
          <Text variant="subtitle" mb={4}>
            {subTitle}
          </Text>
        ) : null}
        {description ? <Text variant="paragraph">{description}</Text> : null}
      </ArticleContent>
      {data.map((article, i) => {
        const Hashtagz = article.hashtags ? (
          <HashtagContainer>
            {article.hashtags.map((hashtag, i) => (
              <Hashtag key={hashtag + i} href={`#${hashtag}`}>
                #{hashtag}
              </Hashtag>
            ))}
          </HashtagContainer>
        ) : null;
        return (
          <ArticleContainer
            key={article.id + i}
            reverse={article.reverse}
            style={article.style}
          >
            {article.image ? (
              <Image
                flex="1 0 50%"
                flexDirection="column"
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
                src={article.image}
                alt={article.title}
                noFilter={article.noFilterImage}
              >
                {Hashtagz}
              </Image>
            ) : (
              Hashtagz
            )}
            <ArticleContent reverse={article.reverse}>
              {article.title ? (
                <Text variant="h4" mt={8} className="shift-title">
                  {article.title}
                </Text>
              ) : null}
              {article.subTitle ? (
                <Text variant="subtitle" mb={8}>
                  {article.subTitle}
                </Text>
              ) : null}
              {article.content ? (
                <Text variant="paragraph">{article.content}</Text>
              ) : null}
              {article.blockquote ? (
                <Blockquote>{article.blockquote}</Blockquote>
              ) : null}
              {article.href ? (
                <Link href={article.href.href} target="_blank" mt={4}>
                  {article.href.label}
                </Link>
              ) : null}
              {article.link
                ? article.link.map((link, j) => (
                    <NextLink key={link.href + j} href={link?.href}>
                      <Button whiteSpace="nowrap" mt={4}>
                        {link.label}
                      </Button>
                    </NextLink>
                  ))
                : null}

              {article.children}
            </ArticleContent>
          </ArticleContainer>
        );
      })}
    </Flex>
  );
}
