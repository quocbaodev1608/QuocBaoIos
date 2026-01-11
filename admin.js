let apps=[];

fetch("apps.json").then(r=>r.json()).then(d=>{
  apps=d; render();
});

function render(){
  list.innerHTML="";
  apps.forEach((a,i)=>{
    list.innerHTML+=`
      <p>${a.name}
      <button onclick="del(${i})">❌</button></p>`;
  });
}

function addApp(){
  apps.push({
    id:"app"+Date.now(),
    name:name.value,
    platform:"iOS",
    icon:icon.value,
    desc:desc.value,
    rating:5,
    downloads:0,
    link:link.value
  });
  exportFile();
}

function del(i){
  apps.splice(i,1);
  exportFile();
}

function exportFile(){
  const blob=new Blob([JSON.stringify(apps,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="apps.json";
  a.click();
}
