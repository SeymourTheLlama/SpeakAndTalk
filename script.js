$(document).ready(function(){

        var toggle = 0;

        $(document).keydown(function(e){//up
            if (e.keyCode == 38 ) {
                        if (toggle === 0) {playSound("up");}
                        if (toggle === 1) {record("up");}
              }        
        });
       
        $(document).keydown(function(e){//down
            if (e.keyCode == 40 ) {
                        if (toggle === 0) {playSound( "down" );}
                        if (toggle === 1) {record("down");} 
              }       
        });

        $(document).keydown(function(e){//right
            if (e.keyCode == 39 ) {
			
                        if (toggle === 0) {playSound( "right" );}
                        if (toggle === 1) {record("right");}
              }        
        });

        $(document).keydown(function(e){//left
            if (e.keyCode == 37 ) {		
                        if (toggle === 0) {playSound("left");}
                        if (toggle === 1) {record("left");} 
              }        
        });

        $(document).keydown(function(e){//space
            if (e.keyCode == 32 ) {
			window.alert("toggle hit!");
                        toggle = 1;
                        //TODO: show about to record
            }
        });

          $("#up").click(function(){
                        if (toggle === 0) {playSound("red");}
                        if (toggle === 1) {record("red");}
          });
       
          $("#down").click(function(){
                        if (toggle === 0) {playSound( "orange" );}
                        if (toggle === 1) {record("orange");}
          });
         
          $("#right").click(function(){
                        if (toggle === 0) {playSound( "blue" );}
                        if (toggle === 1) {record("blue");}
          });
         
          $("#left").click(function(){
                        if (toggle === 0) {playSound("green");}
                        if (toggle === 1) {record("green");}
          });
         
          $("#record").click(function(){
                        toggle = 1;
                        //show about to record
          });

  
  
  function playSound(current){
        var dir = translate(current);
        var playUp = new Audio('files/playUp.wav');
	var playDown = new Audio('files/playDown.wav');
	var playLeft = new Audio('files/playLeft.wav');
	var playRight = new Audio('files/playRight.wav');
	
	/*       
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("note").innerHTML = xmlhttp.responseText;
            };
            xmlhttp.open("GET", "play.php?list=" + dir, true);
            xmlhttp.send();
	*/

	switch(current) {
		case "up":
			playUp.play();
			break;
		case "down":
			playDown.play();
			break;
		case "left":
			playLeft.play();
			break;
		case "right":
			playRight.play();
			break;
	}
  }

  function record(current){
	document.getElementById('note').innerHTML = 'Recording!';
        
	//var dir = translate(current);
	var dir = current;
	
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("note").innerHTML = xmlhttp.responseText;
        };
    }
    xmlhttp.open("GET", "record.php?list=" + dir, true);
    xmlhttp.send();

	toggle = 0;
	
  }
 
    function translate(current){
               if (current === 'red') { var up = "up"; return up;}
               if (current === 'orange') {var down = "down" ; return down}
               if (current === 'blue') {var right = "right" ; return right}
               if (current === 'green') {var left = "left" ; return left}
   }
     
 
 
 
 
});
