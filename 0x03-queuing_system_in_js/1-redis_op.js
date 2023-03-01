import redis from "redis";

// Create a Redis client
const client = redis.createClient();

// Log a message when the client is connected to the Redis server
client.on("connect", () => {
  console.log("Redis client connected to the server");
});

// Log an error message when the client is not able to connect to the Redis server
client.on("error", (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

// Set a new school value in Redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (err, reply) => {
    if (err) {
      console.log(`Error setting ${schoolName}: ${err}`);
    } else {
      console.log(`${value}`);
      redis.print(`Reply: ${reply}`);
    }
  });
}

// Display the value for a given school key
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.log(`Error getting ${schoolName}: ${err}`);
    } else {
      console.log(`Replay: ${reply}`);
    }
  });
}

// Call the functions to set and display school values
displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
