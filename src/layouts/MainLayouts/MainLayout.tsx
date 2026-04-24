
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

//  layout для ProfilePage 
const MainLayout = () => {
    return (
       <div className="flex flex-col  gap-10 ">
      <Header />
      <main className="md:px-8 px-3 ">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
}

export default MainLayout;
