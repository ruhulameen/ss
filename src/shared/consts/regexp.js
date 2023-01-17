// 5 min characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
export const PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;