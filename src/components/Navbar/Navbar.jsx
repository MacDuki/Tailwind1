function Navbar() {
	return (
		<nav className='max-h-12 flex items-center justify-between bg-slate-500'>
			<div className='flex items-center justify-center'>
				<img className='ml-1 w-12' src='src\assets\logo.png' alt='' />
				SpeedyFood
			</div>
			<ul className='flex items-center justify-around mr-1'>
				<li className='px-1'>Categories</li>
				<li className='px-1'>Orders</li>
				<li className='px-1'>Menu</li>
			</ul>
		</nav>
	);
}

export { Navbar };
