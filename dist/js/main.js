const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


<div class="social">
<div class="social__wrap flex flex-jc-sp flex-ai-c">
  <div class="social__logo">
    <a href="/" id="footer__logo"><i class="fas fa-gem"></i> Next</a>
  </div>
  <p class="website__rights">
    Copyright &copy; 2021-Remon Matthias. All rights reserved
  </p>
  <div class="social__icons-wrapper flex flex-jc-sp flex-ai-c">
    <a href="/" class="social__icon-link" target="_blank"
      ><i class="fab fa-facebook"></i
    ></a>
    <a href="/" class="social__icon-link" target="_blank"
      ><i class="fab fa-instagram"></i
    ></a>
    <a href="/" class="social__icon-link" target="_blank"
      ><i class="fab fa-twitter"></i
    ></a>
    <a href="/" class="social__icon-link" target="_blank"
      ><i class="fab fa-linkedin"></i
    ></a>
    <a href="/" class="social__icon-link" target="_blank"
      ><i class="fab fa-youtube"></i
    ></a>
  </div>
</div>
</div>


#490e70