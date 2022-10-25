const {add, subtract, multiply, divide} = require('./operations.js')

const operationsData = {
    add: [
      {
        user: 'user1',
        value1: 10,
        value2: 20,
      },
      {
        user: 'user2',
        value1: 30,
        value2: 40,
      },
      {
        user: 'user3',
        value1: 50,
        value2: 60,
      }
    ],
    subtract: [
      {
        user: 'user1',
        value1: 30,
        value2: 20,
      },
      {
        user: 'user2',
        value1: 40,
        value2: 30,
      },
      {
        user: 'user3',
        value1: 50,
        value2: 40,
      }
    ],
    multiply: [
      {
        user: 'user1',
        value1: 10_500,
        value2: 20_340,
      },
      {
        user: 'user2',
        value1: 30_500,
        value2: 40_340,
      },
      {
        user: 'user3',
        value1: 50_500,
        value2: 60_340,
      },
    ],
    divide: [
      {
        user: 'user1',
        value1: '2000',
        value2: '100',
      },
      {
        user: 'user2',
        value1: '3000',
        value2: 5,
      },
      {
        user: 'user3',
        value1: '5000',
        value2: 10,
      },
    ],
  }


const addUsers = operationsData.add
const subtractUsers = operationsData.subtract
const multiplyUsers = operationsData.multiply
const divideUsers = operationsData.divide

const addResult = addUsers.map(item => {
    return {
        user: item.user,
        result: add(item.value1, item.value2)
    }
}) 

const subtracResult = subtractUsers.map(item => {
    return {
        user: item.user,
        result: subtract(item.value1, item.value2)
    }
}) 

const multiplyResult = multiplyUsers.map(item => {
    return {
        user: item.user,
        result: multiply(item.value1, item.value2)
    }
}) 

const divideResult = divideUsers.map(item => {
    return {
        user: item.user,
        result: divide(item.value1, item.value2)
    }
}) 

let result = {
    add: addResult,
    subtract: subtracResult,
    multiply: multiplyResult,
    divide: divideResult
}

console.log(result)

