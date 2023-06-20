import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit{
  showList = false;
  favoriteSeason: string = '';
  seasons: string[] = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4']; 
  schoolList = [
    {
      "anoCenso":2013,
      "cod":35478064,
      "nome":"A MAGIA DO PENSAR ESCOLA DE EDUCACAO INFANTIL",
      "codCidade":3549904,
      "cidade":"SAO JOSE DOS CAMPOS",
      "estado":"SP",
      "regiao":"Sudeste",
      "situacaoFuncionamento":1,
      "dependenciaAdministrativa":4,
      "idebAI":0.0,
      "idebAF":0.0,
      "enemMediaGeral":0.0,
      "situacaoFuncionamentoTxt":"Em atividade",
      "dependenciaAdministrativaTxt":"Privada"
    },{"anoCenso":2013,"cod":35802888,"nome":"ABELHINHA DOURADA CENTRO RECREATIVO INFANTIL","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":0.0,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35139312,"nome":"ADVENTISTA DE SAO JOSE DOS CAMPOS COLEGIO","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":549.8259887695312,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35194517,"nome":"AGAPE PARA EDUCACAO ESPECIAL ESCOLA","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":0.0,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35420013,"nome":"AMALIA BONDESAN DOS SANTOS CEDIN","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":0.0,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35808885,"nome":"ANALIA FRANCO CECOI","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":0.0,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35153394,"nome":"ANCHIETA COLEGIO","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":0.0,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35110966,"nome":"ANTONIO TEIXEIRA FERNANDES COLEGIO TECNICO","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":533.916015625,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35146336,"nome":"APAE DE SAO JOSE DOS CAMPOS","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":0.0,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"},
    {"anoCenso":2013,"cod":35808246,"nome":"AQUARIUS UNIVAP COLEGIO","codCidade":3549904,"cidade":"SAO JOSE DOS CAMPOS","estado":"SP","regiao":"Sudeste","situacaoFuncionamento":1,"dependenciaAdministrativa":4,"idebAI":0.0,"idebAF":0.0,"enemMediaGeral":578.3579711914062,"situacaoFuncionamentoTxt":"Em atividade","dependenciaAdministrativaTxt":"Privada"}
  ];
  public orderedArray:any = [];

  constructor(private router: Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  goTo(cod:number|string) {
    this.router.navigate(['/school/'+cod]);
  }

  showResult(){
    this.showList = true;
  }



  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;


public montessori: number = 0;
public waldorf: number = 0;
public tradicional: number = 0;
public pikler: number = 0;
public espiral: number = 0;



  // constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();

  }
  getAllQuestions() {
    // this.questionService.getQuestionJson()
    //   .subscribe(res => {
        this.questionList = [
              {
                  "questionText": "Como você prefere que o ambiente de aprendizagem seja estruturado para o seu filho?",
                  "options": [{
                          "text": "Desejo que o ambiente seja adaptado para permitir o livre movimento e a exploração sensorial.",
                          "method": "P"
                      },
                      {
                          "text": "Prefiro um ambiente que valorize a autonomia e a descoberta, onde meu filho possa escolher suas atividades e trabalhar em seu próprio ritmo.",
                          "method": "M"
                      },
                      {
                          "text": "Valorizo um ambiente que estimule a criatividade e a imaginação do meu filho, com ênfase nas artes e na conexão com a natureza. ",
                          "method": "W"
                      },
                      {
                          "text": "Busco uma abordagem que proporcione uma combinação de estrutura e liberdade, permitindo que meu filho aprenda conceitos de forma gradual e progressiva. ",
                          "method": "E"
                      },
                      {
                          "text": "Prefiro um ambiente mais tradicional, onde o professor conduza as atividades e a aprendizagem seja mais direcionada e disciplinada. ",
                          "method": "T"
                      }
                  ],
                  "explanation": "TS uses a colon (:) to separate the property name from the property type"
              },
              {
                  "questionText": "Qual é a sua preferência em relação à abordagem pedagógica para o desenvolvimento físico e motor do seu filho?",
                  "options": [{
                    "text": "Desejo que meu filho tenha amplas oportunidades para explorar movimentos livres e desenvolver suas habilidades motoras de forma natural. ",
                    "method": "P"
                },
                {
                    "text": "Valorizo um ambiente estruturado que ofereça atividades direcionadas para o desenvolvimento físico e motor do meu filho. ",
                    "method": "M"
                },
                {
                    "text": "Busco uma abordagem que integre o desenvolvimento físico e motor ao currículo de forma equilibrada e gradual, proporcionando oportunidades de aprendizado prático. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha uma rotina estruturada e aulas específicas para o desenvolvimento físico e motor. ",
                    "method": "T"
                },
                {
                    "text": "Prefiro uma abordagem que ofereça uma progressão gradual e adaptada às necessidades individuais do meu filho no desenvolvimento físico e motor.",
                    "method": "E"
                }
            ],
                  "explanation": "enum is not used as a type in TypeScript"
              },
              {
                  "questionText": "Como você prefere que o aprendizado do seu filho seja abordado em relação à interação com o ambiente e aos recursos educacionais?",
                  "options": [{
                    "text": "Valorizo um ambiente que estimule a exploração sensorial, o movimento livre e o contato com materiais naturais. ",
                    "method": "P"
                },
                {
                    "text": "Acredito que meu filho deva ter a oportunidade de aprender de forma prática, manipulando materiais didáticos específicos e desenvolvendo habilidades motoras. ",
                    "method": "M"
                },
                {
                    "text": "Procuro uma abordagem que priorize a conexão com a natureza, a expressão artística e a valorização do imaginário infantil. ",
                    "method": "W"
                },
                {
                    "text": "Prefiro um ambiente mais estruturado, com aulas expositivas e o uso de livros didáticos como base para o ensino. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que combine diferentes métodos, proporcionando uma aprendizagem gradual, adaptada às necessidades individuais do meu filho. ",
                    "method": "E"
                }
            ],
                  "explanation": "interfaces are typically used to list the properties and methods for an object"
              },
              {
                  "questionText": "Como você prefere que seja o foco principal da educação do seu filho em termos de desenvolvimento?",
                  "options": [{
                    "text": "Desejo que meu filho tenha um aprendizado autônomo, com ênfase na liberdade de escolha e na exploração individual. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que estimule a criatividade, a expressão artística e a conexão com a natureza. ",
                    "method": "W"
                },
                {
                    "text": "Busco uma metodologia que priorize o desenvolvimento físico, a autonomia e a independência motora do meu filho. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com um currículo estruturado e a ênfase em conhecimentos acadêmicos e disciplinas específicas. ",
                    "method": "T"
                },
                {
                    "text": "Procuro uma abordagem que promova um aprendizado progressivo, com a oportunidade de revisitar conceitos e construir conhecimentos de forma gradual. ",
                    "method": "E"
                }
            ],
                  "explanation": "number[] is another way of writing Array<number> in TypeScript"
              },
              {
                  "questionText": "Como você gostaria que a rotina diária do seu filho fosse estruturada na escola?",
                   "options": [{
                    "text": "Valorizo um ambiente que ofereça uma rotina flexível, permitindo que meu filho tenha liberdade de explorar seus interesses e escolher suas atividades.",
                    "method": "M"
                },
                {
                    "text": "Desejo que meu filho tenha uma rotina que integre momentos de brincadeiras livres, atividades artísticas e contato com a natureza. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha uma rotina estável e previsível, com momentos dedicados à alimentação, higiene e descanso, de acordo com suas necessidades individuais. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com uma rotina estruturada, incluindo aulas específicas para cada disciplina e intervalos para lanches e recreação. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que combine uma rotina estruturada com momentos de flexibilidade, permitindo que meu filho se adapte gradualmente a diferentes atividades e ritmos de aprendizado. ",
                    "method": "E"
                }
            ],
                  "explanation": "a constructor is used by a class to take in parameters"
              },
              {
                  "questionText": "Como você gostaria que o aprendizado de línguas estrangeiras fosse abordado na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha a oportunidade de aprender línguas estrangeiras de forma natural, por meio de imersão e vivências práticas, utilizando métodos comunicativos e interativos. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que valorize a expressão artística e cultural dos países cujas línguas estão sendo ensinadas, por meio de música, dança e outras atividades criativas. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que ofereça um currículo estruturado e sequencial para o aprendizado de línguas estrangeiras, com aulas específicas e materiais didáticos adequados. ",
                    "method": "T"
                },
                {
                    "text": "Prefiro uma abordagem mais individualizada, em que meu filho possa escolher qual língua estrangeira deseja aprender e tenha a liberdade de explorar diferentes recursos e materiais de acordo com seus interesses. ",
                    "method": "P"
                },
                {
                    "text": "Busco uma abordagem que integre o ensino de línguas estrangeiras com outras áreas do conhecimento, proporcionando oportunidades de aplicação prática e interculturalidade. ",
                    "method": "E"
                }
            ],
                  "explanation": "async is not used as an access modifier type in TypeScript"
              },
              {
                  "questionText": "Como você gostaria que a relação entre professor e aluno fosse estabelecida na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha uma relação próxima e afetuosa com os professores, com espaço para diálogo, apoio emocional e respeito mútuo. ",
                    "method": "W"
                },
                {
                    "text": "Valorizo uma abordagem que promova a individualidade e a autonomia do aluno, proporcionando um ambiente de respeito e confiança entre professor e aluno. ",
                    "method": "M"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente acolhedor e seguro, com professores sensíveis às necessidades emocionais e prontos para estabelecer vínculos afetivos. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com uma relação mais formal entre professor e aluno, onde o professor desempenha o papel de autoridade e transmissor do conhecimento. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que promova uma relação de parceria entre professor e aluno, incentivando a participação ativa, o diálogo e a troca de ideias.",
                    "method": "E"
                }
            ],
                  "explanation": "the export keyword allows for the information to be transmitted between files"
              },
              {
                  "questionText": "Como você gostaria que o aprendizado do seu filho fosse abordado em relação à natureza e ao cuidado ambiental?",
                  "options": [{
                    "text": "Valorizo um ambiente que promova a conexão com a natureza, o respeito ao meio ambiente e o contato com elementos naturais. ",
                    "method": "W"
                },
                {
                    "text": "Desejo que meu filho tenha a oportunidade de explorar o ambiente natural e aprender sobre sustentabilidade de forma prática. ",
                    "method": "M"
                },
                {
                    "text": "Acredito que é importante que meu filho desenvolva uma relação de respeito com a natureza, com atividades ao ar livre e a compreensão de sua importância para o bem-estar humano. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com foco no ensino de conceitos e informações sobre a natureza e o meio ambiente. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que integre o aprendizado sobre a natureza e a sustentabilidade em diferentes áreas do currículo, promovendo a consciência ambiental de forma gradual. ",
                    "method": "E"
                }
            ],
                  "explanation": "filter is a method used to conditionally create a new array"
              },
              {
                  "questionText": "Como você gostaria que o brincar fosse abordado na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha a oportunidade de brincar livremente, explorando seus interesses e desenvolvendo sua criatividade, em um ambiente preparado com materiais educativos adequados. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que priorize o brincar de forma imaginativa e simbólica, com espaços de brincadeiras ao ar livre, materiais naturais e atividades que estimulem a fantasia e a expressão artística. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente escolar que ofereça uma variedade de brincadeiras estruturadas, com regras e orientações claras, que promovam a socialização e o trabalho em equipe. ",
                    "method": "T"
                },
                {
                    "text": "Prefiro uma abordagem mais individualizada, em que meu filho possa escolher livremente suas atividades de brincadeira, com acesso a diferentes materiais e recursos que estimulem sua curiosidade e descoberta. ",
                    "method": "P"
                },
                {
                    "text": "Busco uma abordagem que integre o brincar de forma interdisciplinar, explorando a criatividade, a resolução de problemas e a colaboração entre os alunos, por meio de jogos cooperativos e projetos práticos. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "10.	Como você gostaria que a criatividade e a expressão artística do seu filho fossem estimuladas na escola?",
                  "options": [{
                    "text": "Valorizo uma abordagem que ofereça um amplo leque de atividades artísticas, como pintura, música, dança e teatro, integradas ao currículo.",
                    "method": "W"
                },
                {
                    "text": "Desejo que meu filho tenha liberdade para explorar sua criatividade por meio de materiais artísticos variados e que suas expressões sejam valorizadas. ",
                    "method": "M"
                },
                {
                    "text": "Acredito que é importante que meu filho seja estimulado a explorar diferentes formas de expressão artística e tenha acesso a materiais e espaços apropriados para isso. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com aulas de artes estruturadas, focadas em técnicas e estilos estabelecidos. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que integre a criatividade e a expressão artística em diferentes disciplinas, permitindo que meu filho explore sua imaginação e desenvolva habilidades artísticas de forma progressiva.",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que a individualidade e a personalização do aprendizado do seu filho fossem abordadas na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha um ambiente que respeite sua individualidade, oferecendo oportunidades para explorar seus interesses e ritmo de aprendizado. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que reconheça e valorize as habilidades, talentos e características únicas do meu filho, proporcionando atividades personalizadas. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que respeite suas necessidades individuais, oferecendo atenção e cuidado individualizados. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com um currículo padronizado e aulas em grupo, onde todos os alunos aprendam o mesmo conteúdo simultaneamente. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que leve em consideração a diversidade de estilos de aprendizagem e ofereça opções e recursos diferenciados para atender às necessidades individuais do meu filho. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que o desenvolvimento socioemocional do seu filho fosse abordado na escola?",
                  "options": [{
                    "text": "Valorizo um ambiente que promova a liberdade de movimento, a autodisciplina e a autonomia emocional. ",
                    "method": "M"
                },
                {
                    "text": "Desejo que meu filho tenha a oportunidade de desenvolver habilidades sociais e emocionais por meio de atividades cooperativas e práticas artísticas. ",
                    "method": "W"
                },
                {
                    "text": "Acredito na importância de um ambiente que respeite as necessidades individuais e promova um vínculo seguro entre educadores e crianças. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais estruturada, com regras claras de comportamento e ênfase na disciplina e responsabilidade. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que integre o desenvolvimento socioemocional de forma gradual, adaptada às necessidades individuais e valorizando a autoconsciência e a empatia. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que a educação física e o desenvolvimento corporal do seu filho fossem abordados na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha liberdade para explorar diferentes movimentos e atividades físicas, desenvolvendo sua coordenação motora e consciência corporal. ",
                    "method": "P"
                },
                {
                    "text": "Valorizo uma abordagem que ofereça oportunidades de desenvolvimento físico por meio de atividades práticas, jogos cooperativos e contato com a natureza. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha acesso a um ambiente que estimule o desenvolvimento físico, com materiais e equipamentos adequados para atividades físicas. ",
                    "method": "M"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com aulas estruturadas de educação física, enfatizando a prática de esportes e o condicionamento físico. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que integre o desenvolvimento físico de forma gradual, oferecendo uma variedade de atividades e promovendo a consciência corporal e o bem-estar físico. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que a aprendizagem do seu filho fosse abordada em relação ao desenvolvimento cognitivo e intelectual?",
                  "options": [{
                    "text": "Desejo que meu filho tenha a oportunidade de explorar os conhecimentos de forma prática e sensorial, manipulando materiais didáticos e fazendo descobertas por si mesmo. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que integre a imaginação, a criatividade e o uso de narrativas para desenvolver o pensamento crítico e a capacidade de resolver problemas. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que estimule o desenvolvimento cognitivo por meio de brincadeiras dirigidas e desafios apropriados para sua idade. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com aulas expositivas, lições estruturadas e avaliações regulares para medir o progresso acadêmico. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que combine diferentes metodologias, oferecendo um currículo abrangente que estimule o pensamento crítico, a criatividade e a capacidade de aprender de forma autônoma. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que a socialização e o trabalho em grupo do seu filho fossem abordados na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha a oportunidade de trabalhar em grupos pequenos, promovendo a colaboração, a comunicação e o respeito mútuo. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que incentive a formação de vínculos afetivos e o desenvolvimento de habilidades sociais por meio de atividades cooperativas e projetos em equipe. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que respeite seu ritmo e preferência por interações sociais, proporcionando oportunidades de socialização individuais e em grupo. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com aulas em grupo e atividades que estimulem a interação social, seguindo uma estrutura hierárquica com liderança do professor. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que promova a socialização em diferentes contextos, incentivando a participação em atividades coletivas, respeitando as diferenças individuais e promovendo o trabalho em equipe. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que o desenvolvimento da autonomia e responsabilidade do seu filho fosse abordado na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha liberdade para fazer escolhas e tomar decisões em um ambiente preparado para sua autonomia, incentivando a autorregulação e o senso de responsabilidade. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que incentive a participação ativa em tarefas cotidianas, promovendo a responsabilidade pessoal e o senso de contribuição para a comunidade escolar. ",
                    "method": "P"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que valorize a autonomia, promovendo a autoconfiança e a capacidade de tomar decisões com base em suas próprias necessidades. ",
                    "method": "W"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com regras claras de comportamento e expectativas definidas para o desenvolvimento da disciplina e responsabilidade",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que combine oportunidades de escolha e responsabilidade progressiva, permitindo que meu filho desenvolva habilidades de tomada de decisão e assuma responsabilidades adequadas à sua idade. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "16.	Como você gostaria que o ambiente físico da escola contribuísse para o desenvolvimento do seu filho?",
                  "options": [{
                    "text": "Desejo um ambiente que ofereça espaços amplos e organizados, com materiais educativos acessíveis, para que meu filho possa explorar e aprender de forma autônoma. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que valorize a conexão com a natureza, proporcionando um ambiente ao ar livre e contato com elementos naturais, como jardins, hortas e áreas verdes. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente seguro e acolhedor, com espaços adaptados às suas necessidades e respeitando o ritmo de cada criança. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro um ambiente mais estruturado e tradicional, com salas de aula organizadas em fileiras e espaços específicos para cada atividade, como a sala de ciências, biblioteca e laboratório. ",
                    "method": "T"
                },
                {
                    "text": "Busco um ambiente flexível e adaptável, que ofereça diferentes áreas de aprendizagem, como espaços colaborativos, cantinhos de leitura e salas temáticas, permitindo a diversidade de atividades e interações. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que o aprendizado interdisciplinar fosse abordado na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha a oportunidade de explorar conexões entre diferentes áreas do conhecimento, utilizando abordagens práticas e projetos integrados. ",
                    "method": "E"
                },
                {
                    "text": "Valorizo uma abordagem que integre arte, música, teatro e atividades criativas em todas as disciplinas, proporcionando um aprendizado mais holístico e significativo. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que promova a interação entre as diferentes áreas do conhecimento, estimulando a curiosidade e a busca por respostas interdisciplinares. ",
                    "method": "M"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com aulas separadas por disciplinas e foco no conteúdo específico de cada uma, seguindo um currículo tradicional. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que promova a interdisciplinaridade por meio de projetos e atividades que envolvam diferentes áreas do conhecimento, incentivando a colaboração e a aplicação prática dos conhecimentos adquiridos. ",
                    "method": "P"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que o uso de tecnologia fosse abordado na sala de aula?",
                  "options": [{
                    "text": "Desejo que meu filho tenha acesso a tecnologias educacionais que auxiliem no desenvolvimento de habilidades digitais e na exploração de conteúdos de forma interativa. ",
                    "method": "E"
                },
                {
                    "text": "Valorizo uma abordagem que limite o uso de tecnologia na sala de aula, priorizando atividades manuais e o contato direto com materiais concretos. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que utilize tecnologia de forma equilibrada e consciente, integrando-a como ferramenta complementar às práticas pedagógicas. ",
                    "method": "M"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com pouco ou nenhum uso de tecnologia em sala de aula, focando no aprendizado tradicional e no uso de materiais físicos. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que utilize tecnologia de forma adequada, explorando recursos digitais como apoio ao aprendizado, mas sem substituir a interação presencial e o desenvolvimento de habilidades sociais.",
                    "method": "P"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que os valores e a ética fossem ensinados na escola?",
                  "options": [{
                    "text": "Desejo que meu filho aprenda valores e ética por meio de vivências e experiências práticas, desenvolvendo sua consciência moral e a capacidade de fazer escolhas éticas. ",
                    "method": "P"
                },
                {
                    "text": "Valorizo uma abordagem que integre ensinamentos de valores e ética em todas as atividades e interações, promovendo a empatia, o respeito e a responsabilidade social. ",
                    "method": "M"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente que estimule a reflexão sobre valores e ética, por meio de histórias, contos e momentos de discussão em grupo. ",
                    "method": "W"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, com aulas específicas sobre valores e ética, seguindo um currículo definido e com ênfase na transmissão de regras e normas sociais. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que promova a reflexão crítica sobre valores e ética, abordando questões éticas e morais relevantes para a sociedade atual, e incentivando a participação em ações sociais. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria de se envolver no processo de ensino do seu filho?",
                  "options": [{
                    "text": "Desejo ter a oportunidade de participar ativamente nas atividades da escola, contribuindo com ideias, colaborando em projetos e acompanhando de perto o progresso do meu filho. ",
                    "method": "M"
                },
                {
                    "text": "Valorizo uma abordagem que incentive a participação dos pais em eventos escolares, como festivais, apresentações e workshops, promovendo uma maior integração entre família e escola. ",
                    "method": "W"
                },
                {
                    "text": "Acredito que é importante ter um ambiente escolar que valorize a parceria com os pais, oferecendo momentos de diálogo, reuniões e orientações para que possamos apoiar o desenvolvimento do meu filho de forma efetiva. ",
                    "method": "P"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, em que o papel dos pais seja mais passivo, limitado a comparecer em reuniões escolares e receber informações sobre o desempenho do meu filho. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que encoraje a participação dos pais no planejamento e tomada de decisões da escola, envolvendo-os em comitês ou grupos de trabalho para contribuir ativamente na melhoria contínua da instituição. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você gostaria que a diversidade cultural fosse valorizada na escola?",
                  "options": [{
                    "text": "Desejo que meu filho tenha a oportunidade de aprender sobre diferentes culturas de forma ativa, por meio de vivências, troca de experiências e visitas a comunidades locais e étnicas. ",
                    "method": "W"
                },
                {
                    "text": "Valorizo uma abordagem que promova a inclusão de diferentes perspectivas culturais nos materiais didáticos, nas atividades e nas discussões em sala de aula, estimulando o respeito e a valorização da diversidade. ",
                    "method": "M"
                },
                {
                    "text": "Acredito que é importante que meu filho tenha um ambiente escolar que proporcione oportunidades para o diálogo intercultural, com projetos que abordem questões de diversidade, preconceito e igualdade. ",
                    "method": "E"
                },
                {
                    "text": "Prefiro uma abordagem mais tradicional, em que a diversidade cultural seja abordada de forma superficial, sem uma ênfase especial no currículo ou nas atividades escolares. ",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que promova a valorização da diversidade cultural por meio de atividades práticas, como culinária, música, dança e arte, que possibilitem a vivência e a expressão das diferentes culturas.",
                    "method": "P"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você descreveria a personalidade do seu filho?",
                  "options": [{
                    "text": "Meu filho é curioso, autônomo e gosta de explorar o ambiente ao seu redor de forma independente. Ele valoriza a liberdade para tomar suas próprias decisões e aprender através da experimentação. ",
                    "method": "M"
                },
                {
                    "text": "Meu filho é imaginativo, criativo e se interessa por atividades artísticas e expressivas. Ele aprecia um ambiente acolhedor, que valorize a sensibilidade e promova o desenvolvimento emocional. ",
                    "method": "W"
                },
                {
                    "text": "Meu filho é disciplinado, segue regras e gosta de estrutura. Ele se sente confortável com uma abordagem tradicional de ensino, que ofereça uma rotina organizada e um currículo estruturado. ",
                    "method": "T"
                },
                {
                    "text": "Meu filho é sensível, observador e se adapta melhor a ambientes mais tranquilos e com interações mais íntimas. Ele se beneficia de um ambiente que respeite seu ritmo individual e ofereça oportunidades de brincar de forma autônoma e independente. ",
                    "method": "P"
                },
                {
                    "text": "Meu filho é colaborativo, gosta de trabalhar em equipe e se interessa por diferentes áreas de conhecimento. Ele se beneficia de uma abordagem interdisciplinar, que estimule a participação ativa, a troca de ideias e a resolução de problemas em grupo. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você descreveria a forma como seu filho se relaciona com os outros?",
                  "options": [{
                    "text": "Meu filho é independente e gosta de interagir de forma respeitosa e colaborativa com os outros. Ele valoriza a liberdade para expressar suas ideias e opiniões, bem como a oportunidade de trabalhar em projetos em grupo. ",
                    "method": "M"
                },
                {
                    "text": "Meu filho é empático e se preocupa com o bem-estar dos outros. Ele se sente confortável em ambientes que promovem a cooperação, a compreensão mútua e o cuidado com o próximo. ",
                    "method": "W"
                },
                {
                    "text": "Meu filho se adapta facilmente às regras sociais estabelecidas e se sente confortável em seguir instruções. Ele se beneficia de um ambiente estruturado que oferece orientação clara sobre como interagir com os colegas.",
                    "method": "T"
                },
                {
                    "text": "Meu filho prefere interações mais íntimas e valoriza relacionamentos de confiança. Ele se sente mais à vontade em ambientes onde pode estabelecer vínculos próximos com os outros e ter interações mais tranquilas. ",
                    "method": "P"
                },
                {
                    "text": "Meu filho é comunicativo e gosta de compartilhar suas ideias e perspectivas com os outros. Ele se beneficia de um ambiente que estimule o diálogo, a troca de ideias e a colaboração, permitindo que ele se envolva em projetos que envolvam diferentes habilidades e pontos de vista. ",
                    "method": "E"
                }
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Como você descreveria as necessidades e características únicas do seu filho em relação a deficiências ou necessidades especiais?",
                  "options": [{
                    "text": "Meu filho tem necessidades específicas de desenvolvimento motor e sensorial. Ele se beneficia de um ambiente que ofereça estímulos adequados e respeite seu ritmo individual de aprendizado. ",
                    "method": "P"
                },
                {
                    "text": "Meu filho tem necessidades de aprendizado diferenciadas e se beneficia de abordagens individualizadas e adaptadas. Ele valoriza a oportunidade de explorar diferentes áreas de conhecimento de acordo com suas habilidades e interesses. ",
                    "method": "M"
                },
                {
                    "text": "Meu filho precisa de um ambiente acolhedor e inclusivo que respeite suas diferenças e ofereça suporte especializado para atender às suas necessidades. Ele se beneficia de um ambiente que promova a compreensão e a aceitação da diversidade. ",
                    "method": "W"
                },
                {
                    "text": "Meu filho precisa de uma abordagem estruturada e consistente para o aprendizado, com expectativas claras e metas definidas. Ele se sente mais confortável em um ambiente que ofereça rotina e previsibilidade. ",
                    "method": "T"
                },
                {
                    "text": "Meu filho se beneficia de uma abordagem interdisciplinar que considere suas necessidades específicas e valorize sua participação ativa. Ele aprecia um ambiente que promova a colaboração entre professores, terapeutas e familiares para oferecer suporte integral. ",
                    "method": "E"
                },
                {
                  "text": "Não se aplica.",
                  "method": "N"
                },
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Qual abordagem educacional você considera mais adequada para atender às necessidades de acessibilidade do seu filho?",
                  "options": [{
                    "text": "Minha prioridade é um ambiente que ofereça recursos e adaptações físicas adequadas, como rampas, corrimãos e acessibilidade para cadeiras de rodas. ",
                    "method": "P"
                },
                {
                    "text": "Valorizo uma abordagem que promova a autonomia e independência do meu filho, proporcionando um ambiente acessível e adaptado às suas necessidades motoras e sensoriais. ",
                    "method": "M"
                },
                {
                    "text": "Busco uma abordagem que valorize a inclusão e proporcione um ambiente acessível para todas as crianças, considerando suas necessidades físicas e oferecendo recursos adaptados quando necessário. ",
                    "method": "W"
                },
                {
                    "text": "Priorizo um ambiente educacional que atenda às necessidades de acessibilidade do meu filho por meio de adaptações físicas e recursos assistivos específicos. ",
                    "method": "T"
                },
                {
                    "text": "Procuro uma abordagem que promova a acessibilidade de forma abrangente, considerando tanto as adaptações físicas quanto o uso de tecnologias e recursos inclusivos para atender às necessidades individuais do meu filho. ",
                    "method": "E"
                },
                {
                  "text": "Não se aplica.",
                  "method": "N"
                },
            ],
                  "explanation": "this.propertyName is the way to access a specific property within a class"
              },
              {
                  "questionText": "Qual abordagem educacional você considera mais adequada para respeitar as crenças religiosas e espirituais do seu filho e de sua família?",
                  "options": [{
                    "text": "Busco uma abordagem que ofereça um ambiente educacional neutro em relação a questões religiosas, permitindo que meu filho desenvolva suas próprias crenças.",
                    "method": "P"
                },
                {
                    "text": "Valorizo uma abordagem que integre ensinamentos religiosos ou espirituais de forma significativa na educação do meu filho, promovendo a conexão com sua fé e tradições. ",
                    "method": "M"
                },
                {
                    "text": "Procuro uma abordagem que respeite e valorize a diversidade de crenças religiosas e espirituais, proporcionando um ambiente inclusivo e aberto ao diálogo inter-religioso. ",
                    "method": "W"
                },
                {
                    "text": "Minha preferência é por uma abordagem educacional que seja secular e não tenha ênfase religiosa, oferecendo uma educação baseada em conhecimentos acadêmicos e científicos.",
                    "method": "T"
                },
                {
                    "text": "Busco uma abordagem que promova a liberdade religiosa e permita que meu filho explore diferentes crenças e tradições de forma respeitosa e inclusiva. ",
                    "method": "E"
                }
            ], "explanation": "this.propertyName is the way to access a specific property within a class"
          }
        ];
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;

      setTimeout(() => {
        let methodsArray = [
          {methodName: 'Montessori', methodValue: this.montessori}, 
          {methodName: 'Waldorf', methodValue: this.waldorf},  
          {methodName: 'Tradicional', methodValue: this.tradicional},  
          {methodName: 'Pikler', methodValue: this.pikler},  
          {methodName: 'Espiral', methodValue: this.espiral}, 
        ];
        this.orderedArray = methodsArray.sort((n1, n2) => n2.methodValue - n1.methodValue);
        console.log("orderedArray", this.orderedArray);
      }, 1000);


    }

    switch (option.method) {
      case "M":
        this.montessori++;
        break;
      case "W":
        this.waldorf++;
        break;
      case "T":
        this.tradicional++;
        break;
      case "P":
        this.pikler++;
        break;
      case "E":
        this.espiral++;
        break;
    }
      setTimeout(() => {
        this.currentQuestion++;
        this.getProgressPercent();
      }, 1000);
  }



  resetQuiz() {
    this.getAllQuestions();
    this.points = 0;
 
    this.currentQuestion = 0;
    this.progress = "0";

  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}
