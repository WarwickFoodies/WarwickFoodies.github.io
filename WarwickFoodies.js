$('.fullBackground').fullClip({
  images: [background_web.jpg]
});


$('.fullBackground').fullClip({
  transitionTime: 1000,
  wait: 3000
});

/* only execute this script when the document is ready */
$('index.html').ready(function(){
  /* function called when you click of the button */
  $("button").click(function(show){
      
    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });
});
