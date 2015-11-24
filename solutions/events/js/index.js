var car = {
	speed: 0,
	drive: function(newSpeed) {

		if (newSpeed > 80) {
			this.trigger("toofast", {
				speed: newSpeed
			});
		}

		if (newSpeed < 50) {
			this.trigger("tooslow", {
				speed: newSpeed
			});
		}

		speed = newSpeed;
	}
}

_.extend(car, Backbone.Events);

car.on("toofast", function(e) {
	console.log("toofast: " + e.speed);
});

car.on("tooslow", function(e) {
	console.log("tooslow: " + e.speed);
});

car.drive(65);
car.drive(85);
car.drive(45);
