// deno-lint-ignore-file
import type { User, UserForCreation, UserForUpdate } from "../types/user.ts";
import { v1 } from "../deps.ts";

let users: User[] = [];

export const allUsersDb = async () => {
  return users;
};
////////////////////////////////////////////////Ok
export const findUserById = (uuidE: string) => {
  const comparate = users.find((el) => el.uuid == uuidE);
  if (comparate == undefined) {
    throw new Error("User not found");
  } else {
    return comparate;
  }
};
///////////////////////////////////listo
export const createUser = (user: UserForCreation): User => {
  const encontrado = users.find(
    (el) => el.name == user.name && el.lastName == user.lastName
  );
  if (encontrado) {
    throw new Error("cant create the user");
  } else {
    const asignateIdU = v1.generate().toString();
    users.push({
      uuid: asignateIdU,
      name: user.name,
      birthDate: user.birthDate,
      lastName: user.lastName,
    });
    return {
      uuid: asignateIdU,
      name: user.name,
      birthDate: user.birthDate,
      lastName: user.lastName,
    };
  }
};

//updateUser
export const updateUser = (
  uuidE: string,
  userForUpdate: UserForUpdate
): User => {
  // hacer la pregunta bien
  const comparate = users.findIndex((el) => el.uuid == uuidE);
  if (comparate < 0) {
    throw new Error("User not found");
  } else {
    const productAct = {
      name: userForUpdate.name,
      birthDate: userForUpdate.birthDate,
      uuid: uuidE,
      lastName: userForUpdate.lastName,
    };
    users[comparate] = productAct;
    return productAct;
  }
};

// deleteUser
export const deleteUserB = (uuidE: string): boolean => {
  const catchToEliminate = users.findIndex((el) => el.uuid == uuidE);
  if (catchToEliminate < 0) {
    throw new Error("User not found");
  } else {
    const elimTrueO = users.splice(catchToEliminate, 1);
    return true;
  }
};
