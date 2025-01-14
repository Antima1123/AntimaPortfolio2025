"use client"
import { useTheme } from "./themeprovider"
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { Button } from "./ui/button";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    
    return (
        <Button 
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-md hover:scale-110 transition-transform "
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {theme === "dark" ? <FaRegSun size={20} /> : <FaRegMoon size={20} />}
        </Button>
    )
}