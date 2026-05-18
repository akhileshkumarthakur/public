# CK Studio — Production Planning Dashboard

A Next.js 14 dashboard for managing ice cream production across CK (Central Kitchen) and 4 outlets: **Juhu, Bandra, Powai, Colaba**.

## Routes

| Route | Description |
|-------|-------------|
| `/production-planning/opening-stock` | View opening stock per flavor per outlet |
| `/production-planning/shipment-plan` | Plan how many units to dispatch from CK |
| `/production-planning/ck-summary`    | CK overview, utilisation, alerts         |

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it auto-redirects to the Production Planning dashboard.

## Project Structure

```
app/
└── production-planning/
    ├── layout.tsx              ← Sidebar (shared, static)
    ├── page.tsx                ← Redirects to opening-stock
    ├── opening-stock/page.tsx
    ├── shipment-plan/page.tsx
    └── ck-summary/page.tsx

components/production-planning/
    ├── Sidebar.tsx
    ├── PageHeader.tsx
    ├── LocationCard.tsx
    ├── FlavorTable.tsx
    ├── ShipmentTable.tsx
    ├── ShipmentCard.tsx
    ├── FillSlider.tsx
    ├── StatCard.tsx
    └── CKStockBars.tsx

lib/production-planning/
    ├── types.ts
    ├── constants.ts        ← Swap mock data with real Google Sheets API here
    └── shipment-logic.ts
```

## Connecting Real Google Sheets Data

In `lib/production-planning/constants.ts`, replace `SHEET_DATA` with a fetch call to the Google Sheets API:

```ts
// Example
const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/Sheet1!A1:F10?key={API_KEY}`);
const data = await res.json();
```

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- No UI library — all styles are inline for full control
