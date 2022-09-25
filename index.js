
 var list = []
function entry() {
    const myList = document.getElementById("listdisplay");
    let ageInp = parseInt(document.getElementById('ageInp').value)
    let nameInp = document.getElementById('nameInp')
    let btnInp = document.getElementById('submit')
    let RnameTV = document.getElementById('nameTV')
    let RageTV = document.getElementById('ageTV')
    let acceptance = document.getElementById('acceptanceTV')
    RnameTV.textContent = nameInp.value
    RageTV.textContent = ageInp.valueOf()

    for (let i = 0; i < list.length; i++) {
        
        const itemList = document.createElement('rectangle');
        itemList.textContent = list[i];
        myList.append(itemList);
    }

    if (ageInp >= 18) {
        acceptance.textContent = nameInp.value + " You may Enter"

    }else {
        acceptance.textContent = "Entry Denied due to young age"
    }
    var view = ""
    
   
    
        view = nameInp.value + " " + ageInp.valueOf() 
        list.push(view)
    
    
    
    

}


