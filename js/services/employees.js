App.factory('employees', ['$http', function($http) { 
   return $http.get('http://hr.monjasa.com/webdeveloper/employees.json') 
            .success(function(data) { 
              return data;
            }) 
            .error(function(err) { 
              return err;
              console.log('Kig her ' + err);
            });
}]);