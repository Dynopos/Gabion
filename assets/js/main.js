/* GUBAH BINA SDN. BHD. (201901025225) — Gabion Wall Malaysia
   Nota: WA_NUMBER dalam format antarabangsa tanpa '+' dan tanpa ruang. */
(function () {
  'use strict';

  var WA_NUMBER = '60145988988';

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    var setMenu = function (open) {
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    };

    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        burger.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) setMenu(false);
    });
  }

  /* ---------- Header state bila skrol ---------- */
  var hdr = document.getElementById('hdr');
  if (hdr) {
    var onScroll = function () {
      hdr.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reveals.length) {
    /* tiada apa-apa */
  } else if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Sedikit lengah berperingkat untuk item bersebelahan
        var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        el.style.transitionDelay = Math.min(siblings, 5) * 70 + 'ms';
        el.classList.add('is-in');
        revealObs.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { revealObs.observe(el); });
  }

  /* ---------- Sorot pautan nav bagi seksyen semasa ---------- */
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav a[href^="#"]:not(.nav__cta)')
  );
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- FAQ: buka satu pada satu masa ---------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll('.faq__i'));
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- Borang sebut harga -> WhatsApp ---------- */
  var form = document.getElementById('quoteForm');
  var errBox = document.getElementById('formErr');

  if (form) {
    var showError = function (msg, focusEl) {
      if (errBox) {
        errBox.textContent = msg;
        errBox.hidden = false;
      }
      if (focusEl) focusEl.focus();
    };

    var clearError = function () {
      if (errBox) {
        errBox.hidden = true;
        errBox.textContent = '';
      }
    };

    form.addEventListener('input', function (e) {
      if (e.target.getAttribute('aria-invalid') === 'true') {
        e.target.removeAttribute('aria-invalid');
        clearError();
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearError();

      var get = function (id) {
        var el = document.getElementById(id);
        return { el: el, val: el ? el.value.trim() : '' };
      };

      var nama = get('f-nama');
      var fon = get('f-fon');
      var lokasi = get('f-lokasi');
      var jenis = get('f-jenis');
      var info = get('f-info');

      var required = [
        { f: nama, msg: 'Sila isi nama penuh anda.' },
        { f: fon, msg: 'Sila isi nombor telefon anda.' },
        { f: lokasi, msg: 'Sila isi lokasi projek anda.' }
      ];

      for (var i = 0; i < required.length; i++) {
        if (!required[i].f.val) {
          required[i].f.el.setAttribute('aria-invalid', 'true');
          showError(required[i].msg, required[i].f.el);
          return;
        }
      }

      // Nombor telefon Malaysia: 9-12 digit selepas membuang simbol biasa
      var digits = fon.val.replace(/[\s\-()+.]/g, '');
      if (!/^\d{9,12}$/.test(digits)) {
        fon.el.setAttribute('aria-invalid', 'true');
        showError('Nombor telefon tidak sah. Contoh: 012-345 6789', fon.el);
        return;
      }

      var lines = [
        'Assalamualaikum / Hi Gubah Bina,',
        'Saya ingin dapatkan sebut harga gabion wall.',
        '',
        'Nama: ' + nama.val,
        'Telefon: ' + fon.val,
        'Lokasi projek: ' + lokasi.val,
        'Jenis kerja: ' + jenis.val
      ];

      if (info.val) lines.push('Maklumat tambahan: ' + info.val);
      lines.push('', 'Terima kasih.');

      window.open(
        'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')),
        '_blank',
        'noopener'
      );
    });
  }

  /* ---------- Tahun semasa di footer ---------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
