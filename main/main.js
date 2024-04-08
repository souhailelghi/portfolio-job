//function to download cv

document.getElementById('downloadBtn').addEventListener('click', function() {

    const cvFileUrl = 'resume/cv.pdf';
    

    const anchorElement = document.createElement('a');
    anchorElement.href = cvFileUrl;
    
    anchorElement.download = 'Souhail_CV.pdf';
    anchorElement.click();
});
