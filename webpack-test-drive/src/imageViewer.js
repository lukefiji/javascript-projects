import '../styles/imageViewer.css';
import large from '../assets/large.jpg';
import small from '../assets/small.jpg';

const image = document.createElement('img');
image.src = small;

const image2 = document.createElement('img');
image2.src = large;

document.body.appendChild(image);
document.body.appendChild(image2);
