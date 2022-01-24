import React from "react";
import styled from "styled-components";
import { Flex, Text, Blockquote, Image } from "..";

const ArticleContainer = styled(Flex).attrs<{ reverse?: boolean }>(
  ({ reverse }) => ({
    flexDirection: reverse ? "row-reverse" : "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    width: "100%",
    mt: "3rem",
  })
)<{ reverse?: boolean }>``;
const ArticleContent = styled(Flex).attrs<{ reverse?: boolean }>(
  ({ reverse }) => ({
    flex: "1 1 50%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: reverse ? "flex-start" : "flex-end",
    px: 4,
    pr: reverse ? 0 : "3rem",
    pl: reverse ? "3rem" : 0,
    bg: "background.main",
  })
)<{ reverse?: boolean }>`
  z-index: 3;
  min-width: 300px;
  > ${Text} {
    text-align: ${(p) => (p.reverse ? "start" : "end")};
  }
`;

type Article = {
  id: string;
  title?: string;
  subTitle?: string;
  content?: string;
  blockquote?: string;
  style?: any;
  image?: string;
  children?: React.ReactNode;
  reverse?: boolean;
};

type ArticlesJSON = {
  title?: string;
  subTitle?: string;
  description?: string;
  data: Article[];
};

type Props = {
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
      pt={153}
      {...props}
    >
      <ArticleContent flexDirection="column" px={4} pr="3rem" my="3rem">
        {title ? <Text variant="h3">{title}</Text> : null}
        {subTitle ? <Text variant="subtitle">{subTitle}</Text> : null}
        {description ? <Text variant="paragraph">{description}</Text> : null}
      </ArticleContent>
      {data.map((article, i) => (
        <ArticleContainer
          key={article.id + i}
          reverse={article.reverse}
          style={article.style}
        >
          {article.image ? (
            <Image flex="1 0 50%" src={article.image} alt={article.title} />
          ) : null}
          <ArticleContent reverse={article.reverse}>
            {article.title ? <Text variant="h4">{article.title}</Text> : null}
            {article.subTitle ? (
              <Text variant="subtitle" mb={16}>
                {article.subTitle}
              </Text>
            ) : null}
            {article.content ? (
              <Text variant="paragraph">{article.content}</Text>
            ) : null}
            {article.blockquote ? (
              <Blockquote>{article.blockquote}</Blockquote>
            ) : null}
            {article.children}
          </ArticleContent>
        </ArticleContainer>
      ))}
    </Flex>
  );
}
