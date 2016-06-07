var login = require("facebook-chat-api");
 
var answeredThreads = {};
 
// Create simple echo bot
login({email: "manhhoamotor@gmail.com", password: "hopga1234!@#$"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        console.log(message.threadID);
            answeredThreads[message.threadID] = true;
         //   api.sendMessage("Hiện tại mình đang đi làm. cần liên lạc gấp với mình thì alo vào 01662114909 nhé", message.threadID);
			api.sendMessage(message.body, message.threadID);
    });
});