const user = {
  firstName: 'Anfim',
  surName: 'Snegirev',
  city: 'Yerevan',
  age: 22,
  skills: {
    dev: true,
    devops: true
  }
}

const getFullName = (user: {firstName: string, surName: string}): string => {
  return `${user.firstName} ${user.surName}`
}

console.log(getFullName(user))

