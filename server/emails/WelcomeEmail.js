// @flow
import * as React from "react";
import Body from "./components/Body";
import Button from "./components/Button";
import EmailTemplate from "./components/EmailLayout";
import EmptySpace from "./components/EmptySpace";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Heading from "./components/Heading";

export type Props = {
  teamUrl: string,
};

export const welcomeEmailText = ({ teamUrl }: Props) => `
Welcome to Outline!

Our Training Platform contains all the content you need to break your submissives down.

To get started, head to the training dashboard and beging viewing the training content curated for you.

${teamUrl}/home
`;

export const WelcomeEmail = ({ teamUrl }: Props) => {
  return (
    <EmailTemplate>
      <Header />

      <Body>
        <Heading>Welcome to Fetish Circle's Training Platform!</Heading>
        <p>Our Training Platform contains all the content you need to break your submissives down.</p>
        <p>
          To get started, head to the training dashboard and beging viewing the training content curated for you.
        </p>
   
        <EmptySpace height={10} />
        <p>
          <Button href={`${teamUrl}/home`}>Enter Training Platform</Button>
        </p>
      </Body>

      <Footer />
    </EmailTemplate>
  );
};
