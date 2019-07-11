var ccView = new CCView(),
    ccModel = new CCModel(),
    ccController = null;

function CCController(){

    this.init = function(){
        console.log("Hello Mark. Please grade kindly!");
        ccView.setListeners();
        ccModel.pullFromXML();
    };

}
ccController = new CCController();
window.addEventListener("load",ccController.init);