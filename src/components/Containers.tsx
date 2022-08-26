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
interface FlexContainer {
  scrollable?: boolean;
}
export const FlexContainer = styled.section<FlexContainer>`
  .row {
    display: flex;
    ${(scrollable) =>
      scrollable &&
      `overflow-x: scroll;
       -webkit-box-pack: justify;
       justify-content: space-between;`}
  }
`;
