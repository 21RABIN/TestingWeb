  const nav = document.getElementById('creditbtn')
   var listid = document.querySelectorAll('.menu')
   for(var i=0;i<listid.length;i++)
   {
        listid[i].style.display='none';

   }
    
//view And Hide Credits Action

function toggleText()
{

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

function openm() {
   
      let navbar1=document.querySelector('.navbar1')
      let navbar2=document.querySelector('.navbar2')
      let homemenu=document.querySelector('.hmenu')
      navbar1.style.display='none'
      navbar2.style.display='flex'
      homemenu.style.display='flex'

      
}

function openm2()
{
   let navbar1=document.querySelector('.navbar1')
   let  navbar2=document.querySelector('.navbar2')
     let homemenu=document.querySelector('.hmenu')
   navbar1.style.display='flex'
   navbar2.style.display='none'
   homemenu.style.display='none'
}


function genrateQR() {

        var dw=document.getElementById('dw')
        var qr=document.getElementById('qr')
        

   var regno=document.getElementById('regno').value;

let selectsem=document.getElementById('selectsem').value
let selectbatch=document.getElementById('selectbatch').value
const batch20=20;
const batch21=21;
const batch22=22;
const batch23=23;
if (batch20==selectbatch) {


if( selectsem==1)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==2)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/june2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==3)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/nov2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==4)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/apr2023/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==5)
{
   alert('Result Not Published')
      }





    if(selectsem==6)
{
 
     alert('Result Not Published')
     }




    if(selectsem==7)
{
   alert('Result Not Published')
    }




    if(selectsem==8)
{
   alert('Result Not Published')
 
    }

   }
/* ----------------------2021 T0 2025 Batch------------------------------------*/
else if (batch21==selectbatch) {


if( selectsem==1)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==2)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/june2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==3)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/nov2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==4)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/apr2023/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==5)
{
   alert('Result Not Published')
      }





    if(selectsem==6)
{
 
     alert('Result Not Published')
     }




    if(selectsem==7)
{
   alert('Result Not Published')
    }




    if(selectsem==8)
{
   alert('Result Not Published')
 
    }

   }
/*-------------------------------2022 TO 2026---------------------------------------------------------------------*/
else if (batch22==selectbatch) {


if( selectsem==1)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==2)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/june2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==3)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/nov2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==4)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/apr2023/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==5)
{
   alert('Result Not Published')
      }





    if(selectsem==6)
{
 
     alert('Result Not Published')
     }




    if(selectsem==7)
{
   alert('Result Not Published')
    }




    if(selectsem==8)
{
   alert('Result Not Published')
 
    }

   }


/*   -----------------------------2023 TO 2027-------------------------------------------------*/

else if (batch23==selectbatch) {


if( selectsem==1)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/may2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==2)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/june2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }

    if(selectsem==3)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/nov2022/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==4)
{
   dw.style.display='inline'
   const qrcodee=new QRCode('qrcode',{

    text:'http://results.worldcolleges.info/psrresults/apr2023/display.php?regno='+regno,
    width:120,
    height:120,
    colorDark:"#000000",
    colorLight:"#ffffff",
    correctLevel:QRCode.CorrectLevel.H
});
    }



    if(selectsem==5)
{
   alert('Result Not Published')
      }





    if(selectsem==6)
{
 
     alert('Result Not Published')
     }




    if(selectsem==7)
{
   alert('Result Not Published')
    }




    if(selectsem==8)
{
   alert('Result Not Published')
 
    }

   }
   else
   {
      alert('Plese Select Your Batch or Semater')
   }

}


function downlod() {
let selectsem=document.getElementById('selectsem').value
let QR=document.getElementById('dw')
let imgsrc=qrcode.querySelector('img').src
QR.href=imgsrc;
QR.download='Semaster'+selectsem

}

/*............Cgpa Display Covert To Pdf With Download............................*/
/*window.onload=function()
{
   document.querySelector('.btnPopUpBox')
   .addEventListener("click",()=>
   {
      const popupdisplay=this.document.querySelector(".popupdisplay");
      console.log(popupdisplay);
      console.log(window);
      html2pdf().from(popupdisplay).save();
   })
}
*/

function Updatemsg() {
   alert("This Page Will Be Update Soon")
}
function Resultmsg()
{
   alert("This Sem Result Not Published ")
}

function closebtn() {
   const closebtn= document.querySelector(".popupbgr")
     closebtn.style.display="none"

}


//Producted Website
document.addEventListener('contextmenu',function(e){
   e.preventDefault();
});

document.onkeydown=function(e){

  if(event.keycode==123)
  {

   return false;
  }

  if (e.ctrlKey&&e.shiftKey&&e.keycode=='I'.charCodeAt(0)) {

   return false;
  }
   if (e.ctrlKey&&e.shiftKey&&e.keycode=='C'.charCodeAt(0)) {

   return false;
     }

      if (e.ctrlkey&&e.shiftKey&&e.keycode=='J'.charCodeAt(0)) {

   return false;
  }
   if (e.ctrlkey&&e.shiftKey&&e.keycode=='U'.charCodeAt(0)) {

   return false;
  }

}
