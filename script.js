// let ElementByTagName = document.getElementsByTagName("h1")
// console.log(ElementByTagName)

// let elementbyClassName = document.getElementsByClassName('continent')
// console.log(elementbyClassName)

// let elementByID = document.getElementById('text')
// console.log(elementByID)

// // queryselector() <--universal
// // querySelectorAll()

// let elementbyTagNameUNI = document.querySelector("h1")
// console.log(elementbyTagNameUNI)

// let elementbyClassNameUNI = document.querySelector('.container')
// console.log(elementbyClassNameUNI)

// let elementByIDUNI = document.querySelector('#text')
// console.log(elementByIDUNI)

// let allPtags = document.querySelectorAll('p')
// console.log(allPtags)

// allPtags.forEach((el) => el.setAttribute("class", 'paragraph'))

// elementbyTagNameUNI.setAttribute('id', 'mainHeading')
// elementbyClassNameUNI.id = 'mainHeading'

// allPtags.forEach((el) => console.log(el.getAttribute("class")))


// text to DOM node
// innerText
// textcontent
// innerHTML <----- stengtis nenaudoti

// elementByIDUNI.innerText = 'Pirmas paragrafas'

// allPtags[1].textContent = 'antras paragrafas bus geresnis negu pirmas'

// stiliukas


// allPtags[0].style.backgroundColor = 'green'
// allPtags[0].style.padding = '35px'
// allPtags[0].style.color = '#693d3d'






// nauja element

let image = document.createElement('img')
image.setAttribute(
        'src',
        "https://www.prevention.com/food-nutrition/g20481875/apple-varieties-and-recipes/"
    )
    image.alt = 'apple'
    let button = document.createAttribute('button')
    button.textContent = 'click';
    
    // elementbyClassNameUNI.append('image, button')
    
// insertAdjacentElement(
    // beforebegin
    // afterbegin
    // beforeEnd
    // afterend
    
    // elementbyClassNameUNI.insertAdjacentElement('beforebegin', button)
    // elementbyClassNameUNI.insertAdjacentElement('afterbegin', button)
    // elementbyClassNameUNI.insertAdjacentElement('beforeend', button)
    // elementbyClassNameUNI.insertAdjacentElement('afterend', button)
    
    
    // uzd
let ElementA = document.querySelector('a')
console.log(ElementA)

let ElementIMG = document.querySelector('img')
console.log(ElementIMG)

let ElementDIV1 = document.querySelector('div')
console.log(ElementDIV1)

let ElementDIV2 = document.querySelector('div')
console.log(ElementDIV2)

let ElementP1 = document.querySelector('p')
let ElementP2 = document.querySelector('p')
console.log(ElementP1, ElementP2)

ElementA.setAttribute('class', 'a1')
ElementIMG.setAttribute('class', 'IMG1')
ElementDIV1.setAttribute('class', 'div1')
ElementDIV2.setAttribute('class', 'div1')
ElementP1.setAttribute('class', 'p1')
ElementP2.setAttribute('class', 'p2')

ElementDIV1.style.color = 'purple'
ElementDIV1.style.height = '30px'
ElementDIV1.style.width = '35px'
ElementDIV1.style.backgroundColor = 'green'
    

ElementP1.textContent = 'antras paragrafas bus geresnis negu pirmas'
ElementP1.style.color = '#a469d4'

ElementIMG.setAttribute(
        'src',
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4EP8XkJrPc7nBN-IYTH4zMsBOKiSxrPOaRbBvfhGDajAKRbiKTtnr2PqLfPw9J4yn8QwBbrXLJWzy5ncXeBtc3UlRIWNHQU6GTZHmJKVKbnCGcTIYEEZlUYxUCd-LbsckECXD9plUii1FwD8Km6LrwZi9Q6UhKGnj2UvO3K8vybs-V92AztW6PUYl9yk/s1600-rw/Border%20Model%20CHROMA%20Leopard%202A7V%20(BG001)%20(8aaa).jpg"
    )
ElementIMG.style.height = '240px'
ElementIMG.style.width = '140px'
ElementIMG.style.borderRadius = '140px'
ElementIMG.style.border = 'green, 5px, solid'

// ElementP1.forEach((el) => console.log(el));

button.addEventListener('click', () => {
    console.log('mygtukas paspaustas')
    ElementP1.style.backgroundColor = 'green'
})

ElementIMG.addEventListener('keypress', (event) => {
    console.log('paspaustas!')
    if (event.key === "Enter") {
        document.querySelector('body').style.visibility = 'visible'
    }
})

let form = document.getElementById('form')
let inputUserNAme = document.getElementById('username')
let submitBtn = document.getElementById('')

















// visi = document.querySelector('body')
    // console.log(visi)

