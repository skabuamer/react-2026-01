const Header = () => {
	return (
		<div className="flex justify-between items-center p-5 bg-[#1c1c1c] text-white">
			<h1 className="text-2xl">
				Hello <br /> <span className="font-bold text-3xl">Amer 👋</span>
			</h1>
			<button className="bg-red-500 px-4 py-2 rounded text-white font-medium hover:bg-red-600">Log Out</button>
		</div>
	);
};

export default Header;
