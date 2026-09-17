import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './inner-pages.css';
import './collections.css';
const body=localFont({src:'./fonts/geist-latin.woff2',variable:'--font-body',display:'swap'});
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'),robots:process.env.NEXT_PUBLIC_SITE_URL?{index:true,follow:true}:{index:false,follow:false},title:'Nepora Exports | Handwoven Pashmina & Himalayan Craft',description:'Explore original handwoven Pashmina, heritage shawls, and stories of Himalayan craft at Nepora Exports.',alternates:{canonical:'/'},openGraph:{title:'Nepora Exports | Handwoven Pashmina',description:'Heirloom Pashmina and the stories behind every thread.',url:'/',siteName:'Nepora Exports',type:'website',images:['/images/home/hero-desktop.webp']},twitter:{card:'summary_large_image',title:'Nepora Exports | Handwoven Pashmina',description:'Heirloom Pashmina and the stories behind every thread.',images:['/images/home/hero-desktop.webp']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={body.variable}><body>{children}</body></html>}

