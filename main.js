
var res = ""
var resReady = false
a = "12.0012"



function apendToDisplay(input){
    //display.value += input;

    //test.push(input)
    //alert(test)
    if (resReady == false){
        
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
            var display = document.getElementById("display")

            resReady = true
            var eredmeny = String(eval(res))
            console.log(eredmeny)
            
            if (res == "") {
                var display = document.getElementById("display")
                var eredmesny = "Error: Perform an operation"
                resReady = true
            }else if (eredmeny != "Infinity"){
                var display = document.getElementById("display")
                var eredmesny = display.innerText += "="+eredmeny
                resReady = true
            }else{
                var display = document.getElementById("display")
                display.innerText="Error: cannot be divided by 0"
                resReady = true
            }
            console.log(eredmeny.length)
            if (eredmeny.length >= 6){
                var display = document.getElementById("display")
                display.innerText=""
                display.innerText="="+eredmeny
                resReady=true
            }
            
            

        }catch(error){
            var display = document.getElementById("display")
            display.innerText="Error"
            resReady = true
        }
    }else{
        torol()
    }
}

function pi(){
    var pi = 3.14
    var display = document.getElementById("display")
    display.innerText += pi
}


