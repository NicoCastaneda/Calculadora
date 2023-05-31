/*fondoCalc.style.backgroundColor = 'rgb(219, 53, 2)';
      fondoCalc.style.border ='2px solid rgb(95, 43, 0)';

      display.style.backgroundColor = 'rgb(145, 29, 0)';
      display.style.color= 'rgb(255, 224, 88)';
//PARA TODOS LOS BOTONES
      btnAC.style.backgroundColor= 'rgb(255, 0, 0)'; btnAC.style.color= 'rgb(255, 167, 90)'; btnAC.style.border='2px solid rgb(255, 167, 90)';
//PARA LOS BOTONES ESPECIALES
      btnMAS.style.backgroundColor= 'rgb(255, 117, 62)'; btnMAS.style.color= 'rgb(0,0,0)'; btnMAS.style.border='2px solid rgb(0,0,0)';
//PARA LOS BOTONES TRIG
      btnCOS.style.backgroundColor= 'rgb(145, 29, 0)'; btnCOS.style.color= 'rgb(255, 236, 185)'; btnCOS.style.border='2px solid rgb(255, 236, 185)';
//PARA EL BOTON IGUAL
      btnIGUAL.style.backgroundColor= 'rgb(255,0,0)'; btnIGUAL.style.color= 'rgb(0,0,0)'; btnIGUAL.style.border='2px solid rgb(0,0,0)';*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  cambiarTema(tema: string) {
    
    const fondoCalc = document.getElementById('fondoCalc') as any;
    const display = document.getElementById('display') as any;
    //BOTONES
    const btnAC = document.getElementById('btnAC') as any;
    const btnDel = document.getElementById('btnDel') as any;
    const btn1 = document.getElementById('btn1') as any;
    const btn2 = document.getElementById('btn2') as any;
    const btn3 = document.getElementById('btn3') as any;
    const btn4 = document.getElementById('btn4') as any;
    const btn5 = document.getElementById('btn5') as any;
    const btn6 = document.getElementById('btn6') as any;
    const btn7 = document.getElementById('btn7') as any;
    const btn8 = document.getElementById('btn8') as any;
    const btn9 = document.getElementById('btn9') as any;
    const btn0 = document.getElementById('btn0') as any;
    const btnPunto= document.getElementById('btnPunto') as any;
    const btnPI= document.getElementById('btnPI') as any;
    //BOTONES ESPECIALES
    const btnMAS = document.getElementById('btnMAS') as any;
    const btnMENOS = document.getElementById('btnMENOS') as any;
    const btnPOR = document.getElementById('btnPOR') as any;
    const btnDIV = document.getElementById('btnDIV') as any;
    const btnRAIZ = document.getElementById('btnRAIZ') as any;
    const btnAP = document.getElementById('btnAP') as any;
    const btnCP = document.getElementById('btnCP') as any;
    const btnPOT = document.getElementById('btnPOT') as any;
    //BOTONES TRIG
    const btnCOS = document.getElementById('btnCOS') as any;
    const btnSEN = document.getElementById('btnSEN') as any;
    const btnTAN = document.getElementById('btnTAN') as any;
    //BOTON IGUAL
    const btnIGUAL = document.getElementById('btnIGUAL') as any;

    //TEMAS
    if (tema === 'default') {
      fondoCalc.style.backgroundColor= 'rgb(157, 168, 209)';
      fondoCalc.style.border ='2px solid black';

      display.style.backgroundColor= 'rgb(54, 56, 68)';
      display.style.color= 'rgb(255, 255, 255)';
      //BOTONES
      btnAC.style.backgroundColor= 'rgb(255,255,255)'; btnAC.style.color= 'rgb(0,0,0)'; btnAC.style.border = '2px solid rgb(0,0,0)';
      btnDel.style.backgroundColor= 'rgb(255,255,255)'; btnDel.style.color= 'rgb(0,0,0)'; btnDel.style.border = '2px solid rgb(0,0,0)';
      btn1.style.backgroundColor= 'rgb(255,255,255)'; btn1.style.color= 'rgb(0,0,0)'; btn1.style.border = '2px solid rgb(0,0,0)';
      btn2.style.backgroundColor= 'rgb(255,255,255)'; btn2.style.color= 'rgb(0,0,0)';btn2.style.border = '2px solid rgb(0,0,0)';
      btn3.style.backgroundColor= 'rgb(255,255,255)'; btn3.style.color= 'rgb(0,0,0)';btn3.style.border = '2px solid rgb(0,0,0)';
      btn4.style.backgroundColor= 'rgb(255,255,255)'; btn4.style.color= 'rgb(0,0,0)';btn4.style.border = '2px solid rgb(0,0,0)';
      btn5.style.backgroundColor= 'rgb(255,255,255)'; btn5.style.color= 'rgb(0,0,0)';btn5.style.border = '2px solid rgb(0,0,0)';
      btn6.style.backgroundColor= 'rgb(255,255,255)'; btn6.style.color= 'rgb(0,0,0)';btn6.style.border = '2px solid rgb(0,0,0)';
      btn7.style.backgroundColor= 'rgb(255,255,255)'; btn7.style.color= 'rgb(0,0,0)';btn7.style.border = '2px solid rgb(0,0,0)';
      btn8.style.backgroundColor= 'rgb(255,255,255)'; btn8.style.color= 'rgb(0,0,0)';btn8.style.border = '2px solid rgb(0,0,0)';
      btn9.style.backgroundColor= 'rgb(255,255,255)'; btn9.style.color= 'rgb(0,0,0)';btn9.style.border = '2px solid rgb(0,0,0)';
      btn0.style.backgroundColor= 'rgb(255,255,255)'; btn0.style.color= 'rgb(0,0,0)';btn0.style.border = '2px solid rgb(0,0,0)';
      btnPunto.style.backgroundColor= 'rgb(255,255,255)'; btnPunto.style.color= 'rgb(0,0,0)';btnPunto.style.border = '2px solid rgb(0,0,0)';
      btnPI.style.backgroundColor= 'rgb(255,255,255)'; btnPI.style.color= 'rgb(0,0,0)';btnPI.style.border = '2px solid rgb(0,0,0)';
      //BOTONES ESPECIALES
      btnMAS.style.backgroundColor= 'rgb(255, 129, 125)'; btnMAS.style.color= 'rgb(0,0,0)';btnMAS.style.border = '2px solid rgb(0,0,0)';
      btnMENOS.style.backgroundColor= 'rgb(255, 129, 125)'; btnMENOS.style.color= 'rgb(0,0,0)';btnMENOS.style.border = '2px solid rgb(0,0,0)';
      btnPOR.style.backgroundColor= 'rgb(255, 129, 125)'; btnPOR.style.color= 'rgb(0,0,0)';btnPOR.style.border = '2px solid rgb(0,0,0)';
      btnDIV.style.backgroundColor= 'rgb(255, 129, 125)'; btnDIV.style.color= 'rgb(0,0,0)';btnDIV.style.border = '2px solid rgb(0,0,0)';
      btnRAIZ.style.backgroundColor= 'rgb(255, 129, 125)'; btnRAIZ.style.color= 'rgb(0,0,0)';btnRAIZ.style.border = '2px solid rgb(0,0,0)';
      btnPOT.style.backgroundColor= 'rgb(255, 129, 125)'; btnPOT.style.color= 'rgb(0,0,0)';btnPOT.style.border = '2px solid rgb(0,0,0)';
      btnAP.style.backgroundColor= 'rgb(255, 129, 125)'; btnAP.style.color= 'rgb(0,0,0)';btnAP.style.border = '2px solid rgb(0,0,0)';
      btnCP.style.backgroundColor= 'rgb(255, 129, 125)'; btnCP.style.color= 'rgb(0,0,0)';btnCP.style.border = '2px solid rgb(0,0,0)';
      //BOTONES TRIG
      btnCOS.style.backgroundColor= 'rgb(255, 255, 185)'; btnCOS.style.color= 'rgb(0,0,0)';btnCOS.style.border = '2px solid rgb(0,0,0)';
      btnSEN.style.backgroundColor= 'rgb(255, 255, 185)'; btnSEN.style.color= 'rgb(0,0,0)';btnSEN.style.border = '2px solid rgb(0,0,0)';
      btnTAN.style.backgroundColor= 'rgb(255, 255, 185)'; btnTAN.style.color= 'rgb(0,0,0)';btnTAN.style.border = '2px solid rgb(0,0,0)';
      //BOTON IGUAL
      btnIGUAL.style.backgroundColor= 'rgb(127, 255, 212)'; btnIGUAL.style.color= 'rgb(0,0,0)';btnIGUAL.style.border = '2px solid rgb(0,0,0)';

    } else if (tema === 'oscuro') {
      fondoCalc.style.backgroundColor = 'rgb(47, 46, 49)';
      fondoCalc.style.border ='2px solid rgb(47, 46, 49)';

      display.style.backgroundColor = 'rgb(178, 173, 187)';
      display.style.color= 'rgb(63,63,63)';
      //BOTONES
      btnAC.style.backgroundColor= 'rgb(180,180,180)'; btnAC.style.color= 'rgb(0,0,0)';btnAC.style.border = '2px solid rgb(0,0,0)';
      btnDel.style.backgroundColor= 'rgb(180,180,180)'; btnDel.style.color= 'rgb(0,0,0)';btnDel.style.border = '2px solid rgb(0,0,0)';
      btn1.style.backgroundColor= 'rgb(180,180,180)'; btn1.style.color= 'rgb(0,0,0)';btn1.style.border = '2px solid rgb(0,0,0)';
      btn2.style.backgroundColor= 'rgb(180,180,180)'; btn2.style.color= 'rgb(0,0,0)';btn2.style.border = '2px solid rgb(0,0,0)';
      btn3.style.backgroundColor= 'rgb(180,180,180)'; btn3.style.color= 'rgb(0,0,0)';btn3.style.border = '2px solid rgb(0,0,0)';
      btn4.style.backgroundColor= 'rgb(180,180,180)'; btn4.style.color= 'rgb(0,0,0)';btn4.style.border = '2px solid rgb(0,0,0)';
      btn5.style.backgroundColor= 'rgb(180,180,180)'; btn5.style.color= 'rgb(0,0,0)';btn5.style.border = '2px solid rgb(0,0,0)';
      btn6.style.backgroundColor= 'rgb(180,180,180)'; btn6.style.color= 'rgb(0,0,0)';btn6.style.border = '2px solid rgb(0,0,0)';
      btn7.style.backgroundColor= 'rgb(180,180,180)'; btn7.style.color= 'rgb(0,0,0)';btn7.style.border = '2px solid rgb(0,0,0)';
      btn8.style.backgroundColor= 'rgb(180,180,180)'; btn8.style.color= 'rgb(0,0,0)';btn8.style.border = '2px solid rgb(0,0,0)';
      btn9.style.backgroundColor= 'rgb(180,180,180)'; btn9.style.color= 'rgb(0,0,0)';btn9.style.border = '2px solid rgb(0,0,0)';
      btn0.style.backgroundColor= 'rgb(180,180,180)'; btn0.style.color= 'rgb(0,0,0)';btn0.style.border = '2px solid rgb(0,0,0)';
      btnPunto.style.backgroundColor= 'rgb(180,180,180)'; btnPunto.style.color= 'rgb(0,0,0)';btnPunto.style.border = '2px solid rgb(0,0,0)';
      btnPI.style.backgroundColor= 'rgb(180,180,180)'; btnPI.style.color= 'rgb(0,0,0)';btnPI.style.border = '2px solid rgb(0,0,0)';
      //BOTONES ESPECIALES
      btnMAS.style.backgroundColor= 'rgb(63,25,25)'; btnMAS.style.color= 'rgb(194,167,167)';btnMAS.style.border = '2px solid rgb(0,0,0)';
      btnMENOS.style.backgroundColor= 'rgb(63,25,25)'; btnMENOS.style.color= 'rgb(194,167,167)';btnMENOS.style.border = '2px solid rgb(0,0,0)';
      btnPOR.style.backgroundColor= 'rgb(63,25,25)'; btnPOR.style.color= 'rgb(194,167,167)';btnPOR.style.border = '2px solid rgb(0,0,0)';
      btnDIV.style.backgroundColor= 'rgb(63,25,25)'; btnDIV.style.color= 'rgb(194,167,167)';btnDIV.style.border = '2px solid rgb(0,0,0)';
      btnRAIZ.style.backgroundColor= 'rgb(63,25,25)'; btnRAIZ.style.color= 'rgb(194,167,167)';btnRAIZ.style.border = '2px solid rgb(0,0,0)';
      btnPOT.style.backgroundColor= 'rgb(63,25,25)'; btnPOT.style.color= 'rgb(194,167,167)';btnPOT.style.border = '2px solid rgb(0,0,0)';
      btnAP.style.backgroundColor= 'rgb(63,25,25)'; btnAP.style.color= 'rgb(194,167,167)';btnAP.style.border = '2px solid rgb(0,0,0)';
      btnCP.style.backgroundColor= 'rgb(63,25,25)'; btnCP.style.color= 'rgb(194,167,167)';btnCP.style.border = '2px solid rgb(0,0,0)';
      //BOTONES TRIG
      btnCOS.style.backgroundColor= 'rgb(170, 160, 111)'; btnCOS.style.color= 'rgb(0,0,0)';btnCOS.style.border = '2px solid rgb(0,0,0)';
      btnSEN.style.backgroundColor= 'rgb(170, 160, 111)'; btnSEN.style.color= 'rgb(0,0,0)';btnSEN.style.border = '2px solid rgb(0,0,0)';
      btnTAN.style.backgroundColor= 'rgb(170, 160, 111)'; btnTAN.style.color= 'rgb(0,0,0)';btnTAN.style.border = '2px solid rgb(0,0,0)';
      //BOTON IGUAL
      btnIGUAL.style.backgroundColor= 'rgb(33, 61, 52)'; btnIGUAL.style.color= 'rgb(255,255,255)';btnIGUAL.style.border = '2px solid rgb(0,0,0)';
    
    }else if (tema === 'hacker') {
      fondoCalc.style.backgroundColor = 'rgb(14,14,14)';
      fondoCalc.style.border ='2px solid rgb(31, 187, 0)';

      display.style.backgroundColor = 'rgb(26, 44, 23)';
      display.style.color= 'rgb(31, 187, 0)';

      // BOTONES
      btnAC.style.backgroundColor = 'rgb(4, 14, 14)'; btnAC.style.color = 'rgb(31, 187, 0)'; btnAC.style.border = '2px solid rgb(31, 187, 0)';
      btnDel.style.backgroundColor = 'rgb(4, 14, 14)'; btnDel.style.color = 'rgb(31, 187, 0)'; btnDel.style.border = '2px solid rgb(31, 187, 0)';
      btn1.style.backgroundColor = 'rgb(4, 14, 14)'; btn1.style.color = 'rgb(31, 187, 0)'; btn1.style.border = '2px solid rgb(31, 187, 0)';
      btn2.style.backgroundColor = 'rgb(4, 14, 14)'; btn2.style.color = 'rgb(31, 187, 0)'; btn2.style.border = '2px solid rgb(31, 187, 0)';
      btn3.style.backgroundColor = 'rgb(4, 14, 14)'; btn3.style.color = 'rgb(31, 187, 0)'; btn3.style.border = '2px solid rgb(31, 187, 0)';
      btn4.style.backgroundColor = 'rgb(4, 14, 14)'; btn4.style.color = 'rgb(31, 187, 0)'; btn4.style.border = '2px solid rgb(31, 187, 0)';
      btn5.style.backgroundColor = 'rgb(4, 14, 14)'; btn5.style.color = 'rgb(31, 187, 0)'; btn5.style.border = '2px solid rgb(31, 187, 0)';
      btn6.style.backgroundColor = 'rgb(4, 14, 14)'; btn6.style.color = 'rgb(31, 187, 0)'; btn6.style.border = '2px solid rgb(31, 187, 0)';
      btn7.style.backgroundColor = 'rgb(4, 14, 14)'; btn7.style.color = 'rgb(31, 187, 0)'; btn7.style.border = '2px solid rgb(31, 187, 0)';
      btn8.style.backgroundColor = 'rgb(4, 14, 14)'; btn8.style.color = 'rgb(31, 187, 0)'; btn8.style.border = '2px solid rgb(31, 187, 0)';
      btn9.style.backgroundColor = 'rgb(4, 14, 14)'; btn9.style.color = 'rgb(31, 187, 0)'; btn9.style.border = '2px solid rgb(31, 187, 0)';
      btn0.style.backgroundColor = 'rgb(4, 14, 14)'; btn0.style.color = 'rgb(31, 187, 0)'; btn0.style.border = '2px solid rgb(31, 187, 0)';
      btnPunto.style.backgroundColor = 'rgb(4, 14, 14)'; btnPunto.style.color = 'rgb(31, 187, 0)'; btnPunto.style.border = '2px solid rgb(31, 187, 0)';
      btnPI.style.backgroundColor = 'rgb(4, 14, 14)'; btnPI.style.color = 'rgb(31, 187, 0)'; btnPI.style.border = '2px solid rgb(31, 187, 0)';

      // BOTONES ESPECIALES
      btnMAS.style.backgroundColor = 'rgb(31, 187, 0)'; btnMAS.style.color = 'rgb(4, 14, 14)'; btnMAS.style.border = '2px solid rgb(0, 0, 0)';
      btnMENOS.style.backgroundColor = 'rgb(31, 187, 0)'; btnMENOS.style.color = 'rgb(4, 14, 14)'; btnMENOS.style.border = '2px solid rgb(0, 0, 0)';
      btnPOR.style.backgroundColor = 'rgb(31, 187, 0)'; btnPOR.style.color = 'rgb(4, 14, 14)'; btnPOR.style.border = '2px solid rgb(0, 0, 0)';
      btnDIV.style.backgroundColor = 'rgb(31, 187, 0)'; btnDIV.style.color = 'rgb(4, 14, 14)'; btnDIV.style.border = '2px solid rgb(0, 0, 0)';
      btnRAIZ.style.backgroundColor = 'rgb(31, 187, 0)'; btnRAIZ.style.color = 'rgb(4, 14, 14)'; btnRAIZ.style.border = '2px solid rgb(0, 0, 0)';
      btnPOT.style.backgroundColor = 'rgb(31, 187, 0)'; btnPOT.style.color = 'rgb(4, 14, 14)'; btnPOT.style.border = '2px solid rgb(0, 0, 0)';
      btnAP.style.backgroundColor = 'rgb(31, 187, 0)'; btnAP.style.color = 'rgb(4, 14, 14)'; btnAP.style.border = '2px solid rgb(0, 0, 0)';
      btnCP.style.backgroundColor = 'rgb(31, 187, 0)'; btnCP.style.color = 'rgb(4, 14, 14)'; btnCP.style.border = '2px solid rgb(0, 0, 0)';

      // BOTONES TRIG
      btnCOS.style.backgroundColor = 'rgb(26, 44, 23)'; btnCOS.style.color = 'rgb(31, 187, 0)'; btnCOS.style.border = '2px solid rgb(31, 187, 0)';
      btnSEN.style.backgroundColor = 'rgb(26, 44, 23)'; btnSEN.style.color = 'rgb(31, 187, 0)'; btnSEN.style.border = '2px solid rgb(31, 187, 0)';
      btnTAN.style.backgroundColor = 'rgb(26, 44, 23)'; btnTAN.style.color = 'rgb(31, 187, 0)'; btnTAN.style.border = '2px solid rgb(31, 187, 0)';

      // BOTON IGUAL
      btnIGUAL.style.backgroundColor = 'rgb(0, 0, 0)'; btnIGUAL.style.color = 'rgb(31, 187, 0)'; btnIGUAL.style.border = '2px solid rgb(31, 187, 0)';


    }else if (tema === 'rosa'){
      fondoCalc.style.backgroundColor = 'rgb(165, 14, 72)'; 
      fondoCalc.style.border = '2px solid rgb(255, 145, 213)';

      display.style.backgroundColor = 'rgb(59, 3, 25)'; 
      display.style.color = 'rgb(255, 255, 255)';

      // BOTONES
      btnAC.style.backgroundColor = 'rgb(255, 178, 214)'; btnAC.style.color = 'rgb(0, 0, 0)'; btnAC.style.border = '2px solid rgb(0, 0, 0)';
      btnDel.style.backgroundColor = 'rgb(255, 178, 214)'; btnDel.style.color = 'rgb(0, 0, 0)'; btnDel.style.border = '2px solid rgb(0, 0, 0)';
      btn1.style.backgroundColor = 'rgb(255, 178, 214)'; btn1.style.color = 'rgb(0, 0, 0)'; btn1.style.border = '2px solid rgb(0, 0, 0)';
      btn2.style.backgroundColor = 'rgb(255, 178, 214)'; btn2.style.color = 'rgb(0, 0, 0)'; btn2.style.border = '2px solid rgb(0, 0, 0)';
      btn3.style.backgroundColor = 'rgb(255, 178, 214)'; btn3.style.color = 'rgb(0, 0, 0)'; btn3.style.border = '2px solid rgb(0, 0, 0)';
      btn4.style.backgroundColor = 'rgb(255, 178, 214)'; btn4.style.color = 'rgb(0, 0, 0)'; btn4.style.border = '2px solid rgb(0, 0, 0)';
      btn5.style.backgroundColor = 'rgb(255, 178, 214)'; btn5.style.color = 'rgb(0, 0, 0)'; btn5.style.border = '2px solid rgb(0, 0, 0)';
      btn6.style.backgroundColor = 'rgb(255, 178, 214)'; btn6.style.color = 'rgb(0, 0, 0)'; btn6.style.border = '2px solid rgb(0, 0, 0)';
      btn7.style.backgroundColor = 'rgb(255, 178, 214)'; btn7.style.color = 'rgb(0, 0, 0)'; btn7.style.border = '2px solid rgb(0, 0, 0)';
      btn8.style.backgroundColor = 'rgb(255, 178, 214)'; btn8.style.color = 'rgb(0, 0, 0)'; btn8.style.border = '2px solid rgb(0, 0, 0)';
      btn9.style.backgroundColor = 'rgb(255, 178, 214)'; btn9.style.color = 'rgb(0, 0, 0)'; btn9.style.border = '2px solid rgb(0, 0, 0)';
      btn0.style.backgroundColor = 'rgb(255, 178, 214)'; btn0.style.color = 'rgb(0, 0, 0)'; btn0.style.border = '2px solid rgb(0, 0, 0)';
      btnPunto.style.backgroundColor = 'rgb(255, 178, 214)'; btnPunto.style.color = 'rgb(0, 0, 0)'; btnPunto.style.border = '2px solid rgb(0, 0, 0)';
      btnPI.style.backgroundColor = 'rgb(255, 178, 214)'; btnPI.style.color = 'rgb(0, 0, 0)'; btnPI.style.border = '2px solid rgb(0, 0, 0)';

      // BOTONES ESPECIALES
      btnMAS.style.backgroundColor = 'rgb(255, 129, 125)'; btnMAS.style.color = 'rgb(0, 0, 0)'; btnMAS.style.border = '2px solid rgb(0, 0, 0)';
      btnMENOS.style.backgroundColor = 'rgb(255, 129, 125)'; btnMENOS.style.color = 'rgb(0, 0, 0)'; btnMENOS.style.border = '2px solid rgb(0, 0, 0)';
      btnPOR.style.backgroundColor = 'rgb(255, 129, 125)'; btnPOR.style.color = 'rgb(0, 0, 0)'; btnPOR.style.border = '2px solid rgb(0, 0, 0)';
      btnDIV.style.backgroundColor = 'rgb(255, 129, 125)'; btnDIV.style.color = 'rgb(0, 0, 0)'; btnDIV.style.border = '2px solid rgb(0, 0, 0)';
      btnRAIZ.style.backgroundColor = 'rgb(255, 129, 125)'; btnRAIZ.style.color = 'rgb(0, 0, 0)'; btnRAIZ.style.border = '2px solid rgb(0, 0, 0)';
      btnPOT.style.backgroundColor = 'rgb(255, 129, 125)'; btnPOT.style.color = 'rgb(0, 0, 0)'; btnPOT.style.border = '2px solid rgb(0, 0, 0)';
      btnAP.style.backgroundColor = 'rgb(255, 129, 125)'; btnAP.style.color = 'rgb(0, 0, 0)'; btnAP.style.border = '2px solid rgb(0, 0, 0)';
      btnCP.style.backgroundColor = 'rgb(255, 129, 125)'; btnCP.style.color = 'rgb(0, 0, 0)'; btnCP.style.border = '2px solid rgb(0, 0, 0)';

      // BOTONES TRIG
      btnCOS.style.backgroundColor = 'rgb(255, 255, 255)'; btnCOS.style.color = 'rgb(119, 2, 49)'; btnCOS.style.border = '2px solid rgb(119, 2, 49)';
      btnSEN.style.backgroundColor = 'rgb(255, 255, 255)'; btnSEN.style.color = 'rgb(119, 2, 49)'; btnSEN.style.border = '2px solid rgb(119, 2, 49)';
      btnTAN.style.backgroundColor = 'rgb(255, 255, 255)'; btnTAN.style.color = 'rgb(119, 2, 49)'; btnTAN.style.border = '2px solid rgb(119, 2, 49)';

      // BOTON IGUAL
      btnIGUAL.style.backgroundColor = 'rgb(119, 2, 49)'; btnIGUAL.style.color = 'rgb(255, 178, 214)'; btnIGUAL.style.border = '2px solid rgb(255, 178, 214)';

    }else if (tema === 'golden'){

      fondoCalc.style.backgroundColor = 'rgb(143, 118, 6)'; 
      fondoCalc.style.border = '2px solid rgb(0,0,0)';

      display.style.backgroundColor = 'rgb(253, 255, 123)'; 
      display.style.color = 'rgb(103, 78, 0)';

      // BOTONES
      btnAC.style.backgroundColor = 'rgb(252, 255, 77)'; btnAC.style.color = 'rgb(0,0,0)'; btnAC.style.border = '2px solid rgb(0,0,0)';
      btnDel.style.backgroundColor = 'rgb(252, 255, 77)'; btnDel.style.color = 'rgb(0,0,0)'; btnDel.style.border = '2px solid rgb(0,0,0)';
      btn1.style.backgroundColor = 'rgb(252, 255, 77)'; btn1.style.color = 'rgb(0,0,0)'; btn1.style.border = '2px solid rgb(0,0,0)';
      btn2.style.backgroundColor = 'rgb(252, 255, 77)'; btn2.style.color = 'rgb(0,0,0)'; btn2.style.border = '2px solid rgb(0,0,0)';
      btn3.style.backgroundColor = 'rgb(252, 255, 77)'; btn3.style.color = 'rgb(0,0,0)'; btn3.style.border = '2px solid rgb(0,0,0)';
      btn4.style.backgroundColor = 'rgb(252, 255, 77)'; btn4.style.color = 'rgb(0,0,0)'; btn4.style.border = '2px solid rgb(0,0,0)';
      btn5.style.backgroundColor = 'rgb(252, 255, 77)'; btn5.style.color = 'rgb(0,0,0)'; btn5.style.border = '2px solid rgb(0,0,0)';
      btn6.style.backgroundColor = 'rgb(252, 255, 77)'; btn6.style.color = 'rgb(0,0,0)'; btn6.style.border = '2px solid rgb(0,0,0)';
      btn7.style.backgroundColor = 'rgb(252, 255, 77)'; btn7.style.color = 'rgb(0,0,0)'; btn7.style.border = '2px solid rgb(0,0,0)';
      btn8.style.backgroundColor = 'rgb(252, 255, 77)'; btn8.style.color = 'rgb(0,0,0)'; btn8.style.border = '2px solid rgb(0,0,0)';
      btn9.style.backgroundColor = 'rgb(252, 255, 77)'; btn9.style.color = 'rgb(0,0,0)'; btn9.style.border = '2px solid rgb(0,0,0)';
      btn0.style.backgroundColor = 'rgb(252, 255, 77)'; btn0.style.color = 'rgb(0,0,0)'; btn0.style.border = '2px solid rgb(0,0,0)';
      btnPunto.style.backgroundColor = 'rgb(252, 255, 77)'; btnPunto.style.color = 'rgb(0,0,0)'; btnPunto.style.border = '2px solid rgb(0,0,0)';
      btnPI.style.backgroundColor = 'rgb(252, 255, 77)'; btnPI.style.color = 'rgb(0,0,0)'; btnPI.style.border = '2px solid rgb(0,0,0)';
      
      // BOTONES ESPECIALES
      btnMAS.style.backgroundColor = 'rgb(116, 87, 9)'; btnMAS.style.color = 'rgb(252, 255, 77)'; btnMAS.style.border = '2px solid rgb(252, 255, 77)';
      btnMENOS.style.backgroundColor = 'rgb(116, 87, 9)'; btnMENOS.style.color = 'rgb(252, 255, 77)'; btnMENOS.style.border = '2px solid rgb(252, 255, 77)';
      btnPOR.style.backgroundColor = 'rgb(116, 87, 9)'; btnPOR.style.color = 'rgb(252, 255, 77)'; btnPOR.style.border = '2px solid rgb(252, 255, 77)';
      btnDIV.style.backgroundColor = 'rgb(116, 87, 9)'; btnDIV.style.color = 'rgb(252, 255, 77)'; btnDIV.style.border = '2px solid rgb(252, 255, 77)';
      btnRAIZ.style.backgroundColor = 'rgb(116, 87, 9)'; btnRAIZ.style.color = 'rgb(252, 255, 77)'; btnRAIZ.style.border = '2px solid rgb(252, 255, 77)';
      btnPOT.style.backgroundColor = 'rgb(116, 87, 9)'; btnPOT.style.color = 'rgb(252, 255, 77)'; btnPOT.style.border = '2px solid rgb(252, 255, 77)';
      btnAP.style.backgroundColor = 'rgb(116, 87, 9)'; btnAP.style.color = 'rgb(252, 255, 77)'; btnAP.style.border = '2px solid rgb(252, 255, 77)';
      btnCP.style.backgroundColor = 'rgb(116, 87, 9)'; btnCP.style.color = 'rgb(252, 255, 77)'; btnCP.style.border = '2px solid rgb(252, 255, 77)';
      
      // BOTONES TRIG
      btnCOS.style.backgroundColor = 'rgb(253, 255, 123)'; btnCOS.style.color = 'rgb(116, 87, 9)'; btnCOS.style.border = '2px solid rgb(116, 87, 9)';
      btnSEN.style.backgroundColor = 'rgb(253, 255, 123)'; btnSEN.style.color = 'rgb(116, 87, 9)'; btnSEN.style.border = '2px solid rgb(116, 87, 9)';
      btnTAN.style.backgroundColor = 'rgb(253, 255, 123)'; btnTAN.style.color = 'rgb(116, 87, 9)'; btnTAN.style.border = '2px solid rgb(116, 87, 9)';
      
      // BOTON IGUAL
      btnIGUAL.style.backgroundColor = 'rgb(255, 255, 175)'; btnIGUAL.style.color = 'rgb(0, 0, 0)'; btnIGUAL.style.border = '2px solid rgb(0, 0, 0)';

    }else if (tema === 'fuego'){

      fondoCalc.style.backgroundColor = 'rgb(219, 53, 2)'; 
      fondoCalc.style.border = '2px solid rgb(95, 43, 0)';

      display.style.backgroundColor = 'rgb(145, 29, 0)'; 
      display.style.color = 'rgb(255, 224, 88)';

      // BOTONES
      btnAC.style.backgroundColor = 'rgb(255, 0, 0)'; btnAC.style.color = 'rgb(255, 167, 90)'; btnAC.style.border = '2px solid rgb(255, 167, 90)';
      btnDel.style.backgroundColor = 'rgb(255, 0, 0)'; btnDel.style.color = 'rgb(255, 167, 90)'; btnDel.style.border = '2px solid rgb(255, 167, 90)';
      btn1.style.backgroundColor = 'rgb(255, 0, 0)'; btn1.style.color = 'rgb(255, 167, 90)'; btn1.style.border = '2px solid rgb(255, 167, 90)';
      btn2.style.backgroundColor = 'rgb(255, 0, 0)'; btn2.style.color = 'rgb(255, 167, 90)'; btn2.style.border = '2px solid rgb(255, 167, 90)';
      btn3.style.backgroundColor = 'rgb(255, 0, 0)'; btn3.style.color = 'rgb(255, 167, 90)'; btn3.style.border = '2px solid rgb(255, 167, 90)';
      btn4.style.backgroundColor = 'rgb(255, 0, 0)'; btn4.style.color = 'rgb(255, 167, 90)'; btn4.style.border = '2px solid rgb(255, 167, 90)';
      btn5.style.backgroundColor = 'rgb(255, 0, 0)'; btn5.style.color = 'rgb(255, 167, 90)'; btn5.style.border = '2px solid rgb(255, 167, 90)';
      btn6.style.backgroundColor = 'rgb(255, 0, 0)'; btn6.style.color = 'rgb(255, 167, 90)'; btn6.style.border = '2px solid rgb(255, 167, 90)';
      btn7.style.backgroundColor = 'rgb(255, 0, 0)'; btn7.style.color = 'rgb(255, 167, 90)'; btn7.style.border = '2px solid rgb(255, 167, 90)';
      btn8.style.backgroundColor = 'rgb(255, 0, 0)'; btn8.style.color = 'rgb(255, 167, 90)'; btn8.style.border = '2px solid rgb(255, 167, 90)';
      btn9.style.backgroundColor = 'rgb(255, 0, 0)'; btn9.style.color = 'rgb(255, 167, 90)'; btn9.style.border = '2px solid rgb(255, 167, 90)';
      btn0.style.backgroundColor = 'rgb(255, 0, 0)'; btn0.style.color = 'rgb(255, 167, 90)'; btn0.style.border = '2px solid rgb(255, 167, 90)';
      btnPunto.style.backgroundColor = 'rgb(255, 0, 0)'; btnPunto.style.color = 'rgb(255, 167, 90)'; btnPunto.style.border = '2px solid rgb(255, 167, 90)';
      btnPI.style.backgroundColor = 'rgb(255, 0, 0)'; btnPI.style.color = 'rgb(255, 167, 90)'; btnPI.style.border = '2px solid rgb(255, 167, 90)';
      
      // BOTONES ESPECIALES
      btnMAS.style.backgroundColor = 'rgb(255, 117, 62)'; btnMAS.style.color = 'rgb(0, 0, 0)'; btnMAS.style.border = '2px solid rgb(0, 0, 0)';
      btnMENOS.style.backgroundColor = 'rgb(255, 117, 62)'; btnMENOS.style.color = 'rgb(0, 0, 0)'; btnMENOS.style.border = '2px solid rgb(0, 0, 0)';
      btnPOR.style.backgroundColor = 'rgb(255, 117, 62)'; btnPOR.style.color = 'rgb(0, 0, 0)'; btnPOR.style.border = '2px solid rgb(0, 0, 0)';
      btnDIV.style.backgroundColor = 'rgb(255, 117, 62)'; btnDIV.style.color = 'rgb(0, 0, 0)'; btnDIV.style.border = '2px solid rgb(0, 0, 0)';
      btnRAIZ.style.backgroundColor = 'rgb(255, 117, 62)'; btnRAIZ.style.color = 'rgb(0, 0, 0)'; btnRAIZ.style.border = '2px solid rgb(0, 0, 0)';
      btnPOT.style.backgroundColor = 'rgb(255, 117, 62)'; btnPOT.style.color = 'rgb(0, 0, 0)'; btnPOT.style.border = '2px solid rgb(0, 0, 0)';
      btnAP.style.backgroundColor = 'rgb(255, 117, 62)'; btnAP.style.color = 'rgb(0, 0, 0)'; btnAP.style.border = '2px solid rgb(0, 0, 0)';
      btnCP.style.backgroundColor = 'rgb(255, 117, 62)'; btnCP.style.color = 'rgb(0, 0, 0)'; btnCP.style.border = '2px solid rgb(0, 0, 0)';
      
      // BOTONES TRIG
      btnCOS.style.backgroundColor = 'rgb(145, 29, 0)'; btnCOS.style.color = 'rgb(255, 236, 185)'; btnCOS.style.border = '2px solid rgb(255, 236, 185)';
      btnSEN.style.backgroundColor = 'rgb(145, 29, 0)'; btnSEN.style.color = 'rgb(255, 236, 185)'; btnSEN.style.border = '2px solid rgb(255, 236, 185)';
      btnTAN.style.backgroundColor = 'rgb(145, 29, 0)'; btnTAN.style.color = 'rgb(255, 236, 185)'; btnTAN.style.border = '2px solid rgb(255, 236, 185)';
      
      // BOTON IGUAL
      btnIGUAL.style.backgroundColor = 'rgb(255, 0, 0)'; btnIGUAL.style.color = 'rgb(0, 0, 0)'; btnIGUAL.style.border = '2px solid rgb(0, 0, 0)';
    }
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


