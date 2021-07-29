let element = document.createElement('div') 

document.body.appendChild(element) 

let ul = document.createElement('ul') 

for (let i=0; i < 3; i++) {
    let li = document.createElement("li")
    li.innerHTML = (i + 1).toString()
    ul.appendChild(li)
    }

element.appendChild(ul)

document.body.remove("main")

let h1 = document.createElement("h1")
h1.id = "victory"
let newHeader = document.head.appendChild(h1)

// let newHeader = document.querySelector('h1#victory')
newHeader.innerHTML = "is the champion"