// @flow
import * as React from "react";
import { VisuallyHidden } from "reakit/VisuallyHidden";
import styled from "styled-components";
import HelpText from "components/HelpText";

export type Props = {|
  checked?: boolean,
  label?: React.Node,
  labelHidden?: boolean,
  className?: string,
  name?: string,
  disabled?: boolean,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => mixed,
  note?: React.Node,
  short?: boolean,
  small?: boolean,
|};

const LabelText = styled.span`
  font-weight: 500;
  margin-left: ${(props) => (props.small ? "6px" : "10px")};
  ${(props) => (props.small ? `color: ${props.theme.textSecondary}` : "")};
`;

const Wrapper = styled.div`
  padding-bottom: 8px;
  ${(props) => (props.small ? "font-size: 14px" : "")};
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export default function Checkbox({
  label,
  labelHidden,
  note,
  className,
  small,
  short,
  ...rest
}: Props) {
  const wrappedLabel = <LabelText small={small}>{label}</LabelText>;

  return (
    <>
      <Wrapper small={small}>
        <Label>
          <input type="checkbox" {...rest} />
          {label &&
            (labelHidden ? (
              <VisuallyHidden>{wrappedLabel}</VisuallyHidden>
            ) : (
              wrappedLabel
            ))}
        </Label>
        {note && <HelpText small>{note}</HelpText>}
      </Wrapper>
    </>
  );
}
