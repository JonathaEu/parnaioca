import React from 'react';
import Sidebar from '../components/Sidebar';
import FloatingButton from '../components/FloatingButton';
import Footer from '../components/Footer';
import Bemvindos from '../../../../public/assets/Bemvindos.png';
import Pousada1 from '../../../../public/assets/pousada.jpg';
import Pousada2 from '../../../../public/assets/Pousada2.png';
import Pousada3 from '../../../../public/assets/suite3.jpg';
import Pousada4 from '../../../../public/assets/Pousada4.png';
import Seta from '../../../../public/assets/seta.gif';

export default function Pousada() {
    return (
        <>
            <div className="absolute bg-[url('/assets/fundo-piscina.png')] w-full bg-cover h-auto">
            <Sidebar>
                    <div className="items-center backdrop-blur-sm bg-white/60 rounded-x shadow-lg justify-center p-4">
                        <div className="text-align">
                            <img src={Bemvindos.src} alt="pousada" className="w-80 m-auto"/>
                        </div>
                        <div className="grid grid-flow-row">
                            <div className="flex flex-row justify-between m-0">
                                <img src={Pousada1.src} alt="pousada2" className="max-w-xl p-0 m-auto" />
                                <h4 className=" box-border  bg-[#6B99D6] text-justify font-semibold text-white p-14">
                                    O refúgio perfeito para os amantes da natureza e da tranquilidade.
                                    <p />Localizada em um paraíso intocado na região Angra dos Reis, Rio de Janeiro, a Parnaioca
                                    oferece uma experiência única de hospedagem em meio à exuberante
                                    mata atlântica e à serenidade do litoral.
                                    <p /><br />
                                    Lugar perfeito pra relaxar e curtir o que o resort tem de melhor
                                    Localização top, bem no coração do Rio Quente
                                    Pertinho do Parque das Fontes, cheio de piscinas e fontes de águas quentinhas
                                    Do ladinho do incrível Hot Park</h4>
                            </div>
                            <div className="flex flex-row justify-between m-0">
                                <h4 className=" box-border bg-[#d66b96] text-justify font-semibold text-white p-14">
                                    A pousada possui uma atmosfera extremamente acolhedora,
                                    típica das pousadas. Além disso, nas dependências do hotel,
                                    você encontra o restaurante Cora com as melhores opções para cafés da manhã,
                                    almoços e jantares. O restaurante funciona com serviço self-service
                                    e tem um buffet de dar água na boca!</h4>
                                <img src={Pousada2.src} alt="pousada3" className="max-w-xl p-0" />
                            </div>

                            <div className="flex flex-row justify-between m-0">
                                <img src={Pousada3.src} alt="pousada3" className="max-w-xl p-0" />
                                <h4 className=" box-border bg-[#52a580] text-justify font-semibold text-white p-14">
                                    Os apartamentos de todo o hotel foram renovados para garantir todo o conforto
                                    e comodidade que você deseja em sua viagem. São quatro tipos de acomodação:
                                    Suíte Lopes Mendes (44 m²), Suíte Parnaioca (28 m²), Suíte Lagoa Azul (28 m²),
                                    e Standard Casal (16 m²).  A Suíte Master e a Suíte Família acomodam
                                    confortavelmente 04 pessoas, e na segunda, há possibilidade de adicionar um berço.
                                    A Standard PNE acomoda até 02 pessoas e tem o quarto adaptado para pessoas com
                                    necessidades especiais. A Standard Casal acomoda até duas pessoas e há
                                    possibilidade de adicionar berço.</h4>
                            </div>
                            <div className="flex flex-row justify-between m-0">
                                <h4 className=" box-border bg-[#79822e] text-justify font-semibold text-white p-14">
                                    Agora no Parnaioca, você encontra também a Toca da Zooeira (espaço kids),
                                    espaço colorido, recheado de diversão e monitorado pela equipe de lazer.
                                    O espaço kids funciona das 09h às 18hs. Para crianças de 0 a 03 anos e 11 meses,
                                    é necessário a permanência do responsável maior de 18 anos. Para crianças acima
                                    de 04 anos, não é necessária acompanhante. O hotel conta também com a Copa do Bebê,
                                    um espaço preparado para todas as necessidades do seu neném. O Hotel Pousada também
                                    possui serviço extra de locação de carrinho de bebê e baby sister. Consulte no local.
                                </h4>
                                <img src={Pousada4.src} alt="pousada4" className="max-w-xl p-0" />
                            </div>
                            <div className="text-align">
                                <a id="link-topo" href="/app/pousada"><img src={Seta.src} alt="seta" className="w-14 cursor-pointer m-auto" /></a>
                            </div>
                        </div>
                    </div>
                    <FloatingButton />
                    </Sidebar>
                    <Footer />
 
            </div>

            {/* 
            <Sidebar>
                <div className="bg-[url('/assets/ilha.jpg')]">
                    <div className="absolute font-roboto p-4 backdrop-blur-sm bg-white/60 rounded-x shadow-lg">

                        <div className="">
                            <div className="">
                                <div className="">
                                    <img src={Bemvindos.src} alt="pousada" className="max-w-md mt-5 items-center content-center flex w-screen" />
                                </div>
                                <div className="grid grid-flow-row">
                                    <div className="flex flex-row justify-between m-0">
                                        <img src={Pousada1.src} alt="pousada2" className="max-w-xl p-0" />
                                        <h4 className=" box-border  bg-[#6B99D6] text-justify font-semibold text-white p-14">
                                            O refúgio perfeito para os amantes da natureza e da tranquilidade.
                                            <p />Localizada em um paraíso intocado na região Angra dos Reis, Rio de Janeiro, a Parnaioca
                                            oferece uma experiência única de hospedagem em meio à exuberante
                                            mata atlântica e à serenidade do litoral.
                                            <p /><br />
                                            Lugar perfeito pra relaxar e curtir o que o resort tem de melhor
                                            Localização top, bem no coração do Rio Quente
                                            Pertinho do Parque das Fontes, cheio de piscinas e fontes de águas quentinhas
                                            Do ladinho do incrível Hot Park</h4>
                                    </div>
                                    <div className="flex flex-row justify-between m-0">
                                        <h4 className=" box-border bg-[#d66b96] text-justify font-semibold text-white p-14">
                                            A pousada possui uma atmosfera extremamente acolhedora,
                                            típica das pousadas. Além disso, nas dependências do hotel,
                                            você encontra o restaurante Cora com as melhores opções para cafés da manhã,
                                            almoços e jantares. O restaurante funciona com serviço self-service
                                            e tem um buffet de dar água na boca!</h4>
                                        <img src={Pousada2.src} alt="pousada3" className="max-w-xl p-0" />
                                    </div>

                                    <div className="flex flex-row justify-between m-0">
                                        <img src={Pousada3.src} alt="pousada3" className="max-w-xl p-0" />
                                        <h4 className=" box-border bg-[#52a580] text-justify font-semibold text-white p-14">
                                            Os apartamentos de todo o hotel foram renovados para garantir todo o conforto
                                            e comodidade que você deseja em sua viagem. São quatro tipos de acomodação:
                                            Suíte Lopes Mendes (44 m²), Suíte Parnaioca (28 m²), Suíte Lagoa Azul (28 m²),
                                            e Standard Casal (16 m²).  A Suíte Master e a Suíte Família acomodam
                                            confortavelmente 04 pessoas, e na segunda, há possibilidade de adicionar um berço.
                                            A Standard PNE acomoda até 02 pessoas e tem o quarto adaptado para pessoas com
                                            necessidades especiais. A Standard Casal acomoda até duas pessoas e há
                                            possibilidade de adicionar berço.</h4>
                                    </div>
                                    <div className="flex flex-row justify-between m-0">
                                        <h4 className=" box-border bg-[#79822e] text-justify font-semibold text-white p-14">
                                            Agora no Parnaioca, você encontra também a Toca da Zooeira (espaço kids),
                                            espaço colorido, recheado de diversão e monitorado pela equipe de lazer.
                                            O espaço kids funciona das 09h às 18hs. Para crianças de 0 a 03 anos e 11 meses,
                                            é necessário a permanência do responsável maior de 18 anos. Para crianças acima
                                            de 04 anos, não é necessária acompanhante. O hotel conta também com a Copa do Bebê,
                                            um espaço preparado para todas as necessidades do seu neném. O Hotel Pousada também
                                            possui serviço extra de locação de carrinho de bebê e baby sister. Consulte no local.
                                        </h4>
                                        <img src={Pousada4.src} alt="pousada4" className="max-w-xl p-0" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
                    <FloatingButton />
            </Sidebar> */}

        </>
    )
}