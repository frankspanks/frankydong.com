$(function () {
    $("#subquote").fadeIn();
    //console.log($(".hamburger"))
    function toggleHamburger(e) {
        console.log("toggle", $(".overlay"))
        e.stopPropagation()
        $(".hamburger")[0].classList.toggle("change")
        $(".hamburger")[0].classList.toggle("blue")
        console.log($(".hamburger"))
        const barsArray = Array.from($(".hamburger div"))
        barsArray.forEach(bar => {
            bar.classList.toggle("white")
        });
        $(".overlay")[0].classList.toggle("hidden")
    }
    const hamburger = $(".hamburgerClick")
    $(".hamburger div").on("click", function (e) {
        e.stopPropagation()
    })
    hamburger.on("click", toggleHamburger)

   // window.addEventListener("load", function(event) {
    //  console.log("All resources finished loading!");
   // });


});



/*



*/
/*
function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}



$( document ).ready(function() {
  var speed = 75;
  var delay = $('h1').text().length * speed + speed;
  typeEffect($('h1'), speed);
  setTimeout(function(){
    $('p').css('display', 'inline-block');
    typeEffect($('p'), speed);
  }, delay);
});
*/

/*
var i = 0;
var txt = 'Franky Minh Dong';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("fmd").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/
/*
$("hamburger").click(function(){
    // action goes here!!

  });

  function myFunction(x) {
    x.classList.toggle("change");

    */