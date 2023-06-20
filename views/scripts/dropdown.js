let control="";
function myFunction(n) {
  dropdowns = document.getElementsByClassName("dropdown-content");
  for(const dropdown of dropdowns){
    dropdown.classList.remove('show');
  }
  document.getElementById("myDropdown" + n).classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeDropdown(){
  if(control=="on"){
    document.getElementById("menu-responsive").style.display="none";
  }
  else{
    document.getElementById("menu-responsive").style.display="inline-block";
    control="on";
  }
  
}





