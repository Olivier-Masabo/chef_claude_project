 export default function Main(){

    return(
       
       <div>
        <form className="flex flex-wrap items-center justify-center mt-8" name="">
            <input type="text" className="border p-2 rounded-lg w-[20%] outline-0 border-gray-400 shadow-gray-400 shadow-md" placeholder="E.g: fish" />
            <button className="border-2 p-2 rounded-lg text-white bg-black cursor-pointer">+ Add ingredient</button>
        </form>
       </div>
    )
 }