import youtube from "../assets/icons/contact/youtube.svg";
import instagram from "../assets/icons/contact/instagram.svg";
import linkedin from "../assets/icons/contact/linkedin.svg";
import github from "../assets/icons/contact/github.svg";
import email from "../assets/icons/contact/email.svg";
import ytmusic from "../assets/icons/contact/ytmusic.svg";
import insta_music from "../assets/icons/contact/insta_music.svg";
import medium from "../assets/icons/contact/medium.svg";
interface Contact {
  image:string,
  name:string,
  link:string
}
export const contactdata : Contact[]= [
  {
    image: email,
    name: "Email",
    link: "mailto: bmerchant945@gmail.com",
  },
  {
    image: github,
    name: "GitHub",
    link: "https://github.com/BurhanuddinMerchant",
  },
  {
    image: linkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/burhanuddinmerchant/",
  },
  {
    image: medium,
    name: "Medium",
    link: "https://medium.com/@BurhanuddinMerchant",
  },
  {
    image: instagram,
    name: "Instagram",
    link: "https://www.instagram.com/burhanuddin_merchant__/",
  },
  {
    image: youtube,
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCQzbav3GYYX81iMzVdh8sKw",
  },
  {
    image: insta_music,
    name: "Instagram",
    link: "https://www.instagram.com/musicbyburza/",
  },
  {
    image: ytmusic,
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCn9nXXAefC9YeFHCKqH6QkA",
  },
];
