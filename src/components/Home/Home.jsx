import "./Home.css";
import Header from "../Header/Header";
import Background from "../Background/Background";
import Footer from "../Footer/Footer";
import microscopeImg from "../../assets/images/product-images/microscope.jpg";
import incubatorImg from "../../assets/images/product-images/incubator.jpg";
import detectorImg from "../../assets/images/product-images/detector.jpg";
import proteinAnalyzerImg from "../../assets/images/product-images/protein-analyzer.jpg";
import freezingPointImg from "../../assets/images/product-images/freezing-point.jpg";
import centrifugeImg from "../../assets/images/product-images/centrifuge.jpg";
import ProductList from "../ProductList/ProductList";


 const equipments = [
  {
    id: 1,
    name: "Microscopio electrónico profesional, marca: MEPSA, Mod.: M-874",
    price: "$520,000 CLP",
    category: "Microbiología",
    isAvailable: true,
    imageUrl: microscopeImg,
  },
  {
    id: 2,
    name: "Incubadora de bacterias, marca: IncMax, Mod.: IM-5846",
    price: "$1,520,000 CLP",
    category: "Microbiología",
    isAvailable: true,
    imageUrl: incubatorImg,
  },
  {
    id: 3,
    name: "Detector automático de patógenos, marca: Biomerieux, Mod.: MiniVidas25",
    price: "$27,990,000 CLP",
    category: "Microbiología",
    isAvailable: true,
    imageUrl: detectorImg,
  },
  {
    id: 4,
    name: "Analizador de proteínas, marca: Kjeldahl, Mod.: KJ-7843",
    price: "$9,990,000 CLP",
    category: "Química",
    isAvailable: true,
    imageUrl: proteinAnalyzerImg,
  },
  {
    id: 5,
    name: "Analizador de punto de congelación en leche cruda, marca: Pcong, Mod.: PC-7425",
    price: "$8,300,000 CLP",
    category: "Química",
    isAvailable: true,
    imageUrl: freezingPointImg,
  },
  {
    id: 6,
    name: "Centrífuga para determinación de materia grasa en leche cruda, marca: FunkeGerbe, Mod.: FG-4690",
    price: "$6,200,000 CLP",
    category: "Química",
    isAvailable: true,
    imageUrl: centrifugeImg,
  },
];


const Home = () => {
  return (
    <div className="page">
      <Header />
      <main className="page-content">
        <Background>
          <ProductList products={equipments} />
        </Background>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
