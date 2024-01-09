import pasc from "../assets/icons/organizations/pasc.png";
import gdsc from "../assets/icons/organizations/gdsc.png";

interface Organization{
  link:string,
  image:string,
  duration:string,
  position:string,
  name:string,
}

export const organizationdata:Organization[] = [
  {
    link: "https://developers.google.com/community/gdsc",
    image: gdsc,
    duration: "Sep 21 - Sep 22",
    position: "Web Dev Lead",
    name: "Google DSC",
  },
  {
    link: "https://pict.acm.org/",
    image: pasc,
    duration: "Oct 19 - Jun 23",
    position: "Volunteer",
    name: "PICT ACM Student Chapter",
  },
];
