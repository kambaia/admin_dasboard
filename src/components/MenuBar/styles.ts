import styled from "styled-components";

export const Container = styled.div`
  @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        position: fixed;
        background: #000000;
        width: 100vw;
        height: 100vh;
        z-index: 999999;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        

   .nav-bar {
   

   }
    .mobile-menu{
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                height: 100px;
                display:flex;
                justify-content: space-between;
                align-items:center;
                padding: 20px 30px;
                z-index: 9999;
                .logo{
                    width: 150px;
                    img{
                        width:100%;
                        } 
                }

                .btn-create{
                    border:none;
                    outline: none;
                    background-color: transparent;
                    cursor: pointer;
                    span{
                        font-size: 4em;
                    }
                }
        } 
      

      .menus{
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-top: 10px;
          align-items: center;
          width: 100%;
        

          a{
              width: 100%;
              padding: .8rem;
              font-size: 1.9em;
              :hover{
                  color: #d00;
              }
          }
         
      }
      
    }


    @media(max-width: 600px) {
    .mobile-menu{
                  display:block;
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                height: 60px;
                display:flex;
                justify-content: space-between;
                align-items:center;
                padding: 20px 30px;
                z-index: 9999;

            
             .logo{
                    width: 150px;

                    img{
                        width:100%;
                        } 
                }

                .btn-create{
                    border:none;
                    outline: none;
                    background-color: transparent;
                    cursor: pointer;
                 
                   .close{
                       background-color: transparent;
                       outline: none;
                       height: 32px;
                       width: 32px;
                       border:none;
                       &:before, &:after{
                           content: '';
                           position: absolute;
                           width: 2.5px;
                           height: 24px;
                           background-color: #fff;
                       }
                       &:before{
                           transform: rotate(45deg);
                       }
                       &:after{
                           transform: rotate(-45deg);
                       }
                   }
                }
        } 
      }

      .menus{
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-top: 10px;
          align-items:flex-start;
          width: 70%;
          margin: auto;
          .borda{
              height: 0.5px;
              width: 30px;
              position: relative;
              border-bottom: 2px solid;
              margin-left: 10px;
             
             
            
          }
          a{
              width: 100%;
              text-align: left;
              padding: .8rem;
              font-size: 1.5em;
              :hover{
                  color: #d00;
              }
          }
      }

`