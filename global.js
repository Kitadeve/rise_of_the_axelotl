// menu mobile 

function menuMobile () {
    const btn = document.querySelector(".burger");
    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".navbar a");
  
    btn.addEventListener("click", () => {
        header.classList.toggle("show-nav");
      });
      links.forEach(link => {
        link.addEventListener("click", () =>{
          header.classList.remove("show-nav");
      });
    })
  }
  menuMobile();


  // photo slide 

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  
  // Portfolio 
  
//   function tabsFilters () {
//     const tabs = document.querySelectorAll(".portfolio-filter a");
//     const projets = document.querySelectorAll(".portfolio .card");
  
//     const resetActivLinks = () => {
//       tabs.forEach(elem =>{
//         elem.classList.remove("active");
//       })
//     }
  
//     const showProjects = (elem) => {
//       console.log(elem)
//       projets.forEach(projet => {
  
//         let filter = projet.getAttribute("data-category");
  
//         if (elem === "all") {
//           projet.parentNode.classList.remove("hide");
//           return
//         }
  
        // if(filter !== elem) {
        //   projet.parentNode.classList.add("hide");
        // } else {
        //   projet.parentNode.classList.remove("hide");
        // }
  
        // option plus complexe - opérateur ternaire 
  
    //     filter !== elem ? projet.parentNode.classList.add("hide") : projet.parentNode.classList.remove("hide");
    //   });
    // }
  
    // tabs.forEach(elem => {
    //   elem.addEventListener("click",
    //     function (event) {
    //     event.preventDefault();
    //       let filter = elem.getAttribute("data-filter");
    //       // console.log(filter);
    //       showProjects(filter)
    //       resetActivLinks();
    //       elem.classList.add("active")
    //   })
    // })
  
//   }
  
//   tabsFilters()
  
//   function showProjectDetails() {
//     const links = document.querySelectorAll(".card__link");
//     const modals = document.querySelectorAll(".modal");
//     const btns = document.querySelectorAll(".modal__close");
  
//     const hideModals = () => {
//       modals.forEach(modal => {
//         modal.classList.remove("show");
//       });
//     }
  
//     links.forEach(elem => {
//       elem.addEventListener("click", (event) => {
//         event.preventDefault();
//         document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
//       })
//     })
  
//     btns.forEach(btn => {
//       btn.addEventListener("click", (event) => {
//         hideModals()
//       })
//     })
//   }
  
//   showProjectDetails();
  
  // effets 
  
  const observerIntersectionAnimation = () => {
    const section = document.querySelectorAll("section");
    const skills = document.querySelectorAll(".skills .bar");
  
    section.forEach((section, index) => {
      if(index === 0) return;
      section.style.opacity = "0";
      section.style.transition = "all 1.6s";
    })
  
    // skills.forEach((elem, index) => {
    //   elem.style.width = "0";
    //   elem.style.transition = "all 1.6s";
    // })
  
    let sectionObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          let elem = entry.target;
          elem.style.opacity = 1;
        }
      });
    });
  
    section.forEach(section => {
      sectionObserver.observe(section)
    })
  
    // let skillsObserver = new IntersectionObserver(function (entries, observer) {
    //   entries.forEach(entry => {
    //     if(entry.isIntersecting) {
    //       let elem = entry.target;
    //       console.log(elem);
    //       elem.style.width = elem.dataset.width + "%"
    //     }
    //   });
    // });
  
    skills.forEach(skill => {
      skillsObserver.observe(skill)
    })
  }
  
  observerIntersectionAnimation();
  
  