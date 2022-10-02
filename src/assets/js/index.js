
let rng = document.querySelector('.hero__sum-slider');
let car = 'грн';
let sum = 5000;
let tst = 100;
let sh = document.querySelector("#two");
let th = document.querySelector('#thee');
let fr = document.querySelector('#four');
let sx = document.querySelector('#six');
let fiv = document.querySelector('#five')
let tot = document.querySelector('.hero__sum-res');
let sub = document.querySelector('.hero__sum-val')
let rem = document.querySelector('#rem')
let newbtn = document.querySelector('.advances__new-btn')
let oldbtn = document.querySelector('.advances__old-btn')
let newform = document.querySelector('.advances__new-form')
let oldform = document.querySelector('.advances__old-form')
let getnewbtn = document.querySelector('.howget__new-btn')
let getoldbtn = document.querySelector('.howget__old-btn')
let getnewform = document.querySelector('.howget__new-form')
let getoldform = document.querySelector('.howget__old-form')

// rng.addEventListener('input', () => {
    // sh.innerHTML = rng.value + ' ' + `${val}`
    // tot.innerHTML = rng.value + ' ' + `${val}`
// })

// window.onload = function () {
//     sh.innerHTML = sum + ' ' + `${val}`
//     tot.innerHTML = sum + ' ' + `${val}`
// }

rng.value = commify(rng.value)
rng.addEventListener("input", function(){
  commify(event.target.value)
})
function commify(value){
  let chars = value.split("").reverse()
  let withCommas = []
  for(let i = 1; i <= chars.length; i++ ){
    withCommas.push(chars[i-1])
    if(i%3==0 && i != chars.length ){  
      withCommas.push(",")
    }
    
  }
  
  let vall = withCommas.reverse().join("")
  let total = +vall.replace(',', '')
  let res = ((0.0001 * 30 * total) + total)
  let per = ((0.0001 * 30 * total))
  let ful = ((0.019 * 30 * total))
  let percent = (+per).toFixed(2)
  let curent = (+res).toFixed(2)
  let full = (+ful).toFixed(2)
  fiv.classList.add('percernt')

  // let x = document.querySelector('#form')
  // window.localStorage.setItem('key', vall)
  // window.localStorage.getItem(vall)
  // x.textContent = window


 



  // document.querySelector('#add').addEventListener('click', () => {
  //   let add = +vall.replace(',', '')
  //   console.log(total);
  // })

  th.innerHTML = total + '.' + '00' + ' ' + `${car}`
  sub.innerHTML = ' ' + `${car}`
  fr.innerHTML = percent + ' ' + `${car}`
  fiv.innerHTML = full + ' ' + `${car}`
  sx.innerHTML = ' ' + `${curent}` + ' ' + `${car}`
  tot.innerHTML = vall + ' ' + `${car}`
}
//btn new clients//
oldbtn.addEventListener('click', () => {
  oldform.classList.remove('form-dis')
  newbtn.classList.remove('form-btn-click')
  newbtn.classList.add('color-btn-old')
  oldbtn.classList.add('form-btn-click')
  oldbtn.classList.remove('color-btn')
  newform.classList.add('form-dis')
})
//btn old clients//
newbtn.addEventListener('click', () => {
  oldform.classList.add('form-dis')
  newform.classList.remove('form-dis')
  oldbtn.classList.add('color-btn')
  oldbtn.classList.remove('form-btn-click')
  newbtn.classList.remove('color-btn-old')
  newbtn.classList.add('form-btn-click')
})
//how to get btn//
getoldbtn.addEventListener('click', () => {
  getnewbtn.classList.remove('form-btn-click')
  getoldbtn.classList.add('form-btn-click')
  getnewbtn.classList.add('color-btn-old')
  getoldbtn.classList.remove('color-btn')
  getoldform.classList.remove('form-dis')
  getnewform.classList.add('form-dis')
})
getnewbtn.addEventListener('click', () => {
  getnewbtn.classList.remove('color-btn-old')
  getoldbtn.classList.remove('form-btn-click')
  getnewbtn.classList.add('form-btn-click')
  getoldbtn.classList.add('color-btn')
  getoldform.classList.add('form-dis')
  getnewform.classList.remove('form-dis')
})


document.querySelector('.header__info-mob-line').addEventListener('click', () =>{
  document.querySelector('.side-bar').classList.remove('bar-none')
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
}) 
    document.querySelector('.side-bar__exit').addEventListener('click', () => {
    document.querySelector('.side-bar').classList.add('bar-none')
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
})