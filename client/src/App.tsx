/*
 * App.tsx — Limpiezas Fénix
 * Rutas del sitio + layout global (Header, Footer, FloatingCTAs, CookieBanner)
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
import LimpiezaLaser from "./pages/LimpiezaLaser";
import LimpiezaHieloSeco from "./pages/LimpiezaHieloSeco";
import BlogIndex from "./pages/BlogIndex";
import BlogArticle from "./pages/BlogArticle";
import FAQ from "./pages/FAQ";
import CityLanding from "./pages/CityLanding";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--coal)" }}>
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

      {/* Servicios especiales */}
      <Route path="/limpieza-laser/" component={() => <Layout><LimpiezaLaser /></Layout>} />
      <Route path="/limpieza-con-laser/" component={() => { window.location.replace("/limpieza-laser/"); return null; }} />
      <Route path="/limpieza-hielo-seco/" component={() => <Layout><LimpiezaHieloSeco /></Layout>} />
      <Route path="/limpieza-criogenica/" component={() => { window.location.replace("/limpieza-hielo-seco/"); return null; }} />

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
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
