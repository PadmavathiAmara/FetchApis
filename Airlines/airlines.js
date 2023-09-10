let mainpart = document.getElementById("content");
let nextbtn = document.getElementById("nextbtn");
let prevbtn = document.getElementById("prevbtn");
let pagesList = document.getElementById("pagesList");
let body = document.getElementsByTagName("body");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let airLinesData;
let a=1,b=2,c=3,d=4;
let start = 0;
let limit = 10;
const getData = async (start,limit) =>{
    body.innerHTML = "Loading..."
    await fetch(`https://api.instantwebtools.net/v1/passenger?page=${start}&size=${limit}`)
    .then((res) => res.json())
    .then((result) => {
        airLinesData = result.data;
        showAirlinesData();
    });
    console.log(airLinesData);
}
 getData(start,limit);

function showAirlinesData() {
    //console.log(airLinesData);
    let final = airLinesData.map((x) =>{
        return  `<article>
        <header>
            <aside>
                <h1>${x.name}</h1>
                <h3>${x.trips}</h3>
            </aside>
                <img src="${x.airline[0].logo}" alt="airline logo">
        </header>
        <section>
            <h1>Airlines Name : ${x.airline[0].name}</h1>
            <h2>Country : ${x.airline[0].country}</h2>
            <h3>Established Year : ${x.airline[0].established}</h3>
            <h4> - "${x.airline[0].slogan}"</h4>
        </section>
    </article>`
    })
    mainpart.innerHTML = final.join("");
}

nextbtn.addEventListener  ('click', () => {
    a++;
    one.innerHTML = a; 
    b++;
    two.innerHTML = b;
    c++;
    three.innerHTML = c;
    d++;
    four.innerHTML = d;
    start += 1;
    getData(start,limit);
}) 

prevbtn.addEventListener  ('click' , () => {
    a--;
    one.innerHTML = a; 
    b--;
    two.innerHTML = b;
    c--;
    three.innerHTML = c;
    d--;
    four.innerHTML = d;
    start -=1;
    if(start==0){
        start=0;
    }
    getData(start,limit);
})

pagesList.addEventListener('click' , (event) => {
    console.log(event.target.value)
    start = 0;
    limit = event.target.value;
    getData(start, limit)
})

    one.addEventListener('click',() => {
        start = one.innerText;
        getData(start,limit);
    })

    two.addEventListener('click',() => {
        start = two.innerText;
        getData(start,limit);
    })

    three.addEventListener('click',() => {
        start = three.innerText;
        getData(start,limit);
    })

    four.addEventListener('click',() => {
        start = four.innerText;
        getData(start,limit);
    })
