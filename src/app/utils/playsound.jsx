export function playSound() {
    const audio = new Audio('/public/assets/sounds/click.mp3');
    audio.play().catch(error => {
      console.warn('Audio playback failed:', error);
    });
  }