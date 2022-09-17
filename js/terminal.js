const cmd = document.getElementById("cmdline")
const lines = document.getElementById("lines")
const intromsg = document.getElementById("intromsg")


// create dictionary that will be used to mount commands when user types help
const helpList = [
    {name:"whoisalex",      desc:"Who is Alexander Bui"},                               //done
    {name:"whatami",        desc:"What is a chewbotca"},                                //done
    {name:"projects",       desc:"View projects"},                                      //done       
    {name:"skills",         desc:"View programming languages and other skills"},        //done                       
    {name:"socials",        desc:"List professional social media links"},               //done
    {name:"email",          desc:"Obtain Alexander's email"},                           //done
    {name:"resume",         desc:"Obtain Alexander's resume"},
    {name:"help",           desc:"Display help commands"},                              //done
    {name:"clear",          desc:"Clear terminal text"},                                //done
];

// create dictionary for all my social media
const socialList = [
    {name:'github',         linkName:'github/alexbui831',       link:'https://github.com/alexbui831'},
    {name:'linkedin',       linkName:'linkedin/alexbui831',     link:'https://www.linkedin.com/in/alexbui831/'},
]

// create dictionary for projects I have done
const projectList = [
    {name:'pokedex',         desc:'Pokedex web app created using the poke api that displays JSON data [React.js Tailwind.css PokeAPI]',    demo:'./images/pokemonapi.png'}, 
    {name:'dashboard',       desc:'Code along dashboard metrics/employee app where I familiarsed myself with react techniques [React.js Tailwind.css SyncFusion]',            demo:'./images/dashboard.png'}, 
    {name:'seniorProject',   desc:'Agricultural Economy senior project front-end [CSS]',                     demo:'./images/seniorproject.png'},
    {name:'calculator',      desc:'Fully functional calculator web app [JS]',                 demo:'./images/calculator.png'},
    {name:'etchasketch',     desc:'Etchasketch web app where user can draw with different colors [JS]',                demo:'./images/etchasketch.png'},
    {name:'library',         desc:'Web app where you can add read/nonread books to your library. [CRUD methods]',               demo:'./images/library.png'},
    {name:'google',          desc:'A personal mock up of the Google home page [CSS]',   demo:'./images/scuffed-google-homepage.png'},
]

// create dictionary for my programming skills
const skillsList = [
    {name:'HTML', level:'proficient'},
    {name:'CSS', level:'proficient'},
    {name:'JavaScript', level:'proficient'},
    {name:'Python', level:'experienced'},
    {name:'SQL', level: 'experienced'},
    {name:'React', level: 'experienced'},
    {name:'git', level: 'experienced'},
    {name:'Tailwind', level: 'basic'},
    {name:'C++', level: 'basic'},
]

// switch statement for functions
function command(cmd) {
    switch (cmd.toLowerCase()) {
        case 'whoisalex':
            whoisalex();
            break;
        case 'whatami':
            whatami();
            break
        case 'projects':
            instructions();
            projects();
            break;
        case 'skills':
            skills();
            break;
        case 'socials':
            social();
            break;
        case 'email':
            email();
            break;
        case 'resume':
            resume();
            break;
        case 'help':
            help();
            break;
        case 'clear':
            clear();
            break;
    }
}

cmd.addEventListener("keydown", function (e) {
    // checks whether the pressed key is "Enter"
    if (e.key === 'Enter') {
        if(cmd.value === helpList[0].name || cmd.value === helpList[1].name || cmd.value === helpList[2].name || cmd.value === helpList[3].name || cmd.value === helpList[4].name || cmd.value === helpList[5].name || cmd.value === helpList[6].name || cmd.value === helpList[7].name || cmd.value === helpList[8].name) {
            // leaves the cmd command in chat history
            const cmdHistory = document.createElement('div');
            cmdHistory.setAttribute('id', 'cmdHistory');
            cmdHistory.innerText=`guest@alexander ~$ ${cmd.value}`;
            lines.appendChild(cmdHistory);

            command(cmd.value);
            cmd.value = "" ;
        } else {
            // if input != helpList
            SyntaxError();
        }
    } else {
        // if user not pressing correct key
        console.log("Press enter");
    }
});

const whoisalex = async () => {
    // info about alexander aka paragraph version of resume
    const newLine = document.createElement("div");
    newLine.setAttribute('id', 'whoisalexmsg');
    newLine.classList.add('secondary-color');

    newLine.innerText = "------------ ------------ ------------ ------------ ------------ ------------ ------------ ------------\nThis message is brought to you by Alexander:\n\n Hello visitor!\nI'm a software developer who likes creating engaging websites with aesthetically pleasing user interfaces such as this space wars themed terminal portfolio.\n After graduating with a Bachelor's in software engineering (3.39 GPA), I was hoping to develop my skills professionally and decided to accept an IT internship at a company called Hunington Ingalls; however, I was placed on the software business relationship team where I learned about business relationship management, project priority organization, and interpersonal communication skills.\n After the internship ended, I believed that my programming talent was wasted.\n I simply would have rather been working on professional code like I envisioned. So currently, to prepare myself for upcoming interviews, I decided to create a few projects that would show recruiters what I am capable of building, while at the same time proving how I am the type to put in overtime in order to reach my goals of becoming a professional software developer.\n\n With that being said, I hope you get an idea of my personality and work ethic. Hope you enjoy your time with Chewbotcaa! \n ------------ ------------ ------------ ------------ ------------ ------------ ------------ Alexander Bui \n";
    lines.appendChild(newLine);   
}

const whatami = async () => {
    // info about chewbotca terminal
    await delay(100);
    const newLine = document.createElement("div");
    newLine.setAttribute("id", "whoamimsg");
    newLine.classList.add('secondary-color');

    newLine.innerText = "RAWRGWAWGGR! Chewbotca!";
    lines.appendChild(newLine);
    
    // audio byte that plays a chewbacca roar
    await delay(1000);
    var audio = new Audio("chewbotcasound.mp3");
    audio.play();
}

const instructions = async () => {
    const instructions = document.createElement('div');
    instructions.setAttribute('id', 'instructions');
    instructions.innerText='In order to view, please click on avaiable project titles';

    lines.appendChild(instructions);

}

const projects = async () => {
    // prints out list of projects
    // creating layout
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute('id', 'projectContainer');
    lines.appendChild(projectContainer);

    const projectNameUL = document.createElement("ul");
    projectNameUL.setAttribute('id', 'projectNameUL');
    projectNameUL.classList.add('blue-glow');

    const projectDescUL = document.createElement("ul");
    projectDescUL.classList.add('secondary-color')

    projectContainer.appendChild(projectNameUL);
    projectContainer.appendChild(projectDescUL);

    try {
        // prints each element of projectlist with a delay
        for (let i in projectList) {
            await delay(100);

            const projectName = document.createElement('li');
            projectName.setAttribute('id', `${projectList[i].name}`);

            projectName.innerText = `${projectList[i].name}`;
            projectNameUL.appendChild(projectName);

            const projectDesc = document.createElement('li');
            projectDesc.setAttribute('id', `${projectList[i].desc}`);

            projectDesc.innerText = `${projectList[i].desc}`;
            projectDescUL.appendChild(projectDesc);
            
            //  displays my projects as a screenshot using WinBox() 
            document.getElementById(`${projectList[i].name}`).addEventListener('click', () => {
                const projectBox = new WinBox({
                    title: `${projectList[i].name}`,    // title
                    background: '#ff005d',              // border-color
                    width: '1000px',
                    height: '600px',                 
                    top: 50,                            // limits box moving 50px top
                    bottom: 50,                         // limits box moving 50px bottom
                    right: 50,                          // limits box moving 50px right
                    left: 50,                           // limits box moving 50px left
                    border: "0.1em",
                    x: "center",                        // positions box
                    y: "center",                        // positions box
                    html: `<img src=${projectList[i].demo} width='1000' height='600'>`,
                })
            })
        }
    }   catch (err) { 
        // error checking
        console.log(err);
    }
}

const skills = async () => {
    // create layout for skills
    const skillsContainer = document.createElement('div');
    skillsContainer.setAttribute('id', 'skillsContainer');

    lines.appendChild(skillsContainer);

    const skillsNameList = document.createElement('div');
    skillsNameList.setAttribute('id', 'skillsNameList');
    skillsNameList.classList.add('blue-glow');

    const skillsDescList = document.createElement('div');
    skillsDescList.setAttribute('id', 'skillsDescList');
    skillsDescList.classList.add('secondary-color');

    skillsContainer.appendChild(skillsNameList);
    skillsContainer.appendChild(skillsDescList);

    try {
        for (let i in skillsList) {
            await delay(100);

            const skillsName = document.createElement('div');
            skillsName.setAttribute('id', `${skillsList[i].name}`);
            skillsName.innerText = `${skillsList[i].name}`;

            skillsNameList.appendChild(skillsName);

            const skillsDesc = document.createElement('div');
            skillsDesc.setAttribute('id', `${skillsList[i].level}`);
            skillsDesc.innerText = `${skillsList[i].level}`;

            skillsDescList.appendChild(skillsDesc);
        }
    } catch (err) {
        // error checking
        console.log(err)
    }
}

const social = async () => {
    // socials with clickable link navigating to profile github, linkedin
    // create layout for social list
    const socialContainer = document.createElement('div');
    socialContainer.setAttribute('id', 'socialContainer');

    lines.appendChild(socialContainer);

    const socialNameList = document.createElement('div');
    socialNameList.setAttribute('id', 'socialNameList');

    const socialLinkList = document.createElement('div');
    socialLinkList.setAttribute('id', 'socialLinkList');
    
    socialContainer.appendChild(socialNameList);
    socialContainer.appendChild(socialLinkList);

    try {
        // mounts name and links of sociallist with delay
        for (let i in socialList) {
            await delay(100);
            
            const socialName = document.createElement('a');
            socialName.setAttribute('href', `${socialList[i].link}`);
            socialName.setAttribute('target', '_blank');
            socialName.classList.add('blue-glow');

            socialName.innerText = `${socialList[i].name}\n`;
            socialNameList.appendChild(socialName);

            const socialLink = document.createElement('span');
            socialLink.setAttribute('id', `${socialList[i].linkName}`);
            socialLink.classList.add('secondary-color');

            socialLink.innerText = `${socialList[i].linkName}`;
            socialLinkList.appendChild(socialLink);
            
        }
    } catch (err) {
        // error checking
        console.log(err);
    }
}

const email = async () => { 
    // give my e-mail
    await delay(100);
    const newLine = document.createElement("div");
    newLine.setAttribute("id", "emailmsg");
    newLine.classList.add('secondary-color');

    newLine.innerText = "Warning! For security reasons, I will just provide Alexander's email: ";
    lines.appendChild(newLine);    

    const email = document.createElement('span');
    email.classList.add('blue-glow')
    
    email.innerText = 'alexbui831@gmail.com'
    newLine.appendChild(email);
}

const resume = async () => {
    // resume
    const resumeLoad = document.createElement('div');
    resumeLoad.setAttribute('id', 'resumeLoad');
    resumeLoad.innerText='Getting resume ...';

    lines.appendChild(resumeLoad);
    await delay(500);

    window.open(url, '_blank').focus();

}

const help = async () => { 
    // create elements that have helpList information inside
    // creating layout
    const helpContainer = document.createElement('div');
    helpContainer.setAttribute('id', 'helpContainer');

    lines.appendChild(helpContainer);

    const helpNameUL = document.createElement('ul');
    helpNameUL.setAttribute('id', 'helpNameUL');
    helpNameUL.classList.add('blue-glow');

    const helpDescUL = document.createElement('ul');
    helpDescUL.classList.add('secondary-color');

    helpContainer.appendChild(helpNameUL);
    helpContainer.appendChild(helpDescUL);
    
    try {
        // mounts all of helplist with a delay        
        for (let i in helpList) {
            await delay(100);

            const helpName = document.createElement('li');
            helpName.setAttribute('id', `${helpList[i].name}`);

            helpName.innerText = `${helpList[i].name}`;
            helpNameUL.appendChild(helpName);

            const helpDesc = document.createElement('li');
            helpDesc.setAttribute('id', `${helpList[i].desc}`);

            helpDesc.innerText = `${helpList[i].desc}`;
            helpDescUL.appendChild(helpDesc);
        }
    }   catch (err) {
        // error checking
        console.log(err);
    }
}

const clear = () => { 
    // clears terminal txt messages
    intromsg.innerText = "";
    lines.innerText = "";
}

const SyntaxError = async () => { 
    // mount messages like a syntaxError due to misinput
    await delay(100);
    const newLine = document.createElement("div");
    newLine.setAttribute("id", "errmsg");

    newLine.innerText = `chewbotca: command not found: ${cmd.value}`;
    lines.appendChild(newLine);
    // clears cmdline value so user can start with a fresh input
    cmd.value = "";
}

function delay(time) {
    //  delay promise b/c js is finicky with delaying
    return new Promise(resolve => setTimeout(resolve, time));
  }