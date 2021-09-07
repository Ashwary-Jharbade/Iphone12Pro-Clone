window.onload = () =>{
    let obj = document.querySelector(".desc-bar")
    let dobj = document.querySelector(".desc-link")
    dobj.style.color = "#ffffff";
    obj.style.backgroundColor = "#0071e3";
    setTimeout(()=>{
        obj.style.backgroundColor = "#1d1d1f";
        dobj.style.color = "#2675c1";
    },5000)
}