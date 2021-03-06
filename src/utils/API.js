// This code is meant to serve as a mock fetch from an API.
export const getEmployees = new Promise(function(resolve) {
  setTimeout(() => {
    resolve(
      {
        id: 1,
        name: 'Andrew1',
        salary: 50001,
        age: 21
      },
      {
        id: 2,
        name: 'Andrew2',
        salary: 50002,
        age: 22
      },
      {
        id: 3,
        name: 'Andrew3',
        salary: 50003,
        age: 23
      },
      {
        id: 4,
        name: 'Andrew4',
        salary: 50004,
        age: 24
      },
      {
        id: 5,
        name: 'Andrew5',
        salary: 50005,
        age: 25
      },
      {
        id: 6,
        name: 'Andrew6',
        salary: 50006,
        age: 26
      },
      {
        id: 7,
        name: 'Andrew7',
        salary: 50007,
        age: 27
      }
    );
  }, 1000);
});
