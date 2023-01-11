import { SkillBars } from 'react-skills';
 
const skillsData= [
  {
    name: 'Java Script',
    level: 80,
    color: 'Maroon',
  },
  {
    name: 'HTML5/CSS3',
    level: 70,
    color: 'Salmon',
  },
  {
    name: 'ReactJS',
    level: 70,
    color: 'blue',
  },
 
  {
    name: 'Redux',
    level: 60,
    color: 'Green',
  },
  {
    name: 'Angular',
    level: 60,
    color: 'Silver',
  },
  {
    name: 'UX/UI/Figma',
    level: 50,
    color: 'Teal',
  },
  {
    name: 'Tailwind/Material-Ui',
    level: 60,
    color: 'Magenta',
  },
  {
    name: 'UX/UI Design',
    level: 60,
    color: 'Purple',
  },
  {
    name: 'Nodejs/ExpressjS',
    level: 50,
    color: 'Brown',
  },
  {
    name: 'Firebase/.Net6',
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