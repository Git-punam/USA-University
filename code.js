const url="http://universities.hipolabs.com/search?country=United+States";

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    data.forEach(fetchUniversityName);
    function fetchUniversityName(item,index)
    {
        let universityName = item.name;
        let node = document.createElement("li");
        let textnode = document.createTextNode(universityName);
        node.appendChild(textnode);
        node.setAttribute("class","list-university")
        document.querySelector('.dropdown-menu').appendChild(node);
    }
    let lengthData = data.length;
    for( let i=0;i<lengthData;i++)
    {
        document.querySelectorAll(".list-university")[i].addEventListener('click',function(){
            let uniUrl = data[i].web_pages[0];
            let new_url = document.createElement("a");
            new_url.setAttribute("href",uniUrl)
            new_url.setAttribute("class","usa-university")
            document.querySelector(".show-link").appendChild(new_url);
            document.querySelector(".usa-university").innerHTML = "Click here to go to the website of "+data[i].name
        })
    }



})