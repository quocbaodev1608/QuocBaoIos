const box=document.getElementById("apps");

fetch("apps.json").then(r=>r.json()).then(apps=>{
  apps.forEach(app=>{
    let rate=localStorage.getItem("rate_"+app.id)||app.rating;

    box.innerHTML+=`
      <div class="app">
        <img src="${app.icon}">
        <div>
          <h3>${app.name}</h3>
          <p>${app.desc}</p>
          <p>
            ${[1,2,3,4,5].map(i=>`
              <span onclick="rate('${app.id}',${i})">
              ${i<=rate?"⭐":"☆"}</span>`).join("")}
          </p>
          <a href="${app.link}" target="_blank">⬇ Tải</a>
        </div>
      </div>`;
  });
});

function rate(id,n){
  if(localStorage.getItem("role")!=="user"){
    alert("Cần đăng nhập để đánh giá");
    return;
  }
  localStorage.setItem("rate_"+id,n);
  location.reload();
}
