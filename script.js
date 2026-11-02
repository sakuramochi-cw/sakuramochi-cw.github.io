// 右から開くオフキャンバスメニュー。
// GitHub Pagesでそのまま動きます（ライブラリ不要）。
(() => {
  const openButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');
  const backdrop = document.querySelector('[data-menu-backdrop]');
  const drawer = document.getElementById('site-drawer');
  if (!openButton || !closeButton || !backdrop || !drawer) return;

  let previousFocus = null;

  function openMenu() {
    previousFocus = document.activeElement;
    backdrop.hidden = false;
    drawer.inert = false;
    drawer.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    closeButton.focus();
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    openButton.setAttribute('aria-expanded', 'false');
    drawer.inert = true;
    drawer.setAttribute('aria-hidden', 'true');
    // フェードアウト後に背景ボタンを非表示にする
    const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (motionReduced) backdrop.hidden = true;
    else {
      backdrop.addEventListener('transitionend', () => {
        if (!document.body.classList.contains('menu-open')) backdrop.hidden = true;
      }, { once: true });
    }
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  openButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (!document.body.classList.contains('menu-open')) return;
    if (event.key === 'Escape') {
      closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(drawer.querySelectorAll('a[href], button:not([disabled])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
})();
