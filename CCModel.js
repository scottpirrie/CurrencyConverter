function CCModel(){

    var fee,
        reset;

    if(localStorage.getItem("Home Currency Symbol")!=null){
        document.getElementById("home").value = localStorage.getItem("Home Currency Symbol");
    }
    if(localStorage.getItem("Visiting Currency Symbol")!=null){
        document.getElementById("visit").value = localStorage.getItem("Visiting Currency Symbol");
    }

    if(localStorage.getItem("Bank Fee")!=null){
        if (localStorage.getItem("Bank Fee") == "1") {
            document.getElementById("fee").value="0%";
        } else if (localStorage.getItem("Bank Fee") == "0.98") {
            document.getElementById("fee").value="2%";
        } else if (localStorage.getItem("Bank Fee") == "0.96") {
            document.getElementById("fee").value="4%";
        } else {
            document.getElementById("fee").value="6%";
        }
    }

    this.press1 = function(){
        if(reset==true) {
            ccView.updateDisplay("1");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"1");
        }
    };

    this.press2 = function(){
        if(reset==true) {
            ccView.updateDisplay("2");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"2");
        }
    };

    this.press3 = function(){
        if(reset==true) {
            ccView.updateDisplay("3");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"3");
        }
    };

    this.press4 = function(){
        if(reset==true) {
            ccView.updateDisplay("4");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"4");
        }
    };

    this.press5 = function(){
        if(reset==true) {
            ccView.updateDisplay("5");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"5");
        }
    };

    this.press6 = function(){
        if(reset==true) {
            ccView.updateDisplay("6");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"6");
        }
    };

    this.press7 = function(){
        if(reset==true) {
            ccView.updateDisplay("7");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"7");
        }
    };

    this.press8 = function(){
        if(reset==true) {
            ccView.updateDisplay("8");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"8");
        }
    };

    this.press9 = function(){
        if(reset==true) {
            ccView.updateDisplay("9");
            reset=false;
        }else if(ccView.getDisplay().length<7) {
            ccView.updateDisplay(ccView.getDisplay()+"9");
        }
    };

    this.pressC = function(){
        ccView.updateDisplay("");
    };

    this.press0 = function(){
        if(ccView.getDisplay().length>0) {
            ccView.updateDisplay(ccView.getDisplay()+"0");
        }
    };

    this.pressEquals = function(){
        if(reset){
            //Do nothing
        }else if(ccView.getDisplay()!="") {
            //homeCur = document.getElementById("home").value;
            //visitCur = document.getElementById("visit").value;
            localStorage.setItem("Home Currency Symbol", ccView.getHomeCur());
            localStorage.setItem("Visiting Currency Symbol", ccView.getVisitCur());

            if (ccView.getFee() == "0%") {
                fee = 1;
            } else if (ccView.getFee() == "2%") {
                fee = 0.98;
            } else if (ccView.getFee() == "4%") {
                fee = 0.96
            } else {
                fee = 0.94;
            }
            localStorage.setItem("Bank Fee", fee);

            if(ccView .getHomeCur()==ccView.getVisitCur()){
                //Do Nothing
            }else if(ccView.getHomeCur()=="EUR"){
                ccView.updateDisplay((ccView.getDisplay() * localStorage.getItem(ccView.getVisitCur() + " Rate")) * fee);
            } else if(ccView.getVisitCur()=="EUR"){
                ccView.updateDisplay((ccView.getDisplay() / localStorage.getItem(ccView.getHomeCur() + " Rate")) * fee);
            } else {
                ccView.updateDisplay(((localStorage.getItem(ccView.getVisitCur() + " Rate")/localStorage.getItem(ccView.getHomeCur() + " Rate")) * ccView.getDisplay()) * fee);
            }

            ccView.updateDisplay(Math.round(ccView.getDisplay()*100)/100);

            if(ccView.getVisitCur()=="JPY"){
                ccView.updateDisplay(Math.floor(ccView.getDisplay()));
            }

            ccView.updateDisplay(ccView.getDisplay() + ccView.getVisitCur());

            reset = true;
        }
    };

    this.pullFromXML = function(){
        // Ajax call
        var array = {};
        // Initialize the Ajax request. From http://en.wikipedia.org/wiki/Ajax_%28programming%29
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://devweb2017.cis.strath.ac.uk/~aes02112/ecbxml.php');
        // Track the state changes of the request.
        xhr.onreadystatechange = function () {
            var DONE = 4, OK = 200; // readyState 4 = the request is done; status 200 = successful return
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    //alert(xhr.responseText); // 'This is the returned text.'
                    var x = xhr.responseXML.getElementsByTagName('Cube');
                    for (var i = 0; i < x.length; i++) {
                        //add to 2D array as key, add as value, add to LocalStorage
                        if (x[i].getAttribute('currency') !== null) {
                            array[x[i].getAttribute('currency')] = x[i].getAttribute('rate');
                        }
                    }

                    for (var name in array) {
                        localStorage.setItem(name + " Rate", array[name]);
                    }
                }
                else {
                    alert('Error: ' + xhr.status); // An error occurred during the request.
                }
            }
        };
        xhr.send(null); // Send the request to send-ajax-data.php
        //End Ajax call
    }
}