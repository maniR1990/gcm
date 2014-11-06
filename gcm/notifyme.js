var gcm = require('node-gcm');
var message = new gcm.Message();


var sender = new gcm.Sender('AIzaSyBsvCpIvfti4TYAWiPxhEensvV4feiTqsE');
var message = new gcm.Message();
message.addData('message',"\u270C peace,  \HTC and PhoneGap \u2706!");
message.addData('title','Push Notification from node -js' );
message.addData('msgcnt','2'); // Shows up in the notification in the status bar

message.delay_while_idle = 1;
var registrationIds = [];
registrationIds.push('APA91bEGtOKlGvAYJi3jqOoUx1TtfQHunXqmXjvpP4zaM7VCO_iLXu5WHcv2fKg-mXWoOKX6aqwiFdhd3V2Ccx2mZJOYz0EW5QfxFePyxPd_1ZgtJ0dofr_iEYhB02Td_1TMIrGnRiu4euv29y9WiYZ8F0mO8sppHg');
sender.send(message, registrationIds, 4, function (err, result) {
console.log(result);
});