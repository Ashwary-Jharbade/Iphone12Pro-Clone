let toggleBarFlag = 0;
const toggleBars = () => {
    let bar1 = document.getElementById("bar-1");
    let bar2 = document.getElementById("bar-2");
    toggleBarFlag = 1 - toggleBarFlag;
    if(toggleBarFlag) {
        bar1.style.bottom = "-10px";
        bar2.style.bottom = "-10px";

        bar1.style.transform = "skewY(-45deg)";
        bar2.style.transform = "skewY(45deg)";
    } else {
        bar1.style.bottom = "-7px";
        bar2.style.bottom = "-14px";

        bar1.style.transform = "rotate(0deg)";
        bar2.style.transform = "rotate(0deg)";
    }
}