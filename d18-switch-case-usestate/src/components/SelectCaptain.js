import React from 'react'

function SelectCaptain() {
  return (



<div>
    
    <form>
    <div>
        <label>SelectCaptain</label>
        <select onChange={(eo)=>{
            console.log(eo.target.value);
            let SelectCaptain=eo.target.value;
                if(SelectCaptain=="India")
                {
                console.log("Rohit Sharma")
                }else if(SelectCaptain=="South Africa"){
                    console.log("Markram")
                }else if(SelectCaptain=="USA"){
                    console.log("Aaron Jones")
                }else if(SelectCaptain=="Australia"){
                    console.log("Marsh")
                }else if(SelectCaptain=="Afghanistan"){
                    console.log("Rashid Khan")
                }else if(SelectCaptain=="West Indies"){
                    console.log("Powell")
                }else if(SelectCaptain=="England"){
                    console.log("Buttler")
                }else if(SelectCaptain=="Bangladesh"){
                    console.log("Najmul Hossain")
                }else{
                    console.log("Not Qualified")
                }
                switch(SelectCaptain){
                    case"India":
                    console.log("Rohit Sharma");
                    break;
                    case"South Africa":
                    console.log("Markram");
                    break;
                    case"USA":
                    console.log("Aaron Jones");
                    break;
                    case"Ausraila":
                    console.log("Marsh");
                    break;
                    case"Afghanistan":
                    console.log("Rashid Khan");
                    break;
                    case"West Indies":
                    console.log("Powell");
                    break;
                    case"England":
                    console.log("Rohit Sharma");
                    break;
                    case"Bangladesh":
                    console.log("Najmul Hossain");
                    break;
                    default:
                        console.log(`Not Qualified`)
                }
        }}>
            <option>India</option>
            <option>South Africa</option>
            <option>Australia</option>
            <option>Afghanistan</option>
            <option>West Indies</option>
            <option>England</option>
            <option>Bangladesh</option>
            <option>USA</option>
            <option>Sri Lanka</option>    
        </select>
    </div>
    </form>
</div>
  )
}

export default SelectCaptain
