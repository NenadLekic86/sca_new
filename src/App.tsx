import { useEffect } from 'react';
import { initializeAnimations } from './utils/animateElements/animateElements';
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

// Preload Home component
const preloadHome = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = './pages/Home/Home';
  document.head.appendChild(link);
};

// Lazy load components with preloading
// Primary route (immediate load)
const Home = lazy(() => {
  preloadHome();
  return import(/* webpackPreload: true */ "./pages/Home/Home");
});

// Main service pages (high priority prefetch)
const AIProjectManagers = lazy(() => import(/* webpackPrefetch: true */ "./pages/AIProjectManagers/AIProjectManagers"));
const AtlassianTools = lazy(() => import(/* webpackPrefetch: true */ "./pages/AtlassianTools/AtlassianTools"));
const BusinessAgility = lazy(() => import(/* webpackPrefetch: true */ "./pages/BusinessAgility/BusinessAgility"));
const ScrumMaster = lazy(() => import(/* webpackPrefetch: true */ "./pages/ScrumMaster/ScrumMaster"));
const Eldarin = lazy(() => import(/* webpackPrefetch: true */ "./pages/Eldarin/Eldarin"));

// Blog related (medium priority)
const Blogs = lazy(() => import(/* webpackPrefetch: true */ "./pages/Blogs/Blogs"));
const BlogPost = lazy(() => import(/* webpackPrefetch: true */ "./pages/Blogs/BlogPost"));

// Policy pages (load on demand)
const DeliveryPolicy = lazy(() => import("./pages/DeliveryPolicy/DeliveryPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const ProductOwnership = lazy(() => import("./pages/ProductOwnership/ProductOwnership"));
const ReturnPolicy = lazy(() => import("./pages/ReturnPolicy/ReturnPolicy"));
const TermsPolicy = lazy(() => import("./pages/TermsPolicy/TermsPolicy"));
const ManagementAgile = lazy(() => import("./pages/ManagementAgile/ManagementAgile"));

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/AIProjectManagers" element={<AIProjectManagers />} />
          <Route path="/AtlassianTools" element={<AtlassianTools />} />
          <Route path="/BusinessAgility" element={<BusinessAgility />} />
          <Route path="/DeliveryPolicy" element={<DeliveryPolicy />} />
          <Route path="/Eldarin" element={<Eldarin />} />
          <Route path="/ManagementAgile" element={<ManagementAgile />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/ProductOwnership" element={<ProductOwnership />} />
          <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
          <Route path="/ScrumMaster" element={<ScrumMaster />} />
          <Route path="/TermsPolicy" element={<TermsPolicy />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} /> {/* Add BlogPost route */}
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
