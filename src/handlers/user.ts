// deno-lint-ignore-file
import { Context, helpers } from "../deps.ts";
import type { User, UserForUpdate } from "../types/user.ts";
import * as db from "../db/user.ts";

export const allUsers = async (ctx: Context) => {
  try {
    const user = await db.allUsersDb();
    ctx.response.body = user;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const findUser = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  try {
    const user: User = await db.findUserById(userId);
    ctx.response.body = user;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const createUser = async (ctx: Context) => {
  try {
    const { name, birthDate, lastName } = await ctx.request.body().value;
    const createdUser: User = db.createUser({
      lastName,
      name,
      birthDate /* convertirlo a fecha*/,
    });
    ctx.response.body = createdUser;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};
export const updateUser = async (ctx: Context) => {
  try {
    const { userId } = helpers.getQuery(ctx, { mergeParams: true });
    const { name, birthDate, lastName } = await ctx.request.body().value;
    const userAamod = { name, birthDate, lastName };
    const modifiedUser: UserForUpdate = db.updateUser(userId, userAamod);
    ctx.response.body = modifiedUser;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};

export const deleteUser = async (ctx: Context) => {
  try {
    const { userId } = helpers.getQuery(ctx, { mergeParams: true });
    const eliminUser = db.deleteUserB(userId);
    if (eliminUser) {
      ctx.response.body = { msge: "usuario E liminado" };
    }
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};
