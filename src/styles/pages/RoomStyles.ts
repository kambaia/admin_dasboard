import styled from "styled-components";
//import bainner_header from '../../assets/bainner.jpg';
export const CardChat = styled.div`
  height: 200px;
  width: 98%;
  border-radius: 10px;
  background-color: #eee;
  margin: auto;
`;

export const CardForm = styled.div`
  height: auto;
  width: 98%;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
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
    max-width: 1200px;
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
`;
