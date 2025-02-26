// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/Home/HomePage";
import SignIn from "./components/features/Auth/SignIn";
import SignUp from "./components/features/Auth/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
                <Route path="/signIn" element={<PageWrapper><SignIn /></PageWrapper>} />
                <Route path="/signUp" element={<PageWrapper><SignUp /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />

                <div className="flex-grow">
                    <AnimatedRoutes />
                </div>


                <Footer />
            </div>
        </Router>
    );
};

export default App;
