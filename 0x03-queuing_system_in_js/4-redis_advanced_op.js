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

// Create a hash in Redis with the specified key and values
function createHash() {
  const hashKey = "HolbertonSchools";
  client.hset(hashKey, "Portland", 50, redis.print);
  client.hset(hashKey, "Seattle", 80, redis.print);
  client.hset(hashKey, "New York", 20, redis.print);
  client.hset(hashKey, "Bogota", 20, redis.print);
  client.hset(hashKey, "Cali", 40, redis.print);
  client.hset(hashKey, "Paris", 2, redis.print);
}

// Display the hash stored in Redis using hgetall
function displayHash() {
  const hashKey = "HolbertonSchools";
  client.hgetall(hashKey, (err, reply) => {
    if (err) {
      console.log(`Error getting hash ${hashKey}: ${err}`);
    } else {
      console.log(`Hash ${hashKey}: ${JSON.stringify(reply)}`);
    }
  });
}

// Call the functions to create and display the hash in Redis
createHash();
displayHash();
