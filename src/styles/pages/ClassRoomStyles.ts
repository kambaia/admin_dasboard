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
export const ContentAddQuestions= styled.div`
   position: relative;
   z-index: 1;

  .sr-only {
    position: absolute;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

    #section-home {
      width: 96%;
      margin: auto;
      display: flex;
      flex-direction: column;
      margin-top: 1em;
      border-radius: 2px;
      padding: 10px;
    }

    #section-home .header-questions h2 {
      font-size: 1.2em;
      font-weight: 700;
      color: #333;
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }

    .header-questions form {
      padding: 20px;
    }

    .header-questions form select {
      outline: none;
      width: 100%;
      padding: 10px;
      background: transparent;
      border-radius: 0 0.8rem 0.8rem 0.8rem;
      border: 0.2rem solid #ddd;
      margin-bottom: 10px;
      color: #555;
    }

    .header-questions form textarea {
      outline: none;
      width: 100%;
      resize: none;
      background: transparent;
      margin-top: 20px 0px;
      padding: 10px;
      height: 150px;
      border-radius: 0.8rem 0.8rem 0 0.8rem;
      border: 0.2rem solid #ddd;
    }

    .header-questions form textarea::placeholder {
      color: #333;
    }

    .header-questions footer .btn-question {
      border-radius: 0.8rem 0.8rem 0 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-questions footer .btn-question button {
      color: #333;
      text-align: center;
      padding: 8px;
      outline: none;
      border-radius: 5px;
      margin: 10px 0px;
      width: 140px;
      background-color: #ec9810;
      color: #fff;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      .question-footer {
        max-width: 1200px;
        width: 96%;
        margin: auto;
        display: flex;
        flex-direction: row;
        border-top: 1px solid #ddd;
		background-color: #f00;
	
        div{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
			
            span{
                font-size: 20px;
            }
            :hover{
                background-color: #ddd;
            }
        }
      }
      .header-questions form {
        padding: 20px;
      }
    }

`
    
  



export const CardMyQuestions= styled.div`
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
    
  