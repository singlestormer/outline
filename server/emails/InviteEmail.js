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
  name: string,
  actorName: string,
  actorEmail: string,
  teamName: string,
  teamUrl: string,
};

export const inviteEmailText = ({
  teamName,
  actorName,
  actorEmail,
  teamUrl,
}: Props) => `
An Invite to Fetish Circle's Training Platform

${actorName} (${actorEmail}) has invited you to join Fetish Circle's Training Platform.

Join now: ${teamUrl}
`;

export const InviteEmail = ({
  teamName,
  actorName,
  actorEmail,
  teamUrl,
}: Props) => {
  return (
    <EmailTemplate>
      <Header />

      <Body>
        <Heading>An Invite to Fetish Circle's Training Platform</Heading>
        <p>
          {actorName} ({actorEmail}) has invited you to join Fetish Circle's Training Platform.
        </p>
        <EmptySpace height={10} />
        <p>
          <Button href={teamUrl}>Join now</Button>
        </p>
      </Body>

      <Footer />
    </EmailTemplate>
  );
};
