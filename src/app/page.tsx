import Header from "@/components/Header";
import {Values} from "@/components/Values/Values";
import {values} from "@/data/Values";
import {Footer} from "@/components/Footer/Footer";
import {footer} from "@/data/Footer";
import NewsServer from "@/components/Slider/NewsServer";

export default function Home() {
    return (
        <div className="bg-white min-h-screen min-w-screen">
            <Header/>
            <Values item={values}/>
            <NewsServer/>
            <Footer item={footer}/>
        </div>
    );
}
