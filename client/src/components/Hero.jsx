import hero from '../assets/hero.png'


const Hero = () => {
    return ( 
        <div>

        {/* Create a container to fit in the two sections of the hero elements */}
        <div className=" w-10/12 flex flex-col     sm:flex-row container mx-auto ">
        

        {/* Below div will be for the words and cta buttons */}
        <div className=''>
            <div className='p-10 m-5    sm:m-10'>
                <h2 className='text-slate-100 font-poppins text-3xl font-bold mb-10 leading-normal sm:text-5xl'>
                    Always order delicious <br/>and fresh cuisine <br/>anytime
                </h2>
                <p className='text-slate-100 font-poppins text-lg sm:text-2xl'>
                    Simply confirm your order and<br/> take advantage of our wonderful delivery services
                </p>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <button className='bg-red p-2 text-slate-100 font-poppins rounded-xl text-lg hover:bg-opacity-30 sm:text-xl'>Order Now</button>
                <button className='text-yellow font-poppins text-lg border-b-2 border-b-yellow hover:animate-bounce sm:text-xl'>See Menu</button>
            </div>
        </div>

        {/* The below div is for the Hero Icon image */}
        <div> 
            <img src = {hero}/>
        </div>
        </div>


        </div>
     );
}
 
export default Hero;