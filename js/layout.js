/**
 * Ortak header ve footer (fetch kullanmaz; file:// ile de çalışır).
 * Ana sayfa: index.html | Alt sayfalar: pages/*.html
 */
(function () {
    function inPagesFolder() {
        var p = location.pathname || '';
        return p.indexOf('/pages/') !== -1 || p.indexOf('\\pages\\') !== -1;
    }

    var sub = inPagesFolder();
    var home = sub ? '../index.html' : 'index.html';
    var onlineTerapi = sub ? 'online-terapi.html' : 'pages/online-terapi.html';

    var HEADER_HTML =
        '<div class="top-bar">' +
        '<div class="container">' +
        '<div class="contact-info">' +
        '<span><i class="fas fa-phone"></i> +90 530 873 25 46</span>' +
        '<span><i class="fas fa-map-marker-alt"></i> Şişli / İstanbul</span>' +
        '</div>' +
        '<div class="social-icons">' +
        '<a href="https://www.instagram.com/dktselmaduvarci?igsh=MWRmbjhnbnh1eHR5bg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>' +
        '<a href="https://wa.me/message/TFVLZ76KU4Y5K1" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<header>' +
        '<div class="container">' +
        '<nav>' +
        '<div class="logo">Dkt. Selma Duvarcı</div>' +
        '<button class="menu-toggle" type="button" aria-label="Menüyü Aç/Kapat">' +
        '<i class="fas fa-bars"></i>' +
        '</button>' +
        '<ul class="nav-links">' +
        '<li><a href="' + home + '">Ana Sayfa</a></li>' +
        '<li><a href="' + home + '#hakkimda">Hakkımda</a></li>' +
        '<li><a href="' + home + '#sertifikalar">Sertifikalar</a></li>' +
        '<li><a href="' + home + '#terapi-yontemleri">Terapi Yöntemleri</a></li>' +
        '<li><a href="' + home + '#hizmetlerimiz">Hizmetlerimiz</a></li>' +
        '<li><a href="' + onlineTerapi + '">Online Terapi</a></li>' +
        '<li><a href="' + home + '#iletisim">İletişim</a></li>' +
        '</ul>' +
        '<a href="https://wa.me/message/TFVLZ76KU4Y5K1" class="btn-randevu" target="_blank" rel="noopener noreferrer">Randevu Al</a>' +
        '</nav>' +
        '</div>' +
        '</header>';

    var FLOATING_SOCIAL_HTML =
        '<div class="floating-social" aria-label="Sosyal medya bağlantıları">' +
        '<a class="whatsapp" href="https://wa.me/message/TFVLZ76KU4Y5K1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişim">' +
        '<i class="fab fa-whatsapp"></i></a>' +
        '<a class="instagram" href="https://www.instagram.com/dktselmaduvarci?igsh=MWRmbjhnbnh1eHR5bg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram profili">' +
        '<i class="fab fa-instagram"></i></a>' +
        '<a class="maps" href="https://www.google.com/maps?q=Dkt.Selma+Duvarc%C4%B1,+Dil+ve+Konu%C5%9Fma+Terapisti" target="_blank" rel="noopener noreferrer" aria-label="Google Haritalar Konumu">' +
        '<i class="fas fa-map-marker-alt"></i></a>' +
        '</div>';

    var CONTACT_HTML =
        '<section class="contact-section" id="iletisim">' +
        '<div class="container">' +
        '<span class="section-title">İLETİŞİM</span>' +
        '<h2>Konum ve İletişim Bilgileri</h2>' +
        '<div class="contact-grid">' +
        '<div class="contact-card">' +
        '<iframe class="map-frame" src="https://www.google.com/maps?q=Dkt.Selma+Duvarc%C4%B1%2C+Dil+ve+Konu%C5%9Fma+Terapisti&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-label="Harita"></iframe>' +
        '</div>' +
        '<div class="contact-card">' +
        '<h3>İletişim Bilgileri</h3>' +
        '<ul class="contact-list">' +
        '<li><i class="fas fa-map-marker-alt"></i> Şişli / İstanbul</li>' +
        '<li><i class="fas fa-phone"></i> +90 530 873 25 46</li>' +
        '<li><i class="fas fa-envelope"></i> dktselmaduvarci@gmail.com</li>' +
        '</ul>' +
        '<div class="contact-note">' +
        '<strong>Not:</strong> Randevusuz danışan kabul edilmemektedir.' +
        '</div>' +
        '<div class="contact-social-buttons">' +
        '<a href="https://wa.me/message/TFVLZ76KU4Y5K1" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">' +
        '<i class="fab fa-whatsapp"></i> WhatsApp</a>' +
        '<a href="https://www.instagram.com/dktselmaduvarci?igsh=MWRmbjhnbnh1eHR5bg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" class="btn-instagram">' +
        '<i class="fab fa-instagram"></i> Instagram</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>';

    var FOOTER_HTML =
        '<footer>' +
        '<div class="container">' +
        '<div class="copyright">' +
        '&copy; 2026 Dkt. Selma Duvarcı. Tüm Hakları Saklıdır.' +
        '</div>' +
        '</div>' +
        '</footer>';

    function inject() {
        var h = document.getElementById('site-header');
        var c = document.getElementById('site-contact');
        var f = document.getElementById('site-footer');
        if (h) h.innerHTML = HEADER_HTML;
        if (c) c.innerHTML = CONTACT_HTML;
        if (f) f.innerHTML = FOOTER_HTML;
        document.body.insertAdjacentHTML('beforeend', FLOATING_SOCIAL_HTML);
    }

    function initMobileMenu() {
        var menuToggle = document.querySelector('.menu-toggle');
        var navLinks = document.querySelector('.nav-links');
        if (!menuToggle || !navLinks) return;

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            var icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                var ic = menuToggle.querySelector('i');
                if (ic) {
                    ic.classList.remove('fa-times');
                    ic.classList.add('fa-bars');
                }
            });
        });
    }

    /** Şu anki sayfa / bölüme göre .nav-active sınıfı (yeşil vurgu). */
    function highlightActiveNav() {
        var links = document.querySelectorAll('.nav-links a');
        if (!links.length) return;

        var sectionIds = ['hakkimda', 'sertifikalar', 'terapi-yontemleri', 'hizmetlerimiz', 'iletisim'];

        function clearActive() {
            links.forEach(function (a) {
                a.classList.remove('nav-active');
            });
        }

        function applyHomeSection(activeId) {
            clearActive();
            if (activeId === 'home') {
                links.forEach(function (a) {
                    var h = a.getAttribute('href') || '';
                    if (/homepage\.html$/i.test(h) && h.indexOf('#') === -1) {
                        a.classList.add('nav-active');
                    }
                });
                return;
            }
            links.forEach(function (a) {
                var h = a.getAttribute('href') || '';
                if (h.indexOf('#' + activeId) !== -1) {
                    a.classList.add('nav-active');
                }
            });
        }

        function sectionDocumentTop(el) {
            var sy = window.scrollY || window.pageYOffset;
            return el.getBoundingClientRect().top + sy;
        }

        function computeHomeSection() {
            var scrollY = window.scrollY || window.pageYOffset;
            var vh = window.innerHeight || 0;
            var scrollHeight = document.documentElement
                ? document.documentElement.scrollHeight
                : 0;
            var distanceFromBottom = scrollHeight - scrollY - vh;

            // Uzun sayfada en alta inince (özellikle kısa İletişim bölümü) son menü öğesi yeşillensin
            if (scrollHeight > vh + 40 && distanceFromBottom < 100) {
                return 'iletisim';
            }

            var y = scrollY + 130;
            var active = 'home';
            for (var i = 0; i < sectionIds.length; i++) {
                var el = document.getElementById(sectionIds[i]);
                if (el && sectionDocumentTop(el) <= y) {
                    active = sectionIds[i];
                }
            }
            return active;
        }

        var path = location.pathname || '';
        var file = path.split('/').pop() || '';

        if (file === 'online-terapi.html' || path.indexOf('online-terapi') !== -1) {
            links.forEach(function (a) {
                var h = a.getAttribute('href') || '';
                if (h.indexOf('online-terapi') !== -1) {
                    a.classList.add('nav-active');
                }
            });
            return;
        }

        var isHome = file === 'index.html' || file === '' || file === 'index.html';
        if (!isHome) {
            clearActive();
            return;
        }

        var ticking = false;
        function refreshHome() {
            ticking = false;
            applyHomeSection(computeHomeSection());
        }

        function onScrollOrResize() {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(refreshHome);
            }
        }

        applyHomeSection(computeHomeSection());
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize, { passive: true });
        window.addEventListener('hashchange', function () {
            applyHomeSection(computeHomeSection());
        });
    }

    inject();
    highlightActiveNav();
    initMobileMenu();
    document.dispatchEvent(new CustomEvent('siteLayoutReady'));
})();
