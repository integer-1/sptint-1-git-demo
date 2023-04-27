let userlist = [
  { name: 'Mike', age: 30 },
  { name: 'Jane', age: 27 },
  { name: 'Tom', age: 10 },
]

let newUserlist = userlist.map(function (user, index) {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  })
})

console.log(newUserlist)
console.log(userlist)

//code changed
