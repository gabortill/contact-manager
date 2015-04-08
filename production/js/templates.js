angular.module('templates-main', ['404.tpl.html', 'directive.businessCard.tpl.html', 'list.tpl.html']);

angular.module("404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("404.tpl.html",
    "<h1>404</h1>");
}]);

angular.module("directive.businessCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directive.businessCard.tpl.html",
    "<section class=\"card\"><div class=\"card__flipper\"><div class=\"card__flipper__front card__flipper__item\"><img ng-src=\"{{ member.avatar }}\"><div>{{ member.name }}</div><div>{{ member.position }}</div><a href=\"#\">edit</a></div><div class=\"card__flipper__back card__flipper__item\"><div>{{ member.email }}</div><div>{{ member.phone }}</div><div>{{ member.birth }}</div><div>{{ member.country }}</div><div>{{ member.city }}</div><div>{{ member.street }}</div></div></div></section>");
}]);

angular.module("list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("list.tpl.html",
    "<div ng-if=\"!list.contacts.length\">you can add contacts above</div><div ng-if=\"list.contacts.length\">you have {{ list.contacts.length }} contacts</div><business-card ng-repeat=\"member in list.contacts | filter:list.search | orderBy:list.orderBy.value\"></business-card>");
}]);
