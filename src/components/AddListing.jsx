export const AddListing = () => {
    return(
        <>
        <form className="px-4 sm:px-12" action="">
            <h1 className="text-3xl font-bold text-gray-800 ml-2 mt-6 sm:mt-12 mb-6">Add Listing</h1>
            <div className="max-w-full">
                <label className="block text-md text-gray-700 font-semibold ml-2 mt-6 mb-2">Listing Name</label>
                <input type="text" name="productName"
                    className="w-full px-2 py-2 bg-white border-2 border-gray-200 rounded-xl text-lg outline outline-0 focus:ring-blue-gray-600 focus:border-gray-700"
                    required
                />
            </div>

            <div className="max-w-full">
                <label className="block text-md text-gray-700 font-semibold ml-2 mt-6 mb-2">Bid price</label>
                <input required className="w-full  px-4 py-2 border-2 border-gray-200 text-lg rounded-xl" type="number" name="bidPrice" id="" />
            </div>

            <div className="max-w-full">
                <label className="block text-md text-gray-700 font-semibold ml-2 mt-6 mb-2">Upload image</label>
                <input required type="file" name="productImage" accept="image/*" id=""
                    className="w-full px-2 py-2 bg-white border-2 border-gray-200 rounded-xl text-sm text-slate-500
                    focus:border-black focus:ring-black focus:z-10
                    file:mr-4 file:bg-violet-50 file:font-semibold
                    file:border-0 file:text-sm file:text-violet-700 file:px-4
                    file:py-2 file:rounded-full hover:file:bg-violet-100"
                />
            </div>


            <div className="max-w-full">
                <label className="block text-md text-gray-700 font-semibold ml-2 mt-6 mb-2">Description</label>
                <textarea required className="resize-none px-2 py-2 rounded-xl border-2 border-gray-200 min-h-[100px] w-full" name="productDescription" id=""></textarea>
            </div>

            <button className="w-full sm:w-fit px-12 py-2 bg-indigo-600 text-white my-8 rounded-full">Create Listing</button>

        </form>
        </>
    )
}
