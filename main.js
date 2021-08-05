

let headerBtn=document.querySelector('header .container button');
let nav=document.querySelector('header .container .box');
//console.log(headerBtn);

headerBtn.addEventListener('click',()=>{
    // console.log();
    if(nav.style.display == 'block'){
        
        headerBtn.style.boxShadow=' inset 2px 2px 2px var(--light-color),inset -2px -2px 2px var(--dark-color)';
                   
        for(let i=0;i<headerBtn.children.length;i++){
            headerBtn.children[i].style.borderColor="black";
            headerBtn.children[i].style.backgroundColor="black";
    }
        nav.style.display='none';
        
    }else{
        headerBtn.style.boxShadow=' inset 2px 2px 2px var(--dark-color),inset -2px -2px 2px var(--light-color)';
        for(let i=0;i<headerBtn.children.length;i++){
            headerBtn.children[i].style.borderColor="red";
            headerBtn.children[i].style.backgroundColor="red";
        }
        // headerBtn.hover(function myfunc2(){
        //         for(let i=0;i<headerBtn.children.length;i++)
        //         headerBtn.children[i].style.borderColor="red";
        // })    
        nav.style.display='block';
    }
    

})
// document.addEventListener('DOMContentLoaded', event => {

    var firebaseConfig = {
        apiKey: "AIzaSyAFWKWBtqMyTC5er2LABNPknw_rw5MlROo",
        authDomain: "testing-80dfb.firebaseapp.com",
        databaseURL: "https://testing-80dfb.firebaseio.com",
        projectId: "testing-80dfb",
        storageBucket: "testing-80dfb.appspot.com",
        messagingSenderId: "166369762396",
        appId: "1:166369762396:web:ddabe1f88f7c9bba495a99",
        measurementId: "G-5Z0WEPGL7H"
      };
      firebase.initializeApp(firebaseConfig);
      const db=firebase.firestore();


    // document.createElement('div')
    // appendChild(document.createTextNode(''))
      
let fname,email,subject,message,isLoading,elemp;
isLoading=document.getElementById('btn').disabled;
isLoading=false;
console.log()
elemp= document.querySelector('.MsgBox > p')

function removeMsgBox(){
    if(elemp || elemp.innerText)
    elemp.innerText=null;
}
function formValidation(){
    fname=document.getElementById('name').value;
    email=document.getElementById('email').value;
    subject=document.getElementById('subject').value;
    message=document.getElementById('text-box').value;

    

    
    elemp.style.display='block';

    if(!fname || !email || !subject || !message){
    elemp.innerText='None of entry is allowed to be null'
    
        return 1;
    }
    else if(subject.split(' ').length<2){
    elemp.innerText='Subject is too small'
    
        console.log("");
        return 1;
    }
     
    return 0;
    
}

let forms = document.getElementById('form');
forms.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(isLoading)
    return ;
    else
    

    if(elemp || elemp.innerText)
    elemp.innerText=null;
    console.log()
    if(formValidation())
    return 
    isLoading=true;
    // console.log(fname);

    db.collection('portfolio-contact').add({
        email:email,
        msg:message,
        name:fname,
        subject:subject,
        timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        elemp.innerText='your msg has been successfully sent';
        isLoading=false;
    }).catch((err)=>{
        elemp.innerText=err;
        isLoading=false;
    })
    
})
