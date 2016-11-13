var s = Math.floor(Math.random() * 1000000000);
var w = 80;
var h = 25;
var c = 1;
var k = "";

function sendTelnetReq() {
    var kInitial = k;
    $http({
        "method": "GET",
        "url": "http://api.blockharassment.tech/ajaxterm/u",
        "timeout": 5000,
        "params": {
            "s": s,
            "w": w,
            "h": h,
            "c": c,
            "k": k
        },
        "transformResponse": function(data) {
            return $.parseXML(data.replace("&nbsp;", " "));
        }
    }).error(sendTelnetReq).success(function(data) {
        if ( kInitial == k ) {
            k = "";
        }
        if ( data.documentElement.tagName.toLowerCase() == "pre" ) {
            document.getElementById("message-container").innerHTML = data.documentElement.textContent;
        }
        setTimeout(sendTelnetReq, 50);
    });
}

function init() {
    var app = angular.module("app", []);
    var controller = app.controller("controller", function($scope, $http) {
        window.$scope = $scope;
        window.$http = $http;
        sendTelnetReq();
    });
}

function send() {
    var id = Math.floor(Math.random() * 1000000000);
    k = "<msg" + id + "><b>" + $scope.name + "</b><p>" + $scope.message + "</p></msg" + id + ">\n";
    document.getElementById("dynamic-css").textContent +=
        "msg" + id + ":first-of-type * {" +
            "display: none;" +
        "}";
    $scope.$apply(function() {
        $scope.message = "";
    });
    return false;
}
