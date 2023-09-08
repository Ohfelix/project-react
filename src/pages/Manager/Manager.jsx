import React from 'react'

const Manager = () => {
  return (
    <section className='items-center'>
      <div>
        <h2 className='text-4xl leading-10 text-headingColor font-semibold md:text-5xl md:leading-12 text-center mb-3'
        >Tela reservada para o cadastro de possiveis clientes a partir da tela de cadastro</h2>

      </div>
      <div className='m-5 items-center '>
        <table className='p-8 bg-gray-200 w-[300px]'>
          <ul className='p-4'>
            <li>Nome</li>
            <li>Email</li>
            <li>Telefone</li>
            <br />
            <li>Texto :</li>
            <br />
            <div className='w-[270px] h-[200px] justify-center rounded-md bg-white'>

            </div>
          </ul>
        </table>
      </div>
    </section>
  )
}

export default Manager