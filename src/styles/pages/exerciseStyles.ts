import styled from "styled-components";
//import bainner_header from '../../assets/bainner.jpg';
export const SessionExercise = styled.div`
   padding: 20px;
   box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.3);
   border-radius: 10px;
   margin-top: 20px;
   
  .roll{
      display: flex;
      justify-content: flex-end;
      span{
          padding: 10px;
          font-size: 1.3em;
      }
  }
   .session-card{
       width: 100%;
       height: 250px;
     
       display: flex;
       flex-direction: row;
       a{
           color: #555;
           :hover{
              opacity: .8;
           }
       }
   }
   .exercise{
       width: 300px;
       height: 100%;
       border: 1px solid #ddd;
       display: flex;
       flex-direction: column;
       margin-left: 10px;
       box-shadow: 1px 0px 10px rgba(0,0,0,0.3);
       .card-exec{
           display: flex;
           justify-content: space-around;
           border-bottom: 1px solid #ddd;
           padding: 10px;
           width: 100%;
           flex: 1;
           span{
               font-size: 4em;
               flex: 1;
               width: 200px;
           }
           h3{
               width: 200px;
               font-size: 2em;
               flex: 1;
               text-align: center;
           }
       }
       .name-exec{
           padding: 20px;
           font-size: 1.4em;
           border-bottom: 1px solid #ddd;
           height: 100px;
       }
       .classification{
           display: flex;
           align-items: center;
           padding: 10px;
           width: 100%;
           justify-content: center;
       }
   }
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

export const ContentAddExercise = styled.div`
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
	.input {
	  outline: none;
      width: 100%;
      background: transparent;
      margin-bottom: 10px;
      color: #555;

	  .send-file{
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  padding: 15px;
		  font-size: 12pt;
	  }
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
      .exercise-footer {
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
				cursor: pointer;
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

export const InputSelect = styled.input`
  border: 0;
  display:none;
`;

export const TextInputGroup = styled.figure`
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      .firstname{
        width: 100%;
        padding: 10px;
        background-color: #fff;
      }
       .text-input, .selectContainer{
         width: 50%;
         padding: 10px;
       }
       .checkbox{
           label input:checked + span{
             color: #00d;
           }
       }

  `

