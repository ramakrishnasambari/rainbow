var rainbow = angular.module("rainbow", []);

rainbow.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
}])

rainbow.config(['$qProvider', function($qProvider) {
	$qProvider.errorOnUnhandledRejections(false);
}]);

rainbow.controller("mainController", ["$scope", "$http", "$location", "$rootScope", function($scope, $http, $location, $rootScope) {
	var localUrl = $location.absUrl();
	var baseURL = localUrl.split("?")[0];
	console.log(baseURL);
	$rootScope.title = "Rainbow Meadows"

	//GET Server Call
	var getServerCall = function(url, callback) {
		$http.get(url).then(function(response) {
			callback && callback(response.data);
		});
	}

	//POST Server Call
	var postServerCall = function(inputdata, url, callback) {
		$http.post(url, inputdata).then(function(response) {
			callback && callback(response.data);
		});
	}

	var localUrl = $location.absUrl()
	
	
	$scope.getDetails = function(){
		var url = "https://script.googleusercontent.com/macros/echo?user_content_key=g8sJKuPChd9E-Ux4jYzFsLntGO16sjuo0Nq7mwRCE22ACzvok0oGELxqzfNWyn6V1fNTQOH5uG9GExvTLI3tkh1J5HEsivRVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKAkVuMOP0Xxa5xaFW2iGWt95agbNNTzeeMuTbV9hmvzkRSWx3goBCdMpyTHzJheDcDHtV_VRSB-3I-0DkiSSA2cf63AjJOdNw&lib=MWKtqJa48KJb5P0VUPJWNISjMmuwgoQ0j";
		getServerCall(url, function(response){
			console.log(response);
		})
	}
	
	$scope.getDetails();

}]);