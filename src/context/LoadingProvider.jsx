import { createContext, useContext, useEffect, useState, } from "react";
import Loading from "../components/Loading";
export const LoadingContext = createContext(null);
export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(0);
    const value = {
        isLoading,
        setIsLoading,
        setLoading,
    };
    useEffect(() => {
        // Run progress bar on mobile automatically since there is no 3D character loading trigger
        if (window.innerWidth <= 768) {
            let percent = 0;
            const interval = setInterval(() => {
                if (percent < 100) {
                    percent += 4;
                    setLoading(percent);
                } else {
                    clearInterval(interval);
                }
            }, 36); // 36ms * 25 steps = 900ms (0.9 second) progress
        }
    }, []);
    useEffect(() => { }, [loading]);
    return (<LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading}/>}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>);
};
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
