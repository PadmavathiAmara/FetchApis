let toHtml = document.getElementById("fromJs");
let users;
const getUsers = async () => {
    let fetched = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((res) => {
    users = res.users;
    console.log(users);
    showUsers();
});
}
getUsers();

function showUsers (){
    console.log(users);
    let final = users.map((x) =>{
        return `<article>
        <img src="${x.image}" alt="robot">
        <section>
            <h1>${x.firstName + " " + x.lastName}</h1>
            <h3>${x.company.title}</h3>
            <p>${x.email}</p>
            <address>${x.address.city},${x.address.state}</address>
            
        </section>
        <button>Know more!</button>
    </article>`
    });
    toHtml.innerHTML = final.join("");
};
