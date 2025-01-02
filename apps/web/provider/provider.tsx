"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export function Providers({ children }: { children: React.ReactNode }) {
    const client = new QueryClient()
    return (
        <QueryClientProvider client={client}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                enableColorScheme
            >
                {children}
            </NextThemesProvider>
        </QueryClientProvider>

    )
}