jQuery(document).ready(function ($) {
  //set animation timing
  var animationDelay = 2500,
    //clip effect
    revealDuration = 600,
    revealAnimationDelay = 1500;
  initHeadline();

  function initHeadline() {
    animateHeadline($(".cd-headline"));
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function () {
      var headline = $(this);
      var spanWrapper = headline.find(".cd-words-wrapper"),
        newWidth = spanWrapper.width() + 10;
      spanWrapper.css("width", newWidth);

      //trigger animation
      setTimeout(function () {
        hideWord(headline.find(".is-visible").eq(0));
      }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    $word
      .parents(".cd-words-wrapper")
      .animate({ width: "2px" }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
  }

  function showWord($word, $duration) {
    $word
      .parents(".cd-words-wrapper")
      .animate({ width: $word.width() + 10 }, revealDuration, function () {
        setTimeout(function () {
          hideWord($word);
        }, revealAnimationDelay);
      });
  }

  function takeNext($word) {
    return !$word.is(":last-child")
      ? $word.next()
      : $word.parent().children().eq(0);
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }
});

//Nav scroll
const nav = document.getElementById("navbar-daniels");
const navLink = document.getElementById("navbar-link");
const navBrand = document.getElementById("navbar-brand");
const targetSection = document.getElementById("about");
const toggleButton = document.getElementById("tog-btn");

window.addEventListener("scroll", () => {
  const sectionTop = targetSection.offsetTop;

  if (window.scrollY >= sectionTop) {
    nav.classList.add("navbar-scroll");
    navBrand.classList.add("navbar-brand-scroll");
    navLink.classList.add("scroll");
    toggleButton.classList.add("tog-btn");
  } else {
    nav.classList.remove("navbar-scroll");
    navBrand.classList.remove("navbar-brand-scroll");
    navLink.classList.remove("scroll");
    toggleButton.classList.remove("tog-btn");
  }
});