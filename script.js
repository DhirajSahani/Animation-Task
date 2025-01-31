
var ids = ["box1", "box2", "box3"];
var classes = ["box1", "box2", "box3"];

var box2 = document.getElementById("box2");





box2?.addEventListener("click", (e) => {
    e.stopPropagation();
    if(box2.classList.contains("box2")){
        box2.classList.remove("box2");
    }
    else{
        box2.classList.add("box2");
    }
    if(box2.classList.contains("box1")){
        box2.classList.remove("box1");
    }
    else{
        box2.classList.add("box1");
    }
})