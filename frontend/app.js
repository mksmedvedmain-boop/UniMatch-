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
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1H9.5v-6h5v6H17.5a1 1 0 0 0 1-1v-9"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18 6l-1.7 1.7M7.7 16.3 6 18M18 18l-1.7-1.7M7.7 7.7 6 6"/></svg>',
  sigma: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4H6l6 8-6 8h12"/></svg>',
  barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
  heartPulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 11h3l1.6-3.2L11 14l1.7-4.6L14 11h6.5"/><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" opacity=".4"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5Z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5Z"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 21h10M5 7h5M14 7h5M5 7 2.5 12a2.5 2.5 0 0 0 5 0Zm14 0-2.5 5a2.5 2.5 0 0 0 5 0Z"/></svg>',
  graduation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z"/><path d="M6 10.8v4.3c0 1.4 2.7 2.9 6 2.9s6-1.5 6-2.9v-4.3M22 8.5v6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.5-6.3M21 12a9 9 0 0 1-15.5 6.3"/><path d="M18.5 2v4.2h-4.2M5.5 22v-4.2h4.2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 15.2c.5.9 1.4 1.3 2.5 1.3 1.7 0 2.8-.9 2.8-2.1 0-3-5.6-1.4-5.6-4.2 0-1.2 1.1-2.1 2.8-2.1 1.1 0 2 .4 2.5 1.3M12 6.3v1.7M12 16v1.7"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12.5 6 9l4 3-1.5 1.5a1.4 1.4 0 0 0 2 2L14 12l3 3M22 12.5 18 9l-4 3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="1.5"/><path d="M7.5 10.5V7a4.5 4.5 0 0 1 8.3-2.4"/></svg>',
  lockClosed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="1.5"/><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5"/></svg>',
  undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h9a6 6 0 0 1 0 12h-2"/><path d="M8 5 4 10l4 5"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16M13 5l7 7-7 7"/></svg>'
};

const GRADIENTS = [
  'linear-gradient(135deg,#1B2A4A,#34496F)', 'linear-gradient(135deg,#8B3FD1,#B06FE8)',
  'linear-gradient(135deg,#2F5233,#4C7A52)', 'linear-gradient(135deg,#96702F,#C0954E)',
  'linear-gradient(135deg,#3A5068,#5A7794)', 'linear-gradient(135deg,#1F5E5A,#3A8B84)',
  'linear-gradient(135deg,#5C2A4D,#82446F)', 'linear-gradient(135deg,#2B3245,#4A536B)'
];

const MAJOR_CATEGORIES = [
  {
    key: 'cs', label: 'Computer Science & Technology', icon: 'laptop', majors: [
      { value: 'Computer Science' },
      { value: 'Artificial Intelligence / Machine Learning' },
      { value: 'Data Science' },
      { value: 'Software Engineering' },
      { value: 'Computer Engineering' },
      { value: 'Cybersecurity' },
      { value: 'Information Systems / IT' },
      { value: 'Robotics' },
      { value: 'Game Development' },
      { value: 'Human-Computer Interaction' }
    ]
  },
  {
    key: 'eng', label: 'Engineering', icon: 'gear', majors: [
      { value: 'Mechanical Engineering' },
      { value: 'Electrical Engineering' },
      { value: 'Civil Engineering' },
      { value: 'Chemical Engineering' },
      { value: 'Aerospace Engineering' },
      { value: 'Biomedical Engineering' },
      { value: 'Industrial Engineering' },
      { value: 'Environmental Engineering' }
    ]
  },
  {
    key: 'math', label: 'Mathematics & Natural Sciences', icon: 'sigma', majors: [
      { value: 'Mathematics' },
      { value: 'Statistics' },
      { value: 'Physics' },
      { value: 'Chemistry' },
      { value: 'Biology' },
      { value: 'Astronomy' },
      { value: 'Environmental Science' }
    ]
  },
  {
    key: 'biz', label: 'Business & Economics', icon: 'barChart', majors: [
      { value: 'Business Administration' },
      { value: 'Economics' },
      { value: 'Finance' },
      { value: 'Accounting' },
      { value: 'Marketing' },
      { value: 'Business Analytics' },
      { value: 'Entrepreneurship' },
      { value: 'International Business' }
    ]
  },
  {
    key: 'social', label: 'Social Sciences', icon: 'compass', majors: [
      { value: 'Psychology' },
      { value: 'Political Science' },
      { value: 'Sociology' },
      { value: 'International Relations' },
      { value: 'Public Policy' },
      { value: 'Anthropology' }
    ]
  },
  {
    key: 'health', label: 'Life Sciences & Health', icon: 'heartPulse', majors: [
      { value: 'Pre-Med / Biology' },
      { value: 'Neuroscience' },
      { value: 'Biotechnology' },
      { value: 'Public Health' },
      { value: 'Nursing' }
    ]
  },
  {
    key: 'humanities', label: 'Humanities & Arts', icon: 'book', majors: [
      { value: 'History' },
      { value: 'Philosophy' },
      { value: 'English Literature' },
      { value: 'Linguistics' },
      { value: 'Architecture' },
      { value: 'Graphic Design' },
      { value: 'Film Studies' },
      { value: 'Music' }
    ]
  },
  {
    key: 'law', label: 'Law & Government', icon: 'scale', majors: [
      { value: 'Pre-Law' },
      { value: 'Criminal Justice' }
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
    fits_budget_kv: "Укладывается в бюджет?", fits_yes: "Да", fits_tight: "Впритык",
    aid_options_title: "Финансовая помощь и стипендии", aid_level_kv: "Щедрость aid", merit_kv: "Merit-стипендии",
    why_title: "Почему этот университет?",

    /* ===== LANDING ===== */
    nav_how: "Как это работает", nav_why: "Почему мы", nav_pricing: "Бесплатно",
    nav_cta: "Начать бесплатно",
    hero_title: "Найди университет, который реально тебе подходит.",
    hero_sub: "UniMatch — это свайпы вместо тысячи вкладок. Match Score показывает, насколько вуз совпадает с твоим вкусом. Admission Reality честно считает шансы на поступление по твоим GPA/SAT/ACT/IELTS.",
    hero_cta_primary: "Найти свой вуз →",
    hero_cta_secondary: "Как это работает",
    hero_stat1_v: "12,000+", hero_stat1_l: "программ в базе",
    hero_stat2_v: "0 ₽", hero_stat2_l: "бесплатно навсегда",
    hero_stat3_v: "4 мин", hero_stat3_l: "на первую подборку",
    hero_card_match: "Match Score", hero_card_reality: "Admission Reality",

    pain_title: "Никто не готовит тебя к тому, насколько это на самом деле стрессово.",
    pain_body: "Ещё до вопроса «какой университет» есть вопрос сложнее и тише: а что вообще изучать? Дальше только хуже — десятки вкладок, противоречивые советы, дедлайны, о которых узнаёшь слишком поздно, и постоянная тревога, что ты сейчас совершишь дорогую и необратимую ошибку — и некому это перепроверить.",
    pain1_title: "«Я даже не знаю, что изучать»",
    pain1_body: "Большинство начинают поиск ещё до того, как определились с направлением — а любой сервис исходит из того, что оно уже выбрано.",
    pain2_title: "«Не знаю, с чего вообще начать»",
    pain2_body: "Тысячи программ, десятки стран, и у каждого источника — свой совет, без единого способа понять, кому верить.",
    pain3_title: "«А если я ошибусь?»",
    pain3_body: "Это решение определяет несколько лет жизни и много денег — а большинство принимает его со строкой поиска и догадкой.",
    pain_footer: "Это не твоя личная неудача — так и должно быть, когда у одного из главных решений в жизни нет своего места. Именно этот разрыв и закрывает UniMatch.",

    how_title: "Четыре шага до подборки, которая реально подходит.",
    how1_title: "Расскажи о себе", how1_body: "GPA, баллы тестов, специальность, бюджет и то, какой опыт ты ищешь — без сотни чекбоксов.",
    how2_title: "Мы считаем два числа отдельно", how2_body: "Match Score — насколько вуз в твоём вкусе. Admission Reality — насколько реалистично туда поступить. Это разные вопросы, и мы не путаем их друг с другом.",
    how3_title: "Свайпай и уточняй", how3_body: "Каждый свайп обучает твой профиль — University DNA становится точнее с каждым решением.",
    how4_title: "Получи подборку, а не список из 50", how4_body: "Не гигантская таблица для скроллинга, а компактный список вузов, которые реально стоит рассмотреть.",

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
    fits_budget_kv: "Fits budget?", fits_yes: "Yes", fits_tight: "Tight",
    aid_options_title: "Aid & Scholarships", aid_level_kv: "Aid generosity", merit_kv: "Merit scholarships",
    why_title: "Why this university?",

    /* ===== LANDING ===== */
    nav_how: "How it works", nav_why: "Why us", nav_pricing: "Free",
    nav_cta: "Get started free",
    hero_title: "Find a university that actually fits you.",
    hero_sub: "UniMatch turns a hundred open tabs into a swipe. Match Score shows how well a school fits your taste. Admission Reality shows, honestly, how realistic getting in is for your GPA/SAT/ACT/IELTS.",
    hero_cta_primary: "Find your fit →",
    hero_cta_secondary: "See how it works",
    hero_stat1_v: "12,000+", hero_stat1_l: "programs in the database",
    hero_stat2_v: "$0", hero_stat2_l: "free, permanently",
    hero_stat3_v: "4 min", hero_stat3_l: "to your first shortlist",
    hero_card_match: "Match Score", hero_card_reality: "Admission Reality",

    pain_title: "Nobody prepares you for how stressful this actually is.",
    pain_body: "Long before \"which university,\" there's a harder, quieter question: what do I even want to study? Then it compounds — dozens of tabs, conflicting advice, deadlines you find out about too late, and the constant worry that you're about to make an expensive, irreversible mistake with no one to check your work.",
    pain1_title: "\"I don't even know what to study\"",
    pain1_body: "Most students start the search before they've settled on a field — and every tool assumes you already have one.",
    pain2_title: "\"I don't know where to even start\"",
    pain2_body: "Thousands of programs, dozens of countries, every source giving different advice with no way to tell which one to trust.",
    pain3_title: "\"What if I get it wrong?\"",
    pain3_body: "This decision shapes years of your life and a lot of money — and most people make it with a search bar and a guess.",
    pain_footer: "None of that is a personal failure — it's what happens when one of life's biggest decisions has no dedicated place built for it. That's the gap UniMatch exists to close.",

    how_title: "Four steps to a shortlist that actually fits.",
    how1_title: "Tell us about yourself", how1_body: "GPA, test scores, major, budget, and the kind of experience you're looking for — no hundred checkboxes.",
    how2_title: "We score two things, separately", how2_body: "Match Score shows how well a school fits your taste. Admission Reality shows how realistic getting in is. Different questions — never mixed together.",
    how3_title: "Swipe to refine", how3_body: "Every swipe trains your profile — your University DNA gets sharper with every decision.",
    how4_title: "Get a shortlist, not fifty results", how4_body: "Not a giant table to scroll through — a compact list of schools genuinely worth your time.",

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

// Реальное число вузов в каталоге бэкенда (seed_data.py). Держим этот счётчик
// отдельно от локального UNIVERSITIES ниже — тот массив используется только
// для подмешивания фото (см. fromApiUni()) и не обязан 1:1 совпадать с бэкендом.
// Обнови эту цифру, если снова поменяешь количество записей в seed_data.py.
const TOTAL_UNIVERSITIES_COUNT = 200;

const UNIVERSITIES = [
  { id: 1, name: "MIT", city: "Cambridge", country: "USA", continent: "na", cost: 57900, acceptance: 0.04, gpa25: 3.63, gpa75: 3.98, sat25: 1430, sat75: 1580, size: "Medium", setting: "Urban", climate: "Cold", research: 5, cs: 98, tags: ["Elite CS", "Research Powerhouse", "Urban"], aid: { level: "High", merit: false, note: "Meets 100% of demonstrated need, no merit aid" } },
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
              <span class="category-chip-icon">${ICONS[c.icon]}</span><span>${c.label}</span>
            </button>`).join('')}
        </div>
        <div class="major-grid ${(isStepChange || isCategoryChange) ? 'stagger-in' : ''}" style="margin-top:10px;">
          ${(MAJOR_CATEGORIES.find(c => c.key === state.obMajorCategory) || MAJOR_CATEGORIES[0]).majors.map(m => `
            <button type="button" class="major-card ${p.major === m.value ? 'active' : ''}" onclick="setMajor('${m.value}')">
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
    [{ icon: 'graduation', text: 'GPA and test scores only feed Admission Reality — they never affect Match Score.' },
    { icon: 'refresh', text: 'You can change your major later; nothing you enter here is lost.' },
    { icon: 'target', text: 'Bachelor\'s, Master\'s and PhD each surface a different set of universities next.' }],
    [{ icon: 'scale', text: 'These are starting weights — the exact mix adapts to your swipes over time.' },
    { icon: 'coin', text: 'Going over budget doesn\'t exclude a school, it just lowers its Match Score.' },
    { icon: 'handshake', text: '"Not critical" on financial aid is a perfectly fine answer.' }],
    [{ icon: 'globe', text: 'You can pick more than one continent at once.' },
    { icon: 'pin', text: 'Picking countries narrows things further within a continent.' },
    { icon: 'unlock', text: 'Leave it empty if you\'re open to anywhere in the world.' }],
    [{ icon: 'undo', text: 'You can always come back and change any answer later.' },
    { icon: 'arrowRight', text: 'Next comes swiping — every like/dislike fine-tunes your Match Score.' },
    { icon: 'lockClosed', text: 'Guest data is saved automatically; registration is optional.' }],
  ] : [
    [{ icon: 'graduation', text: 'GPA и баллы тестов влияют только на Admission Reality — на Match Score они не влияют.' },
    { icon: 'refresh', text: 'Специальность можно поменять позже — ничего из введённого не пропадёт.' },
    { icon: 'target', text: 'Бакалавриат, магистратура и PhD дальше показывают разные наборы вузов.' }],
    [{ icon: 'scale', text: 'Это стартовые веса — точные пропорции подстроятся под твои свайпы.' },
    { icon: 'coin', text: 'Вуз дороже бюджета не исключается, просто получает Match Score ниже.' },
    { icon: 'handshake', text: '«Не критично» по финансовой помощи — тоже нормальный ответ.' }],
    [{ icon: 'globe', text: 'Можно выбрать сразу несколько континентов.' },
    { icon: 'pin', text: 'Выбор стран сузит подборку внутри континента.' },
    { icon: 'unlock', text: 'Оставь пустым, если готов(а) рассматривать любую страну.' }],
    [{ icon: 'undo', text: 'В любой момент можно вернуться и поменять ответы.' },
    { icon: 'arrowRight', text: 'Дальше — свайпы: лайк/дизлайк уточняют Match Score под тебя.' },
    { icon: 'lockClosed', text: 'Гостевые данные сохраняются сами, регистрация не обязательна.' }],
  ];
  return tipsByStep[s].map(f => `<div class="ob-tip-card"><div class="icon">${ICONS[f.icon]}</div><p>${f.text}</p></div>`).join('');
}

function renderObSideFacts() {
  const facts = state.lang === 'en' ? [
    { icon: 'target', text: 'Preference Match ≠ Admission chances — we show both, separately, honestly.' },
    { icon: 'globe', text: `${TOTAL_UNIVERSITIES_COUNT} universities across ${Object.keys(CONTINENTS).length} continents in this demo.` },
    { icon: 'dna', text: 'Your University DNA sharpens with every swipe — implicit feedback, not just a form.' }
  ] : [
    { icon: 'target', text: 'Preference Match ≠ шансы на поступление — показываем оба честно и раздельно.' },
    { icon: 'globe', text: `${TOTAL_UNIVERSITIES_COUNT} университетов на ${Object.keys(CONTINENTS).length} континентах в этом демо.` },
    { icon: 'dna', text: 'University DNA становится точнее с каждым свайпом — это implicit feedback, а не просто анкета.' }
  ];
  return facts.map(f => `<div class="ob-brand-fact"><div class="icon">${ICONS[f.icon]}</div><p>${f.text}</p></div>`).join('');
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
      <button class="restart-btn" onclick="backToLanding()" style="display:flex;align-items:center;justify-content:center;gap:7px;"><span style="width:14px;height:14px;display:inline-flex;">${ICONS.home}</span>${state.lang === 'ru' ? 'На главную' : 'Home'}</button>
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

/* ---------- Progress-bar / count-up / radar draw-in animations —
   портированы из animation-demo.html: раньше проценты и радар появлялись
   мгновенно, скачком; теперь Match Score "накручивается", бары едут плавно,
   а контур радара DNA дорисовывается, а не появляется весь сразу. ---------- */
function animateBars(root) {
  const bars = (root || document).querySelectorAll('.bar-fill[data-target]');
  bars.forEach(bar => {
    const target = parseFloat(bar.dataset.target) || 0;
    // rAF нужен, чтобы браузер успел отрисовать width:0% до того, как мы
    // поставим целевое значение — иначе CSS transition не увидит перехода.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { bar.style.width = target + '%'; });
    });
  });
}

function animateScoreCounters(root) {
  const nodes = (root || document).querySelectorAll('.score-count[data-target]');
  nodes.forEach(node => {
    const target = parseInt(node.dataset.target, 10) || 0;
    const suffix = node.dataset.suffix !== undefined ? node.dataset.suffix : '%';
    const duration = 900;
    const start = performance.now();
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else node.textContent = target + suffix;
    }
    requestAnimationFrame(frame);
  });
}

function animateRadar(root) {
  const shapes = (root || document).querySelectorAll('.dna-radar-shape');
  shapes.forEach(shape => {
    const len = shape.getTotalLength();
    shape.style.transition = 'none';
    shape.style.strokeDasharray = len;
    shape.style.strokeDashoffset = len;
    shape.style.fillOpacity = 0;
    // форсируем reflow, чтобы браузер зафиксировал стартовое состояние
    // до того, как мы включим transition и подвинем конечные значения
    shape.getBoundingClientRect();
    requestAnimationFrame(() => {
      shape.style.transition = 'stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1), fill-opacity 1.1s ease .25s';
      shape.style.strokeDashoffset = 0;
      shape.style.fillOpacity = 1;
    });
  });
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
          <p class="loc"><span class="loc-icon">${ICONS.pin}</span>${u.city}, ${u.country}</p>
          <div class="tag-row">${u.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
          <div class="card-why">${ICONS.check}<span>${buildWhyReasons(u, state.profile)[0]}</span></div>
          <div class="stat-row">
            <div class="stat"><div class="v">${u._match}%</div><div class="l">Match</div></div>
            <div class="stat"><div class="v">${Math.round(u.acceptance * 100)}%</div><div class="l">Accept rate</div></div>
            <div class="stat"><div class="v">${fmtMoney(u.cost)}</div><div class="l">Cost/yr</div></div>
          </div>
          <div class="card-aid-row"><span class="loc-icon">${ICONS.graduation}</span>${t('scholarship_label')}: ${u.aid.note}</div>
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
          <button class="btn btn-primary mobile-home-btn" onclick="backToLanding()">${ICONS.home} ${state.lang === 'ru' ? 'На главную' : 'Home'}</button>
        </div>
      </div>
      <div class="side-panel">
        <div class="panel-card">
          <h4>${t('your_matches', liked.length)}</h4>
          ${liked.length ? liked.slice(-4).reverse().map(u => `
            <div class="mini-match-row">
              <div class="mini-thumb" style="${cardPhotoStyle(u)}"></div>
              <div class="mini-match-info"><div class="n">${u.name}</div><div class="c">${u.country}</div></div>
              <div class="mini-match-score score-count" data-target="${u._match}">0%</div>
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
  animateScoreCounters(document);
  animateRadar(document);
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
          <div class="match-score-block"><div class="v score-count" data-target="${u._match}">0%</div><div class="l">Match</div></div>
          <span class="badge badge-${u._reality}">${u._reality}</span>
        </div>`).join('')
    }`;
  initScrollReveal();
  animateScoreCounters(document);
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
        <div class="bar-row"><div class="top"><span>${t('cs_strength_kv')}</span><b>${u.cs}/100</b></div><div class="bar-track"><div class="bar-fill" data-target="${u.cs}" style="width:0%"></div></div></div>
        <div class="bar-row"><div class="top"><span>${t('research_opp_kv')}</span><b>${u.research}/5</b></div><div class="bar-track"><div class="bar-fill" data-target="${u.research * 20}" style="width:0%"></div></div></div>
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
        <p style="font-size:13px;color:var(--ink-soft);line-height:1.5;margin:0;display:flex;gap:7px;align-items:flex-start;"><span class="loc-icon" style="margin-top:1px;">${ICONS.graduation}</span>${u.aid.note}</p>
      </div>`;
  } else {
    const reasons = buildWhyReasons(u, p);
    tabContent = `<div class="info-block reveal"><h4>${t('why_title')}</h4><ul class="reason-list">${reasons.map(r => `<li>${ICONS.check}${r}</li>`).join('')}</ul></div>`;
  }

  document.getElementById('content').innerHTML = `
    <div class="uni-hero" style="${cardPhotoStyle(u)}">
      <button class="back-btn" onclick="go('${state.liked.find(x => x.id === u.id) ? 'matches' : 'discover'}')">${ICONS.back} ${t('back_btn')}</button>
      <h2>${u.name}</h2>
      <div class="loc"><span class="loc-icon">${ICONS.pin}</span>${u.city}, ${u.country}</div>
    </div>
    <div class="tabs">${tabs.map(([id, label]) => `<button class="tab-btn ${state.activeTab === id ? 'active' : ''}" onclick="setUniTab('${id}')">${label}</button>`).join('')}</div>
    <div class="detail-grid">
      <div>${tabContent}</div>
      <div>
        <div class="info-block big-score-card reveal">
          <div class="v score-count" data-target="${u._match}">0%</div>
          <div class="l">${t('match_pref')}</div>
          <div style="margin-top:14px;"><span class="badge badge-${u._reality}">${u._reality} · ${t('admission_diff')}</span></div>
          <div class="savebtn-row">
            <button class="icon-btn" onclick="toggleLike(${u.id})">${ICONS.heart} ${state.liked.find(x => x.id === u.id) ? t('in_matches_btn') : t('save_btn')}</button>
            <button class="icon-btn" onclick="toast(t('link_copied'))">${ICONS.share} ${t('share_btn')}</button>
          </div>
        </div>
        <div class="info-block reveal">
          <h4>${t('match_breakdown')}</h4>
          ${matchBreakdown(u, p).map(b => `<div class="bar-row"><div class="top"><span>${b.label}</span><b>${b.val}%</b></div><div class="bar-track"><div class="bar-fill" data-target="${b.val}" style="width:0%"></div></div></div>`).join('')}
        </div>
      </div>
    </div>`;
  initScrollReveal();
  animateBars(document);
  animateScoreCounters(document);
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
    return `<circle class="dna-radar-dot" cx="${x}" cy="${y}" r="4" fill="#1D6B63" style="animation-delay:${1.05 + i * 0.04}s"/>`;
  }).join('');
  return `<svg viewBox="0 0 340 340" style="width:100%;max-width:340px;display:block;margin:0 auto;">
    ${rings}${spokes}
    <polygon class="dna-radar-shape" points="${poly}" fill="rgba(29,107,99,0.18)" stroke="#1D6B63" stroke-width="2.5" stroke-linejoin="round"/>
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
      <div class="stat-tile reveal"><div class="v score-count" data-target="${liked.length}" data-suffix="">0</div><div class="l">${t('dna_liked')}</div></div>
      <div class="stat-tile reveal"><div class="v score-count" data-target="${state.disliked.length}" data-suffix="">0</div><div class="l">${t('dna_passed')}</div></div>
      <div class="stat-tile reveal"><div class="v score-count" data-target="${liked.length ? Math.round(liked.reduce((s, u) => s + u._match, 0) / liked.length) : 0}">0%</div><div class="l">${t('dna_avg')}</div></div>
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
  animateScoreCounters(document);
  animateRadar(document);
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
