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
  height: auto;

`;
export const CardHeader = styled.div`
  background-color: ${colors.white};
  width: 100%;
  margin: auto;
  z-index: 0;
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: #555;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2.5em 2rem;
  h2{
	  font-size: 20pt;
  }

  .active-account{
	 color:#044782;
	 cursor: pointer;
	 box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
	 padding: 10px;
	 width: 98%;
	 animation-name:slide;
	 animation-duration: 2s;
	 animation-fill-mode: forwards;
	 transition: translateY(-70px);
	 animation-iteration-count: infinite;
	 animation-timing-function: ease;
	 position: absolute;
	 font-size: 16pt;
	 

  }
  button,
  .btn-create {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0px;
  }

  @keyframes slide{
	  from {
         opacity: 0.2;
	  }to{
		  opacity: 0.8;
		  transform: translateY(0);
		  margin-top: 10px;
	  }
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
  height: auto;
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
