import CardImage from '../assets/card.png'

export default function Card(){
    return(
        <section className="container justify-around space-y-20 md:pt-20 md:space-x-40 md:ml-20 md:w-10/12 md:flex md:space-y-0">
            <diV className="ml-3 space-y-10 pt-28 md:ml-0">
                <h2 className="text-5xl font-semibold text-white md:font-bold">Find a better card deal in few easy steps.</h2>
                <p className="text-lg font-semibold text-textColor">
                   Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </p>
                <button className="font-bold text-black Button">Get Started</button>
            </diV>

            <div className="">
                <img src={CardImage} alt="Card" className="" />
            </div>
        </section>
    )
}