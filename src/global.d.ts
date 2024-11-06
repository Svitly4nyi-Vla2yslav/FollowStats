interface Window {
    gtag: (...args: unknown[]) => void; // замінюємо `any` на `unknown`
}

interface Window {
    fbq?: (...args: unknown[]) => void; // замінюємо `any` на `unknown`
}