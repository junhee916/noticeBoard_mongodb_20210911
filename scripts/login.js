const loginBtn = document.getElementById('loginBtn')

const signupBtn = document.getElementById('signupBtn')

loginBtn.addEventListener('click', function(){

    const email = $('#email').val()

    const password = $('#password').val()

    $.ajax({
        type : "POST",
        url : "/user/login",
        data : {
            email : email,
            password : password
        },
        success : function(){
            window.location.href = "/board"
        }
    })
})

signupBtn.addEventListener('click', function(){

    window.location.href = "/signup"
})