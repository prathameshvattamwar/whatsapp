let btns = document.querySelectorAll('.header-bottom-content button');
let status_area = document.querySelector('.status-area');
let contact_list = document.querySelector('.contact-list');
let calls_area = document.querySelector('.calls-area');
let community_area = document.querySelector('.community-area');
let chat = document.querySelector('.chatBtns');
let draw = document.querySelector(".statusBtns1");
let draw2 = document.querySelector(".statusBtns");
let call = document.querySelector(".callBtns");

// for chat area

let userContactList = document.querySelectorAll('.userContactList li');
let contact_chat_area = document.querySelector('.contact-chat-area');
let back = document.querySelector('.profile-contact .fa-arrow-left');
let profile_contact_img = document.querySelector('.profile-contact img');
let profile_contact_name = document.querySelector('.contact-name h5');

// for status area

let status_list = document.querySelectorAll('.status-list li');
let contact_status_area = document.querySelector('.contact-status-area');
let status_back = document.querySelector('.profile-status .fa-arrow-left');
let profile_status_img = document.querySelector('.profile-status img');
let profile_status_name = document.querySelector('.status-contact-name h5');

// for status area
status_list.forEach((element, index)=>{
    element.setAttribute('id', `status_btn${index}`)
    element.addEventListener('click', ()=>{
        if(element.id === `status_btn${index}`){
            contact_status_area.style.display = "block"; 
            setTimeout(function(){
                contact_status_area.style.display = "none"; 
            },5000)
        }
        profile_status_img.src = element.firstElementChild.childNodes[1].src;
        profile_status_name.innerHTML = element.children[1].firstElementChild.innerHTML;
    })
})

status_back.addEventListener('click',()=>{
    contact_status_area.style.display = "none";
})

// bottom corner icons
const show=()=>{
    // alert("msg from:Prathamesh Vattamwar⚠️ Note: This is just prototype WhatsApp application.Currently is in updating phase⚠️ Now click 'OK' to continue")
    chat.style.display = "block";
    draw.style.display = "none";
    draw2.style.display = "none";
    call.style.display = "none";
    warn.style.display = "none";
}

// chat area

btns.forEach((element)=>{
    element.addEventListener('click',()=>{

        document.querySelector('.active').classList.remove('active');

        if(element.id === "status"){
            status_area.style.left = "0";
            contact_list.style.left = "-100%";
            calls_area.style.left = "100%";
            community_area.style.left = "-100%";
            element.classList.add('active');
            chat.style.display = "none";
            draw.style.display = "block";
            draw2.style.display = "block";
            call.style.display = "none";
        }
        else if(element.id === "chats"){
            status_area.style.left = "100%";
            contact_list.style.left = "0";
            calls_area.style.left = "100%";
            community_area.style.left = "-100%";
            element.classList.add('active');
            chat.style.display = "block";
            draw.style.display = "none";
            draw2.style.display = "none";
            call.style.display = "none";
        }
        else if(element.id === "calls"){
            calls_area.style.left = "0";
            status_area.style.left = "-100%";
            contact_list.style.left = "-100%";
            community_area.style.left = "-100%";
            element.classList.add('active');
            chat.style.display = "none";
            draw.style.display = "none";
            draw2.style.display = "none";
            call.style.display = "block";
        }
        else{
            calls_area.style.left = "100%";
            status_area.style.left = "100%";
            contact_list.style.left = "100%";
            community_area.style.left = "0";
            element.classList.add('active');
            chat.style.display = "none";
            draw.style.display = "none";
            draw2.style.display = "none";
            call.style.display = "none";
        }
    })
}) 

userContactList.forEach((element, index)=>{
    element.setAttribute('id',`contact_btn${index}`)
    element.addEventListener('click', ()=>{
        if(element.id === `contact_btn${index}`){
            contact_chat_area.style.display = "block"; 
        }
        profile_contact_img.src = element.firstElementChild.childNodes[1].src;
        profile_contact_name.innerHTML = element.children[1].firstElementChild.innerHTML;
    })
}) 

back.addEventListener('click',function(){
    contact_chat_area.style.display = "none";
})


// for warning msg box 
let warn = document.querySelector('.message-box');
let updateElements = document.querySelectorAll('[id="update"]');
let btn = document.querySelector(".btn");

updateElements.forEach(function(element) {
  element.addEventListener("click", function() {
    warn.style.display = "flex";
  });
});

btn.addEventListener('click',()=>{
    warn.style.display = "none";
})

let mic_i = document.querySelector(".mic i");
let mic = document.querySelector(".mic");
let plane = document.querySelector(".plane");

function change() {
    let inputVal = document.getElementById("input-msg").value;

  if (inputVal) {
    mic_i.style.opacity = "0";
    plane.style.opacity = "1";
  } else {
    mic_i.style.opacity = "1";
    plane.style.opacity = "0"; 
  }
}

plane.addEventListener("click",function(){
    let inputField = document.getElementById("input-msg");
    inputField.value = ""; 
    mic_i.style.opacity = "1";
    plane.style.opacity = "0"; 
})