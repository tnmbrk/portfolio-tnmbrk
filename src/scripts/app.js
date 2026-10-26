// --- Anonymous Player ID ---

const createAnonymousPlayerId = () => {
    if (crypto?.randomUUID) {
        return crypto.randomUUID();
    }

    return `anon-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const manageAnonymousPlayerId = () => {
    try {
        const storageKey = 'anon_player_id';
        const existingId = localStorage.getItem(storageKey);
        if (existingId) {
            return existingId;
        }

        const newId = createAnonymousPlayerId();
        localStorage.setItem(storageKey, newId);
        return newId;
    } catch (error) {
        console.warn('localStorage unavailable (private mode or disabled), using session-only ID:', error.message);
        return createAnonymousPlayerId();
    }
};

// Manage the player ID on page load.
manageAnonymousPlayerId();

const html = document.documentElement;

const themeKey = 'hs_theme';
const languageKey = 'site_language';

const translations = {
    en: {
        about: 'About',
        skills: 'Skills',
        workExperience: 'Work experience',
        summary:
            'Senior Software Quality Assurance (QA) professional with 13+ years of expertise in manual and automated testing for web, mobile, API, and game platforms. Skilled in test planning, requirement analysis, test case development, and defect reporting within Agile/Scrum environments. Hands-on with REST API automation, web testing, game testing, and cross-team collaboration. Proven ability to communicate complex issues effectively and contribute to successful delivery of multi-service platforms and game titles, emphasizing quality and continuous improvement.',
        location: 'Gunungkidul, D.I. Yogyakarta, Indonesia',
        qaTesting: 'QA & Testing:',
        education: 'Education',
        downloadCv: 'Download CV',
        headline: 'Senior QA Specialist & Technical Project Manager',
        languages: 'Languages:',
        projectManagement: 'Project management:',
        testingExpertise: 'Testing Expertise:',
        softSkills: 'Soft Skills:',
        educationFocus: 'Focus: Web-Based Information Systems',
        email: 'Email',
        crossFunctionalCoordination: 'Cross-functional Coordination',
        clientCommunication: 'Client Communication',
        manualAutomatedTesting: 'Manual & Automated Testing',
        restApiTesting: 'REST API Testing',
        uiTesting: 'UI Testing',
        mobileTesting: 'Mobile Testing (iOS & Android)',
        gameTesting: 'Game testing',
        regression: 'Regression',
        smoke: 'Smoke',
        performance: 'Performance',
        testCaseDesign: 'Test Case Design',
        testDocumentation: 'Test Documentation',
        effectiveCommunication: 'Effective communication',
        problemSolving: 'Problem-solving',
        attentionToDetail: 'Attention to detail',
        analyticalThinking: 'Analytical Thinking',
        collaborationTeamwork: 'Collaboration & Teamwork',
    },
    id: {
        about: 'Tentang',
        skills: 'Keahlian',
        workExperience: 'Pengalaman kerja',
        summary:
            'Profesional Senior Quality Assurance (QA) berpengalaman dengan keahlian 13+ tahun dalam pengujian manual dan otomatis untuk platform web, mobile, API, dan game. Terampil dalam perencanaan pengujian, analisis kebutuhan, pengembangan kasus uji, dan pelaporan cacat dalam lingkungan Agile/Scrum. Terlibat langsung dalam otomasi REST API, pengujian web, pengujian game, dan kolaborasi lintas tim. Terbukti mampu mengkomunikasikan isu kompleks secara efektif dan berkontribusi pada keberhasilan pengiriman platform multi-layanan dan judul game, dengan menekankan kualitas dan peningkatan berkelanjutan.',
        location: 'Gunungkidul, D.I. Yogyakarta, Indonesia',
        qaTesting: 'QA & Testing:',
        education: 'Pendidikan',
        downloadCv: 'Unduh CV',
        headline: 'Senior QA & Manajer Proyek Teknis',
        languages: 'Bahasa pemrograman:',
        projectManagement: 'Manajemen proyek:',
        testingExpertise: 'Keahlian pengujian:',
        softSkills: 'Keterampilan interpersonal:',
        educationFocus: 'Fokus: Sistem Informasi Berbasis Web',
        email: 'E-mail',
        crossFunctionalCoordination: 'Koordinasi Lintas Fungsi',
        clientCommunication: 'Komunikasi Klien',
        manualAutomatedTesting: 'Pengujian Manual & Otomatis',
        restApiTesting: 'Pengujian REST API',
        uiTesting: 'Pengujian UI',
        mobileTesting: 'Pengujian Mobile (iOS & Android)',
        gameTesting: 'Pengujian Game',
        regression: 'Regresi',
        smoke: 'Smoke',
        performance: 'Performa',
        testCaseDesign: 'Desain Test Case',
        testDocumentation: 'Dokumentasi Pengujian',
        effectiveCommunication: 'Komunikasi efektif',
        problemSolving: 'Pemecahan masalah',
        attentionToDetail: 'Perhatian terhadap detail',
        analyticalThinking: 'Pemikiran Analitis',
        collaborationTeamwork: 'Kolaborasi & Kerja Tim',
    },
};

const textTranslations = {
    'Technical Project Manager I at PT AccelByte Teknologi Indonesia':
        'Manajer Proyek Teknis I di PT AccelByte Teknologi Indonesia',
    'Software Quality Assurance at PT AccelByte Teknologi Indonesia':
        'Quality Assurance Perangkat Lunak di PT AccelByte Teknologi Indonesia',
    'Senior Quality Assurance at PT Gameloft Indonesia': 'Quality Assurance Senior di PT Gameloft Indonesia',
    'Junior Quality Assurance at PT Gameloft Indonesia': 'Quality Assurance Junior di PT Gameloft Indonesia',
    'Bachelor’s Degree in Information Systems': 'Sarjana Sistem Informasi',
    "Bachelor's Degree in Information Systems": 'Sarjana Sistem Informasi',
    'Vocational High School (SMK) in Computer Network Engineering':
        'Sekolah Menengah Kejuruan (SMK) Teknik Komputer dan Jaringan',
    'Focus: Web-Based Information Systems': 'Fokus: Sistem Informasi Berbasis Web',
    'Coordinated release planning and delivery, helping teams deliver features on schedule.':
        'Mengoordinasikan perencanaan dan delivery rilis, membantu tim menyelesaikan fitur sesuai jadwal.',
    'Identified and cleared cross-functional blockers before they affected delivery.':
        'Mengidentifikasi dan menyelesaikan hambatan lintas fungsi sebelum memengaruhi proses pengiriman.',
    'Aligned QA, engineering, and product teams around priorities, risks, and release readiness.':
        'Menyelaraskan tim QA, engineering, dan produk terkait prioritas, risiko, dan kesiapan rilis.',
    'Managed timelines and communication for product and feature rollouts.':
        'Mengelola jadwal dan komunikasi untuk peluncuran produk serta fitur.',
    'Designed and executed manual and automated tests for APIs, games, and web platforms.':
        'Merancang dan menjalankan pengujian manual serta otomatis untuk API, game, dan platform web.',
    'Tested REST APIs with Postman and built JavaScript/Node.js automation to expand coverage.':
        'Menguji REST API dengan Postman dan membuat otomasi JavaScript/Node.js untuk memperluas cakupan pengujian.',
    'Built tooling to generate API clients from OpenAPI specifications and streamline test setup.':
        'Membuat alat untuk menghasilkan klien API dari spesifikasi OpenAPI dan menyederhanakan persiapan pengujian.',
    'Maintained test cases, coverage, and execution status in QMetry and Google Sheets.':
        'Memelihara kasus uji, cakupan, dan status eksekusi di QMetry serta Google Sheets.',
    'Ran performance tests with k6 and Autocannon to identify bottlenecks and reliability risks.':
        'Menjalankan pengujian performa dengan k6 dan Autocannon untuk menemukan bottleneck dan risiko keandalan.',
    'Collaborated remotely across time zones through Agile standups, planning, and QA syncs.':
        'Berkolaborasi jarak jauh lintas zona waktu melalui standup Agile, perencanaan, dan sinkronisasi QA.',
    'Mentored junior QA engineers and helped teams maintain thorough test coverage.':
        'Membimbing engineer QA junior dan membantu tim menjaga cakupan pengujian yang menyeluruh.',
    'Led web, mobile, and game testing across Android, iOS, and PC platforms.':
        'Memimpin pengujian web, mobile, dan game pada platform Android, iOS, dan PC.',
    'Served as interim QA lead when needed, supporting prioritization and day-to-day decisions.':
        'Menjalankan peran sebagai QA lead sementara saat diperlukan, termasuk mendukung penentuan prioritas dan keputusan harian.',
    'Performed exploratory and checklist-based testing for mobile game releases.':
        'Melakukan pengujian eksploratif dan berbasis checklist untuk rilis game mobile.',
    'Reported clear, reproducible defects and worked with developers through resolution.':
        'Melaporkan bug yang jelas dan dapat direproduksi, lalu bekerja sama dengan developer hingga penyelesaiannya.',
    'Maintained test documentation and shared clear status updates with the team.':
        'Memelihara dokumentasi pengujian dan menyampaikan pembaruan status yang jelas kepada tim.',
};

const setLanguage = (language) => {
    const selectedLanguage = language === 'id' ? 'id' : 'en';
    const localized = translations[selectedLanguage] || {};

    document.documentElement.lang = selectedLanguage;
    document.documentElement.dir = 'ltr';
    document
        .querySelector('[data-language-toggle]')
        ?.replaceChildren(document.createTextNode(selectedLanguage === 'id' ? 'EN' : 'ID'));

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const original = element.dataset.i18nOriginal || element.textContent.trim();
        element.dataset.i18nOriginal = original;
        element.textContent = selectedLanguage === 'id' ? localized[key] || original : original;
    });

    document.querySelectorAll('p, li, h2, h3').forEach((element) => {
        if (element.children.length > 0 || element.dataset.i18n) {
            return;
        }

        const original = element.dataset.textOriginal || element.textContent.trim();
        element.dataset.textOriginal = original;
        element.textContent = selectedLanguage === 'id' ? textTranslations[original] || original : original;
    });

    // Translate meta tags for SEO and social sharing
    const pageTitle = translations[selectedLanguage]?.headline || translations.en.headline;
    const pageSummary = translations[selectedLanguage]?.summary || translations.en.summary;

    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', pageSummary);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', pageTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', pageSummary);
    }

    try {
        localStorage.setItem(languageKey, selectedLanguage);
    } catch (error) {
        console.warn('localStorage unavailable, language preference not persisted:', error.message);
    }
};

const readStoredLanguage = () => {
    try {
        return localStorage.getItem(languageKey) || 'en';
    } catch {
        return 'en';
    }
};

document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'id' ? 'en' : 'id');
});

setLanguage(readStoredLanguage());

const readStoredTheme = () => {
    try {
        return localStorage.getItem(themeKey) || 'auto';
    } catch {
        return 'auto';
    }
};

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme = readStoredTheme()) => {
    if (theme === 'auto') {
        const isDark = getSystemTheme();
        html.classList.toggle('dark', isDark);
        html.classList.toggle('light', !isDark);
    } else {
        html.classList.toggle('dark', theme === 'dark');
        html.classList.toggle('light', theme === 'light');
    }
};

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', () => {
    const current = readStoredTheme();
    if (current === 'auto') applyTheme('auto');
});

const themeToggle = () => {
    const next = readStoredTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themeKey, next);
    applyTheme(next);
};

document.querySelectorAll('[data-hs-theme-click-value]').forEach((el) => {
    el.addEventListener('click', themeToggle);
});

document.querySelectorAll('[data-hs-theme-click-value]').forEach((el) => {
    const value = el.getAttribute('data-hs-theme-click-value');
    if (!value) return;

    el.setAttribute('aria-pressed', String(value === 'dark'));
});

applyTheme();
