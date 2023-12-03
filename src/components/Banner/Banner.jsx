function Banner() {
	return (
		<section className='w-full flex items-center mt-0'>
			<div
				className='w-full flex items-center justify-center bg-no-repeat bg-cover bg-center h-96'
				style={{ backgroundImage: 'url("src/assets/Banner01.jpg")' }}>
				<div className='flex flex-col items-center justify-between w-full'>
					<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
					<h2>
						Dolores eum, quasi consequatur velit laboriosam molestiae illum nemo{" "}
					</h2>
				</div>
			</div>
		</section>
	);
}

export { Banner };
