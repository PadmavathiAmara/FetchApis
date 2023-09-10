
let parent = document.getElementById("parent");
let next = document.getElementById('next');
let prev=document.getElementById('prev');
let posts;
let start = 0;
const getPosts = async (start) => {
    let fetched = await fetch(`https://dummyjson.com/posts?skip=${start}&limit=3`)
        .then((res) => res.json())
        .then(res => {
            posts = res.posts;
            showPosts();
        })

    console.log(posts)
}
getPosts(start);

function showPosts() {
    let temp = posts.map((e) => {
        return `<section><h1>${e.id}</h1>
        <p>${e.title}</p> </section>`
    });

    parent.innerHTML = temp.join("");
}

next.addEventListener('click', () => {
    start += 3;
    getPosts(start);
})


prev.addEventListener('click', () => {
    start -= 3;
    if(start==0){
        start=0
    }
    getPosts(start);
})