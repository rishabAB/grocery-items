var inputText=document.getElementById("input-box");
var mybutton=document.querySelector(".btn-list");
const li=document.getElementById("mylist");

var clear_items=document.querySelector(".fixed");

var isCreateNew=true;
let tochange = "";

var isEdit=true;

    
function createItem(){
    if(inputText.value!="" && isCreateNew ){
    let parent = document.createElement('div');
        parent.classList.add('grocery-item');
        var value=inputText.value;

     parent.innerHTML = `<span>${value}</span>
     <div class="btn-container"> <i class="fa-solid fa-pen-to-square"  style ="cursor:pointer" onclick="edit()"></i> 
     <i class="fa-solid fa-trash"  style ="cursor:pointer" onclick="del()"></i> 
     </div>` ;

     let added_Value_Text=`${value} has been added to your list`;
 
     
     li.appendChild(parent);
     inputText.value="";

     addCss(added_Value_Text);
    }
    
    else if(!isCreateNew)
    {
        
        document.querySelector(".fa-pen-to-square").disabled = false;
        document.querySelector(".fa-trash").disabled=false;
        clear_items.disabled=false;
        isCreateNew=true;
        edit();
       
    }
    
}

function addCss(deleted_Item_Text){
   
    let mytxt = document.createElement('div');
    mytxt.classList.add('success');
    mytxt.innerText = deleted_Item_Text;
    mytxt.style.color='#31d615';
   

    li.appendChild(mytxt);
    setTimeout(function(){
        li.removeChild(mytxt);

        mytxt.classList.remove('success');
    }, 2000)
   
    
}


function removeItems(){
   
    let items = document.querySelectorAll('.grocery-item');
    
    if(items.length > 0){
      
        items.forEach(function(element){
            li.removeChild(element);
        })

        let deleted_Item_Text="All Items have been deleted";
        let mytxt = document.createElement('div');
         mytxt.classList.add('success');
        mytxt.innerText = deleted_Item_Text;
        mytxt.style.margin="20px";
        mytxt.style.color='#31d615';
           
        li.appendChild(mytxt);
        setTimeout(function(){
        li.removeChild(mytxt);
        
        mytxt.classList.remove('success');
            }, 2000)
             
}
else{
   
    let txt=`Please add items in your list`;
    let mytxt = document.createElement('div');
    mytxt.classList.add('addany');
    mytxt.innerText = txt;
    mytxt.style.color="#e01449";
  
    li.appendChild(mytxt);
    setTimeout(function(){
        li.removeChild(mytxt);

        mytxt.classList.remove('addany');
    }, 2000)
}

if(mybutton.innerText=='Edit')
    mybutton.innerText='Submit';
}

function del(){
    if(document.querySelector(".fa-trash").disabled!=true)
    {
   
    let delt = window.event.target.parentElement.parentElement;
  
    let deleted_Item_Text=delt.innerText;
    li.removeChild(delt);
   
    let removed_Item_Text=`${deleted_Item_Text} has been removed from the list`;
    remove_Css(removed_Item_Text);
    if(mybutton.innerText=='Edit')
    mybutton.innerText='Submit';

    }
}


function remove_Css(deleted_Item_Text){

    let mytxt = document.createElement('div');
    mytxt.classList.add('removing');
    mytxt.innerText = deleted_Item_Text;
    
    mytxt.style.color='#ee5564';
   
    li.appendChild(mytxt);
    setTimeout(function(){
        li.removeChild(mytxt);

        mytxt.classList.remove('removing');
    }, 2000)

}


function edit(){
    
    if(isEdit === true)
    {
        tochange=window.event.target.parentElement.parentElement;
        
        tochange.style.opacity='0.40';
        
        inputText.value=tochange.innerText;
        isCreateNew=false;

        isEdit=false;

        document.querySelector(".fa-pen-to-square").disabled = true;
        document.querySelector(".fa-trash").disabled=true;
        clear_items.disabled=true;
        mybutton.innerText='Edit';

    }
    else{
        if(document.querySelector(".fa-pen-to-square").disabled != true){
           
        tochange.innerHTML=`<span>${inputText.value}</span> <div class="btn-container">
        <i class="fa-solid fa-pen-to-square" onclick="edit()"></i>
       
        <i class="fa-solid fa-trash" onclick="del()"></i> `;
        tochange.style.opacity='1';
        tochange.style.cursor='pointer';
        inputText.value="";
     
        isEdit=true;

        mybutton.innerText='Submit';
       
        }

    }
}
    
 

    







        

      

        
        
    







