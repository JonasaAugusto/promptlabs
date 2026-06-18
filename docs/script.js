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
        product_2_label:  'Professional',
        product_2_title:  'IA para Lead Generation',
        product_2_desc:   'Use Claude/ChatGPT para prospectar, enriquecer dados de leads e criar pitch personalizado.',
        product_2_btn:    'Saiba Mais',
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
        product_2_label:  'Professional',
        product_2_title:  'AI for Lead Generation',
        product_2_desc:   'Use Claude/ChatGPT to prospect, enrich lead data and create personalized pitches.',
        product_2_btn:    'Learn More',
        section_sobre:    'About Prompt Labs',
        about_text:       'We democratize advanced AI techniques. Practical, direct and high-quality solutions — without unnecessary jargon — for professionals who want to master AI.',
        about_by:         'Created by:',
        footer_copyright: '© 2026 Prompt Labs by Jonas Augusto',
    }
};

const urlMap = {
    pt: { gumroad: 'https://gumroad.com/promptlabs' },
    en: { gumroad: 'https://gumroad.com/promptlabs' },
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

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    closeDropdown();
}

function toggleDropdown() {
    const dd = document.getElementById('lang-dropdown');
    dd.classList.toggle('hidden');
    dd.classList.toggle('active');
}

function closeDropdown() {
    const dd = document.getElementById('lang-dropdown');
    dd.classList.add('hidden');
    dd.classList.remove('active');
}

document.getElementById('lang-toggle').addEventListener('click', toggleDropdown);

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => changeLanguage(opt.dataset.lang));
});

document.addEventListener('click', e => {
    if (!document.getElementById('lang-selector').contains(e.target)) {
        closeDropdown();
    }
});

changeLanguage(getDefaultLanguage());
