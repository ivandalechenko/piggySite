import './style.scss'

import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, TextPlugin)





window.onload = function () {
    setTimeout(() => {
        gsap.to('.hero_top', { duration: 2, text: { value: "THE PIGGY" } })
        let mm = gsap.matchMedia();
        mm.add("(min-width: 900px)", () => {
            gsap.to('.hero_coin1', {
                y: -200,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.hero_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.hero_coin2', {
                y: -300,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.hero_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.hero_coin3', {
                y: -500,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.hero_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.hero_coin4', {
                y: -200,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.hero_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.hero_coin5', {
                y: -300,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.hero_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.hero_coin6', {
                y: -500,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.hero_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.about_coin1', {
                y: -200,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.about_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.about_coin2', {
                y: -300,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.about_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.about_coin3', {
                y: -500,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.about_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.about_coin4', {
                y: -200,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.about_coin1',
                    scrub: 1,
                    // markers: true,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.about_coin5', {
                y: -300,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.about_coin1',
                    scrub: 1,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })
            gsap.to('.about_coin6', {
                y: -500,
                scrollTrigger: {
                    duration: 0.5,
                    trigger: '.about_coin1',
                    scrub: 1,
                    start: 'top 100%',
                    end: 'top 0%',
                }
            })

        });
    }, 500);
};