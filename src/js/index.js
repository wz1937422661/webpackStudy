import url from "../img/email.jpg";
import style from  '../css/index.scss';
import avatar from './avatar';
const content = document.getElementById("content");
let img = new Image(); 
img.src = url;
img.className=style.avatar

content.append(img);
console.log('我是index.js文件');

new avatar();


