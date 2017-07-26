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
			let mushroomObj = mushroomsData.data.mushrooms[mushroom];
			return mushroomObj;
		});
		$scope.mushrooms = mushroomsArr;
	});

});