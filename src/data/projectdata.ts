import cloudcollaborator from "../assets/icons/projects/cloudcollaborator.png";
import fastnfresh from "../assets/icons/projects/fastnfresh.png";
import mmp from "../assets/icons/projects/mmp.png";
import personalblog from "../assets/icons/projects/personalblog.png";
import spellcheck from "../assets/icons/projects/spellcheck.png";

interface Project{
  title:string,
    description:string,
    deployment:string,
    code:string,
    image:string,
    date:string,
}

export const projectdata:Project[] = [
  {
    title: "Cloud Collaborator",
    description: "Real Time Code Collaboration Platform",
    deployment: "https://cloud-collaborator.herokuapp.com/",
    code: "https://github.com/Cloud-Collaborator/cloud-collaborator",
    image: cloudcollaborator,
    date: "Dec 20 -Jan 20",
  },
  {
    title: "Fast'n'Fresh",
    description: "An api for a food delivery e-commerce mobile application",
    deployment: "http://fastnfresh.ml/",
    code: "https://github.com/Fast-n-fresh/ff-backend-api",
    image: fastnfresh,
    date: "Apr 21 - Jun 21",
  },
  {
    title: "Make My Portfolio",
    description: "A Portfolio Creation Website",
    deployment: "http://pbl-portfolio.herokuapp.com/",
    code: "https://github.com/PBL-Group-13/portfolio-website",
    image: mmp,
    date: "Mar 21 - May 21",
  },
  {
    title: "Personal Blog",
    description: "A Full-Stack Personal Blog Application",
    deployment: "https://blog.burhanuddinmerchant.ml/",
    code: "https://github.com/BurhanuddinMerchant/personal-blog-api",
    image: personalblog,
    date: "Sep 20 - Oct 20",
  },
  {
    title: "Trie Spell Check",
    description: "A spelling checker application using Trie data-structure",
    deployment: "https://spellcheck.burhanuddinmerchant.ml/",
    code: "https://github.com/BurhanuddinMerchant/spell_check",
    image: spellcheck,
    date: "Sep 21 - Sep 21",
  },
];
