

const Subscribe = () => {

    return (
        <div data-aos="flip-left" className="my-10 bg-[#cfedec] flex justify-center items-center h-80">
            <div className=" w-full text-center">
                <h2 className="text-2xl font-bold mb-6">subscribe to get offer update</h2>
                <form>
                    <input className="w-9/12 py-3 border-none outline-none pl-4" placeholder="Email address" type="text" />
                    <input className="btn rounded-none bg-purple-500 text-white" type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;