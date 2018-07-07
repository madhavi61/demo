function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
}
)

var child2=document.querySelector(".childTwo");

function career(careerInfo){
  //console.log(careerInfo)
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  child2.appendChild(careerHeading);
  var careerHr=document.createElement("hr");
  child2.appendChild(careerHr);
var ch=document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(ch);
}

function education(edu){
  var eduHeading=document.createElement("h3");
  eduHeading.textContent="Educational Qualification";
  child2.appendChild(eduHeading);
  var eduHr=document.createElement("hr");
  child2.appendChild(eduHr);
  var eduTable=document.createElement("table");
  eduTable.border="1";
  var tr1="<tr><td>Degree</td><td>Institute</td><td>Data</td></tr>";
  //eduTable.innerHTML=tr1;
  var tr2="";
  for(var i=0; i<edu.length; i++){
    tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
  }
  eduTable.innerHTML=tr1+tr2;
    child2.appendChild(eduTable);
}

function skills(skil) {
  var skilHeading=document.createElement("h3");
  skilHeading.textContent="Skills";
  child2.appendChild(skilHeading);
  var skilHr=document.createElement("hr");
  child2.appendChild(skilHr);
  var ul=document.createElement("ul");
  child2.appendChild(ul);

  for (var i = 0; i < skil.length; i++) {
    var li=document.createElement("li");
    li.textContent=skil[i].title+":"+skil[i].content;
    ul.appendChild(li);
  }
}
