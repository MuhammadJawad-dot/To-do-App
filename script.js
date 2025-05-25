let input=document.querySelector("#input")
let btn=document.querySelector("#btn")
let ul=document.querySelector("ul")
let select=document.querySelector("#select")
let filter=document.querySelector("#filter")
// let btn_c=document.querySelector("#btn_c")
// let btn_p=document.querySelector("#btn_p")
let task=[];
btn.addEventListener("click",()=>{
          
    if(input.value.trim()!==""&& select.value!=="Category"){
        
        let create=document.createElement("li")
        create.textContent=`${input.value} [${select.value}]`
        let detele_btn=document.createElement("button")
        detele_btn.textContent="Delete"
        let check_box=document.createElement("input")
        check_box.type="checkbox"
        // let option=select.value;
        // task.push(option)
        task.push({li:create, checkbox:check_box});
        ul.appendChild(create)
        create.appendChild(check_box)
        
        create.appendChild(detele_btn)

        filter.disabled=false;
        if (filter.value !== "Filter") {
            filter.dispatchEvent(new Event("change"));
        }
        
        

        input.value=" "
        select.value="Category"

        detele_btn.addEventListener("click",()=>{
            create.remove();
            
            console.log(task)
        })
        
    }
    else {
        alert("Please fill it Completely")
    }
    console.log(task)
})

filter.addEventListener("change",()=>
{
    // if(input.value.trim()===""&&select.value==="Category")
    // {
        task.forEach(option=>{
            let sel=filter.value;
            if (sel === "Completed" && option.checkbox.checked) {
                option.li.style.display = "flex";
                
              } 
              else if(sel==="Pending"&& !option.checkbox.checked)
              {
                option.li.style.display = "flex";
              }
              else if(sel==="All")
                {
                  option.li.style.display = "flex";
                }
                else{
                    option.li.style.display="none"
                }

                
            
        });
       
    // }
    // else
    // {
    //     alert("First Add the task")
    //     filter.value="Filter"
    // }
    
});





















// btn_c.addEventListener("click",()=>{
//     task.forEach(travers=>{
//         if(travers.checkbox.checked){
//             travers.li.style.display="flex"
//            console.log(task)
//         }
//         if(travers.checkbox.checked===0){
//             alert("You completed all task")


//         }
//         else{
//             travers.li.style.display="none"
           
            

//         }
//     })
// })

// btn_p.addEventListener("click",()=>{
//     task.forEach(pre=>{
//         if(!pre.checkbox.checked){
//             pre.li.style.display="flex"
//         }
//         else{
//             pre.li.style.display="none"
//         }
//     })
// })




