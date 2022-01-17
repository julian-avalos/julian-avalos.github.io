const hexOutput = document.getElementsByClassName(`hex`);
const body = document.getElementsByTagName('body');
const main = document.getElementsByClassName('main');
const reload = document.getElementsByClassName('reload');
let color = `#000000`.replace(/0/g, function(){return (~~(Math.random()*16)).toString(16).toUpperCase();})


hexOutput[0].textContent = color;
body[0].style.backgroundColor = color;

reload[0].addEventListener('click', event => {
    location.reload();
})

hexOutput[0].addEventListener('click', event => {
    console.log(hexOutput[0].textContent);
    const range = document.createRange();
    range.selectNode(hexOutput[0]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    hexOutput[0].textContent = `${color} copied`;
})
