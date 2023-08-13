import { Component } from '@angular/core';
import { InfoLsymService } from '../services/info-lsym.service';
import { Info } from '../compartido/info';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-info-lsym',
  templateUrl: './info-lsym.component.html',
  styleUrls: ['./info-lsym.component.css']
})
export class InfoLsymComponent {

  info:Info = new Info();
  text1: string = "";
  text2: string = "";
  text3: string = "";

  text1_ES: string = "LSYM no es sólo una empresa, nuestro equipo es un grupo de investigadores académicos que han dedicado su vida a la investigación en realidad virtual, modelado matemático, plataformas de movimiento y arquitectura informática. Doctores y profesores universitarios de las áreas de Ingeniería Informática, Matemáticas y Física se han unido con el objetivo común de crear el simulador de maquinaria definitivo.";
  text2_ES: string = "Su experiencia docente y sus conocimientos nos han permitido construir una potente herramienta que hace que el aprendizaje y la enseñanza sean mucho más fáciles, agradables y eficaces.";
  text3_ES: string = "Con sede en el Instituto de Robótica de la Universidad de Valencia (IRTIC), estamos en el corazón de la innovación. Nuestra principal línea de interés es el desarrollo e integración de sistemas de formación para los operarios, basados en la simulación en tiempo real. Este hecho nos permite ser expertos en simuladores de maquinaria y fabricar un producto realmente puntero.";

  text1_EN: string = "LSYM is not just a company, our team is a group of academical investigators who have dedicated their life to the research in virtual reality, mathematical modelling, motion platforms and computer architecture. University PhDs and Professors, in areas of Computer Engineering, Mathematics and Physics have joined together for a common goal of creating the ultimate machinery simulator.";
  text2_EN: string = "Their teaching experience and expertise allowed us to build a powerful tool that makes learning and teaching much easier, enjoyable and efficient.";
  text3_EN: string = "Based at the Robotics Institute in the University of Valencia (IRTIC), we are in the heart of innovation. Our main line of interest is the development and integration of training systems for the operators, based on real-time simulation. This fact, allows us to be experts in machinery simulators and to manufacture a truly state-of-the-art product.";

  text1_FR: string = "LSYM n'est pas seulement une entreprise, notre équipe est un groupe de chercheurs universitaires qui ont consacré leur vie à la recherche sur la réalité virtuelle, la modélisation mathématique, les plateformes de mouvement et l'architecture informatique. Des docteurs et des professeurs d'université, dans les domaines de l'ingénierie informatique, des mathématiques et de la physique, se sont réunis dans le but commun de créer le meilleur simulateur de machines.";
  text2_FR: string = "Leur expérience et leur expertise en matière d'enseignement nous ont permis de construire un outil puissant qui rend l'apprentissage et l'enseignement beaucoup plus faciles, agréables et efficaces.";
  text3_FR: string = "Basés à l'Institut de robotique de l'Université de Valence (IRTIC), nous sommes au cœur de l'innovation. Notre principal centre d'intérêt est le développement et l'intégration de systèmes de formation pour les opérateurs, basés sur la simulation en temps réel. Ce fait, nous permet d'être des experts en simulateurs de machines et de fabriquer un produit vraiment à la pointe de la technologie.";

  text1_IT: string = "LSYM non è solo un'azienda, il nostro team è un gruppo di ricercatori accademici che hanno dedicato la loro vita alla ricerca nella realtà virtuale, nella modellazione matematica, nelle piattaforme di movimento e nell'architettura dei computer. Medici e professori universitari delle aree di Ingegneria Informatica, Matematica e Fisica si sono uniti con l'obiettivo comune di creare il simulatore di macchine definitivo.";
  text2_IT: string = "La sua esperienza e conoscenza dell'insegnamento ci hanno permesso di costruire un potente strumento che rende l'apprendimento e l'insegnamento molto più facili, più divertenti e più efficaci.";
  text3_IT: string = "Con sede presso l'Istituto di robotica dell'Università di Valencia (IRTIC), siamo al centro dell'innovazione. La nostra principale linea di interesse è lo sviluppo e l'integrazione di sistemi di formazione per operatori, basati sulla simulazione in tempo reale. Questo fatto ci permette di essere esperti di simulatori di macchinari e realizzare un prodotto veramente all'avanguardia.";

  text1_PO: string = "A LSYM não é apenas uma empresa, nossa equipe é um grupo de pesquisadores acadêmicos que dedicaram suas vidas à pesquisa em realidade virtual, modelagem matemática, plataformas de movimento e arquitetura de computadores. Doutores e professores universitários das áreas de Engenharia da Computação, Matemática e Física se uniram com o objetivo comum de criar o simulador definitivo de máquinas.";
  text2_PO: string = "Sua experiência e conhecimento de ensino nos permitiram construir uma ferramenta poderosa que torna o aprendizado e o ensino muito mais fáceis, agradáveis ​​e eficazes.";
  text3_PO: string = "Com sede no Instituto de Robótica da Universidade de Valência (IRTIC), estamos no centro da inovação. Nossa principal linha de interesse é o desenvolvimento e integração de sistemas de treinamento para operadores, baseados em simulação em tempo real. Este fato nos permite ser especialistas em simuladores de máquinas e fabricar um produto verdadeiramente de ponta.";

  errorMensaje:String = "";
  language: String = "es";

  constructor(private infoService:InfoLsymService, private sharedService:SharedService){}

  ngOnInit(){

    this.sharedService.getLanguageValue().subscribe(language => {
      this.language = language;
      this.loadinfo();
    });
    
    
  }

  loadinfo(){
      // Continuar con las acciones posteriores al subscribe
      if(this.language == "es"){
        this.text1 = this.text1_ES;
        this.text2 = this.text2_ES;
        this.text3 = this.text3_ES;
      }
      else if(this.language == "en"){
        this.text1 = this.text1_EN;
        this.text2 = this.text2_EN;
        this.text3 = this.text3_EN;
      }
      else if(this.language == "fr"){
        this.text1 = this.text1_FR;
        this.text2 = this.text2_FR;
        this.text3 = this.text3_FR;
      }
      else if(this.language == "po"){
        this.text1 = this.text1_PO;
        this.text2 = this.text2_PO;
        this.text3 = this.text3_PO;
      }
      else{
        this.text1 = this.text1_IT;
        this.text2 = this.text2_IT;
        this.text3 = this.text3_IT;
      }
  }

}
