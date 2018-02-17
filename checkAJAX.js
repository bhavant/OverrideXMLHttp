var checker = function(window){
    console.log(window.isAJAXDone);
    counter = 1;
    var checker = setInterval(
        function checkerAJAX() {
            counter++;
            if (window.isAJAXDone === 0 || counter > 10) {
                console.log("AJAX Checked and found to be completed!!")
                clearInterval(checker);
            } else {
                console.log("AJAX Still on!!!")
            }
        },2000
    )
}
checker(this);