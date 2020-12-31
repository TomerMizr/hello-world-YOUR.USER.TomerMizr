console.log("");


fetch('https://reqres.in/api/users?page=2').then(response => response.json())
.then(responseJSON =>ContactList_tomer(responseJSON.data)).catch(err =>
    console.log(err));

    function ContactList_tomer(contacts){
        const Main = document.querySelector("main");
        for(let contact of contacts){
            const section = document.createElement("section");
            section.innerHTML=`
    
    <div class="name" style="display: inline;">
    
    ${contact.first_name + " " + contact.last_name}
    
    </div>
    <img src="${contact.avatar}" alt="contact pic" ></img>
    <div id="email">
    ${contact.email}
    </div>
    
    `;
    Main.appendChild(section);
}
}