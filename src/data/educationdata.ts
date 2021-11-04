import pict from "../assets/icons/education/pict.png";
interface Education{
  link:string,
    image:string,
    duration:string,
    degree:string,
    name:string,
    marks:string,
}
export const educationdata:Education[] = [
  {
    link: "https://pict.edu/",
    image: pict,
    duration: "2019 - Present",
    degree: "B.E. Computer Engineering",
    name: "Pune Institute of Computer Technology, Pune",
    marks: "9.76 CGPA",
  },
];
