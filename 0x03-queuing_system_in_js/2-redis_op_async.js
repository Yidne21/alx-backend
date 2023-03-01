import redis from "redis";
import { promisify } from "util";
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

// Display the value for a given school key using async/await
async function displaySchoolValue(schoolName) {
  const getAsync = promisify(client.get).bind(client);
  try {
    const reply = await getAsync(schoolName);
    console.log(reply);
  } catch (error) {
    console.log(error);
  }
}

// Call the functions to set and display school values
displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
