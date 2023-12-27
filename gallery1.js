const gallery1=  document.querySelectorAll(".image1 img");

    for(let i = 0; i<gallery1.length; i++){
      gallery1[i].addEventListener("click", function() {
        var currentI = document.getElementsByClassName("image1active");
        
        currentI[0].className = currentI[0].className.replace("image1active", "");
        
        this.className += "image1active";
        console.log(currentI.length);
      });
       
        
    }

/**
 var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
*/