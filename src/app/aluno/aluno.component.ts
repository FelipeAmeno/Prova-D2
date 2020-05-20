import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno.service';
import { Aluno } from '../interface/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent implements OnInit {
  public aluno: Aluno;

  constructor(public alunoService: AlunoService) { }

  ngOnInit(): void {
    this.aluno = this.alunoService.getAluno();
  }
}