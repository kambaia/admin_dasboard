import styled, { keyframes, css } from 'styled-components'
import colors from "../colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainContent = styled.div`
  background-color: ${colors.white};
  position: absolute;
  width: calc(100% - 240px);
  height: 100vh;
  right: 0;
  padding: 20px 30px;
  overflow-y: scroll;

  > .lastContainer {
    height: 85%;
  }
`;

export const FigureContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FigureLegend = styled.fieldset`
  width: 100%;
  height: 20vh;
  border: 1px solid #ddd;
  padding: 10px 0px;

  > .add_image {
    display: flex;
    align-self: center;
    margin: 0 auto;
    width: 120px;
    height: 120px;
    border: 1px dashed #ddd;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }

  > span {
    display: block;
    text-align: center;
    font-size: 13px;
    margin: 10px 0;
  }

  > legend {
    padding: 0 5px;
  }
`;

export const SecondLegend = styled(FigureLegend)`
  display: flex;
  align-items: center;
  height: 8vh;
  padding: 0 20px;
`;

export const InputSelect = styled.input`
  border: 0;
`;

export const LastLegend = styled(FigureLegend)`
  display: flex;
  flex-direction: column;
  height:100%;

  > button {
    width: 10%;
    height: 3.3rem;
    margin-left: 20px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const LeftContainer = styled.aside`
  width: 40%;
  margin-right: 15px;
  > div {
    margin: 25px 0 10px 0;
    background: #fff;
    border: 1px solid #ddd;
    height: 45px;
  }

  .selectContainer {
    border: 0;
    background-color: transparent;
    height: 50px;
  }
`;
export const RightContainer = styled.aside`
  width: 40%;

  > button {
    margin: 23px 0 15px 0;
  }
  > div {
    background: #fff;
    border: 1px solid #ddd;
    height: 45px;
    margin: 18px 0;
  }
`;

export const TextArea = styled.textarea<{ height: number } >`
  width: 100%;
  height:${props => props?.height}px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0px solid #ddd;
  padding: 15px 20px;
  margin-top: 15px;
`;
