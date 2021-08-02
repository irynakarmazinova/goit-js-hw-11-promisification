console.log("---------------------first task---------------------");

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      // reject("Промис выполнился с ошибкой(отклонен reject");
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

console.log("---------------------second task---------------------");
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  return new Promise((resolve, reject) => {
    resolve(updatedUsers);
    // reject("Промис выполнился с ошибкой(отклонен reject");
  });
};

const loggerSecond = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, "Mango", loggerSecond);
// toggleUserState(users, "Lux", loggerSecond);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(loggerSecond);
toggleUserState(users, "Lux").then(loggerSecond);
