setInterval(()=>{
  const adOverlay = document.querySelector('.ytp-ad-overlay-close-container');
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if(adOverlay !=undefined)
    adOverlay.click();
  if(skipButton != undefined)
    skipButton.click();
}, 2000);
