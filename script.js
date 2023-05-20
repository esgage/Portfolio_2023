const projectImages = document.querySelectorAll('.project-img-container');

const applyBackground = (project) => {
    const projectImage = project.querySelector('img');
    const projectBackground = project.querySelector('canvas');
    projectBackground.setAttribute('width', projectImage.width);
    projectBackground.setAttribute('height', projectImage.height);
    const ctx = projectBackground.getContext('2d');
    ctx.drawImage(projectImage, 0, 0);
}

projectImages.forEach((project) => {
    const projectImage = project.querySelector('img');
    if (projectImage.complete){
        applyBackground(project);
    } else {
        projectImage.addEventListener('load', () => {
            applyBackground(project);
        });
    }
});

const headerContainer = document.querySelector('.header');
const headerOffset = headerContainer.offsetTop;
const headerHeight = headerContainer.offsetHeight;

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop >= headerOffset + headerHeight){
        headerContainer.classList.add('pin');
    } else {
        headerContainer.classList.remove('pin');
    }
});

const projectContainers = document.querySelectorAll('.project-container');

const observeProject = new IntersectionObserver((project) => {
    project.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('highlight');
        } else {
            entry.target.classList.remove('highlight');
        }
    });
}, {threshold: .75});

projectContainers.forEach((project) => {
    observeProject.observe(project);
});