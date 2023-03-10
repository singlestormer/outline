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
  token: string,
  teamUrl: string,
};

export const signinEmailText = ({ token, teamUrl }: Props) => `
Use the link below to signin to Fetish Circle's Training PLatform:

${process.env.URL}/auth/email.callback?token=${token}

`;

export const SigninEmail = ({ token, teamUrl }: Props) => {
  return (
    <EmailTemplate>
      <Header />

      <Body>
        <Heading>Magic signin link</Heading>
        <p>Click the button below to signin to Fetish Circle's Training Platform.</p>
        <EmptySpace height={10} />
        <p>
          <Button
            href={`${process.env.URL}/auth/email.callback?token=${token}`}
          >
            Sign In
          </Button>
        </p>
        <EmptySpace height={10} />
      </Body>

      <Footer />
    </EmailTemplate>
  );
};
