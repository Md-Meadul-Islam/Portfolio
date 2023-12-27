const galleryImages = document.querySelectorAll(".image2 img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;


if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function(){ 
        //for finding Image Url/source
            let setNewImgUrl = image.src;
            getLatestOpenedImg  = index+1;

         //for getting body of the page.
            let container = document.body;
         //create new div
            let createWindow = document.createElement("div");
        //put the div in the body
            container.appendChild(createWindow);
        //add class and onclick events in image window
            createWindow.setAttribute("class", "img-window");
            createWindow.setAttribute("onclick", "closeImg()");

        //create new img tag
            let createImg = document.createElement("img");
        //put the img tag in the div
            createWindow.appendChild(createImg);
        //add source attribute in img tag and get the image
            createImg.setAttribute("src", setNewImgUrl);
            createImg.setAttribute("id", "current-img");

        //for takeing loading time with onload event
            createImg.onload = function(){
            //for getting image width
                let imgwidth = this.width;
                let calcImgToEdgeNext = ((windowWidth - imgwidth) / 2 ) - 100;
                let calcImgToEdgePrev = ((windowWidth - imgwidth) / 2 ) - 80;

             //for next button image
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdgeNext +"px;";

            //for prev button image
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdgePrev +"px;";

            }
           
        }
    });
}
//for closing image
function closeImg(){
    document.querySelector(".img-window").remove();
   document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}
//for change image
function changeImg(changeDir){
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calNewImg;
     if(changeDir===1){
        calNewImg = getLatestOpenedImg + 1;
        if(calNewImg>galleryImages.length){
            calNewImg = 1;
        }
     }
     else if(changeDir===0){
        calNewImg = getLatestOpenedImg - 1;
        if(calNewImg<1){
            calNewImg = galleryImages.length;
        }
     }
     newImg.setAttribute("src","img/img" + calNewImg + ".jpg");

}