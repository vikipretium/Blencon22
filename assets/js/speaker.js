const speakerData = [
    {
        name: 'Dalai Felinto',
        topic: 'A backstage look at open source development',
        bio: 'Graduated in Architecture and Urban Studies, using Blender since 2003 and contributor to the code since 2.47. His participation in the Blender community includes a book, few papers, workshops and talks at blender events.',
        urlImage: './assets/images/df.jpg',
    },
    {
        name: 'Ian Hubert',
        topic: 'World building in Blender',
        bio: 'Ian Hubert has been making movies for over two decades now, and visual effects for nearly that long. He\'s been using Blender since 2004, with a specific focus on combining digital worlds with real life imagery.',
        urlImage: './assets/images/ian-hubert.jpg', 
    },
    {
        name: 'Erindale Woodford',
        topic: 'Creating Parametric Multiverse Madness',
        bio: 'After turning away from a degree in Computer Animation and Visualization, Erin trained as a cabinet maker before completing an Interior Design degree and finding themselves back in the world of 3D',
        urlImage: './assets/images/erindale.jpg', 
    },
    {
        name: 'Daneil Bystedt',
        topic: 'Creating blender demos, glowing tigers and tortured creatures',
        bio: 'Daniel Bystedt is working as Head of modeling & Lead creature artists at Goodbye Kansas Studios. He has worked on such projects as The Walking Dead, Cyberpunk 2077 gametrailer',
        urlImage: './assets/images/daneil.jpg', 
    },
    {
        name: 'Jan van den Hemel',
        topic: 'Consistency and small efforts in Blender',
        bio: 'My goal is to help people create 3D art with the free open-source software Blender in the shortest, most efficient method possible. ',
        urlImage: './assets/images/janvan.jpg', 
    },
    {
        name: 'William Landgren',
        topic: 'Creating Hollywood in Blender',
        bio: '14 year old creating viral shorts using blender while doing school assignmets',
        urlImage: './assets/images/william_landgren.png',
    }
];

// selecting speaker div
const speakerDiv = document.querySelector(".speakers-list");
speakerData.forEach((speaker) => {
    const speakerProject = document.createElement('div');

    let speakerDetails = '';
    speakerDetails = `
    <div class="speaker">
        <div class="speaker-img">
         <div class="checker"></div>
            <img src=${speaker.urlImage} alt="${speaker.name}">
        </div>
        <div class="speaker-details">
            <h3>${speaker.name}</h3>
            <p class="speaker-details-topic">${speaker.topic}</p>
            <hr class="speaker-details-line"></hr>
            <p class="speaker-details-bio">${speaker.bio}</p>
        </div>
    </div>`;

speakerProject.innerHTML = speakerDetails;
speakerDiv.appendChild(speakerProject);

});
