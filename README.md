This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
# Responsive Product Listing Page

This is a responsive product listing page built with **React.js**, **Next.js**, and **Bootstrap**. The project fetches data from the [Fake Store API](https://fakestoreapi.com/products) and supports **Server-Side Rendering (SSR)** using `getServerSideProps`.

---

## 🔧 Tech Stack

- React.js
- Next.js
- Bootstrap v5
- Fetch API
- TypeScript (✅ Bonus)
- Deployed on Vercel

---

## 🚀 Features

✅ **Server-Side Rendering (SSR)** via `getServerSideProps`  
✅ **Product listing page** displaying:  
&nbsp;&nbsp;&nbsp;&nbsp;• Product image  
&nbsp;&nbsp;&nbsp;&nbsp;• Title  
&nbsp;&nbsp;&nbsp;&nbsp;• Price  
&nbsp;&nbsp;&nbsp;&nbsp;• Category  
&nbsp;&nbsp;&nbsp;&nbsp;• Rating  
✅ **Client-side search filter** by product title  
✅ **Loading spinner** during client-side search  
✅ **Responsive layout** using Bootstrap Grid  
✅ **Dynamic product details page** via `/product/[id]`  
✅ **TypeScript integration**  
✅ **Pagination** (bonus)
✅ **Add unit tests using Jest or React Testing Library.** (bonus)

---

## 🖼️ Screenshots
![Screenshot 2025-06-12 223508](https://github.com/user-attachments/assets/05899f62-8a7b-4f3e-ac46-d64a4032f04a)

![Screenshot 2025-06-12 223527](https://github.com/user-attachments/assets/2dcebbcf-91ab-4835-b636-9db29787d46e)

![Screenshot 2025-06-12 223545](https://github.com/user-attachments/assets/1ddd25d4-c951-4553-b5e9-0b6a11d9f008)

### 🏠 Home Page
Displays a responsive grid of product cards with search functionality.

### 📄 Product Details Page
Shows full product details based on dynamic routing.

---
## 🛠️ Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/surajbhan93/esponsive-product-listing-page.git
cd esponsive-product-listing-page

### 📄2. Install dependencies
npm install
### 📄3. Start the development server

### 📄 npm run dev
Access the app at http://localhost:3000

### 📄4. Build for production
npm run build
npm start

'''
assumptions:
  - Fake Store API data is static; no real-time updates needed
  - Client-side filtering after SSR fetch
  - Used <img> instead of next/image for simplicity
  - Bootstrap used without custom media queries
  - Product detail pages assume valid product IDs from API
  - Pagination is client-side for simplicity

submission:
  github_repo: https://github.com/surajbhan93/esponsive-product-listing-page
  live_demo: [https://esponsive-product-listing-page-w6dv.vercel.app](https://esponsive-product-listing-page-w6dv.vercel.app/)

author:
  name: Suraj Bhan
  email: XXX
  github: https://github.com/surajbhan93


  
## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/surajbhan93/esponsive-product-listing-page.git
cd esponsive-product-listing-page

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
SSR (Server-Side Rendering) and useEffect (Client-Side Effect) in Next.js (and React)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
