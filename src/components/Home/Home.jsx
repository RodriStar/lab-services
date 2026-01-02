import Header from "../Header/Header";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-content">
        <Background />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
