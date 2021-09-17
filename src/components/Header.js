import React from 'react';
import styled from 'styled-components';
const modelS=()=>{
        window.scrollBy(0,300);
}

function Header(){
        return(
                <Container>
                   <a>
                           <img src="/assets/tasks.png"></img>
                   </a>
                <Menu>
                        <p><a href="#" onClick={modelS}>Model S</a></p>
                        <p><a href="#">Model 3</a></p>
                        <p><a href="#">Model X</a></p>
                        <p><a href="#">Account</a></p>
                        <p><a href="#">Solar Roof</a></p>
                        <p><a href="#">Solar panels</a></p>

                </Menu>
                <RightMenu>
                     <p><a href="#">Shop</a></p>
                     <p><a href="#">Account</a></p>
                     <p><a href="#">TESLA</a></p>
                </RightMenu>         
                   
                   
                <ThreeMenu>
                        
                <img arc="/assets/menu.jpg" width="30px" height="30px"></img>
                      
                </ThreeMenu>
                  
                                  <a>
                                  <img src="/assets/audio.jpg" width="300px"></img>
                                  </a>
                         
                          
                          
                  
         
                </Container>
        )
}



export default Header

const Container=styled.div`

     min-height:60px;
     position:fixed;
     margin-left:30px;
     margin-top:30px;
     display:flex;
     justify-content:space-between;
  


`


const Menu=styled.div`
  display:flex;
  align-items:center;
  margin-left:250px;
  margin-bottom:30px;
  cursor:pointer;

  p{
       
        font-weight:550;
        font-size:15px;
        padding:0 20px;
}

@media(max-width:768px){
        display:column;
}

`


const RightMenu=styled.div`
   display:flex;
   margin-left:90px;
   margin-top:7px;


   p{
        padding:0 10px;
        font-weight:550;


}
   
`

const ThreeMenu=styled.div`
position:relative;left:100px;
  
   
   

`
/*
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:200px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
li{
        padding:15px 0;
        border-bottom:1px solid black;

}
a{
        font-weight:600;
}


`
*/





