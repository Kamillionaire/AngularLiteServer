namespace angularLiteServer {
    let module: ng.IModule = angular.module('app', []);

module.controller('appController', angularLiteServer.appController)
    module.config(angularLiteServer.Configuration);
}
