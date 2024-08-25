const teamSectionDOM = document.getElementById('Team')
const teamMembers = [`Jonas`, `Marytė`, `Petras`, `Ona`, `Arvydas`, `Aldona`, `Zosa`, `Juozapas`, `Juozas`, `Antanas`, `Martynas`, `Aloyzas`, `Anastasija`,];

let membersHTML = '';
for (const name of teamMembers) {
    membersHTML += `<li class="member">${name}</li>`;
}

teamSectionDOM.innerHTML = `<ul>${membersHTML}</ul>`;
    
const membersListDOM = document.getElementsByClassName('member');

for (const memberDOM of membersListDOM){

memberDOM.innerText = '---' + memberDOM.innerText;

}

/* 
failas: header.js
- jis iskvieciamas kiekviename puslapyje
- jame yra funkcija header()
- ji sugeneruoja normalu headeri 

```
<header>
    <img>
    <nav>
        <a Home>
        <a About>
        <a Servives>
    </nav>
</header>
```
- isstatome i HTML ir isitikiname, jog galime naviguoti po projekto puslapius
*/