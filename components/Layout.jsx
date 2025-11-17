import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
