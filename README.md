# Курсовий проєкт: Інтернет-магазин на React та Redux Toolkit

Інтернет-магазин **TechShop** — SPA з модульною структурою (feature-based).

## Структура проєкту

```
src/
├── app/
│   ├── store.js          # Redux store
│   └── hooks.js          # useAppDispatch, useAppSelector
├── components/           # Глобальні UI-компоненти
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   └── Modal.jsx
├── features/
│   ├── cart/
│   │   ├── components/   # CartItem.jsx
│   │   ├── api/          # cartApi.js
│   │   ├── model/        # types.js, cartSlice.js
│   │   ├── lib/          # helpers.js
│   │   └── index.js
│   ├── products/
│   │   ├── components/   # ProductList, ProductCard, CatalogFilters
│   │   ├── api/          # productsApi.js
│   │   ├── model/        # types.js, productsSlice.js
│   │   ├── lib/          # helpers.js
│   │   └── index.js
│   ├── auth/
│   │   ├── components/   # AuthForm.jsx
│   │   ├── api/          # authApi.js
│   │   ├── model/        # types.js, authSlice.js
│   │   ├── lib/          # helpers.js
│   │   └── index.js
│   └── orders/
│       ├── components/   # OrderItem.jsx
│       ├── api/          # ordersApi.js
│       ├── model/        # types.js, ordersSlice.js
│       ├── lib/          # helpers.js
│       └── index.js
├── pages/
│   ├── HomePage.jsx
│   ├── ProductPage.jsx   # каталог + сторінка товару
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   └── ProfilePage.jsx
├── services/
│   ├── api/
│   │   ├── baseApi.js
│   │   └── endpoints/    # cart.js, products.js
│   └── storage/         # storageService.js
├── shared/
│   ├── config/
│   ├── assets/
│   └── styles/          # глобальні та модульні стилі
├── layouts/
│   └── MainLayout.jsx
├── routes/
│   └── index.jsx
├── utils/
│   ├── helpers.js
│   └── constants.js
├── App.jsx
├── main.jsx
└── index.css → shared/styles/index.css
```

## Можливості

- **Головна** — банер, популярні товари
- **Каталог** — фільтри (категорія, пошук, сортування), список товарів
- **Сторінка товару** — деталі, додати в кошик
- **Кошик** — зміна кількості, підсумок, оформлення
- **Оформлення замовлення** — форма, підтвердження, збереження в orders
- **Профіль** — вхід/реєстрація (модальне вікно), історія замовлень

## Стек

- React 18, React Router v6, Redux Toolkit, Vite

## Запуск

```bash
npm install
npm run dev
```

Перегляд збірки: `npm run build` та `npm run preview`.
