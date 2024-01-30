import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import ReduxProvider from '../../provider/redux/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Teachmate Tasklist App',
  description: 'A task list app for the AI product, Teachmate',
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReduxProvider>
  );
}
