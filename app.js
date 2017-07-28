'use strict';

const mushroomApp = angular.module('app', []);

mushroomApp.factory('MushroomFactory', function($http, $q){
	let getMushrooms = () => {
		return $q((resolve, reject)=>{
			$http
				.get('https://mushrooms-87cf6.firebaseio.com/mushrooms.json')
				.then((mushroomsData)=>{
					// console.log('mushroomsData', mushroomsData);
					resolve(mushroomsData);
				})
				.catch((err)=>{
					console.log('that mushrooms xhr went badly', err);
				});
		});
	};
	return {getMushrooms};
});

mushroomApp.controller('MushroomCtrl', function($scope, MushroomFactory){

	MushroomFactory.getMushrooms()
	.then((mushroomsData)=>{
		console.log('mushroomsData.data', mushroomsData.data);
		let mushroomsArr = Object.keys(mushroomsData.data).map((mushroom)=>{
			return mushroomsData.data[mushroom];
		});
		$scope.mushrooms = mushroomsArr;
	});

});