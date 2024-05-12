/* This TypeScript code snippet is setting up a connection to a MongoDB database using Mongoose, which
is an Object Data Modeling (ODM) library for MongoDB and Node.js. */
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

/**
 * The function `connectToDatabase` connects to a MongoDB database using a cached connection if
 * available, otherwise creates a new connection.
 * @returns The `connectToDatabase` function returns a connection to the MongoDB database. If a
 * connection is already cached, it returns the cached connection. If not, it establishes a new
 * connection using the provided `MONGODB_URL`, sets up the connection options, and returns the
 * connection once it is established.
 */
export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn
};
