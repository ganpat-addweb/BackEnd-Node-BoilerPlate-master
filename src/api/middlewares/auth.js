// module.exports = checkUserRole=(res,req,next)=>{
//     console.log('auth middleware check')
//     next()
// }
const checkUserRole = (req, res, next) => {
  console.log('auth middleware check')
  next()
}

export default checkUserRole
