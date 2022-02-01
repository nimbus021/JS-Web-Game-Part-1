//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)

function newImage (url, left, bottom) {
    let assets = document.createElement('img')
assets.src = url
assets.style.position = 'fixed'
assets.style.left = left + 'px'
assets.style.bottom = bottom + 'px'
document.body.append(assets)
}

newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png', 150,200)
newImage('assets/well.png',500,425)

function newItem(url, left, bottom) {
    let item =document.createElement('img')
    item.src = url
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
  }

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png',165,185)
newItem('assets/staff.png', 600,100)

