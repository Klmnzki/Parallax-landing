document.addEventListener('mousemove', e => {
    document.body.style.setProperty('--move-x', `${e.clientX}px`);
    document.body.style.setProperty('--move-y', `${e.clientY}px`);
  });