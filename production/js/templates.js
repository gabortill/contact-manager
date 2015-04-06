angular.module('templates-main', ['404.tpl.html', 'list.tpl.html']);

angular.module("404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("404.tpl.html",
    "<h1>404</h1>");
}]);

angular.module("list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("list.tpl.html",
    "<h1>home page</h1>");
}]);
