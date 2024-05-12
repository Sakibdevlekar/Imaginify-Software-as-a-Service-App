"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
/**
 * The function creates a new user by connecting to a database and handling any errors that occur.
 * @param {CreateUserParams} user - The `user` parameter in the `createUser` function is of type
 * `CreateUserParams`. It likely contains information needed to create a new user, such as username,
 * email, password, etc.
 * @returns The `createUser` function is returning the newly created user object in JSON format.
 */
export async function createUser(user: CreateUserParams) {
  try {
    console.log(`created user function`)

    await connectToDatabase();
    
    console.log(`created user function got the db instance`)

    const newUser = await User.create(user);
    console.log(`created user: ${newUser}`)
      return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
/**
 * The function `getUserById` retrieves a user from the database by their clerkId and returns the user
 * object as a JSON string.
 * @param {string} userId - The `userId` parameter is a string that represents the unique identifier of
 * the user you want to retrieve from the database.
 * @returns The `getUserById` function is returning the user object with the clerkId matching the
 * provided userId after converting it to a JSON string. If the user is not found, an error "User not
 * found" is thrown.
 */
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    console.log(`get user by Id: ${user}`)

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
/**
 * The function `updateUser` updates a user in a database based on the clerkId provided.
 * @param {string} clerkId - The `clerkId` parameter in the `updateUser` function is a string that
 * represents the unique identifier of the user you want to update in the database.
 * @param {UpdateUserParams} user - The `user` parameter in the `updateUser` function is of type
 * `UpdateUserParams`. This parameter likely contains the data that needs to be updated for a specific
 * user identified by the `clerkId`. The `UpdateUserParams` type could include properties such as
 * `name`, `email
 * @returns The function `updateUser` returns the updated user object as a JSON string if the update is
 * successful. If the update fails, an error message "User update failed" is thrown.
 */
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
/**
 * The function `deleteUser` deletes a user from the database based on the clerkId provided.
 * @param {string} clerkId - The `clerkId` parameter in the `deleteUser` function is a string that
 * represents the unique identifier of the user to be deleted. This identifier is used to find and
 * delete the user from the database.
 * @returns The `deleteUser` function is returning the deleted user object if the deletion was
 * successful. If the deletion was not successful or the user was not found, it will return `null`.
 */
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
/**
 * The function `updateCredits` updates a user's credit balance by a specified amount and returns the
 * updated user object.
 * @param {string} userId - The `userId` parameter in the `updateCredits` function is a string that
 * represents the unique identifier of the user whose credits are being updated.
 * @param {number} creditFee - The `creditFee` parameter in the `updateCredits` function represents the
 * amount by which the credit balance of a user should be updated. It is a number that indicates the
 * change in the user's credit balance.
 * @returns The `updateCredits` function returns the updated user credits after incrementing the credit
 * balance by the specified `creditFee`. If the update is successful, it returns the updated user
 * credits in JSON format. If there is an error during the update process, an error is thrown and
 * handled by the `handleError` function.
 */
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}
