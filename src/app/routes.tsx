import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ItemDetail } from "./pages/ItemDetail";
import { SellerProfile } from "./pages/SellerProfile";
import { UserProfile } from "./pages/UserProfile";
import { SharedOwnership } from "./pages/SharedOwnership";
import { PostAdWizard } from "./pages/PostAdWizard";
import { Auth } from "./pages/Auth";
import { Transactions } from "./pages/Transactions";

import { Category } from "./pages/Category";
import Messages from "./pages/Messages";

const Favorites = lazy(() => import("./pages/Favorites").then(mod => ({ default: mod.Favorites })));

function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans flex flex-col selection:bg-blue-100 dark:selection:bg-blue-900/50 transition-colors">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Загрузка...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "category/:categoryId", Component: Category },
      { path: "category/:categoryId/:subcategoryId", Component: Category },
      { path: "item/:id", Component: ItemDetail },
      { path: "seller/:id", Component: SellerProfile },
      { path: "profile", Component: UserProfile },
      { path: "co-own", Component: SharedOwnership },
      { path: "post", Component: PostAdWizard },
      { path: "auth", Component: Auth },
      { path: "favorites", Component: Favorites },
      { path: "messages", Component: Messages },
      { path: "transactions", Component: Transactions },
    ],
  },
]);
