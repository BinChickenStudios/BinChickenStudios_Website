//inheriable object {state{Normal, Hover, Select};}

const colorTitle = document.querySelector('#colortitle');
const colorButton = document.querySelector('#colorbutton');

colorButton.style.color = "black";

colorButton.addEventListener('click', changeColor);

function changeColor ()
{
    let r = Math.floor((Math.random() * 255)) + 0;
    let g = Math.floor((Math.random() * 255)) + 0;
    let b = Math.floor((Math.random() * 255)) + 0;
    const sections = document.querySelectorAll('section');
    for(let section of sections)
    {
        section.style.backgroundColor = `RGB(${r},${g},${b})`;
    }
    colorTitle.innerText = `RGB(${r},${g},${b})`;
}


