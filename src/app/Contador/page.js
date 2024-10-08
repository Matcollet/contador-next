"use client"
import React, { useState } from 'react'
import '../globals.css'
export default function Contador() {

  const [numero, setNumero] = useState(0)

  const corNumero = () => {
    if (numero > 0 ) {
      return "darkgreen";
    } else if (numero < 0) {
      return "maroon";
    } else {
      return "black";
    }
  };

  function aumentar1() {
    setNumero(numero + 1)
  }
  function diminuir1() {
    setNumero(numero - 1)
  }
  function aumentar10() {
    setNumero(numero + 10)
  }
  function diminuir10() {
    setNumero(numero - 10)
  }
  function aumentar100() {
    setNumero(numero + 100)
  }
  function diminuir100() {
    setNumero(numero - 100)
  }
  function aumentar1000() {
    setNumero(numero + 1000)
  }
  function diminuir1000() {
    setNumero(numero - 1000)
  }
  function aumentar10000() {
    setNumero(numero + 10000)
  }
  function diminuir10000() {
    setNumero(numero - 10000)
  }
  function zerar() {
    setNumero(numero - numero)
  }
  function randomadd() {
    const numeroAleatorio = Math.floor(Math.random() * 1000000) + 1;
    const sinal = Math.random() < 0.5 ? -1 : 1;
    setNumero(numeroAleatorio * sinal);
  }

  return (
    <section className='geral'>
      <div id='topo'>
        <h1>COUNTER</h1>
        <section className="numero" style={{ color: corNumero()}}>
        <p>{numero}</p>
        </section>
      </div>
      <section className='btns'>
        <section className='btn-p'>
          <button className='positivos' onClick={aumentar1}>+1</button>
          <button className='positivos' onClick={aumentar10}>+10</button>
          <button className='positivos' onClick={aumentar100}>+100</button>
          <button className='positivos' onClick={aumentar1000}>+1000</button>
          <button className='positivos' onClick={aumentar10000}>+10000</button>
        </section>
        <button className='rdm-btn' onClick={randomadd}>Random 1000000</button>
        <button className='z-btn' onClick={zerar}>ZERAR</button>
        <section className='btn-n'>
          <button className='negativos' onClick={diminuir1}>-1</button>
          <button className='negativos' onClick={diminuir10}>-10</button>
          <button className='negativos' onClick={diminuir100}>-100</button>
          <button className='negativos' onClick={diminuir1000}>-1000</button>
          <button className='negativos' onClick={diminuir10000}>-10000</button>
        </section>
      </section>
    </section>
  );
}