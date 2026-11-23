# accessibility-learning - SPEC v0.1.0

## Project Identity

| Field | Value |
|-------|-------|
| **Name** | accessibility-learning |
| **GitHub** | zkzWilliamzhou/accessibility-learning |
| **Description** | Gamified accessibility learning platform with hands-on screen reader simulation, progressive certification, and corporate training readiness |
| **Target Stars** | 10K-18K |
| **License** | MIT |
| **Language** | TypeScript (strict) |

---

## Core Value Proposition

**"Learn accessibility by experiencing it. Screen reader simulation + interactive fixes + gamified certification = the only a11y training developers actually complete."**

- **Problem**: Accessibility (a11y) is legally required (WCAG 2.1 AA, Section 508, EAA, ADA), but training is dry: PDFs, videos, checklists. Developers don't *experience* barriers. Screen readers are hard to learn. No hands-on practice with real violations. Completion rates < 20%.
- **Solution**: An interactive platform where developers: (1) use a **realistic screen reader simulator** (keyboard-only, speech output, rotor navigation), (2) **fix live WCAG violations** in a sandbox with instant feedback, (3) progress through **gamified levels** with badges/certificates, (4) earn **verifiable credentials** for corporate compliance.
- **Unique Angle**: Realistic screen reader sim (not just text-to-speech) + interactive fix challenges with AST-based validation + progressive certification with blockchain-verifiable credentials + corporate dashboard = **the Duolingo for accessibility**.

---

## User Personas

| Persona | Pain Point | Success Metric |
|---------|------------|----------------|
| **Frontend Developer** | Doesn't understand screen reader UX, fears breaking a11y | Completes 10+ lessons, fixes 5+ real violations |
| **Engineering Manager** | Needs team a11y compliance, no budget for training | 80% team certified, audit pass rate > 90% |
| **Bootcamp Student** | A11y is afterthought in curriculum | Portfolio includes 3+ certified accessible projects |
| **QA/Accessibility Tester** | Needs efficient regression testing | Uses platform to create test cases, exports reports |
| **Compliance Officer** | Needs evidence for audits | Downloads team certificates, WCAG mapping reports |

---

## Feature Specification

### Phase 1 (v0.1.0) - MVP

#### 1. Screen Reader Simulator (Core Differentiator)
- **Keyboard-Only Navigation**: Tab, Shift+Tab, Arrow keys, Enter, Space, Escape
- **Virtual Cursor / Browse Mode**: 
  - `H` / `Shift+H` → Next/Previous heading
  - `L` / `Shift+L` → Next/Previous landmark
  - `K` / `Shift+K` → Next/Previous link
  - `B` / `Shift+B` → Next/Previous button
  - `R` / `Shift+R` → Next/Previous region
  - `1`-`6` → Headings level 1-6
- **Rotor Menu** (VoiceOver-style): `Ctrl+Option+U` → Lists (Headings, Links, Landmarks, Form Controls, Tables)
- **Speech Output**: Web Speech API (speechSynthesis) with configurable voice, rate, pitch, volume
- **Announcements**: Live region simulation (`aria-live`, `role="alert"`, `aria-atomic`)
- **Focus Visualization**: High-contrast focus ring, announces element role/name/state
- **Mobile Support**: Touch gestures (swipe left/right = next/previous, double-tap = activate)

#### 2. Lesson Engine (10 Lessons MVP)
| # | Lesson | WCAG Criteria | Challenge Type |
|---|--------|---------------|----------------|
| 1 | Semantic HTML | 1.3.1 | Fix `<div>` soup → proper landmarks |
| 2 | Heading Hierarchy | 1.3.1, 2.4.6 | Reorder headings, fix skipped levels |
| 3 | Image Alt Text | 1.1.1 | Write meaningful alt for 5 images |
| 4 | Form Labels | 1.3.1, 3.3.2 | Associate labels, add `aria-describedby` |
| 5 | Color Contrast | 1.4.3 | Adjust CSS custom properties to pass 4.5:1 |
| 6 | Keyboard Focus | 2.4.7 | Fix focus order, add visible focus styles |
| 7 | ARIA Basics | 4.1.2 | Add correct roles, states, properties |
| 8 | Live Regions | 4.1.3 | Implement polite/assertive announcements |
| 9 | Tables & Lists | 1.3.1 | Add `<caption>`, `<th scope>`, proper list markup |
| 10 | Final Project | Multiple | Build accessible card component from scratch |

#### 3. Interactive Fix Challenges
- **Sandbox**: Isolated iframe with editable HTML/CSS/JS (Monaco Editor)
- **Violation Detection**: axe-core runs on every change → shows violations in sidebar
- **Instant Feedback**: Green checkmark when violation fixed, red X with explanation if not
- **Hints System**: 3 levels (Subtle → Specific → Solution)
- **Validation**: 
  - axe-core pass = objective pass
  - Custom rules (e.g., "alt text must be > 5 chars") = subjective pass
  - Screen reader sim test = experiential pass (user must navigate successfully)

#### 4. Gamification System
- **XP**: 100 XP per lesson, 50 XP per challenge, 10 XP per hint used (penalty)
- **Levels**: 1-20 (Novice → Accessibility Champion)
- **Badges** (25 total):
  - *Semantic Master* (complete all semantic lessons)
  - *Contrast Crusader* (fix 20 contrast issues)
  - *Keyboard Navigator* (complete 5 lessons without mouse)
  - *Screen Reader Pro* (navigate 10 pages using only simulator)
  - *First Responder* (fix a violation in < 30 seconds)
  - *Perfectionist* (complete lesson with 0 hints)
- **Streaks**: Daily lesson → streak bonus, 30-day streak = "Consistency" badge
- **Leaderboards**: Weekly (friends), Monthly (global), Organization (private)

#### 5. Certification System
- **Certificates** (4 tiers):
  1. **A11y Basics** (Lessons 1-5, 80% pass)
  2. **A11y Practitioner** (All 10 lessons + 5 challenges, 85% pass)
  3. **A11y Expert** (Practitioner + 3 advanced modules + portfolio review)
  4. **A11y Auditor** (Expert + audit simulation + peer review)
- **Verification**: Each certificate has unique ID, QR code, blockchain anchor (optional, via Veramo/Ceramic)
- **PDF Export**: Branded certificate with criteria mapping, issue date, expiry (2 years)
- **LinkedIn Integration**: "Add to Profile" button with pre-filled fields

#### 6. Corporate Dashboard (Read-only MVP)
- **Team View**: Members, progress, certificates, weak areas
- **Compliance Report**: WCAG 2.1 AA coverage % by criterion
- **Bulk Enroll**: CSV upload, SSO (SAML/OIDC) placeholder
- **Export**: CSV, PDF, JSON for audit evidence

---

### Phase 2 (v0.2.0) - Enhanced

- **30+ Lessons**: Advanced ARIA patterns, complex widgets, mobile a11y, PDF a11y, testing strategies
- **Advanced Modules**: 
  - *Complex Widgets*: Autocomplete, date picker, data grid, tree view
  - *Testing*: axe-core, jest-axe, Playwright a11y, manual testing workflow
  - *Design Systems*: Building accessible component libraries
  - *Mobile*: iOS VoiceOver, Android TalkBack specifics
- **Portfolio Projects**: Real-world assignments (e.g., "Make this e-commerce checkout accessible")
- **Peer Review**: Submit project → reviewed by certified experts → feedback
- **LMS Integration**: SCORM/xAPI export, Canvas/Moodle/Docebo plugins
- **Screen Reader Profiles**: NVDA, JAWS, VoiceOver, TalkBack specific behaviors

---

### Phase 3 (v1.0.0) - Production

- **Enterprise SSO**: SAML, OIDC, SCIM provisioning
- **Custom Content**: Organization-specific lessons, branding, policies
- **Audit Simulation**: Full WCAG 2.1 AA audit with scoring, remediation tracking
- **API/Webhooks**: Progress events, certificate issuance, compliance alerts
- **Mobile Apps**: iOS/Android native with offline sync
- **Community**: Forum, mentor matching, accessibility office hours

---

## Technical Architecture

### Stack
- **Frontend**: Vue 3 + TypeScript + Vite
- **Editor**: Monaco Editor (sandbox)
- **Screen Reader Sim**: Custom implementation (Web Speech API + keyboard trap)
- **A11y Engine**: axe-core (violation detection) + custom rules
- **State**: Pinia + IndexedDB (localforage) for progress persistence
- **Styling**: UnoCSS + CSS Custom Properties (theming)
- **Build**: Vite + Rollup (library mode for embeddable challenges)
- **Testing**: Vitest + Playwright (a11y testing with axe-playwright)
- **Docs**: VitePress
- **Certificates**: PDFKit (serverless function) + QRCode + optional blockchain (Ceramic)

### Project Structure
```
accessibility-learning/
├── packages/
│   ├── simulator/            # Screen reader simulator core
│   │   ├── keyboard/         # Keyboard navigation, rotor, commands
│   │   ├── speech/           # Web Speech API wrapper, voice management
│   │   ├── announcer/        # Live region simulation
│   │   └── focus/            # Focus management, visualization
│   ├── lessons/              # Lesson definitions, validation, progression
│   │   ├── schema/           # Lesson schema (JSON Schema + TypeScript)
│   │   ├── engine/           # Lesson runner, hint system, XP calculation
│   │   └── catalog/          # Lesson content (Markdown + interactive steps)
│   ├── challenges/           # Fix challenge sandbox, axe-core integration
│   │   ├── sandbox/          # Iframe + Monaco + message channel
│   │   ├── validator/        # axe-core + custom rules + SR sim test
│   │   └── hints/            # Hint generation, progressive disclosure
│   ├── gamification/         # XP, levels, badges, streaks, leaderboards
│   ├── certification/        # Certificate generation, verification, PDF
│   ├── corporate/            # Dashboard, team management, reports
│   └── core/                 # Shared types, utilities, constants
├── apps/
│   ├── web/                  # Main SPA (Vite + Vue)
│   ├── admin/                # Admin panel (separate build)
│   └── certificate-api/      # Serverless function (Vercel/Cloudflare)
├── tests/
│   ├── unit/                 # Simulator, validator, gamification, cert
│   ├── e2e/                  # Full lesson flows, simulator, challenges
│   ├── a11y/                 # axe-core regression on our own UI
│   └── visual/               # Simulator rendering, certificate PDF
├── docs/                     # VitePress
├── package.json
└── README.md
```

---

## API Contracts

### Lesson Schema
```typescript
// packages/lessons/schema/index.ts
export interface Lesson {
  id: string;                    // kebab-case
  title: string;
  description: string;
  wcagCriteria: WCAGCriterion[]; // e.g., ['1.3.1', '1.4.3']
  category: LessonCategory;
  difficulty: 1 | 2 | 3;
  estimatedMinutes: number;
  xpReward: number;
  
  // Steps (progressive disclosure)
  steps: LessonStep[];
  
  // Validation
  validation: LessonValidation;
  
  // Prerequisites
  prerequisites: string[];       // Lesson IDs
}

export interface LessonStep {
  id: string;
  type: 'explanation' | 'demo' | 'challenge' | 'quiz' | 'reflection';
  content: string;               // Markdown
  challenge?: ChallengeSpec;     // If type === 'challenge'
  quiz?: QuizSpec;               // If type === 'quiz'
}

export interface ChallengeSpec {
  sandboxId: string;             // References challenge catalog
  initialCode: SandboxCode;
  targetViolations: string[];    // axe-core rule IDs to fix
  customRules?: CustomRule[];    // Additional validation
  hints: Hint[];                 // Progressive hints
  srSimTest?: SRSimTestSpec;     // Screen reader navigation test
}

export interface LessonValidation {
  axeRules: string[];            // Required axe-core rules to pass
  customRules: CustomRule[];     // Custom validation functions
  srSimRequired: boolean;        // Must complete SR sim navigation
  minScore: number;              // 0-100
}
```

### Screen Reader Simulator State
```typescript
// packages/simulator/src/types.ts
export interface SRSimulatorState {
  mode: 'browse' | 'focus' | 'forms';
  virtualCursor: VirtualCursorPosition;
  focusStack: FocusableElement[];
  announcements: Announcement[];
  settings: SRSimSettings;
}

export interface VirtualCursorPosition {
  element: Element | null;
  index: number;                 // Index in current rotor list
  rotorList: RotorListType;      // 'headings' | 'landmarks' | 'links' | ...
}

export interface SRSimSettings {
  voice: SpeechSynthesisVoice | null;
  rate: number;                  // 0.5 - 2.0
  pitch: number;                 // 0.5 - 2.0
  volume: number;                // 0 - 1
  verbosity: 'low' | 'medium' | 'high';
  echoKeystrokes: boolean;
  announceFocusChanges: boolean;
}
```

### Certificate
```typescript
// packages/certification/src/types.ts
export interface Certificate {
  id: string;                    // UUID v4
  type: 'basics' | 'practitioner' | 'expert' | 'auditor';
  recipient: {
    name: string;
    email: string;
    github?: string;
    linkedin?: string;
  };
  issuedAt: string;              // ISO 8601
  expiresAt: string;             // ISO 8601 (2 years)
  criteria: CertificateCriteria;
  verification: {
    url: string;                 // https://verify.a11y.dev/:id
    qrCode: string;              // Data URL
    blockchainAnchor?: string;   // Optional Ceramic stream ID
  };
  signature: string;             // Ed25519 signature
}
```

---

## Testing Strategy

### Unit Tests (Vitest) - Target: 90% coverage
- **Simulator**: Keyboard commands, rotor navigation, speech queue, focus management
- **Validator**: axe-core integration, custom rules, SR sim test evaluation
- **Gamification**: XP calc, level thresholds, badge triggers, streak logic
- **Certification**: PDF generation, QR code, verification URL, signature
- **Lessons**: Schema validation, progression, prerequisite checking

### E2E Tests (Playwright)
- **Lesson Flow**: Start lesson → complete steps → pass validation → earn XP → unlock next
- **Simulator**: Navigate page using only keyboard → announcements correct → rotor works
- **Challenge**: Load sandbox → introduce violation → fix → validator passes → hint system
- **Certification**: Complete tier → generate certificate → verify URL works → PDF downloads
- **Corporate**: Admin creates team → invites members → views progress → exports report

### Accessibility Testing (Dogfooding)
- **axe-playwright**: Every page must pass WCAG 2.1 AA
- **Screen Reader**: Test with NVDA (Windows), VoiceOver (Mac), TalkBack (Android)
- **Keyboard**: Full navigation without mouse
- **Color Contrast**: All UI meets 4.5:1 (7:1 for text)
- **Zoom**: 200% zoom, 400% zoom functional

### Visual Regression
- Simulator rendering at different viewport sizes
- Certificate PDF layout
- Dashboard charts, progress rings

---

## Security Considerations

- **Sandbox Isolation**: Challenge iframes with `sandbox="allow-scripts allow-same-origin"` only
- **Content Security Policy**: Strict CSP on sandbox, main app
- **No Code Execution on Server**: Certificate generation via serverless function (no user code)
- **Data Privacy**: All progress in IndexedDB (client-side), optional sync with explicit consent
- **Certificate Integrity**: Ed25519 signatures, public key published for verification
- **Rate Limiting**: Client-side throttle on certificate generation, API calls

---

## Performance Budgets

| Metric | Target |
|--------|--------|
| Initial Load (gzipped) | < 300 KB |
| Simulator Mount | < 500ms |
| Lesson Transition | < 200ms |
| axe-core Scan (typical page) | < 100ms |
| Certificate Generation | < 2s |
| Bundle Size (simulator) | < 50 KB gzipped |

---

## CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/ci.yml
jobs:
  lint-typecheck-test:
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm lint, pnpm typecheck, pnpm test]
  
  e2e:
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm build, pnpm test:e2e]
  
  a11y-regression:
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm build, pnpm test:a11y]
  
  certificate-api:
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm build:cert-api, pnpm test:cert-api]
  
  deploy-web:
    needs: [lint-typecheck-test, e2e, a11y-regression]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm build, vercel deploy --prod]
  
  deploy-cert-api:
    needs: certificate-api
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps: [vercel deploy --prod ./apps/certificate-api]
```

---

## Documentation Structure

```
docs/
├── guide/
│   ├── getting-started.md
│   ├── screen-reader-simulator.md
│   ├── lessons-and-challenges.md
│   ├── gamification.md
│   ├── certification.md
│   ├── corporate-dashboard.md
│   └── creating-content.md
├── api/
│   ├── simulator.md
│   ├── lessons.md
│   ├── challenges.md
│   ├── gamification.md
│   └── certification.md
├── reference/
│   ├── lesson-schema.md
│   ├── wcag-mapping.md
│   ├── keyboard-commands.md
│   ├── certificate-verification.md
│   └── error-codes.md
├── curriculum/
│   ├── basics.md
│   ├── practitioner.md
│   ├── expert.md
│   └── auditor.md
└── contributing.md
```

---

## Review Gates (8+ Rounds)

| Round | Focus | Gate Criteria |
|-------|-------|---------------|
| 1 | Spec Review | This SPEC approved |
| 2 | Simulator | Keyboard nav, rotor, speech, focus all work |
| 3 | Lessons 1-5 | Semantic HTML, headings, alt, forms, contrast |
| 4 | Lessons 6-10 | Focus, ARIA, live regions, tables, final project |
| 5 | Challenges | Sandbox, validator, hints, SR sim test all work |
| 6 | Gamification | XP, levels, badges, streaks, leaderboards functional |
| 7 | Certification | PDF generation, verification, QR, signature valid |
| 8 | Corporate Dashboard | Team view, compliance report, export works |
| 9 | Accessibility | Our own UI passes WCAG 2.1 AA, tested with NVDA/VoiceOver |
| 10 | Release | CI green, Vercel deploy, certificate API deploy |

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Screen reader simulation fidelity | High | High | Iterative testing with real SR users, configurable profiles |
| axe-core false positives/negatives | Medium | Medium | Custom rules layer, manual override, community feedback |
| Certification credibility | Medium | High | Transparent criteria, peer review tier, blockchain anchor |
| Corporate adoption | Medium | High | Free tier for teams < 10, SSO placeholder, compliance reports |
| Content maintenance | High | Medium | Versioned curriculum, community contributions, automated WCAG mapping |

---

## Success Metrics

| Metric | 30 Days | 90 Days | 1 Year |
|--------|---------|---------|--------|
| GitHub Stars | 1,000 | 5,000 | 15,000 |
| Registered Learners | 5,000 | 25,000 | 100,000 |
| Lessons Completed/Day | 500 | 3,000 | 15,000 |
| Certificates Issued | 100 | 1,000 | 10,000 |
| Corporate Teams | 5 | 30 | 200 |
| Avg Completion Rate | 40% | 55% | 65% |

---

**SPEC Status**: DRAFT v0.1 - Pending PM Review Gate 1  
**Next Action**: PM approval → Phase 2 implementation begins