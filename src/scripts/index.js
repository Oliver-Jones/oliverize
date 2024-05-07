const initApp = () => {
    const toggleMenu = () => {
        const mobMenu = document.getElementById('mobile-menu')
        const hamBtn = document.getElementById('hamburger-button')
        mobMenu.classList.toggle('hidden')
        mobMenu.classList.toggle('flex')
        hamBtn.classList.toggle('toggle-hamburger')
    }

    document.getElementById('hamburger-button').addEventListener('click', toggleMenu)
    document.getElementById('mobile-menu').addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
