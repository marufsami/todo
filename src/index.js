let input = document.getElementById('name');
let btn = document.getElementById('add');
let result = document.getElementById('res');


btn.addEventListener('click', function() {
    let a = document.createElement('p');
    // a.setAttribute('style', 'border:2px solid black')
    let b = document.createTextNode(input.value);
    input.value = "";
    a.appendChild(b);
    result.appendChild(a);
    a.setAttribute("id", "name")
    let cbtn = document.createElement('button');
    let vbtn = document.createTextNode('x');
    cbtn.appendChild(vbtn);
    a.appendChild(cbtn);
    cbtn.setAttribute("id", "add");
    cbtn.addEventListener('click', function() {
        a.remove();
    })
})