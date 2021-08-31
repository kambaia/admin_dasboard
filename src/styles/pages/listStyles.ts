import styled, { keyframes, css } from "styled-components";
import colors from "../colors";


export const ListOfExercises = styled.div`
    padding: 20px;
    box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.3);
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
        flex: .6;
    }
    .icon-exercise{
        width: 50px;
        height: 50px;
        border-radius:50%;
        background-color: #414141;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title-exercises{
        flex: 8;
        font-size: 1.5em;
    }
    .icon-oction{
        flex:  .2;
        padding: 0px 20px;
        p{
            cursor: pointer;
        }
    }
`