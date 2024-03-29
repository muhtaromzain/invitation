$(function () {
  // init AOS
  AOS.init({
    startEvent: "load",
  });

  let isChrome =
    /Chrome/.test(navigator.userAgent) || /Google Inc/.test(navigator.vendor);
  let isSafari = /safari/.test(navigator.userAgent.toLowerCase());
  let isIphone = /iphone/.test(navigator.userAgent.toLowerCase());

  $(document).ready(function () {
    // show modal when load
    $("#modal-fullscreen-xl").modal("show");
    $("#modal-fullscreen-xl").addClass("fade");

    document.getElementsByTagName("html")[0].style.visibility = "visible";

    // show modal when load by trigger click
    // $("#open-modal").trigger("click");

    console.log("document ready");
  });

  // init opening
  $(window).on("load", function () {
    console.log("sampai sini");
    AOS.refresh();
    if (!isChrome) {
      document.getElementById("myAudio").autoplay = true;
    }

    if (isSafari || isIphone) {
      document.getElementById("myAudio").autoplay = false;
    }
  });

  // Set wedding day and date
  var weddingDate = "Sabtu, 7 Januari 2023";
  $(".weddingDate").html(weddingDate);
  var venueAddress =
    "Balai Prajurit Ardhya Loka, Halim Perdana Kusuma, Jakarta Timur";
  $(".venueAddress").html(venueAddress);

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 7, 2023 10:00:00").getTime();

  // Update the count down every 1 second
  var weddingDateTimer = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(weddingDateTimer);
    }
  }, 1000);

  // Audio setup
  var bgSoundPlay = true;
  var bgSound = document.getElementById("myAudio");

  $("#audio").on("click", function (e) {
    e.preventDefault();

    if (bgSoundPlay) {
      $("#play").removeClass("audio-button");
      $("#pause").addClass("audio-button");
      bgSound.pause();
      bgSoundPlay = false;
    } else {
      $("#play").addClass("audio-button");
      $("#pause").removeClass("audio-button");
      bgSound.play();
      bgSoundPlay = true;
    }
  });

  // open invitation
  $("#open-invitation").on("click", function (e) {
    e.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    if (isChrome || isIphone || isSafari) {
      bgSound.play();
      bgSoundPlay = true;
    }
  });

  // guest name
  var guestName = window.location.href;
  guestName = guestName.split("?to=")[1];

  if (guestName) {
    guestName = capitalizeTheFirstLetterOfEachWord(guestName);
    guestName = guestName;
  } else {
    guestName = "Di Tempat";
  }

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(" ");

    if (words.indexOf("_") != -1) {
      var separateWord = words.toLowerCase().split("_");
    }

    if (words.indexOf("-") != -1) {
      var separateWord = words.toLowerCase().split("-");
    }

    if (words.indexOf("+") != -1) {
      var separateWord = words.toLowerCase().split("+");
    }

    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }

  // Slick
  $(".your-class").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 815,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  // typed
  var typed = new Typed("#guest-name", {
    strings: [guestName],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});
