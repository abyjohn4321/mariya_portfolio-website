document.getElementById('about-icon').addEventListener('click', function() {
    toggleSection('about-section');
});

document.getElementById('bio-icon').addEventListener('click', function() {
    toggleSection('bio-section');
});

document.getElementById('gallery-icon').addEventListener('click', function() {
    toggleSection('gallery-section');
});

document.getElementById('contact-icon').addEventListener('click', function() {
    toggleSection('contact-section');
});

document.getElementById('hobbies-icon').addEventListener('click', function() {
    toggleSection('hobbies-section');
});

document.getElementById('projects-icon').addEventListener('click', function() {
    toggleSection('projects-section');
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const iconSection = document.getElementById('icon-section');
    const sections = document.querySelectorAll('section');

    sections.forEach(s => {
        if (s.id !== sectionId) {
            s.classList.add('hidden');
        }
    });

    section.classList.remove('hidden');
    iconSection.classList.add('hidden');
}

function goBack() {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.add('hidden'));
    document.getElementById('icon-section').classList.remove('hidden');
}
