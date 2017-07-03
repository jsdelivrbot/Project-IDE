/**
 * Created by 703186675 on 3/28/2017.
 */
define(['angular'], function() {
    'use strict';
    
    angular.module('app')
        .factory('FolderDataService', FolderDataService);
    FolderDataService.$inject = ['$http', '$q'];

    function FolderDataService($http, $q) {
        return {
            getRecords: function(folder_name) {
                var deferred = $q.defer();
                $http.get('/folder_data?folder_name=' + folder_name)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            },
            postRecord: function(folder_data) {
                var deferred = $q.defer();
                $http.post('/folder_data', folder_data)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {

                        deferred.reject(error);
                    });
                return deferred.promise;
            },
            addComponent: function(finalStructures,page_name,id) {
                var folder_data = {
                    
                }

                folder_data['finalStructures'] = finalStructures;
                folder_data['name'] = page_name;
                folder_data['id'] = id;
                


                // these are the developed component script html files
                var deferred = $q.defer();
                $http.post('/component_data', folder_data)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {

                        deferred.reject(error);
                    });
                return deferred.promise;
            },
            getComponent: function(file_name) {
                                
                

                // these are the developed component script html files
                var deferred = $q.defer();
                 $http.get('/component_data?file_name=' + file_name)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function(error) {

                        deferred.reject(error);
                    });
                return deferred.promise;
            }
        }
    }
});
