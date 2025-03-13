const works = {
    "task1": {"title": "Project 1", "url": "works/task1/index.html"},
    "task2": {"title": "Project 2", "url": "works/task2/index.html"},
    "task3": {"title": "Project 3", "url": "works/task3/index.html"}
};

const navDiv = document.getElementById('nav_div');
const contentFrame = document.getElementById('content_frame');

function createNavLinks() {
    for (const key in works) {
        if (works.hasOwnProperty(key)) {
            const work = works[key];
            const link = document.createElement('a');
            link.href = '#';
            link.innerText = work.title;
            link.classList.add('nav_link');
            link.addEventListener('click', function(event) {
                event.preventDefault();
                loadWorkContent(work.url);
            });
            navDiv.appendChild(link);
        }
    }
}

function loadWorkContent(url) {
    contentFrame.src = url;
}

createNavLinks();
