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
              title: "Oi!",
              subTitle: "I'm Luiz and i'm do stuff on computers and sh*t",
              content: `Originaly from sunny Brazil
              I moved to France when i was 7. 

              Loves science math and designing stuff. 
              Been programming for about 6years now and still loving it. 
              I'm always up for a challenge especialy if it involves some cool UI stuff.

              You'll find some cool projects i've been crafting with tears and despair during my free time.
              Hope you enjoy and reah out to me if you wanna hang and talk about something.

              `,
              image: "/images/about-me.jpeg",
            },
          ],
        }}
      />
    </>
  );
}
