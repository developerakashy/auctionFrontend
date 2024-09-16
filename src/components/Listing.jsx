import { connect } from "react-redux"
import logo from '../assets/heart.svg'

export function Listing(){
    return (
        <>
        <div className="mt-8 mb-8 px-6 flex gap-8 justify-center flex-wrap">
            <div className="bg-white shadow-md rounded-xl">
                <div className="relative rounded-t-xl bg-slate-200 h-64 w-80 flex  justify-center items-center">
                    <div className=" bg-slate-200 after:content-[''] after:absolute after:h-10 after:left-0 after:right-0 after:bottom-0">
                    <img className="object-cover h-60 w-64 mix-blend-multiply" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m2-digitalmat-gallery-1-202402?wid=728&hei=666&fmt=png-alpha&.v=1707263976493" alt="" />
                    <button className="absolute top-2 right-2 border rounded-full bg-white p-2"><img className="h-4" src={logo} alt="" /></button>
                    </div>
                    <div className="absolute z-10 left-0 right-0 mx-4 bottom-2 flex justify-between items-end">
                        <p className="mt-1 text font-bold text-sm">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 mt-2 font-bold text-xs bg-green-300 w-fit rounded-xl">active</p>
                    </div>
                </div>

                <div className="w-80 px-4 py-3 mx-auto rounded-b-lg">
                    <p className="line-clamp-1 text-xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo.</p>
                    {/* <p className="text-sm text-slate-700 leading-4 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p> */}
                    <div className="mt-1 flex justify-between">
                        <div>
                            <p className="text-xs text-center text-slate-500">Listed at</p>
                            <p className="text-lg text-slate-800">$249</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Current bid </p>
                            <p className="text-center text-lg font-bold">$349 <span className="text-sm text-green-500">🠁 0.5%</span></p>
                        </div>
                    </div>

                    <button className="mt-3 text-white py-1 font-bold rounded-full w-full bg-indigo-600">Place a bid</button>
                </div>
            </div>

            <div className="bg-white shadow-md rounded-xl">
                <div className="relative rounded-t-xl bg-slate-200 h-64 w-80 flex justify-center items-center">
                    <div className=" bg-slate-200 after:content-[''] after:absolute after:h-10 after:left-0 after:right-0 after:bottom-0">
                    <img className="object-cover h-60 w-64 mix-blend-multiply" src="https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch7-l300-sm-l300nzgains-542366931?$650_519_PNG$" alt="" />
                    <button className="absolute top-2 right-2 border rounded-full bg-white p-2"><img className="h-4" src={logo} alt="" /></button>
                    </div>
                    <div className="absolute z-10 left-0 right-0 mx-4 bottom-2 flex justify-between items-end">
                        <p className="mt-1 text font-bold text-sm">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 mt-2 font-bold text-xs bg-green-300 w-fit rounded-xl">active</p>
                    </div>
                </div>

                <div className="w-80 px-4 py-3 mx-auto rounded-b-lg">
                    <p className="line-clamp-1 text-xl font-bold">Product name</p>
                    {/* <p className="text-sm text-slate-700 leading-4 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p> */}
                    <div className="mt-1 flex justify-between">
                        <div>
                            <p className="text-xs text-center text-slate-500">Listed at</p>
                            <p className="text-lg text-slate-800">$249</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Current bid </p>
                            <p className="text-center text-lg font-bold">$349 <span className="text-sm text-green-500">🠁 50%</span></p>
                        </div>
                    </div>
                    <button className="mt-3 text-white py-1 font-bold rounded-full w-full bg-indigo-600">Place a bid</button>
                </div>
            </div>


            <div className="bg-white shadow-md rounded-xl">
                <div className="relative rounded-t-xl bg-slate-200 h-64 w-80 flex justify-center items-center">
                    <div className=" bg-slate-200 after:content-[''] after:absolute after:h-10 after:left-0 after:right-0 after:bottom-0">
                    <img className="object-cover h-60 w-64 mix-blend-multiply" src="https://d2xamzlzrdbdbn.cloudfront.net/products/c8ce90d4-950b-47a8-8e6b-03712de78b0d23231120.jpg" alt="" />
                    <button className="absolute top-2 right-2 border rounded-full bg-white p-2"><img className="h-4" src={logo} alt="" /></button>
                    </div>
                    <div className="absolute z-10 left-0 right-0 mx-4 bottom-2 flex justify-between items-end">
                        <p className="mt-1 text font-bold text-sm">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 mt-2 font-bold text-xs bg-green-300 w-fit rounded-xl">active</p>
                    </div>
                </div>

                <div className="w-80 px-4 py-3 mx-auto rounded-b-lg">
                    <p className="line-clamp-1 text-xl font-bold">Product name</p>
                    {/* <p className="text-sm text-slate-700 leading-4 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p> */}
                    <div className="mt-1 flex justify-between">
                        <div>
                            <p className="text-xs text-center text-slate-500">Listed at</p>
                            <p className="text-lg text-slate-800">$249</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Current bid </p>
                            <p className="text-center text-lg font-bold">$349 <span className="text-sm text-green-500">🠁 50%</span></p>
                        </div>
                    </div>
                    <button className="mt-3 text-white py-1 font-bold rounded-full w-full bg-indigo-600">Place a bid</button>
                </div>
            </div>


            <div className="bg-white shadow-md rounded-xl">
                <div className="relative rounded-t-xl bg-slate-200 h-64 w-80 flex justify-center items-center">
                    <div className=" bg-slate-200 after:content-[''] after:absolute after:h-10 after:left-0 after:right-0 after:bottom-0">
                    <img className="object-cover h-60 w-64 mix-blend-multiply" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m2-digitalmat-gallery-1-202402?wid=728&hei=666&fmt=png-alpha&.v=1707263976493" alt="" />
                    <button className="absolute top-2 right-2 border rounded-full bg-white p-2"><img className="h-4" src={logo} alt="" /></button>
                    </div>
                    <div className="absolute z-10 left-0 right-0 mx-4 bottom-2 flex justify-between items-end">
                        <p className="mt-1 text font-bold text-sm">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 mt-2 font-bold text-xs bg-green-300 w-fit rounded-xl">active</p>
                    </div>
                </div>

                <div className="w-80 px-4 py-3 mx-auto rounded-b-lg">
                    <p className="line-clamp-1 text-xl font-bold">Product name</p>
                    {/* <p className="text-sm text-slate-700 leading-4 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p> */}
                    <div className="mt-1 flex justify-between">
                        <div>
                            <p className="text-xs text-center text-slate-500">Listed at</p>
                            <p className="text-lg text-slate-800">$249</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Current bid </p>
                            <p className="text-center text-lg font-bold">$349 <span className="text-sm text-green-500">🠁 50%</span></p>
                        </div>
                    </div>
                    <button className="mt-3 text-white py-1 font-bold rounded-full w-full bg-indigo-600">Place a bid</button>
                </div>
            </div>


            <div className="bg-white shadow-md rounded-xl">
                <div className="relative rounded-t-xl bg-slate-200 h-64 w-80 flex justify-center items-center">
                    <div className=" bg-slate-200 after:content-[''] after:absolute after:h-10 after:left-0 after:right-0 after:bottom-0">
                    <img className="object-cover h-60 w-64 mix-blend-multiply" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-m2-digitalmat-gallery-1-202402?wid=728&hei=666&fmt=png-alpha&.v=1707263976493" alt="" />
                    <button className="absolute top-2 right-2 border rounded-full bg-white p-2"><img className="h-4" src={logo} alt="" /></button>
                    </div>
                    <div className="absolute z-10 left-0 right-0 mx-4 bottom-2 flex justify-between items-end">
                        <p className="mt-1 text font-bold text-sm">March 10, 2024</p>
                        <p className="tracking-wide px-2 py-1 mt-2 font-bold text-xs bg-red-300 rounded-xl">closed</p>
                    </div>
                </div>

                <div className="w-80 px-4 py-3 mx-auto rounded-b-lg">
                    <p className="line-clamp-1 text-xl font-bold">Product name</p>
                    {/* <p className="text-sm text-slate-700 leading-4 line-clamp-[2]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio inventore ipsam, dolore quas veritatis error nulla doloremque sed magni commodi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, repellendus!</p> */}
                    <div className="mt-1 flex justify-between">
                        <div>
                            <p className="text-xs text-center text-slate-500">Listed at</p>
                            <p className="text-lg text-slate-800">$249</p>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500">Closed at</p>
                            <p className="text-center text-lg font-bold">$349 <span className="text-sm text-green-500">🠁 50%</span></p>
                        </div>
                    </div>
                    <button className="mt-3 text-white py-1 font-bold rounded-full w-full bg-indigo-600 hover:bg-indigo-500">View bid</button>
                </div>
            </div>
        </div>
        </>
    )
}
