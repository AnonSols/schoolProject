import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import Cursor from "./ui/Cursor";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        <Cursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="" element={<AppLayout />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </QueryClientProvider>
  );
};

export default App;
