const blogs = []

function addBlog(e) {
    e.preventDefault()

    const title = document.getElementById("input-blog-title").value
    const content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files
    image = URL.createObjectURL(image[0])

    const createdAt = new Date()

    // localStorage.setItem("blog", JSON.stringify({
    //     title,
    //     content,
    //     imageLink
    // }))

    const blog = {
        title,
        content,
        image,
        createdAt
    }

    blogs.unshift(blog)
    renderBlog()

    console.log("blogs", blogs)
}

function renderBlog() {
    let html = ''

    for (let index = 0; index < blogs.length; index++) {
        html += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${blogs[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${blogs[index].createdAt} | Ichsan Emrald Alamsyah
                </div>
                <p>
                  ${blogs[index].content}
                </p>
            </div>
        </div>
`
    }

    document.getElementById("contents").innerHTML = html
}

renderBlog()