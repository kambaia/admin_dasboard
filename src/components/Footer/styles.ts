import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
  height: 5rem;
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${colors.border_color};
  justify-content: space-between;
  position: fixed;
  z-index: 10;

`;
