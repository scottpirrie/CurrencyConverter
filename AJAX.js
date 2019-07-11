
var array = {};
// Initialize the Ajax request. From http://en.wikipedia.org/wiki/Ajax_%28programming%29
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://devweb2017.cis.strath.ac.uk/~aes02112/ecbxml.php');
// Track the state changes of the request.
xhr.onreadystatechange = function () {
    var DONE = 4, OK = 200; // readyState 4 = the request is done; status 200 = successful return
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            alert(xhr.responseText); // 'This is the returned text.'
            var x = xhr.responseXML.getElementsByTagName('Cube');
            for (var i = 0; i < x.length; i++) {
                //add to 2D array as key, add as value, add to LocalStorage
                if (x[i].getAttribute('currency') !== null) {
                    array[x[i].getAttribute('currency')] = x[i].getAttribute('rate');
                }
            }




            for (var name in array) {
                if(name==localStorage.getItem("Home Currency Symbol")) {
                    console.log("name " + name + " has value " + array[name]);
                    localStorage.setItem("Home Currency Rate", array[name]);
                }
                if(name==localStorage.getItem("Visiting Currency Symbol")){
                    console.log("name " + name + " has value " + array[name]);
                    localStorage.setItem("Visiting Currency Rate", array[name]);
                }
            }
        }
        else {
            alert('Error: ' + xhr.status); // An error occurred during the request.
        }
    }
};
xhr.send(null); // Send the request to send-ajax-data.php
