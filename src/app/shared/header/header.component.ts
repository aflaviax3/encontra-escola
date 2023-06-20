import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, of, switchMap, tap } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SchoolsService } from '../../schools.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @ViewChild('schoolSearchInput') schoolSearchInput!: ElementRef;
  @Output() setschoolNameEvent = new EventEmitter<{name: string}>();



  options = [
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

  filteredOptions:any;


  formGroup : FormGroup = new FormGroup({
    employee: new FormControl()
  });

  schools: any = [];
  showSearches: boolean = false;
  isSearching:boolean = false;
  searchedSchools: any = [];


  siteLanguage = 'Portuguese';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
  ];

  constructor(
    private fb : FormBuilder, 
    private schoolsService: SchoolsService,
    private router: Router,
    private translate: TranslateService){

  }

  ngOnInit(): void {
    // this.schoolSearch();
    this.initForm();
    // this.getNames();
    this.schools = this.schoolsService.getSchools();

  }

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList
      .find((language) => language.code === localeCode)
      ?.label.toString();
    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }
    const currentLanguage = this.translate.currentLang;
    console.log('currentLanguage', currentLanguage);
  }

  initForm(){
    this.formGroup.get('employee')?.valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  filterData(enteredData:any){
    this.filteredOptions = this.options.filter(item => {
      return item.nome.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  schoolSearch() {
    
    // Adding keyup Event Listerner on input field
    const search$ = fromEvent(this.schoolSearchInput?.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),  
      distinctUntilChanged(),
      tap(()=> this.isSearching = true),
      switchMap((term) => term ? this.getSchools(term) : of<any>(this.schools)),
      tap(() => {
        this.isSearching = false,
        this.showSearches = true;
      }));

      search$.subscribe(data => {
        this.isSearching = false
        this.searchedSchools = data;
      })
  }

  

  getSchools(name:string): Observable<any> {
    //Here we perrform the simple call to filter function. You can also call to API here for the desired result.
    
     return of(this.filterSchools(name)) //used `of` to convert array to Observable
     //return this.http.post("url", data, {headers})  //to get the result from API use this line
   }
 
   filterSchools(name:string) {
     return this.schools.filter((val:any) => val.nome.toLowerCase().includes(name.toLowerCase()) == true )
   }

   setSchoolName(name:string) {
    this.searchedSchools = this.filterSchools(name);
    this.setschoolNameEvent.emit({name});
    this.schoolSearchInput.nativeElement.value = name;
    this.showSearches = false;
  }

  trackById(index:any,item:any):void{
    return item._id;
  }

  goTo(cod:number|string) {
    this.router.navigate([cod]);
  }
}
