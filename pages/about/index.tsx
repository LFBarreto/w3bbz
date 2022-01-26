import Head from "next/head";
import { Articles } from "../../src/components";

export default function About() {
  return (
    <>
      <Head>
        <title>W3BBZ - About</title>
      </Head>
      <Articles
        articlesJSON={{
          title: "About",
          subTitle:
            "Where am i? What is this? Why did i step on this unholy land?",
          description: `"i don't understand the question and i won't respond to it"`,
          data: [
            {
              id: "about-01",
              title: `
              `,
              subTitle: "WEB + WEEB + WEB.3 = W3B.BZ",
              content: `W3BBZ comes from my passion 
              of all things WEB, 
              brutalist design and everything random.
              (Plus the domain was dirt cheap 🤡)

              Hope you'll enjoy the chaotic energy.

              You'll find here some cool projects i've been crafting 
              with tears and despair during my free time,
              currently arround NFT and generative art..
              `,
              image: "/images/weeb.gif",
              href: {
                href: "https://github.com/LFBarreto/w3bbz",
                label: "Check my code",
              },
              reverse: true,
            },
            {
              id: "about-01",
              title: "Oi!",
              subTitle: "About me",
              content: `
              I'm Luiz and i do stuff on computers and sh*t
              Originaly from sunny Brazil
              I moved to France when i was 7. 

              Loves science math and designing stuff. 
              Been programming for about 6y now and still loving it. 
              I'm always up for a challenge especially if it involves some cool UI stuff.

              Hope you enjoy and reach out to me if you wanna hang and talk about something.

              `,
              image: "/images/about-me.jpeg",
            },
          ],
        }}
      />
    </>
  );
}
