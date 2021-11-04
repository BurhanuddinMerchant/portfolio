import ansible from "../assets/icons/skills/ansible.svg";
import aws from "../assets/icons/skills/aws.svg";
import cpp from "../assets/icons/skills/cpp.svg";
import css from "../assets/icons/skills/css.svg";
import django from "../assets/icons/skills/django.svg";
import docker from "../assets/icons/skills/docker.svg";
import flask from "../assets/icons/skills/flask.svg";
import git from "../assets/icons/skills/git.svg";
import heroku from "../assets/icons/skills/heroku.svg";
import html from "../assets/icons/skills/html.svg";
import java from "../assets/icons/skills/java.svg";
import javascript from "../assets/icons/skills/javascript.svg";
import kubernetes from "../assets/icons/skills/kubernetes .svg";
import mongodb from "../assets/icons/skills/mongodb.svg";
import mysql from "../assets/icons/skills/mysql.svg";
import nodejs from "../assets/icons/skills/nodejs.svg";
import python from "../assets/icons/skills/python.svg";
import rabbitmq from "../assets/icons/skills/rabbitmq.svg";
import react from "../assets/icons/skills/react.svg";
import terraform from "../assets/icons/skills/terraform.svg";
import celery from "../assets/icons/skills/celery.png";

import ableton from "../assets/icons/skills/ableton.svg";
import premier from "../assets/icons/skills/premier.svg";
import illustrator from "../assets/icons/skills/illustrator.svg";
import ae from "../assets/icons/skills/ae.svg";
import fl from "../assets/icons/skills/fl.svg";
import obs from "../assets/icons/skills/obs.svg";
import nginx from "../assets/icons/skills/nginx.svg";
import solidity from "../assets/icons/skills/solidity.svg";
import redis from "../assets/icons/skills/redis.svg";
import gatsby from "../assets/icons/skills/gatsby.svg";

interface Skill {
  heading: string,
    images: {
      one:string,
      two?:string,
      three?:string,
      four?:string,
    },
}

export const skillsdata:Skill[] = [
  {
    heading: "Programming",
    images: {
      one: cpp,
      two: python,
      three: javascript,
      four: java,
    },
  },
  {
    heading: "DevOps",
    images: {
      one: ansible,
      two: docker,
      three: kubernetes,
      four: terraform,
    },
  },
  {
    heading: "Deployment",
    images: { one: aws, two: heroku, three: git, four: nginx },
  },
  {
    heading: "Databases",
    images: { one: mongodb, two: mysql, three: redis },
  },
  {
    heading: "Backend Frameworks",
    images: { one: nodejs, two: django, three: flask },
  },
  {
    heading: "Frontend Frameworks",
    images: { one: html, two: css, three: react, four: gatsby },
  },
  {
    heading: "Other Tools",
    images: { one: rabbitmq, two: celery, three: solidity },
  },
  {
    heading: "Editing",
    images: { one: illustrator, two: premier, three: ae, four: obs },
  },
  {
    heading: "Music",
    images: { one: fl, two: ableton },
  },
];
