
var res = ""
var resReady = false
function apendToDisplay(input){
    //display.value += input;

    //test.push(input)
    //alert(test)
    if (resReady == false){
        var display = document.getElementById("display")
        var eredmeny = display.innerText += input
        res = eredmeny
    }else{
        torol()
    }
}

function torol(){
    var display = document.getElementById("display")
    display.innerText=""
    resReady = false

}

function resoult(){
    if (resReady == false){
        try{
            var eredmeny = eval(res)
            var display = document.getElementById("display")
            var eredmesny = display.innerText += "="+eredmeny
            resReady = true

        }catch(error){
            var display = document.getElementById("display")
            display.innerText="Error"
        }
    }else{
        torol()
    }
}
