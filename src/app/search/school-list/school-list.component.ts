import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolsService } from '../../schools.service';
import { Subscription } from 'rxjs';


interface State {
  value: string;
  viewValue: string;
}

interface City {
  value: string;
  viewValue: string;
}

interface Methodology {
  value: string;
  viewValue: string;
}

interface Grade {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})

export class SchoolListComponent implements OnInit{


  formGroup : FormGroup = new FormGroup({
    selectedState: new FormControl(),
    schoolName: new FormControl(),
    selectedCity: new FormControl(),
    selectedMethodology: new FormControl(),
    selectedGrade: new FormControl()
  });

  selectedState: string = '';
  selectedCity: string = '';
  selectedMethodology: string = '';
  selectedGrade: string = '';

  states: State[] = [
    {value: 'SP', viewValue: 'São Paulo'}
  ];

  cities: City[] = [
    {value: 'sao-jose-dos-campos', viewValue: 'São José dos Campos'}
  ];

  methodologies: Methodology[] = [
    {value: 'M', viewValue: 'Montessori'},
    {value: 'E', viewValue: 'Espiral Construtivista'},
    {value: 'W', viewValue: 'Waldorf'},
    {value: 'P', viewValue: 'Pikler'},
    {value: 'T', viewValue: 'Tradicional'}
  ];

  grades: Grade[] = [
    {value: 'EI', viewValue: 'Ensino Infantil'},
    {value: 'EF', viewValue: 'Ensino Fundamental'},
    {value: 'EM', viewValue: 'Ensino Médio'}
  ];

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

showList = false;

private schoolSub: Subscription;

constructor(private router: Router, private schoolService: SchoolsService){

}


  ngOnInit(): void {
    // this.schoolService.getSchoolsFromApi();
    // trazer depois no resultado da busca
    // this.schoolService.getSchoolByMethod('Não informada'); 
    this.schoolSub = this.schoolService.getSchoolsUpdateListener()
    .subscribe((schools: any[]) => {
      this.schoolList = schools;
    });
  }

  ngOnDestroy() {
    this.schoolSub.unsubscribe();
  }

goTo(cod:string) {
  this.router.navigate(['/school/'+cod]);
}

searchSchool(formGroup : any) {
  console.log('formGroup', formGroup)
  this.schoolService.searchSchoolByParams(formGroup); 
  this.schoolSub = this.schoolService.getSchoolsUpdateListener()
    .subscribe((schools: any[]) => {
      this.schoolList = schools;
      this.showList = true;
    });
}

}
