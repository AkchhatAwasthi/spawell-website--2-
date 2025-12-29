# Quick Guide: How to Add Meta Tags to Therapy Pages

## For Each Therapy Page

Add this at the top of each therapy page file (after imports, before the component):

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "[Therapy Name] - Spa Rituals Kolkata | [Benefit]",
    description: "[Simple description with keywords]. Book at Spa Rituals Kolkata. Call +91 83369 15555!",
};
```

## Copy-Paste Ready Meta Tags

### Hot Stone Therapy
```typescript
export const metadata: Metadata = {
    title: "Hot Stone Massage in Kolkata | Spa Rituals - Relax Muscles & Reduce Pain",
    description: "Hot stone massage at Spa Rituals Kolkata. Warm stones relax muscles, reduce pain, improve blood flow. Expert therapists. Book your session today!",
};
```

### Wine Therapy
```typescript
export const metadata: Metadata = {
    title: "Wine Therapy Massage in Kolkata | Spa Rituals - Anti-Aging Treatment",
    description: "Wine therapy massage at Spa Rituals Kolkata. Anti-aging treatment with wine extracts for glowing skin. Luxury spa experience. Book now!",
};
```

### Couple Massage
```typescript
export const metadata: Metadata = {
    title: "Couple Massage in Kolkata | Spa Rituals - Romantic Spa for Two",
    description: "Couple massage at Spa Rituals Kolkata. Relax together in private room. Perfect for couples, anniversaries, special occasions. Book today!",
};
```

### Four Hands Therapy
```typescript
export const metadata: Metadata = {
    title: "Four Hands Massage in Kolkata | Spa Rituals - Double Relaxation",
    description: "Four hands massage at Spa Rituals Kolkata. Two therapists work together for ultimate relaxation. Unique spa experience. Book your session!",
};
```

### Sports Therapy
```typescript
export const metadata: Metadata = {
    title: "Sports Massage in Kolkata | Spa Rituals - For Athletes & Active People",
    description: "Sports massage therapy at Spa Rituals Kolkata. Muscle recovery, pain relief, better performance. For athletes and active people. Book now!",
};
```

### Crystal Cool Therapy
```typescript
export const metadata: Metadata = {
    title: "Crystal Therapy Massage in Kolkata | Spa Rituals - Natural Healing",
    description: "Crystal therapy massage at Spa Rituals Kolkata. Natural healing with crystals. Reduces stress, balances energy, promotes wellness. Book today!",
};
```

## Where to Add

1. Open the therapy page file (e.g., `hot-stone-therapy/page.tsx`)
2. Find the imports at the top
3. Add: `import type { Metadata } from "next";`
4. After all imports, before `export default function`, add the metadata
5. Save the file

## Example File Structure

```typescript
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import type { Metadata } from "next";  // ← ADD THIS
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ← ADD METADATA HERE
export const metadata: Metadata = {
    title: "Hot Stone Massage in Kolkata | Spa Rituals",
    description: "Hot stone massage therapy at Spa Rituals Kolkata...",
};

export default function HotStoneTherapyPage() {
    // Component code...
}
```

## Important Notes

1. **Title Length:** Keep under 60 characters
2. **Description Length:** Keep under 160 characters
3. **Include:**
   - Service name
   - Location (Kolkata)
   - Main benefit
   - Call-to-action (Book, Call)
4. **Keywords to Use:**
   - Massage, therapy, spa
   - Kolkata
   - Specific benefits (relax, pain relief, etc.)
   - "Book", "Call", "Visit"

## SEO Keywords for Each Therapy

### Hot Stone
- Hot stone massage
- Muscle relaxation
- Pain relief
- Warm stone therapy

### Wine Therapy
- Wine therapy
- Anti-aging
- Skin treatment
- Luxury spa

### Couple Massage
- Couple massage
- Romantic spa
- Spa for two
- Private room

### Four Hands
- Four hands massage
- Double massage
- Ultimate relaxation
- Two therapists

### Sports Therapy
- Sports massage
- Athlete massage
- Muscle recovery
- Performance

### Crystal Therapy
- Crystal healing
- Energy balance
- Natural therapy
- Stress relief

---

**Quick Tip:** After adding meta tags, check that:
- Title shows in browser tab
- Description appears in Google search results
- All keywords are natural and easy to read
- Phone number and location are mentioned
