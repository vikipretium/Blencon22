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
        name: 'Dalai Felinto',
        topic: 'A backstage look at open source development',
        bio: 'Graduated in Architecture and Urban Studies, using Blender since 2003 and contributor to the code since 2.47. His participation in the Blender community includes a book, few papers, workshops and talks at blender events. Worked as the development coordinator of Blender Code Quest 2018, and is one of the 2.8 x development coordinators.',
        urlImage: './assets/images/erindale.jpg', 
    },
    {
        name: 'Dalai Felinto',
        topic: 'A backstage look at open source development',
        bio: 'Graduated in Architecture and Urban Studies, using Blender since 2003 and contributor to the code since 2.47. His participation in the Blender community includes a book, few papers, workshops and talks at blender events. Worked as the development coordinator of Blender Code Quest 2018, and is one of the 2.8 x development coordinators.',
        urlImage: './assets/images/daneil.jpg', 
    },
    {
        name: 'Dalai Felinto',
        topic: 'A backstage look at open source development',
        bio: 'Graduated in Architecture and Urban Studies, using Blender since 2003 and contributor to the code since 2.47. His participation in the Blender community includes a book, few papers, workshops and talks at blender events. Worked as the development coordinator of Blender Code Quest 2018, and is one of the 2.8 x development coordinators.',
        urlImage: './assets/images/janvan.jpg', 
    },
    {
        name: 'Dalai Felinto',
        topic: 'A backstage look at open source development',
        bio: 'Graduated in Architecture and Urban Studies, using Blender since 2003 and contributor to the code since 2.47. His participation in the Blender community includes a book, few papers, workshops and talks at blender events. Worked as the development coordinator of Blender Code Quest 2018, and is one of the 2.8 x development coordinators.',
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
