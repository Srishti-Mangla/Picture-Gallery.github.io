//API-Call-Section
fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<img src="${values.url}"/>`;
    });
    document.getElementById("APIData").innerHTML=tableData;
})

// Message-Send-Status-Confirm-Alert
function confirmAlert(){
    if(confirm("Click OK to Send Message.")){
        alert("Message sent successfully.");
    }else{
        alert("You cancelled the message.");
    }
}

// Back-to-Top-Button
function topFunction(){
    document.documentElement.scrollTop=0;
}