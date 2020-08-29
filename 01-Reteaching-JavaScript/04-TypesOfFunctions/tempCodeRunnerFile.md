function closureScoped(job) {
  if (job=="student") {
    return (name) => console.log(`my name is ${name} my job is study this code`) 
  }
  else if (job=="teacher") {
    return (name) => console.log(`my name is ${name} my job is ${job}`) 
  }
  else {
    return () => console.log(`I'm not paying attention because my job is ${job}`) 
  }
}
closureScoped("designer")("hans");