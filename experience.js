
function openTab(evt, tabName) { //call the function onclick  by events
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("para1"); //get the content of this class
  for (i = 0; i < tabcontent.length; i++) { //get all content of tabcontent
    tabcontent[i].style.display = "none"; //all content display none;
  }
  tablinks = document.getElementsByClassName("developer"); //get the content header
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", ""); //replace active class with none
  }
  document.getElementById(tabName).style.display = "block";//
  evt.currentTarget.className += " active";//clicked element add active class;
}
