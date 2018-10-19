(function() {  
	const sun = {
  	width : "100px",
    height : "100px",
    borderRadius : "500px",
    backgroundColor : "rgb(255, 255, 0",
    position : "absolute",
    top : "10px",
    left : "10px"
  }
  
	const body = document.body;
    const elem = document.createElement("div");
  
  for (let attr in sun) {
  	elem.style[attr] = sun[attr];
  }
  
  body.appendChild(elem);  
  
  let color = 255, top = 10, left = 10, width = 10, height = 10;
  const interval = setInterval(function() {
  	color -= 0.1;
    top = 0.6;
    left = 0.6;
    width = -0.05;
    height = -0.05;
    
  	elem.style.backgroundColor = "rgb(255," + Math.ceil(color) + ",0)";
    elem.style.top = parseFloat(elem.style.top) + top + "px";    
    elem.style.left = parseFloat(elem.style.left) + left + "px";
    elem.style.width = parseFloat(elem.style.width) + width + "px"
    elem.style.height = parseFloat(elem.style.height) + height + "px"
    
    if(parseFloat(elem.style.top) > 3200 || parseFloat(elem.style.left) > 4800 ){
    	elem.style.top = parseFloat(elem.style.top) + top + "px";    
    	elem.style.left = parseFloat(elem.style.left) + left + "px";
      clearInterval(interval);
    }
    
  }, 10);
})();