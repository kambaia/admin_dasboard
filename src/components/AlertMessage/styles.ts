import Styled from 'styled-components';
export const Overlay = Styled.div<{ show: boolean } >`
background: rgba(0,0,0, 0.8);
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: ${props => props.show ? 'flex' : 'none'};
justify-content: center;
align-items: center;
z-index: 10;
`;

export const ModalDisable = Styled.div`
background: #fff;
width: 100%;
max-width: 400px;
height: 300px;
display: flex;
flex-direction: column;
box-shadow: 1px 1px 5px 1px rgba(255, 42, 0, 0.1);
border-radius:5px;
`;
export const ModalHeader = Styled.h2`
font-size: 1.2rem;
border-bottom: 1px solid #ddd;
padding: 1rem;
text-align: center;
`;

export const ModalBody = Styled.section`
font-size: 1.2rem;
padding: 2rem;
display: flex;
justify-content:center;
text-align: center;
`;

export const Cicle = Styled.div<{ cicleColor?: string } >`
border:2px solid ${props => props.cicleColor};
width: 70px;
height: 70px;
border-radius:50%;
display: flex;
justify-content:center;
align-items: center;

`




export const MOdalFooter = Styled.h1`
font-size: 1.2rem;
.messagem{
text-align:center;
}
.confirm-message{
   display: flex;
   padding:1em;
   justify-content:center;
   align-items:center;
  
   
    button{
      outline: none;
      border: none;
      background: #fff;
      width: 100px;
      font-size:.8em;
      padding:5px 10px;
      border-radius: 2px;
      margin: 10px 1em;
      color: #555;
      :nth-child(1) {
        border: 1px solid #5DB85B;
       }
       :nth-child(2) {
        border: 1px solid #ff2a00;
       }
   }
}
`;