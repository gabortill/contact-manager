angular.module('templates-main', ['404.tpl.html', 'directive.businessCard.tpl.html', 'edit.tpl.html', 'list.tpl.html']);

angular.module("404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("404.tpl.html",
    "<h1>404</h1>");
}]);

angular.module("directive.businessCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directive.businessCard.tpl.html",
    "<section class=\"card\"><div class=\"card__flipper\"><div class=\"card__flipper__front card__flipper__item\"><img data-ng-src=\"{{ member.avatar }}\"><div>{{ member.name }}</div><div>{{ member.position }}</div><a data-ng-href=\"/edit/{{ member.originalIndex }}\">edit</a></div><div class=\"card__flipper__back card__flipper__item\"><div>{{ member.email }}</div><div>{{ member.phone }}</div><div>{{ member.birth }}</div><div>{{ member.country }}</div><div>{{ member.city }}</div><div>{{ member.street }}</div></div></div></section>");
}]);

angular.module("edit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("edit.tpl.html",
    "<form name=\"editForm\" data-ng-submit=\"editForm.$valid && edit.save()\" novalidate><label for=\"name\"><span class=\"placeholder\">name</span> <input id=\"name\" name=\"name\" ng-model=\"edit.contact.name\" required> <span ng-show=\"editForm.$submitted && editForm.name.$error.required\">name is required</span></label><br><label for=\"position\"><span class=\"placeholder\">position</span> <input id=\"position\" name=\"position\" ng-model=\"edit.contact.position\" required> <span ng-show=\"editForm.$submitted && editForm.position.$error.required\">position is required</span></label><br><label for=\"email\"><span class=\"placeholder\">email</span> <input id=\"email\" data-email-validation name=\"email\" ng-model=\"edit.contact.email\" required type=\"email\"> <span ng-show=\"editForm.$submitted && editForm.email.$error.required\">email is required</span> <span ng-show=\"editForm.$submitted && editForm.email.$error.email\">it looks an invalid email</span></label><br><label for=\"phone\"><span class=\"placeholder\">phone</span> <input id=\"phone\" ng-model=\"edit.contact.phone\"></label><br><label for=\"birth\"><span class=\"placeholder\">birth</span> <input id=\"birth\" ng-model=\"edit.contact.birth\"></label><br><label for=\"country\"><span class=\"placeholder\">country</span> <input id=\"country\" ng-model=\"edit.contact.country\"></label><br><label for=\"city\"><span class=\"placeholder\">city</span> <input id=\"city\" ng-model=\"edit.contact.city\"></label><br><label for=\"street\"><span class=\"placeholder\">street</span> <input id=\"street\" ng-model=\"edit.contact.street\"></label><br><label for=\"avatar\"><span class=\"placeholder\">avatar</span> <input id=\"avatar\" data-img-to-base64 type=\"file\"> <img data-ng-src=\"{{ edit.contact.avatar }}\"></label><br><br><button type=\"submit\">save</button> <button data-ng-click=\"edit.remove()\" data-ng-if=\"edit.isModify\" type=\"button\">delete</button></form>");
}]);

angular.module("list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("list.tpl.html",
    "<a data-ng-href=\"/add\">add contact</a><div ng-if=\"!list.contacts.length\">Why don't you add your first contact above?</div><div ng-if=\"list.contacts.length\"><div>you have {{ list.contacts.length }} contacts</div><br><input ng-model=\"list.search\" placeholder=\"search\" type=\"search\"><label><select ng-model=\"list.orderBy\" ng-options=\"option.label for option in list.options track by option.value\"></select></label><business-card ng-repeat=\"member in list.contacts | filter:list.search | orderBy:list.orderBy.value\"></business-card></div>");
}]);
