# Reelax Assignment

A responsive React implementation of the Reelax billing checkout screen from the provided Figma assignment.

## Tech Stack

- React JS
- Vite
- CSS
- Lucide React icons

## Features

- Billing details form based on the reference screen.
- Order summary card with wallet and coupon section.
- Basic React state for form values and selected coupon.
- Responsive layout for smaller screens.

## Project Structure

```text
src/
  components/
    common/
      Button.jsx
      SearchBar.jsx
    billing/
      BillingForm.jsx
    layout/
      Header.jsx
    summary/
      OrderSummary.jsx
  App.jsx
  index.css
  main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://127.0.0.1:5173/`.

## Build

```bash
npm run build
```

If Windows or OneDrive locks an old file inside `dist`, close any app using the folder or delete the `dist` folder manually, then run the build again.
