

module.exports = checkUserRole=(res,req,next)=>{
    console.log('auth middleware check')
    next()
} 