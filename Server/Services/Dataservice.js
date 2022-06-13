const db=require('./db')

// register 

const register = (name, email,password,place) => {

    return db.Data.findOne({ email })
      .then(data => {
        if (data) {
          return {
            statuscode: 422,
            status: false,
            message: "user already exist.... please Login"
          }
        }
        else {
          const newUser = new db.Data({
            name, email,password,place
  
          })
          newUser.save()
          return {
            statuscode: 200,
            status: true,
            message: "Registered successfully" 
          }
        }
      })
  }
  
  
  // login
  
  const login = (email, password) => {
    // asynchronous
    return db.Data.findOne({ email, password })
      .then(data => {
        if (data) {
          return {
            statuscode: 200,
            status: true,
            message: "successfully Login",
          }
  
        }
        else {
          return {
            statuscode: 422,
            status: false,
            message: "incorrect password"
  
          }
        }
  
  
      })
  }
  
module.exports={
    register,login
}