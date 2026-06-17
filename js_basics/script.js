
arr = ["Lexi","john","Rexa"]



function test () {
    let htmltext = '';

    for(let i=0; i < arr.length; i++) {
        htmltext += `
            <p>${arr[i]}</p> 
            <input type="date"> 
            <button onclick="deleteItem(${i})">Delete</button>`
        document.querySelector('.toDoList').innerHTML = htmltext
    }
}

function deleteItem (i) {
    arr.splice(i)
    test()
}

function function1 () {

    const textvalue = document.querySelector('.text-input').value
    arr.push(textvalue)
    document.querySelector('.text-input').value = '';
    console.log(arr)
    test()
}

// running code after click
document.querySelector('.btn-submit').addEventListener('click', function1);



