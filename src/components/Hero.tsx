import React from "react"


type Props = {
    newHeader?: string

}

const Hero = ({ newHeader }: Props) => {


    return (
        <div className="relative bg-white mx-4 ">
            <div className="mt-4 h-10 w-40 rounded-lg bg-white" />
            <div className="flex items-center justify-between flex-wrap p-8 ">
                <div className="block "></div>
                <div className=" block  lg:flex lg:items-center lg:w-1/2">
                    <div className="block mt-3 lg:flex-grow lg:mt-0 text-zinc-900 mr-4 pl-0">
                        <h1 className="block text-3xl text-right">{newHeader}</h1>
                        <h1 className="block text-sm text-right mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
                        <button type="button" className=" px-4 py-1 items-center pr-3 bg-orange-600 rounded text-white ml-4 mt-7 py-3"> Find out more
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;