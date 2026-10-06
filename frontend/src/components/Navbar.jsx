function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <h1 className="text-2xl font-bold text-blue-600">
                    Job Tracker
                </h1>

                <div className="flex items-center gap-6">
                    <a href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </a>
                    <a href="/login" className="text-gray-700 hover:text-blue-600">
                        Login
                    </a>
                    <a href="register" className="text-gray-600 hover:text-blue-600">
                        Register
                    </a>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;