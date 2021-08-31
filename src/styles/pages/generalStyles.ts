import styled, { keyframes, css } from "styled-components";
import colors from "../colors";
export const MainContent = styled.div`
  background-color: ${colors.bg_painel};
  position: relative;
  width: 100%;
  margin: 8vh auto;
  z-index: 0;
  height: auto;
  display: flex;
  align-items: stretch;
`;
export const Container = styled.main`
  width: 100%;
`;
export const CardHeader = styled.div`
  background-color: ${colors.white};
  width: 98%;
  margin: auto;
  z-index: 0;
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
  color: #555;
  display: flex;
  align-items: center;
  button,
  .btn-create {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0px;
  }
`;
export const Wrapper = styled.section`
  background-color: ${colors.white};
  width: 98%;
  margin: 1% auto;
  z-index: 0;
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
  color: #555;
`;
export const CardForm = styled.div`
  background-color: ${colors.white};
  width: 100%;
  margin: auto;
  z-index: 0;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 20px 40px 20px;
`;
export const CardGroup = styled.div`
  background-color: ${colors.white};
  position: relative;
  width: 100%;
  margin: 10vh auto;
  z-index: 0;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
