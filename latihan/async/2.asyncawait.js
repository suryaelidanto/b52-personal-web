function JanjiBaru(condition) {
    return new Promise((resolve, reject) => {
        // proses timeout, ngambil data dari internet
        setTimeout(() => {
            if (condition) {
                resolve("Janji terpenuhi, yeayyy")
            } else {
                reject(new Error("Kamu melanggar janji bang!"))
            }
        }, 1000)
    })
}

(async () => {
    const response = await JanjiBaru(false)
    console.log(response)
})()
