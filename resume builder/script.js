document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const projects = document.getElementById('projects').value;
    const achievements = document.getElementById('achievements').value;
    const certifications = document.getElementById('certifications').value;
    const image = document.getElementById('image').files[0];
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        const resumeData = {
            name,
            email,
            phone,
            address,
            experience,
            education,
            projects,
            achievements,
            certifications,
            imageUrl
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        window.location.href = 'resume.html';
    };
    
    if (image) {
        reader.readAsDataURL(image);
    } else {
        const resumeData = {
            name,
            email,
            phone,
            address,
            experience,
            education,
            projects,
            achievements,
            certifications,
            imageUrl: ''
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        window.location.href = 'resume.html';
    }
});
