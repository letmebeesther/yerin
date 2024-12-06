function dropdown(){
    var c = document.getElementById("intro")
    var img = document.getElementById("button_img")

    if(c.style.display === "none"){
        c.style.display = "block";
        img.src="./img/up.png";
    }
    else {
        c.style.display = "none";
        img.src="./img/down.png";
    }
}

function dropdown1(){
    var a = document.getElementById("list1")
    var img = document.getElementById("button_img1")

    if(a.style.display === "none"){
        a.style.display = "block";
        img.src="./img/up.png";
    }
    else {
        a.style.display = "none";
        img.src="./img/down.png";
    }
}

function dropdown2(){
    var b = document.getElementById("list2")
    var img = document.getElementById("button_img2")

    if(b.style.display === "none"){
        b.style.display = "block";
        img.src="./img/up.png";
    }
    else {
        b.style.display = "none";
        img.src="./img/down.png";
    }
}

