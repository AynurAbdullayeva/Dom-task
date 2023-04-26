
let box = document.createElement("div");
box.setAttribute("class", "box");
box.style.width = "960px";
box.style.height = "360px";
box.style.backgroundColor = "black";
let text = document.createElement("h3");
text.innerText = "960x360px";
text.style.color = "white";
text.style.display = "flex";
text.style.alignItems = "center";
text.style.justifyContent = "center";
text.style.padding = "18%"
box.append(text);


let box2 = document.createElement("div");
box2.setAttribute("class", "box2");
box2.style.width = "290px";
box2.style.height = "180px";
box2.style.backgroundColor = "black";
let text2 = document.createElement("h4");
text2.innerText = "290x180px";
text2.style.color = "white";
text2.style.display = "flex";
text2.style.alignItems = "center";
text2.style.justifyContent = "center";
text2.style.padding = "25%"
box2.append(text2);


let box3 = document.createElement("div");
box3.setAttribute("class", "box3");
box3.style.width = "290px";
box3.style.height = "180px";
box3.style.backgroundColor = "black";
box3.style.marginLeft = "45px";
box3.style.marginRight = "45px";
let text3 = document.createElement("h4");
text3.innerText = "290x180px";
text3.style.color = "white";
text3.style.display = "flex";
text3.style.alignItems = "center";
text3.style.justifyContent = "center";
text3.style.padding = "25%"
box3.append(text3);


let box4 = document.createElement("div");
box4.setAttribute("class", "box4");
box4.style.width = "290px";
box4.style.height = "180px";
box4.style.backgroundColor = "black";
let text4 = document.createElement("h4");
text4.innerText = "290x180px";
text4.style.color = "white";
text4.style.display = "flex";
text4.style.alignItems = "center";
text4.style.justifyContent = "center";
text4.style.padding = "25%"
box4.append(text4);


let mix = document.createElement("div");
mix.style.width = "960px";
mix.style.height = "300px";
mix.style.display = "flex"
mix.style.alignItems = "center";
mix.style.justifyContent = "center";


let container = document.createElement("div");
container.style.width = "100vw";
container.style.height = "700px";
container.style.paddingLeft = "15%";
container.style.paddingTop = "20px";


let i = document.createElement("i");
i.textContent = "Indonectetus facilis";

let p = document.createElement("p");
p.textContent = "Nullamlacus dui ipsum consuque lobarttis non quisque morbi penas dapilbum orna.";

let span=document.createElement("span");
span.textContent="Read More >";
span.style.color="orange";
span.style.display="flex"
span.style.justifyContent="right"

let txt1=document.createElement("div");
txt1.style.maxWidth="290px";
txt1.style.height="100px";


let i1 = document.createElement("i");
i1.textContent = "Indonectetus facilis";

let p1 = document.createElement("p");
p1.textContent = "Nullamlacus dui ipsum consuque lobarttis non quisque morbi penas dapilbum orna.";

let span1=document.createElement("span");
span1.textContent="Read More >";
span1.style.color="orange";
span1.style.display="flex"
span1.style.justifyContent="right"

let txt2=document.createElement("div");
txt2.style.maxWidth="290px";
txt2.style.height="100px";
txt2.style.marginLeft="50px";
txt2.style.marginRight="50px";


let i2 = document.createElement("i");
i2.textContent = "Indonectetus facilis";

let p2 = document.createElement("p");
p2.textContent = "Nullamlacus dui ipsum consuque lobarttis non quisque morbi penas dapilbum orna.";

let span2=document.createElement("span");
span2.textContent="Read More >";
span2.style.color="orange";
span2.style.display="flex"
span2.style.justifyContent="right"

let txt3=document.createElement("div");
txt3.style.maxWidth="290px";
txt3.style.height="100px";


let texts=document.createElement("div");
texts.style.width="960px";
texts.style.height="300px";
texts.style.display="flex";
texts.style.alignItems="center";
texts.style.marginTop="-10%"



let body = document.body;
body.append(box, box2, box3, box4, mix, container);

mix.append(box2, box3, box4);
container.append(box, mix, texts);

txt1.append(i,p,span);
txt2.append(i1,p1,span1);
txt3.append(i2,p2,span2);
texts.append(txt1, txt2, txt3);