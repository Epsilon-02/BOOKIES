var body = document.querySelector("body");
var btn = document.querySelector(".mode");
var flag1 = 0;
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
var flag = 0;
function menuBar(){ 
    if( flag == 0){
        menu.style.right = "0";
        flag =1;
    }else{ menu.style.right = "-250px";
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

  // Trending books

    const books = [
    {
      pic:"https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Company of One",
      price:"$52",
      author:"Paul Jarvis"
    },
    {
      pic:"https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"The Psychology of Money",
      price:"$69",
      author:"Morgan Housel"
    },
    {
      pic:"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"How Innovation Works",
      price:"$59",
      author:"Matt Ridley"
    },
    {
      pic:"https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"The Picture of Dorian Gray",
      price:"$54",
      author:"Oscar Wilde"
    },
    {
      pic:"https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"The Two Towers",
      price:"$63",
      author:"J.R.R. Tolkien"
    },
    {
      pic:"https://images.unsplash.com/photo-1603162590176-7418e6b00ea4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Vampyres",
      price:"$42",
      author:"Lord Baryon"
    },
    {
      pic:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Milk and Honey",
      price:"$45",
      author:"Rupi Kaur"
    },
    {
      pic:"https://images.unsplash.com/photo-1647529735054-9b68c881fdc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Six Second Story",
      price: "$56",
      author: "B. Rain Bennett"
    }
  ];
  var booksLength = books.length;
  var container1 = document.querySelector(".cardContainer1");
  var clutter2 = "";

  books.forEach((obj,idx)=>{
    clutter2 += `<div class='card book-item' data-id="${idx}">
    <div class='content'>
        <img src="${obj.pic}" alt="${obj.name}" class='cardimage'>
        <div class='carddetail' id="${idx}">
            <div class='cardbookname'>${obj.name}</div>
            <div class='rating' id="${idx}">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
            </div>
            <div class='bookauthor'>${obj.author}</div>
            <div class='price'>${obj.price}</div>
        </div>
    </div>
</div>`;
  })

  container1.innerHTML = clutter2;


    function scrollbook(container,i) {
      let b = i % booksLength;
      let p = i % (booksLength * 2);
  
      if (p < booksLength + 1) {
          setTimeout(() => {
              container.scrollBy(b * 50, 0);
              i++;
              scrollbook(container,i); 
          }, 2000);
      } else {
          setTimeout(() => {
              container.scrollBy(-b * 50, 0);
              i++;
              scrollbook(container,i); 
          }, 2000);
      }
  }
  let c=0;
  scrollbook(container1,c);

  // Recommendations 
  var clutter3 = "";
  books.forEach((obj,idx)=>{
    clutter3 += `<div class='card book-item' data-id="${idx}">
    <div class='content'>
        <img src="${obj.pic}" alt="${obj.name}" class='cardimage'>
        <div class='carddetail' id="${idx}">
            <div class='cardbookname'>${obj.name}</div>
            <div class='rating' id="${idx}">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
            </div>
            <div class='bookauthor'>${obj.author}</div>
            <div class='price'>${obj.price}</div>
        </div>
    </div>
</div>`;
  })
  var container2 = document.querySelector(".cardContainer2");

  container2.innerHTML = clutter3;
  let d=0;
  scrollbook(container2,d);

  // modal box
  
  function generateModalContent(book) {
    return `
        <div class='message'>
            <span class='closemodal'><i class='bx bx-x'></i></span>
            <div class='modalinfo'>
                <div class='modalpic'>
                    <div><img src="${book.pic}" alt="${book.name}"></div>
                </div>
                <div class='modalcontent'>
                    <div class='modalbookname'>${book.name}</div>
                    <div class='modalbookrating'>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bx-star'></i>
                    </div>
                    <div class='modalbookauthor'>${book.author}</div>
                    <div class='modalbookprice'>${book.price}</div>
                    <div class='addcart'><button><i class='bx bx-cart-download'></i>Add to cart</button></div>
                    <div class='modalabout'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis tempora explicabo recusandae numquam ex! Ea, eum debitis maiores dolores repudiandae libero, deleniti quae soluta culpa, laborum rerum perferendis voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ducimus ad natus porro fuga magni placeat blanditiis cupiditate explicabo temporibus, odio vel eligendi error! Perspiciatis maxime ducimus molestiae esse reprehenderit!
                    </div>
                </div>
            </div>
        </div>`;
}

var modal = document.querySelector(".modalbox");

// var container = document.querySelector(".cardContainer");

// Event delegation on the container
function modaltoggle(container){
container.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const bookItem = clickedElement.closest('.book-item');

    if (bookItem) {
        const idx = bookItem.dataset.id;
        const book = books[idx];

        // Display modal with the book details
        modal.style.display = "flex";
        modal.innerHTML = generateModalContent(book);
        // Event listener for the close button
        var close = document.querySelector(".closemodal");
        close.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});
}

modaltoggle(container1);
modaltoggle(container2);

