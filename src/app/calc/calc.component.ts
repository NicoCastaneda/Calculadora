import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  cambiarTema(tema: string) {
    const boton1 = document.getElementById('boton1') as HTMLButtonElement;
    const boton2 = document.getElementById('boton2') as HTMLButtonElement;
    const boton3 = document.getElementById('boton3') as HTMLButtonElement;
    const boton4 = document.getElementById('boton4') as HTMLButtonElement;
    const fondoCalc = document.getElementById('fondoCalc') as any;
    const display = document.getElementById('display') as any;
    
    // Cambiar colores de botones según el tema seleccionado
    if (tema === 'tema1') {
      fondoCalc.style.backgroundColor = 'rgb(47, 46, 49)';
      display.style.backgroundColor = 'rgb(178, 173, 187)';
    } else if (tema === 'tema2') {
      boton1.style.backgroundColor = 'blue';
      boton2.style.backgroundColor = 'blue';
      boton3.style.backgroundColor = 'red';
      boton4.style.backgroundColor = 'red';
    }
    
    // Puedes agregar más condiciones para otros temas
    
    // También puedes cambiar otros estilos de los botones si es necesario
  }


  id: number=0;
  input: string = '';
  operation: string = '';
  result: string = '';

  history: { operation: string; result: string }[] = [];

  updateDisplayValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.input = target.value;
  }

  appendInput(value: string) {
    if (value === 'Math.sqrt') {
      this.input += '√';
    } else {
      this.input += value;
    }
  }

  clearInput() {
    this.input = '';
  }

  deleteLastCharacter() {
    this.input = this.input.slice(0, -1);
  }

  calculate(): void {
    try {
      if (this.input) {
        let result: any;

        if (this.input.includes('^')) {
          const operands = this.input.split('^');
          result = Math.pow(parseFloat(operands[0]), parseFloat(operands[1]));
        } else if (this.input.includes('√')) {
          const operand = this.input.slice(1);
          result = Math.sqrt(parseFloat(operand));
        } else if (this.input.includes('sin')) {
          const operand = this.input.slice(3);
          result = Math.sin(parseFloat(operand));
        } else if (this.input.includes('cos')) {
          const operand = this.input.slice(3);
          result = Math.cos(parseFloat(operand));
        } else if (this.input.includes('tan')) {
          const operand = this.input.slice(3);
          result = Math.tan(parseFloat(operand));
        } else if (this.input.includes('π')) {
          const operand = this.input.replace('π', String(Math.PI));
          result = eval(operand);
        } else {
          result = eval(this.input);
        }

        this.operation = this.input;
        this.result = result.toString();

        this.input = result.toString();

        this.history.push({ operation: this.operation, result: this.result });
      }
    } catch (error) {
      this.input = 'Error';
    }
  }

  getHistory(): { operation: string; result: string }[] {
    return this.history;
  }

  deleteHistoryEntry(entry: { operation: string; result: string }): void {
    const index = this.history.indexOf(entry);
    if (index !== -1) {
      this.history.splice(index, 1);
    }
  }

  clearHistory(): void {
    this.history = [];
  }
}


