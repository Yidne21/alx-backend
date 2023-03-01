const kue = require("kue");
const queue = kue.createQueue();

const jobs = [
  {
    phoneNumber: "4153518780",
    message: "This is the code 1234 to verify your account",
  },
  {
    phoneNumber: "4153518781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4153518743",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4153538781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4153118782",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4153718781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4159518782",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4158718781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4153818782",
    message: "This is the code 4321 to verify your account",
  },
  {
    phoneNumber: "4154318781",
    message: "This is the code 4562 to verify your account",
  },
  {
    phoneNumber: "4151218782",
    message: "This is the code 4321 to verify your account",
  },
];

jobs.forEach((job, index) => {
  const jobName = `push_notification_code_2_${index}`;

  const notificationJob = queue
    .create(jobName, job)
    .on("complete", () =>
      console.log(`Notification job ${notificationJob.id} completed`)
    )
    .on("failed", (err) =>
      console.log(`Notification job ${notificationJob.id} failed: ${err}`)
    )
    .on("progress", (progress, data) =>
      console.log(
        `Notification job ${notificationJob.id} ${progress}% complete`
      )
    );

  notificationJob.save((err) => {
    if (err) {
      console.log(`Error creating job ${jobName}: ${err}`);
    } else {
      console.log(`Notification job created: ${notificationJob.id}`);
    }
  });
});
