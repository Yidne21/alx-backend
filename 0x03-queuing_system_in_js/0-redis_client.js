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
