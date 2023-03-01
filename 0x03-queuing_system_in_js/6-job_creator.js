const kue = require("kue");
const queue = kue.createQueue();

// Create job data object
const jobData = {
  phoneNumber: "+1234567890",
  message: "Hello, World!",
};

// Create a job and add it to the queue
const job = queue.create("push_notification_code", jobData).save((err) => {
  if (err) {
    console.error(`Failed to create job: ${err}`);
  } else {
    console.log(`Notification job created: ${job.id}`);
  }
});

// Log job status changes
job
  .on("complete", () => {
    console.log("Notification job completed");
  })
  .on("failed", () => {
    console.log("Notification job failed");
  });
