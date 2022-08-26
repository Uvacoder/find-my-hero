import styled from "styled-components";
import { getFromTheme } from "styles/theme";

const Button = styled.button`
  font-size: ${getFromTheme("body")};
  font-weight: 600;
  padding: 1.2rem 3.2rem;
  border: none;
  border-radius: 5rem;
  font-size: 16px;
`;

export { Button };
