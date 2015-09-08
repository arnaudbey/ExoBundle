(function () {
    'use strict';

    angular.module('Step').directive('stepShow', [
        function () {
            return {
                restrict: 'E',
                replace: false,
                controller: 'StepShowCtrl',
                controllerAs: 'stepShowCtrl',
                templateUrl: AngularApp.webDir + 'bundles/ujmexo/js/sequence/Step/Partials/step.show.html',
                scope: {
                    sequence: '='
                },
                link: function (scope, element, attr, stepShowCtrl) {
                    console.log('step show directive link method called');
                    console.log(scope.sequence);
                    stepShowCtrl.setSteps(scope.sequence.steps);                    
                    stepShowCtrl.setCurrentStep(scope.sequence.steps[0]);
                }
            };
        }
    ]);
})();

