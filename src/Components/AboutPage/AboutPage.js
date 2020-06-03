import React from "react";
import styled from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "../../theme/globalStyle";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  surface,
  error,
} = darkTheme;

const Wrapper = styled.section`
  margin: 0.5em;

  a {
    color: ${primaryPurple};
    margin-left: 0.1em;
    margin-right: 0.1em;
  }

  p {
    padding: 0.2em;
  }
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <h2>Welcome to Hacker News Mobile</h2>

      <p>
        Hacker News is a bit different from other community sites, and we'd
        appreciate it if you'd take a minute to read the following as well as
        the
        <a href="https://news.ycombinator.com/newsguidelines.html">
          official guidelines
        </a>
        on our website for posting, upvoting and commenting on articles.
      </p>

      <p>
        On HN mobile you can view the 10 newest, 10 all time best and top 10
        current articles posted and upvoted by the HN community. You can save
        articles to reread or return to. This gives you space to consume quality
        content that matters to you mindfully. You can visit the website to
        upvote or comment with more intention.
      </p>

      <p>
        HN is an experiment. As a rule, a community site that becomes popular
        will decline in quality. Our hypothesis is that this is not
        inevitable—that by making a conscious effort to resist decline, we can
        keep it from happening.
      </p>

      <p>
        Essentially there are two rules here: don't post or upvote crap links,
        and don't be rude or dumb in comment threads. A crap link is one that's
        only superficially interesting. Stories on HN don't have to be about
        hacking, because good hackers aren't only interested in hacking, but
        they do have to be deeply interesting.
      </p>

      <p>
        What does "deeply interesting" mean? It means stuff that teaches you
        about the world. A story about a robbery, for example, would probably
        not be deeply interesting. But if this robbery was a sign of some
        bigger, underlying trend, perhaps it could be.
      </p>

      <p>
        The worst thing to post or upvote is something that's intensely but
        shallowly interesting: gossip about famous people, funny or cute
        pictures or videos, partisan political articles, etc. If you let that
        sort of thing onto a news site, it will push aside the deeply
        interesting stuff, which tends to be quieter.
      </p>

      <p>
        The most important principle on HN, though, is to make thoughtful
        comments. Thoughtful in both senses: civil and substantial.
      </p>

      <p>
        The test for substance is a lot like it is for links. Does your comment
        teach us anything? There are two ways to do that: by pointing out some
        consideration that hadn't previously been mentioned, and by giving more
        information about the topic, perhaps from personal experience. Whereas
        comments like "LOL!" or worse still, "That's retarded!" teach us
        nothing.
      </p>

      <p>
        Empty comments can be ok if they're positive. There's nothing wrong with
        submitting a comment saying just "Thanks." What we especially discourage
        are comments that are empty and negative—comments that are mere
        name-calling.
      </p>

      <p>
        Which brings us to the most important principle on HN: civility. Since
        long before the web, the anonymity of online conversation has lured
        people into being much ruder than they'd be in person. So the principle
        here is: don't say anything you wouldn't say face to face. This doesn't
        mean you can't disagree. But disagree without calling names. If you're
        right, your argument will be more convincing without them.
      </p>
    </Wrapper>
  );
};

export default AboutPage;
