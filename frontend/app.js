/* ============================================================
   DATA
   ============================================================ */
const ICONS = {
  logo: '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 26.2c-5.6-4-9.6-7.3-9.6-11.8 0-2.9 2.2-5 5-5 1.9 0 3.5 1.1 4.6 2.9 1.1-1.8 2.7-2.9 4.6-2.9 2.8 0 5 2.1 5 5 0 4.5-4 7.8-9.6 11.8Z"/><path d="M16 6.6 23.2 10 16 12.8 8.8 10Z"/><rect x="15" y="12.2" width="2" height="1.6"/><path d="M20.4 10.6v4" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/><circle cx="20.4" cy="15.2" r="1"/></svg>',
  discover: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"/></svg>',
  matches: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  dna: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 7 19 17 12 22 5 17 5 7"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>'
};

const GRADIENTS = [
  'linear-gradient(135deg,#1B2A4A,#34496F)', 'linear-gradient(135deg,#8B3FD1,#B06FE8)',
  'linear-gradient(135deg,#2F5233,#4C7A52)', 'linear-gradient(135deg,#96702F,#C0954E)',
  'linear-gradient(135deg,#3A5068,#5A7794)', 'linear-gradient(135deg,#1F5E5A,#3A8B84)',
  'linear-gradient(135deg,#5C2A4D,#82446F)', 'linear-gradient(135deg,#2B3245,#4A536B)'
];

const MAJOR_CATEGORIES = [
  {
    key: 'cs', label: 'Computer Science & Technology', icon: '💻', majors: [
      { value: 'Computer Science', icon: '💻' },
      { value: 'Artificial Intelligence / Machine Learning', icon: '🤖' },
      { value: 'Data Science', icon: '📊' },
      { value: 'Software Engineering', icon: '🛠️' },
      { value: 'Computer Engineering', icon: '🔌' },
      { value: 'Cybersecurity', icon: '🔒' },
      { value: 'Information Systems / IT', icon: '🖥️' },
      { value: 'Robotics', icon: '🦾' },
      { value: 'Game Development', icon: '🎮' },
      { value: 'Human-Computer Interaction', icon: '🧩' }
    ]
  },
  {
    key: 'eng', label: 'Engineering', icon: '⚙️', majors: [
      { value: 'Mechanical Engineering', icon: '⚙️' },
      { value: 'Electrical Engineering', icon: '🔋' },
      { value: 'Civil Engineering', icon: '🏗️' },
      { value: 'Chemical Engineering', icon: '🧪' },
      { value: 'Aerospace Engineering', icon: '🚀' },
      { value: 'Biomedical Engineering', icon: '🩺' },
      { value: 'Industrial Engineering', icon: '🏭' },
      { value: 'Environmental Engineering', icon: '🌱' }
    ]
  },
  {
    key: 'math', label: 'Mathematics & Natural Sciences', icon: '➗', majors: [
      { value: 'Mathematics', icon: '➗' },
      { value: 'Statistics', icon: '📈' },
      { value: 'Physics', icon: '🌌' },
      { value: 'Chemistry', icon: '🧫' },
      { value: 'Biology', icon: '🧬' },
      { value: 'Astronomy', icon: '🔭' },
      { value: 'Environmental Science', icon: '🌎' }
    ]
  },
  {
    key: 'biz', label: 'Business & Economics', icon: '📈', majors: [
      { value: 'Business Administration', icon: '💼' },
      { value: 'Economics', icon: '📉' },
      { value: 'Finance', icon: '💰' },
      { value: 'Accounting', icon: '🧾' },
      { value: 'Marketing', icon: '📣' },
      { value: 'Business Analytics', icon: '📊' },
      { value: 'Entrepreneurship', icon: '🚀' },
      { value: 'International Business', icon: '🌐' }
    ]
  },
  {
    key: 'social', label: 'Social Sciences', icon: '🧭', majors: [
      { value: 'Psychology', icon: '🧠' },
      { value: 'Political Science', icon: '🏛️' },
      { value: 'Sociology', icon: '👥' },
      { value: 'International Relations', icon: '🌍' },
      { value: 'Public Policy', icon: '📜' },
      { value: 'Anthropology', icon: '🗿' }
    ]
  },
  {
    key: 'health', label: 'Life Sciences & Health', icon: '🩺', majors: [
      { value: 'Pre-Med / Biology', icon: '⚕️' },
      { value: 'Neuroscience', icon: '🧠' },
      { value: 'Biotechnology', icon: '🧬' },
      { value: 'Public Health', icon: '🏥' },
      { value: 'Nursing', icon: '💉' }
    ]
  },
  {
    key: 'humanities', label: 'Humanities & Arts', icon: '🎭', majors: [
      { value: 'History', icon: '📚' },
      { value: 'Philosophy', icon: '💭' },
      { value: 'English Literature', icon: '📖' },
      { value: 'Linguistics', icon: '🗣️' },
      { value: 'Architecture', icon: '🏛️' },
      { value: 'Graphic Design', icon: '🎨' },
      { value: 'Film Studies', icon: '🎬' },
      { value: 'Music', icon: '🎵' }
    ]
  },
  {
    key: 'law', label: 'Law & Government', icon: '⚖️', majors: [
      { value: 'Pre-Law', icon: '⚖️' },
      { value: 'Criminal Justice', icon: '🚓' }
    ]
  }
];
function findMajorCategory(majorValue) {
  const cat = MAJOR_CATEGORIES.find(c => c.majors.some(m => m.value === majorValue));
  return cat ? cat.key : MAJOR_CATEGORIES[0].key;
}

const TEST_RANGES = {
  SAT: { min: 400, max: 1600, step: 10, academicMin: 900, academicMax: 1600, hint: '400 – 1600' },
  ACT: { min: 1, max: 36, step: 1, academicMin: 18, academicMax: 36, hint: '1 – 36' },
  IELTS: { min: 0, max: 9, step: 0.5, academicMin: 5, academicMax: 9, hint: '0 – 9' }
};

/* ============================================================
   LANGUAGE / i18n
   ============================================================ */
const STRINGS = {
  ru: {
    step_of: n => `Шаг ${n} из 4`,
    ob0_title: "Расскажи о своей учёбе",
    ob0_sub: "Это поможет нам честно показывать не только «нравится», но и реальные шансы на поступление.",
    gpa_label: "GPA (0.0 – 4.0)",
    test_type_label: "Тип теста",
    test_none: "Ещё не сдавал(а)",
    test_none_hint: "Ничего страшного — можно указать балл позже. Пока будем ориентироваться только на GPA.",
    score_label: r => `Балл (${r})`,
    ielts_hint: "Отлично подходит, если поступаешь из другой страны и сдавал(а) IELTS вместо SAT/ACT.",
    major_label: "Специальность",
    degree_label: "Уровень программы",
    degree_bachelor: "Бакалавриат", degree_master: "Магистратура", degree_phd: "PhD / Докторантура",
    next: "Далее →", back: "← Назад",
    ob1_title: "Твои предпочтения",
    ob1_sub: "Это стартовые веса Match Score — дальше система будет уточнять их по твоим свайпам.",
    size_label: "Размер университета",
    setting_label: "Окружение кампуса",
    climate_label: "Климат",
    research_label: "Важность research opportunities",
    budget_label: "Бюджет в год, до",
    aid_label: "Нужна финансовая помощь / стипендия?",
    aid_yes: "Да, важно", aid_no: "Не критично",
    ob2_title: "Где хочешь учиться?",
    ob2_sub: "Выбери один или несколько континентов на карте. Можно ничего не выбирать — тогда покажем варианты со всего мира.",
    map_hint: "Нажми на регион, чтобы включить/выключить его",
    country_refine: "Уточнить страны (необязательно)",
    ob3_title: "Профиль готов",
    ob3_sub: "Мы посчитали твой academic strength index и подобрали университеты под твои критерии.",
    strength_label: "Academic strength",
    major_kv: "Специальность", budget_kv: "Бюджет", regions_kv: "Регионы", world: "Весь мир",
    start_swiping: "Начать свайпать →",
    nav_discover: "Discover", nav_matches: "Matches", nav_dna: "University DNA",
    guest_line: id => `Гость · ${id}`, account_line: e => `Аккаунт: ${e}`,
    restart: "↺ Пройти профиль заново",
    restart_confirm: "Сбросить профиль и начать заново? Гостевая сессия и список Matches будут удалены.",
    discover_title: "Discover",
    discover_sub_fallback: "В выбранном регионе пока мало вузов в базе — показываем подборку по всему миру",
    discover_sub: n => `${n} университетов подходят под твои критерии`,
    deck_empty_title: "Карточки закончились",
    deck_empty_body: "Ты просмотрел(а) все университеты по своим критериям. Загляни в Matches, чтобы увидеть свой список.",
    view_matches: "Смотреть Matches",
    your_matches: n => `Твои Matches (${n})`,
    swipe_hint_empty: "Свайпни вправо, чтобы начать собирать список ❤️",
    how_it_works: "Как это работает",
    how_it_works_body: "Preference Match показывает, насколько вуз подходит тебе. Admission Reality — насколько реалистично туда поступить. Это разные вопросы: Match Score не учитывает твои баллы — он про совпадение вкусов, а не про шансы на поступление!",
    scholarship_label: "Стипендии/aid",
    added_to_matches: name => `❤️ ${name} добавлен в Matches`,
    your_matches_title: "Your Matches",
    matches_sub: n => `${n} университетов в твоём списке`,
    filter_all: "Все",
    empty_matches: "Пока пусто. Вернись в Discover и лайкни университеты, которые тебе нравятся.",
    to_discover: "К Discover",
    back_btn: "Назад",
    save_btn: "Сохранить", in_matches_btn: "В Matches", share_btn: "Поделиться",
    match_pref: "Preference Match",
    admission_diff: "Admission Difficulty",
    match_breakdown: "Match Breakdown",
    removed_from_matches: "Убрано из Matches",
    added_to_matches_short: "Добавлено в Matches ❤️",
    link_copied: "Ссылка скопирована (демо)",
    dna_title: "University DNA",
    dna_sub: n => `Обновляется на основе твоих свайпов — ${n} лайкнутых университетов`,
    dna_liked: "Liked", dna_passed: "Passed", dna_avg: "Avg Match",
    dna_profile_title: "Твой профиль",
    dna_profile_sub: "Чем больше свайпов — тем точнее эта карта.",
    dna_share: "Поделиться University DNA",
    dna_share_toast: "Карточка скопирована (демо для соцсетей)",
    dna_what_title: "Что это значит",
    dna_what_p1: "University DNA — это агрегированный профиль твоих реальных предпочтений, построенный по паттернам свайпов (implicit feedback), а не только по анкете при регистрации (explicit preferences).",
    dna_what_p2: "В финальной версии проекта этот профиль будет сравниваться с несколькими алгоритмами рекомендаций — weighted scoring (baseline), cosine similarity, KNN и clustering — чтобы проверить гипотезу: улучшает ли implicit feedback качество рекомендаций по сравнению с явно заданными предпочтениями.",
    guest_banner_title: "Сохрани список на будущее",
    guest_banner_body: id => `Сейчас данные привязаны к этому браузеру как гостевая сессия (<b>${id}</b>). Оставь email — и сможешь открыть список Matches с другого устройства.`,
    guest_save: "Сохранить",
    guest_email_invalid: "Введи корректный email",
    guest_saved: "Готово — список привязан к email ✅",
    why_cs: cs => `Один из сильнейших CS-факультетов в подборке (${cs}/100)`,
    why_setting: s => `Совпадает с твоим предпочтением по типу кампуса: ${s}`,
    why_climate: c => `Климат (${c}) соответствует твоим предпочтениям`,
    why_research: r => `Высокий уровень research opportunities (${r}/5)`,
    why_cost: "Стоимость обучения укладывается в твой бюджет",
    why_generic: "Похож по профилю на другие университеты, которые тебе понравились",
    snapshot: "Общая картина", location_kv: "Локация", setting_kv: "Окружение", size_kv: "Размер", climate_kv: "Климат",
    acceptance_kv: "Acceptance rate", cs_index_kv: "CS Strength Index", tags_title: "Теги",
    cs_program_title: "Программа Computer Science", cs_strength_kv: "Сила CS-программы", research_opp_kv: "Research opportunities",
    admission_reality_title: "Admission Reality", admission_reality_body: (g25, g75, s25, s75) => `Средние 50% поступивших сюда: GPA ${g25}–${g75}, SAT ${s25}–${s75}. Мы сравниваем твои цифры с этим диапазоном — так же, как это делают школьные консультанты по данным Common Data Set, а не по одному "смешанному" баллу.`,
    legend_title: "Что значат бейджи",
    legend_reach: "Reach — твоя академическая сила ниже типичной для поступивших, шанс невысокий",
    legend_target: "Target — сила примерно на уровне поступивших, шансы реальные",
    legend_likely: "Likely — твоя сила выше типичной для поступивших, поступление вероятно",
    your_profile_short: "Твой профиль",
    checklist_title: "Профиль заполнен", checklist_all_done: "Всё заполнено — Match Score и Admission Reality считаются на полных данных.",
    checklist_setting: "Укажи тип кампуса (Urban/Suburban/Coastal) — это часть Match Score.",
    checklist_climate: "Укажи предпочтение по климату — тоже часть Match Score.",
    checklist_size: "Укажи желаемый размер вуза (Small/Medium/Large).",
    checklist_aid: "Ответь, важна ли финансовая помощь — влияет на Match Score.",
    checklist_region: "Выбери регионы, где хочешь учиться.",
    checklist_progress: p => `Заполнен на ${p}%`,
    activity_title: "Активность", activity_today: "просмотрено сегодня",
    activity_breakdown: (liked, passed) => `Лайкнуто всего: ${liked} · Пропущено в этой сессии: ${passed}`,
    recent_passes_title: "Только что пропустил(а)", restore_btn: "Вернуть",
    restored_card: name => `${name} снова в колоде`,
    dna_preview_title: "University DNA", dna_preview_cta: "Смотреть полную картину →",
    essay_tip_title: "Совет дня: Why CS essay",
    essay_tips: [
      "Не пиши \"я люблю программировать с детства\" — это пишут все. Начни с конкретного момента: баг, который ты не мог найти три часа, а потом нашёл.",
      "\"Why this major\" — это не история любви к предмету, а история одной проблемы, которую тебе хотелось решить, и как CS оказался инструментом для этого.",
      "Приёмная комиссия читает сотни эссе про \"изменить мир через технологии\". Конкретный маленький проект убедительнее абстрактной миссии.",
      "Покажи, а не расскажи: не \"я аналитически мыслю\", а один эпизод, где это было видно в действии.",
      "Свяжи \"почему этот университет\" с конкретными людьми/курсами/лабораториями, а не с рейтингом — общие фразы выдают шаблонное эссе.",
      "Первое предложение должно работать даже без контекста абзаца — приёмная комиссия читает по 8-10 минут на заявку."
    ],
    filters_title: "Фильтры", kbd_pass: "Мимо", kbd_like: "Нравится",
    compare_title: "Сравнение", compare_cta: "Сравнить", compare_pick: "Выбери 2-3 вуза, чтобы сравнить их рядом",
    compare_empty: "Сначала лайкни хотя бы 2 университета, чтобы сравнить их.", compare_close: "Закрыть сравнение",
    edit_profile_link: "Изменить →",
    annual_cost_title: "Стоимость в год", sticker_kv: "Полная цена", est_aid_kv: "Оценка с учётом aid", your_budget_kv: "Твой бюджет",
    fits_budget_kv: "Укладывается в бюджет?", fits_yes: "Да ✅", fits_tight: "Впритык ⚠️",
    aid_options_title: "Финансовая помощь и стипендии", aid_level_kv: "Щедрость aid", merit_kv: "Merit-стипендии",
    why_title: "Почему этот университет?",

    /* ===== LANDING ===== */
    nav_how: "Как это работает", nav_why: "Почему мы", nav_pricing: "Бесплатно",
    nav_cta: "Начать бесплатно",
    hero_eyebrow: "Для абитуриентов",
    hero_title: "Найди университет, который реально тебе подходит.",
    hero_sub: "UniMatch — это свайпы вместо тысячи вкладок. Match Score показывает, насколько вуз совпадает с твоим вкусом. Admission Reality честно считает шансы на поступление по твоим GPA/SAT/ACT/IELTS.",
    hero_cta_primary: "Найти свой вуз →",
    hero_cta_secondary: "Как это работает",
    hero_stat1_v: "12,000+", hero_stat1_l: "программ в базе",
    hero_stat2_v: "0 ₽", hero_stat2_l: "бесплатно навсегда",
    hero_stat3_v: "4 мин", hero_stat3_l: "на первую подборку",
    hero_card_match: "Match Score", hero_card_reality: "Admission Reality",

    pain_eyebrow: "Давай будем честны",
    pain_title: "Никто не готовит тебя к тому, насколько это на самом деле стрессово.",
    pain_body: "Ещё до вопроса «какой университет» есть вопрос сложнее и тише: а что вообще изучать? Дальше только хуже — десятки вкладок, противоречивые советы, дедлайны, о которых узнаёшь слишком поздно, и постоянная тревога, что ты сейчас совершишь дорогую и необратимую ошибку — и некому это перепроверить.",
    pain1_title: "«Я даже не знаю, что изучать»",
    pain1_body: "Большинство начинают поиск ещё до того, как определились с направлением — а любой сервис исходит из того, что оно уже выбрано.",
    pain2_title: "«Не знаю, с чего вообще начать»",
    pain2_body: "Тысячи программ, десятки стран, и у каждого источника — свой совет, без единого способа понять, кому верить.",
    pain3_title: "«А если я ошибусь?»",
    pain3_body: "Это решение определяет несколько лет жизни и много денег — а большинство принимает его со строкой поиска и догадкой.",
    pain_footer: "Это не твоя личная неудача — так и должно быть, когда у одного из главных решений в жизни нет своего места. Именно этот разрыв и закрывает UniMatch.",

    how_eyebrow: "Как это работает",
    how_title: "Четыре шага до подборки, которая реально подходит.",
    how1_title: "Расскажи о себе", how1_body: "GPA, баллы тестов, специальность, бюджет и то, какой опыт ты ищешь — без сотни чекбоксов.",
    how2_title: "Мы считаем два числа отдельно", how2_body: "Match Score — насколько вуз в твоём вкусе. Admission Reality — насколько реалистично туда поступить. Это разные вопросы, и мы не путаем их друг с другом.",
    how3_title: "Свайпай и уточняй", how3_body: "Каждый свайп обучает твой профиль — University DNA становится точнее с каждым решением.",
    how4_title: "Получи подборку, а не список из 50", how4_body: "Не гигантская таблица для скроллинга, а компактный список вузов, которые реально стоит рассмотреть.",

    why_eyebrow: "Почему UniMatch",
    why_section_title: "Не очередной поисковик по университетам.",
    why_section_body: "Каталоги дают фильтры. ChatGPT даёт уверенные догадки. Личный консультант — это чей-то опыт и чья-то занятость. UniMatch считает Match Score и Admission Reality раздельно и честно, бесплатно и без выдуманных фактов.",
    why_col1: "Обычный поиск", why_col1_body: "Фильтры без понимания твоего профиля и реальных шансов.",
    why_col2: "Генеративный ИИ", why_col2_body: "Уверенно придумывает программы, дедлайны и цифры.",
    why_col3: "UniMatch", why_col3_body: "Честные Match Score и Admission Reality, отдельно друг от друга.",

    cta_title: "Готов(а) увидеть, какие университеты тебе подходят?",
    cta_sub: "Бесплатно. Без скрытых платежей. Начни за пару минут.",
    cta_button: "Начать бесплатно →",
    footer_tagline: "Честный подбор университетов: Match Score и Admission Reality — раздельно, без магии.",
    footer_contact: "Нашли баг или есть технический вопрос?",
    footer_contact_title: "Контакты",
    footer_product: "Продукт", footer_company: "О проекте", footer_legal: "Документы",
    footer_how: "Как это работает", footer_why: "Почему мы", footer_privacy: "Конфиденциальность", footer_terms: "Условия",
    footer_rights: "Все права защищены.",
    server_error: "Не удалось связаться с сервером. Проверь, что бэкенд запущен, и попробуй ещё раз.",
    connecting: "Подключаемся к серверу…",
  },
  en: {
    step_of: n => `Step ${n} of 4`,
    ob0_title: "Tell us about your academics",
    ob0_sub: "This helps us show more than just \"you'll like it\" — also how realistic getting in actually is.",
    gpa_label: "GPA (0.0 – 4.0)",
    test_type_label: "Test type",
    test_none: "Haven't taken one yet",
    test_none_hint: "No problem — you can add a score later. For now we'll base things on GPA only.",
    score_label: r => `Score (${r})`,
    ielts_hint: "Great if you're applying from abroad and took IELTS instead of SAT/ACT.",
    major_label: "Intended major",
    degree_label: "Degree level",
    degree_bachelor: "Bachelor's", degree_master: "Master's", degree_phd: "PhD / Doctorate",
    next: "Next →", back: "← Back",
    ob1_title: "Your preferences",
    ob1_sub: "These are the starting weights for Match Score — the system refines them as you swipe.",
    size_label: "University size",
    setting_label: "Campus setting",
    climate_label: "Climate",
    research_label: "Importance of research opportunities",
    budget_label: "Budget per year, up to",
    aid_label: "Need financial aid / scholarships?",
    aid_yes: "Yes, important", aid_no: "Not critical",
    ob2_title: "Where do you want to study?",
    ob2_sub: "Pick one or more continents on the map. You can leave it empty to see options from around the world.",
    map_hint: "Click a region to toggle it on/off",
    country_refine: "Narrow down countries (optional)",
    ob3_title: "Profile ready",
    ob3_sub: "We've calculated your academic strength index and picked universities matching your criteria.",
    strength_label: "Academic strength",
    major_kv: "Major", budget_kv: "Budget", regions_kv: "Regions", world: "Worldwide",
    start_swiping: "Start swiping →",
    nav_discover: "Discover", nav_matches: "Matches", nav_dna: "University DNA",
    guest_line: id => `Guest · ${id}`, account_line: e => `Account: ${e}`,
    restart: "↺ Redo profile",
    restart_confirm: "Reset your profile and start over? Your guest session and Matches list will be deleted.",
    discover_title: "Discover",
    discover_sub_fallback: "Not many universities in this region yet — showing picks from around the world",
    discover_sub: n => `${n} universities match your criteria`,
    deck_empty_title: "That's all the cards",
    deck_empty_body: "You've gone through every university matching your criteria. Check out Matches to see your list.",
    view_matches: "View Matches",
    your_matches: n => `Your Matches (${n})`,
    swipe_hint_empty: "Swipe right to start building your list ❤️",
    how_it_works: "How this works",
    how_it_works_body: "Preference Match shows how well a school fits you. Admission Reality shows how realistic getting in is. These are different questions — Match Score doesn't factor in your scores at all, it's about taste fit, not admission odds!",
    scholarship_label: "Scholarships/aid",
    added_to_matches: name => `❤️ ${name} added to Matches`,
    your_matches_title: "Your Matches",
    matches_sub: n => `${n} universities in your list`,
    filter_all: "All",
    empty_matches: "Nothing here yet. Go back to Discover and like some universities.",
    to_discover: "Go to Discover",
    back_btn: "Back",
    save_btn: "Save", in_matches_btn: "In Matches", share_btn: "Share",
    match_pref: "Preference Match",
    admission_diff: "Admission Difficulty",
    match_breakdown: "Match Breakdown",
    removed_from_matches: "Removed from Matches",
    added_to_matches_short: "Added to Matches ❤️",
    link_copied: "Link copied (demo)",
    dna_title: "University DNA",
    dna_sub: n => `Updates as you swipe — ${n} liked universities`,
    dna_liked: "Liked", dna_passed: "Passed", dna_avg: "Avg Match",
    dna_profile_title: "Your profile",
    dna_profile_sub: "The more you swipe, the more accurate this gets.",
    dna_share: "Share University DNA",
    dna_share_toast: "Card copied (demo for social sharing)",
    dna_what_title: "What this means",
    dna_what_p1: "University DNA is an aggregated profile of your real preferences, built from swipe patterns (implicit feedback) — not just the onboarding form (explicit preferences).",
    dna_what_p2: "In the final version, this profile gets compared against several recommendation algorithms — weighted scoring (baseline), cosine similarity, KNN, and clustering — to test the hypothesis: does implicit feedback improve recommendations compared with manually specified preferences?",
    guest_banner_title: "Save your list for later",
    guest_banner_body: id => `Right now your data lives in this browser as a guest session (<b>${id}</b>). Leave an email to open your Matches list from another device.`,
    guest_save: "Save",
    guest_email_invalid: "Enter a valid email",
    guest_saved: "Done — your list is linked to that email ✅",
    why_cs: cs => `One of the strongest CS departments in this set (${cs}/100)`,
    why_setting: s => `Matches your campus-setting preference: ${s}`,
    why_climate: c => `Climate (${c}) matches your preferences`,
    why_research: r => `High level of research opportunities (${r}/5)`,
    why_cost: "Tuition fits within your budget",
    why_generic: "Similar profile to other universities you've liked",
    snapshot: "Snapshot", location_kv: "Location", setting_kv: "Setting", size_kv: "Size", climate_kv: "Climate",
    acceptance_kv: "Acceptance rate", cs_index_kv: "CS Strength Index", tags_title: "Tags",
    cs_program_title: "Computer Science Program", cs_strength_kv: "CS Program Strength", research_opp_kv: "Research Opportunities",
    admission_reality_title: "Admission Reality", admission_reality_body: (g25, g75, s25, s75) => `Middle 50% of admitted students here: GPA ${g25}–${g75}, SAT ${s25}–${s75}. We compare your numbers to that range — the same way a counselor would read a Common Data Set filing, not a single blended score.`,
    legend_title: "What the badges mean",
    legend_reach: "Reach — your academic strength is below typical admits, odds are slim",
    legend_target: "Target — roughly matches typical admits, realistic chances",
    legend_likely: "Likely — your academic strength is above typical admits, admission is likely",
    your_profile_short: "Your profile",
    checklist_title: "Profile completeness", checklist_all_done: "All set — Match Score and Admission Reality are running on your full profile.",
    checklist_setting: "Add a campus setting preference (Urban/Suburban/Coastal) — it's part of Match Score.",
    checklist_climate: "Add a climate preference — also part of Match Score.",
    checklist_size: "Add a preferred university size (Small/Medium/Large).",
    checklist_aid: "Answer whether financial aid matters — affects Match Score.",
    checklist_region: "Pick the regions you want to study in.",
    checklist_progress: p => `${p}% complete`,
    activity_title: "Activity", activity_today: "reviewed today",
    activity_breakdown: (liked, passed) => `Liked in total: ${liked} · Passed this session: ${passed}`,
    recent_passes_title: "Just passed on", restore_btn: "Restore",
    restored_card: name => `${name} is back in your deck`,
    dna_preview_title: "University DNA", dna_preview_cta: "See the full picture →",
    essay_tip_title: "Tip of the day: the Why-CS essay",
    essay_tips: [
      "Don't write \"I've loved coding since I was a kid\" — everyone does. Start with a specific moment: a bug you couldn't find for three hours, then found.",
      "\"Why this major\" isn't a love story with the subject — it's the story of one problem you wanted to solve, and how CS turned out to be the tool for it.",
      "Admissions officers read hundreds of essays about \"changing the world through technology.\" One concrete small project is more convincing than an abstract mission.",
      "Show, don't tell: not \"I think analytically,\" but one moment where that was visible in action.",
      "Tie \"why this university\" to specific people/courses/labs, not rankings — generic phrasing signals a templated essay.",
      "Your first sentence should work even without the paragraph around it — admissions officers spend 8-10 minutes per application."
    ],
    filters_title: "Filters", kbd_pass: "Pass", kbd_like: "Like",
    compare_title: "Compare", compare_cta: "Compare", compare_pick: "Pick 2-3 schools to compare side by side",
    compare_empty: "Like at least 2 universities first to compare them.", compare_close: "Close comparison",
    edit_profile_link: "Edit →",
    annual_cost_title: "Annual Cost", sticker_kv: "Sticker price", est_aid_kv: "Est. with aid", your_budget_kv: "Your budget",
    fits_budget_kv: "Fits budget?", fits_yes: "Yes ✅", fits_tight: "Tight ⚠️",
    aid_options_title: "Aid & Scholarships", aid_level_kv: "Aid generosity", merit_kv: "Merit scholarships",
    why_title: "Why this university?",

    /* ===== LANDING ===== */
    nav_how: "How it works", nav_why: "Why us", nav_pricing: "Free",
    nav_cta: "Get started free",
    hero_eyebrow: "For students",
    hero_title: "Find a university that actually fits you.",
    hero_sub: "UniMatch turns a hundred open tabs into a swipe. Match Score shows how well a school fits your taste. Admission Reality shows, honestly, how realistic getting in is for your GPA/SAT/ACT/IELTS.",
    hero_cta_primary: "Find your fit →",
    hero_cta_secondary: "See how it works",
    hero_stat1_v: "12,000+", hero_stat1_l: "programs in the database",
    hero_stat2_v: "$0", hero_stat2_l: "free, permanently",
    hero_stat3_v: "4 min", hero_stat3_l: "to your first shortlist",
    hero_card_match: "Match Score", hero_card_reality: "Admission Reality",

    pain_eyebrow: "Let's be honest about it",
    pain_title: "Nobody prepares you for how stressful this actually is.",
    pain_body: "Long before \"which university,\" there's a harder, quieter question: what do I even want to study? Then it compounds — dozens of tabs, conflicting advice, deadlines you find out about too late, and the constant worry that you're about to make an expensive, irreversible mistake with no one to check your work.",
    pain1_title: "\"I don't even know what to study\"",
    pain1_body: "Most students start the search before they've settled on a field — and every tool assumes you already have one.",
    pain2_title: "\"I don't know where to even start\"",
    pain2_body: "Thousands of programs, dozens of countries, every source giving different advice with no way to tell which one to trust.",
    pain3_title: "\"What if I get it wrong?\"",
    pain3_body: "This decision shapes years of your life and a lot of money — and most people make it with a search bar and a guess.",
    pain_footer: "None of that is a personal failure — it's what happens when one of life's biggest decisions has no dedicated place built for it. That's the gap UniMatch exists to close.",

    how_eyebrow: "How it works",
    how_title: "Four steps to a shortlist that actually fits.",
    how1_title: "Tell us about yourself", how1_body: "GPA, test scores, major, budget, and the kind of experience you're looking for — no hundred checkboxes.",
    how2_title: "We score two things, separately", how2_body: "Match Score shows how well a school fits your taste. Admission Reality shows how realistic getting in is. Different questions — never mixed together.",
    how3_title: "Swipe to refine", how3_body: "Every swipe trains your profile — your University DNA gets sharper with every decision.",
    how4_title: "Get a shortlist, not fifty results", how4_body: "Not a giant table to scroll through — a compact list of schools genuinely worth your time.",

    why_eyebrow: "Why UniMatch",
    why_section_title: "Not another university search engine.",
    why_section_body: "Directory sites give you filters. ChatGPT gives you confident guesses. A private counselor gives you one person's network and availability. UniMatch scores Match Score and Admission Reality separately and honestly — free, with no hallucinated facts.",
    why_col1: "Generic search", why_col1_body: "Filters with no sense of your profile or real chances.",
    why_col2: "Generative AI", why_col2_body: "Confidently invents programs, deadlines, and numbers.",
    why_col3: "UniMatch", why_col3_body: "Honest Match Score and Admission Reality, kept separate.",

    cta_title: "Ready to see which universities fit you?",
    cta_sub: "Free. No hidden costs. Takes a couple of minutes.",
    cta_button: "Get started free →",
    footer_tagline: "Honest university matching: Match Score and Admission Reality, kept separate, no magic.",
    footer_contact: "Found a bug or have a technical question?",
    footer_contact_title: "Contact",
    footer_product: "Product", footer_company: "Company", footer_legal: "Legal",
    footer_how: "How it works", footer_why: "Why us", footer_privacy: "Privacy", footer_terms: "Terms",
    footer_rights: "All rights reserved.",
    server_error: "Couldn't reach the server. Make sure the backend is running, then try again.",
    connecting: "Connecting to server…",
  }
};
function t(key, ...args) {
  const dict = STRINGS[state.lang] || STRINGS.ru;
  const val = dict[key] !== undefined ? dict[key] : STRINGS.ru[key];
  return typeof val === 'function' ? val(...args) : val;
}
function setLang(lang) {
  state.lang = lang;
  saveGuestSession();
  if (document.getElementById('mainapp') && !document.getElementById('mainapp').classList.contains('hidden')) renderApp();
  else renderOnboarding();
}
function langSwitcher() {
  return `<div class="lang-switch">
    <button class="lang-btn ${state.lang === 'ru' ? 'active' : ''}" onclick="setLang('ru')">RU</button>
    <button class="lang-btn ${state.lang === 'en' ? 'active' : ''}" onclick="setLang('en')">EN</button>
  </div>`;
}

const CONTINENTS = {
  na: { name: "North America", cx: 165, cy: 145, colors: ['#3A5068', '#22334A'] },
  sa: { name: "South America", cx: 280, cy: 320, colors: ['#2F5233', '#1E3821'] },
  eu: { name: "Europe", cx: 470, cy: 95, colors: ['#5C2A4D', '#3E1B34'] },
  af: { name: "Africa", cx: 485, cy: 255, colors: ['#96702F', '#71531F'] },
  as: { name: "Asia", cx: 670, cy: 140, colors: ['#D97A3D', '#A8571F'] },
  oc: { name: "Oceania", cx: 755, cy: 345, colors: ['#1F5E5A', '#154440'] }
};

const UNIVERSITIES = [
  { id: 1, name: "MIT", city: "Cambridge", country: "USA", continent: "na", cost: 57900, acceptance: 0.04, gpa25: 3.63, gpa75: 3.98, sat25: 1430, sat75: 1580, size: "Medium", setting: "Urban", climate: "Cold", research: 5, cs: 98, tags: ["Elite CS", "Research Powerhouse", "Urban"], photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAISArwDASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABAIDBQYAAQcI/8QAWBAAAgEDAwEGAgUKAgcDCgENAQIDAAQRBRIhMQYTIkFRYRRxBzJCgZEVFiNSVZShscHRM2IkQ1RyleHwU4LxJTQ1REVjc3SSsggXJmWEJ2Q2g4WTosLS/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAAICAgICAgIDAQADAAAAAAABAhEDEiExBBNBUSIyBRRhQiNScf/aAAwDAQACEQMRAD8A65eW8k17cSHUdRQNK64ivHVUAPGFHApHwbDj8oasP/6g9GTf403/AMeT/wC6kAV0qKo5JTlYN8G37Q1b9/krYsmP/tDVv36SigopWKdL6DaX2CfAt+0NW/fpK38C37Q1X9+kooCt4paoNpAosG/aGrfv8lb+BP7Q1X9/kooZreKNUPaQJ8Cf9v1X9/krPgD+0NU/f5KMA45/jxTMlyI50iK5LDPHpRqhbsa/JxP/ALQ1T9/krY00/tHVf3+SjMYPpj1pVGqK3YF+TOP/AEhq3/EJK1+Tf/0hq3/EJKOwazb70aoW8gH8m/8A6Q1b/iElKGmDz1DVv+ISUZitilSDaQJ+S1/aGrf8QkrPyWv+36t/xCSjRWYoqI9pAX5MX/b9W/4hJWfk1P8Ab9W/4hJRuKzFGqDaQF+TU/2/Vv8AiEla/Ji/7fq3/EJKOxWYp6oNpAX5MX/b9W/4hJWfktf9v1b/AIhJRuK2AaWqFtIC/Ja/tDVv+ISVn5LX9oat/wAQko7BrMGjVD3kA/ktf2hq3/EJK1+S1/aGrf8AEJKPxWYo1Qt5AH5LX9oat/xCSs/Ja/tDVv8AiElH4rMU9UNTkA/ktf8Ab9W/4hJWfktf2hq3/EJKOxWHilog3kAfktf2hq3/ABCSs/Jq/wC36r/xCSjxzWbTnpT1QtpAB01f9u1X/iElZ+TU/wBv1b/iElH7GPQZ+6tGNuPCefajWJW0iO/J699s+O1X6uf/AEhJTh01AT/p2q/8QkpRJOqRIZAGeNgIsjLEHr78UUVYdQRn18qHFIjdgX5NT/bdV/4hJWfk1P8AbtV/4hJRgBre1vQ0tUVbATpo/wBu1X/iEla/Jo/27Vf+ISUfsbHQ1rY3oadILYCdNB/9f1X/AIhJSfyb/wDpDVf+ISVIbG9K1to1QtpIA/Jv/wCkNV/4hJWfk3/9Iar/AMQko/HtWY9qesR7yADppx/6Q1X/AIhJWvyaf2jqv/EJKPIpOOKWiFtIB/Jw/aWq/wDEJKz8nj9o6t/xCSj/AL63gUaoW0vsjvye3lqGq/8AEJK18C3+36p/xCSpLuwfPFb7lfXNFRC5EZ8Cf9v1X/iElZ8Ef9v1X/iElSJiHlWu5oqI7kAGybH/AKQ1X9/kpHwLftDVv36SpLuvLFZ3C/KnUQuRG/BMP/X9V/fpK38G37R1T9+kqRMC0nuFzyKdR+hXIA+Cb9par+/SUhrNx/7Q1b9+epFoEx4eDWto9KVR+hXL7I/4GT9o6t+/PWfBOD/6S1b9+ejioxTZXzp1H6FtL7BTaSftHVf35618K/7S1X9+eisD0rW3NPWP0Fy+wX4Z/wBo6r+/PWjaSeWp6sP/ANdei+79DWbD6j8KdR+guQF8NJ+09W/fnrDbyj/2lqv789G937itd2KKj9DuX2AfDy/tHVv356zuJvLUtV/fXqQ2CtbBRUfoVy+yP7iY9dS1b7r56SYZgf8A0lq3789SBjz54pBT3pqMfoTlJAPczftPVB/+vPWdzP5apqn789FFSKzbnzqtY/Qt5AvdT/tPVP3560Y5x/7T1X99eiWXFIPyp6QDeQyElH/tHVv356Vtl/aGq/vzUrA9K0QPSn64BvIQe+3HGpaoP/156zbcftLU/wB+elkeGk7aXrgHskJ7u5/amp/v71hS5/auqfvz1sisBb1NGkfoPZIbKXXlqup/vz1opd/tXVB/+vPTwJ9aUHI6809I/Q939guLz9q6n+/PWEXuP/Smp/vz0T3g9KSXpaR+hbv7BG+NHP5U1PgHrevz/ard2V+IbSpBNcyzlJmUPLLvYjAPX76rTMCDnHSrP2ZAawnx0E7D+C1lljFR4LhKwaQfp5v/AI8n/wB1JA5p1x+mm/8AjSf/AHUnFRHoJLk0BW8UoCt4p2FCcVvFbA5pVFgJANYBSxWgKBmKcMM9c4+Wa4xr/aTX7efUU/Ks6SQSOg244A5FdoA5z1864z24tBF2t1SEDAly/wD9S1thSb5McvC4LH9HnaK/1C+e2vruW6E0QdDJyVIFdDA4zXGvowutmuWIZuShj+8V2kDC7euKMqSYYuexOK1il4rAKxs3SNYrAKXtrAOaVjo0BWYpWKzFMKE4rMUrFbwKBicVgFLArQHvSFQnbWYpwjisApBTEYrNuKXtFYRTsBGKzFKxWwKLGhGKzB/Vp8BaVhR5UtiqBse1bA9qJ2r6VvavpS2HqDgqPs1vvcHhB+FP7VrNqk1OwajXxDeQUfdVO+k7Wb3Tuy6S2ty0A73EvdHxFcfj1q7NCGGMiuV/S7aquoaa4JX9CwH3Grg7kiZ9HOH15y4b4m773B8QJyM9cGurfRhrt5rMV1Fdzy3CQgbWkGSPauWCJVPAA9qtX0csy9tbSJWZUcMGAOAeCea68iVHNF8naVQDyA/rTgx7Ugq2OK3mTzA/CuGzsoUQCeDzWBT54pO4gcitd7/lpBwKaJG6mmZIVHQml96w9K13zVSD8Qcpj1rW0+honvCfSsLewp7ENIGI9q1j2ojOT0rCR0wKexOoNW8U4UXritFaexNCKwilY5rCKAoTnHlWi49KVjNaKZ86pAJ3Vma2VxWse9MRm40ndg0rFaI5pAJL+1a3e1LxWtooChBpBFOlaSV5oEN7a1tpwitbadiEY4rMUvbSSKAE4FaNKxW8UDGs1hNOED0rXHpQA0TSTinyQPsitFh+qKqxMHI4rVPkg/ZFJ6+QH3UbE0M1hA9KcI+X4UnFUpDobKikke1OkUkr7U7FQ0VrNvFObfasxTChgrWttPEe1awPSgKGiK1inCPatYoBoaIpOKdIrRHtRZNDLDg1a+ywxp0//wAw38lqsFeKtHZgf6Bcf/MN/IVjlf4muNDLj9LMf/fSfzrWOaUR+km/+NJ/91Zisl0aPs0B7VvHtSxWHnApiEAc1vFbx7UoCi0goSBW8UoLShE1LZFaDZGcVyz6TLcQ9qIZsECaBST644/rXWBG2eVNc9+lW2I/JVyRgeOMn8D/AErbDOpIxyxdWUDsTJ8N2htT07q6IPyNd/xkk+RNed9Ll+G1q4PTbLHIB6Zr0VAveWsUgOVdQf4Vefsnx1didtbC073eOc1mK5bOvQRisxzSgKzHNOxUJIrMUoitiix0JxWYpWKzFKwo0FzSu79j91aK0vJpNhQkr7VrpS9zYrMk+lAxH3VlLxWYpBQ3it4pWK1inYqNVsUrFZj2osdGs/Osz86VyOlaOT1oAzPvWZ+/5VmPasxTGYORkeuD7VzL6XZEE2kltxBEgBAz51edf1qHQtLF5MwUblTON2B58VyTtfrQ1WfetzNMgkZo1cY2g9a0xxt2jDI64Kp8SP1Jf/pq0fR1OrdutPOGXlhhhj7Jquru9Wx7mrB2GLDt1pmMfXOc9fqmumfRhDs7oHbHStGRq2AfurRXNcB2mic0mld2azuzQAnFapfdmtd2apMVCayliM+tZsPrTsKEYrRHNObD61hQ1NhQ3ik4p3afStbT6U0KhvHNYRzTndn1rRjPrRdD1G8VlOd2fWtGM+tGwtBsiklfane7963txRsLQZ2n0rRU+lPkVojijYegxg+lZtPpT2K1insGgztPpWipz50/WEUbi0ByhrW00RitYo3DQH2n0rRQ+lE4rRxRuGgNtPpWtp9KI4rOKewaAxB9DWtvsaIIGa1gUbC0B9meta2YNEFR5ik7RnpRuGgwUpOwiiSo9KzAFGwtAYofStFeOlEnFJIFOydWD7eOlIK59aK49K1gelPZj0BSPY1rB9KJIHpWiBRsLQGKmk7TRRArWBT3GoAuKzY3pRBQeVa20bg4ApU+la20UQKbKj0p7i1GTHwflVl7NDbY3A//AHhv5LVfI8J+VWLs4P8AQ7j/AOO38lrLI7RcEMFSZJsf9tJ/91a2NmlqcSzf/Gk/+6lFgDWaZo0hITHnW22rG7seEUt+AzWzIVBIOMDz6f8AjUF2g7Y6L2dPcX91slkiZkjUb2xjHPpnNNW2HCJm0e3vLaK5t5N8Uqhlf9Yf+OaJEKjnJrl3Y36SNGstDg06/meCSKQqkgUldrEkZJ6Y6V0uOWOaJZIXWWKQbkdTkMPUU5Ra7Dgf2gUoYpkVmSPOooY7nmqd9KEKydk4Z8ZMFwD9xBq25NQXba3Fz2Nv181UN+BFXjvZEZf1o4YR3WuMc8TQgj5ivQegzm57O2MufrQrXn24/wDSNlI3nuQn7uK7l2Gn77sfZ+qAqfuNdOc5vH7ZYPvrMVlZXIdpgFZjmtit4oATitgUqtiiwoTtrNp9K3I4ihkkbIVFLNgZOByeK5pe/TJAt1KLLR5bm3B8MjS7Mn/dpxi2JtI6Vis5rl8X0yMXTfoBRCwDsJ/qj1FXjs72r0/tP8R8CJv9HxuMq4JzTaaEmmTOKzkUodawipsqhPWsxW8VnT1z5YosDWKzFVLWPpK0vRdWudOltLqSa3bDEY28jNVrWvpemSWEaNZqibT3zXg8RPlgCrUWyW0jqWKVjiqJ2K+kSftBqcWl31msd04ZhNE2E4GeB1q+DGOmKh8cAuTWKzFb8wT0zj51Xu0HbnRezOorZ6pJPHKyb1KQ7gRS5fRVFgxWVRj9MXZRQNrXjFuAO5IqV7O9udK7TX72djFdrKiFz3se0Yp1Ingp/wBJd58Rr0FiAO7tk3AAYO49aol/LISqBS4XPA96t/0lX8Nt24aJg5dokOAvqKp97xcfdXoY1UDhm/ypgZnmBIFq3/1gVOdipZPz20suhjJnAxnPkahvOpfsowTtjpRIzm4UUpdDj2egzjJGOhNaApZ+s3zP861ivOs7zWKzFY3hUksBjnPpUY3aXRY3VG1S2XP6zjijkZJ4rWKjLLtFpF9c91BqEEkpbaqq4PecZytSQ56YPuKKaDg3isxWc1lFsRmKzFZWs80Wwo3itVmazcKdsKMrRrNwrW6gZhpJ6UomknrQI1WVlYTQBhrRrCaQTTA2aytA8VugDKSetbJrVCAytVukk0mIzOKSa2a1QM1WGsrDTFRqknrWedboExNaxSiSOlIJp2FmVo1hpJOaoDD0rKytZpkmjSKWTSSKLEarRNZnFYTmixpGqytdKTnmgGzZNazWeVINMk2TSCa3WjSsXJong/KrF2d/8zuP/jt/IVXfsmrF2cH+hXH/AMdv5LUzZcExghmaXapP6eT19a3sKRNI/hVRkk8D559K4t2y7V6/YdrNYt7XV7yGCO6kCxo+ABnpVV/Kt5JHve7uJCR4laU8/OqWLiwbo9ET6nax2VxcQ3MMxgjaXbG4Y8DPT515zvLx9Qvpru5Zp5p3Lsz/AFjk9KfhnZFbYxXcPsk/hQTtyFJ6DFbY40RJ2GWd5pkad1f6Z8QIgSkltJ3cjezeoFXLsX25sNE1FbPu7y00iZTvFxL3oifyZfRfWufHCkbcDz4re44xn/lWjgmSejdI7U6Jrty9vpmox3UqLvZFBBAqVFcN+iy7+H+kC1jJ8NxDJF9+Mj+Nd12gqG9ePlXJkTT4Noy+xi9aVNNuntyBMkLvGSMjcATzXErr6Se0WpWz2zyWwjnXbIvw4A644ruZVWUo/wBVhtwffivMeoQ/A6ndWzZBgmdOPLnNOCIyO1wEahlEt3ySFnXz9a7N9Gc/e9m5ogc91MR8q4nfT95pUhRgWADHzxg11L6IbwOt9b7hkhZACceVb5uUcuG1I6aB61vFJMiA8yID/vCtGaPpvX8a46Z6AsCt4pg3luDzOn3Vnx1t/wBun40UwH6ymDfWoHNwg++s+Ntf9oT5UqYrHnUvG6jzVh/A15kZDHdTRnh45XX5YYivSg1K0Vxm4jAzg815210pF2o1ONCCnxMhBHTljXVgTMcvQIMjGPLpXR/ogl26rqUG85MKsD8mrmxbFXP6ML2Ky7YOZX2xy2zKPmDk1rkXBnDh2dsx0BBAzngfwrm+q/Sm1rd3EENgpMExjBMh8WKvKazZh1O88n5Zrz92iZW1vVD0Q3jYx6GufHC+zaeT6O09nO2kGrdl5NZv40sIopTG53FgKHvvpN7N2QURXMt7k+LuE+oPcmqR2NvgnY/tDpO7EYQSxKFyefrH5dKojuUlcICEHTNUsSsn2MnO1OrW2udpLzUbTckNwVIWTAbgAVAz5ATHhyfkRWd8SuSwBz0xSJriW4UyTOZHPG5uuK6YxSRlJ2TvZrXoOzXam11C5jleNVZSqLyQVxXQ2+mfRhGSNN1A8Z4A/CuQi4fcWOSemTzTnxUwJ8fPnjzNZyxxfJcZ0j0lpWq2uradDdQSqO8jEjR7gXjB8mHrXF/pN1+HU+17xRW0hSxXue8Bysg65H40r6OdYj0ntBfG4dUjuLMjxPgFs1S555e9lxIxG5sDORjcfOohjadlOVj6uskeQuB6EVffokl//PCZc8G0IA+Vc6SXaX3twvTnirT2E1yHRO063krKI+4cc9M1pJWuCU+SR+lwGP6QIGP1Wt4z/HFVm6l76ZHQBWePO1zwKlfpK1lNY7RWVzBtZGgVQQfMNVfldm1B9zlgIxjJ96qHCpnPOO0rHsXPkkP35NSPZ55Y+1WltJsGLlPqj3qLBYDgNu9cURplzJDqlrNwWjmVhu4HDCiXVFRVOz0u5xI3+8f50knjqB86pLdtrgu2ZLc8+SU03buYD7BB6bY+tcnpkdXuiB9tvpG1DQe0DaXaWUTpGA0kkh+uGXoB5VyybVJ5W5tVGc87/WpLthqL6r2onvpAVaQKDkYzhQBULkeua6IY0lyYyyNsK03VtQ07UIby1KR3ERwrnyPmuPlV7P0x6ljw6FbH3MpBNc7VyoIHmc596TkdPnTeNMSmz0B2O7Sz9qNCa/mtUtXWZo9iMWBAxzn76n92F5J6ZzXGex3aS60fQpLaFjzOzAAZznFSt3231GSymUyBQ8TJkcHkfwrF4XZospen7W6MmuRaQb0G+lcKkajIOffpUxnxN0PkAM5rzJasyoGUlWByGB8QPzq29nO09/Y6SYBLLNH3rMBvyQT70ekr2Hb8N6N+FI+4/wAa5S/ba9SBmWeVWUE4J8vX5Uhu22qEAd9Iv/f60eon3HWOnkw+dbHPTmuPy9sL0sBLM5yM57z+FD3PbK6tkDbWbPl3pFCwh7WdnYlcZwPmaSHRujg/I1xAdu7vwLKh8fH1zxk0b+c8ikiNtrezEZ5p+kPYzsmRjrTZdc/XUfM1x5+017HIA0xUc/azSJO0kxlA3q4PmRxR6Q9rOwm5gXrcQj/vikteWw5+JgwOviFca/OG5lmWMPgscfVHB9abm7STtC6xs6OcBGJ8/PIo9IexnYm1rTUzm6jA+WaQ2uaaq7vi0wPLFcYHae8Q4eUuFPPFPS9ormM4Zwc4PEfrVLEvkTySR109oNMxxcZz7GsHaHTPO4x77TXIG7QymNx3iFh0OP6U2naO6SBXdUYk9VWqWGJHtkdpTV7CUeC7ix/mOKI3K3RlPyYVww9rJwCZFULnAJXisj7UXjHZCBuHUocYqZYF8F+6R3XYccg4piS6t4T47iFSPIsK4qe1Go7WD3w6cKrZpvXLy8gutLEdzKry24mlXdxuOf7UvSHsZ2f8r6du2/GR5+YpYv7RhkXUJH++K4hNf3qaL8abqXe0uzrxQ41i7VPDeu2Dzg5o9KBzkjuzXtqgybmD73raXdtKSI7iJyv6rjmuFHVr/IY3MhXyIPn8qQdcvNoIvX48wafpQbs7vNeW0JHeXEaHHQsKbS+s5eEu4WPoGFcPGu30rsTOwC9CVzWvy3eZw10cnJB20nhQeyR3cFW5Vgw/ykGmpZoIAWmmjjX/ADHFcg1jVrrSbruba5kKrGjMc45I5qMk16/kcO1wzKF3EdTSWJFeyR2Q9oNKBx8Yn4GlLrGmvyL2ID3OK4wdfuhGFacqTweABTSancmSU/ElSoyQ7YDCrWKJG8jtT61pasR8fDx15zW49Y02Y4S9hJ+eK4XLrl1LIQbqSIDg7TiiItalYOInB2HwBxyRT9UQ2kdua9sl5N5CB/vikHVtMQ83sJPpuriya5N3e8lQMZwVoeXVZLy1Ze+XBP1QMEUetBvI7ZNrelwZ330Rxyccn8KCm7VaXGuY3klz5hMfzrki3t0ERVkL7RjHU1s392v1pBnzXzxTWOItpHTz20s87fhJ/bBHNPxdrNLkYBzJCf8APXKDqVygz+jKEZyeOa0urTk+Fef8oqtIhtI7Vb3lteDdbzxN7bqc3KRkEOP8h3fyrif5SmEUhV+78POD1zQGn393FMVimkRQcEBzzWMsaT4Not1yd7OcdM8VY+zx22dwMH/Hb+Qrzt+WLkFR8S4BHQOa7R9FdxJddkHldt5N1IMk58lqMkKVjjI4t2/mC9udaXp/pj8moSQAwBvMAc1Ze29zt7c6yphRsXcnJGarMd+Wu3V4UBZgPq8YrfH+pE+zLOXIdQeV5pUvhwc5zTizIpIVUHyWtvcF2BMcZwfStEjNsHLbiMg/cK1x7/hTTvhT5eLypyO+lj5GB6eHJFMSYRpt/LYarb3du5jkiYEN6Gr8e1+vhVYO5cKVVgM5PXpXNRd3DSjD5OQfqipvTXme/UNftAOjO2W3e2BUvV9orXgt1t2q1Nblbm9uHZFYb4idpYf0qlazLb3euXk1uDHHJIWVGO4j2zUnrl7p0MW/TtRe+n6MksRUxj/xqqwzv3xZipDnLH+tZ8XwNdBHeIYniLrkjGPf0q3/AEearY2WpyXV7JshECqyEkE84J49P61S4YRJf94BuVfECBwaXo0hXUtqeAKrsSf+v4VUlaJXB6Auu1HZO2mgCzd/FKwBlTLKmfNvalXOudl+8aNdTihLefdscVw61uN1kIQ0iEYH1cLwc8n26/fT9zrBu3Z3LGUcKAuBmsvW/s0UjsEV/wBnZ1DR9oncg87Yz/GhbHWuzl5quo2cuuOBbEd22docY5xx1FcihunQkfESREnJKLwKQJD+UZJC6y7zkybcbs+ftQ8YbHbGuuyfcl21SebZycHkCoOfUNO0+J5p2mnVy3dpkrn0BNc+itrqRJB3biJvrtkDaAOvWpHVtUW6ihjQEtGF8ZI5wPTNJRpibRKntNE7NuK2qnlFc54+dVm6EM2pXM/xVsyswPL4qHuGD3sg3bvQZ6U2RGQRhcHzxmt066J/wlMxtLlHjcDptbNPWM7Wd2k6k5QEcHHXrTNjDZ2kW0MJZXXLSbMbB7DzNFGawRTA/egdTKFyze2PKpbHRIy9rUFzGJIZDg8EScVE3yNPJc3QQIsp3YznFOLqdoiK0Ddy7ZVUEYO8+5PnUbO4M6gnG/IYYwM0LgmUSRtLy4tXVoJniEuI5Ap+up8jQV4irfSccgkA+2eBSI7lBsYk5Xj8DW7kG6uw0XiEpOBnGPnT+QGkyck8g9KchthLGQz7Mnj3rS2NyG24VeucuOP404oaMjncOoxVWAuKwjL7DK3zI6029ltZtr8oec+VYHLEkseBwPWtsfE2D1HOD1osKG+6USBi4cAYxQqAuTCrHGcH256Ub3ZaHCrx5HHWgYVlilYNGyMedrDmlYwtrKEnO5seYIzRCxx28iFZBt2ksSuNvtQpunVtvQ0lp2dSjH6xB5pNhQXqq20rW7Wd01wFXxll27GznaPWmnMc8zSbjtwBt6EUApzKPEWHU+VPoI1lUE7Vf7WeR70mKgzuLfYCM5/3jW0jigkUjIbrjP8AGnu7gS3yswlDfVJGM+9CuZDnMihlHAPpSVgSx1pD4EuHGR1xwK2upmOBRJeO4XjJ4UE+9V0GRCSSgA4JPlSmkklhZWYNG3LKRjmrSYmkSOoMJrtnN3bHgNjvc1HPdRK2C4OPSmxaQdysxWBIz5H6wp74O2IJ76ESDovrTsijSXKu2FGfvpaMXPQA+maQsEUcgUSQq7YwB507NbPb8t3ZyMgg5z7cedFjSD7GecIvdsVw+Rtbmi7ue5SAd4gRSScsQSfnUTA4giWR54lVuSnO6nL65t1iVY7Yxy7dx3OTke4pWUomWn+GcetSFjPFa2v6TaXeQgYbBHuR5VXl1PuwdsZC49OtZDqP6VQyLuySG9Pc+tAyxy3U0dv3UfdiKcguAeuPLPkPakCVTCC2CyHxYBOB61HSalF3cjpsmY4AVevPXApqTVJSC8WYon8OM/WHvU2NION7hgwhDbeRz6Uq7ka9SMqv6QnkAeXtULNLlFO8RgcnaOflUnp91Dd3qxiAopVgRzz4TznPFOx0NToUljJwrIVJDegNSsFs9/bPMrB1ycMpzgZ9OtRAtYu7WR18AUkckkjz60JZaw2mX/f29uAwUgZzxnzqXJj1JqedRGINpR9xG88+H19qVH8KY1VTM8y/WA6VDy6i7szPEqkYbC5IJPnT8ZuJbZ7iMqsS5EZLhSxHUU1KydSbgsjFcxzyw9zEMswfglfWowzbjtHBHTPQ80iC8nupY0jdu8lJ2iRxxgZxzmiNnfWazXV6skryEsBwq46cgdaLHQLv8b7sZGTjoT6ClwXtpeSf+cGBk/7QHn/wrUdrBPP3k8vw/eqWDM4x7fypYydrGGJg3CnHHz9+lJyHQWlpJIpKQS5Ayx2cEeorbRQh0M8SPG/hyMkr7kUFLf3VqjwrI0pA2iMyHqen/hQi6qgbMnQEbmXI2n0zRF8ioko4Ht7gyW4a5e38Y3r5fKjZotiN39vGYwgYGKTHX14quST3kkhKXpaGUnnfg5HlW4DfRXCurxuFPI7z6w9/ar2sKJQWttJCFCpHn/WZ6D+tPdob2K+1OGS2ZmSGBYslcdAeaj/iZO8JdUVGHMa9B8utLOs3lnGjpBbyIvALoWb7jU7hQhLqae3WxL95EPEI8ck05DDNKqohMW3w47oncfnTRvtScFmjVDINys0YGPbNbj164gRD3roEUKyqwwx88jHSp3HVmS2t3bOEkJVyftgqDSobOe/uFEZjG5to29BjqfekydoLuU91dSy92D4WaPcPkPatJqOoT4uEm7uOJjJEEAyp/r8qPaGqJa8s9IgQBLoSbG2uvIYepxQ0MFhNcRwRpId7qBhs8Z8qh59QnuJW71lWQqSTgAt86a/KwJWOGURkkAFTzn51LycWh0WHtLPu1u7VsjYQg48gKhsqJVJO7I5IPB9qKbT9qO73zyXLdWbnBrUVrCltl5kV1GSPMms1lTLURspA2xJSI1+0+M7felNFEsDrG6SuSMyMDggenH8Kj47qaOZrkxCWSM7lj8mx60/3+o3kMbxqwVmJOCFAPXjNV7CGOfC4jy6glvtkcD7q1DZTYMndSuh53JGSD8iBTS6xdxt4pHi8irEFj8+KkIO1Wraa8U0FwVeReBkYX3OeM01MmgOWKeKXbKNsic7SOntTzi4JQi3XLfaMYDH+NRU+pveXUslzdGKSQ5OGBwfU0894ZVWSSYusYGJZDwPkBWm4JB36UsqzTpbemVwff50ua2CSqwu1m4z4Rk/fUa129xHuLq6DIyzg49/lTFpLPtM3ehQW+wc7hS9hVE1A3dkZjEiMOrDGDTMnxIumWIRRFfMMMmotb6XxN3zGLOBvGefl50SIJ5YwzRsofDDeuBj1H30ewVBdymxXMUDLwMhmB6ffQNoSEyoDHPAJxmijbTcyMq7VH1Vbmmnt7u27tzaeCaPciscZA6mltZa6Eu4U91seNgwJwNwA869AfQyB+YjkNuBvJSDjH6tcB2Xca/prcQlsYDPgkGu+/QsrJ2AZGDZW7lHP/dqMrtBBHH+3d3HH9IGtLtP/AJzIM++aqpmUXokDFVJyPerN9IEEbdttcm7mWPF66vICCMHzqHb4IWsMvfK0rkqxYgKPuq4PgmXYpVaVVdBkFd1aaOZmARCT6LUclxIitEkwIBxlDj+NNvdywSl1kYkD1IJq9gUbDZLO6xv7hl9j5+9MxRXLbv0bYHB56/KhYdQkjBLyO4I27Qx5BOcVJRavvkmldYllQAJGo4b0OfajZhqhaaXO8Jm3EIBkkdQK1dC5UR92zFl64OMelOPefEyFY8mPO/f9sf5sen9KGuZ0+EaENLIxB4KjY/Ph+YpJysqqG2F5JA8pMndrw5Pqf6VowzH9IUKs3VPtAeRx6GkQ3UrKIGkJj9OtKikMkwMlwUAP1m5+4VZI9aEod5LxhzhcKTu9QKMxFCxkE3cqcFogvJHrmti9R1Ilu4ookHCpzvPsPKodiodGC7fLGenPnQKiy29+gQGVTeBsjcWCE/cBQ13FIxYxIUkbxbQ24Y9jUVDskuQJZGijZiDIoyR91OyzxhHw8zIngVycKV9SOtDHQSsiRo0klzASArbQ3PPkKcEkTW0rrJFI236rNh+v4c0xDFaI7meV2k2YjEIBwT0JJ42+tKFvbcTSTWi5Yj4Z9wI/zZ96kKDIYNMMKpOjrdvJlppJyI0THkPM+VBuUe4lIAbJJAUfVA+VETG3CxiUWMUeOFhYsw/HrTNvcQWssBZHTL4d4fG3mc48z7dKLChcdoZHOy3cuSMbunT3+dOvpUkcYu3hkktEk7uRgdp3fqgf1pFx2gvLm6LyOs4IKKZ1wfZuOjY9OlOi/ikeN5phdyQYhXc+0hfMjHBHqTzSsaQxLIFuWUErEV4Vjk4zSCGfcxLD048qc1Fo/wAoStHPDMm4ESxDCn2U+lNu7cZkb0HNMlsb2kRJgl+c8cHHmBUuLOxuxNIIjDbQddz5I44B++occKwO5ipzjJHzo6e+guizLYrGoj27Uc8+pJqOR1aA5DDHIV7pnKjkP1HvW5pbKK0Vdk7s3DhjgAe1Imu9PkWNUs3tmVMBlk3l28s+lEWqBbd47jTizFs4L4bPpnyBpbMaSGUis5EkMdwFCYBVkwT8qkbWC3uYAlvdo0yKQEc7QfvpVzqqtpqJNBApdiFtY7baqr5EydWP8KZj1Yra/DxaRad1tOGwwOfx5qHOiqQTFYRMryNK/dQIHnfGQmfI+58qDkext5Y2a8DKwywUEFPQEmibK8n3ILmKG1sS2bhoiS7D5+tScN5ZyC87udYY3b9GzxCbePk2elL2WDSIWLUbfwjvZIkQ7SGTccdcjFMfGWpgAje7llJPgeP9GF82DZ6+1PxzM+pSS301vJG55uY27sKB0UouDzjGBRVxcaLAIZre5DO+VZu73Rxj3TzrXYiiJDQSSRyPLJCm7xAp9n1oiOz71YDG8TtM5UIX2tgfab0BpxtR0Wxt5Ghd7y6RspL3REJHn4SfDQl9rjXLd58OsKYCDK5GAc4FTsOh82KLcN8UwjTaSZYxvQHyB6daHkEE0PeGGaPbw4zwvyopNT0y4sQtvbXJveHeZ5F7pRnkKMUqa+nuZjGrq9sp3HPikUf5j0P4UbiaEQRzSRRi3hkIx4CXBBGfStFXud8USt3jcENx4gfX0qPeEtP3iNCkbnjqv8PKioDPDE8BiUo5BEqvjHtS9hJk1pMsBRJEKFvECec+be49KHc94yiOCRmVfGxbKn5UV+U5pLd4lte8RGAVhyqZ6/jimr+dC0EUEUkTJlgEHqP5045LGlY4pX4lGubQNA3BVGweOuCeM0NP8G0sjRJLCvSOPIfPzbjFN2t9dw2ojj2yxJKG2lN67/Pr/GnZdQ2s5eOKScjk7MY9gOlXugcRMRWPJniZw5GA3UfIURZsEugyQMQWx4AQAfInPlTMJMsckjM69yuWc9V9hSDed/GsEM9w2CFSFjhXGemfKo3QUHqq3MzmQrCjscFkySfQc1pILe7nCvcEPsyUPhKt5Lz1NDS3d3LOxiWzV0Iyi87APf1rCLzuri4urUzTOQYmQ/4beuPOjdFJDzaSQ53HaWGRvPX1P3Vg0yKZthKQBWwZHYhWz/ShUTWG71ERyZcBuMbgOce1M3Fzqlvebp5XDM27AAIJ86WwahcsLvJ8NBbRmRSVMikjcBTkNqJ3MHwiRrHy4EuFYe2evypm17QTJIfjoUvAOBvYrsPrx1rR1aPxFNJhDkYXxk7D+sPeqTCg/wCFgFu+9zJtUYO3A6/PrTUUZtLqOeFHZmGFUeWQRk1DS3kshBV1Owewzzn76cOqXndFhL3e5NvhQKSuemadjolR3osWZldgy7VUnzyelRphYzEBHLg4Kk+WKY/Kt4kpaOZjNkZfrk+VLt7m5e/k70fp3GWOcZqbAKuJDH49hAwo68Z2iiYrmAWKxyRE925bkDaN1AtIxc70OTyDngAeVJN33AErpkAYx+t/lpN8Faj4uoVMsj2yRomAqKDiQnyzTi3M8kTyLZskRfaG6KD6U7a26tbw38IZzFIHljb6kXoKCIuLkTJFK36TnZnwjnk0lK0DjQuDEqmOS2BG4lpC2V48se/SjrSS5W2Y3Usc0XexpEsf+qB3ZX+AqEt4bm3uI+7uoZHVuY1bg4Ofwo691W9mkjtp7WNHMnebE6H0/CmmhUCS3rzSlfEO7JCYbpg4pInDyF5N20ZG1T1+dYlu0l06oBvGWbPzoYJLLMscUbMVJ3FfKqslh6rFclFiMryFSWBGOnO3P9aQ8tsQpiLjjgn+NE6S8hs2uAoIVthz0GeOaJcBYmYAcAlTs8INFiI2RJLfaVfczjKANgMvufKpjQbE6rqTRSPNBbmPACtnB9ar7axcvcBnSJiOMmPpRdrr1/bSd7DMscmCARHihlIW8jJcyRPeyd2kmF3nJOOPupbyWZVmZskcgdTmgJHYyL1DN4iMc5PUmkPKSpBcHHlipKfITPBLH3GZZjFI2C6dT7e1OC+uECxxx2/dqc7QTke+aZsVnupBNJOsFtCpwzDcG55GKPD6ULYCSeV5zJgBRhSD7Vz5MlMFGyKuLqSebblGcDAHrUnFBpcIikljleZmDCJegPkBQF38LC6GGJRHk7s84PtRFn8RdX1uIDvYsAXz9RfMgU4vZFa12H6gdkZ2sXySx2881Gxo/eM80civjgNnCjzP8qvE8cVrvkj7q3VlIDXPAyKhLqy1Oa4Q3SR/AbGdLi3PgYcf1qZNRQ1Ag/jO4de6UE84LjPPvR7TtJoErz4aYuI94GOD6f3py4uLeC1WURR7RgNzyTROmtG0CQWid5cGTvxJJjwHoAAetQstcs0WJMr5nlhHilYHhTkAke1aa4LoVlZZFI4DrmitWB02/bEXdzuC8rAc5Y9fTOKEgv7Zpl+JLKpG4FVyW9iPKu6LUuUczVOiWt2trkQwSPpgkkK7Ny+MH0OOPxpc8zRTyRzx23hG0xmPjHl0qvvqrS3qGKCOIK29dq+Ie5+X9aIuNWSa8e6uEIkfjapxzRYqD/jpY4WZbKy+GhGWCJ1HpSW122kQSLZIHLeFI02qBUKNSZEkWOFAr8Nu5JrTXrxhoVihBXxZzzSux0WXTO0NlZWt7ItoHvJVEahk3Ioz4se+MUPN2oeYRxTuZEUBNpTIRfSoNNRkSLZ3ETbyckdfupHf29wsjzFlYrhe76ffRwNRsnpu0h74hNOh2N1AOFx68Ui47QpcBUuyl1Gg+oQV2YPh86ircxxrE0sTiDGS/HHy9qHmEEpASQjceS4wCKdodUWa6urafVo72+ljSK8JkeSMFiAAANq/dXe/oVnjuOwcskMjyxG9l2O67SR4fKvM0UiiJt86EQZ7oFuua9J/QQwf6NEYed1Lnn5Vnk6Kiji/0iQhe3+tvJJIyvdyYRCefnVbJs4nUS2zpIxwOThh65q59uLyGH6Qdc70pt+LcHw5IqD+Ms/hWjBE0Y5ddoAI9q5nla4LcERsoitlVI4F5bOWbJI9M0SojvspHaQt4T0OCPUitXNoGsHQJII+GjIH1Bnq2OtM22+1jKfElVmG6MD/AFi+oP8ASq2lJcGVDbaasZLGRyoHhVhgfeadjtyXQOkSu3JkDeEDywfWnLfVTgQXK9+ueshwQP71oJaiZ2imMqyMAqfaA88H19KpSkPg0I7zTr5ZIZQHKnDo2cDzpN5PdozxTPIeO8cMuCfvqWOlW89svcXdwHhJKxyR5JHnzSJdIvrUvK+RagbWP1jg+QzW8ZuiSFjKvLiViiEDcwGSK3MsCOvw07zIfN12mpKz0CO43Sm8KpF4tsqctjy460fFounveu3eu2RlCIWChuARg1TyAiEtbR7mF2WZIlHOX8/upjODt6t03H1qxR6PErXHw0soMfA8wx/6Joyw7I288Svd6o0SjxFe4LMevnWaycg42VWM7pnjHDEjHi65p6eNrdjGwGeoK+LNW1tBtolWG3mF2oPFyISrgHoD5feKGv8ATNMtXh22092zJukOCmzHBwB69ar2j1orQBH/AF1NYGYsRggDzroUOg9mZLK3uO7u0kePLRlVBHvz0Jp+w0Ts1dTvDepc27R8K0eHVh8vI+9HtQanOlRnOAMj260mZZChVBlvSuqSdluyCpuhubxSOSRBuyB5YqO1LSez1rFHJb2uoXkpIzmJY1C+3vS9qDU5rCroy+Fsqc4J5FEL/iNtXjqAB/OrZqNsq6ixtNCZ4MgK06EyD1zt4ArbLb2tnMjaUIpeDHIXB+ef+dHtQalX7vaAGDN6EDr86ddWHG0sSegXJNHb7lJA7MjAfJs/dS4tLv4A8y29wqgeE9yePlU+wWgKmn3ndqzWz7ZOhPBNFSaSIIm7sOzD6yk/wHvSEhvrhyZviCQOCFPB9SKcGj6mL5Xt7W6kkyG3pE3J++snkkVSI+3sIFkU3S3Pes21I8cAehI60feR28SSTLkuAcqBgf3zVptOxHa3vFRdIkiV03M5ZeW9ST5801bfRT2pkd5Lmy27lbOZl/AD1qVKV8jpFIiYyDaw3jbgZ6qRQ8urSRIEgJCgbTnncfPirxpP0aa1JqfdXtjqVrEfqvEqcHPOfUfKpGX6KO0tteSyWt5ZIHPDmPBHkMD0rTh9iafwc0W+mZQUk7lk6Jzg+p/Gkd6zYcvtcHLeHarH5V1G7+jTtHNpb2q3enN3vJBGHY+eTQFt9EespCyyatp8O4Z28uR7VVIh2UWOe3kUO4EbMdu4dPnSTPAZXhhjVtp5cjn766XbfRvewwYm7SRGIYyqWu4jHmM0PL2DgF6Xk1q9uEychLVBxT5BHPI4o5JtzKI1xySOPw9aMmuhbbCixygEsFK549a6OezGh9xJbotzkrjvCilvuz0qrah2EmiulFjd3SQlcHvQGb8aSi5BaKz8b/paPHGhjkXLRgBQGpcWowSMveYU+mOT6CrA3ZG4Dhm1WZcDHEa0EnZSS0mEqalKD5juxT9RG6K+bxgSkkaPtfHDcn2phbkID4XRGOdo6fKpyXsy8ryyJesATn/DAppezE48HxxK/qkVosaoz2A4dWAjeKQPyR9TjC03bMtu8pR8RMPA7fWFSidjpnZStySQMfV6CjR2NdoxulLMOnhwKfqD2UQTXscEcbJuG1yW88k+Y96BlLTXauXYRls7sc1bPzOYR92JWAY7iQvNBRdkts3dtJKQT6U/SL2jHe29yhjkd2lI49/nUUW7mVtrP0yCE5BNWR+yr2weRZZTg8DzH30N+Qp5JGlMsm/zYdTR6SlkTK/IZ1kGA+7Azx1qRe6v1niAE5UYARE5p99Eupp9zSylvU8mil0K+M6u1xMdvnu5pPExrIkC3j6lF3izfEruAYArxj50ERcKFk7qQpjxEHrUtNpN+VJNxO4bgEueR70lNGvmiK99LgdBnpU+lj9qIoWs92qyCKQnHJAzuHoPSjord4bVVaGclmKZZOi1O6b2emkhWSe6nV1PARsD7xS7nQrx0aNbqUjrnNX6pB7kVOJFmKyxW+5kfBPQ9aIuL3fJciZg23A2kcc0fbdn7uJNvfPGoOcIMH8aw6NqLyMwnGS3AKcH/e9an0SH74kbZ6YqSC4lcnZluG4wOgpdotpcESyn/Ec7oyMDb6Z96sy6dew2r7HhJYYIaMHPrUSOz16Y9/fiNueFTAFRLBkfZUc0GC3F1C0YgjXEWMbXOVWgtUtI0hVbaVpBEeWY8EeoNSI7NSlt+6P38P1vnSZOzM4VjEYW9EYZFKPjTscs0TfZ2K8iukgneG3+JTeFnyUlA8+P5VNX3ZJY9Mea3uFDnCsgQ+ZHiOOgPoaipdH1e70pLCU25htSXi3L4kz1VT6UrTO2Go6M4tNXVrm2BwXbmVfTnzArSWGSQo5E2RNzol5bTSRGCVo0XcJGG0NjqR/SmdJla5v+7XauYyd5PIHt7n+ldVttRtdXsIZd630DAh9qghc+bjqDUBrHYaC5aRtJkW1myCY3bKH02nyrmaNuOym3UQsoJUiu0lSUAM2MMB6ULDNIkEkMbjbKQ28Hk48qlJuztzBiO+h3TA4YMSvHtjqKQmigKVTTVIP2jI3P9q1hBmM5JAMk+6zS2MvdKrlyqoTkmi7zUGezghRgUChmU+FmB8x74oluzcjr/wCaLg84MrdaaOkrJc7ZNNmZ/wBYTkcjzqnGVdCU4hVvaQ3zQS7dtvy8UO3GQB1J9c0DZQSX17czS7Y7e1POfU/q+tHETRtGF0+5AhTYB39BzJNb6bJDHaXMIlfvD+kDYPnXM8eRGm8B5u7tIJnhlN3LIVHjXBUemPwoCdC8BmSLa2/9OScrkeVMxW10d/8Aol06MCNyuPxp2ZZhYx20ougqnJIAyapYpR5D2RMhWXVJJSgSBFbBOdufTA86MstJs7eXN2xuCDgES7c1lvbNZWTbFkVnJ8bIuSD0yfanRpqLaCeUzMFPgQY4Pv6ik4SfwHsiJubRBmKMA4XL852n0A+Vas9T/JV3byTHcArfoI028eRY1HCNkJ2Pczl3yNy7a1PZ3N1vka0nR2xgq45FaQwzoHliSWq67JqSqY1SOMDB3jJ/7tZba/qXwhtJzAbbbgCNdpB8uKBtdF1IKWjt5299wBp5NP1dTk2zOfRmFW8LfwQ8yB7VEkEr3c8anqHZDInt75o6PVJ1to1tzbzFQcMI2Vh9/kK2i38WS+hJIOhKSFaZlhkIcjSbmEgggRzdPlS9DqqGsyBbqG4vMzNHgnHIfP8AOmE0uaYN3ZI8O1sjpR4cxPsOlXZUfrzE0Vb3y20Ii/JzplifE5JIpyjJLhFRmmwHT7K3tGe5uXWQMoWNMc+5oe7WWRlVZYlUMSE25z707d38skqGPT5sKx/w8ncP1T6UmW8kc+HRZkz1KytlaiMJvloJZEmKEETSRmdFLg544FM3g+MDhVjTnjjoPnSYnuldv0WoFPs8A4++tvPcKMRWd5vzzuAII86qOKa+Be6ISFaG2tbeKWJnIwzYwB8zUdJYrb3kYmkSRd+7CJkSfL2otJr6VwJNIlaLGAMAGillvXYvNp5lcHwk+ErV+uTH7okXfX0jXLwxJugj+sPIitJc280+2QbUCYUDy+VHtFKpIXTNoYYPi61q2gnt7jvbfSwGHmG6H5U1CSXXInkiyNXTp3YR7GQNzvcYwM8E16a+gVHj+jXYSpK3koyOn2a87XUuoSuRcxS7Sc4869FfQMuz6NAChX/S5eD91Yz2rkuDTOe9sOzouu3Wq3ImZN90/RRjr51FR9l0aUd5cyOFOcADmrv2gVG7R6g4+t8TJn8ajguME8N6+tdsMMHFNnBLI9qIn8goRtF1MqFdpC8ZHofaml7GQ3MkeJSFhGFU42qvsPKp7hiWUEjPpT4XcjZwo6ECn6orpAsjIdex9k5YB2QHhiFGcetKsOxGmlnLXdyqr4tgPLHyGfPNTwdkKSmHPOEDHHT+dOIykxHZ4d2UKjJHnzUOK+i02xmDsrYuvimuG8iBNtGceR609J2N0q5tnikF0u4BDmbPz++pATSNNulwc8g9Bj3o6HYg2CR1iLeAYyDn3rFmyIG2+jbs6sgjZb2WRU6SXB4HQVJ2/YDs9ESWs5DIDgF7tjUqomicbFjYKwZFJIwD1rZlulIjhSL9IxULtLbT86zfJaG4uxXZqJCPyaoYqGG6U8/OiR2O0Fm2DTI1xyw7w+fQURCJ0lG8Yctt+qWCj5mjQLgkb8EI3VFyWx6msmjVEe3YjQLgKraUNvA3CQjGKMfsX2clGG0e2ORt+fzqRWRyAgQ+LngHiiUVxIxwVU8DIpDYHD2d0W2gWKLS7YIowBs6URHpGmoPDp9uvyjFFLkHofwpxTmgBhbCzX6ttEP+6Kz4G1zkW8QPTO0URitDPnj7qQhsWtuq4EMYB8topo6VYFGX4OAhhgjYORRQrdFDAo9I0+I5Sxt1PqIxRLRRlCpjUqfLaMU4RWio96YDSQQpkCKNQeuFHNbEXmMD5AUvbWbR70ANnco4b8KaYyEf423PH1RRBRD1FJZEHO0dKABMOvHxAPGPqjFDTt9X/SAFHHhxUkVQYOwGh5AmMYX14xTQiCubi2V9j3Q3kbRznFDDuWUYwA3p1I9qmLiC2DMO6jy3OfMGmJILYLuVFDn/AC5Pz+VWiHEh3jP/AGibR0BFBtCS5O7KkZUDyFWHbG3hKIx28kLQcoi2FkiC7T+pkfKtUQ1wQMkW1OFlAAJ4NBFGYjJOD5k1OGRO8k3d2gAB4U/hQsiJ3oAZMMOOOlaJ0YtEJNbnfgoST0GetRVzCQOQFz096sshidQol5YcHHGfnQE+AhcyB1Xjp9WtE0ZUVtoNsgjPPGSfWkwwE4YcE+RqZkdHIHmBnIwKTHHDLICHKcfaqkS0bt7chF3A8ehokwALkA4NLh2gYMmcefkaeCqM4PHWtEzNoDMJ8xQ72wzleo8hR7nxfW6dPemm6jJwSfSrVEMGaISLtfBFM/CohO0DFF7h+saS2AeeRVC6BktkB4Uc078Mvpin4wrLkCl7CfKjgVgr2yleFAHpSFtlB4Aoog+lJCHPNAxMUATgjittEh9fxpzBHSklTjypgNNGuOAKb7pR9kUR3Z9KSUPpQIZ2L5jNNsgwRiiChxk00ynHSlVjsEaIBunHnS1gB6ZpQU55FPLwapJAJWJVB8+Mc1CaroMF8h8IDeRNT5UjrTZXNJxTXI02mcyMOo9nL/4ixnktmVs4H1X+dXPs/wBurbU2Nve7LG83DeSP0T58/n8qLv8AT47mMgqDmqRqOhra3fePG7RJkjZwQfL7q4MuBvo7sWb7OnoDNBsvoFKszFA3IIzwVb+lCS6MqENaZlX/ALJgN6/f0P8AOuf6L201LRQtpebr21J5Rudo+ddA07U7HVrJr6xl76NI/FGp/SpjyArmTljZ0SisnIKygPsIwwOCp4I+Y8qxY1HQVJma2vYIpJ/EuMKWXZIrHpnPP40NLaSwpuRhPH5FR4h8xXdjzxf7HFk8eS6AntlbJIzmmZLZdmNoIoxMvCHJUZ8gc4+f9qbcc9RXXSrg5XadMB+EjGOMfKlLZITkrn50RtBp1BxQ0mFg8lkkse1gCKZfTo3QIygipHaSOlaKcZzT1SCwGOxjjIIQcdKcNsjdVB+VEd2p65rNijyp0hWNC3jx9TGK00Kk8g59fOnsD3pBUZzzRQ7EC3UHPn7mtNCnXbz60sjjjIrYBI60BbBxbJjoOOntTMtkjMvgGRxnFGFT61o9P7UqRSk0BLaIqgBRxSmgU8lf4USRSGFIHJsFMIPQUgWyjoKKzSaqhWDtbhs55z60j4cDjaKKIrRFFDsF7j2rBBt5AINE4rCOKKQbAvcDaRt4Jrtf0SDu+xLKAABdSfyFccI46eddm+iwf/me3/zL/wAlri8pfidWCTspfaA47RX525xcycffQIKsM4YHOAKM7SSKvaLUFK5PxMnP30FFIEdMxh2HQeX31cP0RjL9h2M8Atu2BsZ6DNPlkaVd2QXO0Z8vX502zsGLhCoJ5I6cfzoi3Z+9DpguR9XA4NKxpDsSSzEojAxqSN5P1fn6UTbRlAwCsCSMqnJb0z7fKmV8cLMnehSfFgA/Oi4nCWcfhbcPPOAB6e9ZtmyCRbzHpjaT9YDnPp8qkrCGSKNVQHPU+gH/ADoKO8URrEq5lHiLnotHJNPkRg7+8IXKY59BWDN0Sgbu1bxggLt5XJIx60VA0jRxhWjw2Ps46f1qKxFgsXyy9IyefnTyiF0G0nAAJYZ/Gsmi0S6z54XajHgexpeXjIDOS2OowAaGC/ou6KbgMHf7VtmCEARgJ5E8mszRBKu4Cku5IPUnAogOQ6tklWPOaHhJ+qwUnHG4Zp/YSMYX7xxQMdznknmtg0kbifqmledIBQ6VusGMVnFAGUrNa4rYFACWJ8qSTJ5bT86WRWYoAbPekj6oHnitMspHDj8KdxWuKAB8XA6SqP8Au5rYSbnfOPuWnTitbc+VAAz28rscXTrkYyF6U21mwIJvHAHUbRzRhjx55pBHlQIAa08jcSH5gUK9jlmU3M+D1wwH3dKlWi3dV6859KbaHB3lTg07CiGOlbmfFxcY8huHT06Uw2kq8OBNOvP/AGuM/wAKsEkQzlY2J9aHlt9y8xjJ6ZPSqTJaK8+jwqmGeR93BzJ/ypiTSY2BKSOjKPPnFTMyMmcJGFHmTQkgHijbKMeMitEzOUfkhZtNG0BZH8vCCKjZrF4oWK94wzjkjBqfe3cnkbifFn0qPugHQHcC2egPArRMzcSvTWUpZyrMG3Y5HlTBtpTIAzHcDs5FSUqSuW2E4Tjg0juGe43R7uRyp+0ff0rZMxcRMA7tGTGceZHnTuW7sYHIpKwyLjcAM88HOacVskM4baPT+VWmZtDMg2dfu96ZbOeaeYZzjI2nnzBFIkAOdg6VojNoZ7ti3ArFBOKxTycHoa2uCCCuB5VZDFAN15GKVklc7jTYyOBx7msLY8x91AGbs/aPNYCf1iaQ2CQB5da2PICmgHA1b3496bycZ8vWsJ4oEL3segpDF84x1pBYdQTmtGQYBOSaYGyx8xTe/NbMg/VxSTu8kFAGGlxvtBHHPrTR3A5IxWByOhpgENLx5Gm2OeaTvJ6mtbucZoAw49aAvLRZUOWzn2o84HJYCmZWycBsg0P6BNropWqaDgl4AAD1XFVuOS80m9EljK1vIpyNpxuPvXT54gyn8Krup6Ok4YqoUnzFc2TDfKOrFnfTJDQu3lnqssNrqrCG7HHfgcN/erW6tDhyWVGOVlQ5V/n/ANCuMahpbxEqQE3cFlHX+1SXZztjqHZ2X4e7c3diTjB8RUep9a8+cKZ37pnUpFtrm5dJCIp41DM8fHB6Fh0OfxqPvrGe3UtgGPI/Sqcr/wAq1pk8GopdX+lMbiGfDm335PA8v7URp9/K8SzLE1vLg95byDlT5jFVDNKHApYYzQEG3ZOcj1pQI+dGNb20+RGwtJuSAR+jY+nsaBniu4JVRodrk8o5yCPUHzr0MOeM12cGTA0+B0uMcLSS2eCvFN5Ibz++t5PlXQc7+hYfPVa1vG7JHToKSS33UncvqTTEO7gegApDPmk5BBwrVh2+QIoA2WA6jNIMin7JrZA/zYpBwBgZoA2GUdBWd4v6tJx7GtHHvQxitwIpJPFa4AJOcCtHO0daQGm6ZxWug5B9a3gEYOfvpLMoB8OT0pgjec+VJNb73w4CYpO/PlTHRmeM7P41osOm3BrWQeSMfdWjjGc8UgowsQP412f6LCT2Pf8A+Zf+S1xY8pkdCK7P9FZz2Pf/AOaf+S1x+X+qOnB2UrtGw/OPUQVyDcSeL/vUEkghdgoL5GRtPNFdo/8A+I9Sxk7bqQ48utAspXu3PXHAxxV4/wBERP8AYKiWSTAGXP1iM8j2z5UtXKHMrmIHJ+ryB8qHi8abGfaY8kNz1z5+1Ob92cEsOu4cEe345/GoGg+KRUjQsT3kbZULk5HXp55zS1ka9udi94XHUM2AMHI+VC/FD4bcHLK2EO0bTjzFPC4ia2MWC+Nw3cAoM8Z/WNQ0aIkopWdXb6sbsFORyH9MefNGmeJZ5YlzEzDZwOS36tQkU8e4tK7soCnO3jPkfbnijUlWG+CzwuDgESMd20AZwce9ZNGyZOwKRNv42xKBll5ORzj1PtRAmPwSFNwCYC8eNgfUenWoYXBEpWKCWPcSpYHJyBxz6miIN4cR9xLv3lnVWyckdM1k0aon4nZkBG4gcEA4FPrMCqgIN36jH+NQ9sz93sdHY5ACCTx49W9MU9I8QBEsZyOh35zjp91ZtF2S4ZhGSzFVB3eI09HPukXxAjFQdrLcOzLLaptY8iRievkKOdrgMoRkRB+qOlIolQxc4Gc0sbhgNxUfGJGY7ZATkYZTng9aejSQRqryZKk5P9KQBwyK3n3AoPLgrtkCAfZPJp4hh9XPvgUgHgfcUoHihsO3OSARjpil92VTbvJbFADxNazTS7sYzStrfrUALzWjSSrAZ3Uk76AF1sUyXkTGIy/yOKjta1o6LpFxfzW++KEZwGA486QExnmkMFzz51EwX7X9nDd2/cJG6hwTJkgEDGaKDXcse5Ph9rcjByAPagYQduSMmkFUGcu39KbK3fiyYzx1A4phY7sNl3j8XIwpp0IN3pjrmhpprZACwIx5mhpI74yeGWNVx5g0h7W8Kgm6Vf8AudafAGptQszE6hCSfsgdehoWZoTISE2EZOT/AE9qRLDOyhRcgENyQBQE2nPyBOZOcblYAc+38KtEMceVZJcABCPT7VCtcxFdzQ5x6YXGOp/GkSaYZmVmvHV05LKRjJ/5UPcaJEwJaeY5zyG8/LH31ojJjNxLHFIC8YKeW09SRyKalm35Xu5BE3j3oQDim27PQqojaeSUADCsxx6nB9AM0HLpDu/fQooAJDKGJArVMyYWMd40Zyp+zvPOOKGaQsGUHwjzz71o2cmVRWRh5EE8fj99LFqNoCzKpHhbf0ANaIykhqSQyYbGCRtIHUj1prJy2MelFGz2tv8AiYcjgYNCmJNpV5efMbevrWqMmmuxrG0Z88ZpGfFz0p0rG0nLEjaKb2xlSDuKqeCvWtEyKM3AdK1nOa3jaMlCBjIOc5pPBXcCeOlMmjCSCTWZDcgkVrPhyDz6VrcTz1osKfwbI4UYJrRJDdeK1uHrWbs0wo0QSSRWHI60lmHIPHNIMi+tMBTOT5g1rc/qBTZPpWgwAxwaBf8AwXhieWFKCg9WxTe//KK2jMWwBn76OwFlFA+tSeAuT92f6Us5HkB99JY4UnI/GmIS5wPP76aOaWWyOaaOf1hQBhY4PAodk3g5FP8A30kgDkkD50nJLsaTfRC3+mxzowZc5qqalpJiIzCOvGfPNX6UBuPWgbm1EsZBAPzrnniUubOiGRrgoFre6pot613pu1VB/wAMMQDj1Hr710jSO01l2w074a7ml07UAQd+cNx0+YPrVR1HTJMMYwOM4+dV+7guPjFmNxJHMvAZeq49K4MkGj0ITtHZWikhuJWmJycDfnjjqRTqXamFUkAuLU8gj6o+R8jVB7OduYZXi03Wf0ir4I5cbQwPUEeVXTTtJhsIR8Bc97YysWxJyIs9QfasP16NOx2fTXdWlsHNxH9Yxt9eMefPmKjWeTJwR6Y88+9OafeXczTu4RI+8KxNC2VYfzyKkmitr9FjuP0Vwg296mCP+9+uP411YfJceJGE8CfRDLMWU5YEocNj1rDIQxHA+VP3Ony6an6eNF7xuHz4JM+hHn/GhOfRgP8AN1r0sc1kVo8+eNwdMc70/rGsMvzNN1rcR7VoZ0Od6QMAk+1J7/BJ8WDTZYedayD/AONKx0xzvfRjisLY65pvHvWiecEc+tFjod7334HlWzIDnnND5reaZI4Gx16VouvUHj3psgADn8TWY9MfjRYxW/3GK0Wz0OKSeDjpWiT5tmiytX8Ci5HQikglj7edJpyCIzyFBIkaqpZ5HOAoHOT/AEpOVdlKLY3vkWQjP6PGBXafoob/APM1/wD5qT+S158t+0VpNrDxRM7QyYEMh43EZzn0zXoP6KSfzNfdnPxUnGenA4rj8ianFUb44uD5KL2svbey7W38U8yxGaaQqM9eahR2j06e2dRdjai7t3QAZ4FRv0oC5vu2moRQRK3dXLoCxAKEnrjzU1Tr7SruG1WJIndM73ZBuU+/rXmS8uUeEb+pN8l90/tXYTMiSyiMhj0Oc+nzonRddg1KZ4grwS5O5ZCCTjzH8K5ynZ+R7YSS3sNtKfCYgclT5ZPrSo11Zr0f6P8Aprcc+XeL0H38daheXIv0I6PedrIBed1MWnEbHL7cd2cdMefNSHZ7Wra7l2DLXMsZMsZ8KDjnYffyHlXK4b6SQzBXKXML8h+GC+hz/Ol2mpK0zIJ0ttqFAc+IH9b5U15Mr5L9S+DsdtOtvMTEHXL7Rnx4B6n2+VHSBhO7Rl5s/oyJZNoU+h9faqz2f1+2u4Bam3SO4EYTvO+8OB9o+9WCJmnuspGsrTOMKXzG3GCdw6GuqGVSRi4tBlqrlEwwSFf0hQHlV6ZyfOpGG5iKyFiksm3GxW8KD1P/AFxUHqt5DY2kpvLx5fhzvJjwF29AvPUk1SZPpMNrq6JFYwSQbSXjeQlnzwRuHQ9KHJGkINnVLeQpHuMJto2xmUNkY56Uektqx7tEDhsYUjg+/sOKqXZ/WrHthZySRTGGZAFktmOTGo6H5fKrFbxCDukDqpJ8OBnBA9/UVHZdUSsNwh8WQOnL9QxNOpcRjeBhgTjwnOKi5ZbWx02S+vXPw9rDud14AXOf61Ur/wCk/TILdotNsJXnKMTI52iNvLI8xWTlQzpMc0crnLHcFwoyMAY+scU9CwkDYMeEGCBkc+tcXj+kftGgaIvbfFxyByJCuO7x09wR+FTMv0z2CzJHFpsskSMEmy2DyOSo9jxUuVDOqJIuwHPXnJXpinDMsaIcEs3TOa5tefSr3cJOn2GePC08mB+FVLVfpJ1qeCNIrw27PLl9g8PPkDWLzpFKNnd+9wfHuzgeXnSy6sCQG+eK88WfbXVJe/SbVbwSo5MJx4WfoVPyAGPWil7bdo9MlMF3qkkablIbGckqD18iPMVH9geqO/g5zxjmhG1Wy3Pi7iwnB2yA4rhD9r717aZGu76R5BvNwtwQcey9BVW03XprK8e4trwIclx3g3OeeM+Rq45Wx6I9Lw9p9Jnt5Zk1CJoon7tmJwN3oKMtL+C6ZlhnSVlAJUMPCD0zXnP84fhmvDd3UtwWYSRp3eEZ1H1lYdBnAIpzs52vvW1aNYmESzviY7sFSevPTjyFXuxONHpBmxgYJJ4FcJ+kLt5d3WqajpcU5axUiJ4AAeenFWODtLfzaLcXQ1CW3SByuHXORnA5Pl61zyztHn7VJbWl5FdPcykmYLuQE8lT5gelTKTrgmiPhvdXhiZrZp402LjMuPEPLFW/sj9Imt6PbpFeR77baTsmbJU/5T1x8+Kbkl7MaJqrLqln+V7tMo0cEp7mLyKnPJbzzSLftB2asWm7rsoZwTtQXM5bwmoipsC93n0sabbpbmOCRxJHubHJGRnp/XpVK1z6VNW1G9ddNm+EhRgyEOBuBHIJ9vSnoItH1FVu47ONIzu7ruGK91/l9/v+QqP1mzhu9SiuGsbW5t8BWMcZVoQOpI/r0qmpDJDRPpX1WHdNdzC/hYYMZwpQ58j5/dUjqn0m6lNbRzaZEIyg2zRZVz8x55xXP9S7OXulXsTp3EMc4JiXIJk3EYG35Z8VJuNJkaBwJlSTqhGSsZ/3h186wlkcXTLUbOg6X9KsD2hTUbTdIjYZlA8S+Rx6jzq7Wmqafq8Mlxp95bTxIVBO3lT5DFecI7DUbOO57yIPEOhVh4sc7lHp71Ldnu1VzZO3dSKo28qV8L85wff3rTHn55FLHZ3nEW9Va4jGRvGRgYHPn51o2cLICt6oKlSVyODjgD59aoGm9s5JSlwsc7W03CS8YLk5VfYeRqxCWeYJIi7en+sBHr+OeBXdjyLJ+rMXBkm2nljhJA+QcDGB7/dQM1s1sxXfsOMjnG4ehx99VjVu1lppOoyadcveO8YDFkOVbjnH39abtu0dnez7Uk7md2BUu+FDAcEeRzVqaToj1yasnJrdjJlZQrZxyM5B8j6Hj+VDyM24sUVsHxAfZPSkT3FzaWHxN/NFbRorMXYevOB75HHzqsJ29t7gLh3fc2MEAFhiuhTSMljbZZJQ6DqGQkcDypvxv43cMNhZiByfYUDY65b6kzRQXGZlG/YTjdkYwPl508zYYIjlkBIB9eOOPLNaRdmGSLTpigrCNnLABWAJ9fMfjTHeYGWVihGOKJCtCAhAdnXDDyXH9Qf+VA3F1Ha24d5AqHqM55q7MtR7BjBxk4GceVNy3cUJERljRmXO12GfuoCXWIIpDgNIuDzj8Ko/aC5mvr6e7giIOzAVeduPP76xy+RrwjfHg27OifGxSY2yxuQPst5fKnC46bOSPxrjVhqdxbTmSN3PhxyTx610Xs3rY1PSe8kbEkHgkJOAfPIPlRjz3yx5PGroneXw23HsK0jA55HH+aoG41ieS4+HU90X4DY6+1VufUJ9P1NZBI7ADkb88+/pRLyknwVHwW422dCZsjnBpnB/VBHrQunahFqOnLcIdx6PzyG86VeStBYTSLKF2deM/diuieVqFo5Fi/LVjkk8EQZpJUCoPEN2Dz0oE65FHu72MKyt9XHQep9B/Oqxfapsu5LmVlAkxGISMbx65HpQ87TvbytJdrNK652DO/joT7AV4GTyMuR8M9KGGEEXOHUlnYd3tbxcjODj1HtRYO4bgG8xyOv9q5nZanJaSd/ICsR5bHOPU1O2OszXl/EJbncsrCMiI+Lnz963xeVkx98mWTDGXRb5HCqFcOTnHhUsR+FYY5SHJtZwE4YbOT93rU7pcdho1rK8SpAsQ3PKeS3uT6/9Cud9oO2tzqerSzWcjWtuhIjUfWYere9brNkn06EvHjHssbblgDtHNCoP2lyFHlmmpHVYO9aRcYyCDxVLXtDqSo2zUJl68lup9Km9N7RL+ToFtxZNqDFmkjlQlTgdQBwDyfnxVrLkiu7D+vGXCJrvYYlUzzqqt0Plk1X9X1R4bwqzZAfhg2Ah8jgdR7VC2WsxRtLbXMkygkmNJxjxZ6H09aZ1ZO9hQwx98nm4bOSPrc/0rjzeRObo6MOGGMmE7STvAyrhXjOGbGd49RSo+0Us8aFFjdi5yDxsHQI3v55qlpOYkEiThXXwAdWH3URcXbG1jQjwPhn28eL39Ky9mRdM0ai/gucF/Bdzx2skWJnXcdnKtz5eg96F1DSBcK7geIHz8/aoK1uL23AXIif6wbz246Z9KO0/XVu43ivLgCYZKgDG41t/Ym1TMvVFPgFm7MXLptlaEDH+GxwcfOpfs/ea52VUs1wl9aZO6JTlox6DP1vlQF1qDWzp37LllztDHIPlk/0oBO0FwzB45NpTkKF4Armc5tmy1OpW13puvRRS6aArSnLxp4RgDnJHT+YqJNveaVHqF1bs95G7CZYgu7ugeOCOo9SaqWna1KL0XSTdzOCN8q/bHuPOpkapdCeadLsFZeGiJ6c55q1lcXygdfBabLV4po7iEsk0KsO8jcblB9wevzFOvpUV3F32ntuZettv8XzUn6w9q57eaxJZojh4273kxrgbvQ0WnaNZUidrpVAIJVOqt7mtF5Mou4mbipKmWJ0KeEkBg207uCD6YpG3bwcbgfxqrXF+1zK18bz4gyNwpfLFv+XvTcWs35CSzTRxKkjLvA3B+nGB/OuqP8hNrlHNLx18Fr4PmoreR1OKr99rssNrGwUCWZdyjggH0x1piftBcR26Or26bx9Vwa0X8kvlGf8AWf2Wc8eY59KQRk85J9Qai9O1G6ndUvLYQb13K3y8z6CjZbiCCKR3nGyM87eSP710R83G1bM3gkPEDGM/fTRnhQ4aUA+9a75Li0LxNgOuUY+dVW8eRWZ3wHHhI3dPeozeWl+p0YfGT/YtnxMJOO8Ga091DG6qzZZugqoWFw8l7FH3xTceCBu30TqEpgYh5we7bcO8O1mA8vbmuGfn5FwjqXiYye+Oi7zDHbzjB/GgzrcQ1BIe7doi2Ay48XHA/Gq3e6ksyCRXJZQv1OcHPShotQ1KGcGNHQh8qXXhc9CVrOHlzbuTKlgilSLreX7QWzNDGzy4H1kwKb1SSOXR7iVpWRUUHBBVWHnz5/KpCw1e8vtHisNRmiQq+9bgQjk9NpAoW87Talo+p2Vvi3urGbKOip3kTNnjr0NXLy9uAhgXbIXSez097dRTW9sJIlYFtknX0r0l9FtrPbdkZI7iJopBdPlT8lrj/wCVLFpTePDb2KRIxZLdCFU+u0+ddn+jdmbskJDIZFkmZ0Y9dpAxW3sThSJnDk86fSFNK30ndoAhUFbt1Bc848wPao6z1W0ig+EWSUbV3icnxBvMH29qV9J6t/8AlM7ROAeLx8EGqqjlFIBYZ67q4ZYbCy0S9oXXh4YNvXcB5eWfeiLzUGnSBmnTviQx+yQvlzVRKu23PIb+Hzo6QJJHvR1C8Ih6gt51DwpBsTS6xHLO01zDBKpGxTt3MfcmsM1m1u0ktigUNuUBsHd6/L2qFde6CpDO6sCWbavRulN/FSbfrlvMjHn60esNiyS6pFC3dWsjQspDEjipbS+1tzaiHvAWiZ9vd58Ibp91UYSMsakjlsA5o5We3n3CWNtjbWBHTnrTScQuy0dtdVur6+SQP/o67IUjQ7UjIHX/ADZ8iaq81lJHA7SkofruqnxIPIn0zny9Kk9LvbpWLXMKXNu7Y2uuQR/SpqG0sLuC6EXdTyBFOC2FCqeY2/WBq4zZa4Buw76hF2rsI7SaANnEkjEhe7xyG9v613cOksxlVVkSRO6Zx1XByDj+H3VTdDvLOw7OLDaaTY2pMm7uw3eblPVd3XyFbk7Y65p8Hfx2en/DCR2xvxuyMAA46itlOgbsf+kKbThZyaYl1JDcbhI8KZbCHoZMdB6A4ArmF1oY1PUJF0GGbutyqpnfYuD5lzwfTFH2Y1DXLO8tmSG+i3C5mMxMdunP25erH0Xoas50rUVjili1y1udOt0WS5ZGEaQbjwgyOPbPPtUuVioo+rdmryyvXtbZIHeEd6Q8m4wjHm3QnPTGalbH6PGv4UmuNakt5GA7z/RWJQ+Y+8edWi/1ie2SODSbcaoGXdAyrvYkfWLLjLEVCWt32i1aeWeW4lSLcSxyEJb9XnpQ1YUZd9kHcubfUr8rCMb2tCFHp7HNCfmp30aIJr2KKIhiHtQGJ8zyakdR03thsf8AKJFraQAZzd8DPQk+Zqr3FtrouGA1e2ki6Rd5O3h+dZPHFFIsX5tIFeRZdUjQqVJ+EGG9PPr70q37I2ksY719d2x4Zma3UlWx5c85qBeHVdypH2ghjc4BBmbaT7e1aKXpc/EdoMycfUlbHFP1xY7Lje9iLX8mPsutV3jARJQgz92c1WZOzenWKLLf3Uq7euwAEn554qOna4tfG/aJJ2PTu95IPuTioWbU5RK+HZ932m5zT0roW1F3FvDq/hlvGmULtiAKoQccE89fX1oeHsVcoH3Ws/d7gWBuFG8eeCD1+dUqO/czLuYoo/VqXi1ONYVXv7mQk5LMcFR6DmoaaDdM6Zpcmk2D21jNZNaSvuTvpbrvW24+qwGfajhbdnbR3hstZ0+1aVCsshBMmD1C4HTyNc10rWNMt7+GWQySNvz3UqgpIegBOcip/tJdW0l+tztsYlMILLbJhI/Y+9VCLbols12mt7PTbO2exvrPUCzmPZGGyoHQncB0pns8lneG8TVrq2sY1QbZJFJ6/KofVZVksopbdlcmTIOODmmNGklN3JHcsRvXwAc5IrrUKJs6DpkfZ+yWfvNZRWZCpSIMVYjzHHBxxml23aKSwb4WxjtLmS4GZJZRw2TwuPIVUZ2JiRY52t8HLMqA7h6c1lxsil3L4lB4Xy6fyo1E5UP9s9Qn/QSmOBGEjR92h8KefHoOKrTatdPLEiuQSQu0Hl/+s072mIbTrYYOwTHpwT4TyajbSGwisofiZXBfxB88qPb8MffXn58X5Wa45NkjJqVyl4sjR91NACnducjHtWksrS6PxNtdvau5DCDaNofzwT60LI+nTsZMuGADKFYnBJxjPoMfxpckayK3w1wpXO1llGNrZ4GR51zShSOhFp07V4xIlrPtWLlFRV5J/v71e7LUdN0bs9BH3vfsOE82Ynpn5dRXFLqeSC6dnhcuJMFhyqnH9anNK1N0gVY5RFcONyHqMYxgZrli54pXB8CdNFl7adnZrnUX1OzLyI5VpIsgOjHjI9uelc0LyWGoyOk8oeObO1uM+/PTmrjrVze/BKsFq24LvknMvh25wMnpnPl1qnzxxP3YeV532k7WA2k/jk17GJ7LYwtrg6BDrF52w7HXVpctDHJGN7XEr8OB5KBzkceWKpr6Nf29lFcYJDcYUgEZJxx1OfWiNMitILANZ/EXFzMo7xYlyqMc4XPnn+lBrdTxTCOIyRXKMPC5+rjqPatHkp0C4Yfo9peaZqVpqBKRdyxLIgxvU8EH1966SZUmjMsOwxzEkMBjA9aoQ16T4pbn4RCoxkqfPzx86tmi3VjqFpN3NlLdMhBZJXGVPtyOK1x+RqZZMe5ISd40buPrMeFU/cKhNTs1eUzC5XBXGCB18+Kn3MiRll0dNwKcsevOPWo2/kkt7ZnfRoUQYXIGev39auXlJmawFcinhjSfvcOYsgIOhY+f8KhJIj8bu3qscw2nccAe9E61dtLfAQ26RQSj9LjwtleuPTNG6MLq4mS6tbZLiRVMjxumAFxgDb59OvWsHlUmaqGqK/F2SvG1e4t1uIkjgCnvd23vA3kPlVn0vQItL069hMolec5UB+cDpQH533yXtxL+RrZllwrR4IwBx91Ex9tZFCpJomIl6bOStdCdLozkpN3Zu5025A7/AHwMI8N4HySfQZqJl0idkjnVrdxOd2Ovdg9M5q0xatf3enG70vSraWDOyQOvjU+fFR0OvazaRmP8nWQRQUDyICePL3rP2QTNKk1wyR0+O3sdOgthcxygDlycbj64pWomCa2KLNic8opPiT39qjW7ZX8cJil0e3iZl2q/d7QR6+2KrdzrjvIwM4eVfEQVx9+R6elGXyrWqRGPwnJ7WNatJBFMsRCTcEMoB49wfKo6aeG2G6AOFeIoXJJIz5Ub8UufiXRDvGA5wd/9qFkawvdwWJ1K+JmU4x65rli/8OqXitcJgttaSXigJJvU7UIT6wHyq2aZJpNnfWzPaShoZAWV+GkX/L6EdarhWb4ZDpVr8PC32xJncR60Tbz3c6L8VdJJIzbgF+vx5HjpVp7GHrcezoXbmSOS1tWgmZrS4AZyn1XPXHzqmmCxzzkn1waN1t7LUrexuYWmjSePLwiQgBwcbvaoebTLVoy26UbvMvXRDgT5CvhrIlnVc4GTkeVIt47bv1IGfPaTg5AoQzpHYPFASvdvlyzfWz5VmjaZDI3xE87vKdxRQ+CFxznPzptiXBI3NnbSwLcS3cMA2jeTtYv8wT1962XskszJbTxSHqdqAIfuBqu3Vw1rex29hCJARxuXeT/yoiO9ubu3hgt9ngYiUxoFAb0PrUNIYhLGzvWluGlZCD/hoBg+9Pw6TYRYMuqKQeShA5++oyaU211KsZCjgFh5nzpyzvVhRwrAkgcEDAopDonZvyVJsP5XAkAAGQMfhmg7iHRri5ed78KcZBjxkYpNtejLE28BY8/4QJpKy3XebhZQscDGEA/hQnH5FqMzw6fNE00eqTSNGQCe6zge9KsLHT5HaNr0lnJ6J188VOjU9QtbWSFruOIugJSNFA49eKCfVdeVGwuP1mCL/PFCljYtQcW2kNtMeokHyVAOPWiLWx0+dJAusXRCfpX2AD2zz/Kl9m9RsZtVa01q3tHt5fNk2nd67h0q6v2X0UXHxFvYC5hGDHGjneB558m+dX/4w0ZSdU0fT41WW71G6j+zuZQM+lBw6PpEjLHDfXAExwHCh8EDzHvXWtKstPNzmK1j3HAWN4w6gHrwemKN1W1iSMtDpcI3LtEsSgFQOoOPXyp/h8C1Zxe67ParpveSiNLixbjvrfxKT5Zxyp9c8VGHv3lSzdjG6EBQOW3E9QRxiuoSqumW4ltg6NuCmTOFCk8hh6VEXGlaLNqyzTWrwNnMc9pyhbruKen31lKKr8SkRsXw2mOzarcrNPbruBAyFb1A8z/KhbG/XUtR3XDpJs3PGjoApJ6Ej2p7W9IvLa9juo7c3dnJlnnthvDE9AR1U/PioO1CaZq0cssMuGBBUeIhvL8PM1wywtu2MsFzJer3azyIkrMTLg5wh4Az8qAmu4rdGSLM72zBufqEGoa4mkuLm5Fu8rBFXPi9uc1IWNiDYQyh9ssxO7d9pMcHH9aXqrtgLk7QXQuzvRCFABVSACvqPlRdpY/la3nmguo2uowWJVMjaeinPn8s1Hw6EZ7dpZJNsRH6NEGSfcVIrpI0+9ikgvL2BdgxIACC36pHkMedWsiQ0Ksez81rcfFC+hW3KFHwQHGeo9vnUfrEXe6gTs3oqAKoOfCOMk+dTF9YWqX8d3JMJpZBt+oSCCPMetabSJ5CXjZJNpCxmNdp46Dmpc1dssgbW3t9PnzcAl5OVQNwB6mpm0lF+94zwmUR7e7Zjgsvl86EvJ47OSC2eBFPeZnyudo9c0QNWtZrGd4jHsSQqo+qdvnWU230NBXxcnwscMbPbPAx3yOpxknpx707CYoFEuHnkVs/I+RHvQVnPiESx3zmDBIiZcuD05puD4mcsVmKRBsuTyGI+eMVjrJPhmidE3fardX9rKl5gw7McRBXA+Yrvf0SXct52FR5lCsk7INq7cgBccV5puZ5jNFLLIyKRyPUeVeiPoQna4+j0ysc7ruXHywtdOCcvkzlKzkvb/RdOu+32rvPuuC145aMrtAP+8DXOe0NnHa6q8cEfdxsFeNRk4Hp91dT7Zvt7ea1kf8Arb1XX0G01edJJrR7iZeFUSlOPkBzXoGdWUDe5PeeIheDx1omCRjKzbG2DkqBwa6ZF9Gg3iQaOpLc7WvD/LFSVv8ARlFKxF1pkESgdY7kn8T0FJtC0OQSs8koeHeyAYVQOhpqQSwKwuAUZiAFPpXUNZsuwegRd1HDJf3cfLQ2k57tD/mf+1c4vbiO8u5H7hbaJzlYwxbH3mpDUZSRmhRipKg8n50/HKijcx4cnPuKSkKiA7Z9z9TGPIVP6ZplhfWssEGDNuDxzsTnkZwfaok6KUQayMySd3kkKOgbGeOlIhiklvRDBbM0p5IByE+Z4A++pex0mJpRHK7/ABCk/o4yMHHPLfxwB99XLTOzd5e6ct3c93a2Acb1ZgqkeuMZb7zUp2Wolf0fTpIJ1Y/EXcrEBY4fEhPuM5Yj0FWqfsri3NzrVyse2TCxxuC+09fDnAP8aPutT0ns/AbfSk76XeHNwjAMH9C3kuPSq2ga7uhqPaBpoLJy5jjjA7269FiTHn5sa0Qh+buL22k0+xlu/wAmxSD9BHGBErDo7n7RH3D2o6Kz72zMOsTWE1pAe8W2hUt3jfrkL9dj79PIUFpV3Jr2pyaf8P8AB2bsixQwN+itG+y8rAeNj0xk4xU1IsWlXl3J+UUTU4CTcOEVCkecFlGMD58n0xV0DGrXTGt7+Ga10qS1tpGKxCJys4z6HOAPXPNC3Ws2+md2nwMSzRoVMT8tyeSTnA+fWgNV7d3H5OSw01hb26MVE+3Dyk+xzk+9U+5v9zTRITIftM31mbzzWUxWTeraxca0wklmjMa4VY8kxqo9R9o+9QMgglJFtdF5N2RkYB9vl6UAJHn2xIAjtwB5fhSE0nVFlDQxthDwxOAaz7YWLN5IlzgN484wBT1xd7rYMzNG6nGEAOaCkhntZe9uB3b8s3B++iVmie37weJWPJ8hW0QGp7gjAMjE5yAelC3DlgjIMZ8hTs0oUscA8ccVJ9nezMvaCdp3k+F022Be4u3OFyBnYn6z46CtEiWQKJLKf0ccshzn9HGzfyFGRWl+ykC0uyScD9A/X8K7Z2a7d9kOyujrYaTpWogZy0jxqXkbzLGpgfTRpCYV9N1DPmFRarUk8/taXlkFnms7iJVfAM0bKM+nI5q0y61H2id7yW1WEOgSZYxhGZRjOPLNdGvtfm12X4uVzKh8MUA2yCJW/wBUmRhpmxyx4QVWNR7M6HcO0yRCxmmRow1k57s4PO0HgpH0L/abOKFUeQsrd/3aaLuSPYEYbAOAKjNA1RdTupMxCJYxxk8k+oqTezggtpo2vTqMOeSjdV8j08+tNxYikEltFFGWABiZcEL7H1rnn5ai6SAK1GeBLaMSWbXURbhdx3A9cik3d8jW8E7A+Nc7E5PyqNn1eN1ntiZLS5aXJLjKj2FZFcWt1CUM3w5lO5CTkk+YX0++kvL55QmMa9drf6dbpBGQ3e5Kvw3A/kaD1e4iijhhiYO20ceSqPs/PmlXehia4+IW9kfOHKuMsAOgPPOP60M2l3WrauLe1VTM43yEqQoPqD7jyonmhPkcXQEtwY2KCQoACDjqAeak9BWa4lDGLvbU8OxB2x+/rVhg7N6Lpt3DcTzGKeMAiN/Gj+9FnVLOK8Q5CrGpdWTjd7EVxS8hS4ijTZkA93JEsUblo41bDKV+v6Hnypm7uVuIE7qFYDuyMHj5D0qxXWqWPaCVLa5tmMikBZI8Aj50NqHZiLvJFtTcCd/CAy7ojjyz5Gs45Iv9ilyM6RrlzaWtzAYe/hn4kic8E59/50FczxRz4j0eC3kiJYSHcQCeuT0NJsrK4gim7yOTJbbk84x/SrPpEdhqejXNvquqJZW0R3KGGWlb2x6V0QmrqPRbjxZCWXbXUdPhdI4bQK+Ce7j2ZI6Zpo3lq+q7rpZkFz+kMkoBZGPlx9nqfvqYbsFbLbLevr1qtsCC0xB2qpPGTzzSZNC7P6vJt0rWGa4GV7thgvgcsvrXTrZkmNaSLe4eSGG6RZElYqNmcgHqPKrHayXFrHujaPex8TrHgsahrDs02jSRXd3NILJ0ypaMrvYjgHPQ1N/+TEb9NayzMRx3cpI+4jrWM8U2/wAS+B6bVL51C9+i5w2SPemjrlzHKyyTRAkDjIw3vUzb6TpkkaOsJUOvA5alSaZYJzDbxmRR1kQAEelY+qf2BRrntMqamlxLZRF0UqUZQQwzncD68CsTtU01/E1se4ZZDPKAuN64+r/LirLd2MkzbUh0+KaIZxwePcenWqvd6bYrdFLbV7UlM4JRhEjH3zk+ldOPG/khhNzcaTr0pnW3dbknB7lSpb3PlTadmGLAxx6hnOT0xioy3trubvEjmSCVOHAfbt9xzzmrBpNxedwYri6yoH6MhzlqzzuWONpl4oqTphGl3H5AFykUbBjjcWbyHt6VF2dyk2oXIhkMbXakCUYzEfPaG/pUhJHHJOZQUlZsqY0fJb/lih4Z7RryLZEqSxg927rxGfNVrzPfNvk65aRVIjZ7LR2mnV9VnuZBkyCRuWPqPagI+zWj3kidxHOsscf6VzJjLk4Ue2POibXS3t9UkvL8xyK/ESLywXrnFO6il9LZKrWhEsnMTxDAKj19TW28nzZz71wiDtuyU6mZNSLWskTFQ/2W98elRmoaJe6cqmK3djuPIfIkB6HHpVsEMlwhg+J79oov0q7vE4PmpPoccU1p9pdsBa3ASaSNcLI7bSh8ga2jnl0VCbZVxpGpeGETQl8ZK78FM+RFTeqaco0W1SK1KXkLESlZsh1PmOP60TBouq2sUc/fxRTliDHKoO8+W00qZJNOVYmCs2ck54X/AKP8a2jmdiyODX+kVaXH/km374+FFJUZyW5oG916IjbFyDwB5qP71JXU66g3d26xpLHhUGQAwPr6VVtSs5LG6eKQASEb8ema7sctjlNxXBWSVmzKjDAGeAfJvmKltEaa5eVLZZJp2ibwopY5Pn7ZqChYM6rnGDn5V2P6LWii7MQMIo4jLK4a7A5Yf5/Ue3vWmSVCS4IHs/8AR32hnlF1eyppaMndnIDSYPUY6CpofRhpmlxi6ue01xDHISjMYuCfLgeddAnnht4jJcFY441O8n7IHQN6jzDVyvtNr82sak0kUrwwx+GMKcEj1PkT71EHsKXA7c/R5oHwkkf50jvUO8kIcbf61SNf0K/7PTRyXCA28q5hnjH6KYeo9D7HFSnfzIfBKy45GPI+uPKibW+kEJhuMXlrOu2aGVtyso8v8p9xzWziRsyopdHOOVA4I86Ms9TeG6ikd2MZwqgDjPlS9V7N93cR3Olu11Yu+GGf0kBPRW/oamreysra1NuXEm05Kv8AWY1lKJaY02ly3eZ5JWRmPXHC49famH1G5JitYZSvGQ7DAkHmceYFO32opIgXeREpJUeXyNRcctvNcwJcyuqRMWV1HA9R8ulc+paJd5VaKL4gW0luhB37OpPsKsWhX97HIzaTIX7ld0lrI2OP/dt5fI1BCzWOEzGdDCAQCo4NIggQrKIJpG4CyAHGeaizVI6HZa1Za+5STfaXUZ8TKNjLnydfP7qfWe/0KRUdXljY5Vs7kY/P1oWfTrPWrRJO8K3KAus0bASDPTP6w+dDpq1/oL/D6oplgYgCdRmJv94fZP8A1mto5F0KUb6J57S21qFplXuJ84JGOvXBHnUNc2E1i3dfC7SccxDqPn/SrJYzWt9bmO1MMZZGJi6sf9xv707JfyQz5+HLRJgd6SFLNj6qr61unZzTbiyqoJbRlniSWwkceGTACuPcHqPuoTVtC07XbeeW7t306+dNovrT/CceQZfInzIqz3lrLqTpNZTQfEIcNHOu4H2x5Ec0FqWqTwjbdWMUThvHGgx/3gPQUpRLTs5bf9jb7Q9QjedS9m3iW6jbMT8c5I6H507dzql0qvbERZyGxyDjy9qvsVzHE5azkVopQd0LeOI+xUjFR2pdntM1kj4WT8kXucokhLW8h9A3VPvzXNPG5PgZDiS2sWgEds/6NAW5+qPLI9/SoW81q9i1Vo2aRdz+EEdVJ6Y9qO1fRta0HUJDq0CQpMuE2HckjeW0+Z9qj/yijXUULHe4wDCvLZHluPSub1NMtE9dXyW9sZrmYrIMBZAuWB9MelZDcvsV5r6N5JTlD0AHtVb1S5Ed8zC+aRgwZ0UYwfTHnSPylutIjGgIdmblcYY+a/KolibGWO41S3aOeG4k3xDG7C/XPpnFB2tjobsXhtGSTBjCs5I9zioIauYwkDK4EQUSDHUjz+dSYuRLaJfRJMzbgFUcEjzNL1y+ClyGX1nexWklvYgGEqCFUAMB8/Ooi2vppLG2gkEzMjllAU8jzz6VJieRbeW5eRkDqHVR9ZRWodRk+HAWVhJKO7jiRQxkHqfT0pxtKmMjdXvO7Pw/cP4cbd3XFej/AP8AD5KZ/osVyMf6ZMB8uK823NjdatqCbJV6EuGz+ix656+delvoCtmtPo1aF85W+mxn08PT2roxJEM5Z21Yz/SLrEUVyluTeurSy/VT396N7M6xbWfaJ7SItDFFHhseJpG8sk81CfSO0p7fa2MhlW7YgAZxk/zqrSulu5ZTIhZMs3IK/M+9ZvNKxI6/qnb3TNLt3a3H5Qn/AFIThQf8zHn8KoetdrNd7RB457kwWh/9Xg8C/wDePU1BWM7NLHHuyFypTGWqT7l1ICwSLxnAUk1rgbk+SrAhZBbN0Dgkrxt6fhVdBMUqsDFv6HI3Crg8E4iDtazlG6HuyAflUh2V7FtfIssGl3txMGJmll2xxxDccFSen866mqJITTXnS2aKa3sUiuPqTSJ+lfyIVepqz6R2bvbyHvZA9jazHMrHAlmUDHAGNvy6DzzUpFZfAazd2dtZwfE/DkSz3ZGyMdM7x0+dNX1850dYW+K1S5RBujgjPc7PIyOfrChQsNqEw3EckiBYk03S7DKxXexXmnI67DjH39BQ192pku+6jhufg4IcjdIN7yg/rY4pE2rW8vZ+4uIu+mtoJYo4ysJKKx+wB0xnipKLsLaRol7eNaxW5G9nmkbdz0BXPPyFJQSJ2ZDaZqGloWub12uWtZMx2yw7YVPkzeoz5DrVrTRIdTePtNr15NHHckd+pj7uUr0A3D6i/wCVecUNoenW9zrkX5N0sTW1tkTSOdiO3GN58l/yjk+ddCm0TSbpmNytxIxO4LubZH7Io6CnQ7KJqfasaAx03SLCDTrK2lWWBVXxSqQOg+znqWPNU/XNautcv2uLsxvKcEIqBFUeWfXHp1rucdhotoPBZ27t1LNbgsT7nqTUVd9jezWq3YuL+2uJSnKJFGYgvyC4p0FnAS+2YMzb2AIG7pUT3oaYHxDeTnDc/jXo1Po17Fs3i0m5f5yuf61g+jXsGv8A7CkOPIu/96lxsVnCo7yysIIpliUz4IHqMeefWmkupbwFjMdxOdpbpXf0+jzsQrALoHhx5s3X8aIT6PuxzAKvZ3OR9YbsH/lU6IdnCYrgyRbJBJOijle6ZgefI1g0qK5EqQ2UolYbwgQ4cew+demrK2gsIIoLSwlihiULGixKAP8Ar1quahqk082oQ6LI1rMuI3u2i3y94eAkSDoPVulNRoDhWkdm4brvJtdaewsIGVZsp+nkLdFRfQ+vlR+ra0LyKG0jSCx023CrDZxN+jVgMb+edx8zVw1b6OO2VzKJp2tdSumU7i9xtcE+QY9aqfaTs3rHZdd+rRWaSNGGMcd0HcDzOPTNWgInvVJJ459TzW+88S4XOfMGr52Z+jH84+y9vqXxl3ZPOu6NJkCK3oRnxbT5VU+12hXXY6+EN3f2d2SCTHFkGMeW/wBCfStLRAX2d1T4GVre4R3tpcriM4KZ6hT9gN0YjnFJ7Q6qk9vKLaRZFYBJDCu1cKeI489Ik/j1oCWzuNPsbeW7UWslzGJRAeZUTyLemfIUBe3ym1IzyRjDeYrDI74EDvrSDDOCuWxuUeYH9adfUIzGsksh3gFjgDxY6ZqqK8o5JOxWyeM/9c0uC/PfA3KBwo5JHFZrAnyFlke/tr1kabdszvV1OXRvv9qitQuLiW6IWNQkS7gdmDjz59/ShZR8RKTYsWJ8TK3VfbNG6f3t5GI5pu4eJgwXGQfkaTxqKEFWOo2mnRoFtVaVhhmdiWPy9DUmNUlhtGeEZinGAzkEjHkahz2cvL6+MmkQvLA53OWYAIfPPtVgsrKy0bTWF7sv7iQ4x4lXPmvv864M2q6Kim3RByvdtfrGysS48K4yoz7+VGpZPLCrXWxLleFaNhg48+Kmo7nSHQpZQSPI2B3YbPX0z6UmbRdOEdvJ8bcFlcx7goIR8YCn+9c25pVEAtpfwX0CmPxujEOh4b3J9R5UTb6nqVndSWVlcSzB0JTb5jzOPUelSraLqlpF3K3UJXOJIypGCfq4b39fxqGvI57e+tYjO8F2jb5eMdeT4vPiqVS4BOi0NrUNzaqm1GLMsbSgbckdSR5VAy2EkeoLJaRTzQsGaWOMZZx13IPQY6UwTbXDidZXBlyCRwG9S1S1lqpEQiiZ+4PgDA4wB5ZqYt4nx0aRls6N6Lomo6/FObKRbO1RgBFKjIrHGd23zPrUnD9Het2tx3g1W1PGciLBHyI6VUNVvdQstYlWbUtSFkq7t+9skfqg9B86Ck163ZD+l1UEjjN3z/0K9aGTdWjOS1dEve61qhvrrS7zUruaJnEYS6ZtkWOAwFWGP6P9VSCMQ64gVhnAyEOPIe9QSfSOqW0EU2k2ty8ahe+nwztj1apG3+le6meOE2EESMypuDZCg8VrY00X220LXbXSdLe3uS0sUu+6jgQATJn6ihs4x601217N3OualbS2t8LaOOIq0aKcc/a+Yq2aBL8VoFtKVDBgcsPM55xVZ7f9orjs8RJDGrARBiHHUk4FQ2XRVG+jOcvltdkXjBUIcUib6N7aAB7jXigIIy/H4Z61FS/SlqbDCRW+7zHXBqE1rtZNr08K6japIIPqBHKgE9enXpQpNEWWOTsnpVvdSW0mrSF2AA2xhgOOMHyJ86dt9N07TLdoopp5pEbbvOcg/wC7581RLKe3/KcXcWAjkMgA/Skg8+/FXg2V20t3I0MijO1VXh3zXn+ZN2jox18AFzeWljdzPGGSbIElzG+Np9SOmDTunRXZtS2oDFsZMxyhhgA+o8s0DHolvclxcztBMVKyrkkFQON3uOppV5dppGnLbj/SIxIqmWQ5WVfQe1YxWy4MZS5JBJZvipQYwJJHIEikZ2gZ49xio64uNRTUE2MZFuT4WPhVfcjyNBz6/Zm+VLpiiRxFAY1yU9MGpF9RtLSCR2DXAlCrsJ2+XBp+uS4I2Em50ldQuiVBmJACsSqEgdVI6NkUGBFe3YvTPcMUjIIZTlSD4Vf186Xc6TavYtI7GNj4kaOUOzH9X2+dCWF+NFt3ivyPibseBozuCp7+/wA61jjdCslDcajpk7TzWbzW8g3xo7A7FPVf61GXksNz3kXxDBx44XxkJ6qfajYtQV0hkmuVUynb+lyyxfL38uKWyWuq3ZuAIsuTvCg4bHnj1HmKdaO2JsqmnR317cEWatNOgIEijw8e/wDKpi97MarqkYaNIYtuNzyNg5/tUxAEsoJGs1MQmbccHCJjyHrQks4Ae0+JZBINwZhu3f8AKrWad/iBXj2L1aGV5Als5T0lzk+Vdk0aQXOlQ2jW0UFzFEHeCNdqFT5gdPLJrkovJpIltrdWm2uduR9b2PpVgttb1jSJk7+AgoMxjPr1Hy9a1eSf/Q11RNdsNWvY5BpsUxCrhlbHiIx9X5e1VBliCk9/Gf8AvYHv8qu1mkfaDtdDqUpMfcJvaFsHecY8OPIeh5oLVOxNjDqZv47WS4RmzLbxnAbnnHofXFduOaoThZWobOSdA0P6QHoVBx+NJmgW37rxAtMwiGPJicc/I1119C0/tD2WhXTJUtZIuYtpZVif9RwOua5a+mpZXU9prff2lxayh9kcee+DeSsfqsfU8YrosxcaF2lvJFeKIp0WTlCvkR5g+tEHsUkz7xqjBj5d3nA9KDk0q21oCaS5k0xICFhQKZGDDkZxyW96NEer92k1rZiWSRAHMzNE2QeWZc4GfalSZSQn8w1O/wD8qSAHz7rHNKbsDE//ALTZceiDn1oa9su0upQd1PZW4VOVzeEY/A9KlT2Gsxoy3vweo3F2qhp7WC+OBjqYyT4h6jrRrEtCLXsitrAYRqjlNwONop09lLZ8NJqblx0KqBioh9P0KCEvJpV0cbcrJeSZGT0OT19q3FB2PWyuJbvT7mCSJ1CxfEucD1BzzWekPlDtllgsILe7SYaiNwbYBt5K9do/vRtwizXiTPfsIlOLiEbdky+QYGqKV7KNcNNYWyKIwOZb2RWz7AGpXS+ztlrNtcXUOipLKrjwm4kbvSRk8k4zxSaxr4KTfRLtb6dYzNLbX7W9s7Bu43hlTJ8j1Aq3me37ohJF1GZV/QuR3RUEDAyfL3FUe17IWD73uuz1tZmAbnWaRjtHrnPPypvW9Y0HSXjt7mC63quUwTGG9No6nPliiM4/8jnjvmRKW/aXSrzVW0+0stSgv48gxwqr8j6zZ6kedGajryDTpS1kLy6RSsBAGST5kHofUVVNDm0HWtWY3GjNaXbguk0E54HmJD9n3apzSrPT7Ke5uISmqBgqfDsSNkhOAfljHIq3NGSjXRH2N9fXjlJLBoJM5BGAHI8vaiYtQjubSKWSJyJeSrN0IOKlTbPqK3MF1piaQ1sxRViJDDzDnPWq7cdlNSjUBNdumhXkYjUAfd5VGyL1ZZLaCfVNF+BiSO+sOZGsTL+njI+3H6fMVTdV+j/4u8+K7N36zpGd5tZPBMP1gp6NTkXZ+8SXeuu3yMvRlABHyNbbQ7liS2tXxcHIO4Cq1sVlIvILywvUlkhaI7m4dMvn9U+nFS0dslnYrPdq8Jfa4jGGMCHoB7nzqwXPZ5ruXvLnV7uRzjxOQSfxps9l0YndqV0646FlqJY76Cyrq9hNci4kHezRyeIEeMk/VG3zUClandq1obYK63UQyCTjaPQelXC37PWEMWyXfM4IKSNyy/LFVjWOxtwt1O2nM023DkO3U/5T0JrL0salRHPfqbFLcxyrcuoDSSjJk9s+QoGGe408jUI27pVcxoobxY88UnUrq8nUpd98JgQCrghwB7egoaztZ9VuPhIkaZySfC/Q+tDhS5DdllsLuSaF7hJU7oYRVfrEOevryf416O+gKUzfRiHIIPxkw5PyrzhYdjpMxfGXMsbSAlrdWwzDOMjy4r0t9B9pbWf0dmC3Z2RLuUEtwSeM5rFSi3SHycZ+kmyuU7ca1fxyqQ14w7peWKjq3HHB8utAWkF3c9m5reSJwzttQSDBIPmT7GrX2vs7yTtjqkyBosalJ3bhx4snGcnhfT1oLVtMvLac2HxemRQxrl+6lLRwHqRnzYnqa6lgVmblQ1oPZDSrPubu91eyin2hlgE3JI6h3Hn7CuhQ6n2aiiEfxFlGqjgOwYj15rkZNvaxEKIpGjPhkCBVUn0HmT6mo2HV44ywLg84JY8A+lbrEl0Ldnc31/QFhwLuyZU+oCMqvyFQfaPtlNYWdt+QZ9LvGdtsoaPiIeoB6mqCbcw2fxeoTx2EZXMYcZkkPlhfL5mg7S/WVzmQPEc7WOCf4edNY1dMW7LNrPam71aFbcw28FunJhSMEO3+b9YexqFue1V/JbHTba5mjjkOZgrYMh/zEdFHkvShZbk7Tg7F6FvOo+SZYO7jhVY0kb0/pSk0uENc9lgsb7vVSJpTjOQucDPrj1p3U7x4YCTMztnHiYsfwqsLqUVlPIJe72k4UscYok33csk7SpHg8MeefKsrLomdG7V6xoEUj2s7WxlYDbJHwfcKelSTfSb2gzhtUjwONvcgD5VWpdQl1Emae4F2y/WYjO2mYLu2nm2RyRs56Db1p2FItK/SHqzJkyWg3ekYrD9IWsYdBJagEcN3I/nVZa8tY5WjlniRlPIK809PcQ26RvK6Ij52tjrRskGpNHt3qqji6g//ALIrf5+6uAAt5AOP+xFQcd1BNE0sckbRpyTt5/CtW+oWlzKI7eaORicBQnJ/69KNhak1+futZU/HQ5x/2KgVNaPrPa2e+t4xf3089zhrWwR+77wf9rIR/hxD8T5UNonZu8udVisra2iudWGH7qRB3NkvXvJz5t5iP1xmun9ktGi0241nTY5iL2C5Uz3bqHmu8qDufPAHOAo6DFIdAkn0fW1/tvte17U76/nbLyW1y0ES+yoPsjpnqfOo3Vvo9h0/TJrzs3LrcuoQgLFF8cxBBPIweKmu3X0gWnYq8s7efTZLtriMy7u8weuM4qkaj9IfabtXc276JbyaZbEskUKyBZHccliTzgD7qCgRuyv0iSnamnX0IAyGkv14Hvz0o7sr9Hl1rOtvq3adXFnbMO6haXvTcsOMlh9gUZ2Gh7S9pSb7VNYvk0mNiqwlzi6YdeP1f51a+13ae37LaL3xVXuHXbBEDgBR6+gH8aBCe2vbODszp6wxrH+UJ0xBFuACLjhj5DHvXLZRY2thb6/rUXxepTnvLW2eQkTyZ4mkHTauPCPM1G2w/Kc03antHm508MywQtw2oz/qj0jXzI+XnUDres3epXr3UxU3EuFAUbVRRwFUeQA6U0Sx+41H8o31y1xK808rmR5PMsR1P4cCofUUmWKJZomGBlsnHNE2UkennxENIXBBPQMf+ulanl/8om3uMsGZnYjk5PU1nMkgZJCOegPkOc0G7bM5bJznmiLtTb3DsCHVyduPShshGCg94fcefpWkXSEOwGRmKxBySuSIx4iPM0RbzSSXKLEXV3Ij9ODx08qtej6fb6Hay3OoYmn2jakeMLkc89eKMYaZrV3BNEUju4/GrI+0FftdOvyrhyZ2m+Ckh9NSlsYVtbGxke2ijHiHXd5kkdeetGR6hZm1hEsHjlHecjgHz+RqLu9SWG5KWs8kVvCdoZzgkjk/dQ35xW4jN9dgyTyqAEjQGMgE4J/vXmaSm7RomH29haLdm6IEsE77I5SdrQ56qy/1prF5pV1KGg+IRjkvGM92Afq488e1Rz9rd8hVoY5bduZV/wC09PwqQsu0s09tgQJ3oAVVI884/iOKXrmu0U2DRdo5Fa4HxjsEGYNq5DZ9R7+lHy3dtrOnmOR0W4YYTapwB0JIqs67arY6m4jt3gSdS6xZB2euCOooKzuTHMvXaBnJ6Njnr5H0rojg4tGe1Dt2brTkbTpk/RpIWjbbtLDoR70fpF5Hb3wZJWkh+qyMCduR1H31K3M8et2UcV+Ua6EbGOdj/hD3x196Fh7OvYxs7zu16V3IkQ8P4ehqm41UuwTLFo+s3N7bXel3Ntb3Vsn1ZJowxZT5Z/lTv5G0HfhNGkVOMD4hsVGdlFkSO4MsLwtnBBPnU+Wx5CvNy+XLFLWAm77GRo3Z3gPoxIByczsaV+S+z8aBk0QDPXM7UsOM8oCfnSZpAIWY9R0FYrzMzfYiZg7bXNophhhgWAY7tFJGzAxWpO109ysgntLW6WVixEqkhQfs+4qsKAz5Kj1p2MBWBwTXoPyXqabkoz6bI+ToGmpu/VQ0lotMYZ/Imn5HntPFMls4O0jitg56qGrzn5mW+GSuR0WWnzkqNLskzyTGnNG3NzJHbNKZnAjx4QcdOgoBAwDMg24HlTFwyyWciT/UblifSo908kvyZtGVKiI1LWcJ4YP0swYF2+srH39KqqSyX8MljI8TmJSY+9O0H/L86NvY9QublZAjpAhxHzkAelRmt6He6dbRztswR4xno3pXt+PqomclyB31pfQkW7RHco3LjgMMeXvR+6CPQcySBrmQhSwJGMeWD51OxabpMNtDFclkneFQ00p3OjMPTpQeqaRDNqKwQAGPcvgC8sPJh8/OtPdFk62QLyXcenKHE3dzNvUuCAceftTWoy6hJGovUlijfaUDA7Tjoc/0ro11FZPdRQXfw8s9qvh74HYBxwceVRXaGzlv4IGKKIrltgdB4No6fI+lOOdN0FUU+2trzUoUSCEzAEruB6e3zqyaZBNZwGC4hDrH9RTjDe5oiO3j06A7Y0tyrBgwbk+X40M13Faby8hmY8bSMYHoTTk9uCQu2jl1G83zJs7nO0A8A/LpQ+r6bNDHJcpIJJAQECDAA96y31QcKsbYc70Unw4HWlnViMmQHcSVw/IHoKuMGuiiGF6jx91BvNxI4RcKQF9c+tSEaQ+C3t5ZJJ953lzwfXioe91SMzpKUzsOPDwRn0p2WCV5e9t1ZCpVtztgLWjiFk7byG11CM29yvxKNhQGwVHz966NHrNtJDEbp47G6QhZIn6E44Kny/6Fcgg763uv9IdLXcS7SdRz159fapu9up9SjR2mE628KxRjO07ck59/vqVaKTLQ1zf9j9YGt6Ur3um3L5uYQd2B+sPT7qvOs6XF2msFntpUjukH6OWVchvPu5B6e3lXE7LtM5xbCaS0ijbIKnIZvLIrq3ZTtQ8yKzWwe4QBbiOM7hIvk3+9XRHLS5IfLIOFYre4Z2s/gby2O2SHo0Z/qp9am7DT7fVmmmfcpih7vG47Y/PI+eKmNf0ZdehivbW4ij1AKfh38pAPsN/1kVWdF1G70/VTFEBbXCHup7eblRnyPqPOt7sKK/ofaO01SaW2Qm3u4yymMj6wBPiH3DoanLW8SG5SRNu9fEoGfxB8jR2vdirm1hj1Aoluol3tJbQ7mOc4b12+1QULfEWff4KkO0bBhgkg9QPQjBpiJnWmbXdLeO0W2kuwv1Z4wPiceWfsv6Hoa53K89rO0M1hHBLCxVkdeQR6g1dbVypDByHXgnyPz96Vqmn2naC37qdu5ulG2K5PLJ/kfzK+h6ikMpcWoSKDt0+yVj/7pSTTw7Q6hFBJBFNHbLMNriPAJz1++g59Ln0bXDa3kfdSxxd4D1V1P2lPmKhZ5UaQsm05byNTJcFxlTLFbarqJ0i2glvHeIbsLJIcEZ6H1Faa8e4cXEkFo8pGBIVBYY9D5CouaYJb2qOVVkj+qepBpccwg0tGOwM2frVnCHyVOd9kjFeSRMfh1tISVwQiAArWn1y+QIEvLdRGMAKBxjn8airGXY9zMWDIsQ+qOfeotL+C4ucKrjJ81AHStVH7J2Rd9A7X315rBt9Sn75LhVJkkOdjevyxV2LgMFRQdwOT5EfOuHteSWhW6jwro4cZGQcDp8vaun2Ot2yXVtHDcAz3Nusnw7fUO7yRvssP1TWM46mkZbEzJbRuwOxUfgEeRoWeARycx7eOnlR8EiztO4ySrKWjfwugHQkeQ96wYkU71DREng9fxohlafI3BEVhCcK4yfXypiSMhiAwFP6tZajCqy6KltOSfEkxI48sEVFj85p2WKaLToQXwXVmJX+FdMZqSsxlGmGhx9Uk1jAMpAIBPHWhpbiayJTVIhbY/wDWVJMbD5+VRd72gErqujahYzSkgGOSM4Oeh3eX303ySSd5pdpeQHv0YEAqzbRj+H1fuqvWXZJNF1Fr+KR7mJkIWPock/rVa+z13dHvhr0do0jMGQw5AHHmD51H6trF1C7W8WkNG8hyk8fjh2k9WHr7Cs5QtBZHSZfIaFldWHhbG5T6L88V336GJluuwkkqDCm8lGCORgLxXD4NM1y7t5JL5LOSA4eBYwULgHk/5ce9dv8AoTto7XsA8aK6f6bKxV+oJxXIvH1bY1kvg5H28mA7da1GcFWu38JbIyD6Zqvy3MSRk7gVPJJ+rnNdT1e+hs9e1xLHQLi9uBdyO7CNdjuT+sag5LGw1eaA9s76CyW4H+j6VDHtdvTO0c5ruU6Jopmgw3lxeXpMyG0dMzQwxfEGRfLA6IR6kijbO/gMyQWNlawXcKhpb6dAFt1z9gcjOPPzqc7RR2MKtpGm2sttGQERYlMEcP8AmfGWZuPP8Kgpux+pW0YvJNPuRC20tJKuxJT0AAJ8RqlkCiD7Q2MV5qPeadqc2popKzXsyd2HJ8lHmPwpm0tLbTYRHEuSxyx881YZuy/aFkUnSLkY46D+A8qjdU0HU4TE8ts9sqckScF/kOpqHLYaQJdxNNBtRWZ/1elNNAJY4DKme78PzNGi0n7hpQLiRiMEhCQPwFNxWt5JbOY7S5lZDlEWJiWJ9sVLGQevWpnZY4VCuRkEmt6mkh7Op3igSQlWJH4ZqSvdM1eSBJodMumkUZ2mE5FR0FxJf6RcrMo3JuVl+XSkND+g3MUsk8AOS8eTjgE1DWM/w+tREHCrNjAP3Ub2eMZvUlSMJuBQ46HihNQMdpqUoaJMLJuBx8qYBfaxHTVyY8BnjDZPmaktQkS47LWNyWGUcDHpxg0x2kZW+EuVjEm9SCcZC+f9aM0mzuNZ7PLYWVssk7nckfRVAPLMTwAPU0mBvs7IdR+Js7aFpZJV2LGg3M7dABV07C9hLv8AKksGlPBLqsIxcakRvg00H/Vp+vMemei0/wBiuynxly9vpTvDZSAxX2uQrtMpH1oLbP2T5vXatJsLPRtNisNPt47a1gH6NIxgMT1J8yT61AERf/kf6NuxDxx95EJWx3kfilnmbq7N1JP8K5l2O7V6zp1/qMFpoNxrF9I5llYTkKo+yCuOvzNdP7XNpc+lS/lS2E1rCN75HIII+r71Haf9IvYbTIo47eVrPvQMhIdpkI9TzmnYyq9ou3Pa6PT5rlOyMWlyQkNJdyoJcJjkeLgUz2K03Vu37jWdYEKaSRseSOHu5LsfqAjonqR1qeh+O+k/WO9cTWPZaxk8MR63rjpn1Wrtq+qaX2U0Q3EyRxwxrshggAG4gcIi+XvTEA6/r9j2Q0dLiaKIMoCW9qnAJHQAeQHrXFori57W6xqGvaveNHpVqypLKRkSN5QQj1PT261l7fXv0g9qLs3s5tbK2UyXdwvC2UY6KvqT5DzqI7R65b3EdvZafC1ro9ipjtLfoxHm7+rt1J+6mJgvaLXW1O5EhjW3hRe7trWPiO3jHRVH8z5moASCIPOxy4UlV69K3Jvk3yueMZA9RQ6obiVlVcs8JC+QGfU1S4JC7VDPdSLwXdEcZ6U/qtheSKJIgbkDnMfBU+9LhggtIFlllkSUxBSq9Bj386fh1C4SVWV8KV9envWUpJsRVJFupCRhyqcDCk49aZgGwnCh5Izkc+dXgQXGoSu0mxLYgkFTtJPmOKh9Q0WHvpntsSQdyAQnHJPGTQpICHOp3MjSBpHJdcHnIqZ7J2clxOLidUa3tckZbGCR1x6VH2fZrVLnx/DBV3FGZnACEc81Zo9MmttLjs7S+57s982chWI+oOPOufKrXBSANVktb2UvGsVukEbEhGJ749AcGoRpZbeKIPayFQpVDtJX14x1qR0a0tx8RdX7N3UZMZj25LH1qWtbyC3vILKzPdW4+u7+IepA9OP51EYpKiqK3a2Ms4BjTbIBueI8YHr8qchmaMBI3fIJ254J56f86lLtDdX0sly72MaxbYmx9cEnaG/5VEtA0t13aRM0qRkM5OB6lgfSrpMzJIGS9s1haXbPbyhVSQevoamJOzemSMLKK5ZJ7cDvpMDxsfb2qIsbSGW/Uw99BdJicRz5IYgc/gKDlv7qK5aR2ZySRg/XPGQT91Zzi26iMtD6DbWKmJL6XvlTKhvqtn7YHpjPFRUmuTRiARhSseQCw6n+f3UFcajK7xSs7P0GQfEPlW2t4ba6ErQvNGAXwTy5PmD61j6muZcgXTQZXnszLIoQu3CYxj/lUmzZUcHmq/2b1yTUJDa3KIDgmJlGMAeR9asIG4Z9a+e8qLhkdgNkqH2AHHrTFy5KFMjbRJjGcZpqWLC8DPPNZw1YDQwE5rMgDPUUkNtRSc5PT3pcjqx8KkZru/5CgxWDbcDHA4pzw7skYIphM7RjjjrTiSDnJBzXmz7KQ6CAvHIJpGwsxABwfIjg0pZCWwq59hSrkM1rIqA7ip2keRohJplpkbdy2dnbBVky8ZJVev3VTrjVnuLuK2nVTbmUfo28vTJqZaG7DyyuFi79Nqj1HmcGqxerbIXd3cyRNjdjkEfrfKvd8aLaorZFoeeA3c+otbQyyQfoxIW8DD02+tNWeoQJN8TYARylCrQsd233HngVW9KnIv1UQiWORSZBJ0wPt0q31FLDVzdRyjE4ZWbHAB8q6Xh5IcxzVL2Ge8adI/A/gfaxILfrD3pNlexu8QuJXktIsiVEbbz6ihLstaho2UrHMMxgjGTQzxZJjkRUO0bgpwM+tdMcSohyLNeCP8lSmMPFbxfUk+v3oNQLssrygeFWXbyfP5GhF1Ce3kC962FIAUHII9K3dzLdZlLbG/Vx6ef9K0hCmTYZZmXvQ8TASRDEi+aj1NanvGEc7soDI2GjJGefSmtMvFt1ZmGbcdVY4Y+nPnzQWstO1w90WR1lwNxAH4VtQ7Cb2xmj/TssTxbQ+5GztPofenIbuSWyEUiF3OcEtgj1/pQUc7ondd34mGfH0GR1/lTI7yJt0mcngA+dVQrHiGMuZmaRB1BPBPr71MQ3MMVikhm/S7sGFRnC+hqDlkQSIQW6Zx6U9G0h3MnhDgjI6n50nFDTJAwh5BLtXu2PJXqnoaltC1e50i/UtNLHCSJA0fnz19waiYJFtow1wgljYlWQNtJ++pLRre0k2yXE8sNrG6h3j8UkYPRgPQedZNFpHW7HtRDE8F2Q8a3LgmIjJ6Y3j05qY1vQ7btAsV7ZyrHdoPBMn1ZF9G9/eoK6tYpUjCbfBtaGX7v5GpHQdWWESxmMxRhv08J6of1x7e1XGRWpN9l+0kV3I+l6kpS4ixGnedCenIqC+kLRbzTrC4uLGIMkkZiSWNP0iOT4TIT1Xrg+VSevaRHrFsLq0cJfKgMT5x3gz9rHU+9P9l+1pu1Gi6jL3d3CTG+fEZR6c+ftWiZDRybs/qGo3CrbalYy29yAR3pHEoHkPeppZQjEZ2BTgN5/KrZ257No9za6lNA95p9uQWkBKSQA+m3qufPyqjpcd/JMjoI5I5GAUHJ254OfPIrRAS8otNX082d8m6MchlGJIiR9dD7+a9DXM9e7NXnZ+9j76UXNtcEmG5jXCSDHT2b1FXoSuPC4YMDweh+6jVuYprSWzvYoriGXmSKU4Vx65+y3ow++iStUgOSazKG1E7HBCoEHXyH/ADp/WJNlhaqOBt86mO1fY+XS7ttWsxJd6TI4XPV7Zj5SAf8A3dDVd12WN5I43OCmCecUoqlQN2P2svd6JdMc5ao61dJC7D6yrgiiZ5Fj0PGQvetgZ86DtHC2zhQCAcFvOtCWKmUyd2nq1XDsLKsna5LZ0V0deCw6Fecg+XSqSXEt9CoB8JAJFS2mal8HqXxlu+y6gJOPUEYxSkk1yEeDoHZ7UbrUnvbi8nLxRPK8Uqj9LCF6AN9oY8jU1p+tQ3lgLlHSaEKSlxH0zg8Ov2TkfKq7pwtIuxWoXunu2+5txE6huDIxxgDyOTSNMlu+znYm9uwrW94pSBVZAygjyx5qc1yM6kw7sal5bWd+9+Zo0Ri6JKc46k4PmOlTGl6za61bC5ttxYcFXXDA+lA293cX3Z2R3kjsVuD3MkLkCIuR1Q/Zz6Zpy0t7XRNEu4bPvxcRRbnST66tjr8s+makb5DtQhhlt3hnt98Ljaw+yc/yoXQbDSdFt5YbeyjEUrbjuGcf3pvsxqd9eaQ7ak2WhwCxXBxjJBH9aMNvb6hAlzY3KCNujI2VJrWE67Mpw+jd/oVrKu+xm3FhwrdX96jEu7vSboDBQqfqkZWlC7vrCYJIviPQ9M/fUnLLHe2WATDK4wJgoZ1z1wp4++ui0+jBpgV72lEmjPDBZDv3PKOcBx5gmutfQ08snYLdNbpbsbqTEatuAHGOa863FveWVpOk8F00cMv6O4kGRIpIAxXoT6EGZ/o9LMrKfjJcg/8AdpNglQ3qgP5VvBvOBcSEAcD63nUZdabb3N2t0FWK9iGxLoRh3RSOi56fPrROt38MWq34E0ayrPINrNjnPFQeodrNE06Fre8vT38iZMUGXaIDkkkedTVl3Qb+S5Ft5La3vPr57yYwkuzepJzz71AfkGz0q/Fwuo6nrd1CN6x3EpljgPmxHQYqka32s1Z9QuBb6jdJFuBg2vjwH2Hma6Xp7afrnZlY7S8SOKVFSc2hw+/HIJ9euTTomzUHa/Sbu3jgs9d+P1e6fZGBGURD6nk+EetRzdjdVutWS+vdYjuJ43Byy5AHnj0FF6b2Y7M9jke+iiEBHAnuGyceYXFQHaDtlcakzW1kzWtmcAsDtaX5nqM0DJ/V+0jLqMOmaAkF1qO7IjGFiz1OTjlvanItR7VRaRJD2hvrXSLFiS9xBg3DJ5xIceEH15Irm9vLJaXCT28hSWI7kZB9U+vzrUuo3V7OxubqW42tuBkckA+1FAiza32vu9SgFlYtLZ2CAIqlv0j4/WbrzXOfhEttTvYViEQlct1yDkVYEOCMCgn0y81LXo7WxgaeeZRtUdPcsfICpZSKfpi3a6pFb26s0jy7REilmJz0FWLW+xPaO51F5E0C9KMACCmMH512Lsj2I07shbzXW9LjVZQd11tJEZxnYn96scGoXF2Y2DyAkfUPPOKTY6OLab2Q12+h061m0SXCcSrP4EVQOSSOtXbs39HVtNYCylgvtM0dps3EUy4m1NvIZ+xEP1fPzrqOl6VJGTNduZZW5VD9VR7ipO5tfilVHcld4dueeDmkFEfBDbLapBZJDDb2/wChCR4VUA+yBn+NOxRTEhUePw8E71I/nTWqdnNH1uFUv7BZlQ7l2O0eD/3SM1CN9HXZlI2EOnOjfYxcS5z/APV09aljIPXtU0zVdM7RWuiQPe3dpbHfIGLguTjCeVVfsj9G97rcluvaC3KFMSNs8IU4GFHv61ZrbRJbHtPc6db6ibu42KbtbOMRpbRZ8Mfpu8/XAPrV+u7zT9C0WSWa7WOGNctK3JA8v7YoQAt/d6d2c0UyyqlrY2w2qinAY9MD51w3tBrOsdu+062FmwjmcNgPlUtIB1cny46ml9re02r9r9Xjhs4mNw79zZWcfJBPViOmcc58hWaneRdn9F/NywuFupemoX68m4b/ALJT17tT19TWiQgPW9WtYdPh0PSCfyXaEO8x+veSj/WP6r+qPSqc7fFybmO2Nf407PI1/ciJH8A6sB1paxSd81vDEHQKdxYYBqiWASlZXCR5ZShIomyguoEMxR0iZO7YEcMfIc0QlgpZLiJQka8BH+sp9OPKpUtm3xNgMT4t54Y+RArGWREkFfRmSwjjhWQd1JmRQCWAH/jUbI7QpkFljyW564P96usMYC5t2MDuRukc4yfaqnfRSx381jtLu+WYgcsPOsoSTYBKao0NgqM4UqpyFPX3pGn6zJLC8QVUBIyM8MfIe9Vtlkg8LoUyOMjz9KK0/UEsrgSG0Sd2bCh2ICeeRW1AXJp0+HMAu2ilWPliAyu59R5impL6S3097aTuLYFB34PTPufnzVbuNbkmaWaOOO3O8kpCOFHoCeetN3Nw91MS5wTwARxj3qHGxlneKLVLe1w43A+N4z+j6Z2n3wOvqRWpxBcIkVoIbeNVLmF28Tt02lqgodZuLFEI2R90NpCLhXX0xTC3yzwIMMGyxLFfCQTkUtQsk4pJ9StRbvLsQAIAMYJB+qSelG3835NR1tLVTGV/Sow6OOhwTn+PNVpL/wCHtlhjjCPk94GP1/Q+1SFnqUEU80t2rSs6jqclflRpYExaa80mmTXj26PcbsR3OclmPqPIEVH6lZzXc9xf2sg8RBdj/qyOh981ER3EjTSrCqIrSF9uOM+nyqTurq3fThHAZlV3G6M8rGT6Hzyfwpa0ySNjDo8itwYzjjpn2om2MtxcRhCzHcMBjhaD/SxzBt5JB5GMUUsgKtnws3UjpRIGWP8AJ8lrdG6sGWOVOo71f4VZtAh1K/lFveNaLKU3hzOAMeh965g4CkMMAipXTm7gJMZYpCDnZtri8nBCStoSOu/mxebl/wBIsRkf7QOK03Zi5eP/AM7sM+eZ6rUDCWJH8G11zwvT2pyRdpDE53dSBivGrHGXCLRNN2Wl8KtqOmYT/wB/SW7OHJH5U0wAD/tj/aoHIC7QE59qwqu4naoHsK6bX0MsY0TAAGrabjzzKf7Vg0VB11nTF+Tk/wBKgAgaIYB6+lKSDPU4x6iuaWn0KywJpEGcnX9PHyJ/tTOoWNtaWryx69AzqMhIlJ3e1RCxgMeM4pW3LEKai4fRVkFq0Etrdq63qXM0sJk3KD4D+pg9D61VLqHKyPLG0jMQZeMbWBzgetXbVbRfg55u8dpBkkkZ4/VFU67S/upTLDGSqLuOG4Q45+dep4rTXBLAZEEYadVeMtkCPcfPp91MW8yyypayQ95CgY7AeTx6+gpy7nlkjiWTey9d/oPKprQ9Q/J8W9YIJGKkqGTkE9fF7+lekIi7vUFu442dAypGECb84weKEmaSKUq2P+VLvhCNQE1tnB8RBHAbzA9hQ8u+Vid2T15rVIkZYZnyACT61kkd0P0whl7oDltmRt6UmPuzOS7nwEELjrU9pF2XaSCWUqCxkwD4Svp+NXXyBEQhd8fO4Injz0PypllEksoUHu5DwH524oy4CxXJG9ZATwy8AfdQs7GHY3B2MN1UgDD+lhhkXgKMdeopmeNSoAJOT6028iKwDrhSxZQOmD60kyA/V2gD0pgNHhypI8HGaItpzk7GYbOVx60E8TM5wPelxtsYEBiQfuqWNE3dHc0rGQsVjDbtu3kjyB6VZOz2oT2Wr2sMMcZtXhWW5AUHegHizn261UrmaS6vZZZW3OxDAHqfb7ulWbRpVg1i6lu7mISmwZUBP1CRtC4x6VlJGkOy/wAZ/It3DZFxJpd4c2szHIgLdEJ9D5UbNFMJ8AMt2g8LDjvV9D7j+NQegX9u/ZvR9K1NO8XUIXCe2D4VPof1T61KWVxPaXSaLqcjSzRqWs7p+DMg8m/zjpisjoontJ1i3t4FM0gjtXbZ/mhc/wBDROtaTHqgM1tGIbxSCsy8biPP51AzQlpVuYhmSElZYscOMeY/rUzpOqQyQJye7cBUZv8AVn0P+X0NaxkjKSaHtE7QajeImjybUvrY+OO4OEnToRn9bHQVnaHsvo+n2pvINBvJoAW3CCTDDzORjy/hTeraRJqR+KsIzBfIMqxbHeN559/fzpvQO20txqFvp160ixyI5dz4SWVecjyOevrWqdkFYj1DsvF3cT6TfRs2VUyXHib78VLWOtaBaM8V1os1vZkBVLLvZGPUk+lNfSL9Hkl/cQ6jZTLbwBC0sTHgHH1uOgPnVYW+k7K6FNp13cR6le3+2RBKSwijx6g/WPpVpiLrqmk3WhRC8sgJ9KlXBwu4LGequPtJ79RXPu0nZCymin1bRLZpYYkLzWIG+SAfrL+snnxyKtvZ7t3rdleQ22t2Xc6M4EWcZVM9Dn0/qRUtrHZ5rJ11bs68s1vuMhjiH6SM+bL8/Neh9KqxM4JNc28VtFHIFZCvh2DI+f8A10qOuJ4ih7gYjDAHaMZrqPaPsfa9oV+P0O3jh1Y5d7QeGO6PmUB+rJ6r0zXKJ43jmeOVHSaLKsjrhkIPQj196dkm7chZN/UrwamNM0hp7Oadn7synaoI6461BWr+Mhs4J646VbZr2H8mhYX7sQ4RRnqDWWST+BhVhcnTezNxp4YJdS3kcsbDkFR6irRqu3Uez+kWl/J3a31wzsQ3J2jIxVHupFghikPi7rb3ePtv51Ze1kqvf9n7VuVS0MzYHhBbAGawNkP9qYJLPs1pWnyyd8JLgyN4QAVXpkffRSahFpvZbTZ7mBrkyXRSPDnvEU+ak/yORWta1GOy13TreSFZIo7HEu4Z2k48vPpS+01nLfPpNjYgEW0DXRDHHB6D/lSNEGhz+b9ybUCSGZXVLhQdysTz3g8iOeRxW+z+i/m9psveTwTo6B1lhPgZQOhHkajNdub7RtE0O1sZms7iWUsxx188HPX5VIQlLns608k0emG8JgaNuIXY/aH6jH8KBiuz/aKHtHaSRS2hikVdzIeQVzjKmi5dNmDqIJD3QzvwuWUY8vvxQPZjSLfQnmjLskhA3RSHxKg64I4bPqKC7Ja3qWoajdq0yy2rSOwVuGQA8YNUpURSYZeX6TwTqbg3UYIjuURSQox1weRj2rsf0QdxB2F2WqK8HxMhQwtuGMDzJ61y3UraxvBNLdqrTW6ZcQyd1IV9CffpzXWfooUfmUDFBHaRG4cpFEuAowOvqfU+daxlsiJw1ZR+0Fq132t1TuoRNItxJwMELzjLN5fzrkvbC/gj7TXIjkcbAscwVCqb167fUfPrXdNXwNa1BYwIyZ3IKKMht31j6mqSv0faXHfvqeo3M17IX712kwiE9cnH8q0RlIpmkdgtW7Q39tdT2stlZSbWeaWXYzoP1V9TXTNR7RaX2V06OwtoIhIqkRWkSgBV9WI8z5561Wtd7b7WkttFbaPqvMRwPZBVMaV2keR5GLucszHczfM1aTbM9qJjUu0E+q3YuLyRpAn+GoGFT/dFRV1rlrb5JjZ28h50PLKI1LMR8vWgFugzEvar7Fhlq00rkNy16VbX+u2pu7fSLwW+cI5UAN8s+XvS4ew3aMStjTrlt/qVwKg4+0E77U/KE6BRgIWIVB6AdAKMj1K8fkX1yw9pj/SolG2UpEhqHYXXbO3a6vLoafbxgZLSAnHnxVl0vX5dD0qJ9O7PLPDOuVuHuAJJR6nH8qol3czuoeSWWRg2RuYnAx15qe07Ure47KWlqZ4xcQMyiMnDFcjBH4mssiZrFpk8PpB1R9uezceAOf8ASMr8qM0X6T5bG4eW97LyS7TtDQTA4HXOD1rj/azVtR0/Xe6gujFEyAqMD35qf0O6fUtDtLp33TN/iN7g1OrHZ3Ow+lrsjeECW/l02U9Uu4CgB+dWS11fT9TXfp2o2t4uOscoJ/CvPb+NWDIHU58L8g1HzWlmkiGO3MUjsFUxZVix6AY65ooD0yXkBy4YnO1fRiP6e9V7X9dvhqI0PQAkuszANPckbo9OiP22/wA5+yvUmuV6Gn0kW2qmxtdX+HuYUBY3DCRYw3QN74rpmg2EWgaMYRcd7IxM9zdOfFNKfrO5P8B0AqaGHWGnWHZbR2RZCkKEyTzzSZe4fq0jt+t/4VyTtj2tm7RXXd26yGwhOYIIxlpjnAYr59en3092x7Yya7P8JbSH4CM7VAHNwfU+2RwPOhbFZeyVl+U763WPX7jL2UL8PZxEYMj+jHyHlQkIy6mTsnpr2UHi1y6XNzMeWsUIGYEP6xHJPlnFUS4keZu4thjPGc9B6UVe3sksu3czOx6tklifM+pNZZwtb+KQbXyAy9W9gK06VibMtbcW8SpCI3cjksfL+9Hd5KYnR9gbAxs5x/zpqSzSOR5N47vqSRjZQrzZRmdw24+HZ9bHsP61ySlb4JCPi5jdSMuGwdpKjP4+1ZNfoZI+8CbwOM858uKjlEtqcoAisxbYG5Pv70NqXgnSaM+H6ysWyBn1+VLWwJe4vY1tpFR2J7sbSR0Gevz60VHDHdWqyylHYYLELgqMcc1VprhZIjHIW3ZLNgcEH7Xy9BUvpd0vwklt3qsoAUOTztPtRrXQDep6AdRWSMl0miUFGH1T55z8uKqUENy6qsaNyxIJHmPar+s+RvTeqnnbnrgYzW76yW9ig7o7BksJU8Jz6cVSm0+RHOJzskMbE5xjA6H5in4ZsRNvbkjgZ8vXNM3UawXcglkJIY7mA4PvSYkYnakZZkGSreldPYgxpJO9IZSSMcN0+YpbTKYmjYDkcZONpoeGR2kXrx9YnnHsKUUDOzOOBkHPNFCHZNsgQYAzggnqMVvGF6he8OSRzTAlOQApPGAD6U8hJdCV5TqKKAxVKTPjqVwuBjr1p9A/dOAMrwcZ4pLtiXePq85JHAp+MrLBzhRjJINTQ0N5bBydpHADcj2p05kALuolH1hjAo3RrW2vJjFPIyL5vsJHXp7GrPF2Y00W8kZk70qcBiT4c9PnXJkyqD5HRVbPTp7uZQkLuPVRkVPW3ZeRSPiWCnIIVDnj3q3aD2a1OW3CaTZ3E0WcNKRsTj/NU8OxU8UiLqN9Esj+Lubfk4P6zHpj2rinPJm4iS1RVozHFGsIKgLx6U+lnd3JAgtLif8A+HGTXT9F0PS9LOwWlq0hG4PKd/8AGp2SRFiAEkaL6AcVWL+Nbe0mRZxhezutMu5dJu2Hr3eKS2i6tENz6ZdKB1PdmuziQiM7XhCA+mRW0cYH6aMDIHgXFdT8BfYWcOZHgkIlUxtjhXGK2C20ZUZ9ccV2e6htbuNobgQTxngh0zVdvOw2jTODbTtbbvsoCwH3Vw5/46SVxKTOeI23nzrO8UNnB+44qz3vYXUrfcbcx3aeW07Wx8jVcntJraYpPbywsONsi4Oa8x4JR7RqhlmMweNx4TnjPT5VUr6zSxkNtb7zJHk4KcMvpkfxq2iPhCVbdnzNMPGz3ZuASkvdhAoPHsa0xT04+R0VKDs7GbNW1C4mtkfx7ETJ+Wab1CyMUMcOn3UjkPvMUwAQDHPNSOs6zcTRdxuyuAshx79aqN7cN4kIOT9bJzg+1evgcpcyJYzM7M7yK2d+eOuCOoptpgI9pUnxcU9ZxTSPiKIzTsPCickirHpXZbuCt3qjEHO5Y4uSD6n5eldcsighJWVJT+k3g858+CKeiRyw7pJHHmFU8GugW+n2uoO8JtVlCkF5GjCj5g05Jf8A5PvZLVU7t2YMphjGcDqMfKsl5T6ReiRQ7LSrq7c4idYx4y5Ugf8AQptrWVJWku4SkQBycdfSuhPrFyu83Nq62ssYMcezBOT146Dz9aFtvyJdo7X8QBjyvdl8k/IdSPej+y+2LVFLilX4GRFUK7Nl2I6geQoA7XcdQB5dKv132bt7uITLGlvEqEJIjAJH/vA8n7qquqaTJp8aPcBW3rvVom3Ar0BPpnmtsedTE4kS0h34GcdMiiLIzNP3cabmLgx460OAVfcviUj8KfWeS12lcbiemOSPatpdcE0WdZ7C47OXMaRQw3014FCNH4gvntboMHrR1jaQK+vTS3AnuIIVVJCdviJwSB51W9N1Iw2sNg7s0AuBMVb6maLeCWae8vxbvMqSFlKHEe0jHPv7Vi7NoFs1JpbHT+z4iYrJFaK+T15P/Qqe0G7k7T6JcWt9KqXNrNmKcHxg9VcfyPrUD2pY/GWcfKmKziQqwwRx0qGjlktLiSaFmR12lSDzxWRsjpOmXct5LPZXaBdStcd6oP8AijyceoPnSp4RG8t1FvVXUrIUPMZPB49OKRd2seq7JbCRbTW7NFlAbjGR9RvVT5e9attRW/BukUxTJ+ju4G4KOOvHpTQNWWTSNVXFvbXEyuMBIZGPGP1GP8jSNf0FdSD3lqBHfxtu3kcsR5EetQ2wRLJHhTBKfPgK36p9PY1N6ffTNL8LPMynG2GRurgdVb/OK1izCSCOzPasTF7PUI07yKMIverksB5YPlT2qdnNNs7h9UNhagwxbwQneOpB4Kp0/tUbrWj/ABqJcWrlbqPJJOMtR/ZrtJHdJJb3MQjvGKqC/mOh5/jWqZJTu0PZ+O5i+Pt5bqG0kXL2kMuBg8llX09RWtJ1c9k9EkMF5NNA572IylipY4G1j5D0PlzV61Xs6e/Z7QqwZtzJ9XH+YVWdW7Py28DtaxidnDd/aHxbgepTyz7edWiSR1vTbTWo7e60+WGOR0UzkE93KcAnaw+0CeDUD2m+jmPtZZK891DFq8fgW9jX/HTy7xfMj9aofs5GlrrVvDb6nILFVcJZZKrG5x9X+oq8w3vw8hRi/ddM48vP5VQmcC7TdgtX7IXKxzK11by5aK5iUlW+Y8jVfadmjjjOAAcBsZr1lDdBkEkMT7XAPIBzXIfpU7DQQx/l3R9LngAObmKMhkGfthR9X+VJ9DRRNPt/jpoy1wy20BBJK9T6CrJBqMHxUK3KfEFSBt3/AGVPCZ9MmoXTYp7TRY2Z+GPeKAOOeOfUVqOeOPULaSWQrGrBTIcYUehH9a4J22aJlm1SGfV+2L6jDGZbFilurpyMjkj2A5Galbg/FfSPeQCZ40gt44gc5GTz9+Kguymu3VikkTrFJaGV3jccMBn+VEWEiS64l3CUnNzLlhnnA9DSU64NESXai0XUu00Votw6NYWveIR13k4DfL2oDtmVg0LRdKLMzu4llwM529eOlbjdtQ7fXsmHKOEgRuu7aOR70fq88R7bR288CyxwWYI3DcFJOT99a2kO+WJ06/ht+wPx1/G9xbrKVQDIYKTjw55HyqQ0WS0UGa2HxVqx8TpHsktyeTvQdfnUf22ZjothYpmSS6nMxCrjIUZ/nUhpUh0ns7f3me7l2fXGeGxx/HFP4EV+5ja77UX986MI5dsMUoPD8jBx8ga9IfRzG0PZUxFgdkzAY+S153tr6XUYtPuJY4o7xpDJLsOUfGMMR5HFegPosuJ7rsjJJcwCCT4uQbQ2QRxg/fTign0Uztlq1hpWpXsl3NszdOQiHxPzXMdc7S3uszMpLQWucrAD/M+dFfSCWk+kLW8sSVu3UE84HtVc6da74ROKcrNrwMAfhTU1wsXAG5v1egHuabkuPsxnrwTjpS7OwlvrhYLaN7iaQ4VVGSx+X9a1MwcEyNufx+Z/y10Tsv8ARPc6vpxvdWuG0+KZCbZWTLsfIn0X581aOxX0dWuhBL7WFjub8jKQyfUgz7+ZrodrbFnaZRJAv2trbg3sBUuXAKNnnTtR9H2sdml724t1mt921ZoxuQ/f5ffVUWJlcHLIfIA4FewZzbzwvZPDDJbsp3xOvGPMt5CvN/0nXHZa01d4uz0bbd3jwfDI3mIyfIeZ6VKmPVlPlvZYIszuTCTjb5ufRajXu7ie8Eyt3Xd8Rheqj+tPWthfa5q8FrAve3lw4jhiUYCk+n9TVyj+iHtZCHSS2s9yDkGcfjRKn2aQso9xdXNy4NwyTEfVLoCQPSnodSu7WDu4JjHGDnagwM1cV+iPtLIjHubU7FLMO96Adc0Xp30TahPIwu9SsbJFi73JJbcvsKVotIqVleXt7bXfd3MryrtKDqWOcbQPMmuqdjOy17pTq00vf6/Im4lsGPTYz5EHgzHy9OtMdjezWj6dqDtpN4usap9Xv2hMcWnr5sv6znyFX20jg06yEMag8lpZHOWdvNmPmTXPOXNGqC7XTbSwtGhgU4Ub2fOTIT9bJPmTya5r217aDUo5tMtJWS3hOJGxt7wjy/3fX1ovtz252wSWGmsdgBErr6+aA/zNV3QbJLuJtS1cJJ2etFA2MviupuojT29T7VPYDujRw6dpy9odUt0uIHIGmWbcNcSL/rT6Rr/Gq7q2qXGoXk99eStPNcuWkkIxub//AJGOPKi9f16fWLyS7utoVR3ccSDCog6Io8gPOoOGJrmQySElR9UHz/5CmKx61hKubmTcQB9oc4HUn50+8kDwqxyiqcjBwVz/ADrUc6z3EkS7giDxMPtex9qHuiNkiKyowxggZz+NZyZITLL34CONvecZzxjHpS1aVrRWkWLchJzjPh8sfOoxbpgIZFiGScN5jpjNCNqPfO0Jdg2R4s/VA9KzURDd9cQw3kndys24+EEY2j0pq7uVa0hcENzjFC3p/wBID7t3v5mkxuFhKADbnIPnmtEgD15RQzlVHJwOWHp8qJhmZ0JhVFVfExY4J9qBgnbqNzA+lIWV/h+7dgihiScc9eKTQElHds9wuGKtjIXy+dS9rqDFCkjhwVOGXotVtA+Su8ORyS3p6U5b7sYDbY2Ugtg4X3NS4WML/J9nqN2/dXc7CdfE7L4U/wAo/vTL9n7e2Zl3SZdf0QHiOfLkeR9TRehXCR6VvZpXiXICgZzg9fUetTimJylskC5uF3AMcE88gH0xms5zcUIhbfs3pvdGG6eSW+wBI0f1ISR9Y+oFV26tfgr2W369354+uP1qvOoPYFSmn/8AnrNsd24XZjqflULr2gXTol3BF390zBZDAcowx5eZoxZf/YKKxP6r1Bxu9KXE+wNu4Lck+lYI2J2su0qSGU8YPpzS5ItjKwbBPqP6V2J2hUOrIVCngo5wVPQ/KnLchedjEHgLjrV97HfQ72g7Slb65xpGmuM99OuWcf5EP9a65oPYXs32XwLCyFzcKMNd3QDyH5DotZykkVGDZyPsn9Hms66Vlht+4hwGae6Xaq+oXzaux6N2I0fR0jdo/jblee8lTwZ9l6CplpPq5AO3oOgHypLznbjpXK4KTtm+qQar9C2wKuBjAAH3VHqzLeyst1BLvfhTGWK48s1ozkIRkZPAyOM1SNdu9V7MdoH1TTLyRbW5wOeUDeYYeWccEV04kk+DDIjoFpK810dxgAjQ9EIHPlzUgxbAwyLx1K8VzrSfpStogTq1hKu4/wCJbYdSfXHUVZY+3XZe5AK6skXGSssbAj+FdTtmDRK8EkB+9YH7K8Dim3ywYtLvCnPhXFR7dp9CIwNdswGPVD04qNuO1fZ2FmDa61w3ksMZNICbebYeZMhRk+DmkG5jCieS6MMCcuwUcD1NU2+7dW8ivHZ2t7clhgSSkRKv3darWpa9f6rGsd5cu8QGFgjbEa+5PUmmB0jSNdTWoJ3QgGKUptPOV+y330ZcdzdJ3V1FHOmMYkH9fKuf9jLhk1G6XA2tDk49Qat4uN68cZ865cmNN9HTGXBEal2OhmMkmmyJbuee7k5Q/f1qpXthf6a5S7t2j6gELkfjXQu+PPi3Y8qdaVJI+7lAYHqh5FeZk8RN3Hs1qzgvaO1NrZ7oiWE0xyByCPIfdVTWzJVllRwynCEf1r0PqnZS0uQZbeMRPyQFGQPcj0+VUC97ODQme4mtmlVyW3BS0fzPp99a49sSpkNFF7OWhXV8zxTBI0LFlYoV9CPM9PlVma4nvr2A6e24Jj9IDygPUkeZpmOBbm7lvIr1zEUEcq4yAM8AHzFOxyJdNLHHMsKggRjaEJOfxNZ5JOb4ElRuW/KyGEOyfDyhWbOCQSfqn1qPW9U3t5PYxSzXciHYFP8AhgHLEk9c01cm7vNSeNTEILeRjukHGRz4vWl2dldG8BLWkMrFw0mSGcH2HFVFJDHNP1K7t7vdeu6wy4RlY7GOfMHy4pdzNstTDp1v8QgYlWZMkZPmfShnZY75kmvIzKMZEy742AGAMetCx6haqJHlU/pOO5Bwi45HTk/fT0t2S2SAv7E6W0axEl32squUQnzPtmhLfVksryWEJA0J4jXJYIB9kE9aiLpldSYgFiBOExyp8yfWmnb9FwF4A6+fPlWyx1yiWyXvbrTtWXYtmkUpBEbfVK/cOCTUffaULRIo5ISLhTuYlhggjgDFASXEi3azRHZ3Zyv+961I2FyNQvoLW4XKM+Bg4K1pUoK0TZY9G7MRGzLX6CZ7kBoSeBGvmT71J3Gk2tn2flsLBnkLXKzOXfI9P5Uzfa7B3DwRsWibAaNT9VMY6/OoS3vpYJH/AE6/pCAc8nHvXLeSUjSMqZY+17q/aWcodyYVVJOeABUVHEJbzZnG5wvr5jypj4pru4Du29lG0sOhOaO0GH4nXLWIdXnUZPlzmto38nSqfRY3YxfStCkfiCQ9wYycd4oTOPnnpRt0V1KOLtFoY7yeLKXUPTvkBwQw/WX+NRlowk+k3UrwDw28M7Ln2AFNdk9UGj6XrOoSRmSBJo2cL1BbguPlVAWu3u7a+tFnt3328i8jHGPT5jypbbinw0jElgTGx6sR/Jh/GoGa8k0jXbi5gWOTSLtFuD3fK7TwZPbnr6VYSiz2gDYNuxGHByD6H5j+NVdEsltK1T4pBDO698F3CRTgTD1HofUUJrFhDdSi4tJTHcKQxXHDn5jzqIeOaGZsoN313CjjI6SqP5ip3Sb+O5DRDatzbcSKFx3nowrWDsxnx2B/lLUe0E9n3HdzT2eDJbSNsFyCeVz9lsA9eKa1AXPZm++LkuZZtAuZNrHI32Tn/VSgdOeho7U9Ikdfj9PGJ0GWj9R707oOu2t5aT21zYrLdSIYZYGA/wBNH6rZ4z6N14q7IITtD2cOpWx1HStoucfpI0OFnA9/Jh6+dBaV2hjaA2877WEewSMMFH/VYHp8/Opq47PHs5BCqNM2jSNnDt4rds/4b/I9DQPaDs3FqkHxumsI7sLtOWwLhR1Vvf0qrE0TU+t6dpMdhafD3D313JtZj/hBfnRFz2n0i3ka2ubrbJgh0KFuvT51R7LVIrmBNL1QyxBJBsdh+ktZR0Dex9ag9f1SGXtFeN3oC94QXGMHHTjrWsY2iLFdubHTIs6l2evcK7bJLV0IVT6pn+RrnzO81zGTGFeR13qfM10mxsYrywWSKaV+8BAEh3IR6Y8wf4VVL/swtxIl/pUrSWU5/SojEtbsDj71zUZcSSsuDCLhxZwqkKj9F1X1oTSL5475LhY+92ePbtIH3+1auY+6tt0UgdoxtJGefU0JZ3oj35jkdHQooQ9fWvPUfk1TLVpNxZyf+U5MxXFvM0iLzgHJ4B6HrUXPq0rXrTsvjcgZBzwKdtpIrG3S2LAYTdkjC7qFtIEn1BLZULPL4lCjyrG23yUTuq6tLcdptMaIIVhsiWUnI8Xl+FSmtM7djLe2iVoWvZVRRuzjnJJ9uKqeLm41a4kUPPsbuwFPDJ6irR2w7uGTRoM5S1HfMFOCeMfhW29JWUgjs5ZGHtBJE+x2s4AjEDwsTx9/Wu0/RM6SdlLsx/UW/mUeXQLXGOz9+Vh1LUzHiKeQtnOduB/yrrX0Hu7/AEdlyMs95Mx+8itYPboJ9HGPpBkSL6QdeZzgfGPVSe4adtgKgHjHmasP0kFj9JGuBjx8Y+3ApHZfshedoJt6gQ2UZy87dD7L6mvVXR5snyAaLod7rd38PYw94wILMThYx6sfIV2nsx2asOy0A7hEvrxgDNdBgHB/VQeS/wA6a07TodFtktNKllsVJ8XeRBmmbzLHzzVhtLcRKJLmGGe5X6uw7TQwRJW0bACSWVhG3IjmTz9yKdmu447eS4nMaQQLueVJNojHqTUTf6tBY2kt1e3slpEgJYSjIJ/VHqfauMdtO3192i1FbCwgwrMFhtEGdzfrSAdW9ugrNmqRM/SH9KTam/5J0d3+CcYwRiS55+0R0T26mqun0bX6/Cya3cNbT3cck6oVyEVBnuyB0JHkK6F9H/0bJoIGs6wFutVYbo943CA/Lzb+Aqvdqr+2l+lu6N/8S8FnEjMltL4mbHRh5D186zs0SJbsP2TttCt476EM99cgPvdcGKPyUE8j+Zq2lo7i47s7sEli5PLEVUJO3ti27/yfdcndtLjJ9MmkR/SFphgc/k+7R2BydwJBHl9/nWclJlBnbjUnsI7eG5u4LLTrgASr3hMjDOCBgZI5HPmSKj9X0ePtDPa2Gm6vPPeRosbp3Hdraw9QWIPLei/jioKxS57R9pWmtbg3WpyLlZpoh3NivrjJ3MOgHrz5V07RNGs9Csls7YuznxTyyN45XP1mZvU/wqOUUhOj6Xb6Lp6WNgioBzI7HdubzJPv5mq92v7QhQukaVKr3jDDlGGUz1OP1j/Ciu13amPSIZLCyIa8dfE64IiX1I9fSuNWuk33a/tilnp8jLOFYzXLttEEYOWkdh/KigLFY9nJtbuja3Nw1np9opk1ScgjuVPKqpPVm6ffT3abXVvmSK0h+C0+zURWdt/2UfqfV28zR2tapbRaZbaNpkkrafaciSQ5a5cfWmfPUeg8hVOnla5mMceSCSQ3kPeqQCHzcOduUjB55/h863LO0EkMMf1nPJP2R6UlnW1twVAZ2OE+fmaRcRsJEm6gIAxPrQ2SG2MEsE0pK7Q7Ehj6VD312WmkD43HIJX0o6e7ZrpIGz3SqCCPeo25tm7xlzkqSpJ9PWs6EJkdGjgWB3UlcEMeKZVjBMA6KHzhqSrgmORgWCEBSB0rUpMs8joQ2VJJNNIk1NKqzHZCCR15ptvHHuCkLmsmQBQQx3YyPlS7WYiQkkBQOQRwaYGRyiJWRCNo+1Wg+8LEGVQOo8zTeRuYbT4jkqDxTskCJmTcXGPCo67vKgYXG4CEh1IdcYP2h6UPFNObzYkuDjbjrtH9aHmLbmUDAxuwfWtW7sowyqdoGSOtAFzjhjW03YYrja5UbVyR5D+dASSrHJatctJNI7FmUtxt6dR0pcJvLrTUNtbTv4wGITIb+NMXNhqcjY/Js6SDwptXIb76wlHZgIvLgm73htq9DtH1R6e9SOnXTKvdrPLBIi/onAwpUjofQe9ARaTrEtzk6Zc7pH8KFQcn0GD1rtn0f/Q4IhFqvaUEnG+LTj0X3kP/APrS9aKOeaX9HOs9u762u7GzSBCClzdS8R8cAqOpNdk7J/RJ2d7GQi7uh+U75ee+uACAfIKv9TXQY0itbcKkQggjXwhVAUe1VrVdQaeQsDhR0FapuKKjC2ZfXr3EnmEUYVegUfKo43QeQ4bp5UNPctuALckcUK8wU+AAHzrJuzpSS6JF5zwentSTPt5JzUcbsnBC8eVakuFZc5xQiWGS3Abqc45AoW7WK7t2tpkRoZBgoaCa7HlTRnXcWOc1rF/JlKNlU1js5Jp7tLApntz9ocFfYiotF8RxIDnqCM1fmuwRjAORj51CXuk29xKXh/Qy+31D91dMci6ZhOFdFe2eLI7vOeDsHFORhlyRNg+e0AA1q4hmtpDHIhXHn5Gko4Ax1zXRSMWmL/R8sS0hPXnituw2gAFQOvpTRKKCvAz71rftycg8euaHVCUWWPs0DbwT3BPikOwD2FTQvmUgZAX0qvWs621rHEoPhX6xPUmnmu8xlsjIrkm+ToiqLAtznxKBSmulAAJwfSoCK/ATrWNehxu3k1i4s6k6RZYbzOAWyOgPnT8uLiI922H81PKsPcetVqC93AJkBhzR9vebMsG5zzms12JkJqnZO0u4Z47RRYyvlj3Y/ROf8y/2qjX+nDs3FI9zbtNcMVPeOchx6Kfsj2rr1wxZllj25Iz99A3tna6jbOl5iXf9hhwT6YqniT6Mjh76nIt3JJknxmRFYjH+6fUULcXc91IzPINwJII8P3Vbtd7AW1mz3K3U8duxzsEW9o/vz0qFGhabvJGqXB3ZyRbcfzprEKyv3ErXVx35LFjjPNI3jjxdefcVZPyFpStn8pXQGPK2/wCdC672d/JdpYXKTGe0voy8MrLgqRwysPI0NUSRMUrTNukUkY+0P5VuS23EnG7056U2/evtyQqr0XFKXfPZTOOisvTrQSwWaN0BKgFc9aaQgSKRuZ+fq8ZoiSQBMAHJPK/q0z3axOHDEbeePWtLVUIlJ5DDaWmVwzqWbf1bPmPamu/AcDBwxC5A/E/dQzXj3E0KsQwRe6A8l9xT0UhBYGTIUnArJxXYEhBcsl1sDlV8s1cOxaCTX7LruVyzfcpNUJmZpOeXHGfSrt2BmKauZHORDbSux9PDgVnRviZJaZIxuu0N8TwtuRn3Z8UNYDuvo5upMANLfFST5hRTdg80fZ7VrgYKTzxwOfxYUq8PdfRnpaDBM080p5684oNzVrezaXp2hpNMRaXcMq+MZCkk+E/5SMZqx6Lc/k1bLdK76TejEch5MMoHiQ/I9PLFVrt0ndaJolqq7WSzWRQvualeymrWxg/IGorviujiPPGc84B8mHUGtK4JZcpIwu0b8SREFHXkqT0+Y9aBdGS++KSUwSjxMV5Af1I80P8ACs095NLvl0a/dZSy7rS6I/xB6H5efvRE8auxjfaJI+Bn6oHmvypJ0Nq1yTdje/E5BylzGP0iDy919V96jdc0gyyDUbGXupo+Sqe3/XNRtrBcQXXeW1zKoUgKkxBER692D12+3vVgsrs3UDzKcOG2yxAeJD/191WnZg1Q52f7STa3K1pcTQiRECyW7oCt6PMMfLHkRQOq2UnZvdPal5dKlbaMnc9uT0Rx5AeRqN7TaedPjGpaXamSUMOEfZ3Z/WPqD6VNdl9bil0yZrqzY3bpi4DRlluhn6je/XBrREvkr2qaA2uIbmKRYpyDtlP+s/yt6/zrlGs9jLxLueWJCsqE97AZCHB9vUV2q9tG0iJdRslmk0eRvFFJ4XtW/Vfr08j503q2l2vaG0jkt9qTxrhZV5/7reorRMzoov0dTRaoltoV5eGwvYGJVhHy46gYNH632T1DsjcPqmiTSarpsxaS5gVMNEfN08iPX5UHPpYm1NYbxTaXsJyk6nDqR9oHzH866B2d7Wm3sBp2tqqmFNkVyvAuOemPJjnpTcvstI5Zfafaa3ZLqGkt3xcb2izt7z5e/tVZ0l0TUkiKvGwckB8Blb0IrsWvdhbiymm1fRbYLHJ+kntEbhj1yg8iPSqRfaVY6w0d+ihLlDycYLn9VvQ+9YZIp/qUiu30+6Ro335CkHcPCazR7yW31JJIgue7KkseFGOcVrWLe6imk2571ceHGSB6UNZK80UgiljErjaR0I8jXNpRVkzoM0veIYZmSGVmypHK+496f1e8Z7nc7tIVUIBnkD1oKwt5rbTmichDnKyHrTFzm4V+QHJGfU1hLl0OyyaYVsex+psZGcz4Co3kWI5Fdy+gd9/0cv4t229lX8AtefG1eS70COxmnVRFMHKhR9UDhT99d6//AA87j9Fx3EFvjp8kfdXXg4QSdoouv9k4r36QtZv9VnFvaG8cpG2f0o9SR0FWFLJZTFGlqjRjAj+GfCoPI48qP1iOWftBfrFcoALiTcsq+FeegNJRUt1KwWvBHieM8n5f2r1E+Dha5JC0YaapjS4dpPWVdyj1AP8AWhtb13TtHsvjb1o3U/UER/SSt+qBUNrfaW20C3UtK0tzJ/h2bfWf3P6qeprnV8usdrb6Qkbb6eTZENwSJU8+79VHmeppNlRQLr3anV+12tJZWMbtKTtht4juSDPp+s/q3lXTOwnYSz7LRtc3CrcalIAHlJ4jP6q/3rOyfZTTOx9kRAYbm8IxNdqd2T12oPJefvqfNxuXxOpOOATg1jJs2SJJ5WCbV6+WPKuUfSi8WlTyamO4gu7vbFCoUDKLy0jHqWJq56t2gttEs5bq6DL3Z2hUOTI3ovrjz9Kbv47TVraO6ntbWdmQBWlUORkZ6ms75LRwOTtHehwwktyw8guakOz0Gs9otUW0tTGise8llaMgRL6+/wAq6zDptjDBvezsIIwdrSuiKg9s4qXttc7PaZbzSyzq0MQAL2cYZST5ZGMnHkKpz+h0I0bRbfs/aLaWifpSBl+Mknqx/wAx/hQnaftFHoFr3FoQ97KPDuG7A/WPsP41q97Y2Fnp09xAsYackWsJk8YXyaT9X1I+Vc/aHU9dsZdVtAJhJN3fezSbAzngbc8lc+lZ9gQ9+1/qmp2+m6cHuNRvJMKM8vnqWPkKuE623Z7R/wAiWksU8smDqV5GNpuXH2FI+yOnvSbHTPzMsriGV4pO0F4pW6nQ7hbR9TGh/WPnVf1C9KhUUFJCNoT9Rf6mkNIAvrszS9zEveMW2EfrHyX5e9JdEtbaVmkBA5kYDqfT5U9b2xt4S5AErLkZ+wPOg7/9PpkvcglMjHq/vRYMZnElxaxSvwQ+cAdBSb2dhFDsxh22kmnJpNmlSHd41AoK78WmI5xlXV+DQKhcjkXlu6ZBZSowM8ih9SuGLSAZHIBz9o+lFxyR7oWkZVG4qSfKgtWKpOQec+MEYHFBLBmJwwBwijI5posmeVOB0IPtS2QgAsyop+rjnP8A170PIRgImdwHiyf5GqJH9ykLHgkeZPXFauQiGH4dixxlwaYXeI9zsSemTjNObCQuSQeuelFMBMeDIFIyc5B9KNy8MhuG8RQYGD0oRIne5aNNu4ruJLDkD0p24heKRop82+VDFX5xnoT86VAZM5kZmKqvGPQ5pOn2kupala2MKkyXLhFx15P/AEaXLbyIpDyCIpy29hj2/GrV9H1i6G41yGMtNGws7IEAgTyeYP8AlBoKSCe1l/FYX0FpaGQW1nGLVAjlQdv1nJ88moiDW2d1H+kuWOFUyE8nyHqfIV3xvog7D9wrakl3IY0JkkaYhS3VjgH+FUTsb2f05Nc1HtJZWjNbW1x3GkwSeLvJ28KZz1C/WPypfBVHQPot7Dppkw1PUUkbUxGCVLllts8hOf8AWY5J8unnXUMgbdp3Bj196B0fT20jSYbbdvdOZXPJkc8sT9/8qXczSRsoBOCMg496ABu0Fw8GnoFOO8kCn3qm305Lrjz8/SrX2t8GjNcgFhbSLIcfq+Z/iKpdziRGAb6vT396mXRrF0NO+5WJwMDqaCe5YPlsEe1M3Fydvi48iKCedBCx53noc1jRdh8t3kHaCM9KYNy68swxUcblh1c/OmZL4yHuzggedUkKyTacLGQPM5z600ZwVY5yG9D0qNaYKuAxPzoc3bIDlhitYwtENokpLpu6IVRwPM0x8Q/dKwmzu8gKip7sSAbXYeoAoYXzImNzbh0wBV6GbaJm5keRBHKAy44x5VFSr3T+A5GeaYW7kdwVZjt68Vt5CzHIJzW9kGSAyHpitKojfkg455rW8KMnPXoaS2S/6Rc5/hSsVBbXLkgu/B6AVjXxB24A4yMD+dBsoAwCR8qTGDvwWz86gpBovZBnYRz6jisg1F4yxYBh0GaHchF56noKZJJYoBy3VT1FFIexLJe7FDkgtjj3o221MGVEaQBzwc9D71BbD3ATd4Qcj1oiGHZiRsMR0FChY9i4w3id5bo2CsjFSD8s/wBKN+Pt0v4rV0jPxKF42TyZfLPrzVU0Z3u9bAzmOyTe5z9t+g+7H8aVq+qvb9rdIjQZaOUb9oz1qlAzc6JySPvVIT9IjE7cn6p+0PvrlnbjRr7S7sXljJL8DOcsi/6pvT/drodpfgalr9pHhHgYXERb0xz/AFom7trTV9HMaEFLqESxj1yOR8waTVD2s4Qr6xcxOI0um5Ayq5rpE+kz9pfozQGKT8o2kAkSLG05Q+LI9SM0xo98vZW4vINQ3uwbYyRLw2Pt8+VTOldtbKTU0igtLnfK2zxkAZ9SazlyBx1wdoZZNwByPLHtWQvhSM4zzgVdNd7FCx7SXW8g2Nw/eQPux9bk8emag27MXytnv7BV683SjilrfQmRb/4eMKTj645z/wCFDlwY3U7SBU6ezt0rZ+O0tF8h8SMU1P2ckz4dU0lfX/SAKNGIg4m8Mg27eMECnUYZOceWOakR2eC5361pQJ/9/n+lLbQoF5fX9JjPs5NGjAj4N2Tk5PUVOaHqradfsR9SeFoW9Of7UNDpdgrAntFpxI643HiiLaz0sOVbXrMqTxtjcml6mVF0Tsc6r9HrksP0t6wIH+Vev8aXrdwq9kNEgACmO2IKg9GLHn7+tRaQ2TWPwia1uiDsQFtnPWibmK0nhQNezMqhBxZv5eVS8TNvYgvXrqLV9X0mOIGSJYY7c7T9Zsf3qI1CWW11KJxxNBOuDjzU1JWyW1pqtpcwG9kWCcTCNbFsHB6U9Law3WtTX0dvqZillMhi+CPmc+ZqvWxbpl3tL6w7W2EtvJmO4hwcg+KJ/wBdf8p86d0y6ld207UFUahbAKTjAlXyYetUvTLaWx1iDUba11ctDlTF8Lt3j0PPSp/UNauNTWOZOz+pxXEHMc3dgEL+qeelQ8cilNE7IjGQ+Hex4YDjePT5+9MajenTLR9TtwsksSZwTgSICMo3uBUYde1IlWbQLzI82IUZ9RzQk+tandB4H0UiKUFZInZcOfI+x4pxg0TJpl307VLXVtPivdOeOa3kwGDDJUnqpHkRQ+r/AEiroQg0+8s43vMEGRMLDInkcDo3lVX0B4OzXZyPvrq2jvu8Z5reJ8l0PIDn9fyBHpVOOpW/aTtE0V1GwlumJwxxsAHhX51qkZS4OqaF2xvNXd44beyHe7kHfMVjcfqPnOc+XvT+o6XL2bc6hYl30xji5gbObVz0Rv8AL6GuNW2qizvDZSvLbWUh8eBubHsPnzV/7I/SPb3JVtU1CUz2p7iIyoDFPGRjbMvUn0JqtaJsI7TX2j/CwPqE8kLucQTIu4pz6+Yz1FR8bSKZNM1W3yWG6MbvCwOCGB6+9WEaVYatrb2umm2fT4QrpFct/hs3XYftL71K6t2E0wiDUbvXiuECAK6qF9cDrRQ0AaZ2iv8ATIUt75hNDI6xwXTj6vkAw+WcHzpGu9mrHXLu5n0fUreTUl8M1vgJ32B5j19xWT6R2dLF27QtIgj7sJ3qlcD7uKcij7LadGrWk9qt2i5S6ZjvUn3/AKVNMu0cz7QrHb3kWl6xBPYXbkJFIyeHP+95iqvrWiXui6sthdxmGZiNpH1XB5DKfMV3LUrbszr2iPbancxSo64ZzOCyt+uoPT5VUB8BcWJ0q6zeadDnupC2ZICD9aNjzjz2mk42hWVSUOls8ZPiUeJj6+VQr3LGZUHXdgg9M+X8asl7Yd5BG1tIfhZl3RO/+tHk3sfbyqNPZ66aUP8AFQgnqNnArjjid8hZHXUsEaSLJ4pFxuYHAY+ZNemv/wAPMHcfRWqqykG8lbj/ALtedV7NTlsvcREDI5Xg16S+gewOnfRqLYSB9t3Kcgf7tdEIahZEa52q0CHtJqGn3eo/CXMdw4fvYS0ROfUciq52i7XWOi28Zsrm1vbuRS6tbSHuox+s5PIPotc/+kqe+uPpV121sF3SteOoAXJPNSulfR/O1s/5wvHdGVMpCjmMRv6tj61dSnRGpW7eLV+3uuNb2xnlSdws0+0lmz9nA/gv31a724s+w9tJpttqMV7rUcRQXbtmKwjA5jQfac9CfLyqxxadqFnoKaVoLWekxldktxCC00mfrYY9CR5iqYvZK2ue0t1PJfwLpdkQ88sYyRxwgz9Y8ElvU0b2CVEv2LkurLsFe30yCO6kkEkaFcYX0Yn164p0dubgXQuRpliGAwHy2VHt/eueXGs6xf6i9vYzy3EQkZ0iJxu8gW9OMUu1/KCzz2d5LJHcdwSAwyAw6Y+dBZL61rLarqIe9u1VpVwg+xF7D0B86t2tx6rpiaIuh6hFcRQwlJ3kwIYUA5kPqCOmagOz3YS9ZoNR1krHcyOrxW8w4iTzkl9BjkLUvrdqNVki0Gwkkt9PhXvJ2ZcDb+tJ6k9QvSs2NGXPaLR+0mnN3N2TFbP3lwe72QxR9Mgnh5GPQVW27SWNzMkNvst7ePcsUO3lR6/M9TT2oRW13pkVjBp1yNOWQG1SFuZpfNnx5nyXyFG6f9Hkc9g19eWrafGpO5ricjdgdfXHvUUirICW6t7wKZY55NLiybwWwAbaOcZ8gal2+krQzqVvcRaHIyW0AhssFV7gY6+hI8j86rNxLpNnc9zbWLyWsrtuEk52zgYwQPTNDSWmnyOSttcRhuFVXGPlVJEWWB+3fZxdiz6LqMsy4Z2+KALN6n396aHbHshv7382NQL7t2Wvh1oSC10e40ldP/Jxa5Zi7TvNiVQOgB6EU0vZnT2TiCfPT/HXHp/OqUR7USdx207LlSPzXvdrAlgb7n8aai7XdlYoljXspeFBwQb4n+PlUbJouhwShJbe8YBQSVmGDTdz+SNUEckekSWgA7siGcYIH2mz50aInck07Y9k+6kjfsfMQSet+w/Hmkntd2S+H7o9jSqnA8WoMfP51EHTNNGVEF2QOOJgKMtE0XTZO9a2nJYBAZiJVBP+X7utGobkgO1/ZQ4H5lR43Hhr9zz9xrU3bPstcSDvew1vKP8ANeyf3pEOg6FcBZzFeRGQsSC4wvnnjoP+VFw9jNLljikEV7tdd/LjjkgD5nFPUlzGG7Y9k+8bPYGxUnw83smTx86gW1bSfj2uB2dhWADaLVZm259Sc5qzDR9Fh04wRwObOZyhLKDLn/K3pTEnZLRVjhdIb5kmfYgMgBY+VPUW1le/KmlNG4XQbZdxxkOzBfce5pmS/s3uCUsIooR0iDkgVaPzQ0f4yOExXbd4x/1g8Ixin59J0fVXhtzZmEWiGMSW4ClgOpf396qgshT2l0tkSNuymnAqmCe9fLH9Y8/woV9fsLi+SaTRLVoQAjQmVgGx5k5qZTs3oYVR8LesWIAHfYzzwflRX5B0Wyv0aK0nuZI3B/SyAxsR6jzx6UmgTArXtfoiNGy9h9JndeMSTSHcc4Geas/aqe3RLLT7Sxt9MFsFuJYbUkLHK4zweucUjR9C0efV5NZubPC2wN4/dviEMvCqF8snnFV7Vb97nVJHnLsXcSSEc4Of6dKxZqgtLmbuthvbhjJxtadiGJPQ8133slocGmy6DpgAaPTrU3Tgj608vmfcDNcs7BdlV1+a61e5Dfk+w5CsuO9kHIAPoOtdxsgservMcMGSI5Hl4TxUNjJooWbIbG18nnr70M+yfvIBKS8bd22eOD5/9elI1HURpU1tJcELBLN3Eh8hu+qfx4++q92t1WTsz2lsdUkH/ky8BtLzH+rbqj/zppASGh6zb6vZ3lhOwM9nI1rcxnqR0B+8Yqj6pbyaDqraXK3gA3WsrdJU9Pdl6EffTnbiG67M9oLftno8iyROireqviUg/VkOPJhxnyxU9Bqmi/SHoi27QhSviaMt+mt28mQj+dNxsEykXp70M6bd446459MVCd80ZKyAhl68cVOa/o+o9m5e71FjLZudsN+qZDf5ZQPqt/m6GouaVJItkij1GDnd75qdS9wKW6x0xg9c0JNc5GFx6kitXMZ3MEcH28xUczMMiRfvrRYzNyCviWK53ZHqOaGWSR3IIGPXNIU5OfP1pQOBjOM1qo0S2LLY4IpsRqzkk4H4Vvg5HWkhCzYHApMkejyqsFYYJpMp2rwSWP8ACthWXgDI9a0ULN4l4xjrSsoxfqAOwY+takYDADcn3rYjAO0cClbAFBJPPtQM0iFW3d4M46U4Mht23k0jAVsA4FOiN5AMAgnpnpRQjRVmGWwBWHDyARruPrinxbBVBkYk+gpyN2jjzsAXzHp8zT1CzcFsoG9xkjrg4C0FqupJY8riWV8JDEn1mJ6HHzoHU+0sMW6O0dZZF6ueYx7e5o7sto794Ne1gueptoiPFIf1h7elaJUS5Fj0u2j0Hs+e/dTcuDJKwP1pD1+4f3qs21w1/wBr4bp2IitwZ3bIwoUcUz2h7Tmed44c94PCoxlQP1R79fxoa5UaRoDwmMi7vMGUg/4aeS00jOXJI6FqDXV5rt+8v6J7Zjz6knAorT9Smt+yWmXm7LQ3eAfRc8ioFmOldk9rDFzqcmSvpGo/rTl8fhOx2l2rDa8pa5xnnB6ZqZKwjwG9rLGVryS7jjEtsoVWbqy5+qT7HpVYSQQTpIhCNG6uGHI4Oa6bo0ttJ2ivdNuxvju7FI3i85cDJUehqm692Q1Oz1e5tLeKWdGP6ORUHKn6o+YrBmq5LT2hsjq+g293Zokk8RDxAcd5G/GzPs38CahJuwF1baS99No2gpNG4R7cuzMufPOeQfWrLotnLpmgfD6ikkJtIzvUqSShHiA9x1rLLtnosOnSRanqA4jaEoo8cqAeFsHgeX4Gnj7HPg5/b6bqdxPLa2vY7Tri4iYB40UvgH0PnR/ZaCyudblh7Q9mrezs7dSJGjtipRvXnr91T/Z3tLb3TXFrpco/KE1s/wAPFI4TLjphugOKVpN/qPaLQtQ064ZrbXIYypFy/gcH1NamQ5LZ/R6JT3V8sceegsQcfwrfc9ghG/dahIZWXEeyxU4by4xyK55f3OradIIru2hhkBZShOSCDjmndH7SzafctJLZQXZ24Ulyuw+oFNAi6ab2Z1ia3O/VrMTMu63WGxUbjn7eRwQPKoC8btja3JWGcXaAEbobVQVPuMVYNI7XytZS3eowyogiSZJkXdz0+WckZoPVO3Wnx3JvXtHigk48PiaQjqeOPupN0KiIsF7b3t6iXN7d2Vr9u47pQEHuB15xVmvuz+rx6WJoO0+pieM4mLkbfZgo5xz1oq31i0zHPFd2zRugfDSABlI6VH6r2503QpY41c3u+M57ttylPIORz1z09KVlyVorM9t26WQR/lC8kwSO8W4AUjyPtWp9O7U91GIe0E1zMQEnh+I2tbsRkAnoc1P9ldeTtbr8ek2VuiSMpd5HO0Ivy8z7VNX2jdn7TtDJLdawkFwoCOd4y4/z+uPKpeSi4xtHPl0DtZKe7fUJZd7BQDdnJJ4GB1yTSn7FdpvjGhubloHVipWS5I2fOumJb6Nb93f2+puEi8azCMlf94EcYqs6rrVjaa5bfA6n+Ufi1K/pXycr+sT1z60vZY5RoVZdhdGeyMMvxfesdneS3BzG3oQPXyNVy+7BtFPKRLcC2RSdjP8ApAfP/eFSk/byztbho7mB4bmP9HIj5IZfL5/Oh27T3es2zXenOkstkP0cLJsyfn9r/nTJGdF7NW1ogmkke7hcECM8Y96mzZaUk8ckekRh1BAfedxz/WozQddgu7yaJQEDR97PGgIWOQ8FRn5VLna2SgJXpjoRTJYPb6LpEc8bvpO3jGTK3T8ajtV0Czkm/wBHiSwlX6ssALYXHQ561Kajqw02w7+W0ku4VOD3RGVHqfaoWHthbGSJjaSja2Qd6nA9cedALglezl3BbwjQO0+yKyuCxttVtR4rSQnw95j7B8weBUJ2psNa7N6ubPUrdJHHjinDFo5kPR0PnkdanDf6RfDvrOaGWCQYltWO1/fjzHvUtY3Fh+ShonaOOSbs5M2LW63lpdMc+/8A2Z/hR0Ujm8es3KxbxBEA/GD0x61r8samYwe5iCMcKWB+7FW3tF2CGk6g1vIxt8ANDOh3QzoejL86irXsoe/jE+ot3KsHIxwKu0J9ixoF1cRfpNQijL8tGYcmn7HRLjT5srqHexnlojF4T7/Opy7iEJlXI5I2H29ajbrU7WxuGtblpe9UbvCvB4qEJMkblWl0yOKCSJX35KOPDt9vQ/KofuZAGXcBtHKPwR8vWmZe0VrGgYwXWG6EqKeTUIdZiaRe9tzAQA7AZb2Pt70xmslkUENgD0rv/wBCxP5gHOT/AKXJ5ey1587xxK0bptcH6vXI9QfMfKvQn0L7fzAO0gj4uTp91QyjnGujs/pHb/XLwzYvp7x+8ZlyV9l9BTR7RaOPCb4nGOChY/IHyFVj6RNYt4fpD1+CR2UrePwBmoLSLoalfrZ2QaaZzkDGAo9SegHvVa8AWftX2tcadJDpLEIBhpSdp56hapceq3DukcJZhPH3cjDpv8h6Cr5cdiPibZoZtUPeSDYVVB/Ci4ew1qnZn8jxXHdK7EvdHBdyPP2xU2kNI51p+ly6LqkV22pWEts0oge6bcYd2MspGMn0464q+zDST2dmcW9+ZSoMF1MoSNsnl1Xr8l9KL7LjT7HT207Tbc36WrbO+ZFxK5J3OAeCR5etSeoWV/c3lmwsZIliZpSkqjcz4whUeYHWpsbK/HeXGm2iwXJM7CXvE3OWLHyZ2PU+w4zUVJ2ks2eK3unZrQOXlMf153znOTx8hUhd9i9dumcXlzAJiSSGYjPoSo+rVO7TRQaHctpz3EVzcAAyLBwIz6e5qqJsutj297NWN600kDvdIhMVtENsdmvpn7THzNWqCWXtgY7/AFCB4NIVAYbV2IMmftP/AErinY2402PtNNqGp2D6hDb7WitN+1Cc48Xqo64rrrfSlC6kPokpXjK98APu+XlS1CydXs1obAFNGslJ4GEGWHlUjH2d0KG1LS6bZjIIAMfX1+4VUB9J1uDldHuQByP9IHT+9Bdpe3Nz2h06DS4Y5LOB2BlzJnvPQZ8uvNNRYFgfW/o+toWdYrWWWPIWMWrZfH2QcYrmOpaxbSzzXTR21jK7nZbq2wbTwPv/AK1Fyam1tqFxaJb3MoifaSiFhjHU4HFXj6OrS31Ps5cX8+gx6ncTXDBZ3RCEUD6oyap8IOzm1xeLJcyETWp3HOA54HlQtsyQ5Qy27O5IB3EYHXFeh4+yWi3kQlutB05WfBKd0MIB6Y8z60Ha9guz+k6JdqNLhvZVWVo5J49z95gkZPQY9KhZELU43daRNb3fcpPDdRhQe/t1d4ycZK5A6ihHWzltJd19EsiDgYPX/rNXDsFoOp6tp5mVLaHTnnZLmRHZJ0wedgxj0HyJq+al2B0PUtMntra1TT5JiN1xHFmQAeQzxk+tN5EPRs4+2sWcWnpEl3EysqoycjjzGamm7Xw3cRQd1Co+oVORkDA/Cuy2XZ3R7K3jjj0WymVYxHukjBJwOpPr8qU3ZfRblsy6FYDz2rF1pexB6jhNxqdnJpOlRRTpGbcuZWyW3sftYoubtLam406XdAy20bHaZOHY9Sa6Zqf0b6frN3YXWm2a2FrZS7ngaIfp8HlSfSrEew/Z6XhtCslAOFPc+XpT9oes4q2u2vxi3jSRO/c92iZ4Xg5PuaCsNTsrK5uXa4UpLGU35OVJruy9gtAfdjQrJgf/AHZFR69g+z1r2mnnGnW7SNbj/RpOYkXpuC+pz/Cj2h6zitnq0CXkSQyRzGJv8Mv6edE29+i6kt65Uk7j4jgHPHIroX0kdnLO07D3M2k6NbwSxMpeSCIKyp8/mRVp0zsr2ek0rTzfaNbTT/DxmVxHjcdoJ/HNL2IPWzjmj6tGdKWyjhmmiMp+OEbBe8TPhC/L1o7SNIt9Q1qO0i0eZJrybYC05PH/ACq29p+xundmuzpvLOALLJe8sfsKw4Qf5RRX0U6dHfa3cXjqX+Fj2rz9pvMVi5WzWMaRLdutUs+xFh2d7M2DmIT3CGXHlHnBJ9yasghfVdFklt5+6u4ka2OPJ1+pXCPpl1dr36QtQVGIFttgjOc7dvn+NX7sR2xjXVLK6uJ/9C7Q2qxuxPEN0nBz86aAvNldp9IH0cOpIW6mjMEqk8pcIeD+IBqL0PVrbt72WuuzOtZj1WAdxMGAyXXgSD3B5NVUavd/Rl9JV5C2X0zUG74oOAQepHuPX+9SnbzQJJmh7fdlGM7lQ12kB8TAdJFx9oDqPPNaJEsjdC7S3PZW+ueyfayAT2kOV3EZyh+0v6yN5jyPSontB2b1TsXdJ2h7LXL3WiSEFZYHzJa55IPqtTj3+h/Sto8MF/Mun61Auba9U4Un0/up+6qjHq/ab6NdZNjqAMIkH+IV321yv8jmqJLt2b+lax1CMx61Gqq42d+gDJIPWSM8ijtS7B6bq9ub3stfw2PecmJP0ltJ/wB0fV+YqgajpXZvtTILzSrn82tUYZaHO+0nJ/Vb7B+fFQr33absTchr+2uLYZwLu2OYm/7w8Jp0ImNZ7Na92eVpNQ0tooA2TcWY72H78eIVGxXS3PNrJFKfMLy3/wBPWrRoX0uSvMnxfc3hIOCTsYcfgaNvr3sJ2qJk1PTfyfM/HfxqUfd8161S4FZSnwX8cQ5+1gjFbjtoHyG3q3kBzUpc9hZRCW7Pdq7e7QE7Ybo7X+Wf71AajZdqdHmIvNIaSMf6xE3qfvXOK0EH/Cx7sd8R7GmzbKCQtwo++oFu1HdHY9mA3TG/aR9xpa9pLQN+kspj64elrYmTL2xwMT5PoOcVuOLAIaY8dfDUPB2ltnyiWkqnzywBrbdp7buyy2r/AHyUesNib2RL/rC33Ulgi4BQH76r79qCvCWSKP1mkyfwpgdotQuEdYnSJxyu2POQOtGg90WsSfqxYx546UxcXsEH+PcpHjyJyRVSZtYv8BDdSAn3QUVD2Yvc7rpoofM7juY06oV2SF32mgjYC2jLuR9dzhajm1DUtVk7rDyyD/VquYwPkOlSNrpGlxcPMbqXG5lJ4HtxTD9oD3vcadYBWBwVA6/cOlMVj1ppFvZd1e6oEWFTu7keJSfc0u77VS6jcNFaRTB28EeMYx8h0pQ07UNQhLagy2dv9YKpBbHpQN3q1vpi/C6TAodz4p2wWoEPC3h7PRfE3jC41NjmOE8hP8x9xQlhHNq95LfX0m63jO+WRuASPsitW2nG5LXepymO2PJZvrN6im729fVJUs7NGjtSwEUKDlj7+tAg9N/aXXVjJMdv1J8kiH96dvLwa3r8aqR3G8Kgx0iQc1rK6PpzwCRe/kYNcyDoPSMfLzprT0dlaVgVuLtCI1UY2Rk8j5moYIl7PVpH7RRSghGvZC6v/wBmynwfcRwauXabTYNT7NrLHLOsy4lQI2wEY5TI9Oa5zLtGq3NmuAInVBj7Ljkf2qT0HtVdCXU454O8hnlKsM57lx9Vh+HSstdmaxdAsFmqFnWe6QsMEick7fT/AJVULr/ygzwxxTF7fPdgqeVB6CrvvUPJgkckgtxniqVdXasrbJXClmA2kggjz9qMadsWRm9F0K/vNXWBbeRWQGSRPqlVAyT8ulWeK0m03QJbyxvTKNZZLaRJuRgH1PPB/hTOm9rXmFrFvmjuHRoJmiUZaMqBjPvjmrTYyTvbW9zNJa5sCO7SWIBFKjHBz1Hr51oxFT1rSrzV4p5llS7ntHw7wg7ZRjkg+3vVfi0S9ncCOyuWPke7YVcbHWl0y+dpbqV47yQmQRQKSzZ4Oc8AVajM7AhmmYJ57x/SmNBHYW3TSdBhtdR78cSPb26lTIEKnehzwFbqPPIFQnbPsxpEdithpcWomYESq08isGB5HOcg9RijZt7RSSPLPJtXCxq+GIH1VB9jzQsUk+oL3MkAtEiiYma5fLEjow8ic9RUMorei9krZ7Z21LTURi2UBchx65Hp0om77H6PJC8VvCbaTGVfdkZ9xVgs3hkRRvIkZdzBjnJ8zn+OPelSIC+QM+4oJKJH2Y1rSJlubCXE0edskL8gH59ajbrVb3T5Xt7mz3XAOWeR+W966WVZhyBkdOOtR+o6LY6ko+Lti7jhZBwwFUmvkd0Ude0hXTkiM120iLgRH6ny+VMxaxb3FnKt1p7G8Vw9vcRPt7oj2PlU5N2DJnYW9/sg+yJEy1NDsDKZVL6hFtX0jOaboVsktJk03XED39qk8+zu2Zh4k9Gz6UPNZaHpWoM9hrNvG2z9Jbrlo5iPIY+qfnxRFh2Rn0+Vriz1JGuU+qHTCyDzVvb0qPMOn3uqXaQ9m5Li6Q7pIy4QD5e1T2MmNBtLP8o/Gd7/AKJdxEMiAeInpz5EVIamDoN6rP8ApY2RnUnjcuPq/Oqu962lXHwx0meBpot5jVgwCrzuX355p6TtUNW0mSwWyur2FT+ikWPLxZ96NRBDdtIXjIOlnDqeGkAHyPtVM1HUIlv3WCzWFM/V3lgp9jUpFbrBIJ20nUbhISGZJI+H9iKFkgsrmeUpol+zMcsiZ8OfaihEYt4zY/0dFbOd2fFVt7J6jfM08cjpNbFcMj8gf9elM6ZoAvsMNIltYQhPeTyjy9V60ZDZa3p8LQW/Z6RE+sf0gBk/zAHnFOhLsumg67aTWq9m9dYjTSSbK6xuewY/ZJ/7Mn8KB1bT7rRtUksb4ASLyCvKupGQynzUiqrc6hqtje20F9o6JHdeEEyblf1BI+ddA0mS217SLbQ76cwXNqClheSnITn/AA5D6eQPSoaNCItbiExiCSHCE5+tnb7/ACqh6/eOmr3Rlt5QJOF8x6Zq8X+l3ul381ldwtDcQfWT0z6HzB65oCazimiKSxhuejcg0IllDu9ba6VEZGURcKA2c0doutSWgYvGJInbDRk9Pcf2ozU+ysci77PERBxsJGKHi0G6gTbuhBx1Oea0EkWYz2t/aod6sg5SQDDRN54H9K9AfQ0SOwXLA/6VJhgOowvNeZLCxv7KbvI5YAufGhBIP/OvTX0LMX7AFiBk3cmcfJazkWef/pB0e61L6X9ctYExJNeOy5OBt9atugdn7Xs9a9zAm+eXHeSMPE59/wDKPIfjUN2570fTxcw26mWd7sSImeMeYPoPOrUJ7eLVBbSTAXEnRTyzDz+6m3wND0cBA7yYnbnr0Ln9UenzqDuLm67U3smnaae6sEbZdXScZHnGnt6mtalcXXaa/k0vRyxsUOy6usYUgdVjP9atFnZR6dZRWttG0cUYwF28/PPnmsWihq00i1sdMWytu8hjQYDggOPfPrTb6XHv7ya+1KS4XGJmuv0pHoDjAFHEP5Kc+WRmqx2x7WJ2bthBAyyalMp7tTz3QP2z7+1NIlgna7tQnZu1bTbBu91WX680h3vEP1mPm/oK5hpml3mt3zWturTXD5c7jyT6kmmZpmklklkdpJJMl3c5JPqT610j6MtMFvplzqz8tct3MRxztHU/jWr4RJXNW7JXPY+wXU5ryCWeQiEQqODkZNQX5cutv+FFgDjOa7FrvZuDtRJZpPPKscBJMcfGR6/Ohpfoh0KRR3N9qEJ+2zMrDP4VKyIerOSLr91twYYT5cVN6ZrNtJaGa4SJJgxXhyDg+1Wq4+hyNpcWuu7x6vB0/A1V+1H0d6l2ctZ9R76C5sYCqCX6rOzcYC/P3rRSTJaZOWOtXXwhtkmihWM5lWAAKT1G9uSTiun6HpF5Kbe+MhhWaLJsreLZACwyDj9YfhXIrW5XT9CtNOvLKO1e3BcOow7s5+113A+VSsfb7UrHR10/8qLbFY+6YMfFtxyPXn8RSkrQI7BZ9xc3MC206tcKWEDYJhaTGAJMfZHX51zHtV2g7Rdm7XXbK4uHknYlLhk+qMkZcemRRGifSk2kaTFaaNFZGziTG6b6xY8t59fSo217S2mr6q+oahYR6ilxl57UsVSQeQJqFjVWWWzsZqNzc9lbKWSzS1yMxRquCyceI+p96scF07TquSinJO0bsj0qpdlNXk1HXr7fPCkEESqlqmf0LZ4CjH1MZ5z1q7pDgkjaoHp0Nc8uGaIybUYhGFDPkcAMuNtCTaqFifaGYqCQOgPFEyOYipdB4uBjmkyWsCtl1LPIpAzwBx61NFkf2D7Ra32qW6b4CyisrcBTKgYs8np6VcZoZGnRQSNg3AAHk/KvP2h9rdf0rT57Wz1aa2jiuJfDGq7T4j4unpRw7edpZpGf8u3neL0Ph/tWygzKzuc9s9rpctw7mMAFmZjgRoozu++uU9ne1Nxqv0hy3KHENzbsiK3PgU8H8agL3tZ2g1PT5re51q7nilXa0bEYb+HSjvok0y41Tt+865S1t7ZhKQMhQegB8iTUtF2dVk0aDV9Kltr1DcQzoI3jOQCPWoYdptPh7QLoHdSQxxnuFuVfrtUbVx/DNXoRtbCKP4f6pCJt5GeuTVBtfo17r6SV1JLkyaa0huDE75ZJOu3HmM85pUKw3tXpBP0cvNeu63KMCV9WDHH8KF+iEIunSSqGLSTMxGB0zxTP0udoW75NJjbwIokkHqT0pv6KLvvNHRQwi/TPHn36ioXZfwcQ+kF3P0gaytxuz8S44GPOpjsyfiex6WEqhY5AZITn6rg8N7Z6H50j6bNMOnfSRfSDOy7RZ0YjGcjn+NN6EFsrO30+Rdswi70HPXccn8K2SMmy6W15D9IOjW+g6pMtt2i08Ysbl+BOPONz70H2V7Za12C1p9M1CMqUOye3nyAP+vIjOahL+0afM8LtHKMZIPUfPy+dS8ev6b2ks4dM7XqVuIF7uDUYhmaNfLd+uv8AGtEiSb7S9k7TtBHN2i7Cy4uD+kutKOFJPmyD1+VQWk/SC0lmdC7QWK31rkq1ne5V4SOuxsZU/Pio+90ntD2HeO+imN5poIMV7auSoHlyPqn2NSLdpezvbiNYe0tqHu14XUbMd3Oo/wA69JB8qqhMFuexltP/AKR2O1d2JJb8nX7BJAfRG6OPwqJXtTq3Z6T4DUreeybo0Uql43HujcfhRVz2V1rSoXudDvI+0Fgp47viSP5xnxAj1BoSHtm80L2OpL30JHjgvE7xfxOGU1VCETroGpHvliNnM4yWtG2KT7of6Gm00a7tNj2eqJLEG34YEN+B4rT6NoWoK81m72bk/VR+8QD2B5H40M+m6vYhvhbkXMYHAzz+BqkSESapewPK99altvIZRnP4UuHtrPbKQnxMQJ8KpIcY++owavqdq22eItjyZNpNKXtJEx/0jT8H0GP7UMA+ftTaXybL2Lv93GXUEj8BSJF7OyTY+HbcwyOuKFGr6S8rGXTsE9CV6fgaeW+7PsimW1cnHG3Ix/GhcAKtl7PyyFI433AYOTT4tdCSDcIQxB6HnP8AGhYp+zqsSYnyfMA/3pZv+zyQAJaOceeD0/Gi2S0wj4rSLcj/AEeFeQfWlHWrNZp1gtVZFjO0oOQePbmgRrWirH4bDgHg4pz86bNZv0NmCAMYH/IU+RUJXV9dvC0cdpIiMBgquD/GlfknWbq3HxcwiAP1i2TTT6/rN2260t3jVuF/Rn8c1h0fX9QYC5mK7ucyNgfgKCqChpelWeyW7vWnZCAwjbb+OKbue0IgmEWl2kaEcK+3r93WmRolhYt/p19lh1VWAH9TS5tcsLGMLp9qjf8AvG/6zQMbisdY1KUSXEzwxnndJ4VA9MU9K+l6Qw7pRd3IH126ChAusa7Ljx92f+7GP6miV0rTdMYfGy/GTj/URHCj50goBS31PtBdM7bhF1JztjQetSf+iaPbSJbEM+MSXR4yPRPT50Je6zcXbtaRJshGAtvCOvsTW7fTXF1EdQHfz5Gy3Q+GMeQY+dOyaEQwSage+mUpbr9VD9aY+X/M1a9Psu5DXV1nvSeEA4UD0/pTmn6QU/T3LDveijyUegpntFqSaZo89wzAFF2IM9SfKsm7LSObXmtSQ9rb28Ru8jknyVHQ4PWrDoNyk8F1cpwtxcM2PPpVCYnvGYnJYk/jXQ9BtZ7ewtoZAAmzcePMmtILsT7oy8vWTeqbQSMYNPXXcDQYNUjhG24j+DuEXjD/AGW/nUFqErG9nU+T8fdU12dYX1vdaTIRsu0LIT9lx0qMMqnQskeLQB2Wu2sdTnha3Fx8QhEYI+rIOnNIHaK7h1JYXRXiiue/dHP2h1X5ULFFcW87sWxdQMCvorg/8v41dX7Nab2o05NQhZ7aa4BLso439Gz9/P31rkjTCLtEJqGrRto9pcarp/fCS4eSDumwFB4KNiibHtvYaez26xXdzZDxwswAkiP/AGZ/WHvREHZeyv7ePTrhrqG+gbY8avgOegYDHQ+o++jD9HmnJG0bGdZsZEhPKe2PSsrRVNArfSJpY5W0uznpwuD/ABofVe3OkatpbWE+n3Pdkh1ZXCsjeRHP/jUlY9l9IijNpfabGtymDvUkrIPJlOfPzFSUfZzRVICadbk46kZ/rRaAqFt2/Kx4u9PMswAAeMgbl6AkevrT3/5QCw8GjyH0/Sf8qsw7OaR8Qs62MCuowMcfwos2lohX9HCGXplQKQymfnzeFSw0OXb/ALx/tTb9tr4kAaPsz0DMf7VdZo4QhKhABySGFMAQsqtmIefNOwKY/bbU8caTDn3Df2ppu2urlwF0yAZ6ZRjV3KxkkhY2B46f8qSYVYACFW2nyU/2osClfnjrgbclhBxwSIjUfNrWtm/j1AxCCZOS6xEKR7+orpPwJY8QMc+QRv7UptKaSMx/CTODxtKNg/PjpRY6Oaza/rupTwXKhO/gJ7qSNACM9Qc9QaCi1jVrK6e8gnltnlJVjHgZ8+nlg1dpfo8ne4drc3UaZyE7pvB7dORWR/RpdMDue5Hn4bc8/jTtE0ypHtZrxkZ/yhcZYYPApg9oNdkuhcm/n7zGN4wOPfjk1fh9Gu0qTY38hxySuP4URH9HcYK50e5Ix9o4/rT4DVkKO2Tad2bt7RVWWW4UtczthpJST5n+VP3PbiTWdHltrrUZkuSxRPigGQxY8PK4KsPXoaPn7BvbRl7PRj3oBwkmGRvmM5z71CXum6zYxsZuzItUXBLqmcffnp7U7QasgX0jVrtFa2uhqEQOVkScAdOuD0+VPw6H2iLxAysd3RDKDk+mAealNN1C5nuNt9YBEJwHjjCqPu86mbe3aO5LTLCFDAxzR8Mp8jiodFIO025HaXRYOzHaa7Nlexgrpmr7uUbP+DN6g9BnpVE1Xsp2j0rUpbK7V0mjPK96cYPQg+YPrXVLK37O6tczjX1jjupEK96eY5mH1XZR0YeeKrus65c3mp29jqQRvhE7mGSIbgF8gx9PSkNo5+dB1wgDEgPl+lqw6XHeC2C3cOxoxhTuzkepqZxbj/WLW82/nIPxp2TQHg55869B/QqMfR+f/m5f6Vwn/RmIHeDrXevocCr2DIQ5HxUn9KmTKOMdsl+A+kjXdRt7hoLs3Ui7jhuPv6VW9V1O4vrrv57ppLiCIqkoAU7Tww46/OrH2/t7Zu32tmVAS11JnnofKq8LG2Pi7pSQNuQf4UnNFasM0XWrmPQlitL8wiNTuRQAu4eWPOmx2y1ggH8oy5xz4RxTA02zc7u4GfUNitfkzTjyUVv/AObUqS+R6MkrHtNqd2WaXUpcqeBkLVG1lri47QXJ3SXcxbORlyR93WrQdL0/A/Rr6f4n/OibW2jsZVns2ktpV+q8b4YH1oUlHkejIDsv2K1LtLqLJJa3dtZQnMsrRkY9hnqTXabfSfgLWK2tbWWG3iGyONUzgetc+a+v2XDarfsPTv2x/OhV1K5jUFr2dAMKSZ26enWoc9mP10ddjsJrdFZUkaVh029KbuILshohDMwYdQvA/jXKje3oA7y8uSWz/r2/vWfGXRwTd3I8uJ2/vU0F0dXtrS5jt9ot5+B4vCB/Wq/2w7L6l2ptdPtoVkhtIpg8/eADw58gDyao7390AS19OFGMFp2x/OnVurngPdXO48A983Py5qo2iXRAfSFb3MXbnUTClwkSBI4gyEHCqANvPSgb3stqVx8IRouobvhVNxKYixdzzkc88VaZSHctMzysQBl2LHA6DJrZv7iNS3xt0igZyLhxgfjTeRhp9Ef207H3ltd6bFDodzJdGzQ3K28WIxJ5AYPXHFVaKy1Se5FpDbXvexjYYI0IZcewNXVdXUJhdVcL6fFt+PWt2txAGM1tcgSZw0sUhD89fEOaccjoNaLn9FHY3WrGH4+8tLpY7m3CnJBYNu6EeQxXSptMuO57sW1xgHJwmePKuHpq1/bxHutRu41PLFZ2GffrTja9q6qp/Kl8Qen6dsfzrOX5cldHZItGnuJu8ktbsBeg2cfzotdNu5GVRa3AVfVOP51xD8v6smP/ACteg+YM7cfxrE7R6sjZXWLwH/47f3qR1Yf27+jLULTXkHZ3R9Qa2mjMkpAJw5PPnVbj+jXtgxYro2pgjrhD/ep1e1etkA/lu9x1H6dv709H2t1wE7daveev6U1ts6IaSIi1+jbtUBl9L1EY8R3DAI9Otd1+jbsm3ZTsvFBLEyX1z+nuGK9D5J91cstu2mvw+EarctuGPG5IqX036RNUinVpdS77aANpbyrNzKUGdo+DclmLeLyGOlAysNMhub+4XCwRknP9Kokv0oXUkJELR7seXJzVY17trqmo2MttPPuiONwHANZ7WVoyq9pdVe81Ke6uJSXkYscnOAegqS7A6yy2eqWluc3UIF5Ao82XqB91UzVJw8uCepzT2h6q+javBqC/YfxqOMqeCKaBnVPpa7ORdrOzOi9qrQCRYNpmP/uTzz7A1x/tHcSWF9YXyrsMbMrDOfB8vPiu19h9XttP1S57K6hL3unXqGexkc+GSN+q4989PWua/Sz2Mm7MrsZJHsg4e3mYcMp6qT6it4mTG7a8SaCKSM5Vxkc/zrdzZxXKkdOcjjnNU3QdaFg/w07n4dzndj6h9flVyiudxBBzkZB8mHrWiIYvS9a1fs6zrHOXif66Mu+FgeodDwc/jTN7adnNbkMts35Fu1O4gEm3dj6faj/jRkTqy4xxQ17o8NxvKsY3I4I4I++iyWR0ja92bmSWTc8J4S4hfKkezjkffTsvaPTNZwus20UxIwJXQLIPfevX760tvq+nSu1tPlWGGX9Ye46H76Bul0+7w15a9xM/1ngG0H3KjiqTEmbm7NWcrvLpd6U44Dtkf/UP7UE47QadtRTIdnUr+kBp38jYcy2d0rk8DLbD92KaOo6vpknjkmVTyN67xj5iqsZo9otRXi5tlkPq6kE0v8v20gAn0tG4524rY7UTyR4ljgkJPmuOPvpZ13T5f8bSVx0whByaAEflPRJJsmxKR4545zSjc9nnYEwsABjGD/eti+7PvtEmnTofMDNYW7MMpzFcISfQ0AM9/oGSVjP8aJS77PJFgwN18gf70kjs0R4Pic+fDUpV7PbP8C4dieDzQAhdX0GFmMdgD6ZWs/Oy1jH6HTkB8sIOfwpQudAiYKmnO7Z+0ayXWbKFJDb2NvDgcM20nNMQy/aPVbpttpa7fZUJNbNh2j1FT3kkqA/rOEA/Cnz2odipt5omYr0iiPpQrT6vqD4WK6dOpz+jFIQ7H2Zit3EmoalGnqqeJvxooSaZYRl4LUSY6PKeKCTTbhWAnuLe0DeYO9qdh021L5WCe9Kngu2Fz91FhY1ca1d38ncQF3Xp3VsuB/8AV5VtdMkVM310lv8A+7hbdI3sTU5Dpl7cMI3UWkQG3u4eAfckVL2ehWlqM90C3mWGefWobGiDsNMlmgVLGH4OIjDMeXf5nyqesNIisUXwqSByetHq6xKEAAA9KHuLsAbUIyfelb6Loy6uCU2pj2zXLu2GtjU74WsJLW8BJLDpI3mfuqS7VdrMM9hYvuJG2SQfyFU2CKa8uRBDlmblj5D/AJURQBfZ7TjqOqb2XdBB4nY8ADyBq/yyrZwjep392ZSo5APRVPoT1oHRtNh03Ty2V7hGy5P+tYdB7032llnjtbEMVHxzvIxXoQvSrbpEVyVqWSVzvLcscmpSwuXtpY5YzhkZSD71FzPnyA58qLsXL7Qf1gKwunZolxRb7q00y/1B7y5tJ1lmO5xHIFBOOtSmgajpehW00H5MnmRn3ruufP8ACohgE8QAyDjn0qu6j2mmstSmgWBGWMgZJq5ZZNUP1xSs6LN2l0iaeOSTs7J3sR3JKtzh09s+ntTv532gJI0JGPlvuCa5zpGvXWpXaQyJEsZDE7evFTpJA4OCeKzQkkWb87YmKluz9nkdCZWOP40lu1g3Zj0TT1HuzE/zrml92quba9lijiiYI5UEnrT2mdo72/1WGB44o49pZthzmq6KpHRl7XzqfDpWnL77GP8AWkntle5O3T9NHP8A2B/vVc75jzniqjqmu6hFqN1FFfCKOI+FdvX2qVJsdI6kO1+qlSRBp6D2tQaz879Xx4TaIP8ALaJ/UVy/SdV1K71O2Sa7do8klRnBxVpMm7zzTthSLMe1etsMC8VVP6ltHx/CkHtZ2gwFOosF9ooxz9wrn2oWus3FzLNBMqW+eCXI4HXigdDu5rrWLVXuHdVLMwDHBwD/AFpWwVHT27T628m46rMF9go/pTT9p9aDEHWLnn/3gBqFaTGSWAPvVVugt32lWI7yZZQi8nHHJoTbG+DoUmvarkd/ql2MnABmPNJbVb987tRuyDj/AF7f3qB1uE/lbTYjwMs5APkBTpdSM7gDQ7BEi+qOHIfUplb0e5YHn76Qmro8gT8p7mJ2gCZj/Wub6/LL+XLiUxvt3YXOOQPSnuzqRya1G7Dasal2DeXpR8DOiC5l+NUR3MuQpziQ+f30YZ7iUEPcSMpHRpCRxUNZSbTNJkZyFz8utRuu6yLa9EKvJgR5IQjBzwKm2xlpLKi8su0+pGOaHM9uCRvjGOviHFc81fVjexxW6RzhIeu4jxfKgbcEpMZFIMg2g598UUS2Xu7l23avE4O2EgbcEZNZf6lH8SxkmUKAEBJxkLxUG95HDdlFG2OJQvToFFGHsnqmsrGbSe2ZhHvWOVu7Zs89DWi6IYt9StV/18Q+Zpo6nbLlmuYgo685oR+xOuRzmK6tRZyEYAmHH3UpexWqugxJbcj0FPURJ215E6B0kVlPIwK9IfQm4f6PARjHxUn9K83W/ZnU4VQd5boBxz0r0h9CdtNafR73Mzo7i6k5Xp9mpaaA4L9Kmoyad9Imsyxldkl3IrA8nIqN0O+F7pwdmXeJCGGelWbt/YQzfSBrZbdkXchIzwCTzUDb2iW8hZGbJHPpmiTVGsYsLBBXGAy1QtW3WuqzwbmXa24fI1e+eufI0HPpVleTGW4i3ueM5xWSdOzWSvhFDNw6AsCQRyD05rpFpN8RZQzHGHjU5+6gDoGlkD/Ryf8AvZo22to7WFIYhiNBhR99OUrJinY/+FRt7GJFnixnK5A98ZFSIoG/WV5gUcLuAOcdSPKpj2OS4HyGmtIJV+1t+yfOlSwvGQZBjPng1Dfkp8EfEHHHAc49aejsJItzRXGGbzOWB/GtznSYReoJbWRPMqcfzqCl7ZSJKi/AxsYypB3kdByKmVgu0AxPEMc8L1oUaBC53kREtznHJpJjl0L0nXRrcku63WFosYCtnIPrUhNAk8LxMCQ67cZ/jQFnpBsXdoJUQkAEhDz8qK7i7BybkY9cVLpsOihFbUcdzNkEg8irT2Ya2SBhCSN3iKt+FPns/AS5/RsXO7heuaXb6I9o5a2ljViMfU984p/AIk5B3kDR8sGQ/jg1C6xZ6leWtlLZRTOFjxIIyVx5ZqQNtepgC5jGB02UwdKl2gC8IB48JOOfL+dKJUgnTobmHSoFvFdZlyDv6ke9EkIyFG4yMZoCPTbmFyyXZzjgMN2RTy214rbjcpxz9SkwREahqsmnpFF8MpDJ9bcfI81I6Fq8moSThrdY+7QHhs5Oaal0N5CC06MeT4h6mlW2kXFnJ3sFwitjHC8Gr+CK5ssSdAR05zxmquzPFfShUdgCQMA1KCPUNo/0qLI/yUI+kSySlzcANk5KjGTWVGt2G6Fcut1NG6lOAeRUjdSs1rJz5ZqItrGa2l7yOYByeSR1oqRp2RszBgRkjFJpFror13LuYkHOfWsEjbc+tMTt42z5E0kOQnB9qI9ksv8AbyDUNFtLY5NzFhrOUHBGeShPkPMVebHtDb/SH2Lvuzerru1buSsDyYBdl6Y8t3H31R5rYQW9tEMgdxGw2/L+tB3SyRKLu3LG5jIbcDjLZ6n3966IoyZzi+s5rG4aOYABSVB8sjjB96L0XX5NPVIZ8vCCcnPK/L2qz3djHrLPIg2XDHMsLfbPmaqmo9npoFkltf0iofHGeGWtKM5Oi6218ksYkVt8bjhhR8VzhQDhvl1++uU2moXVjIGgnZQfLqD8x5VZdL7VQTyBLo/Cy9N4+oaTQkXlZkkJyKxoIJAQyKc+oqMiut6BlPeL+svSiYrlHxtYGp1ZQ3PoFlKxcLsbqCvGKSmn3MBPd3DsvOFbnFSKTjABOB605uHr94pbNBomQU1jcuAXtYrgLwQy84qPm0uELJIdJAKjw4YjNW4MoUmtmSJ4wpw3zo3F6ynDTLLH6SzuozxwGOKSdJsA5O2+BDYHnVy7uIjPP41ixIH43Cn7A0/0pbaTaBiqfHNz1PSlNpFkrHZHdsQeCW61dltoyed1Z8PGGJxxjHFPcPW/spkOlQd7k6fK+OclzTo0UgBoNMhSQnO6QZx+NXGMIi7eopRYEckfhRuPQrkek6i0aiMRWxVcMUHWlxaIykG4upXJPIDcGrEJFzyBk9cCmH2CTJZsZ6DpU7MahQLDoFouGKg8dTR8VrDD9VEx8qQ9ypIwePemZLrPAyD78UrbKpBxZFB3ZHpimHuAucfxPWo6e8VULSSqir5scCq1qvbS0t1KWpFxJ6t4U/uaKYizXmpRW8DTTSLHGOrscD5e5qia92ukvEaCzDJCftZ8TD+lV6/1e71K5MlzKZvRPsj5LRlhodxebJbnMMJ5HHjNWkSR9tZT30wjgXvGY+I/q+5q66To6WFhJMm1ljH6eRhyfYUdBo8GmWCveBbe3IyqL9eT+1bEVz2ilVYVWOxiXMadMe59eKtOhD1mj6zdqFg+H0+FhhCPrZ6j5mhO3sKxtpZjAVIkdQo8quNvbpbRLFEAsaqAAP5n3qpdvuUt+OF5qJOykijzkgA5ovTplFxEGKqu7JJOKAlbOB50bpSh72JWPHXHrWbGWmS9ty//AJxGRnPB+VVC+sGudVuJe/RkkclSM5q2NIDkFQFz9lecVFv2ksYmx4ywOOF6VNAC6HD8FcNJISAUO3Cnzqc+PjyCRIwHUhD1oex1aK/VzAH2xkA5HrzS727+GtJJQQWXAXIpoCtS6TJcXEzMXG5ieUOaM0rTnsb34ju5nGwpgLj761Jr92Jk2iPnkjbROn6xd3GprbyFDHglhtwabEiS+MkLBfhJhk+1RU+m3FzIzPaYLMWJGM1I6pqBs9LmmiTDgAAn1qFj12/lbxS8YzgLzniiKG3QVYabcWV2swgdiV2AEjHzqXEl7/sn/wDlUVp2o3U2qpDJKxjCkspA5wKP1fUHs9OeaNF3jAUn3pjGZLPUplZGmkWMknbvGBmm7HRJdNujcwRRglSBufOKhp+0F+cbJMLnjCdaM0DUry61UfESMyJGSVPTNAr5J7/TmOAkQJPqSKjxolyLo3AnEcpcuGUkYp/XL1o9KdUYI7sFyDj8KqE0lyUz8RJ4Rx+k8qUehtluWwvFuBPNeGSUKVVpCWwD1p8RXfBN3EOgB21W+y7yPqUkjySMsaHhnz1qX7QXYTS+7lchXYLhfOgExUmjRyEyS3ETPknJpVvpkVtIXhuIg7DDbVzmqXHJFmVXDOp+rljUt2dUR3FzMhBATaCR5030L5LXbPIkRJfdknIIxmtTmKRi8kMLMB1ZMnH9qEkuSigFuVXOarq6heXV+qJcugZ8cemRyKyUWymzoGo9mU0uWOO4RD3sayxuqABwRn8RQb6RaEZGRnptUV0qwez7VaCtvPIizogZtp8URHG8exwM1S76wuNNvpLa4ykiHB9CPIj2NaJcCK+ezdo7lo57hXOd5IHNT2n3i6fPG8cSSd0wOxgMHHkaZYDG3djBznrSGTn6wP3VVCLgnaG01CGWOSxERHiW3QlkY5wSPNRj0oebTY57QXumSGa3Iy0eMyIPUeo/iPOq1A7wupSQoc5JXjNSkVzPBOL7TldJ08cyD6snGBgeVO6ENrMA2N3hP1T/AH9K7n9EUwbsS/T/AM6k/ktchMVp2khkl01RDqKDMts3Cz46kfjXXPocX/8AMZwyMrC8lBV+q9OKbkmgOJfSLNJD9IGriMKQ11KPmw5xVHse1L3epRWr24jDPgsT0NXn6RozL251kJ9ZL52+fPSqYulLGRINNg70Enf3hznyOKyNeeKJ4dKGvZ3tRHIoDLkhl9eOKdjd2QGQAP8AaAORmk3UbT25RCu7IIBOM4rNI15INe1aPIQlq3hUnBcHPA/50fpGvxavJIiQtEyAMAzA5FMjSYhIzR6fbqxJ57w9Pwoi0so7O7aWKwgh3cM6uScfhVtqiIppkoKbmJVUI8s5pQfI4pMyl4iB5c1Jo+iPttWsrKER3lwIQrFE3LnIzW4tf02KEC4vRGCTsJQ8jyoObUbLTruVLuFpO+xIm1QwBHXrWk7RaP4t1rLg/VBRTj1rqjTRyO7JqG6MgV4yGjcZVtvWo5ddtbCNYrmTaysw+puPBP8AenrS/t72IzWyMsecKD5Y9qEudSsdPvpo7yB5WkIlU4BAB4I/hWaYC17T6dbRRCad1DLkHuuoz1qWjuN8UciEFXGQcZJBqD/OHRfGTayspOV3KDtHtUjbX0N7AJrcMsZyoDDGCKJdDXLIW87Q3ulBII4omRcqCw5OOlKk7VXVpBCFjhKFFbBXnPnii59W0/Tr2WO9t3kdjvVggPBH96xe02jb2/0aQ4OEGwen96IxtWFkzFcGRVPO1lzjHr/41WtQ1++014Yoo42UKcZTJyCcipq0vre8gFxahkhzgBuoxQj6tY6XeywXMLuzv3qkKDww6c/Kpj2N9EVN2qvoHjSOOB1KBs7OferVFPviV/CVZQeR6ioiPtHoxkYvbSEE7h4BwMDij4L6G9hFxbgiJjgAjkUTQRZDXnaO70xlt40hdVJwz+fPSmn7V3duIkjghdWjD5PXOelSL6npthdTwX0LvIzb0IQEYI/vTQ7R6Hli9tKQ31cKOBinXAm6ZLRXAnjjkGCJFB4qG1fULy1v8QSMIyqnAHHNSdtdxXcKz2wKxP8AVDdRQGr6c95OoSQLtXB+48Vm+GXyyOt9avTrEMUk57ssAy4Aq0A4BGeTxVXXs/LHdLL3qEqwarGJDkcjjFKXJUbKxeMRNIo9TS9PgkvJ4bVATJK4QfM03qI2X0oHQNVn+jLTxfdrY5pMGOyUzgerdFFJ8IZbdZgWy1RIFIYRxJGPuqOcEoSo8R4x7UVreoxXmsSPHMkqiRoty8DIphPEMmt49GL7I6+043ASWBzG6NkbeGoOVllPd3yEyD/Wx8P/AM6nnQ53I20jr6UzLbw3JIYBZfL1+6qTJcbKtqnZ1LwGaNY5hjO+Lh1+Yqp3eiXUO4xqJox1wfEPmK6DNY3dtKGtwSAeShwaQ9xDcAm7h3lf9Yow4/vVWiEmjnVnqN3YyjupHiIONpP9DU5B2wKcXUCyHzKHB+eKm59Atb1WKmJ29JOGI+dQt72RaIlUMsOegIDD8RR2PYmLTtFYTond3TRkj6slS8d4zjwFW/3WBrnD6Hdw/U7qYL12nB/jQ4e9tGye/jxxxnNFDs6sl0+PEpP30sXY6AVzCHtJqUSFUu3HHAfGaKs+2WoBtswhkwPtDn+FJpBZ0pbrA6GlrdZPFUFe2k3V7KM/JiKdj7bDPisePaSk4jsvoucY5xmtG7++qpZ9qorqIuI1TDYIaQDihrjtqsEjKLQNtOM7+tGo7Lp8Vx0FaF4p6Yql3/ae+tYIZnsY0WcbkO7PFRUvbXUpMhe5hHTIHNKg2Ojm5YkEEj7qDudaggYxs4Z884Oa5nddodQnIBvXYZ6LxzT2nzXkisywSyMfPBxT1DYut12t0yDjvHlf9VF6ffVbv+3N2zmO0iSEHjcfEajF0O+nlbeUiBJJy2T/AAqWsexnfSEOJrl+oAGz8c09SFJkBc6jdahIRJLJPIfL+wFPW2iXtw25wsK/5uWPyFXm07NW2nxh5p4rQZ+qmGdqLSazjm26dp7SSA4aWfy+WadIZC6N2WESidoBCvnPPx+APSpR9RtdOZ4tKh+MvscSv0Faa11XWlYvO7R7tmAMDHnU7p+jWthM8pBkdlC7MdMUnKhkTF2em1Rhc6lK6syeIE9CfSrJa2cVtaxQRqFiQAADqR7mnRH9UsPEOQM8L/zpeCelS2MQRwTjpVO7Yr34aI8k/V+7mrdLII42cnhRzVK169ZbuxgAUm6EkoJHmDxSGUKUncCCakdHGb1PYGg9Qj7q+kX1O8ffRejE/FM36opNAT8rExPgeRqmfCXgz+gbOT9mrduZ1AHz4rN7cnJ9OKkdAGhRyR20pkQozsAQePKiNWLC1CBGYs4GBR1pC95KIoigc+bsFzSZ9GN5dpZXkU6ry+6EZ5xxyPKsZZYxfLHXBTJYb2S4kCBhg5AzjAqQ7NrIdSneVm3BcAmj4OxOo3UqBbjYjKSSxwy+gIrNL0u80priO5ifvJCNuVJyB51azY5dMFFj+sIs9msZkCAuDz5kVCl+7DguD0IYGpLXbW6uLNDDE/dwZkZsHgeX9arcMEk5/Qh5C3TAzz6VcZxXJMkWHRv0mpTy5B2LjOfU0VrM4FvFG0ioGk5LdOKc0rs/d2FrnKSNMAzR9Ch9/Sm+0eh3ZigJwsSrvO/zJ9PWoWWDZSXBXri3gKBVuowy5OeefQVJdlogst07c/VUHOfeo2PTJJUzvRUV9pNTGgRi2s5udxMpGflWr6I+R7W2haOBZbgRDeTgjORUJM1m0RVZgRgAeE5HWpPWLb4u5jxKVCL0x61GppAYnNwaI9DfZKdnIYoo7iSOQyBmCBiMeVZ2guLcvbwzOxUAueM0vRU7jTlUNkl2OT+H9KF1S0S7vN7MwCALxSSth0iKuTZSACNWXb5hRzUnpAWOydskK7cZ86BXTodvMrUZEAthDGTjbzVUJP5C7uXcrpuIOMEjqKb0nTrZZo5+8kLxngfrGmLlHlg3RPsljGTj7QomyTFnENxZsZOOKcVQNlh0nUbmD6RNLjtJO7mkIjz0B3ZyG9RXU9QtLPtTpbiB1a4tZGiR88q69Ub/ACnyNcetG7rVLa+BPf2rF42/WOPqmr99F+6az1PUJshrmbBUHgnOSMeoJpy4CPJATwTWsrwzqI5EO1lxyD7e1JB44YFvIZ610HtJ2dbVYTeWq/6ai5bH+tUdR/vCqB3TMdoBLZx9XkH0FSmMTuGcZGaKtLxraUOpBOPXr7U1JZ3AOWik5+1ikCGTO0Ak+4xQxknNCxQX1jKYnTBJTgpjkkevy867x9FF/LqfYkXUyKsz3D79oxk4HP8AKuCWUMsb4ZGZCOVz/Gu9fRQix9j5RGfD8XIQcdeFpCOJduzj6Qdb6c3b/wA6rKzo6hkycgmrJ29OPpA1z/5x65/rCPMj21u5WfvcoqkqxUjP9KirNr1jZYVkXJwehxS85qC0KO6tVlgvVKF3Dx7iWLeoqZB6daGqKi75I+ftHp9tO0MsrB04I29KQO1GlswHetz/AJagO00BTVi4471QeB6VHm1QW0sm/LKOFPnT1Jc2joqOGjV1JwwyOKxyxUgPj+tR2hzmfRLZ26qNnXPTipAnpWZonZVu0iExW82MFW2GoNCzvlI2ZeoA5q1a3CZNKuVOMoQw++q1A7xI6pIETAJB+18q2h0c0+GWHs5JiCaFlK7GD8ikdo7dXeCVieQwOP4U12fJW9zJMHLpt2g9KO14E6WWHWJlb7qHwT2VNnSJtpVvlVn7LziSwkiwQUkyc+4qpiRpLsqy8g9asfZ/9BeSRn/WID94qpdDi+QzXLEXmpW7MzrujIOzzI5oE6LCsoRmnzgnOfQ1L6puVbdgeRJg+oB4oaWR0njk71w27afDnGacOhS7HdDBjtZrco6mOU4L/ayK3faVDqWqIZZXj2w+Ep5kH/nTtpITOQZWfz5XFM6xfT6bBHdWwUuG2YZcjmp6YJjf5rWQlEfxswBXP1epzUlZWSafai3ikaRQSST581Vh2v1QuGaOAOuRjbj/AK6VLaJrlzqs0q3UcamMArsXrk80TXAQfIxr9v3l8r8gmEn7warayknBTGferbrAJktGyQCzIePUVUu63TYCoMEjlqF0OXZbOzczHTCpHMbsPx5qQvL1LPEkofaWx4efKoXs44X4mIY6q3X7qO1wGTTGIGApDbqzfZonwYdattpbx8DPNHI+UVxnDAHn3qiytnwjJO05NWzTZQ+m27c5MYBz7UNIlSZHatgag+eR9ar92CVNC7A6trsihXcM6A9cKMKPvPNUPV4mmvIkjzvlGxfmTV47dzJofYfTdEiPilIDqOoCjr781D5KsrekXMq9nLeYgs4mctu6sc5/j0q128yzwrKhyHGaEuLSGLs12fhFo9s1xassm7r3ity331H6ZdtY3MlrcHCFuP8AKf7HyrpiuDJvknyTgjyPWthBKhWRRx55wfupOfxpW4HnzqQHMOoxs3oBwQeRTJtI59wIx7cCiAfOsMccgO4Ee460DIefRtz+BsY8qGX4u2lGA2VGAW5FT4Rl+qQ+OgPWsY7zhkIPnxxTuhEBLNDvQXdhHI0h4eJefvprudOnbbieAnngbhj5GrIbSF0wrAPnOV8qZ/JwZyA549ardi1KzPoljO6rHJC6t1Z0Ax86GbsTbuxKx2zD1STANWWXRk3nAA9femJdIlX/AAkz/CjayaZXJOwqgcW0gA/7OUNmhj2LJyFiu8r1GRxVnFjehvDGwPlhqcayv+/VlvHjGPENuc07Q6KoOxcmQO4uzuHOMUluxioA0yXKhvCMsBk1bzZXSvlZ5x99Nmzv2kO+8cxeSlc4otDIROyXxTrbSLLJ3K8CSbAWnIOxVvGf0kNqmD9t9xqZTTboxESSSSNn62MceVPJpDkYO4/OlYqIn8jWtlGXM0BlA4jjQDd99YHsIYkEoeVl/wAVVfG32qcj0RTy0SZ9TSz2ctpryOdgA6rghRw396NgogYdYgWcQW2n95KzcM6YCjyo1l1K+yDP8OAPDsFTkWn2cT72Qb/eiNyn/DjOB0GMUrHRB2+h7kQzjeygZdj1PrUqlnBEQX8WB1PI/Ciclh4mCewGa2MLyigE8E+ZosZpV2xAR4Rfbp9wraqqcqDnzJPWtgdPat1IGh0zSWYg8VtjwRnHvQl9eLaQsw5dh4U9aBsH1CfvZks4+jeKQ+lUjtlNs7QWrow22sSjHpuNXC1jMNrLcSOWlcEk4rnOu5uNTluT4ScKAc9B60yWzfaKAmSG6ReD4Tx5Uzo3Dyt7CpTK6h2YWMpuliG0uD6ciozSASkrLkkegzj3pTdIcXfAXqEjiwfuyVc8Ag80gaR39pH3eokXLjcYpcqD8j61OaZpi3BJntpXTgnPAT/Mp9alIdPtnkAvo1ZoCfGR4lHkuPMn1rzMvlKPCNUiEh0aa00q3munUqXCuinJAPvVjm1FrFEtoSUQSbAzDp/vc0Q0G2FRHFGIWbgHo33Ghrq27+M4iZsnByOT7V5c8/sdyLoTplzcTalLIS0bgEAleR67vf0rU7d/HskuJEdXJWRU8Wff2opITBZtOWddrZld+CD/AGqGPeHUjHJIJQVyqB/Cx+flUqNu0BJd06W8dl3xudw2HOAM5zxTEWni3kubi0i2ZIBiCgglfQ+9MQKkMzrNGjxgDxlyCp9Pup+DUrZYWheM43Hw7+MDzNafmuEZsNh3PuubhQksjDIQDwgevrQepaVFNbG5iha8cBnIlOAijoVGeflQ19dxtHF3TiNGbBUZ6f2oR9WljnV4P0jKpxhsgfLyq4QmnsO0V5bee1jhe4gEZmzKA/JYE+gp7TV2WKMThHYvnHU56VORyx6iGuEmaO6kOGdlHgUDoAegz6edB3wubi4WBkZliTwAKASvqQPOvWhmvhk1ZFTT7rpyABjjmmorhUhwXG4Lnp1oC6urlXk+qo3EHPUUxGZ2Qy4BWQiPI5rsuKQmixW+2OziH+X+fNB3E4ErqW5x0oh3EanIIEanqOOlVRpHZmYs3PPWlElkyZMoQG+quaXcSBLchedg86iLMs90iknGeeaNvpgiMo6uQPwqmILs5TNEjjh88/8AXpRUrtHbSPkIcHpUTBK8V7bRp9bbhvvonVJ+7t1jJB3GgCUsro3MHf4IKjDL69K7D9HoWTs0P0JU98WLYwHz9oH+dcNtrl4XswhwSMn3rp3YTtNJZs2kzMFjk3GFmOVQ48/aiT4KiE6B2su//wAoeo2g3z2NzNgIDzGyDG9fbjkedS/anQnaR9ZsAoIAMyR/Vx/2q/LoRUbo/ZT82tRuO0Lyd4Y7WV2w2MOfX5jkUb9G+qXV1oEq3LCWBJP0TEZZN3LDHmPaskyiL0+8M5UuzSBRyGP1h7VLHTrWdd8Qba4yB6UL2o0M6XKb+xBW0d8sq8GFvf8Ayny9DQWna46TgSxSBD1Poap8hZJWjQRmSJHR5o87lJ8QFdm+jFdvZWULgD4p/wCS1xG6vtPjumnj2mVlwX24J9jXavoonW57HSSL0N1J/JammJtHDO35/wD2ha4P/wB8eqpPZRT3STsH72MYUq2CKsP0lTm37e6++CcXb1SrjUE+H2wXqrID4twzxV6luSolltQHVt8rbckZcY+dEKTnGcGqjJqN4hONRhGeg2eVSNtqm+1SIlpZm8TsFOFA9KbiKMyVutOt76RXuI2LIMDnGKGPZ/Ti2TC/3MaVdXcq2DzWxR2UAgHmtPdzRqARlwATxx70km+huUV2G2ttDaQ91ApWPOcH1p4t05oOOZmYK2Qx9venc+pNS19mkWn0NXcfetLGOkqfjxVG3kKQx5BK9KvNy3+Ew8uM1CNe21hEySwCTbIQTgE8mqiY5CK029EOpQN9kNg/I8VbL4CawuIsdUI/DpUd8faW1vua1RvH1A5GfWj0kEkWSAVK+YqpImLKUGZThgTk5zUhpF6V1WAsTtY4JPvUnGJVi2xxoyrlM7BnOfOkWTXQkPeIm0EFfAKprghPklNRYyaZPtO1lAYH5Gqo2oXJG153wcfd5irW/jidc4DLg49xQUWrWEUaRSwLvCBSe7zzgilH6KkR+j38v5XiSWZmVlK85+6prX1MmjyFeq4cEeRBpMmp2UUmzuVV9owyiiZts1nNGQMMpxz7UpLkUeimEpIW3YYscnPrUn2ecRakoHHeIwNFoIGshhYw5XA486ItWh3oQIlbGcjqPaqkuDPamO66GOkvIuSYXV+PniqqrRq5YIuSdxz61cr0LNYTpkYMZPHrUe6wfBZCR7tu4HFSjSTAuz9wBqci5UB4sdPOrHNCk8RjkBZSORnrQEQhSRGTYMjyHNHMzhS2QMqcfhUS7Li+ANtGsj4trDPvREcUdvCkUSkBemaiE1G7kkOSoIx0HSjLC5luYXaXG5WxkUnyNE/2a0pdU7W6e0q5htg0zj9bH1f40rtAfzn+lCw0pB4BLHCAPnlqnexcS2Oj32rSgY5Ck+SqM/zNR30R2Z1j6RbjVZDu+FiabJH2m4FQvsGW/wCk3T4bHTLW5SWPbBqLsAvVInH1fxqg6nZtPbGeJd80f1V/XHoT/Kul/SPZOew99KD4oWWcJjjg85865do9+txYFM+OIbh7r/yroj0Zvsd0jVl8FtcSFt3EUh8/UH3FToqu31itwnxVqozIMmP9b+xpOma+Yz3N4G2r4Qx4K/MelDQFnU04KHilWRA8bB1PQjkGnlfPBGD6VJSHBW+NuD0pO6tbqANmKNvsj7uKUIz9iTZgema0HApSsD0oARiZTncrZ+6lLLMvHdkj2pdaOB5CgBKycklGz6A9KV3ueO7kHvWAg44ApQ3eVACRMUGNjn5ViuSxbu3B9CKXuY4yelKyc0AJ3vtP6J8H3raGZVO1FAPUs1bYnb160nOeoFAGASM3iZf+7WNH6ySP5egFZ91bBPmaYC8Lt6DNY3i+tzWicDNIL56UAK2qOgrOaxWBHNb5HWkBmTSSxrCc+YHzqMvdTjgdoof0s3oOi/M0AFXl5HaJ48s7cBB5mgIImu5PiJufYdPkKbtrSWaQz3RO708/u9qc1C7+Gmt0DBU3/pD5hQOgoEwPtLqv5O01ipAZhjjyrn0mpQOpL2pZmHnLjJqb1tG1m43G5EUf6uM1FHQYgMG/OR6R1RDJPszdwPPPAluEygbbu3Z96HMB0u9njBKgPkFfNT0+6mrS2ttNvY7kXkjsvBG3AI96kO0DLJJDNGD9Xbk/wqZxtUOJJi5NpZBVnZgRuaQnKZ8gKRpWqrM7oLgrKx5Y+It/U1VLnULiOOGEMCoG1kBxn51IaKYImMjMqT5wATuJHn8q8nL467Zsp0Xb45J7do5AGx0YnYVPvnyomKGFH2R3HfSouGjLYKnGc+9QQvkWwd7kRbmXdEpOSR6mg7nVg9tEltBkoPFJnn5nzFedLxb6L9hL6m0g3tMd6OoUjOPuxTUtsL63ubq1hhaJADIki4LEDHhIwQf7VBDURcOneyBlYgO/JJzxnmt3l1BpshgjdZVVTiTnBHUZ966ceFpEuVjMYmu7hvh5EVowdyyE5I/rTcESCO4G+RpGTefD4SB1I88UHJqQuQzwSspfG5emcdMGp020Vrptncm5WZjIA9zGoAViPqH7q63HVEsirmd43iR2LpIBsJb6v4eZpAhms2YMpiIHKEcEHzz0pWqpHFqipHskjzvGwffQ51yea4YIF7lhtER5Unpn1zW0aomg3TJ3lkeNjztOFI6+1T+m2pktpgl2BczLgO3T3HNVx0k0uUxoromAxDckeuD51O6bfLNbO9vCcA5KLz5eVcWZSu4msCIutEit5CzI0luhG8/rZ8x64qVXTdITSe5AHeO4MUq8Z9sU/bQDVryJbqFj3AIFuxwXx6+1S9xpkNnOZ47QMZE2Rbxyh9AOnHrWEvJpqMnydMYWjnerrNbRzRyqyOpxtYYOPKq+4BPhHXFWrUbC51aKR4meWSFiJGfqoqty280F1LFKojkTAZWPTiva8eeyOOcHFirLAumYdApIP8q1fIWVXUcjnFKs1ADkZyoxTu5TIYz9YDOK6P8ATMb092nvDIegUCndWQOIlAyQOlJ0teJJBwCcUqRxNq8QP1QQMfxoGI015Z7+CN8sIxjp5CrJBqf5Ou7e7wD3bgkHoR0OahdMj3X9zMMKASB6DNK1ecBkiTkgcj1pPoDutrcw3FuLOf8A0myvEwm4/wCJGRkrn1H8qM0HRItBs5LaCTvI3maUMepB8vurnnY/W43gg0DUJMMyb4HPUEcgfOuk6RqCtGba7IWeAbyx+0B9quZSp0bpWrGbPtFY3/aK+7OTlWkUDaD9WdCMsvPmKqXaLQG0O53xyyNazH9C4+yf1T71XNJik1b6QllZXj+Iuu83rnIAOQc/2rpun61p/aP4/S5l3NbyGN0bguuf8RfetkzJ8nOmdsszPKSegI4r0L9Ch/8A2ft15u5fLHktcL1rRptFvvh5nkdHJeORRxIvqPceYruv0LEH6PyVDAfFycN18qsmjzx9LV8I/pE16CNj3jXbhvaqCwAUA4AHGatX0qEj6W+0uOnxr1VCRs3EnA6L6mmMQFzIoVSZG4UVIG3NvbeByXzhyCQMHqKTaotqsc0xBklOEXzFET8W7gcEc5x50mwQDo7GLUpYi+5JEMeMmpYzjuEzu8Q2E7/Pp/ShohbwurSGDvcBgVP86J/0Qje3wvib9fGfuqlwD5HYrgb4wqsx6Z3f9edGd6x9aADWW7Ki2BGT9YU8byHZu763x676GrCPA/JJvhZcdOaipoLaa4kSfYVdAy7jgEg4P86k2jl37RGH3qGUo42nPTJqJubeOC6Md1fQhx1AQsFJ8simo0OQtYbPuGjdo9nVQX/69BRiSRiBEjdSq9MHNRRayOAbuEqDtJERxT0YtQuYr9SAceGNqqrIHNrLdyBJABuBIzjr1ptIZlmJLZGD1kGOtakFuSO8vY8txkxN5UlkslPivoCGHH6E064J+SVhm3RKSRnzqLuYLaP9NJHuYXBU+MjK+VOotsR4b7HsI2puY2YJ7y8QFhxujbFTVA2P3FtZzTI0gTrtyGxwMYqSRowuA4ZRwMc8VCyfA48V9CQ3Q902P5UVFbQOo236hWGQRG2APak1YIYjnljS5RVU93nbkdeaZTUrtVRRbLtGMnFFPDp6SbZr6KMsPONuR69K13WmpgHUIBxkDuzz6Gh9Domh44vUMvOKraaheRRiFbeNlThT7VKraxhVI1RCrdNqNTDR6dExDanbow+yVakin0Cxalc7kja2jPiwWH86sQbO0Y6+hqGaHTkYI+p2qngY2N/aiRp0ZLEarDwcL4W5/hSaBMg7oPHeSIN58R6fOj9CZ1kuEG4M3K5Hn/0adays0m2SatbK4POUb+1TXZHS7XUe09pHBfwT92xlZI1IJVfn71LAs/aWc6L9H0OnKw3zhYmHTPm386b+jTWpuykcXe6a8o1mbZ3zNtKIpwMDqcmov6Vb9Zddh04dbdQCB5seT/OpKSKLSbXsZbtfpcGEmWUbeGJbO059OlSlwOzquuNHrPZDUotjoJbaRdrDnO04+6vN1hcG2kVlcBhllBPXyI++u9wdtbTU57hpLSW10uIlJ7+dgsS+W3Pmf8o5rg3aO3sbPVrmGxuLmWKBi+Z4tpGT5Dy69K0gSy0aRKZ9LTe4LKSGHn14Bpd/p0GoZkOI7hRw4HX2xVT0vU5Y5VlRju+0p4Dj+9W6zvob+EvFw2PEh8quhEJHJeaNc/o3MOcZVuY3/sanrDtFbXOFuMWs+cYY+Fvkaat7lL2J4pkLBThlYZ48qFuNAWRXNq6kDpG/1f8AlSY0y0bwQMHIPQ54P31m9R1yPuqjrNqWjnCPJbpn6kw3Rn5GpW17SpjF5atFg/4kfiFTQ7LICGGQcilBiKAttQs7o5guo3b0zjP3Udn14oGOBietZnOR1+dIDj1reeeKAMHh4wKWDTeea3nBoAdzWufSkZz0NapAPA1lIBwOtb3A9DTAVuNbzSCazPHzoEKpNMzXkFuu6aVEHuaAl122yVtg8zeoBxQBLjJHFDz30NucNKGY9EAyTUO0+oXxwXMSfqxjJ+807b6Z3bl2O0+ZByx+ZoAXd3M92DEm6MH7K9ce/pSrWxjgTxFSy+XlROFSMhRtH86in1Cc9ojE8iR20S529M+9AWS3U+LwgDj2qsa/qcMiMVYdxHld/wCs3oKI1LVjNGdrNFbLkO/m59BVWuiL44kGIl4VB0Uf3ppEt2MJqEwXCbAoPQLmtm7ujlhsAPPC0qK2SNQAD75p7bxjHFWkSRFzcSsrd8xI4GF4zzU8P9K0rjqAMnrnHSo65hG3y60doU+Ee2cE5wQBQ0CZCTbJJAzvjA5wOaespoLOaR2RnkfhT6A01qiyWmqyRx7VAOenrRmhxQTSyz3ZSSCAeKNm278+ea5ci4LRLQ3K21ndNIqTO+PtZyfb0NB2R768W7jmZkC5KgYOfTnrWXyyTyqxhVQg3hQNqnzHz9M0n8prLNGqxpJNjhLcE59+K5tQHXMUUboE7/evL4wR6ZpzTLFb7TJHnue6jQ+EJ4mckE5PtxjFCi6f44t3W1ymCsnl8h51ZNL1m1OlrELZO+gPO1QCR8qxzScVwi0V/wCDtIbB1WyO4nxErnnyx6UqG9ttOs7iNYUdp8KVJyqj1x6586ssnaDSEZp2ikluEyrRltqsrccChH0nRLiLfsYRtkRxxyAEH0Oayhlb/ZF0VWYliki7QVH3mjbDTLYQvPPbyy20gCs8Qz3ZPQ1u60WS3mltXu4YkyoYHxbs9CCPSjLGOXTZpJba8M1qpwQUPJHqPat5ZElwKqCJxeJaK628TWUp7sMGDbjjpg/zremXEWXitJDBEp391jkn50Vb2NnJYGaW7Se5kyzRqSq/iOhpF8BDcdzMIRcBQZHjTYV+fvXE5XwWiy6bd/oTcyEq7k8E9KLM1s0fdzKkceQQByJM+frVMiu/g2Ecxcx7gwLndk+VSlpfLdLm5mjGF8GRgFs849OK4M2Bt7I3jk+CWawgnuGlLbcKU7pOBg9NwrmHavSYtIv1VJmkEmWw4yRn1NdNggt2Y3j3DSAEgKDhl+dBXyR6m0wjtlnDR/aA/j6Vt4eeWGdS6LnFSXByFZjG2VwB7UneHmllHAAOM+lWC60OSW5mmkVIIY+H2rkAe1RF1DGZikIKx443DBr6THkjNcM4Zw1Y7Yrtt4wOhBagrScQ3Du3mG/Gj1OyEEnGF61GmEfB96TzvwBWpBM6NxZs7cFmoDUiV1FmOGXgkVI2YKWkasMELk4oFYxe3sitwoVjn0x0pATvZe6im7cWM+8iJXHyU44rr5+tG0bJHcoSIyTy5H1gfY1wvQA6yzvkkovBHrmrn2l7TOj6Ne2r/p44csPLfnlT7YrCcebOiDVUdPsFtLsw3MNqi3NsriNMbWWQ9UPsT0NVL6PLC8TXL+S9UrcQKQ7MOVdjyPwqV03VF1Gxh1a0VlldAJ4ScFhjjHuP4irRZfDXEBvIIwXlALyAY3eQPv70lL4E4UL1Kwt9Xs2tpxtJIKyD/VN+sPY1dfolsZ9N7Gy2lyMSR3ko46EcYI9q47237VT9ndQ0oW5Vi7MZIyf8RPNc1236NtSt9V7J/GWZLwyzsQD1XhfCfcVqmZM8n/SuC30t9pBnAF45NVq2RGU3M5Agj+qPU1YvpYkC/S12mQjIN69VOe6a4iWJ4QiL0wetaqLoixppp77UFZRyT4fLaKOvbwJvycu3AzQcEvw27u0Hi8/bzpEgEkhdwSx6c9KNWAfbsCm0gbgOpFDXoAmYjAyA3StJMQoUDHqc+VbL7l8Sgn+lGrCwN5d/Phx16VMWUontEGcjlTQOEP8Aq0/ClI7xjCAAU6Y0yTVV7zx5+eaHvFASQcceIDjrQ4nlFbkmeRtzY6Y6UUwbsHVlMEkfXoRRGmSbXZCqgdfvpAwOiitqwX7I+dOmQFXpBgDYA2sCfvocsvdY3KcNj+GKzfkHdgik5H6oo5AMtZAynBGfnTepqHgQjLkHB9qaViBhQMetPW0T3U4hI+tzSdjQG6FrOLwZYMwx7eRqY01s2aI7gFOKBWPaCCehIpShw2RkAeQGKm2UL1qISNGwGSFxkULcoZYrcAYfZg+fT+tH92xQ7nDZHShy0IuQJnCqB096EAal3cwQDvIcIowSeBUXfbr65MqYOAASDnmtIgaVd0wCE8lssMfL3qSSS0R0X4lUQNuYKMbsdKYiMvFkuLvf4QcAYPBBFSy6s6KDIACRxxQ89xbtc95IsMju29pBmmr+5SePiSMhuAFHK0gN6hILm/DEKd6DOOOa6F9FdqlvZXusSrtcjukPoBy39Kolrbg2wyilwM58yfKuq3Sr2a+jdLVJFEksYUgrzvblvwFQ+eBlHQS9ou3nejLHvGmzjdwvPT8KJ1DXpdQntpbwRMLZ94txhBg8np71J/RnpjS6pqOpGMuIItoweSSPL7sVRL+MteXGcoXlYgHqDnp91NAz0RJ2N1O70hb6xNpqE0tsgsTPJ3UNmzDxOE+02POuadsPo67SaRYQ3t7LYOLyTu2kjbLFwCTu9eldX7IdqtA0Xshpdld3227t4AkhZC2D7VEfSb2i7O6p2HddPuXa7hkWRR3ZCnPB+/FNXYjz6xESqqgHYTjB4zUhZX8nfqUbupwcjnG7+lCSTrJwqjA4BoafxKBjI6n2rcllu0nUEN/K00mx5F+q3t/CrACoO4dT78VzuG5BjVLgbwBww4YVKWWpXdkmYZVurbqVb+WOoPvU0IuTHfGVYBlPtn+dMS6fYzRj9GY2xwVOPv8AegLDXrW7IUsYpOm1+n3GmdLeX8qzQNIzQ92SgbnzpNFWOyaBPG5eMxzlRlTjYT+FNp+UrPG2W5hOOQ43g1OxNheCQV4x1pe9jkt4uOlSMgxr2pxfXMUwH6wxT8XaeYD9JppA9Y2qRZIZMBoFIHltpttK0+TrAQevhJWkAwvaq0IzJDcR468ZpY7U6aepnHzWl/kW0zlTKo9N+aw6PDtwssg+4GmBtO0umE4LzLnoStODtFpyjmYnHtTS6Nb+cjt81FKGiWnvn1xSoZjdqbFR4RK59lpB7Rsy7o7SUj/MCKITSbZcDbmiEsraNhtizj1OaAIs67fTHEVsiD1c80grqd3nfNIAfJBtH8anBsh6FVB5J44rRckblfevr1oAi4tC3eOYjPqxyaOSxggwVBb7sClliOppJkOOPLrQBp7uCGZYg8ayPwEzz+FO94RwTuI86q0yxQa+9+5DqHJ6+3lWXWtyzKTH+hh83PH/AI0CbRN3epxWwO5gW8gOar93eb2aa6URqwyIhyz+nyFRc+qLE5NqDKx6yt/QVC3UsksryO7MzevNVRLJS5vHupPGw2qRtTPC/wDOtI3OKsOnppk1hBK1nB40DBiOpHWqzdxpbavPFGwChvDt6c8iqSJCQ3NK3DHWmScdRmsB9KtIDcgDLzTdlcfC36SAZOelKfkelCTNtXIODQxWH9qrF4jHcOV2uNpI/EfzqK0yQwXyMQvi8O1huxnpxU/cA6noG0nJ24GfUVVgzbgytgjBB6c1z5UaJlh+HlTU0hj5IyqQ8lmyOdx8ufWm3SLSZAyI4aUlHlB2kewHlz50zZ6hJI8scTMJbhRuCnBJHU596jNSU2zQhLhpXYb2DgjafvrmS5GTmm6JNNbi8R2uGA8EitjJz0yf5UqSwnt71VmkaCSQZZ18Rj+YFMWrXFrp/dSTld5DrH0Cj1B6c0mPVry3sJgCDHc5GOre/NYyUmxoImgLSKsMwm28NJjJYeuP+utI1a0n0l07xgGkCyts5jUdAM+pHlQ9nDJbiJ4p174gvjPUfq/M1t76S4UpIzRKzY7thu5pKLLsNMs19fQR2QUt4QAowDjk9atcl9BfAI+UlYeEBQoR8dSD1X3qlwSTQXhltpAREcArwpH9c+goq51Y6jKs0kaueh2+HY39qyyYtmNMnjaGSzkty1tBOx3qG+rJzzjFN3lkrrD3Nw0s0RZJXjQlcj+NVmS7lVWJYHeOTnkfKt2erXFqu6J273JBK55GOpHnUeiQ7Dpr17MhnmZ5snIZMhR7D1oOZ5BPEUOUlAIR24z6/Ot3i96qFXG0+KSTkZoe0kjkleEqJo2GQGHI+VbLEkuSLJ7TrxirRyTMuwHA9T6e9TMV+8VsJY4e6YcOQeJAfLNVqfZ3YO4xYABUHIPpj+tY11cxTQwyjKbAFTOQwP8AKuTJgTfBssjRa9QSK/t3uIlkkUKP0KDk+X31TNWsbRNUKQ99BEEA2yjnNTlnrLwxsYIAHBADEnKr+rj1qVubnT9StpJrixR9gGACd5I461njlLEzelkRz25sjIkkavllGTj51GTRuLe3hK4DnOQOtWGW+s21gymAwRqcbN2c56g0NdIk2rQiPAgRdy+le5jnsjknGmDXErRWLspxgbRQlqwS0uJyTnAWpS50+I6NPdSMVwQF9DVfPexx7DnZINwHrWhFFh0hO7siQRlzQt/cvc3rW0ePCNq4HJPtRdmhjtY0PXrUVc95HqDXUXDI4Yf5aTVguDqdzqz6LrejWMAA7mxUTqB9ZmPB/qKuFtdfkm6aRcLavgSqoz3ZPmPY1zfTBN2l7S2utCQFyy98nmm0enmtdBuLyKxiae4cLBu2ksMjnjBrll+LOlcoq30h6df3+sSXttDIbe1gUZVcjb13H5+1d++h60Nn9HVrCV2HeWIA9QDz71zC1lWzb4ZvFDIpWEscgA8lD6+1di7BOn5vSBOEE7AD04WtYmM0eRPpZI//ACvdpfD/AOuvVQ3L+rV/+lGxil+lXtHI5ZSbxycHkVU/yXBu/wARvxrqT4MqIzI/VrNwHValPyXB/wBo341n5Lg/XY/fT2FRGqyt9nFbzg1Jfk2HGAz/AIis/JsX6z/jTUgojd3Fa86k/wAmxj7TfjWvyfF6t+NG6AjxSqP+Aj9W/Gs+Bj9W/GjZCI/pW8GjvgY/VvxrfwUfq3409kOgCso/4GP1b8az4GP1b8aNkFAS+YJwKm9ItykLXBGGbpn0oE2EXU5OD61JLdMsYVdmAMDNZSd9DAbhe7uZB75p2ORNhycN5ZrcyCaUyMQCeu2k9yB9X+dShjbA9c5+VR15E0lxlDkCpTux0J/jWjDGTkn+NOxEXHCyhg5fPlitiIgRsHk3gYOAKlO7TOc/xFZ3SA5z/GmmBGMuYdqyTEnyZRimVtJeP0WAepqZEUY8/wCNbCIoJ3ZB8s0WBI9kbCXUu0llaFN0e7e2eMBef7VZvpS1bc1taRgBYcOw6AMarmg63PoFzLPapDI8ibP0oJwPPGKF1S/k1i9e6umViz79qjwjpgfwqRo6n9GmlX9p2YErWsokuJO8PhwSvQGhdW+hvUJBd6vFqFmsJLT93MdpRepPzFVyP6U+2kNoLaHW+6hRdqhIEBUfPFVy/wBW1DVLmW4vdRuJpZm3Oe9IDH5Dj7ulJWmA5L2mJBASZm6c0Ffa4bmyeAxyAvjq3FNdzFnxc/fWmt4HHIyPnVpiAY48JyTTijZ05z60V8PGOBxWjbp+sauxAnnTZ3CXvE3BgMbgcUeLaMZ8R5GKT8HF/wBGiwoaW74bvowQftrwQaKs9VkRw1tceLyDcGmGsYX6s2PTdWLp0CZKkg+xpbWTTJ2LtVJGR39tn1ZakoO01hN0lMf/AMQf1qpJaInSRvxrZtInyG6fOpspItuq3S3ul4tpCzBgco+MCi9AuCNJiFxIzyBjy55NUdLWOL/DeRPk5FPxPJG2RPIeMYL5osZ0UTRkkBh+NKSRd31h+Nc/F7OvSb+NbGo3AOe+/jTbAtus6lJYSWixGPbK5R2k+yAMj+NPaNfyanpKXMgRXdmUheBx5j2qlXN7NdRqkrq4U5Ga3BfT2sAhhcKgOQoPSkB0MSoAdzKCPemxeQ58TjA9GxVBa+nY5aXJ+dJF04bJYE+5oAt+sX7d2nw0cUhYHO4jAoK11yzsNMhhmuArqvIUZ5qsl1LFiiEnr4jWZi5zbw8nNAyek7VIc/DxM3+Ymou612aUEzXaJ6IjZoUuh6QxfiaxTGv1YLcfIUWLkGl1nH+Gu9j5ynj5im3uZbsAySFx6E9Puo7vE6dzDn1IrazhGyqRA+wp2TQAseer4+VInjA4wW9cCpc3pPVIfwpBuWzkbAfYUWOhPZ2+ayuZNyd4CAAsykoF88YprUED6jK8UZZHfchZSTjPt0FPLdyKSQyg+1b+Mkx1XnriqTFRtYJG5MbfhSxaSZBMbBflSBfSjHKnFO/lScrtYRkffVqQUIa1cnhWx8qGn0y5kUp3TYPn7UT+UJvMx/dmlDU5wCMocjbznpQ3YqCtBW4traWGS3wj4YF/wxVd1G0+F1GaDGFBJUD0NTT6tcSoqOYyq9PagroC7cM+AwAXw+lZS5KohNrI3XHuKLtbqCScG8j+IP2WY5Kex9afNlGern8aa/JcHUPIp9c1k0mMNErTyuk53LyQAMDHmBQMcwj3QAAxgb23ZyMdMH76fjtFidHEzsUPGTWxaIs/eiQ554zxzU6DBWJguvDgptDKV4oi/LM25XbDKMsfI1s2cWc5LAdBnpSmtkYHxMN3XmihgT96EVd4IXnB6UWl008rKESGHHIH2qxbVFXaGJA9TWhZw7cZYHORzmlqIcmjEEQDHcQvpTNmGuiZEYKkfDEg7vZQB/On5EEpYu5PHrSiXFvHbpKYoVUriLALA9cnrRowEXkkMQSNp3k5A3kcKD7UxG6Syhw+1lOAo4z7+1Oi3QJtDYx58cj0pPwcO4kHBPXmhwsYRI6u6FSVccBTRKRTNaxTbldd2IiTyG69PvoMJjhTyOmaeeUOwIRYwvCqCePI1jPE30CJNIpVgfZH3wADmUdAff3ou1uLS4RJCjxMOJAjY3H1xUEZpGj7vvNqkYwGwMVuO4aB43QJlfXqa5ZeNJnRCaj2SvaAaZPE1zb2byyKMs4XBHvj+tVKGRWQtGeMnbVk/LdxtwscCkDCnzx6e/yqJlgSaYyNwzHJ28D8K6fHhKCpkZJJ9Al/qG7T47IIVUEljnqTTV/GjPZxR84QBvaiptPgkbJLZHPWlLZxLcd8HO7jGT0rsMrDreFDGTI20KC2T7DiomwCveSOwJCxljnpk1IzgXNqYHYAEgnaeuKbt4Y7eOZUOe9GCWPNAFi+jGJmv7ubcVWGLG4eW49KsH0g3Yi7PJbg/wCO+TjzAqldn7+Xs5NLJaMjd6oVllOQQPlTuuatP2gaI3jxosIwqxcZ/Gud425WzWORJUy0dhdak1DTpNN1AO8cJCpN5rnop9x5GvRf0ZiZeysizY3LcuAfNhhcE+9eS9M1W40nS7nT7UxiO5O5mY+NT6g16g+hLUp9W+jz4mdkZ/ipELY64CjJ96pQdkylZdG0HSLqR5rjSrKaV2JZ3t0ZmPuSK1+bWhfsXT/3ZP7VlZW5mZ+bWhfsXT/3ZP7Vn5t6F+xdP/dk/tWVlAG/zb0P9i6f+7J/as/NvQ/2Np/7sn9qysoAz829D/Y2n/uyf2rX5taF+xdP/dk/tWVlAGfm1oX7F0792T+1Z+bWhfsXTv3ZP7VlZQIz82tC/Yunfuyf2rPza0L9i6d+7J/asrKBmfm1oX7F0792T+1Z+bWhfsXTv3ZP7VlZSAz82tC/Yun/ALsn9qz82tC/Yunfuyf2rKygDPzb0P8AYun/ALsn9q3+beh/sXT/AN2T+1ZWUAa/NrQv2Lp/7sn9qz82tC/Yunfuqf2rKygDPza0L9i6d+6p/as/NrQv2Lp37qn9qysoAz82tC/Yunfuqf2rPza0L9i6d+6p/asrKAMHZrQh00XTv3ZP7Vn5s6D+xNO/dU/tWVlAGfm1oWMfkXTv3VP7Vn5taF+xdO/dU/tWVlAGfm1oX7F0791T+1Z+bWhfsXTv3VP7VlZQBn5t6H+xdP8A3ZP7Vv8ANvQ/2Lp/7sn9qyspgZ+beh/sXT/3ZP7Vn5t6H+xtP/dk/tWVlAjX5t6H+xdP/dk/tWfm3of7F0/92T+1ZWUAb/NvQ/2Lp/7sn9qz829D/Yun/uyf2rKykBn5t6H+xtP/AHZP7Vn5t6H+xtP/AHZP7VlZQM1+behfsXT/AN2T+1Z+bWhfsXTv3ZP7VlZTEZ+behfsXT/3ZP7Vv829D/Yun/uyf2rKygDPzb0P9jaf+7J/as/NvQ/2Lp/7sn9qyspDNfm3oX7F0/8Adk/tW/zb0P8AY2n/ALsn9qyspiM/NvQ/2Np/7sn9qz829D/Y2n/uyf2rKykM1+beh/sXT/3ZP7Vn5t6H+xdP/dk/tWVlMDPzb0L9i6f+7J/as/NvQv2Lp/7sn9qysoAz829C/Yun/uyf2rPzb0L9i6f+7J/asrKBG/zb0P8AYun/ALsn9qz829D/AGNp/wC7J/asrKBmvzb0L9i6f+7J/as/NvQv2Lp/7sn9qysoEb/NvQ/2Np/7sn9qz829D/Y2n/uyf2rKygZn5t6H+xtP/dk/tWfm3of7G0/92T+1ZWUgM/NvQ/2Np/7sn9q1+bWhfsXTv3ZP7VlZQBn5taF+xdO/dk/tWfm1oX7F0792T+1ZWUgM/NrQv2Lp/wC7J/as/NvQv2Lp/wC7J/asrKAM/NrQv2Lp37sn9qz82tC/Yunfuqf2rKymBv8ANvQ/2Np/7sn9q1+behfsXT/3ZP7VlZSAz82tC/Yunfuyf2rPza0L9i6d+7J/asrKAM/NrQv2Lp37sn9qz82tC/Yunfuqf2rKygZn5taF+xdO/dk/tW/zb0P9jaf+7J/asrKBGfm3of7G0/8Adk/tWvzb0L9i6f8Auyf2rKymBn5taF+xdO/dk/tWfm1oX7F0791T+1ZWUAb/ADb0P9i6f+7J/as/NvQz10XT/wB2T+1ZWUgNfmzoP7E0791T+1GW1la2UPdWttDbx5zsiQKM+uBWVlAH/9k=", aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need, no merit aid" } },
  { id: 2, name: "UC San Diego", city: "San Diego", country: "USA", continent: "na", cost: 34000, acceptance: 0.24, gpa25: 3.53, gpa75: 3.88, sat25: 1350, sat75: 1500, size: "Large", setting: "Coastal", climate: "Warm", research: 4, cs: 96, tags: ["Strong CS", "Near Ocean", "Large"], aid: { level: "Medium", merit: true, note: "Need-based aid + merit scholarships for out-of-state" } },
  { id: 3, name: "University of Miami", city: "Miami", country: "USA", continent: "na", cost: 29000, acceptance: 0.19, gpa25: 3.56, gpa75: 3.91, sat25: 1370, sat75: 1520, size: "Medium", setting: "Coastal", climate: "Warm", research: 3, cs: 80, tags: ["Coastal", "Diverse", "Private"], aid: { level: "Medium", merit: true, note: "Generous merit scholarships available" } },
  { id: 4, name: "USC", city: "Los Angeles", country: "USA", continent: "na", cost: 64000, acceptance: 0.10, gpa25: 3.6, gpa75: 3.95, sat25: 1410, sat75: 1560, size: "Large", setting: "Urban", climate: "Warm", research: 4, cs: 90, tags: ["Strong CS", "Urban", "Alumni Network"], aid: { level: "High", merit: true, note: "Strong need-based aid + Trustee/Presidential merit scholarships" } },
  { id: 5, name: "Georgia Tech", city: "Atlanta", country: "USA", continent: "na", cost: 33000, acceptance: 0.16, gpa25: 3.57, gpa75: 3.92, sat25: 1390, sat75: 1540, size: "Large", setting: "Urban", climate: "Warm", research: 5, cs: 95, tags: ["Top CS", "Research", "Public"], aid: { level: "Medium", merit: true, note: "Merit scholarships; limited aid for international students" } },
  { id: 6, name: "Arizona State University", city: "Tempe", country: "USA", continent: "na", cost: 29000, acceptance: 0.88, gpa25: 3.21, gpa75: 3.56, sat25: 1100, sat75: 1250, size: "Large", setting: "Suburban", climate: "Warm", research: 3, cs: 75, tags: ["Accessible", "Large", "Innovation"], aid: { level: "Low", merit: true, note: "Strong merit scholarships, limited need-based aid for international" } },
  { id: 7, name: "University of Michigan", city: "Ann Arbor", country: "USA", continent: "na", cost: 53000, acceptance: 0.18, gpa25: 3.56, gpa75: 3.91, sat25: 1380, sat75: 1530, size: "Large", setting: "Suburban", climate: "Cold", research: 5, cs: 93, tags: ["Top CS", "Research", "Big Campus"], aid: { level: "Medium", merit: false, note: "Need-based aid, limited for international students" } },
  { id: 8, name: "Carnegie Mellon", city: "Pittsburgh", country: "USA", continent: "na", cost: 60000, acceptance: 0.11, gpa25: 3.59, gpa75: 3.94, sat25: 1410, sat75: 1560, size: "Medium", setting: "Urban", climate: "Cold", research: 5, cs: 99, tags: ["Elite CS", "Research Powerhouse"], aid: { level: "Medium", merit: false, note: "Need-based aid, highly competitive for international students" } },
  { id: 9, name: "University of Toronto", city: "Toronto", country: "Canada", continent: "na", cost: 45000, acceptance: 0.43, gpa25: 3.44, gpa75: 3.79, sat25: 1280, sat75: 1430, size: "Large", setting: "Urban", climate: "Cold", research: 5, cs: 92, tags: ["Top CS", "Urban", "International"], aid: { level: "Low", merit: true, note: "Entrance scholarships; limited need-based aid for international" } },
  { id: 10, name: "University of Waterloo", city: "Waterloo", country: "Canada", continent: "na", cost: 40000, acceptance: 0.53, gpa25: 3.38, gpa75: 3.73, sat25: 1240, sat75: 1390, size: "Medium", setting: "Suburban", climate: "Cold", research: 4, cs: 94, tags: ["Co-op Program", "Strong CS"], aid: { level: "Low", merit: true, note: "Entrance scholarships based on admission average" } },
  { id: 11, name: "University of British Columbia", city: "Vancouver", country: "Canada", continent: "na", cost: 38000, acceptance: 0.52, gpa25: 3.39, gpa75: 3.74, sat25: 1240, sat75: 1390, size: "Large", setting: "Coastal", climate: "Moderate", research: 4, cs: 87, tags: ["Near Ocean", "Scenic", "Research"], aid: { level: "Low", merit: true, note: "International Major Entrance Scholarship available" } },
  { id: 12, name: "University of Edinburgh", city: "Edinburgh", country: "UK", continent: "eu", cost: 34000, acceptance: 0.40, gpa25: 3.45, gpa75: 3.8, sat25: 1290, sat75: 1440, size: "Large", setting: "Urban", climate: "Cold", research: 4, cs: 85, tags: ["Historic", "Urban", "Research"], aid: { level: "Low", merit: true, note: "A limited number of international merit scholarships" } },
  { id: 13, name: "Imperial College London", city: "London", country: "UK", continent: "eu", cost: 45000, acceptance: 0.15, gpa25: 3.57, gpa75: 3.92, sat25: 1390, sat75: 1540, size: "Medium", setting: "Urban", climate: "Moderate", research: 5, cs: 96, tags: ["Elite CS", "Urban", "STEM Focus"], aid: { level: "Medium", merit: true, note: "President's scholarships for international students" } },
  { id: 14, name: "TU Munich", city: "Munich", country: "Germany", continent: "eu", cost: 3000, acceptance: 0.35, gpa25: 3.48, gpa75: 3.83, sat25: 1310, sat75: 1460, size: "Large", setting: "Urban", climate: "Cold", research: 5, cs: 91, tags: ["Low Cost", "Research", "Public"], aid: { level: "Low", merit: false, note: "Tuition is already minimal, so aid need is low" } },
  { id: 15, name: "TU Delft", city: "Delft", country: "Netherlands", continent: "eu", cost: 16000, acceptance: 0.45, gpa25: 3.42, gpa75: 3.77, sat25: 1270, sat75: 1420, size: "Medium", setting: "Suburban", climate: "Moderate", research: 5, cs: 89, tags: ["Engineering Focus", "Affordable"], aid: { level: "Medium", merit: true, note: "Holland Scholarship available for non-EU students" } },
  { id: 16, name: "ETH Zurich", city: "Zurich", country: "Switzerland", continent: "eu", cost: 1500, acceptance: 0.27, gpa25: 3.52, gpa75: 3.87, sat25: 1340, sat75: 1490, size: "Medium", setting: "Urban", climate: "Cold", research: 5, cs: 97, tags: ["Elite CS", "Low Cost", "Research"], aid: { level: "Low", merit: false, note: "Tuition already very low, scholarships are limited" } },
  { id: 17, name: "NUS", city: "Singapore", country: "Singapore", continent: "as", cost: 28000, acceptance: 0.20, gpa25: 3.55, gpa75: 3.9, sat25: 1370, sat75: 1520, size: "Large", setting: "Urban", climate: "Warm", research: 5, cs: 94, tags: ["Top CS", "Urban", "Asia Hub"], aid: { level: "Medium", merit: true, note: "ASEAN & Science/Tech scholarships for international students" } },
  { id: 18, name: "NTU Singapore", city: "Singapore", country: "Singapore", continent: "as", cost: 26000, acceptance: 0.25, gpa25: 3.53, gpa75: 3.88, sat25: 1350, sat75: 1500, size: "Large", setting: "Suburban", climate: "Warm", research: 4, cs: 90, tags: ["Strong CS", "Green Campus"], aid: { level: "Medium", merit: true, note: "NTU international scholarships available" } },
  { id: 19, name: "University of Tokyo", city: "Tokyo", country: "Japan", continent: "as", cost: 6000, acceptance: 0.34, gpa25: 3.48, gpa75: 3.83, sat25: 1310, sat75: 1460, size: "Large", setting: "Urban", climate: "Moderate", research: 5, cs: 88, tags: ["Prestigious", "Low Cost", "Urban"], aid: { level: "Medium", merit: true, note: "MEXT scholarships available (competitive)" } },
  { id: 20, name: "KAIST", city: "Daejeon", country: "South Korea", continent: "as", cost: 5000, acceptance: 0.15, gpa25: 3.57, gpa75: 3.92, sat25: 1390, sat75: 1540, size: "Medium", setting: "Suburban", climate: "Cold", research: 5, cs: 93, tags: ["Tech Focus", "Research", "Low Cost"], aid: { level: "High", merit: true, note: "Most international students receive full tuition waivers" } },
  { id: 21, name: "HKUST", city: "Hong Kong", country: "Hong Kong", continent: "as", cost: 19000, acceptance: 0.13, gpa25: 3.59, gpa75: 3.94, sat25: 1400, sat75: 1550, size: "Medium", setting: "Coastal", climate: "Warm", research: 5, cs: 92, tags: ["Near Ocean", "Elite CS"], aid: { level: "Medium", merit: true, note: "Entrance scholarships for top international applicants" } },
  { id: 22, name: "University of Melbourne", city: "Melbourne", country: "Australia", continent: "oc", cost: 35000, acceptance: 0.70, gpa25: 3.3, gpa75: 3.65, sat25: 1170, sat75: 1320, size: "Large", setting: "Urban", climate: "Moderate", research: 4, cs: 86, tags: ["Urban", "Research", "Livable City"], aid: { level: "Medium", merit: true, note: "Chancellor's scholarships for international students" } },
  { id: 23, name: "University of Sydney", city: "Sydney", country: "Australia", continent: "oc", cost: 38000, acceptance: 0.65, gpa25: 3.32, gpa75: 3.67, sat25: 1190, sat75: 1340, size: "Large", setting: "Coastal", climate: "Warm", research: 4, cs: 83, tags: ["Near Ocean", "Urban"], aid: { level: "Medium", merit: true, note: "International merit scholarships available" } },
  { id: 24, name: "Australian National University", city: "Canberra", country: "Australia", continent: "oc", cost: 33000, acceptance: 0.35, gpa25: 3.48, gpa75: 3.83, sat25: 1310, sat75: 1460, size: "Medium", setting: "Suburban", climate: "Moderate", research: 5, cs: 85, tags: ["Research", "Small & Focused"], aid: { level: "Medium", merit: true, note: "Chancellor's International Scholarship" } },
  { id: 25, name: "Stanford University", city: "Stanford", country: "USA", continent: "na", cost: 62000, acceptance: 0.04, gpa25: 3.63, gpa75: 3.98, sat25: 1430, sat75: 1580, size: "Medium", setting: "Suburban", climate: "Warm", research: 5, cs: 99, tags: ["Elite CS", "Silicon Valley", "Research Powerhouse"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need, no merit aid" } },
  { id: 26, name: "UC Berkeley", city: "Berkeley", country: "USA", continent: "na", cost: 55000, acceptance: 0.11, gpa25: 3.59, gpa75: 3.94, sat25: 1410, sat75: 1560, size: "Large", setting: "Urban", climate: "Moderate", research: 5, cs: 98, tags: ["Elite CS", "Public Ivy", "Research"], aid: { level: "Medium", merit: false, note: "Need-based aid, limited for international students" } },
  { id: 27, name: "Caltech", city: "Pasadena", country: "USA", continent: "na", cost: 60000, acceptance: 0.03, gpa25: 3.63, gpa75: 3.98, sat25: 1440, sat75: 1590, size: "Small", setting: "Suburban", climate: "Warm", research: 5, cs: 97, tags: ["Elite STEM", "Tiny & Intense", "Research Powerhouse"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need, no merit aid" } },
  { id: 28, name: "Cornell University", city: "Ithaca", country: "USA", continent: "na", cost: 66000, acceptance: 0.07, gpa25: 3.61, gpa75: 3.96, sat25: 1420, sat75: 1570, size: "Large", setting: "Suburban", climate: "Cold", research: 5, cs: 95, tags: ["Ivy League", "Strong CS", "Research"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need" } },
  { id: 29, name: "Princeton University", city: "Princeton", country: "USA", continent: "na", cost: 63000, acceptance: 0.04, gpa25: 3.63, gpa75: 3.98, sat25: 1430, sat75: 1580, size: "Medium", setting: "Suburban", climate: "Moderate", research: 5, cs: 96, tags: ["Ivy League", "Elite CS", "Small Classes"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need, no loans" } },
  { id: 30, name: "Columbia University", city: "New York", country: "USA", continent: "na", cost: 68000, acceptance: 0.04, gpa25: 3.63, gpa75: 3.98, sat25: 1430, sat75: 1580, size: "Medium", setting: "Urban", climate: "Cold", research: 5, cs: 94, tags: ["Ivy League", "Urban", "Strong CS"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need" } },
  { id: 31, name: "New York University", city: "New York", country: "USA", continent: "na", cost: 62000, acceptance: 0.08, gpa25: 3.61, gpa75: 3.96, sat25: 1420, sat75: 1570, size: "Large", setting: "Urban", climate: "Cold", research: 4, cs: 91, tags: ["Urban", "Strong CS", "Global Campuses"], aid: { level: "Medium", merit: true, note: "Need-based aid; some merit scholarships" } },
  { id: 32, name: "Northwestern University", city: "Evanston", country: "USA", continent: "na", cost: 65000, acceptance: 0.07, gpa25: 3.61, gpa75: 3.96, sat25: 1420, sat75: 1570, size: "Medium", setting: "Suburban", climate: "Cold", research: 5, cs: 93, tags: ["Strong CS", "Research", "Near Chicago"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need" } },
  { id: 33, name: "Duke University", city: "Durham", country: "USA", continent: "na", cost: 64000, acceptance: 0.06, gpa25: 3.62, gpa75: 3.97, sat25: 1430, sat75: 1580, size: "Medium", setting: "Suburban", climate: "Warm", research: 5, cs: 92, tags: ["Strong CS", "Research", "Small Classes"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need" } },
  { id: 34, name: "Rice University", city: "Houston", country: "USA", continent: "na", cost: 58000, acceptance: 0.09, gpa25: 3.61, gpa75: 3.96, sat25: 1410, sat75: 1560, size: "Small", setting: "Urban", climate: "Warm", research: 5, cs: 92, tags: ["Small & Focused", "Strong CS", "Research"], aid: { level: "High", merit: true, note: "Generous need-based aid + some merit scholarships" } },
  { id: 35, name: "University of Washington", city: "Seattle", country: "USA", continent: "na", cost: 40000, acceptance: 0.45, gpa25: 3.42, gpa75: 3.77, sat25: 1270, sat75: 1420, size: "Large", setting: "Urban", climate: "Moderate", research: 5, cs: 96, tags: ["Top CS", "Near Tech Industry", "Public"], aid: { level: "Medium", merit: false, note: "Need-based aid, limited for international students" } },
  { id: 36, name: "University of Illinois Urbana-Champaign", city: "Urbana-Champaign", country: "USA", continent: "na", cost: 36000, acceptance: 0.44, gpa25: 3.43, gpa75: 3.78, sat25: 1270, sat75: 1420, size: "Large", setting: "Suburban", climate: "Cold", research: 5, cs: 97, tags: ["Top CS", "Research", "Public"], aid: { level: "Low", merit: true, note: "Merit scholarships; limited need-based aid for international" } },
  { id: 37, name: "University of Texas at Austin", city: "Austin", country: "USA", continent: "na", cost: 40000, acceptance: 0.29, gpa25: 3.5, gpa75: 3.85, sat25: 1330, sat75: 1480, size: "Large", setting: "Urban", climate: "Warm", research: 5, cs: 94, tags: ["Top CS", "Urban", "Public"], aid: { level: "Low", merit: true, note: "Merit scholarships; limited need-based aid for international" } },
  { id: 38, name: "Purdue University", city: "West Lafayette", country: "USA", continent: "na", cost: 30000, acceptance: 0.53, gpa25: 3.38, gpa75: 3.73, sat25: 1240, sat75: 1390, size: "Large", setting: "Suburban", climate: "Cold", research: 4, cs: 90, tags: ["Strong CS", "Engineering Focus", "Public"], aid: { level: "Low", merit: true, note: "Merit scholarships available" } },
  { id: 39, name: "McGill University", city: "Montreal", country: "Canada", continent: "na", cost: 30000, acceptance: 0.40, gpa25: 3.45, gpa75: 3.8, sat25: 1290, sat75: 1440, size: "Large", setting: "Urban", climate: "Cold", research: 4, cs: 88, tags: ["Historic", "Urban", "Research"], aid: { level: "Low", merit: true, note: "Entrance scholarships; limited need-based aid for international" } },
  { id: 40, name: "University of Cambridge", city: "Cambridge", country: "UK", continent: "eu", cost: 48000, acceptance: 0.17, gpa25: 3.57, gpa75: 3.92, sat25: 1380, sat75: 1530, size: "Medium", setting: "Suburban", climate: "Cold", research: 5, cs: 98, tags: ["Elite CS", "Historic", "Research Powerhouse"], aid: { level: "Medium", merit: true, note: "Cambridge Trust scholarships for international students" } },
  { id: 41, name: "University of Oxford", city: "Oxford", country: "UK", continent: "eu", cost: 48000, acceptance: 0.14, gpa25: 3.58, gpa75: 3.93, sat25: 1390, sat75: 1540, size: "Medium", setting: "Suburban", climate: "Cold", research: 5, cs: 96, tags: ["Elite", "Historic", "Research"], aid: { level: "Medium", merit: true, note: "Reach Oxford & other scholarships for international students" } },
  { id: 42, name: "EPFL", city: "Lausanne", country: "Switzerland", continent: "eu", cost: 2000, acceptance: 0.18, gpa25: 3.56, gpa75: 3.91, sat25: 1380, sat75: 1530, size: "Medium", setting: "Suburban", climate: "Moderate", research: 5, cs: 96, tags: ["Elite CS", "Low Cost", "Research"], aid: { level: "Low", merit: false, note: "Tuition already very low, scholarships are limited" } },
  { id: 43, name: "KTH Royal Institute of Technology", city: "Stockholm", country: "Sweden", continent: "eu", cost: 18000, acceptance: 0.35, gpa25: 3.48, gpa75: 3.83, sat25: 1310, sat75: 1460, size: "Medium", setting: "Urban", climate: "Cold", research: 4, cs: 89, tags: ["Strong CS", "Affordable", "Research"], aid: { level: "Medium", merit: true, note: "KTH scholarships available for non-EU students" } },
  { id: 44, name: "Tsinghua University", city: "Beijing", country: "China", continent: "as", cost: 5000, acceptance: 0.02, gpa25: 3.64, gpa75: 3.99, sat25: 1440, sat75: 1590, size: "Large", setting: "Urban", climate: "Cold", research: 5, cs: 97, tags: ["Elite CS", "Extremely Selective", "Low Cost"], aid: { level: "High", merit: true, note: "Chinese Government Scholarship covers most international admits" } },
  { id: 45, name: "Seoul National University", city: "Seoul", country: "South Korea", continent: "as", cost: 6000, acceptance: 0.10, gpa25: 3.6, gpa75: 3.95, sat25: 1410, sat75: 1560, size: "Large", setting: "Urban", climate: "Cold", research: 5, cs: 92, tags: ["Top CS", "Low Cost", "Research"], aid: { level: "Medium", merit: true, note: "GKS scholarship available for international students" } },
  { id: 46, name: "IIT Bombay", city: "Mumbai", country: "India", continent: "as", cost: 8000, acceptance: 0.01, gpa25: 3.65, gpa75: 4.0, sat25: 1440, sat75: 1590, size: "Medium", setting: "Urban", climate: "Warm", research: 5, cs: 93, tags: ["Extremely Selective", "Elite CS", "Low Cost"], aid: { level: "Medium", merit: true, note: "Merit-cum-means scholarships for eligible students" } },
  { id: 47, name: "UNSW Sydney", city: "Sydney", country: "Australia", continent: "oc", cost: 37000, acceptance: 0.60, gpa25: 3.35, gpa75: 3.7, sat25: 1210, sat75: 1360, size: "Large", setting: "Urban", climate: "Warm", research: 4, cs: 87, tags: ["Strong CS", "Urban", "Research"], aid: { level: "Medium", merit: true, note: "International merit scholarships available" } },
  { id: 48, name: "University of Auckland", city: "Auckland", country: "New Zealand", continent: "oc", cost: 28000, acceptance: 0.55, gpa25: 3.38, gpa75: 3.73, sat25: 1230, sat75: 1380, size: "Large", setting: "Urban", climate: "Moderate", research: 3, cs: 82, tags: ["Top NZ University", "Urban", "Research"], aid: { level: "Medium", merit: true, note: "International student scholarships available" } },
  { id: 49, name: "University of São Paulo", city: "São Paulo", country: "Brazil", continent: "sa", cost: 2000, acceptance: 0.15, gpa25: 3.57, gpa75: 3.92, sat25: 1390, sat75: 1540, size: "Large", setting: "Urban", climate: "Warm", research: 4, cs: 85, tags: ["Top Latin America", "Low Cost", "Research"], aid: { level: "Low", merit: false, note: "Public university with minimal tuition; limited aid infrastructure for international students" } },
  { id: 50, name: "University of Cape Town", city: "Cape Town", country: "South Africa", continent: "af", cost: 8000, acceptance: 0.20, gpa25: 3.55, gpa75: 3.9, sat25: 1370, sat75: 1520, size: "Large", setting: "Urban", climate: "Moderate", research: 4, cs: 83, tags: ["Top Africa University", "Research", "Diverse"], aid: { level: "Medium", merit: true, note: "International scholarships available for high-achieving students" } }
];

/* ============================================================
   STATE
   ============================================================ */
const GUEST_KEY = 'unimatch_guest_v1';

function generateGuestId() {
  return 'guest_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

/* ---------- Локальная сессия — теперь только "указатель" на пользователя на
   бэкенде (userId + guestId), а не полная копия профиля/свайпов. Источник
   истины — сервер (FastAPI); localStorage используется только чтобы не
   заставлять человека проходить онбординг заново при каждом визите. ---------- */
function loadGuestSession() {
  try {
    const raw = localStorage.getItem(GUEST_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; } // приватный режим браузера / localStorage недоступен — работаем без сохранения
}
function saveGuestSession() {
  try {
    localStorage.setItem(GUEST_KEY, JSON.stringify({
      userId: state.userId,
      guestId: state.guestId,
      lang: state.lang
    }));
  } catch (e) { /* тихо игнорируем — приватный режим браузера и т.п. */ }
}

/* ============================================================
   API — все запросы к бэкенду (FastAPI). Бэкенд отдаёт camelCase
   один-в-один с полями profile/university на фронте, поэтому в
   большинстве мест ответ можно использовать напрямую.
   ============================================================ */
const API_BASE = 'https://unimatch-lfy3.onrender.com';

async function apiRequest(path, options = {}) {
  let res;
  try {
    res = await fetch(API_BASE + path, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
  } catch (e) {
    // Сервер недоступен физически (не запущен / сеть отвалилась) — не роняем приложение.
    toast(t('server_error'));
    throw e;
  }
  if (!res.ok) {
    toast(t('server_error'));
    throw new Error(`API ${path} -> ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

function apiSaveProfile() {
  // Эквивалент POST /users — создаёт гостя (если guestId ещё нет) или обновляет
  // существующего. Возвращает {id, guestId, isRegistered, email, lang, profile}.
  return apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify({ guestId: state.guestId, lang: state.lang, profile: state.profile })
  });
}
function apiFetchUser(userId) {
  return apiRequest(`/users/${userId}`);
}
function apiRegisterEmail(userId, email) {
  return apiRequest(`/users/${userId}/register`, { method: 'POST', body: JSON.stringify({ email }) });
}
function apiFetchDeck(userId) {
  return apiRequest(`/universities?user_id=${userId}`);
}
function apiFetchMatches(userId) {
  return apiRequest(`/users/${userId}/matches`);
}
function apiPostSwipe(userId, universityId, liked) {
  return apiRequest(`/users/${userId}/swipes`, {
    method: 'POST',
    body: JSON.stringify({ universityId, liked })
  });
}
function apiDeleteSwipe(userId, universityId) {
  return apiRequest(`/users/${userId}/swipes/${universityId}`, { method: 'DELETE' });
}

/* Ответ бэкенда по вузу использует matchScore/admissionReality — приводим
   к тем же _match/_reality, которыми уже пользуется весь рендеринг ниже,
   чтобы не переписывать buildWhyReasons/renderDiscover/renderMatches и т.д. */
function fromApiUni(u) {
  // Бэкенд сознательно не хранит и не отдаёт photo (см. README бэкенда) — это
  // забота фронта. Подмешиваем его из локального справочника UNIVERSITIES по id,
  // чтобы фото (сейчас есть только у MIT) не пропадало на карточках.
  const local = UNIVERSITIES.find(x => x.id === u.id);
  return { ...u, photo: local ? local.photo : undefined, _match: u.matchScore, _reality: u.admissionReality };
}

let state = {
  screen: 'discover',
  obStep: 0,
  obMajorCategory: 'cs',
  lang: 'ru',
  guestId: null,
  userId: null,
  isRegistered: false,
  email: null,
  profile: {
    gpa: 3.6,
    tests: {
      SAT: { taken: true, score: 1350 },
      ACT: { taken: false, score: 30 },
      IELTS: { taken: false, score: 7 }
    },
    major: 'Computer Science',
    degreeLevel: 'bachelor',
    size: null, setting: null, climate: null, research: 3, budget: 40000, needsAid: null,
    continents: [], countries: []
  },
  deck: [],
  liked: [],
  disliked: [],
  currentUniId: null,
  activeTab: 'overview',
  matchFilter: 'all',
  recentPasses: []
};

function uniColor(id) { return GRADIENTS[id % GRADIENTS.length]; }

/* ---------- Profile completeness checklist (left sidebar) ----------
   Только поля, которые реально участвуют в matchScore() (см. scoring.py /
   matchScore выше) — не включаем сюда IELTS, он сознательно не влияет ни на
   Match Score, ни на Admission Reality (см. english_proficiency_level). */
function profileCompleteness() {
  const p = state.profile;
  const items = [
    { done: !!p.setting, key: 'checklist_setting' },
    { done: !!p.climate, key: 'checklist_climate' },
    { done: !!p.size, key: 'checklist_size' },
    { done: p.needsAid !== null, key: 'checklist_aid' },
    { done: (p.continents.length > 0 || p.countries.length > 0), key: 'checklist_region' },
  ];
  const doneCount = items.filter(i => i.done).length;
  const percent = Math.round(100 * doneCount / items.length);
  const next = items.find(i => !i.done);
  return { percent, next };
}

/* ---------- Daily activity counter (left sidebar) ----------
   "Сегодня" — единственная честная формулировка: liked переживает перезагрузку
   (приходит с бэкенда), а disliked — нет (см. README фронтенда), поэтому
   "всего" мы не смешиваем эти два числа в одно, а показываем оба отдельно. */
const ACTIVITY_KEY = 'unimatch_activity_v1';
function bumpDailyActivity() {
  const today = new Date().toISOString().slice(0, 10);
  let data = { date: today, count: 0 };
  try {
    const raw = localStorage.getItem(ACTIVITY_KEY);
    if (raw) data = JSON.parse(raw);
  } catch (e) { /* localStorage недоступен — просто не считаем */ }
  if (data.date !== today) data = { date: today, count: 0 };
  data.count += 1;
  try { localStorage.setItem(ACTIVITY_KEY, JSON.stringify(data)); } catch (e) { }
  return data.count;
}
function getDailyActivity() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const raw = localStorage.getItem(ACTIVITY_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data.date === today) return data.count;
    }
  } catch (e) { }
  return 0;
}

/* ---------- "Только что пропустил" + restore (под кнопками свайпа) ---------- */
async function restorePassed(id) {
  const idx = state.recentPasses.findIndex(u => u.id === id);
  if (idx === -1) return;
  const u = state.recentPasses[idx];
  try {
    await apiDeleteSwipe(state.userId, id); // убирает dislike-запись на бэке — вуз снова доступен в /universities
  } catch (e) { return; } // ошибка уже показана тостом внутри apiRequest
  state.recentPasses.splice(idx, 1);
  state.disliked = state.disliked.filter(x => x.id !== id);
  state.deck.unshift(u);
  toast(t('restored_card', u.name));
  renderDiscover();
}

/* ---------- Essay tip of the day (right sidebar) — меняется раз в день, не при каждом рендере ---------- */
function essayTipOfTheDay() {
  const tips = t('essay_tips');
  const dayIndex = Math.floor(Date.now() / 86400000) % tips.length;
  return tips[dayIndex];
}

function cardPhotoStyle(u) {
  return u.photo ? `background-image:url('${u.photo}');background-size:cover;background-position:center;` : `background:${uniColor(u.id)};`;
}

const SKY_BY_CLIMATE = {
  Warm: ['#C88B5A', '#96702F'],
  Moderate: ['#8FA3A8', '#3A5068'],
  Cold: ['#AEC0D6', '#3A5068']
};
function cardScene(u) {
  const sky = SKY_BY_CLIMATE[u.climate] || SKY_BY_CLIMATE.Moderate;
  let shapes = '';
  if (u.setting === 'Coastal') {
    shapes = `
      <circle cx="340" cy="45" r="26" fill="rgba(255,255,255,0.55)"/>
      <path d="M0,150 Q50,130 100,150 T200,150 T300,150 T400,150 V210 H0 Z" fill="rgba(255,255,255,0.18)"/>
      <path d="M0,168 Q50,150 100,168 T200,168 T300,168 T400,168 V210 H0 Z" fill="rgba(255,255,255,0.30)"/>
      <path d="M0,185 Q50,170 100,185 T200,185 T300,185 T400,185 V210 H0 Z" fill="rgba(255,255,255,0.5)"/>`;
  } else if (u.setting === 'Urban') {
    const buildings = [[10, 120, 34], [52, 150, 30], [90, 110, 28], [126, 170, 36], [170, 135, 26], [204, 155, 32], [244, 115, 30], [282, 180, 38], [328, 140, 26], [362, 160, 30]];
    shapes = buildings.map(([x, h, w]) => `<rect x="${x}" y="${210 - h}" width="${w}" height="${h}" fill="rgba(255,255,255,0.22)"/>`).join('');
    let windows = '';
    buildings.forEach(([x, h, w]) => {
      for (let wy = 210 - h + 10; wy < 200; wy += 18) {
        for (let wx = x + 5; wx < x + w - 5; wx += 12) {
          if ((wx + wy) % 23 < 9) windows += `<rect x="${wx}" y="${wy}" width="4" height="6" fill="rgba(255,255,255,0.7)"/>`;
        }
      }
    });
    shapes += windows;
  } else {
    shapes = `
      <path d="M0,160 Q100,120 200,155 T400,150 V210 H0 Z" fill="rgba(255,255,255,0.2)"/>
      <circle cx="70" cy="150" r="22" fill="rgba(255,255,255,0.35)"/>
      <rect x="60" y="150" width="6" height="30" fill="rgba(255,255,255,0.35)"/>
      <circle cx="300" cy="140" r="26" fill="rgba(255,255,255,0.3)"/>
      <rect x="292" y="140" width="6" height="40" fill="rgba(255,255,255,0.3)"/>
      <rect x="150" y="140" width="70" height="50" fill="rgba(255,255,255,0.28)"/>
      <polygon points="150,140 185,110 220,140" fill="rgba(255,255,255,0.28)"/>`;
  }
  return `<svg viewBox="0 0 400 210" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;width:100%;height:100%;">
    <defs><linearGradient id="sky${u.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${sky[0]}"/><stop offset="100%" stop-color="${sky[1]}"/></linearGradient></defs>
    <rect width="400" height="210" fill="url(#sky${u.id})"/>
    ${shapes}
  </svg>`;
}
function fmtMoney(v) { return '$' + v.toLocaleString('en-US'); }

/* ============================================================
   SCORING
   ============================================================ */
function academicStrength(p) {
  let gpaScore = Math.min(Math.max((p.gpa - 2.0) / 2.0, 0), 1) * 100; // 2.0-4.0 -> 0-100
  // IELTS сознательно исключён отсюда: это тест на владение английским, а не на академическую
  // силу профиля, и его нельзя усреднять с SAT/ACT так, будто это одна и та же шкала.
  const academicKeys = ['SAT', 'ACT'].filter(k => p.tests[k] && p.tests[k].taken);
  if (academicKeys.length === 0) return Math.round(gpaScore); // ни SAT, ни ACT не сдан — считаем только по GPA
  const avgTestScore = academicKeys.reduce((sum, k) => {
    const r = TEST_RANGES[k];
    const norm = Math.min(Math.max((p.tests[k].score - r.academicMin) / (r.academicMax - r.academicMin), 0), 1) * 100;
    return sum + norm;
  }, 0) / academicKeys.length; // если сдано и SAT, и ACT — усредняем их нормализованный балл
  return Math.round(gpaScore * 0.5 + avgTestScore * 0.5);
}

function englishProficiencyLevel(p) {
  // Отдельная, не влияющая на academicStrength оценка уровня английского — только для IELTS.
  if (!p.tests.IELTS || !p.tests.IELTS.taken) return null;
  const score = p.tests.IELTS.score;
  if (score >= 7.5) return { level: 'strong', label_ru: 'Сильный уровень английского', label_en: 'Strong English proficiency' };
  if (score >= 6.5) return { level: 'good', label_ru: 'Соответствует типичным требованиям вузов', label_en: 'Meets typical university requirements' };
  return { level: 'low', label_ru: 'Ниже типичных требований большинства вузов', label_en: 'Below typical requirements at most universities' };
}

function matchScore(u, p) {
  let score = 0;
  // CS fit — 28%
  score += (u.cs / 100) * 28;
  // Location fit (setting + climate) — 18%
  let locFit = 0;
  if (p.setting && u.setting === p.setting) locFit += 0.55;
  if (p.climate && u.climate === p.climate) locFit += 0.45;
  if (!p.setting && !p.climate) locFit = 0.6;
  score += locFit * 18;
  // Cost fit — 18% (lower cost relative to budget = better, but not penalized much if under)
  let costRatio = p.budget > 0 ? u.cost / p.budget : 1;
  let costFit = costRatio <= 1 ? 1 : Math.max(0, 1 - (costRatio - 1) * 0.8);
  score += costFit * 18;
  // Research fit — 14%
  let researchFit = 1 - Math.abs(u.research - p.research) / 5;
  score += Math.max(0, researchFit) * 14;
  // Size fit — 12%
  let sizeFit = p.size ? (u.size === p.size ? 1 : 0.4) : 0.7;
  score += sizeFit * 12;
  // Financial aid fit — 10% (only matters if the student said aid is important to them)
  let aidFit = 0.7;
  if (p.needsAid === true) { aidFit = { High: 1, Medium: 0.6, Low: 0.25 }[u.aid.level] ?? 0.5; }
  score += aidFit * 10;
  // Веса выше (28+18+18+14+12+10) суммируются ровно в 100% — никакого случайного
  // "разброса" для красоты, чтобы Match Score можно было честно объяснить на интервью.
  return Math.max(40, Math.min(99, Math.round(score)));
}

function toSATEquivalent(testKey, score) {
  // Normalizes ACT (or SAT itself) onto the SAT 900-1600 academic band, using the same
  // min/max normalization the rest of the app already uses for academicStrength — so a
  // 30 ACT and a ~1400 SAT are treated as equivalent everywhere, not just here.
  const r = TEST_RANGES[testKey];
  const norm = Math.min(Math.max((score - r.academicMin) / (r.academicMax - r.academicMin), 0), 1);
  return 900 + norm * 700;
}

function admissionReality(u, p) {
  // Common Data Set style check: universities publish the middle-50% (25th-75th percentile)
  // GPA/SAT of their ADMITTED class every year. Real counselors sort Reach/Target/Likely by
  // comparing a student's own numbers against that published range — not by inventing a
  // single blended "how strong is this student" score and diffing it against acceptance rate.
  // NOTE: the gpa25/gpa75/sat25/sat75 figures on each university in this demo are illustrative
  // placeholders derived from acceptance rate, not sourced from a real Common Data Set filing —
  // a production build would replace them with each school's actual published CDS numbers.
  const rank = { below: 0, within: 1, above: 2 };
  const gpaPos = p.gpa < u.gpa25 ? 'below' : (p.gpa > u.gpa75 ? 'above' : 'within');

  const academicKeys = Object.keys(p.tests || {}).filter(k => k !== 'IELTS' && p.tests[k] && p.tests[k].taken);
  let testPos = null;
  if (academicKeys.length) {
    // If the student reports both SAT and ACT, use whichever reflects better on them —
    // same as how a student would submit their strongest test to admissions.
    const best = Math.max(...academicKeys.map(k => {
      const satEq = toSATEquivalent(k, p.tests[k].score);
      return satEq < u.sat25 ? rank.below : (satEq > u.sat75 ? rank.above : rank.within);
    }));
    testPos = best;
  }

  // Overall position is the WEAKER of the two available signals — a 4.0 GPA doesn't make a
  // school a "Likely" if the student's test score sits well below the admitted middle-50%.
  const overall = testPos !== null ? Math.min(rank[gpaPos], testPos) : rank[gpaPos];

  if (overall === rank.below) return 'Reach';
  if (overall === rank.within) return 'Target';
  // overall === 'above' on every available signal: still not an automatic Likely. Sitting
  // above the admitted middle-50% is necessary but not sufficient at very selective schools —
  // holistic review rejects plenty of straight-A, high-test applicants there every year.
  if (u.acceptance < 0.15) return 'Target';
  return 'Likely';
}

/* buildDeck() больше не считает подборку локально — deck теперь всегда
   приходит с бэкенда (GET /universities?user_id=), который сам фильтрует по
   continents/countries, откатывается на полный список при пустом фильтре
   (deckFallback), исключает уже свайпнутые вузы и сортирует по Match Score.
   Эта функция просто оборачивает запрос и кладёт результат в state.deck. */
async function buildDeck() {
  const rows = await apiFetchDeck(state.userId);
  state.deck = rows.map(fromApiUni);
  // deckFallback = true, если после применения фильтра continents/countries
  // список не пустой, но совпадает по размеру с полным пулом при активном
  // фильтре — бэкенд для простоты не возвращает отдельный флаг, поэтому
  // приблизительно определяем его на фронте (нужен только для текста подсказки).
  const p = state.profile;
  state.deckFallback = !!(p.continents.length || p.countries.length) && rows.length === 50;
}

/* ---------- Discover-screen filters: region + budget, editable without redoing onboarding ---------- */
async function rebuildDeckKeepingHistory() {
  await apiSaveProfile(); // persist изменившийся profile.continents/countries/budget на бэке
  await buildDeck();      // и сразу перезапросить deck с новым фильтром
}
async function toggleDiscoverContinent(key) {
  const p = state.profile;
  const idx = p.continents.indexOf(key);
  if (idx > -1) p.continents.splice(idx, 1); else p.continents.push(key);
  p.countries = p.countries.filter(c => UNIVERSITIES.some(u => u.country === c && p.continents.includes(u.continent)));
  renderDiscover(); // мгновенно показываем нажатый чип, не дожидаясь сети
  await rebuildDeckKeepingHistory();
  saveGuestSession();
  renderDiscover();
}
async function setDiscoverBudget(value) {
  state.profile.budget = parseInt(value, 10);
  await rebuildDeckKeepingHistory();
  saveGuestSession();
  renderDiscover();
}

/* ============================================================
   ONBOARDING RENDER
   ============================================================ */
const OB_STEPS = ['Academic profile', 'Preferences', 'Where to study', 'Ready'];
let lastAnimatedObStep = -1; // анимация появления шага должна проигрываться только при реальном переходе между шагами, а не при каждом клике внутри шага
let lastAnimatedMajorCategory = null; // то же самое для сетки специальностей — переигрываем только когда реально сменилась категория

/* ============================================================
   LANDING PAGE
   ============================================================ */
function setLandingLang(lang) {
  state.lang = lang;
  renderLanding();
}
function enterOnboarding() {
  const landing = document.getElementById('landing');
  const onboarding = document.getElementById('onboarding');
  landing.classList.add('lp-fade-out');
  setTimeout(() => {
    landing.classList.add('hidden');
    landing.classList.remove('lp-fade-out');
    onboarding.classList.remove('hidden');
    renderOnboarding();
    onboarding.classList.add('ob-fade-in');
    setTimeout(() => onboarding.classList.remove('ob-fade-in'), 550);
  }, 260);
}
function backToLanding() {
  // Прогресс всё равно не теряется — он уже лежит в state и (для гостевой сессии) в localStorage,
  // поэтому можно спокойно вернуться на главную и продолжить с того же места через "Начать бесплатно".
  const landing = document.getElementById('landing');
  const onboarding = document.getElementById('onboarding');
  const mainapp = document.getElementById('mainapp');
  const active = !onboarding.classList.contains('hidden') ? onboarding : mainapp;
  active.classList.add('lp-fade-out');
  setTimeout(() => {
    active.classList.add('hidden');
    active.classList.remove('lp-fade-out');
    landing.classList.remove('hidden');
    renderLanding();
    landing.classList.add('ob-fade-in');
    setTimeout(() => landing.classList.remove('ob-fade-in'), 550);
    window.scrollTo(0, 0);
  }, 260);
}
function lpScrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function renderLanding() {
  const L = document.getElementById('landing');
  L.innerHTML = `
    <nav class="lp-nav">
      <div class="lp-nav-inner">
        <a href="#" class="lp-logo" onclick="return false;">
          <span class="mark">${ICONS.logo}</span><span class="text">UniMatch</span>
        </a>
        <div class="lp-nav-links">
          <a href="#lp-how" onclick="lpScrollTo('lp-how');return false;">${t('nav_how')}</a>
          <a href="#lp-why" onclick="lpScrollTo('lp-why');return false;">${t('nav_why')}</a>
          <span style="font-size:13px;color:var(--ink-faint);font-weight:700;">${t('nav_pricing')} · $0</span>
        </div>
        <div class="lp-nav-right">
          <div class="lang-switch">
            <button class="lang-btn ${state.lang === 'ru' ? 'active' : ''}" onclick="setLandingLang('ru')">RU</button>
            <button class="lang-btn ${state.lang === 'en' ? 'active' : ''}" onclick="setLandingLang('en')">EN</button>
          </div>
          <button class="lp-btn lp-btn-primary" onclick="enterOnboarding()">${t('nav_cta')}</button>
        </div>
      </div>
    </nav>

    <section class="lp-hero">
      <div class="lp-container lp-hero-grid">
        <div>
          <div class="lp-eyebrow-pill">${t('hero_eyebrow')}</div>
          <h1 class="lp-hero-title">${t('hero_title')}</h1>
          <p class="lp-hero-sub">${t('hero_sub')}</p>
          <div class="lp-hero-ctas">
            <button class="lp-btn lp-btn-primary lp-btn-lg" onclick="enterOnboarding()">${t('hero_cta_primary')}</button>
            <button class="lp-btn lp-btn-ghost lp-btn-lg" onclick="lpScrollTo('lp-how')">${t('hero_cta_secondary')}</button>
          </div>
          <div class="lp-hero-stats">
            <div class="lp-hero-stat"><div class="v num">${t('hero_stat1_v')}</div><div class="l">${t('hero_stat1_l')}</div></div>
            <div class="lp-hero-stat"><div class="v num">${t('hero_stat2_v')}</div><div class="l">${t('hero_stat2_l')}</div></div>
            <div class="lp-hero-stat"><div class="v num">${t('hero_stat3_v')}</div><div class="l">${t('hero_stat3_l')}</div></div>
          </div>
        </div>
        <div class="lp-hero-visual">
          <div class="float-card fc-back2">
            <div class="fc-photo" style="background:linear-gradient(135deg,#3A5068,#22334A);"></div>
            <div class="fc-uni-name" style="font-size:14px;">Univ. of Michigan</div>
            <div class="fc-uni-loc">Ann Arbor, US</div>
          </div>
          <div class="float-card fc-back1">
            <div class="fc-photo" style="background:linear-gradient(135deg,#E0A25B,#B0703A);"></div>
            <div class="fc-uni-name" style="font-size:15px;">TU Munich</div>
            <div class="fc-uni-loc">Munich, DE</div>
          </div>
          <div class="float-card fc-main">
            <div class="fc-photo" style="background:linear-gradient(135deg,#1D6B63,#154F49);"></div>
            <h4 class="fc-uni-name">Stanford University</h4>
            <p class="fc-uni-loc">Stanford, CA, US</p>
            <div class="fc-score-row">
              <div class="fc-score match"><div class="n num">94%</div><div class="l">${t('hero_card_match')}</div></div>
              <div class="fc-score reality"><div class="n num">31%</div><div class="l">${t('hero_card_reality')}</div></div>
            </div>
          </div>
          <div class="float-card fc-badge fc-badge-card">
            <div class="ico">${ICONS.check}</div>
            <p>University DNA<span>${state.lang === 'ru' ? 'обновляется на лету' : 'updates live'}</span></p>
          </div>
        </div>
      </div>
    </section>

    <section class="lp-section tight">
      <div class="lp-container">
        <div class="lp-section-head reveal">
          <p class="lp-eyebrow">${t('pain_eyebrow')}</p>
          <h2 class="lp-section-title">${t('pain_title')}</h2>
          <p class="lp-section-body">${t('pain_body')}</p>
        </div>
        <div class="lp-pain-grid">
          <div class="lp-pain-card reveal"><p class="q">${t('pain1_title')}</p><p class="a">${t('pain1_body')}</p></div>
          <div class="lp-pain-card reveal"><p class="q">${t('pain2_title')}</p><p class="a">${t('pain2_body')}</p></div>
          <div class="lp-pain-card reveal"><p class="q">${t('pain3_title')}</p><p class="a">${t('pain3_body')}</p></div>
        </div>
        <div class="lp-pain-footer reveal">${t('pain_footer')}</div>
      </div>
    </section>

    <section class="lp-section" id="lp-how">
      <div class="lp-container">
        <div class="lp-section-head center reveal">
          <p class="lp-eyebrow">${t('how_eyebrow')}</p>
          <h2 class="lp-section-title">${t('how_title')}</h2>
        </div>
        <div class="lp-how-grid">
          <div class="lp-how-card reveal"><div class="lp-how-num num">01</div><h4>${t('how1_title')}</h4><p>${t('how1_body')}</p></div>
          <div class="lp-how-card reveal"><div class="lp-how-num num">02</div><h4>${t('how2_title')}</h4><p>${t('how2_body')}</p></div>
          <div class="lp-how-card reveal"><div class="lp-how-num num">03</div><h4>${t('how3_title')}</h4><p>${t('how3_body')}</p></div>
          <div class="lp-how-card reveal"><div class="lp-how-num num">04</div><h4>${t('how4_title')}</h4><p>${t('how4_body')}</p></div>
        </div>
      </div>
    </section>

    <section class="lp-section" id="lp-why">
      <div class="lp-container">
        <div class="lp-section-head center reveal">
          <p class="lp-eyebrow">${t('why_eyebrow')}</p>
          <h2 class="lp-section-title">${t('why_section_title')}</h2>
          <p class="lp-section-body">${t('why_section_body')}</p>
        </div>
        <div class="lp-why-grid">
          <div class="lp-why-card bad reveal"><span class="tag">${t('why_col1')}</span><h4>${t('why_col1')}</h4><p>${t('why_col1_body')}</p></div>
          <div class="lp-why-card bad reveal"><span class="tag">${t('why_col2')}</span><h4>${t('why_col2')}</h4><p>${t('why_col2_body')}</p></div>
          <div class="lp-why-card winner reveal"><span class="tag">UniMatch</span><h4>${t('why_col3')}</h4><p>${t('why_col3_body')}</p></div>
        </div>
      </div>
    </section>

    <section class="lp-cta-section">
      <div class="lp-container">
        <div class="lp-cta-box reveal">
          <h2>${t('cta_title')}</h2>
          <p>${t('cta_sub')}</p>
          <button class="lp-btn lp-btn-primary lp-btn-lg" onclick="enterOnboarding()">${t('cta_button')}</button>
        </div>
      </div>
    </section>

    <footer class="lp-footer">
      <div class="lp-container">
        <div class="lp-footer-top">
          <div class="lp-footer-brand">
            <a href="#" class="lp-logo" onclick="return false;"><span class="mark">${ICONS.logo}</span><span class="text">UniMatch</span></a>
            <p>${t('footer_tagline')}</p>
          </div>
          <div class="lp-footer-col">
            <h5>${t('footer_product')}</h5>
            <a href="#lp-how" onclick="lpScrollTo('lp-how');return false;">${t('footer_how')}</a>
            <a href="#lp-why" onclick="lpScrollTo('lp-why');return false;">${t('footer_why')}</a>
          </div>
          <div class="lp-footer-col">
            <h5>${t('footer_company')}</h5>
            <a href="#" onclick="return false;">${t('nav_pricing')}</a>
          </div>
          <div class="lp-footer-col">
            <h5>${t('footer_legal')}</h5>
            <a href="#" onclick="return false;">${t('footer_privacy')}</a>
            <a href="#" onclick="return false;">${t('footer_terms')}</a>
          </div>
          <div class="lp-footer-col">
            <h5>${t('footer_contact_title')}</h5>
            <p class="lp-footer-contact-note">${t('footer_contact')}</p>
            <a href="mailto:vanya.medvedev.11.00@mail.ru">vanya.medvedev.11.00@mail.ru</a>
          </div>
        </div>
        <div class="lp-footer-bottom">
          <span>© 2026 UniMatch. ${t('footer_rights')}</span>
          <span class="lp-badge-live"><i></i>${state.lang === 'ru' ? 'Демо-версия · собирается в открытую' : 'Demo build · building in public'}</span>
        </div>
      </div>
    </footer>
  `;
  initScrollReveal();
}

function renderOnboarding() {
  const p = state.profile;
  const s = state.obStep;
  const isStepChange = s !== lastAnimatedObStep;
  lastAnimatedObStep = s;
  const isCategoryChange = state.obMajorCategory !== lastAnimatedMajorCategory;
  lastAnimatedMajorCategory = state.obMajorCategory;
  let inner = '';

  let navHtml = '';

  if (s === 0) {
    inner += `
      <div class="ob-card-heading">
      <p class="ob-eyebrow">${t('step_of', 1)}</p>
      <h1 class="ob-title">${t('ob0_title')}</h1>
      <p class="ob-sub">${t('ob0_sub')}</p>
      </div>
      <div class="row2">
        <div class="field">
          <label>${t('gpa_label')}</label>
          <div class="slider-row">
            <input type="range" min="2" max="4" step="0.05" value="${p.gpa}" oninput="updateSlider('gpa',this.value,'val-gpa',v=>parseFloat(v).toFixed(2))">
            <div class="slider-val" id="val-gpa">${p.gpa.toFixed(2)}</div>
          </div>
        </div>
        <div class="field">
          <label>${t('degree_label')}</label>
          <div class="chip-group">
            ${chip(t('degree_bachelor'), p.degreeLevel === 'bachelor', `setDegreeLevel('bachelor')`)}
            ${chip(t('degree_master'), p.degreeLevel === 'master', `setDegreeLevel('master')`)}
            ${chip(t('degree_phd'), p.degreeLevel === 'phd', `setDegreeLevel('phd')`)}
          </div>
        </div>
      </div>
      <div class="field">
        <label>${t('test_type_label')}</label>
        <div class="test-rows">${['SAT', 'ACT', 'IELTS'].map(k => renderTestRow(k)).join('')}</div>
      </div>
      <div class="field">
        <label>${t('major_label')}</label>
        <div class="category-scroll ${isStepChange ? 'stagger-in' : ''}">
          ${MAJOR_CATEGORIES.map(c => `
            <button type="button" class="category-chip ${state.obMajorCategory === c.key ? 'active' : ''}" onclick="setMajorCategory('${c.key}')">
              <span>${c.icon}</span><span>${c.label}</span>
            </button>`).join('')}
        </div>
        <div class="major-grid ${(isStepChange || isCategoryChange) ? 'stagger-in' : ''}" style="margin-top:10px;">
          ${(MAJOR_CATEGORIES.find(c => c.key === state.obMajorCategory) || MAJOR_CATEGORIES[0]).majors.map(m => `
            <button type="button" class="major-card ${p.major === m.value ? 'active' : ''}" onclick="setMajor('${m.value}')">
              <span class="major-icon">${m.icon}</span>
              <span class="major-name">${m.value}</span>
            </button>`).join('')}
        </div>
      </div>`;
    navHtml = `
      <span></span>
      <button class="btn btn-primary" onclick="obNext()">${t('next')}</button>`;
  } else if (s === 1) {
    inner += `
      <div class="ob-card-heading">
      <p class="ob-eyebrow">${t('step_of', 2)}</p>
      <h1 class="ob-title">${t('ob1_title')}</h1>
      <p class="ob-sub">${t('ob1_sub')}</p>
      </div>
      <div class="field">
        <label>${t('size_label')}</label>
        <div class="chip-group">${['Small', 'Medium', 'Large'].map(v => chip(v, p.size === v, `setChip('size','${v}')`)).join('')}</div>
      </div>
      <div class="field">
        <label>${t('setting_label')}</label>
        <div class="chip-group">${['Urban', 'Suburban', 'Coastal'].map(v => chip(v, p.setting === v, `setChip('setting','${v}')`)).join('')}</div>
      </div>
      <div class="field">
        <label>${t('climate_label')}</label>
        <div class="chip-group">${['Warm', 'Moderate', 'Cold'].map(v => chip(v, p.climate === v, `setChip('climate','${v}')`)).join('')}</div>
      </div>
      <div class="field">
        <label>${t('research_label')}</label>
        <div class="slider-row"><input type="range" min="1" max="5" step="1" value="${p.research}" oninput="updateSlider('research',this.value,'val-research',v=>v+'/5')"><div class="slider-val" id="val-research">${p.research}/5</div></div>
      </div>
      <div class="field">
        <label>${t('budget_label')}</label>
        <div class="slider-row"><input type="range" min="0" max="70000" step="1000" value="${p.budget}" oninput="updateSlider('budget',this.value,'val-budget',v=>fmtMoney(parseInt(v)))"><div class="slider-val" id="val-budget">${fmtMoney(p.budget)}</div></div>
      </div>
      <div class="field">
        <label>${t('aid_label')}</label>
        <div class="chip-group">
          ${chip(t('aid_yes'), p.needsAid === true, `setAid(true)`)}
          ${chip(t('aid_no'), p.needsAid === false, `setAid(false)`)}
        </div>
      </div>`;
    navHtml = `
      <button class="btn btn-ghost" onclick="obBack()">${t('back')}</button>
      <button class="btn btn-primary" onclick="obNext()">${t('next')}</button>`;
  } else if (s === 2) {
    inner += `
      <div class="ob-card-heading">
      <p class="ob-eyebrow">${t('step_of', 3)}</p>
      <h1 class="ob-title">${t('ob2_title')}</h1>
      <p class="ob-sub">${t('ob2_sub')}</p>
      </div>
      <div class="map-wrap">
        <p class="map-hint">${t('map_hint')}</p>
        ${renderWorldMap()}
      </div>
      ${renderCountryPanel()}`;
    navHtml = `
      <button class="btn btn-ghost" onclick="obBack()">${t('back')}</button>
      <button class="btn btn-primary" onclick="obNext()">${t('next')}</button>`;
  } else {
    const strength = academicStrength(p);
    const eng = englishProficiencyLevel(p);
    inner += `
      <div class="ob-card-heading">
      <p class="ob-eyebrow">${t('step_of', 4)}</p>
      <h1 class="ob-title">${t('ob3_title')}</h1>
      <p class="ob-sub">${t('ob3_sub')}</p>
      </div>
      <div class="kv-grid" style="margin-bottom:20px;">
        <div class="kv"><div class="k">${t('strength_label')}${(!p.tests.SAT.taken && !p.tests.ACT.taken) ? ' (GPA only)' : ''}</div><div class="v">${strength}/100</div></div>
        <div class="kv"><div class="k">${t('major_kv')}</div><div class="v">${p.major}</div></div>
        <div class="kv"><div class="k">${t('degree_label')}</div><div class="v">${t('degree_' + p.degreeLevel)}</div></div>
        <div class="kv"><div class="k">${t('budget_kv')}</div><div class="v">${fmtMoney(p.budget)}</div></div>
        <div class="kv"><div class="k">${t('regions_kv')}</div><div class="v">${p.continents.length ? p.continents.map(c => CONTINENTS[c].name).join(', ') : t('world')}</div></div>
        ${eng ? `<div class="kv"><div class="k">English (IELTS)</div><div class="v" style="font-family:var(--font-body);font-size:12.5px;">${state.lang === 'en' ? eng.label_en : eng.label_ru}</div></div>` : ''}
      </div>`;
    navHtml = `
      <button class="btn btn-ghost" onclick="obBack()">${t('back')}</button>
      <button class="btn btn-primary" onclick="finishOnboarding()">${t('start_swiping')}</button>`;
  }

  const stepTitles = [t('ob0_title'), t('ob1_title'), t('ob2_title'), t('ob3_title')];
  const stepSubs = [t('ob0_sub'), t('ob1_sub'), t('ob2_sub'), t('ob3_sub')];
  const brandPanel = `
    <aside class="ob-brand-panel">
      <div class="ob-brand-top">
        <div class="ob-brand-logo" onclick="backToLanding()" style="cursor:pointer;" title="${state.lang === 'ru' ? 'Вернуться на главную' : 'Back to home'}"><div class="mark">${ICONS.logo}</div><div class="text">UniMatch</div></div>
        <div class="ob-lang-switch-dark">
          <button class="${state.lang === 'ru' ? 'active' : ''}" onclick="setLang('ru')">RU</button>
          <button class="${state.lang === 'en' ? 'active' : ''}" onclick="setLang('en')">EN</button>
        </div>
      </div>
      <div class="ob-brand-mid">
        <p class="ob-brand-eyebrow">${t('step_of', s + 1)}</p>
        <h2 class="ob-brand-headline">${stepTitles[s]}</h2>
        <p class="ob-brand-sub">${stepSubs[s]}</p>
      </div>
      <div class="ob-steps">
        ${stepTitles.map((title, i) => `
          <div class="ob-step-row ${i < s ? 'done' : ''} ${i === s ? 'current' : ''}">
            <div class="ob-step-dot">${i < s ? ICONS.check : i + 1}</div>
            <div class="ob-step-label">${title}</div>
          </div>`).join('')}
      </div>
      <div class="ob-brand-facts">${renderObSideFacts()}</div>
    </aside>`;

  document.getElementById('onboarding').innerHTML = `
    ${brandPanel}
    <main class="ob-form-panel">
      <div class="ob-card-col">
        <div class="ob-card">
          <div class="ob-mobile-bar">
            <div class="ob-top-row">
              <button class="ob-mobile-home" onclick="backToLanding()" title="${state.lang === 'ru' ? 'На главную' : 'Home'}">${ICONS.back} ${state.lang === 'ru' ? 'Главная' : 'Home'}</button>
              ${langSwitcher()}
            </div>
            <div class="ob-progress">${OB_STEPS.map((_, i) => `<i class="${i <= s ? 'done' : ''}"></i>`).join('')}</div>
          </div>
          <div class="${isStepChange ? 'ob-step' : ''}">${inner}</div>
        </div>
        <div class="ob-nav-spacer">${renderObFiller(s)}</div>
        <div class="ob-nav">${navHtml}</div>
      </div>
      <aside class="ob-tips-rail">${renderObTips(s)}</aside>
    </main>`;
}

function renderObFiller(s) {
  const items = {
    1: {
      seed: 'unimatch-c1', label: state.lang === 'ru' ? 'На заметку' : 'Good to know',
      text: state.lang === 'ru' ? '70% абитуриентов в нашем опросе меняли хотя бы один параметр после первых 10 свайпов — можно не бояться ошибиться сейчас.' : '70% of applicants in our survey changed at least one preference after their first 10 swipes — it is fine not to get this perfect now.'
    },
    2: {
      seed: 'unimatch-c2', label: state.lang === 'ru' ? 'Кругозор' : 'Perspective',
      text: state.lang === 'ru' ? 'Половина пользователей в итоге рассматривает хотя бы одну страну, о которой не думали в начале.' : 'Half of our users end up considering at least one country they had not thought about at first.'
    },
    3: {
      seed: 'unimatch-c3', label: state.lang === 'ru' ? 'Дальше' : 'What is next',
      text: state.lang === 'ru' ? 'Дальше — свайпы. Каждый лайк или дизлайк уточняет Match Score, вводить ничего вручную не нужно.' : 'Next is swiping. Every like or dislike refines your Match Score — nothing to type in by hand.'
    }
  };
  const it = items[s];
  if (!it) return '';
  return `<div class="ob-filler">
    <img src="https://picsum.photos/seed/${it.seed}/700/300" alt="" loading="lazy" onerror="this.style.display='none'">
    <div class="ob-filler-overlay"><span>${it.label}</span><p>${it.text}</p></div>
  </div>`;
}

function renderObTips(s) {
  const tipsByStep = state.lang === 'en' ? [
    [{ icon: '🎓', text: 'GPA and test scores only feed Admission Reality — they never affect Match Score.' },
    { icon: '🔁', text: 'You can change your major later; nothing you enter here is lost.' },
    { icon: '🎯', text: 'Bachelor\'s, Master\'s and PhD each surface a different set of universities next.' }],
    [{ icon: '⚖️', text: 'These are starting weights — the exact mix adapts to your swipes over time.' },
    { icon: '💰', text: 'Going over budget doesn\'t exclude a school, it just lowers its Match Score.' },
    { icon: '🤝', text: '"Not critical" on financial aid is a perfectly fine answer.' }],
    [{ icon: '🌍', text: 'You can pick more than one continent at once.' },
    { icon: '📍', text: 'Picking countries narrows things further within a continent.' },
    { icon: '🔓', text: 'Leave it empty if you\'re open to anywhere in the world.' }],
    [{ icon: '↩️', text: 'You can always come back and change any answer later.' },
    { icon: '👉', text: 'Next comes swiping — every like/dislike fine-tunes your Match Score.' },
    { icon: '🔒', text: 'Guest data is saved automatically; registration is optional.' }],
  ] : [
    [{ icon: '🎓', text: 'GPA и баллы тестов влияют только на Admission Reality — на Match Score они не влияют.' },
    { icon: '🔁', text: 'Специальность можно поменять позже — ничего из введённого не пропадёт.' },
    { icon: '🎯', text: 'Бакалавриат, магистратура и PhD дальше показывают разные наборы вузов.' }],
    [{ icon: '⚖️', text: 'Это стартовые веса — точные пропорции подстроятся под твои свайпы.' },
    { icon: '💰', text: 'Вуз дороже бюджета не исключается, просто получает Match Score ниже.' },
    { icon: '🤝', text: '«Не критично» по финансовой помощи — тоже нормальный ответ.' }],
    [{ icon: '🌍', text: 'Можно выбрать сразу несколько континентов.' },
    { icon: '📍', text: 'Выбор стран сузит подборку внутри континента.' },
    { icon: '🔓', text: 'Оставь пустым, если готов(а) рассматривать любую страну.' }],
    [{ icon: '↩️', text: 'В любой момент можно вернуться и поменять ответы.' },
    { icon: '👉', text: 'Дальше — свайпы: лайк/дизлайк уточняют Match Score под тебя.' },
    { icon: '🔒', text: 'Гостевые данные сохраняются сами, регистрация не обязательна.' }],
  ];
  return tipsByStep[s].map(f => `<div class="ob-tip-card"><div class="icon">${f.icon}</div><p>${f.text}</p></div>`).join('');
}

function renderObSideFacts() {
  const facts = state.lang === 'en' ? [
    { icon: '🎯', text: 'Preference Match ≠ Admission chances — we show both, separately, honestly.' },
    { icon: '🌍', text: `${UNIVERSITIES.length} universities across ${Object.keys(CONTINENTS).length} continents in this demo.` },
    { icon: '🧬', text: 'Your University DNA sharpens with every swipe — implicit feedback, not just a form.' }
  ] : [
    { icon: '🎯', text: 'Preference Match ≠ шансы на поступление — показываем оба честно и раздельно.' },
    { icon: '🌍', text: `${UNIVERSITIES.length} университетов на ${Object.keys(CONTINENTS).length} континентах в этом демо.` },
    { icon: '🧬', text: 'University DNA становится точнее с каждым свайпом — это implicit feedback, а не просто анкета.' }
  ];
  return facts.map(f => `<div class="ob-brand-fact"><div class="icon">${f.icon}</div><p>${f.text}</p></div>`).join('');
}

function chip(label, active, onclick) {
  return `<button type="button" class="chip ${active ? 'active' : ''}" onclick="${onclick}">${label}</button>`;
}

function renderTestRow(key) {
  const p = state.profile;
  const info = p.tests[key];
  const r = TEST_RANGES[key];
  return `<div class="test-row ${info.taken ? 'is-on' : ''}">
    <div class="test-row-head">
      <span class="test-row-name">${key}</span>
      <label class="switch">
        <input type="checkbox" ${info.taken ? 'checked' : ''} onchange="toggleTestTaken('${key}',this.checked)">
        <span class="switch-track"><span class="switch-thumb"></span></span>
      </label>
    </div>
    ${info.taken ? `
      <div class="test-row-score">
        <input type="number" min="${r.min}" max="${r.max}" step="${r.step}" value="${info.score}"
               oninput="updateTestScoreFor('${key}',this)" onblur="updateTestScoreFor('${key}',this,true)">
        <span class="test-row-hint">${r.hint}</span>
      </div>
      ${key === 'IELTS' ? `<p class="test-row-note">${t('ielts_hint')}</p>` : ''}
    ` : ``}
  </div>`;
}

function renderWorldMap() {
  const p = state.profile;
  // low-poly continent silhouettes, loosely traced from real coastlines (stylized, not survey-accurate)
  const shapes = {
    na: "M108,28 L150,32 L176,50 L162,66 L196,58 L222,80 L206,100 L232,98 L250,128 L228,150 L248,168 L226,188 L232,208 L204,200 L196,224 L208,246 L182,238 L172,262 L148,250 L142,272 L116,262 L108,232 L82,236 L88,206 L62,196 L74,168 L48,152 L58,120 L34,104 L52,80 L44,54 L78,44 Z",
    sa: "M246,196 L272,204 L292,232 L284,264 L304,290 L296,322 L306,352 L288,378 L292,404 L270,418 L262,392 L246,398 L238,368 L222,352 L228,320 L214,292 L224,258 L212,232 L232,212 Z",
    eu: "M398,60 L414,34 L426,50 L420,70 L440,58 L458,66 L452,84 L474,78 L494,92 L516,86 L534,100 L522,116 L496,112 L478,128 L452,122 L438,138 L414,132 L420,110 L398,104 L392,82 Z",
    af: "M432,138 L462,128 L494,136 L520,124 L548,140 L560,168 L544,188 L556,210 L538,234 L544,260 L522,286 L528,312 L506,332 L488,316 L494,286 L476,258 L482,228 L462,204 L468,176 L446,164 Z",
    as: "M538,54 L580,30 L628,26 L664,44 L648,64 L688,52 L732,60 L768,84 L804,78 L838,98 L846,124 L812,140 L822,168 L788,180 L792,206 L754,214 L738,238 L700,228 L678,246 L644,228 L648,198 L616,192 L602,164 L620,140 L594,124 L568,132 L546,110 L560,86 L534,78 Z",
    oc: "M700,268 L736,256 L772,264 L800,286 L808,314 L788,336 L796,358 L768,372 L738,364 L716,378 L698,354 L706,326 L688,300 Z"
  };
  // small accent islands for readability at this zoom level (Japan, Madagascar, NZ, Britain)
  const islands = {
    eu: ["M370,72 L382,66 L388,78 L380,90 L368,86 Z"],
    af: ["M566,278 L576,270 L582,290 L574,306 L564,296 Z"],
    as: ["M812,150 L822,140 L830,156 L822,172 L810,166 Z", "M824,182 L834,176 L838,190 L828,196 Z"],
    oc: ["M826,338 L834,326 L842,344 L834,360 L824,352 Z"]
  };
  // deterministic little "ocean" dots for texture
  const dots = [];
  for (let i = 0; i < 46; i++) {
    const x = (i * 173.4) % 860;
    const y = (i * 97.7 + (i % 5) * 40) % 440;
    dots.push(`<circle class="ocean-dot" cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${1 + (i % 3)}"/>`);
  }

  let defs = `<radialGradient id="oceanGrad" cx="35%" cy="25%" r="90%">
      <stop offset="0%" stop-color="#F1EFE6"/><stop offset="100%" stop-color="#DAD5C4"/>
    </radialGradient>`;
  Object.entries(CONTINENTS).forEach(([key, c]) => {
    defs += `<linearGradient id="grad-${key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.colors[0]}"/><stop offset="100%" stop-color="${c.colors[1]}"/>
    </linearGradient>`;
  });

  let groups = '';
  Object.keys(shapes).forEach(key => {
    const c = CONTINENTS[key];
    const selected = p.continents.includes(key);
    const count = UNIVERSITIES.filter(u => u.continent === key).length;
    groups += `
      <g class="continent-group ${selected ? 'is-selected' : ''}" onclick="toggleContinent('${key}')">
        <path class="continent ${selected ? 'selected' : ''}" d="${shapes[key]}" fill="url(#grad-${key})"></path>
        ${(islands[key] || []).map(d => `<path class="continent ${selected ? 'selected' : ''}" d="${d}" fill="url(#grad-${key})"></path>`).join('')}
        <text class="continent-label" x="${c.cx}" y="${c.cy - 4}" text-anchor="middle">${c.name}</text>
        <text class="continent-count" x="${c.cx}" y="${c.cy + 11}" text-anchor="middle">${count} университетов</text>
        <g class="continent-check" transform="translate(${c.cx + 58},${c.cy - 34})">
          <circle r="11" fill="#fff"/>
          <path d="M-5,0 L-1.5,4 L5,-4" fill="none" stroke="#3B6B4A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>`;
  });
  return `<svg class="worldmap" viewBox="0 0 860 440" xmlns="http://www.w3.org/2000/svg">
    <defs>${defs}</defs>
    <rect class="ocean-bg" x="0" y="0" width="860" height="440" rx="18"/>
    ${dots.join('')}
    ${groups}
  </svg>`;
}

function renderCountryPanel() {
  const p = state.profile;
  if (p.continents.length === 0) return '';
  let countries = [...new Set(UNIVERSITIES.filter(u => p.continents.includes(u.continent)).map(u => u.country))];
  return `<div class="country-panel">
    <h4>Уточнить страны (необязательно)</h4>
    <div class="chip-group">${countries.map(c => chip(c, p.countries.includes(c), `toggleCountry('${c}')`)).join('')}</div>
  </div>`;
}

function toggleContinent(key) {
  const p = state.profile;
  const idx = p.continents.indexOf(key);
  if (idx > -1) p.continents.splice(idx, 1); else p.continents.push(key);
  // drop countries that no longer belong to a selected continent
  p.countries = p.countries.filter(c => UNIVERSITIES.some(u => u.country === c && p.continents.includes(u.continent)));
  renderOnboarding();
}
function toggleCountry(c) {
  const p = state.profile;
  const idx = p.countries.indexOf(c);
  if (idx > -1) p.countries.splice(idx, 1); else p.countries.push(c);
  renderOnboarding();
}
function setChip(field, value) {
  state.profile[field] = state.profile[field] === value ? null : value;
  renderOnboarding();
}
function setAid(value) {
  state.profile.needsAid = state.profile.needsAid === value ? null : value;
  renderOnboarding();
}
function updateProfile(field, value) {
  state.profile[field] = value;
}
function setMajor(value) {
  state.profile.major = value;
  renderOnboarding();
}
function setDegreeLevel(value) {
  state.profile.degreeLevel = value;
  renderOnboarding();
}
function setMajorCategory(key) {
  state.obMajorCategory = key;
  renderOnboarding();
}
function toggleTestTaken(key, checked) {
  state.profile.tests[key].taken = checked;
  renderOnboarding();
}
function updateTestScoreFor(key, input, isBlur) {
  const r = TEST_RANGES[key];
  let v = parseFloat(input.value);
  if (isNaN(v)) v = r.min;
  if (v > r.max) v = r.max;   // например SAT не может быть больше 1600, даже если ввели больше
  if (v < r.min) v = r.min;
  state.profile.tests[key].score = v;
  if (isBlur) input.value = v; // поправить видимое значение только когда пользователь закончил ввод
}
function updateSlider(field, rawValue, displayId, formatFn) {
  // update state + only the small value label, so dragging the range input never gets interrupted by a full re-render
  const value = field === 'gpa' ? parseFloat(rawValue) : parseInt(rawValue);
  state.profile[field] = value;
  const el = document.getElementById(displayId);
  if (el) el.textContent = formatFn(rawValue);
}
function obNext() { if (state.obStep < 3) state.obStep++; renderOnboarding(); }
function obBack() { if (state.obStep > 0) state.obStep--; renderOnboarding(); }

async function finishOnboarding() {
  try {
    const user = await apiSaveProfile(); // POST /users — создаёт (или обновляет) пользователя на бэке
    state.userId = user.id;
    state.guestId = user.guestId;
    state.isRegistered = user.isRegistered;
    state.email = user.email;
    await buildDeck();
  } catch (e) {
    return; // apiRequest уже показал toast с ошибкой — не переключаем экран, если сервер недоступен
  }
  saveGuestSession();
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('mainapp').classList.remove('hidden');
  state.screen = 'discover';
  renderApp();
}

function restartOnboarding() {
  if (!confirm(t('restart_confirm'))) return;
  try { localStorage.removeItem(GUEST_KEY); } catch (e) { }
  const keepLang = state.lang;
  state = {
    screen: 'discover', obStep: 0, obMajorCategory: 'cs', lang: keepLang, guestId: generateGuestId(), userId: null, isRegistered: false, email: null,
    profile: { gpa: 3.6, tests: { SAT: { taken: true, score: 1350 }, ACT: { taken: false, score: 30 }, IELTS: { taken: false, score: 7 } }, major: 'Computer Science', degreeLevel: 'bachelor', size: null, setting: null, climate: null, research: 3, budget: 40000, needsAid: null, continents: [], countries: [] },
    deck: [], liked: [], disliked: [], currentUniId: null, activeTab: 'overview', matchFilter: 'all', recentPasses: []
  };
  document.getElementById('mainapp').classList.add('hidden');
  document.getElementById('onboarding').classList.remove('hidden');
  renderOnboarding();
}

/* ============================================================
   MAIN APP SHELL
   ============================================================ */
function renderApp() {
  renderSidebar();
  if (state.screen === 'discover') renderDiscover();
  else if (state.screen === 'matches') renderMatches();
  else if (state.screen === 'university') renderUniversityDetail();
  else if (state.screen === 'dna') renderDNA();
}

function go(screen) { state.screen = screen; renderApp(); window.scrollTo(0, 0); }

function renderSidebar() {
  const items = [
    { id: 'discover', label: t('nav_discover'), icon: ICONS.discover },
    { id: 'matches', label: t('nav_matches'), icon: ICONS.matches },
    { id: 'dna', label: t('nav_dna'), icon: ICONS.dna },
  ];
  const p = state.profile;
  const statusLine = state.isRegistered
    ? t('account_line', state.email)
    : t('guest_line', state.guestId ? state.guestId.slice(0, 10) : '');
  document.getElementById('sidebar').innerHTML = `
    <div class="logo" onclick="backToLanding()" style="cursor:pointer;" title="${state.lang === 'ru' ? 'Вернуться на главную' : 'Back to home'}"><div class="logo-mark">${ICONS.logo}</div><div class="logo-text">UniMatch</div></div>
    ${items.map(it => `<button class="nav-item ${state.screen === it.id ? 'active' : ''}" onclick="go('${it.id}')">${it.icon}<span>${it.label}</span></button>`).join('')}
    <button class="nav-item" onclick="backToLanding()">${ICONS.back}<span>${state.lang === 'ru' ? 'Главная' : 'Home'}</span></button>
    <div class="sidebar-foot">
      ${langSwitcher()}
      <div class="mini-profile">
        <div class="avatar"></div>
        <div>
          <div class="mini-profile-name">${p.major}</div>
          <div class="mini-profile-sub">${t('degree_' + p.degreeLevel)} · ${statusLine}</div>
          <div class="mini-profile-sub2">${t('strength_label')}: ${academicStrength(p)}/100${(!p.tests.SAT.taken && !p.tests.ACT.taken) ? ' (GPA only)' : ''}</div>
        </div>
      </div>
      <button class="restart-btn" onclick="backToLanding()">${state.lang === 'ru' ? '🏠 На главную' : '🏠 Home'}</button>
      <button class="restart-btn" onclick="restartOnboarding()">${t('restart')}</button>
    </div>`;
}

/* ---------- Guest → registered account banner ---------- */
function renderGuestBanner() {
  if (state.isRegistered) return '';
  return `
    <div class="guest-banner">
      <div class="guest-banner-icon">💾</div>
      <div class="guest-banner-text">
        <h4>${t('guest_banner_title')}</h4>
        <p>${t('guest_banner_body', state.guestId ? state.guestId.slice(0, 10) : '')}</p>
      </div>
      <div class="guest-banner-form">
        <input type="text" id="guest-email-input" placeholder="you@example.com">
        <button class="btn btn-primary" style="padding:10px 18px;font-size:13px;" onclick="registerEmail()">${t('guest_save')}</button>
      </div>
    </div>`;
}
async function registerEmail() {
  const input = document.getElementById('guest-email-input');
  const val = (input.value || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { toast(t('guest_email_invalid')); return; }
  try {
    const user = await apiRegisterEmail(state.userId, val); // POST /users/{id}/register
    state.isRegistered = user.isRegistered;
    state.email = user.email;
  } catch (e) {
    return; // ошибка уже показана тостом внутри apiRequest
  }
  saveGuestSession();
  toast(t('guest_saved'));
  renderApp();
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

/* ---------- Scroll-reveal: элементы с классом .reveal плавно проявляются,
   когда докручиваешь до них — используется на странице университета и в DNA ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => io.observe(el));
}

/* ============================================================
   DISCOVER / SWIPE
   ============================================================ */
const FLAGS = {
  USA: '🇺🇸', Canada: '🇨🇦', UK: '🇬🇧', Germany: '🇩🇪', Netherlands: '🇳🇱', Switzerland: '🇨🇭',
  Singapore: '🇸🇬', Japan: '🇯🇵', "South Korea": '🇰🇷', "Hong Kong": '🇭🇰', Australia: '🇦🇺',
  Sweden: '🇸🇪', China: '🇨🇳', India: '🇮🇳', "New Zealand": '🇳🇿', Brazil: '🇧🇷', "South Africa": '🇿🇦'
};
const SETTING_EMOJI = { Urban: '🏙️', Suburban: '🌳', Coastal: '🌊' };

function renderDiscover() {
  const deck = state.deck;
  let cardsHtml = '';
  if (deck.length === 0) {
    cardsHtml = `<div class="deck-empty">
        <svg class="empty-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 15c1 1 5 1 6 0"/></svg>
        <h3>${t('deck_empty_title')}</h3>
        <p>${t('deck_empty_body')}</p>
        <button class="btn btn-primary" onclick="go('matches')" style="margin-top:10px;">${t('view_matches')}</button>
      </div>`;
  } else {
    const visible = deck.slice(0, 3).reverse();
    cardsHtml = visible.map((u, i) => {
      const isTop = (i === visible.length - 1);
      return `<div class="uni-card" id="card-${u.id}" style="z-index:${i}; transform:scale(${0.95 + i * 0.025}) translateY(${(visible.length - 1 - i) * -8}px);">
        <div class="photo" style="${cardPhotoStyle(u)}">
          ${!u.photo ? `<div class="photo-emoji">${SETTING_EMOJI[u.setting] || '🏫'}</div>` : ''}
          <div class="badge-diff badge-${u._reality}">${u._reality}</div>
          <div class="badge-country">${FLAGS[u.country] || ''} ${u.country}</div>
          ${isTop ? `<div class="swipe-stamp like" id="stamp-like">LIKE</div><div class="swipe-stamp nope" id="stamp-nope">NOPE</div>` : ''}
        </div>
        <div class="body">
          <h3>${u.name}</h3>
          <p class="loc">📍 ${u.city}, ${u.country}</p>
          <div class="tag-row">${u.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
          <div class="card-why">${ICONS.check}<span>${buildWhyReasons(u, state.profile)[0]}</span></div>
          <div class="stat-row">
            <div class="stat"><div class="v">${u._match}%</div><div class="l">Match</div></div>
            <div class="stat"><div class="v">${Math.round(u.acceptance * 100)}%</div><div class="l">Accept rate</div></div>
            <div class="stat"><div class="v">${fmtMoney(u.cost)}</div><div class="l">Cost/yr</div></div>
          </div>
          <div class="card-aid-row">🎓 ${t('scholarship_label')}: ${u.aid.note}</div>
        </div>
      </div>`;
    }).join('');
  }

  const liked = state.liked;
  document.getElementById('content').innerHTML = `
    <div class="content-header">
      <div><h1 class="content-title">${t('discover_title')}</h1><p class="content-sub">${state.deckFallback ? t('discover_sub_fallback') : t('discover_sub', state.deck.length)}</p></div>
    </div>
    <div class="discover-layout">
      <div class="left-panel">
        <div class="panel-card">
          <h4>${t('legend_title')}</h4>
          <div class="legend-row"><span class="legend-dot" style="background:var(--reach);"></span><div><div class="n">Reach</div><div class="d">${t('legend_reach')}</div></div></div>
          <div class="legend-row"><span class="legend-dot" style="background:var(--target);"></span><div><div class="n">Target</div><div class="d">${t('legend_target')}</div></div></div>
          <div class="legend-row"><span class="legend-dot" style="background:var(--likely);"></span><div><div class="n">Likely</div><div class="d">${t('legend_likely')}</div></div></div>
        </div>
        <div class="panel-card">
          <h4>${t('filters_title')}</h4>
          <div class="chip-group">${Object.keys(CONTINENTS).map(k => chip(CONTINENTS[k].name, state.profile.continents.includes(k), `toggleDiscoverContinent('${k}')`)).join('')}</div>
          <div class="filter-budget-row">
            <label class="filter-budget-label">${t('budget_kv')}: <b id="discover-budget-val">${fmtMoney(state.profile.budget)}</b></label>
            <input type="range" min="5000" max="80000" step="1000" value="${state.profile.budget}"
              oninput="document.getElementById('discover-budget-val').textContent=fmtMoney(this.value)"
              onchange="setDiscoverBudget(this.value)">
          </div>
        </div>
        <div class="panel-card">
          <h4>${t('your_profile_short')}</h4>
          <div class="legend-row"><div><div class="n">${state.profile.major}</div><div class="d">${t('degree_' + state.profile.degreeLevel)} · GPA ${state.profile.gpa}</div></div></div>
          <button class="restart-btn" style="width:100%;margin-top:8px;" onclick="restartOnboarding()">${t('edit_profile_link')}</button>
        </div>
        ${(() => {
          const { percent, next } = profileCompleteness();
          return `<div class="panel-card">
            <h4>${t('checklist_title')}</h4>
            <div class="checklist-progress-track"><div class="checklist-progress-fill" style="width:${percent}%"></div></div>
            <div class="checklist-progress-label">${t('checklist_progress', percent)}</div>
            <p class="checklist-hint">${next ? t(next.key) : t('checklist_all_done')}</p>
          </div>`;
        })()}
      </div>
      <div class="deck-area">
        <div class="deck">${cardsHtml}</div>
        ${deck.length > 0 ? `<div class="swipe-actions">
          <button class="action-btn dislike" onclick="swipeTop('dislike')">${ICONS.x}</button>
          <button class="action-btn info big" onclick="openFromDeck()">${ICONS.info}</button>
          <button class="action-btn like" onclick="swipeTop('like')">${ICONS.heart}</button>
        </div>
        <div class="swipe-key-hint">← ${t('kbd_pass')}&nbsp;&nbsp;&nbsp;${t('kbd_like')} →</div>` : ''}
        ${state.recentPasses.length ? `<div class="recent-passes">
          <div class="recent-passes-title">${t('recent_passes_title')}</div>
          ${state.recentPasses.map(u => `
            <div class="recent-pass-row">
              <span class="rp-name">${u.name}</span>
              <button class="rp-restore" onclick="restorePassed(${u.id})">${t('restore_btn')}</button>
            </div>`).join('')}
        </div>` : ''}
        <div class="deck-bottom-row">
          <div class="panel-card">
            <h4>${t('activity_title')}</h4>
            <div class="activity-row"><div class="activity-num">${getDailyActivity()}</div><div class="activity-label">${t('activity_today')}</div></div>
            <p class="list-caption">${t('activity_breakdown', state.liked.length, state.disliked.length)}</p>
          </div>
          <div class="panel-card">
            <h4>${t('essay_tip_title')}</h4>
            <p class="list-caption">${essayTipOfTheDay()}</p>
          </div>
        </div>
        <div class="mobile-home-row">
          <button class="btn btn-primary mobile-home-btn" onclick="backToLanding()">🏠 ${state.lang === 'ru' ? 'На главную' : 'Home'}</button>
        </div>
      </div>
      <div class="side-panel">
        <div class="panel-card">
          <h4>${t('your_matches', liked.length)}</h4>
          ${liked.length ? liked.slice(-4).reverse().map(u => `
            <div class="mini-match-row">
              <div class="mini-thumb" style="${cardPhotoStyle(u)}"></div>
              <div class="mini-match-info"><div class="n">${u.name}</div><div class="c">${u.country}</div></div>
              <div class="mini-match-score">${u._match}%</div>
            </div>`).join('') : `<p class="list-caption">${t('swipe_hint_empty')}</p>`}
        </div>
        <div class="panel-card">
          <h4>${t('how_it_works')}</h4>
          <p class="list-caption">${t('how_it_works_body')}</p>
        </div>
        <div class="panel-card">
          <h4>${t('dna_preview_title')}</h4>
          <div class="dna-preview-wrap">${renderRadar(computeDNA())}</div>
          <button class="restart-btn" style="width:100%;" onclick="go('dna')">${t('dna_preview_cta')}</button>
        </div>
      </div>
    </div>`;

  if (deck.length > 0) attachSwipeHandlers(deck[0].id);
}

function attachSwipeHandlers(topId) {
  const card = document.getElementById('card-' + topId);
  if (!card) return;
  let startX = 0, startY = 0, curX = 0, curY = 0, dragging = false;
  let lastX = 0, lastTime = 0, velocity = 0, rafScheduled = false;

  function pointerDown(e) {
    dragging = true;
    card.classList.add('dragging');
    const pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX; startY = pt.clientY;
    lastX = 0; lastTime = Date.now(); velocity = 0;
  }
  function applyDragTransform() {
    rafScheduled = false;
    const rot = curX / 13;
    const lift = Math.max(0, 1 - Math.abs(curX) / 900); // едва заметный подъём при сильном свайпе
    card.style.transform = `translate(${curX}px, ${curY * 0.4}px) rotate(${rot}deg) scale(${0.98 + lift * 0.02})`;
    const intensity = Math.max(0, Math.min(1, Math.abs(curX) / 100));
    const likeStamp = document.getElementById('stamp-like');
    const nopeStamp = document.getElementById('stamp-nope');
    if (likeStamp) {
      likeStamp.style.opacity = curX > 0 ? intensity : 0;
      likeStamp.style.transform = `rotate(-18deg) scale(${0.7 + intensity * 0.35})`;
    }
    if (nopeStamp) {
      nopeStamp.style.opacity = curX < 0 ? intensity : 0;
      nopeStamp.style.transform = `rotate(18deg) scale(${0.7 + intensity * 0.35})`;
    }
  }
  function pointerMove(e) {
    if (!dragging) return;
    const pt = e.touches ? e.touches[0] : e;
    curX = pt.clientX - startX; curY = pt.clientY - startY;
    const now = Date.now();
    const dt = now - lastTime;
    if (dt > 0) velocity = (curX - lastX) / dt; // px/ms — скорость движения пальца прямо сейчас
    lastX = curX; lastTime = now;
    if (!rafScheduled) { rafScheduled = true; requestAnimationFrame(applyDragTransform); }
  }
  function pointerUp() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove('dragging');
    const isFastFlick = Math.abs(velocity) > 0.55; // резкий "флик" пальцем — засчитываем свайп даже на небольшом расстоянии
    if (curX > 110 || (isFastFlick && curX > 24)) doSwipe('like', velocity);
    else if (curX < -110 || (isFastFlick && curX < -24)) doSwipe('dislike', velocity);
    else {
      card.style.transition = 'transform .38s cubic-bezier(.34,1.4,.4,1)';
      card.style.transform = '';
      const likeStamp = document.getElementById('stamp-like');
      const nopeStamp = document.getElementById('stamp-nope');
      if (likeStamp) likeStamp.style.opacity = 0;
      if (nopeStamp) nopeStamp.style.opacity = 0;
      setTimeout(() => { card.style.transition = ''; }, 400);
    }
    curX = 0; curY = 0; velocity = 0;
  }
  card.addEventListener('mousedown', pointerDown);
  window.addEventListener('mousemove', pointerMove);
  window.addEventListener('mouseup', pointerUp);
  card.addEventListener('touchstart', pointerDown, { passive: true });
  card.addEventListener('touchmove', pointerMove, { passive: true });
  card.addEventListener('touchend', pointerUp);
}

function doSwipe(direction, velocity) {
  const u = state.deck[0];
  if (!u) return;
  const card = document.getElementById('card-' + u.id);
  const flyDistance = Math.max(window.innerWidth, 480) * 1.35;
  // Чем резче был флик пальцем — тем быстрее и дальше улетает карточка, как в настоящем Tinder
  const speedBoost = Math.min(Math.abs(velocity || 0), 1.8);
  const duration = Math.max(180, 320 - speedBoost * 100);
  if (card) {
    card.style.transition = `transform ${duration}ms cubic-bezier(.15,.7,.3,1), opacity ${duration}ms ease-out`;
    card.style.transform = direction === 'like'
      ? `translate(${flyDistance}px, -70px) rotate(26deg)`
      : `translate(-${flyDistance}px, -70px) rotate(-26deg)`;
    card.style.opacity = '0';
  }
  if (navigator.vibrate) { try { navigator.vibrate(direction === 'like' ? [10] : [10]); } catch (e) { } }
  setTimeout(() => {
    state.deck.shift();
    bumpDailyActivity();
    if (direction === 'like') { state.liked.push(u); toast(t('added_to_matches', u.name)); }
    else {
      state.disliked.push(u); // локальный счётчик "passed" для DNA-статистики — на бэке отдельного эндпоинта под него нет
      state.recentPasses.unshift(u);
      if (state.recentPasses.length > 3) state.recentPasses.pop();
    }
    renderDiscover();
    // Пишем свайп на бэк уже после того, как карточка визуально улетела — если
    // запрос не пройдёт, apiRequest сам покажет toast, а локальный UI уже не откатываем
    // (свайп в этом демо необратим локально; чтобы отменить лайк — есть toggleLike на странице вуза).
    apiPostSwipe(state.userId, u.id, direction === 'like').catch(() => {});
  }, duration);
}
function swipeTop(direction) { doSwipe(direction, 0); }

/* ---------- Keyboard shortcuts: ← Pass / → Like, only while a card is on screen ---------- */
document.addEventListener('keydown', (e) => {
  if (state.screen !== 'discover' || !state.deck.length) return;
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return; // don't hijack typing into a text field
  if (e.key === 'ArrowRight') { e.preventDefault(); doSwipe('like'); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); doSwipe('dislike'); }
});
function openFromDeck() {
  if (state.deck[0]) { state.currentUniId = state.deck[0].id; state.activeTab = 'overview'; go('university'); }
}

/* ============================================================
   MATCHES LIST
   ============================================================ */
function renderMatches() {
  let list = state.liked.slice().sort((a, b) => b._match - a._match);
  if (state.matchFilter !== 'all') list = list.filter(u => u._reality === state.matchFilter);

  document.getElementById('content').innerHTML = `
    <div class="content-header">
      <div><h1 class="content-title">${t('your_matches_title')}</h1><p class="content-sub">${t('matches_sub', state.liked.length)}</p></div>
    </div>
    ${state.liked.length > 0 ? renderGuestBanner() : ''}
    <div class="filter-tabs">
      ${['all', 'Reach', 'Target', 'Likely'].map(f => `<button class="filter-tab ${state.matchFilter === f ? 'active' : ''}" onclick="setMatchFilter('${f}')">${f === 'all' ? t('filter_all') : f}</button>`).join('')}
    </div>
    ${list.length === 0 ? `<div class="empty-state">
        <svg class="empty-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        <p>${t('empty_matches')}</p>
        <button class="btn btn-primary" onclick="go('discover')" style="margin-top:6px;">${t('to_discover')}</button>
      </div>` :
      list.map(u => `
        <div class="match-list-row reveal" onclick="viewUniversity(${u.id})">
          <div class="match-thumb" style="${cardPhotoStyle(u)}"></div>
          <div class="match-info"><h4>${u.name}</h4><div class="loc">${u.city}, ${u.country}</div></div>
          <div class="match-score-block"><div class="v">${u._match}%</div><div class="l">Match</div></div>
          <span class="badge badge-${u._reality}">${u._reality}</span>
        </div>`).join('')
    }`;
  initScrollReveal();
}
function setMatchFilter(f) { state.matchFilter = f; renderMatches(); }
function viewUniversity(id) { state.currentUniId = id; state.activeTab = 'overview'; go('university'); }

/* ============================================================
   UNIVERSITY DETAIL
   ============================================================ */
function findUni(id) {
  let u = state.liked.find(x => x.id === id) || state.deck.find(x => x.id === id);
  if (u) return u;
  const base = UNIVERSITIES.find(x => x.id === id);
  if (!base) return null;
  return { ...base, _match: matchScore(base, state.profile), _reality: admissionReality(base, state.profile) };
}

function renderUniversityDetail() {
  const u = findUni(state.currentUniId);
  if (!u) { go('discover'); return; }
  const p = state.profile;
  const tabs = [['overview', 'Overview'], ['academics', 'Academics'], ['cost', 'Cost & Aid'], ['why', t('why_title')]];

  let tabContent = '';
  if (state.activeTab === 'overview') {
    tabContent = `
      <div class="info-block reveal">
        <h4>${t('snapshot')}</h4>
        <div class="kv-grid">
          <div class="kv"><div class="k">${t('location_kv')}</div><div class="v">${u.city}, ${u.country}</div></div>
          <div class="kv"><div class="k">${t('setting_kv')}</div><div class="v">${u.setting}</div></div>
          <div class="kv"><div class="k">${t('size_kv')}</div><div class="v">${u.size}</div></div>
          <div class="kv"><div class="k">${t('climate_kv')}</div><div class="v">${u.climate}</div></div>
          <div class="kv"><div class="k">${t('acceptance_kv')}</div><div class="v">${Math.round(u.acceptance * 100)}%</div></div>
          <div class="kv"><div class="k">${t('cs_index_kv')}</div><div class="v">${u.cs}/100</div></div>
        </div>
      </div>
      <div class="info-block reveal"><h4>${t('tags_title')}</h4><div class="tag-row">${u.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div></div>`;
  } else if (state.activeTab === 'academics') {
    tabContent = `
      <div class="info-block reveal">
        <h4>${t('cs_program_title')}</h4>
        <div class="bar-row"><div class="top"><span>${t('cs_strength_kv')}</span><b>${u.cs}/100</b></div><div class="bar-track"><div class="bar-fill" style="width:${u.cs}%"></div></div></div>
        <div class="bar-row"><div class="top"><span>${t('research_opp_kv')}</span><b>${u.research}/5</b></div><div class="bar-track"><div class="bar-fill" style="width:${u.research * 20}%"></div></div></div>
      </div>
      <div class="info-block reveal">
        <h4>${t('admission_reality_title')}</h4>
        <p style="font-size:13.5px;color:var(--ink-soft);margin:0 0 10px;">${t('admission_reality_body', u.gpa25, u.gpa75, u.sat25, u.sat75)}</p>
        <span class="badge badge-${u._reality}" style="font-size:13px;padding:8px 16px;">${u._reality}</span>
      </div>`;
  } else if (state.activeTab === 'cost') {
    const afterAid = Math.round(u.cost * 0.75);
    tabContent = `
      <div class="info-block reveal">
        <h4>${t('annual_cost_title')}</h4>
        <div class="kv-grid">
          <div class="kv"><div class="k">${t('sticker_kv')}</div><div class="v">${fmtMoney(u.cost)}</div></div>
          <div class="kv"><div class="k">${t('est_aid_kv')}</div><div class="v">${fmtMoney(afterAid)}</div></div>
          <div class="kv"><div class="k">${t('your_budget_kv')}</div><div class="v">${fmtMoney(p.budget)}</div></div>
          <div class="kv"><div class="k">${t('fits_budget_kv')}</div><div class="v">${afterAid <= p.budget ? t('fits_yes') : t('fits_tight')}</div></div>
        </div>
      </div>
      <div class="info-block reveal">
        <h4>${t('aid_options_title')}</h4>
        <div class="kv-grid" style="margin-bottom:12px;">
          <div class="kv"><div class="k">${t('aid_level_kv')}</div><div class="v">${u.aid.level}</div></div>
          <div class="kv"><div class="k">${t('merit_kv')}</div><div class="v">${u.aid.merit ? t('fits_yes') : '—'}</div></div>
        </div>
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.5;margin:0;">🎓 ${u.aid.note}</p>
      </div>`;
  } else {
    const reasons = buildWhyReasons(u, p);
    tabContent = `<div class="info-block reveal"><h4>${t('why_title')}</h4><ul class="reason-list">${reasons.map(r => `<li>${ICONS.check}${r}</li>`).join('')}</ul></div>`;
  }

  document.getElementById('content').innerHTML = `
    <div class="uni-hero" style="${cardPhotoStyle(u)}">
      <button class="back-btn" onclick="go('${state.liked.find(x => x.id === u.id) ? 'matches' : 'discover'}')">${ICONS.back} ${t('back_btn')}</button>
      <h2>${u.name}</h2>
      <div class="loc">📍 ${u.city}, ${u.country}</div>
    </div>
    <div class="tabs">${tabs.map(([id, label]) => `<button class="tab-btn ${state.activeTab === id ? 'active' : ''}" onclick="setUniTab('${id}')">${label}</button>`).join('')}</div>
    <div class="detail-grid">
      <div>${tabContent}</div>
      <div>
        <div class="info-block big-score-card reveal">
          <div class="v">${u._match}%</div>
          <div class="l">${t('match_pref')}</div>
          <div style="margin-top:14px;"><span class="badge badge-${u._reality}">${u._reality} · ${t('admission_diff')}</span></div>
          <div class="savebtn-row">
            <button class="icon-btn" onclick="toggleLike(${u.id})">${ICONS.heart} ${state.liked.find(x => x.id === u.id) ? t('in_matches_btn') : t('save_btn')}</button>
            <button class="icon-btn" onclick="toast(t('link_copied'))">${ICONS.share} ${t('share_btn')}</button>
          </div>
        </div>
        <div class="info-block reveal">
          <h4>${t('match_breakdown')}</h4>
          ${matchBreakdown(u, p).map(b => `<div class="bar-row"><div class="top"><span>${b.label}</span><b>${b.val}%</b></div><div class="bar-track"><div class="bar-fill" style="width:${b.val}%"></div></div></div>`).join('')}
        </div>
      </div>
    </div>`;
  initScrollReveal();
}

function matchBreakdown(u, p) {
  let locFit;
  if (!p.setting && !p.climate) locFit = 60;
  else locFit = ((p.setting && u.setting === p.setting) ? 55 : 0) + ((p.climate && u.climate === p.climate) ? 45 : 0);
  const costRatio = p.budget > 0 ? u.cost / p.budget : 1;
  const costFit = Math.round((costRatio <= 1 ? 1 : Math.max(0, 1 - (costRatio - 1) * 0.8)) * 100);
  const researchFit = Math.round(Math.max(0, 1 - Math.abs(u.research - p.research) / 5) * 100);
  let aidFit = 70;
  if (p.needsAid === true) { aidFit = Math.round(({ High: 1, Medium: 0.6, Low: 0.25 }[u.aid.level] ?? 0.5) * 100); }
  const rows = [
    { label: 'CS Fit', val: u.cs },
    { label: 'Location Fit', val: Math.min(100, locFit) },
    { label: 'Cost Fit', val: costFit },
    { label: 'Research Fit', val: researchFit }
  ];
  if (p.needsAid === true) rows.push({ label: 'Aid Fit', val: aidFit });
  return rows;
}

function buildWhyReasons(u, p) {
  const reasons = [];
  if (u.cs >= 90) reasons.push(t('why_cs', u.cs));
  if (p.setting && u.setting === p.setting) reasons.push(t('why_setting', u.setting));
  if (p.climate && u.climate === p.climate) reasons.push(t('why_climate', u.climate));
  if (u.research >= 4) reasons.push(t('why_research', u.research));
  if (u.cost <= p.budget) reasons.push(t('why_cost'));
  if (p.needsAid === true && (u.aid.level === 'High' || u.aid.merit)) reasons.push(`${t('scholarship_label')}: ${u.aid.note}`);
  if (reasons.length < 3) reasons.push(t('why_generic'));
  return reasons.slice(0, 5);
}

function setUniTab(id) { state.activeTab = id; renderUniversityDetail(); }
async function toggleLike(id) {
  const idx = state.liked.findIndex(x => x.id === id);
  try {
    if (idx > -1) {
      await apiDeleteSwipe(state.userId, id); // DELETE — убирает свайп из истории, вуз снова может попасть в deck
      state.liked.splice(idx, 1);
      toast(t('removed_from_matches'));
    } else {
      await apiPostSwipe(state.userId, id, true);
      const u = findUni(id);
      state.liked.push(u);
      toast(t('added_to_matches_short'));
    }
  } catch (e) {
    return; // ошибка уже показана тостом внутри apiRequest, локальный state не трогаем
  }
  renderUniversityDetail();
}

/* ============================================================
   UNIVERSITY DNA
   ============================================================ */
function computeDNA() {
  const liked = state.liked;
  if (liked.length === 0) {
    return { cs: 50, coastal: 50, research: 50, urban: 50, costSensitive: 50, warm: 50 };
  }
  const n = liked.length;
  const pct = (fn) => Math.round(100 * liked.filter(fn).length / n);
  return {
    cs: Math.round(liked.reduce((s, u) => s + u.cs, 0) / n),
    coastal: pct(u => u.setting === 'Coastal'),
    research: Math.round(liked.reduce((s, u) => s + u.research, 0) / n * 20),
    urban: pct(u => u.setting === 'Urban'),
    costSensitive: Math.round(100 - Math.min(100, (liked.reduce((s, u) => s + u.cost, 0) / n) / 700)),
    warm: pct(u => u.climate === 'Warm')
  };
}

function renderRadar(dna) {
  const axes = [
    { k: 'cs', label: 'CS-focused' }, { k: 'coastal', label: 'Coastal' }, { k: 'research', label: 'Research' },
    { k: 'urban', label: 'Urban' }, { k: 'costSensitive', label: 'Cost-sensitive' }, { k: 'warm', label: 'Warm climate' }
  ];
  const cx = 170, cy = 170, R = 130;
  const n = axes.length;
  function pt(i, val) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const r = (val / 100) * R;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  }
  const poly = axes.map((a, i) => pt(i, dna[a.k]).join(',')).join(' ');
  let rings = [0.25, 0.5, 0.75, 1].map(f => {
    const p = axes.map((a, i) => pt(i, f * 100).join(',')).join(' ');
    return `<polygon points="${p}" fill="none" stroke="#E7E7F1" stroke-width="1"/>`;
  }).join('');
  let spokes = axes.map((a, i) => {
    const [x, y] = pt(i, 100);
    return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#E7E7F1" stroke-width="1"/>`;
  }).join('');
  let labels = axes.map((a, i) => {
    const [x, y] = pt(i, 122);
    return `<text x="${x}" y="${y}" text-anchor="middle" font-size="11" font-weight="700" fill="#5C6570" font-family="IBM Plex Sans">${a.label}</text>`;
  }).join('');
  let dots = axes.map((a, i) => {
    const [x, y] = pt(i, dna[a.k]);
    return `<circle cx="${x}" cy="${y}" r="4" fill="#1D6B63"/>`;
  }).join('');
  return `<svg viewBox="0 0 340 340" style="width:100%;max-width:340px;display:block;margin:0 auto;">
    ${rings}${spokes}
    <polygon points="${poly}" fill="rgba(29,107,99,0.18)" stroke="#1D6B63" stroke-width="2.5"/>
    ${dots}${labels}
  </svg>`;
}

function renderDNA() {
  const dna = computeDNA();
  const liked = state.liked;
  document.getElementById('content').innerHTML = `
    <div class="content-header">
      <div><h1 class="content-title">${t('dna_title')}</h1><p class="content-sub">${t('dna_sub', liked.length)}</p></div>
    </div>
    ${liked.length > 0 ? renderGuestBanner() : ''}
    <div class="stat-tiles">
      <div class="stat-tile reveal"><div class="v">${liked.length}</div><div class="l">${t('dna_liked')}</div></div>
      <div class="stat-tile reveal"><div class="v">${state.disliked.length}</div><div class="l">${t('dna_passed')}</div></div>
      <div class="stat-tile reveal"><div class="v">${liked.length ? Math.round(liked.reduce((s, u) => s + u._match, 0) / liked.length) : 0}%</div><div class="l">${t('dna_avg')}</div></div>
    </div>
    <div class="dna-layout">
      <div class="dna-card reveal">
        <h4 style="font-family:var(--font-display);margin:0 0 4px;">${t('dna_profile_title')}</h4>
        <p class="list-caption" style="margin:0 0 10px;">${t('dna_profile_sub')}</p>
        ${renderRadar(dna)}
        <div class="dna-legend">
          ${Object.entries({ 'CS-focused': dna.cs, 'Coastal': dna.coastal, 'Research': dna.research, 'Urban': dna.urban, 'Cost-sensitive': dna.costSensitive, 'Warm climate': dna.warm }).map(([k, v]) => `<span class="item">${k}: ${v}%</span>`).join('')}
        </div>
        <button class="icon-btn" style="margin-top:16px;" onclick="toast(t('dna_share_toast'))">${ICONS.share} ${t('dna_share')}</button>
      </div>
      <div class="dna-card reveal">
        <h4 style="font-family:var(--font-display);margin:0 0 12px;">${t('dna_what_title')}</h4>
        <p style="font-size:13.5px;color:var(--ink-soft);line-height:1.6;">${t('dna_what_p1')}</p>
        <p style="font-size:13.5px;color:var(--ink-soft);line-height:1.6;">${t('dna_what_p2')}</p>
      </div>
    </div>`;
  initScrollReveal();
}

/* ============================================================
   INIT
   ============================================================ */
(async function init() {
  // Локальная сессия теперь хранит только {userId, guestId, lang} — сам профиль,
  // свайпы и лайки каждый раз подтягиваются с бэкенда, а не копируются в localStorage.
  const saved = loadGuestSession();

  if (saved && saved.userId) {
    state.lang = saved.lang || 'ru';
    try {
      // 1) профиль — источник истины теперь GET /users/{id}, а не localStorage
      const user = await apiFetchUser(saved.userId);
      state.userId = saved.userId;
      state.guestId = user.guestId;
      state.isRegistered = user.isRegistered;
      state.email = user.email;
      state.lang = user.lang || state.lang;
      state.profile = Object.assign(state.profile, user.profile);
      state.obMajorCategory = findMajorCategory(state.profile.major);

      // 2) уже лайкнутые вузы — GET /users/{id}/matches (нужны для экранов Matches/DNA)
      const matches = await apiFetchMatches(state.userId);
      state.liked = matches.map(fromApiUni);

      // 3) сама подборка на сегодня — GET /universities?user_id= (уже без свайпнутых)
      await buildDeck();

      document.getElementById('landing').classList.add('hidden');
      document.getElementById('onboarding').classList.add('hidden');
      document.getElementById('mainapp').classList.remove('hidden');
      state.screen = 'discover';
      renderApp();
      return;
    } catch (e) {
      // Бэкенд недоступен или userId на сервере больше не существует (например, БД
      // пересоздали) — тихо откатываемся на онбординг вместо зависшего белого экрана.
      try { localStorage.removeItem(GUEST_KEY); } catch (e2) { }
    }
  }

  state.guestId = (saved && saved.guestId) || generateGuestId();
  state.lang = (saved && saved.lang) || 'ru';
  renderLanding();
})();
