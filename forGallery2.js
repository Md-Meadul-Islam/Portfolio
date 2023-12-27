const gallery = document.querySelectorAll(".image2 img");
const previewBox = document.querySelector(".preview-box");
const previewImg = document.querySelector(".preview-box img");
const closeIcon = document.querySelector(".icon");
const currentImg= document.querySelector(".current-img");
const totalImg = document.querySelector(".total-img");
const shadow = document.querySelector(".shadow");

//for wating load all image
window.onload = ()=>{
    for(let i = 0; i < gallery.length; i++ ){
        totalImg.textContent = gallery.length;//for counting total image number;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            
            clickImgIndex = newIndex;//store index of clicked image;
            function preview(){
                currentImg.textContent = newIndex+1;//for counting image number;
                let selectedImgUrl = gallery[newIndex].src;//put the source of clicked index image 
                previewImg.src = selectedImgUrl;//get clicked image url
            }
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            
            if(newIndex==0){
                prevBtn.style.display = "none";//for previous button none
            }
            if(newIndex>=gallery.length - 1){
                nextBtn.style.display = "none";//for next button none
            }
            prevBtn.onclick = ()=>{//if previous button clicked
                newIndex--;
                if(newIndex == 0){
                    preview();//call again image preview function for showing first image
                    prevBtn.style.display = "none";//if image index is zero then display none of previous button
                }
                else{
                    preview();//call for decreasing image value
                    nextBtn.style.display = "block";//if the image greater than 0
                }
            }
            nextBtn.onclick = ()=>{//if next button  clicked
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();//for showing last image
                    nextBtn.style.display = "none";
                }
                else{
                    preview();  //call for increasing image value
                    prevBtn.style.display = "block";
                }
            }
            preview(); //call for any image clicked
            previewBox.classList.add("show");//showing preview box
            shadow.style.display = "block";
            
            document.querySelector("body").style.overflow = "hidden";

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
       
    }
}