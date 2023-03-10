import NextLink from "next/link";
import { MdOutlineLocalShipping,MdOutlinePersonOutline } from "react-icons/md";
import { FiPhone,FiHeart, FiBell } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";


const Navbar = () => {
    return (<>
        <div className="relative bg-white mx-6">
            <div className="flex items-center justify-between pt-6 mb-4 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <h1 className="text-orange-600 text-2xl font-bold">
                        <NextLink href="/" className="cursor-pointer">
                            Dealerz.
                        </NextLink>
                    </h1>
                </div>

                <div className="flex justify-end ">

                    <NextLink href="#" className="cursor-pointer">
                        <button className="text-black bg-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-s px-5 py-2.5 text-center inline-flex items-center mr-2 ">
                            <FiPhone className="mr-1" />
                            Call Center
                        </button>
                    </NextLink>
                    <NextLink href="#" className="cursor-pointer">
                        <button className="text-black bg-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-s px-5 py-2.5 text-center inline-flex items-center mr-2 ">
                            <MdOutlineLocalShipping className="mr-1" />  Shipping & Returns
                        </button>
                    </NextLink>

                </div>
            </div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-8">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex mr-10">
                        <a href="#responsive-header" className="block mt-3 lg:inline-block lg:mt-0 text-zinc-900  mr-4">
                            Shop
                        </a>
                        <a href="#responsive-header" className="block mt-3 lg:inline-block lg:mt-0 text-zinc-900 mr-4">
                            Promo
                        </a>
                        <a href="#responsive-header" className="block mt-3 lg:inline-block lg:mt-0 text-zinc-900 mr-4">
                            About
                        </a>
                        <a href="#responsive-header" className="block mt-3 lg:inline-block lg:mt-0 text-zinc-900 mr-4">
                            Blog
                        </a>
                    </div>
                    <div className="block mt-3 lg:flex-grow lg:mt-0 text-zinc-900 mr-4 pl-0">
                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">

                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50  focus:border-blue-500 dark:bg-white  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search what you need" required />
                                
                                <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="block mt-3 ml-4 lg:flex lg:mt-0 mr-4 pl-0">
                        <FiHeart className="block mt-3 lg:inline-block lg:mt-0 mr-4" size={28} />
                        <HiOutlineShoppingCart className="block mt-3 lg:inline-block lg:mt-0 mr-4" size={28}  />
                        <MdOutlinePersonOutline className="block mt-3 lg:inline-block lg:mt-0 mr-4" size={33}  />
                        <FiBell className="block mt-3 lg:inline-block lg:mt-0 mr-4" size={28}  />
                    </div>
                </div>
            </nav>
        </div>

    </>
    );
};

export default Navbar;