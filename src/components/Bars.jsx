import { SkillBars } from 'react-skills';
 
const skillsData= [
  {
    name: 'Java Script',
    level: 60,
    color: 'Maroon',
  },
  {
    name: 'HTML5/CSS3',
    level: 50,
    color: 'Salmon',
  },
  {
    name: 'ReactJS',
    level: 60,
    color: 'blue',
  },
 
  {
    name: 'Redux',
    level: 50,
    color: 'Green',
  },
  {
    name: 'Angular',
    level:40,
    color: 'Silver',
  },
  {
    name: 'C#,.Net Web Api',
    level:40,
    color: 'Salmon',
  },
  {
    name: 'UX/UI/Figma',
    level: 50,
    color: 'Teal',
  },
  {
    name: 'Tailwind/Material-Ui',
    level: 50,
    color: 'Magenta',
  },
  
  {
    name: 'Nodejs/ExpressjS',
    level: 40,
    color: 'Brown',
  },
  {
    name: 'SQL,PostgreSQl',
    level: 40,
    color: 'Green',
  }
]
function Bars() {
    return (  
     <SkillBars skills={skillsData} duration={3} />
    );
}

export default Bars;