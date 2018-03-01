var chatForm = document.forms.chatForm;

if(chatForm){
    var chatUserName = document.querySelector('#chat-username');
    var chatMessage = document.querySelector('#chat-message');

    chatForm.addEventListener('submit', function ( e ) {
       e.preventDefault();
       showMessage({ //invoking show message and giving arguments
           userName : chatUserName.value,
           message : chatMessage.value
       });
       chatMessage.value = '';//to empty the message field after sending a message
       chatMessage.focus();

    });
    function  showMessage( data ) {
        var chatDisplay  = document.querySelector('.chat-display');
        var newMessage = document.createElement('p');
        newMessage.className = 'bg-success chat-text';
        newMessage.innerHTML = ' <strong>' + data.userName + '</strong> :' +data.message;

        chatDisplay.insertBefore(newMessage, chatDisplay.child);

    }
}
