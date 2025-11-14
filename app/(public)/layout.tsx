import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
