class Testimonial {
    #author = ""
    #image = ""
    #content = ""

    constructor(author, image, content) {
        this.#author = author
        this.#image = image
        this.#content = content
    }

    set author(val) {
        this.#author = val
    }

    set image(val) {
        this.#image = val
    }

    set content(val) {
        this.#content = val
    }

    get author() {
        return this.#author
    }

    get image() {
        return this.#image
    }

    get content() {
        return this.#content
    }

    html() {
        throw new Error('You must choose as author or company')
    }
}

class AuthorTestimonial extends Testimonial {

    html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

class CompanyTestimonial extends Testimonial {

    html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.content}"</p>
            <p class="author">- ${this.author} Company</p>
        </div>`
    }
}

const testimonial1 = new AuthorTestimonial("Surya Elidanto", "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "Mantap sekali jasanya!")
const testimonial2 = new AuthorTestimonial("Renaldi", "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600", "Apasih bang?!")
const testimonial3 = new CompanyTestimonial("Jafar", "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600", "Okelah bang")

const testimonials = [testimonial1, testimonial2, testimonial3] // length => 3
let testimonialsHTML = ""

for (let index = 0; index < testimonials.length; index++) {
    testimonialsHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialsHTML