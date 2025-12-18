import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SalesBar from '../components/SalesBar';

export default function Layout() {
  return (
    <>
      <SalesBar />
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}