
import { FooterIdentity } from "./footerIdentity";
import { Navigation } from '../components/navigation';

const PlantillaTres = ({ contenta, contentb, contentc }) => {
    return (

<>
        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative z-30 `}>
                {contenta}
            </div>

            <div className={` relative w-full `}>

                    <div className={` relative z-30 `}>
                        {contentb}
                    </div>

                <div className={` relative w-full  `}>
<div className={` absolute inset-0 bg-white `} />
                    <div className={` relative z-30 `}>
                        {contentc}
                    </div>

                </div>
                <FooterIdentity />
            </div>
        </main>
        <Navigation />
        </>

    );
}

export default PlantillaTres;