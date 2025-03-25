const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Puttting btn-generate Id inti a variable called generateEl
let btnGenerateEl=document.getElementById("btn-generate")
console.log(btnGenerateEl)
btnGenerateEl.addEventListener("click", myPassword)
let line=document.getElement("special-line")
line.addEvenetListener("click",text)
function myPassword(){
    let password1=""
    let password2=""
    for(let i=0; i<15; i++){
        let randomIndex1=Math.floor(Math.random() * characters.length)
        let randomIndex2=Math.floor(Math.random() * characters.length)  
        password1 +=characters[randomIndex1]
        password2 +=characters[randomIndex2]
        console.log(password1) 
    }
    
    document.getElementById('btn-password1').textContent = password1
    document.getElementById('btn-password2').textContent = password2
    
   let btnPassword1=document.getElementById("btn-password1")
   //Creating a temporary input element
//    let tempInput = document.createElement("input")
   //Putting the value of the password into temporary input element
   
    tempInput.value=btnPassword1.textContent
//    //Add password to the end of the input element
//    document.body.appendChild(tempInput)

   //Select All
   textInput.select()
   //Copy text to clipboard
   navigator.clipboard.writeText(tempInput.value)
//    //Delete the temporary input element
//    document.execCommand("copy")
   //Remove the temporary input element
//    document.body.removeChild(tempInput)
  //Inform the user that the password hads been copied successfully
  alert("Password copied successfully")
}



// function myPassword(){  
//     let password = "";
//     for(let i = 0; i < 12; i++){
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }
//     document.getElementById("btn-password1").textContent = password;
//     document.getElementById("btn-password1").select();
//     document.execCommand("copy");
//     alert("Password copied to clipboard!");  
// }