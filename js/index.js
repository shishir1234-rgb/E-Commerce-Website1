const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navleft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
      menu.classList.add("show");
      Document.body.classList.add("show");
      navBar.classList.add("show");
  }
});

navclose.addEventListener("click", () => {
    if (navleft < 0) {
        menu.classList.remove("show");
        Document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
  });

  // fix nav
  const navheight = navBar.getBoundingClientRect().height;

  window.addEventListener('scroll', ()=>{
       const scrollheight = window.pageyOffset;
       if (scrollheight > navheight) {
         navBar.classList.add("fix-nam");
        } else {
          navBar.classList.remove("fix-nav");
        }
     });

     // scroll to
     const links = [...document.querySelectorAll('.scroll-link')]

     links.map(link => {
       if (!link) return;
       link.addEventListener("click", e=> {
         e.preventDefault();

         const id = e.target.getattribute("href").slice(1);

         const el = document.getattribute(id);
         let position = el.Offsettop - navheight;

         window.scrollTo({
           top:position,
           left:0,
         });
         
         menu.classList.remove("show");
         document.body.classList.remove("show");
         navBar.classList.remove("show");
         })
     })

     gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
     gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, y: 20 });
     gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, y: 200 });
     gsap.from(".hero-content", { opacity: 0, duration: 1, delay: 2, y: -50 });
     gsap.from(".hero-conten", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
     gsap.from(".hero-conten", { opacity: 0, duration: 1, delay: 3.5, y: -50 });

     