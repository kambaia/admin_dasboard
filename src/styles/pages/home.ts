import styled from 'styled-components'
//import bainner_header from '../../assets/bainner.jpg';
export const FullContainer = styled.div`
   background-color: #f00;
   .main-container{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 100vh auto auto;
    grid-template-areas: "header header header" 
                          "main main main" 
                          "footer footer footer";
                        
                        
   }

   .header{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     background-color: var(--bg-color-1);
     box-shadow:var(--box-shadow);
     padding: 1.5rem 7%;
     z-index: 1000;
     display: flex;
     align-items: center;
     justify-content: space-between;

   .header-logo{
      a {
        display: flex;
      justify-content: center;
      align-items: center;padding:5px 0px;
        span{
          font-size: 1.5em;
        }
        .icon-logo{
          font-size: 2em;
          color: var(--orange);
        }
      }
   }
   .header .logo{
     font-weight: bold;
     font-size: 2rem;
     color: var(--text-color);
   }

   .form-search{
     background-color: var(--bg-color-2);
     border-radius:.5rem;
     display: flex;
     align-items: center;
     height: 4.5rem;
     width: 50rem;
     border: 1px solid #ddd;
     input{
       height: 100%;
       width:100%;
       background-color: none;
       text-transform: none;
       font-size: 1.5rem;
       color: var(--text-color-1);
       padding: 1rem;
       
     }
     label{
       font-size: 2rem;
       color: var(--text-color-1);
       cursor: pointer;
       padding: 2rem;
       :hover{
         color: var(--orange);
       }
     }
   } 
   

   .menus{
      height: 4.5rem;
      width: 4.5rem;
      line-height: 4.5rem;
      font-size: 2rem;
      border-radius: .5rem;
      margin-left:.5;
      background: var(--text-color-2);
      color: var(--text-color-1);
      cursor: pointer;
   }
   
  }
    
  `

  export const Menu = styled.div`
    
  `


