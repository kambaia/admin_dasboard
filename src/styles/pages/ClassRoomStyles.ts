import styled from 'styled-components'
//import bainner_header from '../../assets/bainner.jpg';
export const CardTeams = styled.div`
  height: 250px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
.teams{
    display: flex;
    width: calc(250px * 4);
    animation: scroll 40s linear infinite;
    :hover{
      animation-play-state: paused;
    }
  }

  @keyframes scroll {
    0% {
      transform:translateX(0)
    }
    100% {
      transform:translateX(calc(-250px*8));
    }
  }
`

export const CardMyQuetions= styled.div`
  .my-question{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 400px;
    overflow-y: auto;
    margin-top:20px;
  }
`
    
  