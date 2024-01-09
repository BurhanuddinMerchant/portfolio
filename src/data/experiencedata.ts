import bitglaze from "../assets/icons/experience/Bitglaze.png"

interface Experience{
  link:string,
  image:string,
  duration:string,
  position:string,
}
export const experiencedata:Experience[] = [
  {
    link: "https://raft.ai",
    image: "https://assets-global.website-files.com/634dc126d92a901d43966284/634dc126d92a903c899662b9_Wordmark.svg",
    duration: "Jun 23 - Present",
    position: "SOFTWARE ENGINEER",
  },
  {
    link:"https://drive.google.com/file/d/11bBdnRXWiym_OJCyqb3TOG759yjTkCSO/preview",
    image:"https://semiconductor.samsung.com/etc.clientlibs/semiconductor/designs/global/common/resources/img/icon/global-samsung-logo.svg",
    duration: "Jan 23 - May 23",
    position: "SOFTWARE ENGINEERING INTERN",
  },
  {
    link:"https://bmexp.netlify.app/atlan",
    image:"https://website-assets.atlan.com/img/atlan-blue.svg",
    duration: "Sep 22 - Jan 23",
    position: "BACKEND ENGINEERING INTERN",
  },
  {
    link: "https://bmexp.netlify.app/ubs",
    image:
      "https://www.ubs.com/etc/designs/fit/img/UBS_Logo_Semibold.svg",
    duration: "May 22 - Jul 22",
    position: "SUMMER INTERN",
  },
  {
    link: "https://bmexp.netlify.app/bitglaze",
    image:
      bitglaze,
      duration: "Apr 22 - May 22",
      position: "BACKEND INTERN",
    },{
      link: "https://bmexp.netlify.app/dataorc",
      image:
      "https://storage.googleapis.com/dataorc_statics_ind/homepage/images/logo.png",
      duration: "Apr 21 - Oct 21",
      position: "SDE INTERN",
  }, 
];
