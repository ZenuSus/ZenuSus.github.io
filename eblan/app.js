// Remove the default import and use the global gsap object instead
document.addEventListener('DOMContentLoaded', () => {
    // Simple animations for features
    gsap.from('.feature', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.05, duration: 0.2 });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    });

    // Bomb button functionality
    const bombButton = document.getElementById('bomb-button');
    bombButton.addEventListener('click', () => {
        // Create explosion effect
        const explosion = document.createElement('div');
        explosion.classList.add('bomb-explosion');
        document.body.appendChild(explosion);

        // Animate explosion
        gsap.to(explosion, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                // Destroy site elements
                const elementsToDestroy = [
                    'header', 
                    'main', 
                    'footer'
                ];
                
                elementsToDestroy.forEach(selector => {
                    const element = document.querySelector(selector);
                    if (element) {
                        gsap.to(element, {
                            opacity: 0,
                            scale: 0.5,
                            duration: 0.5
                        });
                    }
                });

                // Final site destruction
                setTimeout(() => {
                    document.body.innerHTML = '<h1 style="text-align:center; color:red;">сука ты че сделал даун </h1>';
                }, 1000);
            }
        });
    });
});
