let arrUser = []
let objUser = {}
let formre = document.querySelector('.form-regist')
let inpAll = document.querySelectorAll('#form input')
let inpName = document.querySelector('#name')
let inpphone = document.querySelector('#phone')
let inpsename = document.querySelector('#sename')
const form = document.forms.form1

form.addEventListener('change', function() {
    this.btnSubmit.disabled = this.checkValidity() ? false : true
})
Array.from(form.elements).forEach(inp => {
    if(inp.required && inp.type != 'checkbox') {
        inp.addEventListener('change', () => {
            if(inp.checkValidity()) {
                inp.classList.remove('invalid')
                inp.classList.add('valid')
            } else {
                inp.classList.remove('valid')
                inp.classList.add('invalid')
                inp.reportValidity()
            }
        })
    }
})
let reguser = localStorage.getItem('User');
let btn = document.querySelector('.btn').addEventListener('click', () => {
    if(inpAll){
        for( const input of inpAll){
            objUser[input.id] = input.value
            arrUser.push(objUser)
            localStorage.setItem('User', JSON.stringify(arrUser));
        }
        let user = JSON.parse(reguser)
        for(let key of user){
            console.log(key.name);
        }
    }
    
})
