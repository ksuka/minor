function find_edit(){
    const item  = document.getElementById('surname')
    item.innerHTML="<b>Sikacheva</b>"

    const item2  = document.getElementById('name')
    item2.innerHTML="<b>Kseniya</b>"

    const item3  = document.getElementById('year')
    item3.innerHTML="<b>2000</b>"
    
    const name2  = document.getElementById('name2')
    name2.innerHTML="<b>Kirillovna</b>"
}



const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)