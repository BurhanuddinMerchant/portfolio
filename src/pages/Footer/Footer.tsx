import React,{FC} from "react";
interface Prop{
  data:{name:string}
}
export const Footer:FC<Prop> = ({ data }) => {
  const { name } = data;
  return <footer>Made With ❤️ By {name}</footer>;
};
