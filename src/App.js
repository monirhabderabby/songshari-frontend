// components

// css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MasterRoute from "./route/MasterRoute";
import { shopBaseUrl } from "./config";

function App() {
    alert("Shop Base Url="+shopBaseUrl)
    return <MasterRoute />;
}

export default App;
