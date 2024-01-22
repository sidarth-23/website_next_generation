import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '../styles/globals.scss';
import Layout from '@/components/Layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Vim Landing Page',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
