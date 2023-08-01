angular.module("app").factory("ConfigService", [
  function () {
    var service = {};

    service.apiBase = "https://quiz-api-tlsb.us-east-1.elasticbeanstalk.com/";

    return service;
  },
]);
