'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
export default function ThemeToggle() {
 const [light,setLight]=useState(false);
 useEffect(()=>{let value=false;try{value=localStorage.getItem('portfolio-theme-green')==='light'}catch{};document.body.classList.toggle('light-theme',value);document.body.classList.toggle('dark-theme',!value);setLight(value)},[]);
 function toggle(){const value=!light;setLight(value);document.body.classList.toggle('light-theme',value);document.body.classList.toggle('dark-theme',!value);try{localStorage.setItem('portfolio-theme-green',value?'light':'dark')}catch{}}
 return <button className="theme-toggle" onClick={toggle} aria-label={light?'Switch to dark theme':'Switch to light theme'}>{light?<Moon size={18}/>:<Sun size={18}/>}</button>;
}
