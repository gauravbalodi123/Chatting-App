
const socket = io();

$('#chat-box').hide();

$('#send-btn').click(()=>{
    const msgText = $('#inp').val();
    // console.log(msgText);


    socket.emit('send-msg' ,{
        msg:msgText
    })

    $('#inp').val("");
})

socket.on('received-msg' , (data)=>{
    // console.log(data);
    $('#chat').append(`<li class="border p-2 ms-0  rounded-pill mb-2"><span class="fw-bold">${data.username}</span> - <span>${data.msg}</span></li>`);
    $('#chat').scrollTop($("#chat").outerHeight());
})


$('#login-btn').click(()=>{
    const username = $('#username').val();
    // console.log(username);

    socket.emit('login' , {
        username:username
    });

    $('#login').hide();
    $('#chat-box').show();

    // $('#username'.val(''));
    $('#username').val("");
})

