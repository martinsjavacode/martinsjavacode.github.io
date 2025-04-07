import {Link} from "react-router";
import {projects, articles} from "../data/home.json";

export default function Home() {

    return (
        <>
            <div className="px-40 pb-20">
                <section className="relative h-screen bg-cover bg-center bg-[url(/images/laptops.jpg)]">
                    <div className="absolute inset-0 bg-blue-tech/40" />
                    <div className="absolute bottom-20 left-20 text-left text-white max-w-[50%] px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                            Crafting Code. Sharing Knowledge. Inspiring Growth.
                        </h1>
                        <p className="text-lg md:text-xl drop-shadow-md">
                            A space dedicated to Java and modern software development — built to inform, inspire, and evolve your engineering journey.
                        </p>
                    </div>
                </section>
            </div>

            <div className="min-h-48 text-gray-800">
                <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-lg md:text-xl">
                            Welcome to my digital space, where you can find a collection of articles on Java and other technologies.
                            I'm passionate about sharing my knowledge and experiences, and I hope you find something valuable here.
                        </p>
                    </div>
                    <div>
                        <p className="text-lg md:text-xl mb-7">
                            This is where I document my journey, share insights, and contribute to the evolution of modern Java development.
                        </p>
                        <div className="flex items-center">
                            <div className="w-1/2 h-0.5 bg-blue-600 mr-4"></div>
                            <Link to="/about" className="text-xl font-bold text-blue-600">Discover my journey</Link>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mx-40 bg-gray-100">
                <section className="grid md:grid-cols-2 items-center">
                    <div className={`relative h-100 bg-cover bg-center bg-[url(${projects.image})]`}>
                        <div className="absolute inset-0 bg-blue-tech/25"></div>
                    </div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-blue-tech mb-2">Projects</h2>
                        <h3 className="text-xl text-blue-300 mb-2">I thought that write here</h3>
                        <p className="blue-tech/80 mb-4">In here too</p>
                        <div className="flex space-x-4">
                            {projects.links.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    to={link.to}
                                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    {link.display} {">"}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 items-center">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-blue-tech mb-2">Read my articles</h2>
                        <h3 className="text-xl text-blue-300 mb-2">Improve yourself</h3>
                        <p className="text-blue-tech/80 mb-4">I don't know that I write here!</p>
                        <div className="flex space-x-4">
                            {articles.links.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    to={link.to}
                                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    {link.display} {">"}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={`relative h-100 min-2xl bg-cover bg-center bg-[url(${articles.image})]`}>
                        <div className="absolute inset-0 bg-blue-tech/25"></div>
                    </div>
                </section>
            </div>
        </>
    );
}