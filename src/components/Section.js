import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnTxt,rightBtnTxt,backgroundImg}){
     

        return(
          <Wrap bgImage={backgroundImg}>
         <Fade bottom>
                <ItemText>
                          <h1>{title}</h1>
                          <p>{description}</p>
                </ItemText>
         </Fade>
                  <Buttons>
                          <Fade bottom>
           <ButtonGroup>
                 <LeftButton>
                          {leftBtnTxt}
                </LeftButton>
                          {rightBtnTxt &&
                          <RightButton>
                              {rightBtnTxt}
                          </RightButton>
}
           </ButtonGroup>
        
                  <DownArrow src="/assets/down-arrow.jpg">
                                     
                  </DownArrow>
        </Fade>
                  </Buttons>

                 
          </Wrap>



                  
        
        )
}

export default Section

const Wrap=styled.div`
   z-index:-1;
   width:100vw;
   height:100vh;
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
   background-image:url('/assets/model-s.jpg');
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   background-image:${props=>`url("/assets/${props.bgImage}")`}




`


const ItemText=styled.div`

  font-size:15px;
  padding-top:15vh;
  text-align:center;
  position:relative;bottom:10px;
  

`


const ButtonGroup=styled.div`
   display:flex;
   position:relative;top:150px;
   margin-left:80px;
   margin-bottom:80px;
   @media (max-width:768px){
        flex-direction:column;
        hover:
        opacity:0.4;
        
`

const LeftButton=styled.div`
   background-color:black;
   height:40px;
   width:256px;
   color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:100px;
   cursor:pointer;
   opacity:0.75;
   text-transform:uppercase;
   font-size:12px;
   position:relative;bottom:100px;
   right:5px;

   
  


`

const RightButton=styled(LeftButton)`
    position:relative;bottom:100px;
    left:20px;
    background-color:white;
    color:black;
    opacity:0.65;
    font-weight:800;
   

`


const DownArrow=styled.img`
    width:40px;
    height:40px;
    margin-left:30px;
    cursor:pointer;
    align-items:center;
    animation:animationDown infinite 1.5s;
    overflow-x:hidden;

   

`

const Buttons=styled.div`


`






