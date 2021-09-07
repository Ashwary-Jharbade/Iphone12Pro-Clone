window.addEventListener("scroll",()=>{
    let offset = window.pageYOffset;
    if ( offset > 50 ){
        let obj = document.querySelector(".fixed-bar");
        obj.style.backgroundColor = "#1d1d1fb8";
    } else {
        let obj = document.querySelector(".fixed-bar");
        obj.style.backgroundColor = "#000000";
    }
})