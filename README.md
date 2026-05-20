# Pixel-Perfect React Checkout Assignment

A high-fidelity, responsive implementation of the Reelax billing checkout screen using React JS and modern tooling.

## 🚀 Live Demo

- **Hosted App:** [https://reelax-assignment-roan.vercel.app/](https://reelax-assignment-roan.vercel.app/)

## 🛠️ Tech Stack & Key Choices

- **Build Engine:** Vite (Optimized production asset bundles)
- **Framework:** React JS (Modular component tree)
- **Styling:** CSS (Pixel-perfect design implementation)
- **Icons:** Lucide React

## ✨ Features

- Billing details form with form validation and state management
- Order summary card with wallet balance and coupon selection
- Interactive coupon selection with applied discount calculation
- Responsive layout for desktop, tablet, and mobile screens
- Clean component-based architecture following React best practices

## 📁 Project Structure

```
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

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohan141729/reelax_assignment.git
   cd reelax_assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open the local URL shown in the terminal, usually `http://127.0.0.1:5173/`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production files will be generated in the `dist` folder.

## 📝 Notes

- Form state is managed with React hooks (`useState`)
- Coupon selection updates the total price dynamically
- All styling follows the exact design specifications from the reference image
- Responsive breakpoints ensure proper layout on all device sizes
