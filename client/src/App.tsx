/*
 * App.tsx — Limpiezas Fénix v3 "Editorial Cálido"
 * Rutas del sitio + layout global (Header, Footer, FloatingCTAs, CookieBanner)
 * SIN: Láser, Hielo Seco (eliminados por petición del cliente)
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCTAs from "./components/FloatingCTAs";
import CookieBanner from "./components/CookieBanner";

// Páginas
import Home from "./pages/Home";
import ServicioMadre from "./pages/ServicioMadre";
import BlogIndex from "./pages/BlogIndex";
import BlogArticle from "./pages/BlogArticle";
import FAQ from "./pages/FAQ";
import CityLanding from "./pages/CityLanding";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--cream)" }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
      <FloatingCTAs />
      <CookieBanner />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Homepage */}
      <Route path="/" component={() => <Layout><Home /></Layout>} />

      {/* Página madre servicio */}
      <Route path="/limpieza-por-incendio/" component={() => <Layout><ServicioMadre /></Layout>} />

      {/* Blog */}
      <Route path="/blog/" component={() => <Layout><BlogIndex /></Layout>} />
      <Route path="/blog/:slug/" component={({ params }) => <Layout><BlogArticle slug={params.slug} /></Layout>} />

      {/* FAQ */}
      <Route path="/preguntas-frecuentes-limpieza-incendio/" component={() => <Layout><FAQ /></Layout>} />

      {/* Landings locales */}
      <Route path="/limpieza-por-incendio-:ciudad/" component={({ params }) => <Layout><CityLanding ciudad={params.ciudad} /></Layout>} />

      {/* Legales */}
      <Route path="/privacidad/" component={() => <Layout><Privacidad /></Layout>} />
      <Route path="/cookies/" component={() => <Layout><Cookies /></Layout>} />

      {/* 404 */}
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
