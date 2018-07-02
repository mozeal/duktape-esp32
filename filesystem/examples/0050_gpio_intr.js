var GPIO = require("gpio.js");

var led = new GPIO(2);
led.setDirection(GPIO.OUTPUT);

var buttonA = new GPIO(32);
buttonA.setDirection(GPIO.INPUT);
buttonA.setPullMode(GPIO.PULLUP_ONLY);

var level = GPIO.HIGH;

buttonA.setInterruptHandler(GPIO.INTR_NEGEDGE, function(pin) {
	log("The pin went high!: " + pin);
	level = !level;
});