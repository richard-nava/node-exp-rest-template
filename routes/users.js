import express from 'express'

import { createUser, getUsers, getUser, deleteUser, editUser } from '../controllers/users.js'


const router = express.Router();



// all routes here start with /users

router.get('/', getUsers);

// create users
router.post('/', createUser);

// /users/2 => req.params {id: 2}
router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)

export default router