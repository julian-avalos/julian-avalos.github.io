function colors(){
  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  var x = document.getElementsByTagName("body");
  for(var i = 0; i < x.length; i++){
    x[i].style.backgroundColor = randomColor;
  }
  document.getElementById("colorName").innerHTML = randomColor.toUpperCase();
}
