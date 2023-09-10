/*1) https://api.sampleapis.com/wines/reds
Write a function (fetchWines) which has no arguments ->
use fetch api from above link ,
and return all the wines.*/
//method1
const getData = async () => {
    const res = await fetch("https://api.sampleapis.com/wines/reds");
    let value = await res.json();
    value.filter((x)=>console.log(x.wine));
}
console.log(getData());
//method2 
const getData1 = async() => {
    await fetch("https://api.sampleapis.com/wines/reds")
    .then((res) => res.json())
    .then((data) => data.map((x)=> console.log(x.wine)))
    .catch((err) => console.log(err)); 
}
console.log(getData1());

/*2)https://dummyjson.com/users
a) Write a function which returns all the users whose hair color is 'brown'
b) Write a function which returns all the users whose company postal code is '37076'.
c) Write a function which accepts one argument (OS) and return all the users who are using that particular OS
(OS- Operating system)*/
//method 1
const fetchHairColors = async () => {
  let result = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users.filter((x)=>(x.hair.color === 'Brown')))
    .catch((err) => console.log(err));
    console.log(result);
}
console.log(await fetchHairColors());
//method 2
const fetchHairColors1 = async (colors) => {
    let result = await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => data.users.filter((x)=>{
        if(x.hair.color === colors)
        {
            return x;
        }
    }))
      .catch((err) => console.log(err));
      console.log(result);
  }
  console.log(await fetchHairColors1("Brown"));

const fetchPostalCode = async () => {
    let result = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users.filter((x) =>(x.address.postalCode == "37076")|| (x.company.address.postalCode == "37076")));
    return result;
}
console.log(await fetchPostalCode());

const fetchOS = async (OS) => {
    let result = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users.filter((x) => (x.userAgent.indexOf(OS)>-1)))
    return result;
}
console.log(await fetchOS("Linux"));