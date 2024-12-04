function ContactCard( { title, desc, img, linkto }) {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="flex flex-col items-center justify-between max-w-[350px] lg:max-w-[400px] shadow-xl hover:shadow-2xl rounded-xl p-6 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-mid-blue-700 cursor-pointer transition ease-in-out duration-200 min-h-[250px]">
                <div className="flex gap-3 items-start">
                    <img src={img} className="flex-1 max-w-[60px]" />
                    <div className="flex-5 flex flex-col gap-1">
                        <h1 className="text-xl font-semibold">{title}</h1>
                        <p className="font-medium text-gray-700 text-lg">{desc}</p>
                    </div>
                </div>
                <a href={linkto}><button type="button" class="rounded-md bg-mid-blue-700 hover:bg-mid-blue-600 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midblue-700 transition-all duration-300 ease-in-out">Send us a message</button></a>
            </div>
        </div>
    )
}

export default ContactCard;