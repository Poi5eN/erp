const cardso = document.querySelectorAll('.cardo');

cardso.forEach(cardo => {
  cardo.addEventListener('mouseenter', () => {
    const cardId = cardo.getAttribute('data-card-id');
    const cardContent = document.querySelector(`[data-card-id="${cardId}"] .card-contento`);
    cardContent.style.transform = 'translateY(-50%)';
    cardContent.style.opacity = '1';
  });

  cardo.addEventListener('mouseleave', () => {
    const cardId = cardo.getAttribute('data-card-id');
    const cardContento = document.querySelector(`[data-card-id="${cardId}"] .card-contento`);
    cardContento.style.transform = 'translateY(0)';
    cardContento.style.opacity = '0';
  });
});
Footer
// © 2023 GitHub, Inc.