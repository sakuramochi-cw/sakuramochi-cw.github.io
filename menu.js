// 全ページ共通のヘッダーとオフキャンバスメニュー
(() => {
  const header = document.querySelector('[data-site-header]');
  const menu = document.querySelector('[data-site-menu]');
  if (!header || !menu) return;

  header.innerHTML = `
    <a class="header-social-link" href="https://x.com/sakuramochi94" aria-label="さくらもちのX（新しいタブで開く）" target="_blank" rel="noopener noreferrer">
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932zm-1.29 19.49h2.039L6.487 3.24H4.3z"/></svg>
    </a>
    <button class="menu-trigger" type="button" aria-label="メニューを開く" aria-controls="site-drawer" aria-expanded="false" data-menu-open>
      <span class="burger-lines" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
  `;

  menu.innerHTML = `
    <button class="drawer-backdrop" type="button" aria-label="メニューを閉じる" data-menu-backdrop hidden></button>
    <aside class="site-drawer" id="site-drawer" aria-label="サイトメニュー" aria-hidden="true" inert>
      <div class="drawer-header">
        <button class="drawer-close" type="button" aria-label="メニューを閉じる" data-menu-close>×</button>
      </div>
      <nav class="drawer-nav" aria-label="メインナビゲーション">
        <a href="index.html"><span>01</span> ホーム</a>
        <a href="scenarios.html"><span>02</span> シナリオ一覧</a>
        <a href="about.html"><span>03</span> ご利用案内</a>
      </nav>
      <p class="drawer-caption">a little place for CardWirth ♡</p>
    </aside>
  `;

  // トップページの「/」と「index.html」は、どちらもホームとして扱う
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('.drawer-nav a[href]').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
