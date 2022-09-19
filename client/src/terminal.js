const cmd = document.getElementById("cmdline")
const lines = document.getElementById("lines")
const intromsg = document.getElementById("intromsg")


// create dictionary that will be used to mount commands when user types help
const helpList = [
    {name:"whoisalex",      desc:"Who is Alexander Bui"},                               //done
    {name:"whatami",        desc:"What is Chewbotcaa"},                                //done
    {name:"projects",       desc:"View programming projects"},                                      //done       
    {name:"skills",         desc:"View knowledge of programming languages and other skills"},        //done                       
    {name:"socials",        desc:"List professional social media links"},               //done
    {name:"email",          desc:"Obtain Alexander's email"},                           //done
    {name:"resume",         desc:"Open Alexander's resume"},
    {name:"help",           desc:"Display help commands"},                              //done
    {name:"clear",          desc:"Clear terminal text"},                                //done
];

// create dictionary for all my social media
const socialList = [
    {name:'github',         linkName:'github/alexbui831',       link:'https://github.com/alexbui831'},
    {name:'linkedin',       linkName:'linkedin/alexbui831',     link:'https://www.linkedin.com/in/alexbui831/'},
]

// create dictionary for projects I want to display
const projectList = [
    {
        name:'pokedex',
        gitlink:'https://github.com/alexbui831/pokemon-api-fetching',         
        desc:'Pokedex web app created using the poke api that displays JSON data [React Tailwind RESTful API]',    
        demo:'./images/pokemonapi.png'
    }, 
    {
        name:'dashboard', 
        gitlink:'https://github.com/alexbui831/reactjs-syncfusion-dashboard-app',       
        desc:'Internship project where I was tasked to create a dashboard metrics/employee web app [React Tailwind SyncFusion]',            
        demo:'./images/dashboard.png'
    }, 
    {
        name:'seniorProject', 
        gitlink:'https://github.com/dtanner24/AgEcon-Budget-Generator',   
        desc:'Agricultural Economy senior project front-end [CSS]',                    
        demo:'./images/seniorproject.png'
    },
    {
        name:'calculator', 
        gitlink:'https://github.com/alexbui831/calculator',     
        desc:'Fully functional calculator web app [JS]',                 
        demo:'./images/calculator.png'
    },
    {
        name:'etchasketch', 
        gitlink:'https://github.com/alexbui831/etchasketch',     
        desc:'Etchasketch web app where user can draw with different colors [JS]',                
        demo:'./images/etchasketch.png'
    },
    {
        name:'library', 
        gitlink:'https://github.com/alexbui831/library',        
        desc:'Web app where you can add read/nonread books to your library. [CRUD methods]',               
        demo:'./images/library.png'
    },
    {
        name:'google', 
        gitlink:'https://github.com/alexbui831/google-hompage-odinProject',         
        desc:'A personal mock up of the Google home page [CSS]',   
        demo:'./images/scuffed-google-homepage.png'
    },
    {
        name:'portfolio',
        gitlink:'https://github.com/alexbui831/terminal-portfolio',
        desc:'The online website you are currently viewing. [JS Node Express AWS]',
        demo:'./images/portfolio.png'
    },
]

// create dictionary for my tech skills
const skillsList = [
    {name:'HTML',       level:'2+ years'},
    {name:'CSS',        level:'2+ years'},
    {name:'JavaScript', level:'2+ years'},
    {name:'Python',     level:'2+ years'},
    {name:'git',        level:'2+ years'},
    {name:'SQL',        level:'2+ years'},
    {name:'PHP',        level:'experienced'},
    {name:'React JS',   level:'experienced'},
    {name:'Tailwind',   level:'basic'},
    {name:'C++',        level:'basic'},
    {name:'Node JS',    level:'beginner'},
    {name:'Express',    level:'beginner'},
    {name:'AWS',        level:'beginner'},
]

// switch statement for functions
async function command(cmd) {
    
    await delay(100);

    switch (cmd.toLowerCase()) {
        case 'whoisalex':
            whoisalex();
            break;
        case 'whatami':
            whatami();
            break
        case 'projects':
            instructions(1);
            projects();
            break;
        case 'skills':
            skills();
            break;
        case 'socials':
            instructions(2);
            social();
            break;
        case 'email':
            email();
            break;
        case 'resume':
            instructions(3);
            resume();
            break;
        case 'help':
            instructions(4);
            help();
            break;
        case 'clear':
            clear();
            break;
    }
}

window.onload = function() {
    cmd.focus();
};

cmd.addEventListener("keydown", function (e) {
    // checks whether the pressed key is "Enter"
    if (e.key === 'Enter') {
        const cmdlow = cmd.value.toLowerCase();
        if(cmdlow === helpList[0].name || cmdlow === helpList[1].name || cmdlow === helpList[2].name || cmdlow === helpList[3].name || cmdlow === helpList[4].name || cmdlow === helpList[5].name || cmdlow === helpList[6].name || cmdlow === helpList[7].name || cmdlow === helpList[8].name) {
            // leaves the cmd command in chat h
            const cmdHistory = document.createElement('div');
            cmdHistory.setAttribute('id', 'cmdHistory');
            cmdHistory.innerText=`guest@chewbotcaa ~$ ${cmd.value}`;
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

    newLine.innerText = "This message was brought to you by Alexander:\n\n Hello guestName!\nI'm a software developer who likes creating engaging websites with aesthetically pleasing user interfaces such as this Star Wars themed command line portfolio.\n\n After graduating with a Bachelor's in software engineering (3.39 GPA) at Mississippi State, I was hoping to develop my skills in a professional environment and decided to accept an IT internship at Hunington Ingalls. During this internship, I was assigned to develop a dashboard metrics employee web app with flexible requirements. Once I got the requirements, I just started the whole software development life cycle. I also did other business related tasks such as keeping track of annual budgets and surveying employees to see if they still used certain software to cut down on wasted costs. After my internship ended, I knew that I definitely enjoyed working on my code project more than any other task I was given.\n\n So now I am looking to continue my path as a professional software engineer. So currently, to prepare myself for upcoming interviews, I decided to create a few projects that would show recruiters what I am capable of building, while at the same time, proving how I will put in that extra work to achieve my goals.\n\n With that being said, I hope you got a good idea of my personality, technological skills, and work ethic from this message. Hope you enjoy your time with Chewbotcaa!\n\np.s. If you try the 'whatami' command, turn down your volume a bit.\n  - Alexander Bui \n";
    lines.appendChild(newLine);   
}

const whatami = async () => {
    // info about chewbotca terminal
    const newLine = document.createElement("div");
    newLine.setAttribute("id", "whoamimsg");
    newLine.classList.add('secondary-color');

    newLine.innerText = "RAWRGWAWGGR! Chewbotcaa!";
    lines.appendChild(newLine);
    
    // audio byte that plays a chewbacca roar
    await delay(1000);
    var audio = new Audio("./images/chewbotcasound.mp3");
    audio.play();
}

const instructions = async (para) => {
    // gives user instructions on how to use website

    try {
        if (para === 1) {
            const instructions = document.createElement('div');
            instructions.setAttribute('id', 'instructions');
            instructions.innerText = 'To view projects, please click on available project titles. For github repositories, click on available project descriptions.';

            lines.appendChild(instructions);
        } 
        else if (para === 2) {
            const instructions = document.createElement('div');
            instructions.setAttribute('id', 'instructions');
            instructions.innerText = 'Click on avaiable social media titles to navigate to their respective websites with Alexander`s profile.';

            lines.appendChild(instructions);
        }
        else if (para === 3) {
            const instructions = document.createElement('div');
            instructions.setAttribute('id', 'instructions');
            instructions.innerText='Loading Alexander`s resume ...';
        
            lines.appendChild(instructions);
        }
        else if (para === 4) {
            const instructions = document.createElement('div');
            instructions.setAttribute('id', 'instructions');
            instructions.innerText = 'To run a command, enter a blue highlighted entry.'

            lines.appendChild(instructions);
        }
    } catch (err) {
        // error checking
        console.log(err);
    }

    

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

    projectContainer.appendChild(projectNameUL);

    const projectDescUL = document.createElement("ul");
    projectDescUL.setAttribute('id', 'projectDescUL');
    projectDescUL.classList.add('secondary-color');

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
            projectDesc.setAttribute('id', `${projectList[i].name}-desc`);
            projectDesc.innerText = `${projectList[i].desc}`;
            
            projectDescUL.appendChild(projectDesc);
            
            //  takes user to github if clicking on desc
            document.getElementById(`${projectList[i].name}-desc`).addEventListener('click', () => {
                window.open(`${projectList[i].gitlink}`, '_blank').focus();
            })

            //  displays my projects as a screenshot using WinBox() 
            document.getElementById(`${projectList[i].name}`).addEventListener('click', () => {
                const projectBox = new WinBox({
                    title: `${projectList[i].name}`,    // title
                    background: '#ff005d', 
                    modal: true,             // border-color
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
                });
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

    skillsContainer.appendChild(skillsNameList);

    const skillsDescList = document.createElement('div');
    skillsDescList.setAttribute('id', 'skillsDescList');
    skillsDescList.classList.add('secondary-color');

    skillsContainer.appendChild(skillsDescList);

    try {
        for (let i in skillsList) {

            await delay(100);

            const skillsName = document.createElement('div');
            skillsName.setAttribute('id', `${skillsList[i].name}`);
            skillsName.innerText = `${skillsList[i].name}`;

            skillsNameList.appendChild(skillsName);

            const skillsDesc = document.createElement('div');
            skillsDesc.setAttribute('id', `${skillsList[i].name}-desc`);
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

    socialContainer.appendChild(socialNameList);

    const socialLinkList = document.createElement('div');
    socialLinkList.setAttribute('id', 'socialLinkList');
    
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
    const newLine = document.createElement("div");
    newLine.setAttribute("id", "emailmsg");
    newLine.classList.add('secondary-color');
    newLine.innerText = "Warning! For security reasons, I will just provide Alexander's email: ";

    lines.appendChild(newLine);    

    const email = document.createElement('span');
    email.classList.add('blue-glow');
    
    email.innerText = 'alexbui831@gmail.com';
    newLine.appendChild(email);
}

const resume = async () => {
    // resume
    await delay(500);

    window.open('images/ALEXANDER_BUI_RESUME.pdf', '_blank').focus();
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

    helpContainer.appendChild(helpNameUL);

    const helpDescUL = document.createElement('ul');
    helpDescUL.setAttribute('id', 'helpDescUL');
    helpDescUL.classList.add('secondary-color');

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
            helpDesc.setAttribute('id', `${helpList[i].name}-desc`);
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
    const newLine = document.createElement("div");
    newLine.setAttribute("id", "errmsg");
    newLine.innerText = `chewbotcaa: command not found: ${cmd.value}`;

    lines.appendChild(newLine);
    // clears cmdline value so user can start with a fresh input
    cmd.value = "";
}

function delay(time) {
    //  delay promise b/c js is finicky with delaying
    return new Promise(resolve => setTimeout(resolve, time));
  }