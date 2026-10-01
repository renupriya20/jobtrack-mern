function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    MERN Store
                </h1>

                <div className="flex gap-6">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Cart</a>
                    <a href="#">Login</a>
                </div>

            </div>
        </nav>
    );
}
