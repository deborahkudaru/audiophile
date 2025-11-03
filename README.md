# Audiophile E-commerce

A modern, responsive e-commerce website for high-end audio equipment built with Next.js, TypeScript, and Convex.

## Features

- **Product Catalog**: Browse headphones, earphones, and speakers
- **Product Details**: Detailed product pages with features, specifications, and gallery
- **Shopping Cart**: Add/remove items, adjust quantities, and proceed to checkout
- **Checkout Process**: Complete order form with validation and order confirmation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Convex (Database & Serverless Functions)
- **State Management**: React Context API
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Deployment**: Vercel (Frontend), Convex Cloud (Backend)

## Project Structure

```
app/
├── products/
│   └── [slug]/
│       └── page.tsx          # Dynamic product detail pages
├── earphones/
│   └── page.tsx              # Earphones category page
├── headphones/
│   └── page.tsx              # Headphones category page
├── speakers/
│   └── page.tsx              # Speakers category page
├── checkout/
│   └── page.tsx              # Checkout page
└── layout.tsx                # Root layout

components/
├── Navbar.tsx                # Navigation with cart modal
├── Footer.tsx                # Site footer
├── Hero.tsx                  # Homepage hero section
├── ProductCategory.tsx       # Category navigation
├── About.tsx                 # About section
├── AlsoLike.tsx              # Related products
└── CartModal.tsx             # Shopping cart sidebar

context/
└── CartContext.tsx           # Cart state management

convex/
├── products.ts               # Product database queries & mutations
├── orders.ts                 # Order management functions
└── schema.ts                 # Database schema

types/
└── product.ts                # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Convex account for backend services

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd audiopile
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
```

4. **Set up Convex:**

```bash
npx convex dev
npx convex deploy
```

5. **Seed the database with products:**

```bash
npx convex run products:seedAllProducts
```

6. **Start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Database Schema

### Products

- `name`: Product name
- `slug`: URL-friendly identifier
- `category`: headphones, earphones, or speakers
- `description`: Product description
- `price`: Product price in cents
- `isNew`: Boolean flag for new products
- `features`: Detailed product features
- `inTheBox`: Array of included items with quantities
- `image`: Main product image URL
- `galleryImages`: Array of gallery image URLs

### Orders

- `customer`: Object with name, email, phone
- `shipping`: Object with address details
- `items`: Array of cart items
- `totals`: Object with pricing breakdown
- `status`: Order status
- `createdAt`: Order creation timestamp

## Key Features Implementation

### Shopping Cart

- Persistent cart state using React Context
- Add/remove items with quantity adjustment
- Real-time subtotal calculation
- Toast notifications for user feedback

### Product Management

- Dynamic routing for product pages
- Category-based product filtering
- Related products suggestions
- Image galleries with optimized loading

### Checkout Process

- Form validation with error handling
- Order creation with Convex mutations
- Cart clearing after successful order
- Order confirmation flow

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Optimized images for different screen sizes
- Touch-friendly interface elements

## Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on git push

### Backend (Convex)

1. Run `npx convex deploy` to deploy changes
2. Monitor through Convex dashboard
3. Configure production environment variables

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npx convex dev` - Start Convex development mode
- `npx convex deploy` - Deploy Convex functions

