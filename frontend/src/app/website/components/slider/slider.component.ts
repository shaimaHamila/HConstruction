import { Component, AfterViewInit } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  bgImages = ['assets/slider/bg/1.jpg', 'assets/slider/bg/2.jpg'];

  // Font Awesome icons
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  ngAfterViewInit(): void {
    if ($('.slider__activation__wrap').length) {
      $('.slider__activation__wrap').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        dots: false,
        lazyLoad: true,
        nav: false, // Disable default navigation
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
        },
      });
    }

    // Attach events to custom navigation buttons //TODO: Fix this
    $('.custom-prev').click(() =>
      $('.slider__activation__wrap').trigger('prev.owl.carousel'),
    );
    $('.custom-next').click(() =>
      $('.slider__activation__wrap').trigger('next.owl.carousel'),
    );
  }

  scrollToContact() {
    // Scroll to the contact form section
    const contactSection = document.getElementById('contactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
