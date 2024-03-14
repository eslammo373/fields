
// toggle close btn


let togglenav = document.querySelector(".toggle");
let listNav = document.querySelector(".home .navbar .nav-list ul");
let item_nav = document.querySelector(".nav-list .links li a");




togglenav.onclick = function(){

    togglenav.classList.toggle("active");

    listNav.classList.toggle("visibal");
}

item_nav.onclick = function(){

    listNav.classList.toggle("visibal");
}


let nav = document.getElementById("nav");

 window.onscroll = function (){
    
    "use strict";
    
    if(window.pageYOffset > 150){
        nav.classList.add("on");
    }
    else{
      nav.classList.remove("on");
    }

 
    
};
  /*******************Start  plant popup******************** */
  const pages = document.getElementById("local");


  pages.onclick = function(){
    toggleplantsPopup();
  }

  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("plant__button")){
      toggleplantsPopup()
      plantItemDetails(e.target.parentElement);
      alert(e.target.parentElement);
    
    }
    document.addEventListener("click", (e) =>{
      if(e.target.classList.contains("close-btn")){
        toggleplantsPopup()
      }
    })
  })

  function toggleplantsPopup(){

    document.querySelector(".plant__popup").classList.toggle("open")

}
function plantItemDetails(plantItem){

  document.querySelector(".plant__image__img img").src = plantItem.querySelector(".plant__item__img").src;

  document.querySelector(".item__one").innerHTML 
  = plantItem.querySelector(".item__name").innerHTML;

  document.querySelector(".item__two").innerHTML 
  = plantItem.querySelector(".item__season").innerHTML;

  document.querySelector(".item__three").innerHTML 
  = plantItem.querySelector(".item__days").innerHTML;

  document.querySelector(".item__four").innerHTML 
  = plantItem.querySelector(".item__hours").innerHTML;

  document.querySelector(".item__five").innerHTML 
  = plantItem.querySelector(".item__temperature").innerHTML;

  document.querySelector(".item__sex").innerHTML 
  = plantItem.querySelector(".item__Humidity").innerHTML;

  document.querySelector(".item__seven").innerHTML 
  = plantItem.querySelector(".details-infos .item-four").innerHTML;

}
  /*******************end  plant popup******************** */


/*******************Start  team popup******************** */
const files = document.getElementById("now");

files.onclick = function(){
  toggleteamsPopup()
}

document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("team__button")){
    toggleteamsPopup()
    teamItemDetails(e.target.parentElement)
  
  }
  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("close-btns")){
      toggleteamsPopup()
    }
  })
})

function toggleteamsPopup(){

  document.querySelector(".team__popup").classList.toggle("open")

}

function teamItemDetails(teamItem){



  document.querySelector(".team__popup-content__right img").src = teamItem.querySelector(".team_image").src;


  document.querySelector(".team__popup-content__head").innerHTML 
  = teamItem.querySelector(".detail__title").innerHTML;

  document.querySelector(".team__popup-content__para").innerHTML 
  = teamItem.querySelector(".detail__descriptions").innerHTML;


 
  document.querySelector(".mebers-one a ").href = 
   teamItem.querySelector(".member-one a").href;


   document.querySelector(".mebers-two a ").href = 
   teamItem.querySelector(".member-two a").href;



   document.querySelector(".mebers-three a ").href = 
   teamItem.querySelector(".member-three a").href;



   document.querySelector(".mebers-four a ").href = 
   teamItem.querySelector(".member-four a").href;



   document.querySelector(".mebers-five a ").href = 
   teamItem.querySelector(".member-four a").href;






}
/*******************end  team popup******************** */

const slecsystem = document.querySelector(".slec_system");



slecsystem.onclick = function(){
  // console.log(slecsystem.value);


  if( slecsystem.value == "automatic"){

  document.querySelector(".system__choose").style.display = "none";

   
  }
   
  else if( slecsystem.value == "manual"){

    document.querySelector(".system__choose").style.display = "block";
  
     
    }
     

}

