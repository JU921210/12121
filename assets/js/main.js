/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')  

const sendEmail = (e) =>{
    e.preventDefault()


    emailjs.sendForm('service_bu59ppi','template_ylq8ji6','#contact-form','aIJNuJRhdHMcumPBi')

    .than(() =>{

        contactMessage.textContent = 'Message sent successfully'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () =>{

        contactMessage.textContent = 'Message not sent (service error)'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('Id'),
             sectionClass = document.querySelector('.nav__list a[href*='  + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)   
    


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top'
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`info`,{origin: 'left', delay:800})
sr.reveal(`skills`,{origin: 'left', delay:1000})
sr.reveal(`about`,{origin: 'right', delay:1200})
sr.reveal(`.projects__card, .services__card, experience__card`, {interval:100})

document.querySelectorAll('.project section').forEach((el) => observer.observe(el));
gsap.registerPlugin(ScrollTrigger);
const projects = document.querySelectorAll('.project section');
createAnimations(); //初始化動畫
ScrollTrigger.addEventListener("refreshInit", () => {
    console.log("ScrollTrigger refreshed");
    createAnimations();
  });