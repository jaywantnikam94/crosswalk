import React from 'react';
import PropTypes from 'prop-types';
// import { MainFrameWrapper } from './MainFrame.styled';


function MainFrame(){
   let clickCounter = 0;
   let colourFlag = true; // if true then RED else Green

   let baseArray = [
      [ '', '', '' ],
      [ '', '', '' ],
      [ '', '', '' ]
  ];

  function checkColoum()
  {
      for (let j = 0; j < 3; j++) {
         let tempVal = baseArray[0][j];
         let foundFlag = false;
         for (let i = 1; i < 3; i++) {
            if(tempVal !="" && tempVal == baseArray[i][j])
            {
               tempVal = baseArray[i][j];
               foundFlag = true;
            }
            else{
               foundFlag = false;
               break;
            }
         }//end for i
         if(foundFlag == true)
         {
            alert('Column = '+(j+1) + ' is Matched');
            document.location.reload();
            break;
         }
      }//end for j
  }//end checkColoum

  function checkRow()
  {
      for (let i = 0; i < 3; i++) {
         let tempVal = baseArray[i][0];
         let foundFlag = false;
         for (let j = 1; j < 3; j++) {
            if(tempVal !="" && tempVal == baseArray[i][j])
            {
               tempVal = baseArray[i][j];
               foundFlag = true;
            }
            else{
               foundFlag = false;
               break;
            }
         }//end for j
         if(foundFlag == true)
         {
            alert('Row = '+(i+1) + ' is Matched');
            document.location.reload();
            break;
         }
      }//end for i
  }//end CheckRow
  function  checkDiagonal()
  {
      // debugger;
      let d1 = baseArray[0][0];
      let d2 = baseArray[1][1];
      let d3 = baseArray[2][2];
      let t1 = baseArray[0][2];
      let t2 = baseArray[1][1];
      let t3 = baseArray[2][0];
      
      //this below if is alos working
      // if(((d1 !="" && d2 !="" && d3 !="") && ((d1 == d2) && ( d2==d3 ))) ||((t1 !="" && t2 !="" && t3 !="") && ((t1==t2) && (t2==t3))) )
      // {
      //    alert('Diagonal Match');
      // }//end outer if

      if((d1 !="" && d2 !="" && d3 !="") && ((d1 == d2) && ( d2==d3 )))
      {
         alert('Diagonal Match');
         document.location.reload();
      }//end outer if
      if((t1 !="" && t2 !="" && t3 !="") && ((t1==t2) && (t2==t3)))
      {
         alert('Diagonal Match');
         document.location.reload();
      }//end outer if
  }//end checkDiagonal
  function checkMatch()
  {
      checkRow();
      checkColoum();
      checkDiagonal();      
  }//end CheckMatch

  function setArrayValue(i,j,value)
  {
      baseArray[i][j]=value;
      // console.log(baseArray);
  }//end setArrayValue

   function changeColour(elementID)
   {
      if(document.getElementById(elementID).style.backgroundColor == "")
      {
         if (colourFlag) {
            document.getElementById(elementID).style.backgroundColor = "red";
            setArrayValue(elementID[0], elementID[1],'R')
         }
         else {
            document.getElementById(elementID).style.backgroundColor = "green";
            setArrayValue(elementID[0], elementID[1],'G')
         }
         colourFlag = !colourFlag;
         clickCounter++;
         if(clickCounter == 9)
         {
            alert('Gave Over !');
            document.location.reload();
         }
         if(clickCounter>=3)
         {
            checkMatch();
         }
      } //end outer if
   }//end changeColour

   const myClick = (e) =>  {
      // console.log(e.target.id);
      changeColour(e.target.id);
   }//end Myclick

   return(
      <div>
         <table>
            <tr>
               <td><button onClick={myClick} id='00'>Click to cross</button></td>
               <td><button onClick={myClick} id='01'>Click to cross</button></td>
               <td><button onClick={myClick} id='02'>Click to cross</button></td>
            </tr>
            <tr>
               <td><button onClick={myClick} id='10'>Click to cross</button></td>
               <td><button onClick={myClick} id='11'>Click to cross</button></td>
               <td><button onClick={myClick} id='12'>Click to cross</button></td>
            </tr>
            <tr>
               <td><button onClick={myClick} id='20'>Click to cross</button></td>
               <td><button onClick={myClick} id='21'>Click to cross</button></td>
               <td><button onClick={myClick} id='22'>Click to cross</button></td>
            </tr>
         </table>

      </div>

   );//end render
}//end main

MainFrame.propTypes = {};

MainFrame.defaultProps = {};

export default MainFrame;
