import url from "../img/email.jpg";
import style from  '../css/index.scss';

function createdAvatar() {
  const content = document.getElementById("content");
  // Image构造函数创造出来的对象和img dom元素是有区别的
  let img = new Image();

  img.src = url;
  img.className =style.avatar_green ;
  content.append(img);
  console.log(img);

}
export default createdAvatar