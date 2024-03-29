import User from '../../models/User.js'

const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body)
    const saveUser = await user.save()
    res.status(201).json(saveUser)
  } catch (e) {
    next(e)
  }
}
const getUserList = async (req, res) => {
  try {
    const user = await User.find()
    return res.status(200).json(user)
  } catch (error) {
    console.log('error')
  }
}
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (e) {
    next(e)
  }
}

export { User, getUserList, getUserById, createUser }
