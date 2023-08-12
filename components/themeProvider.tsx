"use client"
import { ThemeProvider } from "next-themes";
import React, { ReactNode, useEffect, useState } from 'react';

// Define the type for the props that Provider component receives
interface ProviderProps {
    children: ReactNode; // ReactNode represents any content that can be rendered in React
}

// Provider component that wraps its children with ThemeProvider
export default function Provider({ children }: ProviderProps) {
    
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>;
    }
    
    
    return <ThemeProvider>{children}</ThemeProvider>;
}