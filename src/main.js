// Basic interactions for Aussie Automation landing page

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Audio Player Simulation
    const playBtn = document.getElementById('play-btn');
    const waveBars = document.querySelectorAll('.wave-bar');
    let isPlaying = false;
    let animationId = null;

    function animateWaves() {
        if (!isPlaying) return;
        
        waveBars.forEach(bar => {
            const height = Math.random() * 80 + 20;
            bar.style.height = `${height}%`;
        });
        
        animationId = setTimeout(animateWaves, 150);
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                playBtn.innerText = '■ STOP SAMPLE';
                playBtn.style.backgroundColor = '#00e5ff'; // Laser Cyan
                animateWaves();
            } else {
                playBtn.innerText = '▶ PLAY SAMPLE';
                playBtn.style.backgroundColor = '#ff4d00'; // Safety Orange
                clearTimeout(animationId);
                waveBars.forEach(bar => bar.style.height = '40%');
            }
        });
    }

    // Voice Selector Interaction
    const voiceBtns = document.querySelectorAll('.voice-btn');
    voiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            voiceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Stop current playing if any
            if (isPlaying) {
                playBtn.click();
            }
        });
    });

    // Scroll Reveal Animation (Simple)
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
