  const artLink = document.getElementById('artLink')
        const guitarLink = document.getElementById('guitarLink')
        const sketchLink = document.getElementById('sketchLink')
        const contactLink = document.getElementById('contactLink')


        const welcomeHeading = document.getElementById('welcomeHeading')
        const welcomeHeadingInside = 'Welcome to My Talont'
        const guitarButton = document.getElementById('guitarButton')
        const artButton = document.getElementById('artButton')
        const contactSection = document.getElementById('contact')


        const guitarSection = document.getElementById('guitarSection')
        const sketchSection = document.getElementById('sketchSection')
        const artSection = document.getElementById('artSection')

        const instagram = document.getElementById('instagram');
        const whatsapp = document.getElementById('whatsapp')

        let Random_Variable = 0;


        function Writing_Function() {
            if (welcomeHeading.textContent.length < welcomeHeadingInside.length) {
                // console.log(welcomeHeadingInside.innerText)
                welcomeHeading.textContent += welcomeHeadingInside[Random_Variable]
                Random_Variable++
                // console.log(window.scrollY)
            } else {
            }
        }
        const Writing_Interval = setInterval(Writing_Function, 100)


        let scrollToArt = () => {
            artSection.scrollIntoView(
                { behavior: "smooth" }
            )
        }
        let scrollSketch = ()=>{
            sketchSection.scrollIntoView({behavior:"smooth"})
        }
        let scrollToGuitar = () => {
            guitarSection.scrollIntoView(
                { behavior: "smooth" }
            )
        }
        let scrollContact = ()=>{
            contactSection.scrollIntoView(
                { behavior:"smooth"  }
            )
        }

        guitarButton.addEventListener('click', () => {
            guitarSection.scrollIntoView(
                { behavior: "smooth" }
            )
        })
        artButton.addEventListener('click', () => {
            artSection.scrollIntoView(
                { behavior: "smooth" }
            )
        })
        artLink.addEventListener('click',scrollToArt)
        sketchLink.addEventListener('click',scrollSketch)
        guitarLink.addEventListener('click',scrollToGuitar)
        contactLink.addEventListener('click',scrollContact)


        const cube = document.getElementById('cube');
        var changingRotation = 90
        const rotatingInterval = setInterval(() => {

            cube.style.transform = `rotateY(${changingRotation}deg) rotateX(3deg) rotateZ(3deg)`;
            changingRotation += 90;
        }, 1000)

        instagram.addEventListener('click', () => {
            document.getElementById('instagramID').style.opacity = 1
            navigator.clipboard.writeText('hytey_1');
            let newNotification = document.createElement('div')
            newNotification.textContent = 'Text Coppied Successfully '
            newNotification.id = 'notification'
            newNotification.style.background = "  linear-gradient(45deg, rgb(255, 6, 201),rgb(19, 11, 251))"
            document.body.appendChild(newNotification)

            setTimeout(() => {
    document.body.removeChild(newNotification);
}, 2000);
        })
        whatsapp.addEventListener('click', () => {
            document.getElementById('whatsappNumber').style.opacity = 1
            navigator.clipboard.writeText('Dhruv: 8527072565');

             let newNotification = document.createElement('div')
            newNotification.textContent = 'Text Coppied Successfully '
            newNotification.id = 'notification'
            document.body.appendChild(newNotification)

            setTimeout(() => {
    document.body.removeChild(newNotification);
}, 2000);

        })
        console.log('mobile ke lie optimised nhi h')
        console.log('bhut sari baate fake h isme , that are only for creating the website :) ')
        console.warn('insta: hytey_1, phone No. : 8527072565')
