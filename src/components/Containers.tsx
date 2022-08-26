import { getFromTheme } from "styles/theme";
import styled from "styled-components";

export const MainWrapper = styled.main`
  max-width: 100rem;
  background-color: ${getFromTheme("secondary")};
  margin-inline: auto;
  p {
    margin-top: 1rem;
  }
`;
interface FlexContainerProps {
  scrollable: "x" | "y" | false;
}
export const FlexContainer = styled.section<FlexContainerProps>`
  .row {
    display: flex;
    ${(props) =>
      props.scrollable === "x"
        ? `overflow-x: scroll;
       -webkit-box-pack: justify;
       justify-content: space-between;`
        : props.scrollable === "y"
        ? `overflow-y: scroll;-webkit-box-pack: justify;
       justify-content: space-between;`
        : null}
  }
`;
