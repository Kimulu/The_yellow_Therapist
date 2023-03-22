
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(".jumbotron").height()) {
        $(".navbar").addClass("scrolled");

      } else {
        $(".navbar").removeClass("scrolled");
      }
    });
  });

const accordionBtn = document.querySelector('.accordion-btn');
const accordionBtn1 = document.querySelector('.accordion-btn1');
const accordionBtn2 = document.querySelector('.accordion-btn2');
const accordionContent = document.querySelector('.accordion-content');
const accordionContent1 = document.querySelector('.accordion-content1');
const accordionContent2 = document.querySelector('.accordion-content2');


accordionBtn.addEventListener('click', function() {
  if (accordionContent.style.display === 'block') {
    accordionContent.style.display = 'none';
  } else {
    accordionContent.style.display = 'block';
  }
});

accordionBtn1.addEventListener('click', function() {
  if (accordionContent1.style.display === 'block') {
    accordionContent1.style.display = 'none';
  } else {
    accordionContent1.style.display = 'block';
  }
});

accordionBtn2.addEventListener('click', function() {
  if (accordionContent2.style.display === 'block') {
    accordionContent2.style.display = 'none';
  } else {
    accordionContent2.style.display = 'block';
  }
});
