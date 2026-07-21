
let searchIcon = document.querySelector(".search-icon__wrapper");
let searchInput = document.querySelector(".searchInput-header1 input");
let overlay = document.querySelector(".overlay");
let logoImage = document.querySelector(".logo-image");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.classList.toggle("hidden");
  overlay.classList.toggle("active");
});

let darkMode = document.querySelectorAll(".dark-mode");
let lightMode = document.querySelectorAll(".light-mode");
let userBtns = document.querySelectorAll(".user-btn");
let doshboards = document.querySelectorAll(".doshboard");
let closeBtn = document.querySelector(".close");
let mainMenu = document.querySelector(".main-menu");
let menuIconNavbar = document.querySelector(".menu-icon__navbar");

darkMode.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    lightMode[index].classList.remove("hidden");
    darkMode[index].classList.add("hidden");
    document.body.classList.remove("dark");
    logoImage.attributes[0].value = "./images/Sabzlearn-1.svg";
  });
})
lightMode.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    darkMode[index].classList.remove("hidden");
    lightMode[index].classList.add("hidden");
    document.body.classList.add("dark");
    logoImage.attributes[0].value = "./images/Sabzlearn.svg";
  });
})

userBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    doshboards[index].classList.toggle("hidden");
    overlay.classList.toggle("blur");
  });
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainMenu.style.right = "-20rem";
  overlay.classList.remove("blurActive");
})
menuIconNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  mainMenu.style.right = "0";
  overlay.classList.add("blurActive");
})
// بستن سرچ و پاک کردن بلور وقتی کلیک در هر جایی از صفحه انجام می‌شود
document.addEventListener("click", (e) => {
  // اگر کلیک بر روی searchIcon یا input باشد، هیچ اقدامی انجام نده
  if (
    e.target.closest(".search-icon__wrapper") ||
    e.target.closest(".searchInput-header1 input")
  ) {
    return;
  }

  // اگر کلیک بر روی user-btn یا doshboard باشد، هیچ اقدامی انجام نده
  if (
    e.target.closest(".user-btn") ||
    e.target.closest(".doshboard")
  ) {
    return;
  }
  

  // بستن سرچ و پاک کردن بلور از input
  searchInput.classList.add("hidden");
  overlay.classList.remove("active");
  searchInput.classList.remove("blur");

  // بستن همه داشبوردها
  doshboards.forEach((dosh) => {
    dosh.classList.add("hidden");
  });
  
  

  overlay.classList.remove("blur");
});
document.addEventListener('DOMContentLoaded', function() {
  const headerItems = document.querySelectorAll('.header__mobile-item');

  headerItems.forEach(item => {
    item.addEventListener('click', function(event) {
      // جلوگیری از باز و بسته شدن همزمان چند منو
      headerItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });
      let iconNavMobile = item.querySelector('.icon-nav__mobile');
      
      // تغییر وضعیت فعال
      item.classList.toggle('active');
      iconNavMobile.classList.toggle('active');
      if(!item.className.includes('active')){
        iconNavMobile.classList.remove('active');
      }
      // تنظیم ارتفاع المان‌های والد
    });
  });
});