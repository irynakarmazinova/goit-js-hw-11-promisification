console.log('---------------------third task---------------------');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

  // промисификация функции
  return new Promise((resolve, reject) => {
    const canProcess = Math.random() > 0.3;

    setTimeout(() => {
      if (canProcess) {
        resolve({ transaction, delay });
        // resolve({ id: transaction, delay });
        // resolve([ transaction.id, delay ]);
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ({ transaction: { id }, delay }) => {
  console.log(`Transaction ${id} processed in ${delay}ms`);

  // const logSuccess = ( { id , delay }) => {
  //   console.log(`Transaction ${id} processed in ${delay}ms`);

  // const logSuccess = ([id, time ]) => {
  // console.log(`Transaction ${id} processed in ${time}ms`);

  // const logSuccess = (arr) => {
  // console.log(`Transaction ${arr[0]} processed in ${arr[1]}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// Вызовы функции для проверки
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

// функции resolve/reject может принять только один аргумент. Отсюда следует, что необходимо, среди прочего, подкорректировать параметры функции logSuccess таким образом, чтобы она принимала либо объект, либо массив.

// -------------------------------------------------------------------------
//  console.log("%c Один", "color: green; font-size: 20px"); //в консольке стилизация текста
// -------------------------------------------------------------------------
// деструктуризация массива
// const a = [75, 115]
// const [id, time] = arr;
// console.log(id, time);
