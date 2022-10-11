const os = require('os')  //using build in os module to interact with operation system

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
//${this is called interpolation}
console.log(`The System Uptime is ${os.uptime()} seconds`)//how long computer has been running

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),//memory of computer
  freeMem: os.freemem(),
}
console.log(currentOS)
