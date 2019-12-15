import React, {Component} from 'react';
import iconeComp from '../../../assets/img/laptop.png';
import iconeUser from '../../../assets/img/user.png';
import iconeFile from '../../../assets/img/file.png';
import iconeCat from '../../../assets/img/categorias.png';
import iconeLogout from '../../../assets/img/logout.png';
import temaDeFundo from '../../../assets/img/semtitulo.png';
import './listarInteresses.css';


class listarInteresses extends Component{

    
    
   

    render(){

        return(

            <div>


<body>  
    <header class="fixed">
        <div id="menu_header_lateral_esquerda_adm">
            <div id="icon_menu_header_adm"><i class="fas fa-bars"></i></div>

            <div id="campo_busca_header_adm">
                <i id="icon_campo_busca_header_adm" class="fas fa-search"></i>
                <form action="">
                    <input type="text" value="" placeholder="Buscar usuário"/>
                </form>
            </div>
        </div>

        <div id="menu_header_lateral_direita_adm">
            <p>Victor Costa</p>

            <div id="img_menu_header_adm">
                <p>V</p>
            </div>
        </div>
    </header>

    <main id="conteudo_adm">
        <nav id="menu_lateral_esquerda_adm">
            <div class="identificador_menu_lateral_adm">
                <div class="identificador_menu_lateral_cor_adm"></div>
                <div class="icon_menu_lateral_adm">
                    <img src={iconeFile} alt="ícone de usuário"/>
                </div>
            </div>
            <div class="icon_menu_lateral_adm">
                <img src={iconeComp} alt="ícone de equipamentos"/>
            </div>
            <div class="icon_menu_lateral_adm">
                <img src={iconeUser} alt="ícone de classificados"/>
            </div>
            <div class="icon_menu_lateral_adm">
                <img src={iconeCat} alt="ícone de categorias"/>
            </div>
            <div class="icon_menu_lateral_adm">
                <img src={iconeLogout} alt="ícone de saída"/>
            </div>
        </nav>

        <section id="conteudo_tela_lateral_direita_adm">
            <div id="cabecalho_corpo_adm">
                <p>Usuários</p>
            </div>
            <div id="corpo_conteudo_adm">
                <div id="limitacao_espaco_corpo_conteudo_adm">
                    <div id="conteudo_add_classificado_adm">
                        <div id="margin_tela_add_classificado_adm">
                            <div id="imagens_do_classificado">
                                <div>
                                    <div id="style_add_img_adm" style={{position: "relative", display: "inline-block"}}>
                                        <input id="input_add_img_adm" type="file" change="onFileChange" style={{position: "absolute", left:"0", top:"0", opacity: "0" }} />
                                    </div>
                                    <div id="imagens_do_classificado_baixa">
                                        <div id="style_add_img_baixa_adm" style={{position: "relative", display: "inline-block"}}>
                                            <input id="input_add_img_classificado_baixa_adm" type="file" change="onFileChange" style={{position: "absolute", left:"0", top:"0", opacity: "0" }} />
                                        </div>
                                        <div id="style_add_img_baixa_adm" style={{position: "relative", display: "inline-block"}}>
                                            <input id="input_add_img_classificado_baixa_adm" type="file" change="onFileChange" style={{position: "absolute", left:"0", top:"0", opacity: "0" }} />
                                        </div>
                                        <div id="style_add_img_baixa_adm" style={{position: "relative", display: "inline-block"}}>
                                            <input id="input_add_img_classificado_baixa_adm" type="file" change="onFileChange" style={{position: "absolute", left:"0", top:"0", opacity: "0" }} />
                                        </div>
                                        <div id="style_add_img_baixa_adm" style={{position: "relative", display: "inline-block"}}>
                                            <input id="input_add_img_classificado_baixa_adm" type="file" change="onFileChange" style={{position: "absolute", left:"0", top:"0", opacity: "0" }} />
                                        </div>
                                    </div>
                                </div>
                                <div id="div_uiop_32">
                                    <div>
                                        <form id="inputs_classificado_01">
                                            <div class="formatando_input">
                                                <label class="label" for=""><b>preço</b></label>
                                                <p class="input_classificado_adm">R$ 2.000,00</p>
                                            </div>
                                            <div class="formatando_input">
                                                <label class="label" for=""><b>número de série</b></label>
                                                <p class="input_classificado_adm">EXYYY568NMNXX</p>
                                            </div>
                                            <div class="formatando_input">
                                                <label class="label" for=""><b>código</b></label>
                                                <p class="input_classificado_adm">0001</p>
                                            </div>
                                            <div class="formatando_input">
                                                <label class="label" for=""><b>fim da vida util</b></label>
                                                <p class="input_classificado_adm">18/08/2019</p>
                                            </div>
                                        </form>
                                    </div>
                                    <div>
                                        <form class="inputs_classificado_02" action="">
                                            <div class="formatando_input" style={{display: "flex"}}>
                                                <label class="label" for=""><b>data de fabricação</b></label>
                                                <p class="input_classificado_adm">10/06/2017</p>
                                            </div>
                                        </form>
                                    </div>
                                    <div>
                                        <form class="inputs_classificado_02" action="">
                                            <div class="formatando_input">
                                                <label class="label" for=""><b>softwares inclusos</b></label>
                                                <p class="input_classificado_adm" style={{width: "100%", height: "54px"}}>Mail, Agenda, iCal, Mac App Store, iTunes, Safari, Time Machine, FaceTime, Photo Booth, Mission Control, Launchpad, AirDrop, Resume, Salvar Automaticamente, Versões, Visualização Rápida, Spotlight, QuickTime
                                                    e muito mais . . .</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form action="" class="inputs_classificado_02" style={{marginLeft: "0"}}>
                                    <div class="formatando_input">
                                        <label class="label" for=""><b>avaliação</b></label>
                                        <p class="input_classificado_adm" style={{width: "100%", height: "15.625em"}}>  </p>

                                    </div>
                                </form>
                            </div>
                            <div>
                                <hr style={{width: "100%", marginTop: "30px", border: "0.5px solid rgba(255, 255, 255, 0.137)"}}/>
                            </div>
                            <div style={{marginTop: "25px"}}>
                                <p><b style={{color: "#fff", textTransform: "uppercase"}}>interessados</b></p>
                                <div class="user_interessado">
                                    <div class="fotoUser">
                                    </div>
                                    <div class="nomeUser">
                                        <p>Victor Costa</p>
                                    </div>
                                    <div class="nomeCompletoUser">
                                        <p>
                                            Victor Bezerra Costa
                                        </p>
                                    </div>
                                    <div class="emailUser">
                                        <p>victor_bc@outlook.com</p>
                                    </div>
                                    <div class="botaoUser">
                                        <button type="submit" style={{cursor:"pointer"}}>
                                            Definir Comprador
                                        </button>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </section>
        </main>

    </body>



            </div>
            
                )
            
        }
}


export default listarInteresses;