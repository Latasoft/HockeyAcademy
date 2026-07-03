"use client";
import { useState, useEffect } from "react";
import Cargador from "components/cargador";
import ImagenesListas from "components/imageneslistas";
import Link from 'next/link';
import Image from 'next/image';

import VideosGaleria from "components/videosgaleria";
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';
import PlantillaUno from 'components/plantillauno';

import ViajesGaleria from 'components/viajesgaleria';

import hockeyacademylogo from 'public/hockeyacademycamp/hockeyacademycamp_logo.png';
import hockeyacademylogob from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_09.png';
import videofondoa from 'public/hockeyacademycamp/hockeyacademyfondoa.jpg';
import videofondob from 'public/hockeyacademycamp/hockeyacademyfondob.jpg';

export default function Page() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const imageSources = [
            hockeyacademylogo,
            hockeyacademylogob,
            videofondoa,
            videofondob,
            ...ImagenesListas[1],
            ...ImagenesListas[2],
            ...ImagenesListas[3],
            ...ImagenesListas[16]
          ];

        preloadImages(imageSources).then(() => setLoading(false));
    }, []);

    const preloadImages = (imageSources) => {
        return Promise.all(
          imageSources.map((src) => {
            return new Promise((resolve, reject) => {
              // Extract the src if the image is an object (imported asset)
              const imageSrc = typeof src === 'string' ? src : src?.src;
              if (!imageSrc) {
                console.error('Invalid image source:', src);
                resolve(); // Resolve even if invalid to avoid blocking
                return;
              }
      
              const img = new window.Image();
              img.src = imageSrc;
              img.onload = resolve;
              img.onerror = (error) => {
                console.error(`Failed to preload image: ${imageSrc}`, error);
                resolve(); // Resolve even on error to avoid blocking
              };
            });
          })
        );
      };

    if (loading) {
        return <Cargador />;
    }

    return (
        
            <PlantillaUno
                contenta={
                    <HockeyAcademyVideoA>
                        <div className={` absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 `} >
                            <Image className={` w-2/5 md:w-1/5 h-auto `} src={hockeyacademylogo} alt='' />
                            <Image className={` w-2/5 md:w-1/5 h-auto `} src={hockeyacademylogob} alt='' />
                        </div>
                    </HockeyAcademyVideoA>
                }
                contentb={
                    <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto pt-16`} >
                        <div className={` flex flex-col md:flex-row gap-24 md:gap-5 mb-24 items-center md:items-start justify-center `}>
                            <div>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 mb-6 text-[#000] `}>Próximos Eventos</h2>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] `}>Summer Camp sub-13</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Diciembre de 2024<br />desde 16 hasta el 19.</p>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Summer Camp +13</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Diciembre de 2024<br />desde 20 hasta el 22.</p>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Summer Camp</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Enero de 2025<br />desde 10 hasta el 13.</p>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Actividad Especial</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Febrero de 2025<br />desde 17 en adelante.</p>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Comienzo Academia 2025</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Marzo de 2025, lunes 3.</p>
                            </div>
                            <div>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6 text-[#000] `}>Fechas de viajes 2025</h2>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#5fd2ff] `}>Campus de Tecnificación</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Julio de 2025<br />desde 12 hasta el 23.</p>
                                <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#5fd2ff] mt-6 `}>Campus Eurohockey Alemania</h2>
                                <p data-aos-once="true" data-aos="fade" className={` font-Roboto text-xl mx-8 leading-relaxed text-center  hyphens-auto `} >Agosto de 2025<br />desde 9 hasta el 20.</p>
                            </div>
                        </div>

                        <p className={` font-RobotoCondensed font-bold text-md sm:text-lg md:text-xl uppercase leading-loose mt-6 mb-24 `}>
                            <Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-3 sm:px-4 md:px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="mailto:hockeyacademychile@gmail.com">
                                Escríbenos y reserva tu cupo
                                <svg className={` inline-block w-6 sm:w-8 md:w-12 ml-4 `} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></Link></p>

                    </section>
                }
                contentc={
                    <>

                        <VideosGaleria
                            imageneslista="15"
                            titulo="Hockey Academy Camp en Videos" />

                        <ViajesGaleria
                            imageneslista="20"
                            titulo="Hockey Academy Camp en Imágenes" />

                        <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pt-32`}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Sponsors Hockey Academy</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                            {!!ImagenesListas[2].length && (
                                <div className={` mx-auto text-center overflow-visible `}>
                                    {ImagenesListas[2].map((src, index) => (
                                        <span data-aos-once="true" data-aos="fade-up" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                            <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                        </span>
                                    ))}
                                </div>
                            )}
                        </section>

                        <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pb-32 pt-24 `}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Alianzas Estratégicas</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                            {!!ImagenesListas[3].length && (
                                <div className={` mx-auto text-center overflow-visible `}>
                                    {ImagenesListas[3].map((src, index) => (
                                        <span data-aos-once="true" data-aos="fade-up" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                            <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                        </span>
                                    ))}
                                </div>
                            )}
                        </section>
                    </>
                }
            />

    );
}

{/*

                <div className={` relative z-30 pt-24 `}>
                    <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto `} >
                        <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6`}>Campus de Hockey Hierba en Europa y EEUU</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-6 `} />
                        <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mb-6`}>Tecnificaciones - Deportistas olímpicos - Turismo deportivo</h2>
                        <p className={` font-Roboto text-xl mx-8 leading-relaxed text-justify  hyphens-auto `} >Nuestras viajes y campus son experiencias de vida inolvidables para jóvenes amantes del hockey. En ellos combinamos la asistencia a los mejores eventos, entrenamientos a nivel profesional, diferentes competiciones con la participación de deportistas olímpicos y con el objetivo de que todos los deportistas adquieran conocimientos nuevos y perfeccionamientos técnicos y logren un mayor entendimiento del juego.</p>
                    </section>
                    <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto my-24`} >
                        <h2 data-aos-once="true" data-aos=fade-up" className={` font-BebasNeue text-4xl text-[#F6BB0E] mx-8 mb-6`}>¿Qué Viaje de Hockey preferís?</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-6 `} />
                        <div className={` my-16 mx-8 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 max-w-7xl `}>
                            <div>
                                <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey con <br />Evento</h3>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#72efdd] mb-6 `} />
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >Campus deportivo para jóvenes de 12 a 17 años en Barcelona y Monchengladbach (Alemania), combinando la práctica deportiva con la asistencia al EuroHockey en agosto 2025.</p>
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >Entrenamientos en las instalaciones del Real Club de Polo y en clubes alemanes, deportista de élite invitada y visitas a las principales atracciones turísticas de ambas ciudades.</p>
                                <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="./eurohockey">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                            </div>
                            <div>
                                <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey <br />Tecnificación</h3>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#72efdd] mb-6 `} />
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >Campus deportivo para jóvenes de 12 a 17 años en el mes de julio. Viajamos a Barcelona para realizar 14 sesiones de entrenamiento técnico en las instalaciones del Real Club de Polo.</p>
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >Participan 4 deportistas de Olímpicos y entrenadores europeos. Visitamos las principales atracciones turísticas de la ciudad Condal y Port Aventura World.</p>
                                <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="./hockeytecnificacion">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                            </div>
                            <div>
                                <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 `}>Torneos <br />Internacionales</h3>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#72efdd] mb-6 `} />
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >En Barcelona participaremos del Torneo Inmaculada, en el cual 1200 deportistas de todo Europa compiten en las categorías U10 - U12 y U14.</p>
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >En el ESPN Complex de Orlando, EEUU, nuestro equipo participará del torneo de Disney que ofrece Becas en las universidades más prestigiosas de USA, en Sub 16 y sub 14.</p>
                                <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                            </div>
                        </div>
                    </section>
                    <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center mx-auto mt-28 max-w-5xl `} >
                        <h2 data-aos-once="true" data-aos="slide-up" className={` tracking-wide font-BebasNeue text-4xl mx-8 text-[#F6BB0E] mb-6`}>¿Qué campus de Hockey Tecnificación preferís?</h2>
                        <p className={` font-Roboto text-2xl mx-auto mb-6 leading-normal max-w-xl w-full `} >Si estas en Europa y queres ser parte del mejor Campus de Hockey esta es tu oportunidad.</p>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-6 `} />
                        <div className={` mt-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 max-w-7xl `}>
                            <div>
                                <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Valencia</h3>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#72efdd] mb-6 `} />
                                <p className={` font-Roboto font-bold text-md leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 10 sesiones de entrenamientos con entrenadores internacionales y la participación especial de  3 jugadoras olímpicas, en las instalaciones del Polideportivo Virgen del Carmen Beteró, Valencia.</p>
                                <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black  shadow-sm transition-all ease-in-out duration-300 `} href="./hockeyhierbavalencia">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                            </div>
                            <div>
                                <h3 data-aos-once="true" data-aos="fade-up" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Barcelona</h3>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[#72efdd] mb-6 `} />
                                <p className={` font-Roboto font-bold text-md leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                                <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify  hyphens-auto `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 14 sesiones de entrenamientos con entrenadores de selección y la participación especial de  jugadoras de talla mundial, olímpicas y/o mundialistas, en las instalaciones del Real Club de Polo de Barcelona.</p>
                                <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black  shadow-sm transition-all ease-in-out duration-300 `} href="./hockeyhierbabarcelona">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={`  bg-whiteFadedFondo`}>
                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pt-28 pb-10`}>
                        <h2 data-aos-once="true" data-aos="fade" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Próximos eventos deportivos</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-12 `} />
                        <div className={` mx-auto text-center overflow-hidden pb-6 `}>
                            {[proximoEvento2024A, proximoEvento2024B, proximoEvento2024C].map((src, index) => (
                                <span data-aos-once="true" data-aos="fade-up" key={index} className={` inline-block rounded-full md:w-64 lg:w-72 overflow-hidden m-8 md:m-8 lg:m-4 `}>
                                    <Image src={src} alt='' />
                                </span>

                            ))}
                        </div>
                    </section>
                    <section data-aos-once="true" data-aos="fade-up" className={` relative z-30 py-12 bg-center bg-cover clip-triangle `} style={{ backgroundImage: `url('images/hockey05.jpg')`, clipPath: 'polygon(0 0, calc(50% - 25px) 0, 50% 10%, calc(50% + 25px) 0, 100% 0, 100% 100%, 0 100%)' }}>
                        <div className={` absolute inset-0 opacity-90 z-40 bg-fucsiaAzulRatioFondo bg-center bg-cover `} />
                        <h2 data-aos-once="true" data-aos="fade-up" className={` relative z-50 text-center tracking-wide font-BebasNeue text-white text-5xl italic mx-8`}>¿Querés saber más?</h2>
                        <p className={` relative z-50 text-center font-Roboto font-bold text-md text-white leading-loose mt-6`}><Link className={` mx-auto inline-block py-1 px-6 hover:bg-[rgb(141,0,91)] bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-sm shadow-black transition-all ease-in-out duration-300 `} href="/contacto">Contactanos</Link></p>
                    </section>

                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pb-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Nuestros partners</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-12 `} />
                        <div className={` mx-auto text-center overflow-visible `}>
                            <Partners />
                        </div>
                    </section>

                </div>
*/}
