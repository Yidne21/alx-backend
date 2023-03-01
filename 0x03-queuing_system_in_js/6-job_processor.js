// 1. Create a queue with Kue
const kue = require("kue");
const queue = kue.createQueue();

// 2. Create a function named sendNotification
function sendNotification(phoneNumber, message) {
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );
}

// 3. Write the queue process that will listen to new jobs on push_notification_code
queue.process("push_notification_code", (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message);
  done();
});
