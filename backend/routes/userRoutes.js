import express from 'express'
const router = express.Router()
import {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
} from '../controllers/userController.js'

router.route('/').post(registerUser).get(getUsers)
router.post('/logout', logoutUser)
router.post('/login', authUser)
router.route('/profile').put(updateUserProfile).get(getUserProfile)
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser)

export default router
