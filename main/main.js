
//function to show section : 
function showSection(sectionId) {
    // Hide initial text
    document.getElementById("home").style.display = "none";
    
    // Hide all sections
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}


//code for navbar comonent in js

let nav= document.getElementsByTagName('div')[0]


nav.insertAdjacentHTML("beforeend", `<a href="#" onclick="showSection('home')">home</a>` );
nav.insertAdjacentHTML("beforeend", ` <a href="#" onclick="showSection('about')">about</a>` );
nav.insertAdjacentHTML("beforeend", `<a href="#" onclick="showSection('expereince')">expereince</a>` );
nav.insertAdjacentHTML("beforeend", `  <a href="#" onclick="showSection('Projects')">Projects</a>` );
nav.insertAdjacentHTML("beforeend", `   <a href="#" onclick="showSection('skills')">skills</a>` );
nav.insertAdjacentHTML("beforeend", `   <a href="#" onclick="showSection('Education')">Education</a>` );
nav.insertAdjacentHTML("beforeend", `     <a href="#" onclick="showSection('contact')">contact</a>` );
nav.insertAdjacentHTML("beforeend", `     <a href="javascript:void(0);" class="icon" onclick="myFunction()">  <i class="fa fa-bars"></i>   </a>` );



function myFunction() {
    var x = document.getElementById("myres");
    if (x.className === "res") {
      x.className += " responsive";
    } else {
      x.className = "res";
    }
  }



  //function to download cv

document.getElementById('downloadBtn').addEventListener('click', function() {

    const cvFileUrl = 'resume/cv.pdf';
    

    const anchorElement = document.createElement('a');
    anchorElement.href = cvFileUrl;
    
    anchorElement.download = 'Souhail_CV.pdf';
    anchorElement.click();
});

  