let para=document.getElementById("para")

let add = document.querySelector('#add')
add.addEventListener("click" ,function(){
   let formContainer = document.querySelector(".formContainer") 
    formContainer.style.display = "flex"
})
let myLibrary = []

function Book(title,author, pages){
    this.title= title;
    this.author= author;
    this.pages= pages;
    
}

let form = document.getElementById('form')
 form.addEventListener("submit",addBook)

 function reset(){
     form.reset()
 } 

function addBook(e){
    
    let title = document.getElementById('title').value ;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('type').value;
    
    
    let newBook = new Book(title,author,pages)
    console.log(newBook)
    if(validate(newBook)){
        myLibrary.push(newBook)
        if(para.innerHTML="SUCCESSFULLY  ADDED  THE   BOOK")
        {
            para.style.display="flex"
            setTimeout(() => {
                para.style.display="none"
            }, 3000);
        }
        document.getElementById("para").style.color="green"   
    }
    else{
        
        if(para.innerHTML="You don't give any information, Please give information...")
        {
            para.style.display="flex"
            setTimeout(() => {
                para.style.display="none"
            }, 3000);
        }
        document.getElementById("para").style.color="red"
        
        
        
    }
    
    console.log(myLibrary)
     e.preventDefault()
     books()
    reset()
    
     
}
function remove(index){
    
    myLibrary.splice(index,1)
    books()
}   

function books(){
   
    let library = document.getElementById("library")
    library.innerHTML=''
    for(let i= 0; i<myLibrary.length; i++){
        let book = (myLibrary[i])
        let div = document.createElement('div')
        div.classList.add('divs');
    div.innerHTML= `<p>${book.title}</p>
                     <p>${book.author}</p>
                     <p>${book.pages}</p>
                     <button id="remove" onclick="remove(${i})" >remove</button>`
    library.appendChild(div)
    
    }
    
}
function validate(newBook){
    if(newBook.title.length<2|| newBook.author.length<2||newBook.pages.length<2){
        return false
    }
    else{
        return true
    }
}

let submit =document.getElementById('submit')
submit.addEventListener("click",function(){
    let formContainer = document.querySelector(".formContainer")
    formContainer.style.display="none"
})