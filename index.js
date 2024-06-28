
const animals = []
const electronics = []


function handleKhodam() {
    const name = document.getElementById("selectName").value
    let khodam
    if (name === "ramstuy") {
            khodam = "nasi goreng"
    }else if(name.split(" ")[0] == "c" && name.split(" ")[1] == "i"){
                khodam = ""
    }else{
        randomKhodam(name)
    }
    name.innerHtml = khodam
    return
}


function randomKhodam(){
    
}