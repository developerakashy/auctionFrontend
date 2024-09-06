import { connect } from "react-redux"

export function Listing(){
    return (
        <>
        <div className="mt-8 mb-8 flex gap-16 justify-center flex-wrap">
            <div className="bg-white shadow-lg rounded-xl">
                <div className="h-64 w-96 flex justify-center items-center">
                    <img className="rounded-t-xl object-cover h-64 w-96" src="https://product-card-orpin.vercel.app/images/image-product-desktop.jpg" alt="" />
                </div>

                <div className="w-80 m-5 mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="mt-2">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 font-bold text-sm bg-emerald-400 w-fit rounded-xl">active</p>
                    </div>
                    <p className="mt-2 text-3xl font-bold">Product name</p>
                    <p className=" text-base leading-6 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p>
                    <p className="mt-2 text-lg font-bold">Highest Bidded <span className="ml-2 font-extrabold text-2xl text-emerald-500 italic">$349</span></p>
                    <p className="text-lg font-bold">listed  <span className="ml-2 italic  text-xl text-gray-600 font-extrabold">$239</span></p>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl">
                <div className="h-64 w-96 flex justify-center items-center">
                    <img className="rounded-t-xl object-cover h-64 w-96" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m2-digitalmat-gallery-1-202402?wid=728&hei=666&fmt=png-alpha&.v=1707263976493" alt="" />
                </div>

                <div className="w-80 m-5 mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="mt-2">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 font-bold text-sm bg-emerald-400 w-fit rounded-xl">active</p>
                    </div>
                    <p className="mt-2 text-3xl font-bold">Product name</p>
                    <p className=" text-base leading-6 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p>
                    <p className="mt-2 text-lg font-bold">Highest Bidded <span className="ml-2 font-extrabold text-2xl text-emerald-500 italic">$349</span></p>
                    <p className="text-lg font-bold">listed  <span className="ml-2 italic  text-xl text-gray-600 font-extrabold">$239</span></p>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl">
                <div className="h-64 w-96 flex justify-center items-center">
                    <img className="rounded-t-xl object-cover h-64 w-96" src="https://images.samsung.com/in/smartphones/galaxy-z-fold6/buy/kv_2exclusive_PC_v4.jpg?imbypass=true" alt="" />
                </div>

                <div className="w-80 m-5 mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="mt-2">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 font-bold text-sm bg-emerald-400 w-fit rounded-xl">active</p>
                    </div>
                    <p className="mt-2 text-3xl font-bold">Product name</p>
                    <p className=" text-base leading-6 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p>
                    <p className="mt-2 text-lg font-bold">Highest Bidded <span className="ml-2 font-extrabold text-2xl text-emerald-500 italic">$349</span></p>
                    <p className="text-lg font-bold">listed  <span className="ml-2 italic  text-xl text-gray-600 font-extrabold">$239</span></p>
                </div>
            </div>

            <div className="shadow-lg rounded-xl">
                <div className="h-64 w-96 flex justify-center items-center">
                    <img className="rounded-t-xl object-cover h-64 w-96" src="https://product-card-orpin.vercel.app/images/image-product-desktop.jpg" alt="" />
                </div>

                <div className="w-80 m-5 mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="mt-2">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 font-bold text-sm bg-emerald-400 w-fit rounded-xl">active</p>
                    </div>
                    <p className="mt-2 text-3xl font-bold">Product name</p>
                    <p className=" text-base leading-6 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p>
                    <p className="mt-2 text-lg font-bold">Highest Bidded <span className="ml-2 font-extrabold text-2xl text-emerald-500 italic">$349</span></p>
                    <p className="text-lg font-bold">listed  <span className="ml-2 italic  text-xl text-gray-600 font-extrabold">$239</span></p>
                </div>
            </div>
        </div>
        </>
    )
}
