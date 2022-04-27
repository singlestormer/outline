// @flow
import { Table, TBody, TR, TD } from "oy-vey";
import * as React from "react";
import theme from "../../../shared/theme";
import { twitterUrl } from "../../../shared/utils/routeHelpers";

type Props = {
  unsubscribeUrl?: string,
};

export default ({ unsubscribeUrl }: Props) => {
  const footerStyle = {
    padding: "20px 0",
    borderTop: `1px solid ${theme.smokeDark}`,
    color: theme.slate,
    fontSize: "14px",
  };

  const unsubStyle = {
    padding: "0",
    color: theme.slate,
    fontSize: "14px",
  };

  const linkStyle = {
    color: theme.slate,
    fontWeight: 500,
    textDecoration: "none",
    marginRight: "10px",
  };

  const externalLinkStyle = {
    color: theme.slate,
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <Table width="100%">
      <TBody>
        <TR>
          
        </TR>
    
      </TBody>
    </Table>
  );
};
