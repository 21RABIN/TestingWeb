function Calculate(key) {
//semaster 1   
  var s1c1,s1c2,s1c3,s1c4,s1c5,s1c6,s1c7,s1c8,s1tot;
  var crs1c1,crs1c2,crs1c3,crs1c4,crs1c5,crs1c6,crs1c7,crs1c8;
   
//Get Grade Value
   s1c1=document.querySelector('.s1c1').value;
   s1c2=document.querySelector('.s1c2').value;
   s1c3=document.querySelector('.s1c3').value;
   s1c4=document.querySelector('.s1c4').value;
   s1c5=document.querySelector('.s1c5').value;
   s1c6=document.querySelector('.s1c6').value;
   s1c7=document.querySelector('.s1c7').value;
   s1c8=document.querySelector('.s1c8').value;   
   //Get Credit Value Sem1
   crs1c1=document.querySelector('.crs1c1').value;
   crs1c2=document.querySelector('.crs1c2').value;
   crs1c3=document.querySelector('.crs1c3').value;
   crs1c4=document.querySelector('.crs1c4').value;
   crs1c5=document.querySelector('.crs1c5').value;
   crs1c6=document.querySelector('.crs1c6').value;
   crs1c7=document.querySelector('.crs1c7').value;
   crs1c8=document.querySelector('.crs1c8').value;

   //Semaster 2
   var s2c1,s2c2,s2c3,s2c4,s2c5,s2c6,s2c7,s2c8,s2tot;
   var crs2c1,crs2c2,crs2c3,crs2c4,crs2c5,crs2c6,crs2c7,crs2c8;

   s2c1=document.querySelector('.s2c1').value;
   s2c2=document.querySelector('.s2c2').value;
   s2c3=document.querySelector('.s2c3').value;
   s2c4=document.querySelector('.s2c4').value;
   s2c5=document.querySelector('.s2c5').value;
   s2c6=document.querySelector('.s2c6').value;
   s2c7=document.querySelector('.s2c7').value;
   s2c8=document.querySelector('.s2c8').value;

   //Get  Credit Value Sem2
   crs2c1=document.querySelector('.crs2c1').value;
   crs2c2=document.querySelector('.crs2c2').value;
   crs2c3=document.querySelector('.crs2c3').value;
   crs2c4=document.querySelector('.crs2c4').value;
   crs2c5=document.querySelector('.crs2c5').value;
   crs2c6=document.querySelector('.crs2c6').value;
   crs2c7=document.querySelector('.crs2c7').value;
   crs2c8=document.querySelector('.crs2c8').value;

//Semaster 3
   var s3c1,s3c2,s3c3,s3c4,s3c5,s3c6,s3c7,s3c8,s3c9,s3c10,s3tot;
   var crs3c1,crs3c2,crs3c3,crs3c4,crs3c5,crs3c6,crs3c7,crs3c8,crs3c9,crs3c10;


  s3c1=document.querySelector('.s3c1').value;
   s3c2=document.querySelector('.s3c2').value;
   s3c3=document.querySelector('.s3c3').value;
   s3c4=document.querySelector('.s3c4').value;
   s3c5=document.querySelector('.s3c5').value;
   s3c6=document.querySelector('.s3c6').value;
   s3c7=document.querySelector('.s3c7').value;
   s3c8=document.querySelector('.s3c8').value;
   s3c9=document.querySelector('.s3c9').value;
   
   //Get  Credit Value Sem2
   crs3c1=document.querySelector('.crs3c1').value;
   crs3c2=document.querySelector('.crs3c2').value;
   crs3c3=document.querySelector('.crs3c3').value;
   crs3c4=document.querySelector('.crs3c4').value;
   crs3c5=document.querySelector('.crs3c5').value;
   crs3c6=document.querySelector('.crs3c6').value;
   crs3c7=document.querySelector('.crs3c7').value;
   crs3c8=document.querySelector('.crs3c8').value;
   crs3c9=document.querySelector('.crs3c9').value;

   //Semaster 4
   var s4c1,s4c2,s4c3,s4c4,s4c5,s4c6,s4c7,s4c8,s4c9,s4c10,s4tot;
   var crs4c1,crs4c2,crs4c3,crs4c4,crs4c5,crs4c6,crs4c7,crs4c8,crs4c9,crs4c10;
   s4c1=document.querySelector('.s4c1').value;
   s4c2=document.querySelector('.s4c2').value;
   s4c3=document.querySelector('.s4c3').value;
   s4c4=document.querySelector('.s4c4').value;
   s4c5=document.querySelector('.s4c5').value;
   s4c6=document.querySelector('.s4c6').value;
   s4c7=document.querySelector('.s4c7').value;
   s4c8=document.querySelector('.s4c8').value;
   s4c9=document.querySelector('.s4c9').value;
   

   //Get  Credit Value Sem2
   crs4c1=document.querySelector('.crs4c1').value;
   crs4c2=document.querySelector('.crs4c2').value;
   crs4c3=document.querySelector('.crs4c3').value;
   crs4c4=document.querySelector('.crs4c4').value;
   crs4c5=document.querySelector('.crs4c5').value;
   crs4c6=document.querySelector('.crs4c6').value;
   crs4c7=document.querySelector('.crs4c7').value;
   crs4c8=document.querySelector('.crs4c8').value;
   crs4c9=document.querySelector('.crs4c9').value;

var totalavg,totalavgg,totalavgs;

var dis=document.querySelector('.cgpa')

const popupbgr = document.querySelector('.popupbgr');
const popupdisplay = document.querySelector('.popupdisplay');

const btnPopUpBox = document.querySelector('.btnPopUpBox');
 var sem=document.getElementById('displaysem').value;

dis.style.display='flex'
    btnPopUpBox.style="flex";
    popupdisplay.style.display="flex";
    popupbgr.style.display="flex";
if (key==1) {


          //Semaster 1

s1tot=(s1c1*crs1c1)+(s1c2*crs1c2)+(s1c3*crs1c3)+(s1c4*crs1c4)+(s1c5*crs1c5)+(s1c6*crs1c6)+(s1c7*crs1c7)+(s1c8*crs1c8);
s1avg=s1tot/18;
s1avgs=s1avg.toFixed(3);



//Semaster 2
s2tot=(s2c1*crs2c1)+(s2c2*crs2c2)+(s2c3*crs2c3)+(s2c4*crs2c4)+(s2c5*crs2c5)+(s2c6*crs2c6)+(s2c7*crs2c7)+(s2c8*crs2c8);
s2avg=s2tot/18;
s2avgs=s2avg.toFixed(3);



   
//Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8)+(s3c9*crs3c9);
s3avg=s3tot/22;
s3avgs=s3avg.toFixed(3);
  
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8)+(s4c9*crs4c9);
s4avg=s4tot/22;
s4avgs=s4avg.toFixed(3);







if (sem==1) {

   totalavg=s1avg/1;
   totalavgs=totalavg.toFixed(3)
   dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}  
                    \nAvarage CGPA: ${parseFloat(s1avgs)}`
}
else if(sem==2)
{
   totalavg=s1avg+s2avg;
   totalavgg=totalavg/2;
   totalavgs=totalavgg.toFixed(3)

 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)}
                  \n Avarage CGPA: ${parseFloat(s2avgs)}`
}
else if(sem==3)
{
     totalavg=s1avg+s2avg+s3avg;
     totalavgg=totalavg/3
     totalavgs=totalavgg.toFixed(3)
     dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                      \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                      \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                      \n Avarage CGPA: ${parseFloat(s3avgs)}`

}
else if(sem==4)
{

 totalavg=s1avg+s2avg+s3avg+s4avg;
 totalavgg=totalavg/4
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(s1avgs)}`

}

else
{
   const popup=document.querySelector('.popupbgr')
   alert('Plese Select Semaster')
   popup.style.display='none'
}
}

else if(key==2)
{
   if (sem==1) {

   totalavg=s1avg/1;
   totalavgs=totalavg.toFixed(3)
   dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}  
                    \nAvarage CGPA: ${parseFloat(s1avgs)}`
}
else if(sem==2)
{
   totalavg=s1avg+s2avg;
   totalavgg=totalavg/2;
   totalavgs=totalavgg.toFixed(3)

 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)}
                  \n Avarage CGPA: ${parseFloat(s2avgs)}`
}
else if(sem==3)
{
     totalavg=s1avg+s2avg+s3avg;
     totalavgg=totalavg/3
     totalavgs=totalavgg.toFixed(3)
     dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                      \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                      \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                      \n Avarage CGPA: ${parseFloat(s3avgs)}`

}
else if(sem==4)
{

 totalavg=s1avg+s2avg+s3avg+s4avg;
 totalavgg=totalavg/4
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(s1avgs)}`

}

else
{
   const popup=document.querySelector('.popupbgr')
   alert('Plese Select Semaster')
   popup.style.display='none'
}
}
// --------------------------------------------------------------------------

}

//What Semastr Display

function displaysemester() {
    
    var sem,sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8;
 sem=document.getElementById('displaysem').value;
 holesem=document.querySelectorAll('.sems')
 sem1=document.querySelector('.container1')
 sem2=document.querySelector('.container2')
 sem3=document.querySelector('.container3')
 sem4=document.querySelector('.container4')
 sem5=document.querySelector('.container5')
 sem6=document.querySelector('.container6')
 sem7=document.querySelector('.container7')
 sem8=document.querySelector('.container8')
if (sem==1) {
         for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
      sem1.style.display='block'
   }
}
else if(sem==2)
{
    for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
      sem1.style.display='block'
      sem2.style.display='block'
   }
}
else if(sem==3)
{

   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
       sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
   }

}
else if(sem==4)
{
     for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
      sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
   }
}
else if(sem==5)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
       sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
      sem5.style.display='block'
   }

}
else if(sem==6)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
       sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
      sem5.style.display='block'
      sem6.style.display='block'
   }

}
else if(sem==7)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
             sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
      sem5.style.display='block'
      sem6.style.display='block'
      sem7.style.display='block'
   }

}
else if(sem==8)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='block'
   }

}


}


/*--------------------------------------------------------------------------------------------------*/
//view And Hide Credits Action
  var listid = document.querySelectorAll('.crmenu')

function Changecr()
{

var listid = document.querySelectorAll('.crmenu')
   var button =document.getElementById('creditbtn');
   var text=button.innerText;
   
   if (text=='Change Credit') {

      button.innerText='Hide Credit';
        for(var i=0;i<listid.length;i++)
      {
         listid[i].style.display='block';
      }
   }
   else
   {
      button.innerText='Change Credit';
      for(var i=0;i<listid.length;i++)
      {
         listid[i].style.display='none';
      }
      
   }

}

/*-------------------------------------------------------------------------*/

function OpenMenu1() {
   
      let navbar1=document.querySelector('.bar1')
      let navbar2=document.getElementById('bar2')
      let homemenu=document.querySelector('.hmenu')
      navbar2.style.display='flex'
      homemenu.style.display='flex'


}
function OpenMenu2()
{
   let navbar1=document.querySelector('.bar1')
   let  navbar2=document.getElementById('bar2')
     let homemenu=document.querySelector('.hmenu')
   navbar1.style.display='flex'
   navbar2.style.display='none'
   homemenu.style.display='none'
}

function sem2020() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
  sem2020.style.display='block'
   sem2021.style.display='none'
   sem2022.style.display='none'
   sem2023.style.display='none'
   mainmenu.style.display='none'

   // body...
}
function sem2021() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
  sem2020.style.display='none'
   sem2021.style.display='block'
   sem2022.style.display='none'
   sem2023.style.display='none'
   mainmenu.style.display='none'

   // body...
}
function sem2022() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
   sem2020.style.display='none'
   sem2021.style.display='none'
   sem2022.style.display='block'
   sem2023.style.display='none'
   mainmenu.style.display='none'


   // body...
}
function sem2023() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
   sem2020.style.display='none'
   sem2021.style.display='none'
   sem2022.style.display='none'
   sem2023.style.display='block'
   mainmenu.style.display='none'


   // body...
}


function Closebtn() {

  const popupbgr=document.querySelector('.popupbgr')

          popupbgr.style.display='none'
  
}

/*----------------------------------------------------------------------------------------*/
















/*-------------------------------------------------------------------------------------------*/




function regulation() {
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
  const mainmenu=document.querySelector('.mainmenu')
  const regulation=document.querySelector('.regulation')

  regulation.style.display='block'
   sem2022.style.display='none'
   sem2021.style.display='none'
    mainmenu.style.display='none'
}