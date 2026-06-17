
arr = ["name","john","aaa"]

let htmltext1 = '';

for(i=0; i < arr.length; i++) {
        const htmltext = arr[i]
        const htmltext1 += htmltext;
        document.querySelector('.toDoList').innerHTML = `<p>${htmltext1}</p>`
    }

function function1 () {

    const textvalue = document.querySelector('.text-input').value
    arr.push(textvalue)

    document.querySelector('.text-input').value = '';
}

// running code after click
document.querySelector('.btn-submit').addEventListener('click', function1);










