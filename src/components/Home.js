import React from 'react'
import styled from 'styled-components';
import Section from './Section';



function Home(){
        return(
                
          <Container>
               
             <Section 
                 title="Model-S"
                 description="Order online for touchless delivery"
                 backgroundImg="model-s.jpg"
                 leftBtnTxt="Custom order"
                 rightBtnTxt="Existing inventory"
             />
             <Section
                 title="Model-Y"
                 description="Order online for touchless delivery"
                 backgroundImg="model-y.jpg"
                 leftBtnTxt="Custom order"
                 rightBtnTxt="Existing inventory"
              />
             <Section 
                  title="Model-3"
                  description="Order online for touchless delivery"
                  backgroundImg="model-3.jpg"
                  leftBtnTxt="Custom order"
                  rightBtnTxt="Existing inventory"
                 
             />
             <Section 
             title="Model-X"
             description="Order online for touchless delivery"
             backgroundImg="model-x.jpg"
             leftBtnTxt="Custom order"
             rightBtnTxt="Existing inventory"
             />

             <Section
               title="Lowest Cost Solar panels"
               description="Money-back guarantee"
               backgroundImg="solar-panel.jpg"
               leftBtnTxt="Order now"
               rightBtnTxt="Learn more"



/>

<Section
                 title="Solar for New Roofs"
                 description="Solar roofs costs Less than"
                 backgroundImg="solar-roof.jpg"
                 leftBtnTxt="Order now"
                 rightBtnTxt="Learn more"
              />

<Section
                 title="Accessories"
                 description=""
                 backgroundImg="accessories (1).jpg"
                 leftBtnTxt="Shop now"
                 
              />



          </Container>
          
                  
        
        )
}

export default Home;

const Container=styled.div`
    

`
     


