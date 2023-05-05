const projectImages = document.querySelectorAll('.project-image');
projectImages.forEach((project) => {
    const projectBackground = project.querySelector('canvas');
    const projectImage = project.querySelector('img');
    const ctx = projectBackground.getContext('2d');
    ctx.drawImage(projectImage, 0, 0);
});