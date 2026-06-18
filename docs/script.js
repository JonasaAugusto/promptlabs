// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== I18N =====

const translations = {
    pt: {
        nav_produtos:     'Produtos',
        nav_sobre:        'Sobre',
        nav_comprar:      'Comprar',
        hero_title:       'Engenharia de Prompts & Otimização de IA',
        hero_subtitle:    'Guias práticos, diretos e de alta qualidade para dominar técnicas avançadas de IA',
        hero_btn:         'Explorar Produtos',
        section_produtos: 'Produtos',
        product_1_label:  'Professional',
        product_1_new:    '🆕 Novo',
        product_1_title:  'Compliance WhatsApp + IA',
        product_1_desc:   'Estratégia de compliance, otimização de opt-in, monitoramento de bans e LGPD compliance com IA.',
        product_1_btn:    'Saiba Mais',
        product_2_label:  'Foundations',
        product_2_title:  'Engenharia de Prompts',
        product_2_desc:   'Técnicas avançadas de prompt engineering para maximizar resultados com modelos de linguagem modernos.',
        product_2_soon:   'Em Breve',
        section_sobre:    'Sobre Prompt Labs',
        about_text:       'Democratizamos técnicas avançadas de IA. Soluções práticas, diretas e de alta qualidade — sem jargão desnecessário — para profissionais que querem dominar IA.',
        about_by:         'Criado por:',
        footer_copyright: '© 2026 Prompt Labs by Jonas Augusto',
    },
    en: {
        nav_produtos:     'Products',
        nav_sobre:        'About',
        nav_comprar:      'Buy',
        hero_title:       'Prompt Engineering & AI Optimization',
        hero_subtitle:    'Practical, direct and high-quality guides to master advanced AI techniques',
        hero_btn:         'Explore Products',
        section_produtos: 'Products',
        product_1_label:  'Professional',
        product_1_new:    '🆕 New',
        product_1_title:  'WhatsApp Compliance + AI',
        product_1_desc:   'Compliance strategy, opt-in optimization, ban monitoring and LGPD compliance with AI.',
        product_1_btn:    'Learn More',
        product_2_label:  'Foundations',
        product_2_title:  'Prompt Engineering',
        product_2_desc:   'Advanced prompt engineering techniques to maximize results with modern language models.',
        product_2_soon:   'Coming Soon',
        section_sobre:    'About Prompt Labs',
        about_text:       'We democratize advanced AI techniques. Practical, direct and high-quality solutions — without unnecessary jargon — for professionals who want to master AI.',
        about_by:         'Created by:',
        footer_copyright: '© 2026 Prompt Labs by Jonas Augusto',
    }
};

const urlMap = {
    pt: { gumroad: 'https://jonasaugusto.gumroad.com/' },
    en: { gumroad: 'https://jonasaugusto.gumroad.com/' },
};

function getDefaultLanguage() {
    const saved = localStorage.getItem('promptlabs_language');
    if (saved) return saved;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' ? 'pt' : 'en';
}

function changeLanguage(lang) {
    localStorage.setItem('promptlabs_language', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-link-gumroad]').forEach(el => {
        el.href = urlMap[lang].gumroad;
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.getElementById('lang-select').value = lang;
}

const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', () => changeLanguage(langSelect.value));

changeLanguage(getDefaultLanguage());
