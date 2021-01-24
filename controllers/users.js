import { v4 as uuidv4 } from 'uuid';

// default fake db
let users = []

export const createUser = (req, res) => {
    const user = req.body
    //console.log(req.body)
    users.push({
        ...user,
        id : uuidv4()
    });

    res.send(`User ${user.firstName} ${user.lastName} was added to database!`)
}

export const getUsers = (req, res) => {
    console.log(users)

    // sent back to client side
    res.send(users)
}

export const getUser = (req, res) => {
    const { id }  = req.params; // same as ```const id = req.params.id```
    const foundUser = users.find((user) => user.id == id)
    console.log(foundUser)
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`User with id ${id} has been deleted`)
}

export const editUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id == id)
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated`)
}