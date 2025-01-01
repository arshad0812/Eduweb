const navbar=document.querySelector("[data-navbar]");
const navtogglers=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");
const navlink=document.querySelectorAll("[data-nav-link]");


const addEventOnElem=function(elem,type,callback){
    if(elem.length>1){
        for(let i=0;i<elem.length;i++){
            elem[i].addEventListener(type,callback);
        }
    }
    else{
        elem.addEventListener(type,callback);
    }
}

const toggleNavbar=()=>{
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}


const closeNavbar=()=>{
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navtogglers,"click",toggleNavbar);

addEventOnElem(navlink,"click",closeNavbar);


// header


const header=document.querySelector("[data-header]");


const activeElem=function(){
    if(window.scrollY>100){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

addEventOnElem(window,"scroll",activeElem);