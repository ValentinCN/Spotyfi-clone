import styled from "styled-components";

const SideBarContainer = styled.div`
flex: 0.2;
height: 100vh;
background-color: #000000;
min-whidth: 240px;
color: #fff;
& img{
    height:70px;
    padding: 10px;
    margin-right: auto;
}
& hr{
    border: 1px solid smokegray;
    width: 90%;
    margin 10px auto;

}
`
const PlayLists = styled.div`
margin: 5px 10px;

`

const Choices = styled.div`
display: flex;
aling-items: center;
color: gray;
height: 40px;
cursor: pointer;
transition: 300ms color ease-in;
margin-left: 15px;
&:hover{
    color: #fff
}
& p{
    margin: 10px 0 0 20px
}
`

export {SideBarContainer, PlayLists, Choices}