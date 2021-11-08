import url from "../img/email.jpg";
import "../css/index.scss";
import "./avatar";
import "./es6";
// 请求后台数据
import $http from "jquery";
const content = document.getElementById("content");
// let img = new Image();
// img.src = url;
// img.className='avatar'

// 测试ajax得同步

// $http.ajax({
//   url: "http://localhost:8080/src/server/person.json",
//   async: false,
//   success: function(data) {
//     console.log(data);
//   }
// });
// $http.ajax({
//   url: "http://localhost:8080/src/server/chidren.json",
//   async: false,
//   success: function(data) {
//     console.log(data);
//   }
// });

// console.log("我是同步");

// let promise1=new Promise(function(resolve,reject){
//     // resolve函数的作用的是把对象状态的未完成变为成功时，调用resolve函数，并把异步操作成功结果返回出去
//     // reject函数的作用的是把对象状态的未完成变为失败时，调用reject函数，并把异步操作失败结果返回出去
//     if(true){
//         resolve(value)
//     }else{
//         reject(value)
//     }

// })

// let promise = new Promise(function(resolve, reject) {
//   console.log('立即执行');
//   resolve("我是resolve");
//   reject();
// });

// promise.then(
//   function(data) {
//     console.log("成功的回调" + data);
//   },
//   function() {
//     console.log("失败的回调");
//   }
// );

// 手动实现异步加载图片的方法

function loadImg(url) {
  return new Promise(function(resolve, reject) {
    let image = new Image();

    //图片加载成功会调用该方法
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject("加载失败地址" + url);
    };

    image.src = url;
    return;
  });
  //图片加载成功调用resolve方法

  //图片加载失败调用reject方法
}
// 接受promise实例
let promiseImg = loadImg(
  "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585456401&di=233fc78703778bdb4f31175fe9790309&src=http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg"
);

promiseImg
  .then(
    function(img) {
      // 接受加载成功的图片对象
      content.append(img);
      console.log("成功了");
    }
    //   function(error) {
    //     //接受加载失败的图片对象
    //     console.log(error);
    //   }
  )
  .catch(function(err) {
    console.log("111");
    console.log(err);
  });

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject) {
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

// getJSON("/posts.json").then(
//   function(json) {
//     console.log("Contents: " + json);
//   },
//   function(error) {
//     console.error("出错了", error);
//   }
// )
//尝试封装一个简单的ajax的promise请求
// new avatar();

// content.innerHTML = `<div class="iconfont iconyundongmao"></div>`;
