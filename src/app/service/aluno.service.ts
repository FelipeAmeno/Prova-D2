import { Injectable } from '@angular/core';
import { Aluno } from '../interface/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private aluno: Aluno = {
    nome: 'Felipe Ameno',
    idade: 23,
    ra: 11724993,
  };

  constructor() { }

  getAluno(): Aluno {
    return this.aluno;
  }
}