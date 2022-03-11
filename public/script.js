document.getElementById('myfiles').onclick = () => {
    let subfiles = document.getElementById('sub-files');
    if (subfiles.style.display === 'none') {
        subfiles.style.display = 'block';
    } else {
        subfiles.style.display = 'none';
    }
}

let bar = document.querySelector('.bar');
document.querySelector('.item').onmouseover = () => {
    if (bar.style.background === 'white') {
        bar.style.background = '#222';
    } else {
        bar.style.background = 'white';
    }
}

document.querySelector('.item').onmouseout = () => {
    if (bar.style.background === '#222') {
        bar.style.background = 'white';
    } else {
        bar.style.background = '#222';
    }
}