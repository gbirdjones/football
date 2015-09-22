'use strict';

function quarter (n, t) {
	this.name = n;
	this.team = t;
	this.attempts = 0;
	this.completions = 0;
	var yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longCompletion = 0;

	this.getYards = function() {
		return yards;
	}

	this.setYards = function(y) {
		yards = y;
	}

	this.completionPercentage = function() {
		return Math.round(this.completions / this.attempts * 100)+'%';
	}
	this.yardsPerAttempt = function() {
		return this.yards / this.attempts;
	}
	this.addAttempt = function(type, yards) {
		type = type.toLowerCase();
		if(type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
		}
		else if(type === 'interception') {
			this.interceptions++;
			this.attempts++;
		}
		else if(type === 'completion') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
		}
		else if(type === 'sack') {
			this.sacks++;
			this.yards += yards;
		}
	}
}
var FlankRocket = new quarter('Flank Rocket', 'The Bengals');
var JoshtinBrownitch = new quarter('Joshtin Brownitch', 'The Bengals');

function rush (n, t) {
	this.name = n;
	this.team = t;
	this.attempts = 0;
	var yards = 0;
	this.over20 = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	var longestRush = 0;

	this.getYards = function() {
		return yards;
	}

	this.setYards = function(y) {
		yards = y;
	}
	this.yardsPerAttempt = function() {
		return this.yards / this.attempts;
	}
	this.addAttempt = function(type, yards) {
		type = type.toLowerCase();
		if(yards >= 20) {
			this.over20++;
		}
		if(type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.yards += yards;
		}
		else if(type === 'firstDowns') {
			this.yards += yards;
		}
		else if(type === 'fumbles') {
			this.fumbles++;
		}
	}
}
var BeauDitch = new rush('Beau Ditch', 'The Bengals');
var PhilHammerworthy = new rush('Phil Hammerworthy', 'The Bengals');

function kick (n, t) {
	this.name = n;
	this.team = t;
	this.attempts = 0;
	this.made = 0;
	var longestFieldGoal = 0;

	this.fieldGoalPercentage = function () {
		return Math.round(this.made / this.attempts * 100)+'%';
	}

	this.addAttempt = function(type, yards) {
		type = type.toLowerCase();

		if(type === 'made') {
			this.made++;
		}
		else if(type === 'missed') {
			console.log('he missed big deal');
		}
	}
}
var HeironymousBob = new kick('Heironymous Bob', 'The Bengals');
var GargleBricksmith = new kick('Gargle Bricksmith', 'The Bengals');