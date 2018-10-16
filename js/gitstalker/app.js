const searchUser = document.querySelector('#searchUser');
const btn = document.querySelector('.btn');
// user_id = ``;
// user_secret = ``;
const github = new Github();
const ui = new UI();
btn.addEventListener('click', search);

function search(e){
 const name = searchUser.value;
 if(name!== ''){
    github.get(name).then(data =>{
        if (data.message === 'Not Found') {
            ui.profileErr('No Such User!', 'alert alert-danger')
        }else{
            ui.profileShow(data, name)
        }
    })

 }else{
    console.log("please inter a valid name") 
 }
 e.preventDefault();
}