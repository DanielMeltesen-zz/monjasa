App.controller('MainController', ['$scope', 'employees', function($scope, employees) {
  employees.success(function(data) {
    $scope.employees = data;
  
	$scope.filteredList = $scope.employees;
	$scope.resetList = $scope.employees;
	// _.sortBy($scope.employees, 'First Name');


		function options() {
			
			// function to show all the companies available
			$scope.companyList = _.uniq( _.pluck($scope.employees, 'Company') );
				//console.log($scope.companyList);
				//console.log($scope.employees);
		}

		options();

		$scope.updateList = function (company) {

			// simple function for updating the list in the assignment project
			if(company) {
				$scope.filteredList = _.where($scope.employees, {'Company' : company});
				//console.log("updateList ran");
			} else {
				$scope.filteredList = $scope.employees;
			}

		}

  });
}]);
