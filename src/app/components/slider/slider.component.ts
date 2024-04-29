import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  images = [
    { src: 'https://imageslidermaker.com/ism/image/slides/beautiful-701678_1280.jpg', alt: 'Image 1' },
    { src: 'https://imageslidermaker.com/ism/image/slides/flower-729514_1280.jpg', alt: 'Image 2' },
    { src: 'https://mediacdn.cincopa.com/v2/270978/17!1YFBAMto3CAwcC/4/04.jpg', alt: 'Image 3' }
  ];

}
