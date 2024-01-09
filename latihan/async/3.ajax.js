const xhr = new XMLHttpRequest()

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
// parameter 1 : method -> GET, POST, PUT, PATCH, DELETE
// parameter 2 : urlnya
// parameter 3 : is it asynchronous -> true or false

xhr.onload = () => {
    // console log hasilnya
    console.log(xhr.responseText)

    // ngecek apabila terjadi error
}

xhr.send()