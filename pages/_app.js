import '@/styles/globals.css'
// import  { AppProps } from 'next/app';
// import Header from '@/components/Header';
import NavBar from '../components/NavBar';
import AuthProvider from '../backend/useAuth';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        {/* <Header /> */}
        <NavBar />
        <div className="font-montserrat min-h-[calc(100vh-90px)]">
          {/* <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="w-10 flex justify-center rounded-full cursor-pointer shadow-2xl items-center h-10 fixed bottom-10 right-10 z-50 bg-white text-black"
          >
            <Image src={panda} alt="panda" width={30} height={30} />
          </div> */}
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
      </AuthProvider>
    </>
  );
}

export default MyApp;
