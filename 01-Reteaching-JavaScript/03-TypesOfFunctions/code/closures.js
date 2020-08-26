

function closureScoped(job) {
  if (job=="designer") {
    return (name)=>console.log(`my name is ${name} my job is ${job}`) 
  }
  else if (job=="teacher") {
    return (name)=>console.log(`my name is ${name} my job is ${job}`) 
  }
  else {
    return (name)=>console.log(`my name is ${name} my job is ${job}`) 
  }
}
closureScoped("designer")("hans");

function curryingClosure(job){
  return function(name) {
    if (job=="Teacher")
        console.log(` ${name} can you explain closures? ${job}`) 
    else if (job=="javaScripter")
        console.log(`${name} can explain closure and currying because he is a ${job}`) 
    else
        console.log(`${name} what is your malfunction?`) 
  }
}

curryingClosure("javaScripter")("hans")