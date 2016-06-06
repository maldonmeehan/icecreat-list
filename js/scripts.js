$(function(){
  var flavors = ["chocolate", "coffee", "vanilla", "strawberry"];
  $("button").click(function(){
    flavors.forEach(function(flavor){
      $("ul").append("<li>" + flavor + "</li>");
    });
  });
});
