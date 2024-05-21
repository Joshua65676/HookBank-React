
export default function Service(){
    return(
        <section className="mt-20 md:ml-20 Service">
          <div className="pt-16 ml-5 md:justify-between md:flex">
            <div className="space-y-10 md:w-10/12 md:ml-32">
                <h2 className="text-5xl font-bold text-white">Let’s try our service now!</h2>
                <p className="md:w-[440px] text-xl text-textColor font-semibold">
                  Everything you need to accept card payments and grow your business anywhere on the planet.
                </p>
            </div>
            <div className="pt-16 mr-52">
                <button className="font-bold text-black Button">
                    Get Started
                </button>
            </div>
          </div>
        </section>
    )
}