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