const { default: axios } = require("axios");

const getData = async () => {
  const response = await axios.get("https://www.nemzetisport.hu");
  return response;
};

console.log(getData());


/*
console.log("hello world");

axios.get('https://www.nemzetisport.hu')
  .then(function (response) {

    console.log(response.headers);
  })
  .catch(function (error) {
    // handle error
    console.log("error");
  })
  .then(function () {
    // always executed
  });

  const useResponse = (status) => {
      console.log(status);
  }
*/

const run = async () => {
  const response = await axios.get("https://www.nemzetisport.hu");
  const resStatus = response.status;
  console.log(resStatus);
  return 5;
};
console.log("1");

const promiseOfResult = run();
promiseOfResult.then((result) => {
  console.log(result);
});
console.log("2");
