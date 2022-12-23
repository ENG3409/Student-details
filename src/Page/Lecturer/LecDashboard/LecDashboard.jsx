import React from "react";
import './LecDashboard.css';
import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import LecGreetings from "../LecGreetings/LecGreetings.jsx";
import Lecupcomevents from "../Lecupcomevents/Lecupcomevents.jsx";
//import Lecdailysch from "../Lecdailysch/Lecdailysch.jsx";
//import Lecweeklysch from "../Lecweeklysch/lecweekly.jsx";
import Lecsch from "../Lecsch/lecsch.jsx";
import Lecschweek from "../Lecschweek/Lecschweek.jsx";
import LecUce from "../LecUce/uce.jsx";
//import Lectable from "../Lectable/Lectable.jsx";
import Lectable1 from "../Lectable1/Lectable1.jsx";
import LecWeekly1 from "../LecWeekly1/LecWeekly1.jsx";
import LecButton1 from "../LecButton1/LecButton1";
import LecButton2 from "../LecButton2/LecButton2";
//import test1 from "../test1/test1.jsx";





function LecDashboard(){
    return(

        <Flex
      p="25px"
      h="full"
      w={"full"}
      borderWidth="2px"
      justifyContent={"space-between"}
      borderRadius={12}
      direction={"column"}
    >
      <LecGreetings />

      <Flex mt={5} as="main" w={"full"} justifyContent={"space-between"}>
        
      <Lecsch />
      <LecButton1 />
      
       
      </Flex>
      <Lectable1 />

      <Flex mt={5} as="main" w={"full"} justifyContent={"space-between"}>
        
      <Lecschweek />
      <LecButton2 />
      
       
      </Flex>
      <LecWeekly1/>
      <LecUce />
      <Lecupcomevents />
    </Flex>
        /*<div class="container-fluid my-container01in">
            
           <div class="row my-row1">
            <LecGreetings />
            </div>
            
            <div class="row my-row2"><Lecsch /></div>
            <div class="row my-row3">
            <div className="col-md-7 my-col1">
                <LecButton1 />
                </div>
                </div>
            <Lectable1 />
            
            
            <Lecschweek />
            <LecButton2 />
            <LecWeekly1 />
            
            
            <LecUce />
            <Lecupcomevents />
            
            
           
            
         </div>*/
    );

}
export default LecDashboard;
