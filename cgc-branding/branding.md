# Coffee Growing Community — Brand Guide

**Website:** https://coffeegrowingcommunity.org  
**Tagline:** *"Making life better for those who grow coffee"*  
**Mission:** We work with coffee-farming families to maximize the quality and market value of their coffee, bringing promise of higher economic return for their good work.

---

## Logo

- **File:** `logo.png`
- **Source:** https://coffeegrowingcommunity.org/wp-content/uploads/2025/08/Logo-Header2.png

---

## Color Palette

| Role              | Name           | Hex       |
|-------------------|----------------|-----------|
| Primary           | Forest Green   | `#054F27` |
| CTA / Donate      | Golden Brown   | `#A2812E` |
| Background (dark) | Dark Navy      | `#020D19` |
| Background (light)| Off-White      | `#F8F8F8` |
| Body Text         | Grey           | `#828282` |
| Accent            | Orange         | `#FF6D00` |
| Text on dark bg   | White          | `#FFFFFF` |

---

## Typography

| Usage    | Font Family      |
|----------|-----------------|
| Headings | `Onest, sans-serif` |
| Body     | `Inter, sans-serif` |

**Google Fonts import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700;800&display=swap');
```

---

## CSS Variables

```css
:root {
  /* Colors */
  --color-primary:     #054F27;
  --color-donate:      #A2812E;
  --color-background:  #020D19;
  --color-surface:     #F8F8F8;
  --color-text:        #828282;
  --color-accent:      #FF6D00;
  --color-white:       #FFFFFF;

  /* Typography */
  --font-heading: 'Onest', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

---

## Button Styles

| Button         | Background  | Text    |
|----------------|-------------|---------|
| Partner with us| `#054F27`   | White   |
| Donate         | `#A2812E`   | White   |
