window.onload = function() {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    
    const resumeContainer = document.getElementById('resume');
    
    let resumeContent = `
      <h2>${resumeData.name}</h2>
      ${resumeData.imageUrl? `<img src="${resumeData.imageUrl}" alt="Photo" class="resume-photo">` : ''}
      <p><strong>Email:</strong> ${resumeData.email}</p>
      <p><strong>Phone:</strong> ${resumeData.phone}</p>
      <p><strong>Address:</strong> ${resumeData.address}</p>
      <h3>Experience</h3>
      <p>${resumeData.experience}</p>
      <h3>Education</h3>
      <p>${resumeData.education}</p>
      <h3>Projects</h3>
      <p>${resumeData.projects}</p>
      <h3>Achievements</h3>
      <p>${resumeData.achievements}</p>
      <h3>Certifications</h3>
      <p>${resumeData.certifications}</p>
    `;
    
    resumeContainer.innerHTML = resumeContent;
    
    document.getElementById('download-pdf').addEventListener('click', function() {
      html2pdf(resumeContainer, {
        margin: 1,
        filename: 'esume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      });
    });
    
   
  };