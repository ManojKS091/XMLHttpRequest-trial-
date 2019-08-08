var head=document.querySelector('header');
var section=document.querySelector('section');
var requestURl="https://manojks091.github.io/XMLHttpRequest-trial-/Data.json";
var request=new XMLHttpRequest();
request.open('GET',requestURl);
request.responseType="json";
request.send();
request.onload=function(){
    var superHeroes=request.response;
    populateHeader(superHeroes);
    showInfo(superHeroes);
}

function populateHeader(superHeroes){
    var h1=document.createElement('h1');
    h1.textContent=superHeroes['squadName'];
    head.appendChild(h1);
    
    var para=document.createElement('p');
    para.textContent="Hometown: "+superHeroes['homeTown']+" // Formed: "+superHeroes['formed'];
    head.appendChild(para);
}


function showInfo(superHeroes){
    var members=superHeroes['members'];
    for(var i=0;i<members.length;i++){
    var article=document.createElement('article');
    var h2=document.createElement('h2');
    var para1=document.createElement('p');
    var para2=document.createElement('p');
    var para3=document.createElement('p');
    var list=document.createElement('ul');
    h2.textContent=members[i]['name'];
    article.appendChild(h2);
    para1.textContent="Secret identity: "+members[i]['secretIdentity'];
    article.appendChild(para1);
    para2.textContent="Age: "+members[i]['age'];
    article.appendChild(para2);
    para3.textContent="Superpowers:";
    article.appendChild(para3);
    var listcount=members[i]['powers'];
    for(var j=0;j<listcount.length;j++){
     var listitem=document.createElement('li');
        listitem.textContent=members[i]['powers'][j];
        list.appendChild(listitem);
    }
        article.appendChild(list);
        section.appendChild(article);
    }
}