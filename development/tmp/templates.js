angular.module('templates-main', ['home.tpl.html']);

angular.module("home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home.tpl.html",
    "this is the home page");
}]);
