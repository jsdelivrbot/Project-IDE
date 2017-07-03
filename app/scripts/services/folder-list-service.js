define(['angular'], function() {
    'use strict';

    angular.module('app')
        .factory('FolderListService', FolderListService);
    FolderListService.$inject = ['$http', '$q'];

    function FolderListService ($http, $q) {
        return {
            getRecords:  function () {
                var deferred = $q.defer();
                $http.get('/folders_list')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
            },
            postRecord:  function (data) {
                var deferred = $q.defer();
                $http.post('/folders_list', data)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
            },
            deleteRecord:  function (folder_name) {
                var deferred = $q.defer();
                $http.delete('/folder_list?folder_name='+folder_name)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (error) {
                        
                        deferred.reject(error);
                    });
                    return deferred.promise;
            }
        }
    }
});