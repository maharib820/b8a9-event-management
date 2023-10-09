

const Offer = () => {
    return (
        <div>
            <div className="bg-gray-100">
                <header className="bg-gray-800 text-white py-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-semibold">Special Offer</h1>
                        <p className="text-lg mt-2">Limited-time promotion</p>
                    </div>
                </header>
                <section className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Silver</h2>
                            <p className="text-gray-600">Get your silver membership</p>
                            <div className="mt-4">
                                <span className="text-2xl font-semibold">$2000</span>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                Buy Now
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Gold</h2>
                            <p className="text-gray-600">Get your gold membership</p>
                            <div className="mt-4">
                                <span className="text-2xl font-semibold">$3000</span>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                Buy Now
                            </button>
                        </div>

                        {/* Offer Card 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Platinum</h2>
                            <p className="text-gray-600">Get your platinum membership</p>
                            <div className="mt-4">
                                <span className="text-2xl font-semibold">$5000</span>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Offer;