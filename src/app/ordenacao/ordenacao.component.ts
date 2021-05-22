import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenacao',
  templateUrl: './ordenacao.component.html',
})
export class OrdenacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
   funcionarios: any = [
    { nome: "Matheus", cargo: "Secretario", salario: 1500 },
    { nome: "Aline", cargo: "Diretora", salario: 1800 },
    { nome: "José", cargo: "Assistente", salario: 1200 },
    { nome: "Abílio", cargo: "Telefonista", salario: 1280 },
    { nome: "José", cargo: "Segurança", salario: 1600 }

  ];

  ordenar() {
    this.funcionarios.sort((a, b) => (a.nome < b.nome) ? -1 : 1);
    console.log(this.funcionarios)
  }
  ordenarNomeInvestido() {
    this.funcionarios.sort((a, b) => (a.nome > b.nome) ? -1 : 1);
    console.log(this.funcionarios)
  }

  ordenarSalario(){
    this.funcionarios.sort((a, b) => (a.salario > b.salario) ? -1 : 1);
  }

  ordenarSalarioInvestido(){
    this.funcionarios.sort((a, b) => (a.salario < b.salario) ? -1 : 1);

  }
    

}
