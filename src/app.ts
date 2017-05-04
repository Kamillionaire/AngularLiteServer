namespace angularLiteServer {
    let module: ng.IModule = angular.module('app', [
      'ui.bootstrap'
    ]);

module.controller('appController', angularLiteServer.appController)
    module.config(angularLiteServer.Configuration);
}
