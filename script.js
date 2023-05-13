const projectImages = document.querySelectorAll('.project-img-container');

const applyBackground = (project) => {
    const projectImage = project.querySelector('img');
    const projectBackground = project.querySelector('canvas');
    projectBackground.setAttribute('width', projectImage.width);
    projectBackground.setAttribute('height', projectImage.height);
    const ctx = projectBackground.getContext('2d');
    ctx.drawImage(projectImage, 0, 0);
    console.log('function called');
}

projectImages.forEach((project) => {
    const projectImage = project.querySelector('img');
    if (projectImage.complete){
        console.log('if');
        applyBackground(project);
    } else {
        projectImage.addEventListener('load', () => {
            console.log('else');
            applyBackground(project);
        });
    }
});

const headerContainer = document.querySelector('.header');
const headerOffset = headerContainer.offsetTop;
const headerHeight = headerContainer.offsetHeight;
console.log(headerOffset); 
console.log('h = ' + headerContainer.offsetHeight);

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop >= headerOffset + headerHeight){
        headerContainer.classList.add('pin');
    } else {
        headerContainer.classList.remove('pin');
    }
});