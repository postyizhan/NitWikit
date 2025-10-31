// src/clientModules/adsModules.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Helper to add styles to the document head
function addStyles(cssText) {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssText;
    document.head.appendChild(styleElement);
}

// Injects text-based ads into the navbar
function injectTextAds(ads) {
    if (ads.length === 0) return;

    // Create ad container
    const adContainer = document.createElement('div');
    adContainer.className = 'extern-container';

    ads.forEach(ad => {
        const link = document.createElement('a');
        link.href = ad.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = ad.name;
        link.className = 'extern-item';
        adContainer.appendChild(link);
    });

    // Responsive insertion logic
    const updateAdPosition = () => {
        // Remove old ad position
        const existingAd = document.querySelector('.extern-container');
        if (existingAd) existingAd.remove();

        if (window.innerWidth >= 996) { // Desktop
            const desktopTarget = document.querySelector('.navbar__items--right');
            if (desktopTarget) {
                const firstChild = desktopTarget.firstChild;
                if (firstChild) {
                    desktopTarget.insertBefore(adContainer.cloneNode(true), firstChild);
                } else {
                    desktopTarget.prepend(adContainer.cloneNode(true));
                }
            }
        } else { // Mobile
            const mobileTarget = document.querySelector('.menu__list');
            if (mobileTarget) {
                const mobileAdContainer = adContainer.cloneNode(true);
                mobileAdContainer.classList.add('mobile-extern');
                mobileTarget.appendChild(mobileAdContainer);
            }
        }
    };

    updateAdPosition();
    window.addEventListener('resize', updateAdPosition);
}

// Injects image-based ads into the sidebar
function injectImageAds(ads) {
    if (ads.length === 0) return;

    const target = document.querySelector('.col--3');
    if (!target) return; // Exit if sidebar isn't there

    // Remove existing ad container to prevent duplicates
    const existingAd = document.getElementById('image-ad-container');
    if (existingAd) existingAd.remove();

    const adContainer = document.createElement('div');
    adContainer.id = 'image-ad-container';

    if (ads.length === 1) {
        const ad = ads[0];
        adContainer.innerHTML = `
            <a href="${ad.url}" target="_blank" rel="noopener noreferrer">
                <img src="${ad.img}" alt="${ad.alt_text || ad.name}" style="width: 100%; border-radius: 8px;">
            </a>`;
    } else {
        adContainer.innerHTML = `
            <div class="carousel-container">
                ${ads.map((ad, index) => `
                    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                        <a href="${ad.url}" target="_blank" rel="noopener noreferrer">
                            <img src="${ad.img}" alt="${ad.alt_text || ad.name}" style="width: 100%;">
                        </a>
                    </div>
                `).join('')}
            </div>
            <button class="carousel-control prev">&lt;</button>
            <button class="carousel-control next">&gt;</button>`;
        
        let currentSlide = 0;
        const slides = adContainer.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        const showSlide = (index) => {
            slides.forEach((s, i) => {
                s.style.display = 'none';
                s.style.opacity = '0';
            });
            const activeSlide = slides[index];
            if (activeSlide) {
                activeSlide.style.display = 'block';
                // A tiny delay is needed for the opacity transition to trigger correctly after display change
                setTimeout(() => {
                    activeSlide.style.opacity = '1';
                }, 10);
            }
        };

        // Show the first slide initially
        showSlide(currentSlide);
        
        adContainer.querySelector('.next').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });

        adContainer.querySelector('.prev').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });
    }
    
    // Add margin to the container itself
    const rightSidebar = target.querySelector('div');
    if (rightSidebar) {
        rightSidebar.appendChild(adContainer);
    }
}


async function initializeAds() {
    try {
        const isChina = window.location.hostname.includes('.cn');
        const apiUrl = isChina ? 'https://ad-api.8aka.cn/ads-v2.json' : 'https://ad-api.8aka.org/ads-v2.json';
        
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const ads = await response.json();

        if (!Array.isArray(ads) || ads.length === 0) return;

        const textAds = ads.filter(ad => !ad.img);
        const imageAds = ads.filter(ad => ad.img);

        injectTextAds(textAds);
        injectImageAds(imageAds);

    } catch (error) {
        console.error('Failed to load or inject ads:', error);
    }
}

// Main execution logic
if (ExecutionEnvironment.canUseDOM) {
    // Add all styles once
    addStyles(`
        /* Text Ad Styles */
        .extern-container { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-right: 1rem; }
        .mobile-extern { flex-direction: column; align-items: flex-start; padding: 1rem 0.5rem; border-top: 1px solid var(--ifm-color-emphasis-300); margin-top: 1rem; width: 100%; }
        .mobile-extern .extern-item { margin: 0.25rem 0; font-size: 0.9rem; }
        @media (max-width: 1100px) and (min-width: 996px) {
          .extern-container { margin-right: 0.5rem; gap: 0.5rem; }
          .extern-container .extern-item { font-size: 0.85rem; }
        }

        /* Image Ad & Carousel Styles */
        #image-ad-container { position: relative; width: 88%; margin: 1rem auto; }
        .carousel-container { position: relative; width: 100%; overflow: hidden; border-radius: 8px; min-height: 100px; /* Prevent collapse */ }
        .carousel-slide { position: absolute; top: 0; left: 0; display: none; width: 100%; opacity: 0; transition: opacity 0.5s ease-in-out; }
        .carousel-slide.active { display: block; position: relative; } /* .active is no longer used for display, but good to have */
        .carousel-control { position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0,0,0,0.5); color: white; border: none; padding: 5px 10px; cursor: pointer; z-index: 10; border-radius: 4px; }
        .carousel-control.prev { left: 5px; }
        .carousel-control.next { right: 5px; }
    `);

    // Docusaurus lifecycle
    if (document.readyState === 'complete') {
        initializeAds();
    } else {
        window.addEventListener('load', initializeAds);
    }
}

export function onRouteDidUpdate() {
    if (ExecutionEnvironment.canUseDOM) {
        initializeAds();
    }
}
