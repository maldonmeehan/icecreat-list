$(function(){
  var flavors = ["chocolate", "coffee", "vanilla", "strawberry"];
  $("button").click(function(){
    for (var index=0; index<flavors.length; index+=1){
      $("ul").append("<li>" + flavors[index] + "</li>");
    }
    // flavors.forEach(function(flavor){
    //   $("ul").append("<li>" + flavor + "</li>");
    // });
  });
});
