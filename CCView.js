function CCView(){
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var five = document.getElementById("5");
    var six = document.getElementById("6");
    var seven = document.getElementById("7");
    var eight = document.getElementById("8");
    var nine = document.getElementById("9");
    var c = document.getElementById("c");
    var zero = document.getElementById("0");
    var equals = document.getElementById("=");
    var display = document.getElementById("display");
    var homeCur = document.getElementById("home");
    var visitCur = document.getElementById("visit");
    var fee = document.getElementById("fee");

    this.updateDisplay = function(updatedDisplay){
        display.value = updatedDisplay;
        display.alt = updatedDisplay;
    };

    this.getDisplay = function(){
        return display.value;
    }

    this.getHomeCur = function(){
        return homeCur.value;
    }

    this.getVisitCur = function(){
        return visitCur.value;
    }

    this.getFee = function(){
        return fee.value;
    }

    this.setListeners = function(){
        one.addEventListener("click",function(){ccModel.press1()});
        two.addEventListener("click",function(){ccModel.press2()});
        three.addEventListener("click",function(){ccModel.press3()});
        four.addEventListener("click",function(){ccModel.press4()});
        five.addEventListener("click",function(){ccModel.press5()});
        six.addEventListener("click",function(){ccModel.press6()});
        seven.addEventListener("click",function(){ccModel.press7()});
        eight.addEventListener("click",function(){ccModel.press8()});
        nine.addEventListener("click",function(){ccModel.press9()});
        c.addEventListener("click",function(){ccModel.pressC()});
        zero.addEventListener("click",function(){ccModel.press0()});
        equals.addEventListener("click",function(){ccModel.pressEquals()});
    };

}