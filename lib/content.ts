export type Locale = "ru" | "en";

export const content = {
  ru: {
    meta: {
      title: "LUXORA — Будущее существует здесь",
      description:
        "LUXORA — лаборатория живой материи и интеллекта. Мы создаём адаптивные сплавы, реагирующие поверхности и системы, которые думают вместе с вами. Добро пожаловать в 2045 год.",
    },
    nav: {
      links: [
        { id: "about", label: "О лаборатории" },
        { id: "tech", label: "Технологии" },
        { id: "ai", label: "Интеллект" },
        { id: "products", label: "Продукты" },
        { id: "gallery", label: "Галерея" },
        { id: "team", label: "Команда" },
        { id: "blog", label: "Журнал" },
        { id: "careers", label: "Карьера" },
        { id: "pricing", label: "Тарифы" },
        { id: "contact", label: "Контакт" },
      ],
      cta: "Запросить доступ",
    },
    hero: {
      eyebrow: "LUXORA / Лаборатория живой материи — основана в 2038",
      title: "Будущее\nсуществует\nздесь",
      subtitle:
        "Мы выращиваем материалы, которые слышат свет и помнят прикосновение. LUXORA CORE — первый сплав с интеллектом внутри, готовый к 2045 году уже сегодня.",
      ctaPrimary: "Войти в лабораторию",
      ctaSecondary: "Смотреть CORE в 3D",
      stats: [
        { value: "0.4мс", label: "отклик материала на касание" },
        { value: "212", label: "запатентованных сплавов" },
        { value: "37", label: "стран внедрения" },
      ],
    },
    about: {
      eyebrow: "О лаборатории",
      title: "Материя, которая учится",
      lead:
        "LUXORA родилась из простого вопроса: что если поверхность может думать? Восемь лет мы совмещаем метаматериалы, фотонику и нейросети, чтобы стереть границу между вычислением и веществом.",
      paragraphs: [
        "Наша штаб-квартира — исследовательский риф в Тиват-Депрессии, подводная лаборатория, где давление и темнота ускоряют кристаллизацию жидкометаллических сплавов. Здесь рождается CORE — субстанция, меняющая жёсткость, температуру и цвет в ответ на данные.",
        "Мы не проектируем объекты. Мы проектируем поведение материи: как стена реагирует на настроение комнаты, как ткань подстраивается под температуру тела, как фасад здания дышит вместе с городом.",
      ],
      pillars: [
        { title: "Метаматериалы", text: "Структуры суб-волновой геометрии, управляющие светом и звуком на уровне решётки." },
        { title: "Жидкий интеллект", text: "Нейросети, встроенные в саму молекулярную структуру, а не в отдельный чип." },
        { title: "Регенерация", text: "Сплавы CORE самовосстанавливаются за счёт управляемой микрокристаллизации." },
      ],
    },
    tech: {
      eyebrow: "Технологии",
      title: "Внутри CORE",
      lead: "Четыре слоя технологии превращают привычную материю в живую систему.",
      stages: [
        {
          title: "Метарешётка",
          text: "Субмикронная фотонная решётка управляет отражением и поглощением света в реальном времени, создавая программируемый цвет без пигментов.",
        },
        {
          title: "Нейроволокно",
          text: "Проводящие волокна толщиной в 40 нанометров формируют распределённую нейросеть прямо внутри сплава — обучение происходит в самом материале.",
        },
        {
          title: "Жидкая память",
          text: "Кристаллическая решётка фиксирует форму под нагрузкой и возвращается в исходное состояние по команде — материал помнит тысячи состояний.",
        },
        {
          title: "Био-синтез",
          text: "Ферментные катализаторы восстанавливают микроповреждения за 6 часов без внешнего вмешательства, продлевая жизненный цикл в 40 раз.",
        },
      ],
    },
    ai: {
      eyebrow: "Интеллект",
      title: "AETHER — разум внутри вещества",
      lead:
        "AETHER — операционная система LUXORA. Она живёт не в облаке, а распределена по кристаллической решётке самого материала, обучаясь на миллиардах микроконтактов в секунду.",
      chat: {
        placeholder: "Спросите AETHER о материалах, внедрении или партнёрстве…",
        greeting:
          "Здравствуйте. Я AETHER, интеллект LUXORA. Спросите меня о свойствах CORE, сроках внедрения или совместимости с вашим проектом.",
        send: "Отправить",
        thinking: "AETHER формирует ответ…",
      },
      capabilities: [
        { title: "Предиктивная адаптация", text: "Материал меняет свойства за 200 мс до фактического изменения нагрузки, опираясь на паттерны поведения." },
        { title: "Распределённое обучение", text: "Каждая инсталляция CORE обучает общую модель, не передавая сырые данные — только веса." },
        { title: "Этичный интеллект", text: "AETHER работает по протоколу прозрачных решений: каждое действие материала объяснимо и логируется." },
      ],
    },
    products: {
      eyebrow: "Продукты",
      title: "Линейка CORE",
      lead: "Один материал, три формы применения — каждая обучена своей среде.",
      items: [
        {
          name: "CORE Architectural",
          tag: "Фасады и интерьеры",
          text: "Панели, регулирующие светопропускание, температуру и акустику здания в реальном времени, снижая энергозатраты на 61%.",
        },
        {
          name: "CORE Mobility",
          tag: "Транспорт",
          text: "Кузовные сплавы, перераспределяющие жёсткость при ударе за 4 миллисекунды — быстрее человеческой реакции в 60 раз.",
        },
        {
          name: "CORE Wear",
          tag: "Персональные устройства",
          text: "Ткань нового поколения, подстраивающая терморегуляцию и посадку под тело и климат, обучаясь привычкам владельца.",
        },
      ],
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Формы CORE",
      lead: "Каждый образец — застывший кадр материала в процессе мышления.",
      items: [
        { title: "Кристаллизация №14", meta: "Тиват-Депрессия, −4200 м" },
        { title: "Фасад «Меридиан»", meta: "Сингапур, инсталляция 2044" },
        { title: "Нейроволокно, увеличение×900", meta: "Лаборатория фотоники" },
        { title: "CORE Wear, прототип VII", meta: "Ателье адаптивных тканей" },
        { title: "Регенерация, кадр 3 из 12", meta: "Био-синтез, 6 часов" },
        { title: "Меморешётка в нагрузке", meta: "Стресс-тест 220 000 циклов" },
      ],
    },
    team: {
      eyebrow: "Команда",
      title: "Те, кто выращивает будущее",
      lead: "Материаловеды, нейроинженеры и художники форм — под одной решёткой.",
      members: [
        { name: "Ирина Валь", role: "Со-основатель, материаловедение", focus: "Метаматериалы и фотонные решётки" },
        { name: "Дэниэл Осей", role: "Со-основатель, нейроинженерия", focus: "Распределённый интеллект AETHER" },
        { name: "Мэй Сюань Чжоу", role: "Директор по биосинтезу", focus: "Самовосстанавливающиеся сплавы" },
        { name: "Ари Бен-Давид", role: "Глава студии формы", focus: "Промышленный и сенсорный дизайн" },
      ],
    },
    blog: {
      eyebrow: "Журнал",
      title: "Записи из лаборатории",
      lead: "Наблюдения, эксперименты и открытые вопросы — без глянца.",
      posts: [
        {
          title: "Почему жёсткость — это не константа, а решение",
          excerpt: "Как CORE выбирает форму отклика на нагрузку в реальном времени и что это значит для архитектуры сейсмозон.",
          date: "14 июля 2046",
          readTime: "6 мин",
        },
        {
          title: "Обучение без данных: распределённые веса AETHER",
          excerpt: "Мы отказались от передачи сырых данных между инсталляциями. Вот как модель учится, оставаясь приватной.",
          date: "2 июня 2046",
          readTime: "9 мин",
        },
        {
          title: "Ошибка кристаллизации №212, и что она нам дала",
          excerpt: "Провальный образец сплава случайно открыл эффект самозалечивания, который сегодня лежит в основе CORE.",
          date: "19 апреля 2046",
          readTime: "5 мин",
        },
      ],
    },
    careers: {
      eyebrow: "Карьера",
      title: "Стройте материю будущего",
      lead: "Мы ищем людей, которым тесно в рамках одной дисциплины.",
      roles: [
        { title: "Инженер фотонных решёток", location: "Тиват-Депрессия / гибрид", type: "Полная занятость" },
        { title: "Исследователь нейроволокна", location: "Сингапур", type: "Полная занятость" },
        { title: "Дизайнер сенсорных интерфейсов", location: "Удалённо", type: "Контракт" },
        { title: "Специалист по био-синтезу", location: "Тиват-Депрессия", type: "Полная занятость" },
      ],
      cta: "Смотреть все позиции",
    },
    pricing: {
      eyebrow: "Тарифы",
      title: "Доступ к CORE",
      lead: "Лицензирование по объёму внедрения — от пилотного образца до промышленной линии.",
      plans: [
        {
          name: "Pilot",
          price: "от 42 000 €",
          period: "за партию",
          description: "Для тестового внедрения в одном объекте или продуктовой линии.",
          features: ["До 40 м² материала CORE", "Базовый профиль AETHER", "Инженерная поддержка 30 дней", "Отчёт по адаптации"],
        },
        {
          name: "Deployment",
          price: "от 310 000 €",
          period: "в год",
          description: "Для компаний, внедряющих CORE в несколько объектов или серийное производство.",
          features: ["До 4 000 м² материала CORE", "Полный профиль AETHER с обучением", "Выделенный инженер LUXORA", "Приоритетный доступ к новым сплавам"],
          featured: true,
        },
        {
          name: "Sovereign",
          price: "по запросу",
          period: "индивидуально",
          description: "Для государственных и инфраструктурных проектов национального масштаба.",
          features: ["Неограниченный объём", "Изолированный контур AETHER", "Совместная R&D-программа", "Присутствие инженеров LUXORA на площадке"],
        },
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Начнём с образца",
      lead: "Расскажите о проекте — инженер LUXORA свяжется в течение 48 часов.",
      form: {
        name: "Имя",
        email: "Электронная почта",
        company: "Компания",
        message: "Расскажите о задаче",
        submit: "Отправить запрос",
        success: "Запрос получен. AETHER уже передал его инженерной команде.",
      },
      address: "Тиват-Депрессия, исследовательский риф LUXORA-1",
      email: "contact@luxora.future",
    },
    footer: {
      tagline: "Будущее существует здесь.",
      rights: "LUXORA Materials Lab. Все права защищены.",
      columns: [
        {
          title: "Лаборатория",
          links: ["О лаборатории", "Технологии", "Интеллект", "Журнал"],
        },
        {
          title: "Компания",
          links: ["Команда", "Карьера", "Контакт", "Партнёрам"],
        },
        {
          title: "Правовое",
          links: ["Конфиденциальность", "Условия использования", "Патенты"],
        },
      ],
    },
    themeToggle: { dark: "Тёмная", light: "Светлая" },
  },
  en: {
    meta: {
      title: "LUXORA — The Future Exists Here",
      description:
        "LUXORA is a living-matter and intelligence laboratory. We grow adaptive alloys, responsive surfaces, and systems that think alongside you. Welcome to 2045.",
    },
    nav: {
      links: [
        { id: "about", label: "About" },
        { id: "tech", label: "Technology" },
        { id: "ai", label: "Intelligence" },
        { id: "products", label: "Products" },
        { id: "gallery", label: "Gallery" },
        { id: "team", label: "Team" },
        { id: "blog", label: "Journal" },
        { id: "careers", label: "Careers" },
        { id: "pricing", label: "Pricing" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Request access",
    },
    hero: {
      eyebrow: "LUXORA / Living Matter Laboratory — founded 2038",
      title: "The future\nexists\nhere",
      subtitle:
        "We grow materials that hear light and remember touch. LUXORA CORE is the first alloy with intelligence inside, ready for 2045 today.",
      ctaPrimary: "Enter the lab",
      ctaSecondary: "See CORE in 3D",
      stats: [
        { value: "0.4ms", label: "material response to touch" },
        { value: "212", label: "patented alloys" },
        { value: "37", label: "countries deployed" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Matter that learns",
      lead:
        "LUXORA began with one question: what if a surface could think? For eight years we've merged metamaterials, photonics, and neural networks to erase the line between computation and substance.",
      paragraphs: [
        "Our headquarters sits on a research reef in the Tivat Depression, an underwater lab where pressure and darkness accelerate the crystallization of liquid-metal alloys. This is where CORE is born — a substance that shifts rigidity, temperature, and color in response to data.",
        "We don't design objects. We design the behavior of matter: how a wall responds to a room's mood, how fabric adapts to body heat, how a building's facade breathes with the city around it.",
      ],
      pillars: [
        { title: "Metamaterials", text: "Sub-wavelength lattice structures that steer light and sound at the grid level." },
        { title: "Liquid intelligence", text: "Neural networks embedded in the molecular structure itself, not in a separate chip." },
        { title: "Regeneration", text: "CORE alloys self-repair through controlled micro-crystallization." },
      ],
    },
    tech: {
      eyebrow: "Technology",
      title: "Inside CORE",
      lead: "Four layers of technology turn ordinary matter into a living system.",
      stages: [
        { title: "Meta-lattice", text: "A sub-micron photonic lattice steers reflection and absorption in real time, producing programmable color without pigment." },
        { title: "Neuro-fiber", text: "Conductive fibers 40 nanometers thick form a distributed neural network inside the alloy itself — learning happens within the material." },
        { title: "Liquid memory", text: "The crystalline lattice locks shape under load and returns to its origin state on command — the material remembers thousands of states." },
        { title: "Bio-synthesis", text: "Enzymatic catalysts repair micro-damage within six hours with no external intervention, extending lifecycle by 40x." },
      ],
    },
    ai: {
      eyebrow: "Intelligence",
      title: "AETHER — a mind inside matter",
      lead: "AETHER is LUXORA's operating intelligence. It doesn't live in the cloud — it's distributed across the material's own crystalline lattice, learning from billions of micro-contacts per second.",
      chat: {
        placeholder: "Ask AETHER about materials, deployment, or partnership…",
        greeting: "Hello. I'm AETHER, LUXORA's intelligence. Ask me about CORE's properties, deployment timelines, or fit for your project.",
        send: "Send",
        thinking: "AETHER is composing a response…",
      },
      capabilities: [
        { title: "Predictive adaptation", text: "The material changes its properties 200ms before an actual load shift, based on behavioral patterns." },
        { title: "Distributed learning", text: "Every CORE installation trains a shared model without transmitting raw data — only weights." },
        { title: "Ethical intelligence", text: "AETHER runs on a transparent-decision protocol: every material action is explainable and logged." },
      ],
    },
    products: {
      eyebrow: "Products",
      title: "The CORE line",
      lead: "One material, three applications — each trained for its own environment.",
      items: [
        { name: "CORE Architectural", tag: "Facades & interiors", text: "Panels that adjust light transmission, temperature, and acoustics in real time, cutting energy use by 61%." },
        { name: "CORE Mobility", tag: "Transportation", text: "Body alloys that redistribute rigidity on impact within 4 milliseconds — 60x faster than human reaction." },
        { name: "CORE Wear", tag: "Personal devices", text: "Next-generation fabric that adapts thermoregulation and fit to body and climate, learning the wearer's habits." },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Forms of CORE",
      lead: "Every sample is a frozen frame of matter mid-thought.",
      items: [
        { title: "Crystallization No.14", meta: "Tivat Depression, −4,200m" },
        { title: "Meridian Facade", meta: "Singapore, 2044 installation" },
        { title: "Neuro-fiber, 900x magnification", meta: "Photonics lab" },
        { title: "CORE Wear, Prototype VII", meta: "Adaptive fabric atelier" },
        { title: "Regeneration, frame 3 of 12", meta: "Bio-synthesis, 6 hours" },
        { title: "Memory lattice under load", meta: "Stress test, 220,000 cycles" },
      ],
    },
    team: {
      eyebrow: "Team",
      title: "Those who grow the future",
      lead: "Materials scientists, neuro-engineers, and form artists — under one lattice.",
      members: [
        { name: "Irina Val", role: "Co-founder, Materials Science", focus: "Metamaterials & photonic lattices" },
        { name: "Daniel Osei", role: "Co-founder, Neuro-engineering", focus: "AETHER distributed intelligence" },
        { name: "Mei Xuan Zhou", role: "Head of Bio-synthesis", focus: "Self-repairing alloys" },
        { name: "Ari Ben-David", role: "Head of Form Studio", focus: "Industrial & sensory design" },
      ],
    },
    blog: {
      eyebrow: "Journal",
      title: "Notes from the lab",
      lead: "Observations, experiments, and open questions — unpolished.",
      posts: [
        { title: "Why rigidity is a decision, not a constant", excerpt: "How CORE chooses its response to load in real time, and what that means for seismic-zone architecture.", date: "July 14, 2046", readTime: "6 min" },
        { title: "Learning without data: AETHER's distributed weights", excerpt: "We stopped transmitting raw data between installations. Here's how the model learns while staying private.", date: "June 2, 2046", readTime: "9 min" },
        { title: "Crystallization failure No.212, and what it gave us", excerpt: "A failed alloy sample accidentally revealed the self-healing effect that now underpins CORE.", date: "April 19, 2046", readTime: "5 min" },
      ],
    },
    careers: {
      eyebrow: "Careers",
      title: "Build the matter of the future",
      lead: "We look for people who outgrow a single discipline.",
      roles: [
        { title: "Photonic Lattice Engineer", location: "Tivat Depression / hybrid", type: "Full-time" },
        { title: "Neuro-fiber Researcher", location: "Singapore", type: "Full-time" },
        { title: "Sensory Interface Designer", location: "Remote", type: "Contract" },
        { title: "Bio-synthesis Specialist", location: "Tivat Depression", type: "Full-time" },
      ],
      cta: "View all positions",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Access to CORE",
      lead: "Licensed by deployment scale — from a pilot sample to a full production line.",
      plans: [
        { name: "Pilot", price: "from €42,000", period: "per batch", description: "For test deployment in a single site or product line.", features: ["Up to 40m² of CORE material", "Base AETHER profile", "30-day engineering support", "Adaptation report"] },
        { name: "Deployment", price: "from €310,000", period: "per year", description: "For companies deploying CORE across multiple sites or serial production.", features: ["Up to 4,000m² of CORE material", "Full trainable AETHER profile", "Dedicated LUXORA engineer", "Priority access to new alloys"], featured: true },
        { name: "Sovereign", price: "on request", period: "custom", description: "For government and infrastructure projects at national scale.", features: ["Unlimited volume", "Isolated AETHER instance", "Joint R&D program", "On-site LUXORA engineers"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's start with a sample",
      lead: "Tell us about your project — a LUXORA engineer will respond within 48 hours.",
      form: { name: "Name", email: "Email", company: "Company", message: "Describe your challenge", submit: "Send request", success: "Request received. AETHER has already routed it to the engineering team." },
      address: "Tivat Depression, LUXORA-1 research reef",
      email: "contact@luxora.future",
    },
    footer: {
      tagline: "The future exists here.",
      rights: "LUXORA Materials Lab. All rights reserved.",
      columns: [
        { title: "Laboratory", links: ["About", "Technology", "Intelligence", "Journal"] },
        { title: "Company", links: ["Team", "Careers", "Contact", "Partners"] },
        { title: "Legal", links: ["Privacy", "Terms of use", "Patents"] },
      ],
    },
    themeToggle: { dark: "Dark", light: "Light" },
  },
} as const;

export type ContentDict = typeof content.ru;
