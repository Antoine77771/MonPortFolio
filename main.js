const navigation = document.querySelector('nav');
const txtanime = document.querySelector('h1');

new Typewriter(txtanime, {
  deleteSpeed: 20
})
.changeDelay(20)
.typeString('Moi c\'est Antoine')
.pauseFor(300)
.typeString('<strong>, Dévelopeur Front-End</strong> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: blueviolet"> IOS !</span>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: yellow"> javaScript !</span>')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: dodgerBlue"> React !</span>')
.start()

window.addEventListener('scroll',()=> {
  if(window.scrollY > 30) {
    navigation.classList.add('anim-nav');
  } else {
    navigation.classList.remove('anim-nav');
  }
})

