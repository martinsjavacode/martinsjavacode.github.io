export default function About() {
    return (
        <section>
            <div>
                <div>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQE7eoussavD9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718796709728?e=1749686400&v=beta&t=XdxGTRl0RMHKNQ-z_nM1rv5zEFDKXd_KO2U69ZTJc2c"
                        alt="Alexandre Martins"
                    />
                </div>

                <div className="w-full md:w-4/5 bg-white rounded-2xl shadow-xl p-8 md:p-12 ml-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">About Me</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        I'm Alexandre Araújo Martins, a software engineer focused on backend development,
                        specialized in Java, and passionate about building robust, secure, and scalable systems.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Currently, I’m rebuilding a custom security library from scratch — designed to decode JWT tokens and generate DTOs that represent user principals, inspired by Spring Security and adaptable across frameworks.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        I write Java-related articles on <a href="https://martinsjavacode.medium.com" target="_blank" className="text-blue-500 underline">Medium</a> and I'm launching a video course series for junior developers, simulating real-world coding challenges.
                    </p>
                    <p className="text-lg text-gray-700">
                        This site is where I share my journey, insights, and reinforce my authority as a Java Engineer.
                    </p>
                </div>
            </div>
        </section>
    );
}