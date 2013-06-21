var html5formsModule = angular.module('html5forms', ['ui.bootstrap']);

html5formsModule.
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/forms', {templateUrl: '../../moduleResources/html5forms/partials/forms.html', controller: FormCtrl}).
            otherwise({redirectTo: '/forms'});
    }]);

html5formsModule.factory('_', function () {
    return window._;
});

html5formsModule.factory('FormsService', function ($http) {
    var all = function () {
        return $http.get('forms.form');
    };
    return {
        all: all
    }
});

html5formsModule.factory('FormService', function ($http) {
    var get = function () {
        return $http.get('form.form');
    };
    var save = function (form) {
        return $http.post('form.form', form);
    }
    return {
        get: get,
        save: save
    };
});

html5formsModule.factory('XFormService', function ($http) {
    var all = function () {
        return $http.get('xforms.form');
    }
    return {
        all: all
    }
});


html5formsModule.factory('TagService', function ($http) {
    var all = function () {
        return $http.get('tags.form');
    }
    return {all: all}
});
