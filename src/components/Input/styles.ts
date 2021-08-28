import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #1c1c1c;
    &::placeholder {
      color: #666360;
      font-size: 14px;
      
    }
  }
  svg {
    margin-right: 16px;
  }
  span{
    font-size:.9em;
    cursor:pointer;
    :hover{
      text-decoration:underline;
    }
  }
`;
