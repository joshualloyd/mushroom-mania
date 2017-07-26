'use strict';

const mushroomApp = angular.module('app', []);

mushroomApp.controller('mushroomCtrl', function($scope, $http, $q){

	let getMushrooms = () => {
		return $q((resolve, reject)=>{
			$http
				.get('mushrooms.json')
				.then((mushroomsData)=>{
					resolve(mushroomsData);
				})
				.catch((err)=>{
					console.log('that mushrooms xhr went badly', err);
				});
		});
	};

	getMushrooms()
	.then((mushroomsData)=>{
		// console.log('mushroomsData', mushroomsData.data.mushrooms);
		let mushroomsArr = Object.keys(mushroomsData.data.mushrooms).map((mushroom)=>{
			let mushroomObj = {};
			mushroomObj.name = mushroomsData.data.mushrooms[mushroom].name;
			mushroomObj.edible = mushroomsData.data.mushrooms[mushroom].edible;
			mushroomObj.description = mushroomsData.data.mushrooms[mushroom].description;
			return mushroomObj;
		});
		// console.log('mushroomsArr', mushroomsArr);
		// $scope.mushrooms = mushroomsData.data.mushrooms;
		$scope.mushrooms = mushroomsArr;
	});

});