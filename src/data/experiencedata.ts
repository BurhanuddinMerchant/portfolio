import bitglaze from "../assets/icons/experience/Bitglaze.png"

interface Experience{
  link:string,
  image:string,
  duration:string,
  position:string,
}
export const experiencedata:Experience[] = [

 
  {
    link: "https://www.ubs.com/global/en.html",
    image:
      "https://www.ubs.com/etc/designs/fit/img/UBS_Logo_Semibold.svg",
    duration: "May 22 - Jul 22",
    position: "SUMMER INTERN",
  },
  {
    link: "https://www.linkedin.com/company/bitglaze-technologies-pvt-ltd/about/",
    image:
      bitglaze,
      duration: "Apr 22 - May 22",
      position: "BACKEND INTERN",
    },{
      link: "https://dataorc.in/",
      image:
      "https://storage.googleapis.com/dataorc_statics_ind/homepage/images/logo.png",
      duration: "Apr 21 - Oct 21",
      position: "SDE INTERN",
  }, 
];
