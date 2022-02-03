window.onload=function(){
 
    var MainImg=document.getElementById("MainImg");
    var smallImg=document.getElementsByClassName("small-img");
    
    
        smallImg[0].onclick=function(){   
     MainImg.src=smallImg[0].src; //ako kliknem na malu sliku velika postaja ta mala tj src male se kopira u src main image
    
    }
    
    
    smallImg[1].onclick=function(){   
     MainImg.src=smallImg[1].src; 
    
    }

    smallImg[2].onclick=function(){   
        MainImg.src=smallImg[2].src; 
       
       }

       smallImg[3].onclick=function(){   
        MainImg.src=smallImg[3].src; 
       
       }

     
}
    
