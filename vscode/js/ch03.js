var oScript = document.createElement("script");
oScript.type = "text/javascript";
oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(oScript);

var clickLedOn = document.querySelector("#ledOn");
var clickLedOff = document.querySelector("#ledOff");

clickLedOn.addEventListener("click", function() {
        var result = document.querySelector(".result");
        var data = "LED ON"
        alert(data);
        $.ajax({
                type: 'GET',
                url:'/led/on',
                success: function(res) {
                        alert(res);
                }
        });
});

clickLedOff.addEventListener("click", function() {
        var result = document.querySelector(".result")
        var data = "LED OFF"
        alert(data)
        $.ajax({
                type: 'GET',
                url: '/led/off',
                success: function(res) {
                        alert(res);
                }
        });
});