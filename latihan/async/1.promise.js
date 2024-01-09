function JanjiBaru(condition) {
    return new Promise((resolve, reject) => {
       // proses timeout, ngambil data dari internet
       setTimeout(() => {
           if(condition) {
               resolve("Janji terpenuhi, yeayyy")
           } else {
               reject(new Error("Kamu melanggar janji bang!"))
           }  
       }, 3000)
   })
   }
   
   JanjiBaru(false).then((value) => {
       console.log(value)
   }).catch((error) => {
       console.log(error)
   })