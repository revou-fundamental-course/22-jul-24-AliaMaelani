document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('homeSection');
    const packageSection = document.getElementById('packageSection');
    const callUsSection = document.getElementById('callUsSection');
    
    const homeLink = document.getElementById('homeLink');
    const packageLink = document.getElementById('packageLink');
    const callUsLink = document.getElementById('callUsLink');

    function showSection(section) {
        homeSection.style.display = 'none';
        packageSection.style.display = 'none';
        callUsSection.style.display = 'none';

        section.style.display = 'block';
    }

    homeLink.addEventListener('click', () => showSection(homeSection));
    packageLink.addEventListener('click', () => showSection(packageSection));
    callUsLink.addEventListener('click', () => showSection(callUsSection));

    // Show home section by default
    showSection(homeSection);
});
