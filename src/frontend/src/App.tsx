import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';

function RootLayout() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Outlet />
      <Toaster theme="dark" />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ServicesSection />
        <WhyChooseUs />
        <Testimonials />
        <ContactBooking />
      </main>
      <Footer />
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
