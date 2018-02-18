var checker = function(window){
    console.log(window.isAJAXDone);
    var counter = 1;
//	Set the max checking iterations to be doe by the setInterval.	
	var maxChecks = 10;
    var checker = setInterval(
        function checkerAJAX() {
            counter++;
			if (counter > maxChecks) {
				console.log("AJAX Not responding or very slow! Please check the server. Stopping AJAX monitor.")
				clearInterval(checker);
			}
            if (window.isAJAXDone === 0) {
                console.log("AJAX Checked and found to be completed!!")
                clearInterval(checker);
            } else {
                console.log("AJAX Still on!!!")
            }
        },2000
    )
}
checker(this);