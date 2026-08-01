# LUXORA — «Будущее существует здесь»

Флагманский сайт вымышленной лаборатории живой материи и интеллекта LUXORA. Построен как демонстрация Awwwards-уровня: 3D-сцены на Three.js/R3F, шейдерный сигнатурный объект CORE, пиновый и горизонтальный скролл на GSAP, плавный скролл на Lenis, магнитные интерфейсы, кастомный курсор, локальный AI-ассистент AETHER, полная мультиязычность RU/EN, тёмная/светлая тема, SEO и доступность.

## Стек

- **Next.js 14 (App Router) + TypeScript** — SSR, метаданные, sitemap
- **Tailwind CSS** — токенизированная дизайн-система (см. `tailwind.config.ts`)
- **Three.js / React Three Fiber / drei / postprocessing** — 3D-сцена CORE, bloom, шум, виньетка
- **Кастомные GLSL-шейдеры** (`shaders/core.ts`) — жидкометаллическая поверхность на симплекс-шуме
- **GSAP + ScrollTrigger** — пиновый сторителлинг (Tech) и горизонтальный скролл (Products)
- **Framer Motion** — микровзаимодействия, scroll-reveal, магнитные кнопки
- **Lenis** — инерционный плавный скролл, синхронизированный с GSAP ticker
- **Zustand** — глобальное состояние (тема, язык, курсор, чат)

## Архитектура

```
app/
  layout.tsx        # шрифты, метаданные SEO, провайдеры
  page.tsx           # сборка секций
  globals.css         # дизайн-токены, стекло, курсор, доступность
  sitemap.ts
components/
  Header.tsx, Footer.tsx, CustomCursor.tsx, SmoothScrollProvider.tsx, ThemeInit.tsx
  three/CoreScene.tsx        # сигнатурный 3D-объект CORE (4 стадии формы)
  sections/                  # Hero, About, Tech, AISection, Products, Gallery, Team, Blog, Careers, Pricing, Contact
  ui/MagneticButton.tsx, ui/AIChat.tsx
lib/
  content.ts   # полный двуязычный (RU/EN) словарь контента — без lorem ipsum
  store.ts     # zustand store
  utils.ts
shaders/core.ts  # вершинный и фрагментный шейдеры CORE
```

## Сигнатурный элемент

Объект **CORE** — единая 3D-сущность (icosahedron + шум displacement), которая проходит через 4 состояния по мере скролла: зерно-сфера (About) → полное ядро (Hero) → расщеплённое активное состояние (Tech) → растворение в частицы (Footer). Это визуальная нить, которая держит сторителлинг сайта.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Доступность и производительность

- `prefers-reduced-motion` отключает шум, зерно и инерцию скролла
- Видимый `:focus-visible` для клавиатурной навигации
- 3D-сцены загружаются `dynamic(..., { ssr: false })`, курсор скрывается на touch-устройствах
- Семантическая разметка (`nav`, `main`, `footer`, `aria-live`, `aria-expanded`)
