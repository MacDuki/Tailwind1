function Card() {
	return (
		<div className='w-11/12 flex flex-row items-center justify-center sm:max-w-xs h-auto mt-5 mx-2 sm:mx-5  sm:flex-col'>
			<div className='px-0  w-4/6 sm:px-2 sm:w-full'>
				<img
					className='rounded-md '
					src='src\assets\Burguer.jpg'
					alt=''
					loading='lazy'
				/>
			</div>
			<div className='bg-slate-400 shadow-2xl px-2 p-1 rounded-md mt-[-4px] relative w-full flex flex-col'>
				<h2 className='uppercase font-semibold'>Burguer</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<span className='font-medium'>15$</span>

				<span className='text-yellow-700 text-xs'>/36 Reseñas</span>
			</div>
		</div>
	);
}

export { Card };
