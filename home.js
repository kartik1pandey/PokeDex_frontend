window.onload = function(){
    window.headbox=headbox;
    window.chatbox=chatbox;
    document.getElementById('explore').addEventListener('click',function(){
        headbox.style.display="none";
        chatbox.style.display="flex";
    })
}