let videoElement = document.getElementById('night_scene'); 
let videoOverlay = document.getElementById('video_overlay'); 

window.onload = () =>{
    videoOverlay.style.height = `${videoElement.clientHeight}px`;
}

window.onresize = () =>{
    videoOverlay.style.height = `${videoElement.clientHeight}px`;
}