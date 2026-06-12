# Portfolio Website - Kompletny Przewodnik

## Struktura Projektu

Strona portfolio zbudowana jest z React, TypeScript, Vite, Tailwind CSS i Supabase.

### Organizacja plików

```
src/
├── components/           # Komponenty UI
│   ├── Navigation.tsx    # Nawigacja i theme toggle
│   ├── Hero.tsx          # Sekcja główna
│   ├── About.tsx         # O mnie
│   ├── Skills.tsx        # Umiejętności
│   ├── Projects.tsx      # Projekty
│   ├── Blog.tsx          # Blog
│   ├── Contact.tsx       # Kontakt
│   └── Footer.tsx        # Stopka
├── contexts/
│   └── ThemeContext.tsx  # Dark/Light mode
├── lib/
│   └── supabase.ts       # Konfiguracja Supabase
├── App.tsx              # Główny komponent
├── main.tsx             # Entry point
└── index.css            # Style globalne
```

## Sekcje Strony

### 1. Navigation (Nawigacja)
- Responsywna nawigacja z mobile menu
- Toggle Dark/Light mode
- Smooth scrolling do sekcji
- Fixed position z backdrop blur

### 2. Hero (Strona główna)
- Duży nagłówek z imieniem
- Opis zawodu i zainteresowań
- Ikony społeczności (GitHub, LinkedIn, Email)
- Animowany przycisk scroll down

### 3. About (O mnie)
- Opis osobisty
- Karty z głównym zainteresowaniami
- Responsive grid layout

### 4. Skills (Umiejętności)
- 6 kategorii umiejętności
- Kolorowe badge'i dla każdej technologii
- Ikonki reprezentujące kategorie
- Hover effects

### 5. Projects (Projekty)
- 6 projektów z obrazkami
- Karty z opisem, tech stack
- Linki do GitHub i live demo
- Hover animations

### 6. Blog (Blog)
- Automatyczne pobieranie postów z Supabase
- Karty artykułów z cover image
- Tagi, czas czytania
- Data publikacji

### 7. Contact (Kontakt)
- Formularz kontaktowy
- Linki do kontaktu (email, LinkedIn, GitHub)
- Wysyłanie przez mailto

### 8. Footer
- Copyright info
- Tech stack

## Funkcjonalności

### Dark/Light Mode
- Przełączanie dostępne w nawigacji
- Ustawienia przechowywane w localStorage
- Smooth transitions między trybami
- Obsługuje preferencje systemu

### Blog Integration
- Posty przechowywane w Supabase
- Automatyczne pobieranie postów opublikowanych
- Obrazki cover z URL
- Tagi i czas czytania
- Sortowanie po dacie publikacji

### Responsywny Design
- Mobile first approach
- Breakpointy: sm (640px), md (768px), lg (1024px)
- Mobile menu dla nawigacji
- Optimized images

### Sekcje (ID do linkowania)
- #hero
- #about
- #skills
- #projects
- #blog
- #contact

## Dodawanie Artykułów do Bloga

### Via SQL
```sql
INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, tags, read_time, published, published_at)
VALUES (
  'Tytuł artykułu',
  'slug-artykulu',
  'Krótka opisek',
  'Pełna treść w Markdown/HTML',
  'https://url-do-obrazka.jpg',
  ARRAY['tag1', 'tag2'],
  10,
  true,
  now()
);
```

### Wymagane pola:
- `title`: Tytuł artykułu
- `slug`: URL-friendly version (bez spacji, małe litery)
- `excerpt`: Krótki opis (1-2 zdania)
- `content`: Pełna treść
- `cover_image`: URL do obrazu (zalecany rozmiar: 1200x600px)
- `tags`: Array tagów
- `read_time`: Szacunkowy czas czytania w minutach
- `published`: true/false
- `published_at`: Data publikacji

## Customizacja

### Kolory
Projekt używa Tailwind CSS z kolorami:
- Primary: Blue (blue-600, dark:blue-400)
- Neutral: Gray
- Accents: Cyan, Green, Rose, Amber, Emerald

Zmień w komponencie lub tailwind.config.js

### Tekst
Wszystkie teksty są po polsku w komponentach. Aby zmienić:
1. Edytuj tekst w odpowiadających komponentach
2. W Blog.tsx zmień etykiety dat i czasów

### Social Links
W Hero.tsx i Contact.tsx zmień URLs:
- GitHub: https://github.com/milekv
- LinkedIn: link do profilu
- Email: miloszk.kontakt@gmail.com

### Projekty
Edytuj array `projects` w Projects.tsx aby dodać/zmienić projekty

### Umiejętności
Edytuj array `skillCategories` w Skills.tsx

## SEO Optymalizacja

Zoptymalizowano dla SEO:
- Meta tags (description, keywords, author)
- Open Graph tags (og:title, og:image, etc.)
- Twitter Card
- Proper heading hierarchy (H1, H2, H3)
- Semantic HTML
- Alt text dla obrazów
- Structured data ready

Meta tags znajdują się w `index.html`

## Deployment

### Build
```bash
npm run build
```

Wynik w `dist/` folder

### Hosting opcje
- Vercel
- Netlify
- GitHub Pages
- Any static host

### Zmienne środowiska
Wymagane w `.env`:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

## Performance

- Optimized images (Pexels)
- Code splitting (Vite)
- CSS minification
- JavaScript bundling
- Lazy loading komponenty

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Alt text dla obrazów
- Form labels

## Utrzymanie

### Update zależności
```bash
npm install
npm update
```

### Linting
```bash
npm run lint
```

### Type checking
```bash
npm run typecheck
```

## Troubleshooting

### Blog posty nie się ładują
- Sprawdź czy Supabase jest skonfigurowany
- Weryfikuj czy posty mają `published: true`
- Check console dla błędów

### Dark mode nie działa
- Sprawdź localStorage w devtools
- Resetuj cache przeglądarki

### Style nie się ładują
- Sprawdź czy Tailwind CSS jest zainstalowany
- `npm install`
- Zrestartuj dev server

## Wsparcie

Strona jest w pełni responsywna i gotowa do produkcji.
Wszystkie komponenty są modułowe i łatwe do modyfikacji.

Powodzenia!
