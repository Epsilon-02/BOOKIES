var body = document.querySelector("body");
var btns = document.querySelectorAll(".mode");
let flag1 = 0;

function mode() {
  if (flag1 == 0) {
    btns.forEach(btn => {
      btn.innerHTML = "Light mode";
      body.classList.remove("Dark");
      body.classList.add("Light");
    });
    flag1 = 1;
  } else {
    btns.forEach(btn => {
      btn.innerHTML = "Dark mode";
      body.classList.remove("Light");
      body.classList.add("Dark");
    });
    flag1 = 0;
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", mode);
});



// lets make ham-burger

var menu = document.querySelector(".toggle");
var flag = 0;
function menuBar() {
  if (flag == 0) {
    menu.style.right = "0";
    flag = 1;
  } else {
    menu.style.right = "-250px";
    flag = 0;
  }
}

// lets make some slides

var slide = [
  {
    p: "https://images.unsplash.com/photo-1641154729273-063ed774729e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Royal"
  },
  {
    p: "https://images.unsplash.com/photo-1511987264940-3cb4d81da258?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Elegant"
  },
  {
    p: "https://images.unsplash.com/photo-1667039487342-bb590d533429?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Aesthetic"
  },
  {
    p: "https://images.unsplash.com/photo-1667039487341-041db260dd87?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    pic: "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Company of One",
    price: "$52",
    author: "Paul Jarvis",
    about:"Enter the realm of entrepreneurship on your own terms with Paul Jarvis' 'Company of One.' In this empowering guide, Jarvis challenges conventional business wisdom, encouraging you to embrace the benefits of staying small and agile. Navigate the landscape of self-employment, redefine success, and discover the art of building a business that perfectly fits your vision. 'Company of One' is your roadmap to creating a sustainable and fulfilling venture on your terms. Redefine success and embrace the power of your individual journey today."
  },
  {
    pic: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Psychology of Money",
    price: "$69",
    author: "Morgan Housel",
    about:"Master the art of wealth through the lens of psychology with 'The Psychology of Money.' Morgan Housel's insightful exploration unveils the secrets behind financial decisions, making this book an essential guide to a more prosperous and enlightened future. Elevate your financial intelligence – read it today!"
  },
  {
    pic: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "How Innovation Works",
    price: "$59",
    author: "Matt Ridley",
    about:"Join the innovative journey with Matt Ridley's 'How Innovation Works.' Explore the dynamic landscape where creativity meets progress, and ideas evolve into transformative breakthroughs. Ridley's compelling narrative unravels the secrets behind human ingenuity and the power of innovation. Embark on a captivating exploration of 'How Innovation Works' and discover the driving force behind the advancements that shape our world. Elevate your understanding of progress and creativity with this insightful masterpiece."
  },
  {
    pic: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Picture of Dorian Gray",
    price: "$54",
    author: "Oscar Wilde",
    about:"Step into the opulent world of 'The Picture of Dorian Gray' by Oscar Wilde. This timeless masterpiece unfolds the gripping tale of Dorian Gray, a young man whose portrait ages while he remains eternally youthful. Wilde's exquisite prose explores the dark allure of decadence and the consequences of indulgence, making this novel a haunting reflection on beauty, morality, and the pursuit of pleasure. Immerse yourself in the captivating narrative that has enchanted readers for generations, as Wilde's exploration of the human soul takes center stage in this literary classic."
  },
  {
    pic: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Two Towers",
    price: "$63",
    author: "J.R.R. Tolkien",
    about:"Embark on an epic journey with J.R.R. Tolkien's 'The Two Towers,' the second installment in the iconic 'The Lord of the Rings' trilogy. As the fellowship fractures, the story unfolds in the vast landscapes of Middle-earth, weaving together the fates of its diverse characters. Tolkien's masterful storytelling and vivid world-building come to life, delivering a tale of courage, friendship, and the relentless struggle against the forces of darkness. Join the quest to save Middle-earth and experience the magic of 'The Two Towers' as it continues the grand adventure set in motion in 'The Fellowship of the Ring.'"
  },
  {
    pic: "https://images.unsplash.com/photo-1603162590176-7418e6b00ea4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vampyres",
    price: "$42",
    author: "Lord Baryon",
    about:"Indulge your senses in the captivating world of 'Vampyres' by Lord Baryon. This enchanting tale immerses readers in a realm of dark allure, where shadows whisper secrets and passion intertwines with the supernatural. Lord Baryon's storytelling prowess weaves a spellbinding narrative, inviting you to surrender to the mysteries of the night. Unleash your imagination and embrace the seductive power of 'Vampyres'—a mesmerizing journey into the heart of darkness."
  },
  {
    pic: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Milk and Honey",
    price: "$45",
    author: "Rupi Kaur",
    about:"Dive into the soul-stirring world of 'Milk and Honey' by Rupi Kaur. This poetic masterpiece is a delicate blend of raw emotions and empowering verses, offering a journey through love, loss, and healing. With brevity and profound simplicity, Kaur's words resonate, making this collection a timeless exploration of the human experience. Immerse yourself in the beauty of 'Milk and Honey'—where poetry becomes a powerful vessel for self-discovery and resilience"
  },
  {
    pic: "https://images.unsplash.com/photo-1647529735054-9b68c881fdc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Six Second Story",
    price: "$56",
    author: "B. Rain Bennett",
    about:"So, you've hit a wall with your marketing strategy. You're struggling to connect with your target audience and retain their business. You've tried the social media thing, but your engagement is lower than you'd like it to be. And you're selling something impactful, but for some reason, no one seems all that interested. You're frustrated and tired. Something needs to change, but you don't know where to start. Well, this book is where to start. Six Second Stories: Maximize Your Impact in Minimal Time with Video Storytelling was written with you in mind -- the beginner storyteller, entrepreneur, small business owner, nonprofit director, content creator, or influencer. Filmmaker and storytelling expert, Rain Bennett, will walk you through how to utilize the power of storytelling via video as a key marketing technique to help boost your overall audience engagement, and keep them engaged for the long haul. We discuss why storytelling is critical to your business's success, the specifics of where and how to tell a good story, the science behind why storytelling works, and so much more. After reading this book, you'll be well on your way to creating lasting connections with your audience and growing your business more than you thought possible!"
  }
];
var booksLength = books.length;
var container1 = document.querySelector(".cardContainer1");
var clutter2 = "";

books.forEach((obj, idx) => {
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


function scrollbook(container, i) {
  let b = i % booksLength;
  let p = i % (booksLength * 2);

  if (p < booksLength + 1) {
    setTimeout(() => {
      container.scrollBy(b * 50, 0);
      i++;
      scrollbook(container, i);
    }, 2000);
  } else {
    setTimeout(() => {
      container.scrollBy(-b * 50, 0);
      i++;
      scrollbook(container, i);
    }, 2000);
  }
}
let c = 0;
scrollbook(container1, c);

// Recommendations 
var clutter3 = "";
books.forEach((obj, idx) => {
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
let d = 0;
scrollbook(container2, d);

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
                        ${book.about}
                    </div>
                </div>
            </div>
        </div>`;
}

var modal = document.querySelector(".modalbox");

// Event delegation on the container
function modaltoggle(container) {
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
      // Event listener to close modal when clicking outside
      var msg = document.querySelector(".message");
      document.addEventListener("click", (event) => {
        if (!msg.contains(event.target) && !container.contains(event.target)) {
          modal.style.display = "none";
        }
      });
    }
  });
}

modaltoggle(container1);
modaltoggle(container2);

// UpComing

var upcoming = [
  {
    pic: 'https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Amelie Nothumb',
    price: '$54.50',
    name: 'Stupore E Tremori'
  },
  {
    pic: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'C.S. Lewis',
    price: '$59.88',
    name: 'The Chronicles of NARNIA'
  },
  {
    pic: 'https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Nikita Gill',
    price: '$64.70',
    name: 'Your Soul is a River'
  }
]

var clutter4 = "";

upcoming.forEach((obj, idx) => {
    clutter4 += `<div class='upcomingbook'>
        <div class='card book-item' data-id='${idx}'>
            <div class='content'>
                <div class='imgbox'>
                    <img src='${obj.pic}' alt='${obj.name}' class='cardimage'>
                    <ul class='comingsoonbanner'>
                        <li>
                            <h3 class='comingday'></h3>
                            <h4>Days</h4>
                        </li>
                        <li>
                            <h3 class='cominghrs'></h3>
                            <h4>Hrs</h4>
                        </li>
                        <li>
                            <h3 class='comingmin'></h3>
                            <h4>Min</h4>
                        </li>
                        <li>
                            <h3 class='comingsec'></h3>
                            <h4>Sec</h4>
                        </li>
                    </ul>
                </div>
                <div class='carddetail' id='${idx}'>
                    <div class='cardbookname'>${obj.name}</div>
                    <div class='rating' id='${idx}'>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bx-star'></i>
                    </div>
                    <div class='bookauthor'>${obj.author}</div>
                    <div class='price'>${obj.price} <button class='addCartBtn' data-state='not-added'><i class='bx bx-cart'></i>Add to Cart</button></div>
                </div>
            </div>
        </div>
    </div>`;
});

var upcomingcard = document.querySelector(".upcoming");

upcomingcard.innerHTML = clutter4;

function Timer(card){
const time = new Date();

let day = document.querySelectorAll(".comingday");
let hrs = document.querySelectorAll(".cominghrs");
let min = document.querySelectorAll(".comingmin");
let sec = document.querySelectorAll(".comingsec");

day.forEach(day => {
  day.innerHTML = time.getDate();
});

hrs.forEach(hrs => {
  hrs.innerHTML = time.getHours();
});

min.forEach(minute => {
  minute.innerHTML = time.getMinutes();
});

sec.forEach(second => {
  second.innerHTML = time.getSeconds();
});
}

setInterval(Timer,1000);
Timer();

var addCartBtns = document.querySelectorAll(".addCartBtn");

addCartBtns.forEach(addCartBtn => {
  addCartBtn.addEventListener("click", () => {
    let currentState = addCartBtn.dataset.state || "not-added";

    if (currentState === "not-added") {
      addCartBtn.innerHTML = "Added";
      addCartBtn.dataset.state = "added";
    } else {
      addCartBtn.innerHTML = "<i class='bx bx-cart'></i>Add to Cart";
      addCartBtn.dataset.state = "not-added";
    }
  });
});

