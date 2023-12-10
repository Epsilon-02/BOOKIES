var body = document.querySelector("body");
var btn = document.querySelector(".mode");
var flag1 = 1;
btn.addEventListener("click",mode);
function mode(){
    if(flag1 == 0){
        btn.innerHTML = "Light mode";
        body.classList.remove("Dark");
        body.classList.add("Light");
        flag1 = 1;
    }else{
        btn.innerHTML = "Dark mode";
        body.classList.remove("Light");
        body.classList.add("Dark");
        flag1 = 0;
    }
    console.log("hui");
}


// lets make ham-burger

var menu = document.querySelector(".toggle");
var flag = 1;
function menuBar(){ 
    if( flag == 0){
        menu.style.display = "none";
        flag =1;
    }else{ menu.style.display = "block";
           flag = 0;
         }
}

// lets make some slides

var slide = [
    {
      p: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Royal"
    },
    {
      p: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Elegant"
    },
    {
      p: "https://images.unsplash.com/photo-1512580770426-cbed71c40e94?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Aesthetic"
    },
    {
      p: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Book stack"
    }
  ];

  var slideLength = slide.length;
  
  var pic = document.querySelector(".part2");
  var clutter = "";
  
  slide.forEach(function (obj, idx) {
    clutter += `<img src="${obj.p}" id="${idx}" alt="${obj.text}">`;
  });
  
  pic.innerHTML = clutter;
  
  let i = 0;

  function scrollLoop() {
      let b = i % slideLength;
      let p = i % (slideLength * 2);
  
      if (p < slideLength + 1) {
          setTimeout(() => {
              pic.scrollBy(b * 200, 0);
              i++;
              scrollLoop(); 
          }, 5000);
      } else {
          setTimeout(() => {
              pic.scrollBy(-b * 200, 0);
              i++;
              scrollLoop(); 
          }, 5000);
      }
  }

  scrollLoop();
  
