
let buttons = document.querySelectorAll(".accordion_title");
let info = document.querySelectorAll(".accordion_info");

for (let i = 0; i<buttons.length; i++) {
    buttons[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight){
            closeInfo();
        }else {
            openInfo(this);
        }
    }
};

function openInfo(data) {
  closeInfo();
  data.classList.add("active");
  data.nextElementSibling.style.maxHeight = data.nextElementSibling.scrollHeight + "px";
    
}

function closeInfo() {
  for (let i = 0; i < buttons.length; i++) {
    info[i].style.maxHeight = null;
    buttons[i].classList.remove("active");
  }
}