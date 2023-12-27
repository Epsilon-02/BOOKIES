var body = document.querySelector("body");
var btns = document.querySelectorAll(".mode");
var menu = document.querySelector(".toggle");
var pic = document.querySelector(".part2");
var container1 = document.querySelector(".cardContainer1");
var container2 = document.querySelector(".cardContainer2");
var modal = document.querySelector(".modalbox");
var upcomingcard = document.querySelector(".upcoming");
var addCartBtns = document.querySelectorAll(".addCartBtn");
var testimonals = document.querySelector(".swiper-wrapper");
var cart = [];

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
var books = [
  {
    pic: "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Company of One",
    price: "52",
    author: "Paul Jarvis",
    about: "Enter the realm of entrepreneurship on your own terms with Paul Jarvis' 'Company of One.' In this empowering guide, Jarvis challenges conventional business wisdom, encouraging you to embrace the benefits of staying small and agile. Navigate the landscape of self-employment, redefine success, and discover the art of building a business that perfectly fits your vision. 'Company of One' is your roadmap to creating a sustainable and fulfilling venture on your terms. Redefine success and embrace the power of your individual journey today."
  },
  {
    pic: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Psychology of Money",
    price: "69",
    author: "Morgan Housel",
    about: "Master the art of wealth through the lens of psychology with 'The Psychology of Money.' Morgan Housel's insightful exploration unveils the secrets behind financial decisions, making this book an essential guide to a more prosperous and enlightened future. Elevate your financial intelligence – read it today!"
  },
  {
    pic: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "How Innovation Works",
    price: "59",
    author: "Matt Ridley",
    about: "Join the innovative journey with Matt Ridley's 'How Innovation Works.' Explore the dynamic landscape where creativity meets progress, and ideas evolve into transformative breakthroughs. Ridley's compelling narrative unravels the secrets behind human ingenuity and the power of innovation. Embark on a captivating exploration of 'How Innovation Works' and discover the driving force behind the advancements that shape our world. Elevate your understanding of progress and creativity with this insightful masterpiece."
  },
  {
    pic: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Picture of Dorian Gray",
    price: "54",
    author: "Oscar Wilde",
    about: "Step into the opulent world of 'The Picture of Dorian Gray' by Oscar Wilde. This timeless masterpiece unfolds the gripping tale of Dorian Gray, a young man whose portrait ages while he remains eternally youthful. Wilde's exquisite prose explores the dark allure of decadence and the consequences of indulgence, making this novel a haunting reflection on beauty, morality, and the pursuit of pleasure. Immerse yourself in the captivating narrative that has enchanted readers for generations, as Wilde's exploration of the human soul takes center stage in this literary classic."
  },
  {
    pic: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "The Two Towers",
    price: "63",
    author: "J.R.R. Tolkien",
    about: "Embark on an epic journey with J.R.R. Tolkien's 'The Two Towers,' the second installment in the iconic 'The Lord of the Rings' trilogy. As the fellowship fractures, the story unfolds in the vast landscapes of Middle-earth, weaving together the fates of its diverse characters. Tolkien's masterful storytelling and vivid world-building come to life, delivering a tale of courage, friendship, and the relentless struggle against the forces of darkness. Join the quest to save Middle-earth and experience the magic of 'The Two Towers' as it continues the grand adventure set in motion in 'The Fellowship of the Ring.'"
  },
  {
    pic: "https://images.unsplash.com/photo-1603162590176-7418e6b00ea4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vampyres",
    price: "42",
    author: "Lord Baryon",
    about: "Indulge your senses in the captivating world of 'Vampyres' by Lord Baryon. This enchanting tale immerses readers in a realm of dark allure, where shadows whisper secrets and passion intertwines with the supernatural. Lord Baryon's storytelling prowess weaves a spellbinding narrative, inviting you to surrender to the mysteries of the night. Unleash your imagination and embrace the seductive power of 'Vampyres'—a mesmerizing journey into the heart of darkness."
  },
  {
    pic: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Milk and Honey",
    price: "45",
    author: "Rupi Kaur",
    about: "Dive into the soul-stirring world of 'Milk and Honey' by Rupi Kaur. This poetic masterpiece is a delicate blend of raw emotions and empowering verses, offering a journey through love, loss, and healing. With brevity and profound simplicity, Kaur's words resonate, making this collection a timeless exploration of the human experience. Immerse yourself in the beauty of 'Milk and Honey'—where poetry becomes a powerful vessel for self-discovery and resilience"
  },
  {
    pic: "https://images.unsplash.com/photo-1647529735054-9b68c881fdc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Six Second Story",
    price: "56",
    author: "B. Rain Bennett",
    about: "So, you've hit a wall with your marketing strategy. You're struggling to connect with your target audience and retain their business. You've tried the social media thing, but your engagement is lower than you'd like it to be. And you're selling something impactful, but for some reason, no one seems all that interested. You're frustrated and tired. Something needs to change, but you don't know where to start. Well, this book is where to start. Six Second Stories: Maximize Your Impact in Minimal Time with Video Storytelling was written with you in mind -- the beginner storyteller, entrepreneur, small business owner, nonprofit director, content creator, or influencer. Filmmaker and storytelling expert, Rain Bennett, will walk you through how to utilize the power of storytelling via video as a key marketing technique to help boost your overall audience engagement, and keep them engaged for the long haul. We discuss why storytelling is critical to your business's success, the specifics of where and how to tell a good story, the science behind why storytelling works, and so much more. After reading this book, you'll be well on your way to creating lasting connections with your audience and growing your business more than you thought possible!"
  }
];
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
];
var clients = [
  {
    person: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amanda Smith",
    rev: "Elysian's online bookstore is a book lover's paradise! Navigating the site is a breeze, and the extensive selection caters to every reading taste. I love the personalized recommendations—they've introduced me to some amazing reads. Plus, their speedy deliveries make it feel like Christmas every time I order! The packaging exudes elegance, making every book feel like a precious gift. Highly recommend.",
    min: "1min ago"
  },
  {
    person: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Anand Gupta",
    rev: "Elysian has become my literary sanctuary. The website is intuitive, and I appreciate the diverse range of titles available. The convenience of ordering from the comfort of my home without compromising on the joy of discovering new books—it's a win-win. Elysian has certainly earned my loyalty. The elegant packaging adds a touch of sophistication to the whole experience.",
    min: "3 miin ago"
  },
  {
    person: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dylan Rock",
    rev: "Elysian Online Bookstore is a dream come true for someone like me who craves variety in reading. The website's layout is clean, and I can easily lose track of time exploring their extensive collection. The prompt delivery and occasional exclusive offers keep me coming back for more literary adventures. The diverse range of genres ensures there's always something for every mood.",
    min: "5 min ago"
  },
  {
    person: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Stephanie Holmes",
    rev: "Elysian has made my book-buying addiction even more delightful. The website is my haven, offering an abundance of choices and a smooth checkout process. The fact that they stay on top of new releases ensures I'm never behind on the hottest titles. Elysian, you've won my heart! The periodic discounts and exclusive offers are the cherry on top of this literary indulgence.",
    min: "7 min ago"
  }
];


//mode
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

function createAndScrollSlide(slideArray, containerSelector, scrollInterval, scrollDistance) {
  var slideLength = slideArray.length;
  var container = document.querySelector(containerSelector);
  var i = 0;

  function generateSlide() {
    var clutter = "";

    slideArray.forEach(function (obj, idx) {
      clutter += `<img src="${obj.p}" id="${idx}" alt="${obj.text}">`;
    });

    container.innerHTML = clutter;
  }

  function scrollLoop() {
    let b = i % slideLength;
    let p = i % (slideLength * 2);

    setTimeout(() => {
      container.scrollBy(p < slideLength + 1 ? b * scrollDistance : -b * scrollDistance, 0);
      i++;
      scrollLoop();
    }, scrollInterval);
  }

  // Generate the initial slide
  generateSlide();

  // Start the scrolling loop
  scrollLoop();
}

createAndScrollSlide(slide, ".part2", 5000, 200);

// Books Slides

function generateBookCards(container, books, scrollDistance, scrollInterval) {
  var booksLength = books.length;
  var clutter = "";

  books.forEach((obj, idx) => {
    clutter += `<div class='card book-item' data-array-name="books" data-id="${idx}">
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
              <div class='price'>$${obj.price}</div>
          </div>
      </div>
  </div>`;
  });

  container.innerHTML = clutter;

  function scrollBook(container, i) {
    let b = i % booksLength;
    let p = i % (booksLength * 2);

    if (p < booksLength + 1) {
      setTimeout(() => {
        container.scrollBy(b * scrollDistance, 0);
        i++;
        scrollBook(container, i);
      }, scrollInterval);
    } else {
      setTimeout(() => {
        container.scrollBy(-b * scrollDistance, 0);
        i++;
        scrollBook(container, i);
      }, scrollInterval);
    }
  }

  let c = 0;
  scrollBook(container, c);
}

generateBookCards(container1, books, 50, 2000); // Recommendations

generateBookCards(container2, books, 50, 2000); // Trending


// modal box

function generateModalContent(book, idx) {

  return `
        <div class='message'>
            <span class='closemodal'><i class='bx bx-x'></i></span>
            <div class='modalinfo'>
                <div class='modalpic'>
                    <div><img src="${book[idx].pic}" alt="${book[idx].name}"></div>
                </div>
                <div class='modalcontent'>
                    <div class='modalbookname'>${book[idx].name}</div>
                    <div class='modalbookrating'>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bx-star'></i>
                    </div>
                    <div class='modalbookauthor'>${book[idx].author}</div>
                    <div class='modalbookprice'>$${book[idx].price}</div>
                    <div class='addcart'><button class="AddCart" data-array="books" data-id="${idx}"><i class='bx bx-cart-download'></i>Add to cart</button></div>
                    <div class='modalabout'>
                        ${book[idx].about}
                    </div>
                </div>
            </div>
        </div>`;
}

// Event delegation on the container
function modaltoggle(container) {
  container.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const bookItem = clickedElement.closest('.book-item');

    if (bookItem) {
      const idx = bookItem.dataset.id;
      const arrayName = bookItem.dataset.arrayName;

      var dynamicArray = window[arrayName];

      // Display modal with the book details
      modal.style.display = "flex";

      modal.innerHTML = generateModalContent(dynamicArray, idx);
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
    var cartBtn = document.querySelectorAll(".AddCart");

    cartBtn.forEach((cartBtn) => {
      cartBtn.addEventListener("click", (event) => {
        let productArray = cartBtn.dataset.array;
        let productArrayId = cartBtn.dataset.id;
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == productArrayId);
        if (cart.length <= 0) {
          cart = [{
            product_id: productArrayId,
            product_Arr: productArray,
            quantity: 1
          }];
        } else if (positionThisProductInCart < 0) {
          cart.push({
            product_id: productArrayId,
            product_Arr: productArray,
            quantity: 1
          });
        } else {
          cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
        }
        showFloatingPopup("Added");
        updateCart(cart);
      });
    });
  });
}

modaltoggle(container1);
modaltoggle(container2);

// UpComing

function generateUpcomingBooks(upcoming) {
  let clutter = "";

  upcoming.forEach((obj, idx) => {
    clutter += `<div class='upcomingbook'>
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

  upcomingcard.innerHTML = clutter;
}

generateUpcomingBooks(upcoming);

function Timer(card) {
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

setInterval(Timer, 1000);
Timer();

// Add cart buttons

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

// Testimonials Slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function generateTestimonials(clients) {
  let clutter = "";

  clients.forEach((obj) => {
    clutter += `<div class="swiper-slide">
      <div class="client">
          <img src="${obj.person}" alt="">
          <div class="name">${obj.name}</div>
      </div>
      <div class="rev">
          <div class="head"><i class='bx bxs-quote-alt-right'></i></div>
          <div class="rev-content">${obj.rev}</div>
          <div class="timeago">${obj.min}</div>
      </div>
    </div>`;
  });

  testimonals.innerHTML = clutter;
}

// Assuming 'clients' and 'testimonals' are defined elsewhere
generateTestimonials(clients);

// --------------------------Cart Section-------------------->

// Initialize cart from localStorage or set it as an empty array
let data = JSON.parse(localStorage.getItem('data')) || [];

// Function to update cart and save to localStorage
function updateCart(newCart) {
  data = newCart;
  localStorage.setItem('data', JSON.stringify(data));
}

// Example of retrieving the cart data
function getCart() {
  return data;
}

function clearCart() {
  data = [];
  updateCart(data);
}

function showFloatingPopup(message) {
  // Create a new div element
  var popup = document.createElement('div');

  // Set the class for styling
  popup.className = 'floating-popup';

  // Set the content
  popup.innerText = message;

  // Append the div to the body
  document.body.appendChild(popup);

  // Make the popup visible
  popup.style.display = 'block';

  // Schedule the removal of the popup after a delay
  setTimeout(function() {
    popup.style.display = 'none';
    // Remove the popup from the DOM after it's hidden
    document.body.removeChild(popup);
  }, 3000); // Adjust the delay (in milliseconds) based on your preference
}