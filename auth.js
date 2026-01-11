const OWNER = "Quocbao";
const OWNER_HASH = "e3c1b0f8d9"; // hash rút gọn demo

function hash(t){ return btoa(t).substring(0,10); }

function login(){
  let u=user.value, p=pass.value;
  let h=hash(u+":"+p);

  if(u===OWNER && h===OWNER_HASH){
    localStorage.setItem("role","owner");
    location.href="admin.html";
    return;
  }

  let users=JSON.parse(localStorage.getItem("users")||"{}");
  if(users[u]===h){
    localStorage.setItem("role","user");
    localStorage.setItem("user",u);
    location.href="index.html";
  } else alert("Sai thông tin");
}

function register(){
  let u=user.value, p=pass.value;
  let users=JSON.parse(localStorage.getItem("users")||"{}");
  users[u]=hash(u+":"+p);
  localStorage.setItem("users",JSON.stringify(users));
  alert("Đăng ký thành công");
}
