"use client"
import React from 'react'
import Image from 'next/image';
import App from "c:/Users/eojin/Downloads/financially terminado/prueba6/expense-tracker/app/_components/microfono";



function VoiceBudget() {
  ;
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          ¡Prueba nuestro asistente de voz!
            <strong className="font-extrabold text-primary sm:block"> Haz todo mas sencillo </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Dale indicaciones con tu voz, el puede crear gastos y presupuestos, ¡solo dicelo!
          </p>
          <Image src= {"/cdd.png"} alt= "cdd"
          width={1000}
          height={700}
          className= 'mt-5 rounded-xl border-2' />
          <App/>
        </div>
      </div>
    </section>
  )
}

export default VoiceBudget
