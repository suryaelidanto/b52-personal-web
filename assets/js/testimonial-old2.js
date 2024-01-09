const testimonials = [
    {
        author: "Surya Elidanto",
        content: "Siplah oke",
        image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 3
    },
    {
        author: "Renaldi",
        content: "Apasih bang",
        image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 4,
    },
    {
        author: "Fandi",
        content: "Mantap bro",
        image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 3,
    },
    {
        author: "Orang baru",
        content: "Mantap bro",
        image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 1
    },
    {
        author: "Orang baru",
        content: "Mantap bro",
        image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
        rating: 2
    }
]

function allTestimonial() {
    const testimonialHTML = testimonials.map((value) => {
        return `<div class="testimonial">
                <img src="${value.image}" class="profile-testimonial" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`
    })
    
    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ")
}

function filterTestimonial(rating) {
    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)

    const filteredTestimonialHTML = filteredTestimonial.map((value) => {
        return `<div class="testimonial">
                <img src="${value.image}" class="profile-testimonial" />
                <p class="quote">"${value.content}"</p>
                <p class="author">- ${value.author}</p>
            </div>`
    })

    document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ")
}

allTestimonial()
