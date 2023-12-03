function ContactUs() {
	return (
		<section className=''>
			<form className='flex flex-col items-start justify-center mx-4 lg:w-6/7'>
				<span>Nombre</span>
				<input
					className='bg-gray-200 border-black border-2 rounded-md px-3 py-1 leading-snug w-full md:w-1/2 lg:w-1/4'
					type='text'
					placeholder='Nombre'
				/>
				<span>Correo</span>
				<input
					className='bg-gray-200 border-black border-2 rounded-md px-3 py-1 leading-snug w-full md:w-1/2 lg:w-1/4'
					type='text'
					placeholder='Correo'
				/>
				<span>Asunto</span>
				<textarea
					className='bg-gray-200 border-black border-2 rounded-md px-3 py-1 w-full h-60 md:w-1/2 lg:w-1/4'
					placeholder='Asunto'
				/>
				<button className=' bg-slate-200 rounded-md py-1 px-6 mt-4 block mx-auto sm:mx-32'>
					{" "}
					Enviar
				</button>
			</form>
		</section>
	);
}

export { ContactUs };
