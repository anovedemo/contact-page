import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderTransparent from "../components/HeaderTransparent";
import 'animate.css';

function Contact() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full bg-gradient-to-r from-cornell-red-700 md:from-0% from-[-30%] to-mid-blue-700 md:to-100% to-130% h-[30vh] md:h-[450px] flex items-center flex-col">
                <HeaderTransparent />
                <div class="border-t border-white w-[95vw] md:w-2/3 hidden md:flex"></div>
                <div className="flex items-center h-full md:w-2/3">
                    <h1 className="text-4xl md:text-6xl font-medium unbounded text-white text-center mb-10 md:mb-0 animate__animated animate__fadeInLeft">Contact Anove</h1>
                </div>
            </div>
            <div className="w-[90vw] lg:w-2/3 flex flex-col items-center mb-36">
                <h1 className="text-3xl text-center md:text-4xl font-semibold mt-20 unbounded">Get in contact</h1>
                <div class="border-t-2 border-gray-300 w-full my-16"></div>
                <div className="flex flex-wrap gap-10 md:gap-7 justify-center lg:justify-between w-full">
                    <ContactCard
                        title={"General Inbox"}
                        desc={"Have any questions regarding Anove's pricing or capabilities?"}
                        img={"/chat.svg"}
                        linkto={"mailto:contact@anove.ai"}
                    />
                    <ContactCard
                        title={"Media"}
                        desc={"We'd love to learn more about the article or paper you're writing."}
                        img={"/scroll.svg"}
                        linkto={"mailto:contact@anove.ai"}
                    />
                    <ContactCard
                        title={"Support"}
                        desc={"If you have any troubles with the Anove app, we're here to help!"}
                        img={"/headset.svg"}
                        linkto={"mailto:contact@anove.ai"}
                    />
                    <ContactCard
                        title={"Partnerships"}
                        desc={"We are always open to partneships. Send us a message to discuss."}
                        img={"/handshake.svg"}
                        linkto={"mailto:contact@anove.ai"}
                    />
                    <ContactCard
                        title={"Report a Bug"}
                        desc={"Have you found a bug or security vulnerability in the Anove app?"}
                        img={"/bug-beetle.svg"}
                        linkto={"mailto:contact@anove.ai"}
                    />
                    <ContactCard
                        title={"Vacancies"}
                        desc={"We're looking for talented people."}
                        img={"/read-cv-logo.svg"}
                        linkto={"https://www.anove.ai/vacancies"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;