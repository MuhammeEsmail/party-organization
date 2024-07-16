$("#side-bar-open").click(function () {
  $("aside").animate({ left: "0" }, 500);
  $(this).hide();
  $("#side-bar-close").show();
});
$("#side-bar-close").click(function () {
  $(this).hide();
  $("#side-bar-open").show();
  $("aside").animate({ left: "-205px" }, 500);
});



$(".singer").click(function () {
  $(this).next().slideToggle(500);
});

var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $('#days').html(days+' d')
  $('#hours').html(hours+' h')
  $('#minutes').html(minutes+' m')
  $('#seconds').html(seconds+' s')
  if (distance < 0) {
    clearInterval(x);
    $('.box').html("Event time has expired");
  }
}, 1000);

