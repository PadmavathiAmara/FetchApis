let parent = document.getElementById("parent");
let sortButton = document.getElementById("btn");
let usersNames;
const getUsers = async () => {
    await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
        usersNames = data.users;
    })
    
    showUsers();
    
}

getUsers();

function showUsers () {
    let temp = usersNames.map((x) => {
        return `<p> ${x.firstName} ${x.lastName} </p>`
    });
   
    parent.innerHTML = temp.join("");
}
const sortFn = () => {
    
    let sorted = usersNames.sort();
    console.log(sorted);
}

sortButton.addEventListener('click' , sortFn);