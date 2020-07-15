let boxes = document.querySelectorAll('.box_1');
let output = document.querySelector('.insert')
let body = document.getElementById('body');
let icon = document.querySelector('.far');

// let imgsrc = output.getAttribute('src');
boxes = Array.from(boxes);

boxes.forEach((box) => {
  let myImage = box.lastElementChild;
  console.log(myImage);
  let att = myImage.getAttribute('src');

  myImage.addEventListener('click', (e) => {
    output.style.transition = 'all 3s';
    output.style.display = 'block';
    box.style.display = 'none';
    output.setAttribute('src', att);
    icon.style.display = 'block';
    icon.style.margin = "0px 0px 5px 0px";

    icon.addEventListener('click', (e) => {
      output.style.display = 'none';
      box.style.display = 'block';
      icon.style.display = 'none';
    })

    output.addEventListener('click', (e) => {
      output.style.display = 'none'
      box.style.display = 'block'
    })
    // setTimeout(() => {
    //   output.style.display = 'none'
    //   box.style.display = 'block'
    // }, 5000)
  })
})

