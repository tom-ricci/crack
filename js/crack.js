var content = document.querySelector('#content')
var moth = document.querySelector('.mothmsg')

// window TINY warning
setTimeout(() => {
    if (window.innerWidth < 1026) {
        moth.textContent = "hey, your resolution's a bit low. consider switching to 1026px or wider"
    }
}, 100)