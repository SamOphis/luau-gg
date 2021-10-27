import 'tailwindcss/tailwind.css'

export default function Portfolio() {
    return (
        <div className="flex w-screen h-screen">
            <div className="flex flex-col flex-initial flex-wrap mt-10 mx-auto w-1/3 h-auto xl:h-2/5 rounded-lg shadow bg-white space-y-5">
                <div className="font-sans font-extralight sm:text-4xl text-xl text-gray-600 mx-auto mt-10">Hi, I'm Sam.</div>
                <p className="font-sans font-extralight font-weight-500 md:text-sm text-xs text-center text-gray-600 mx-auto w-4/5 h-1/2">
                    Nice to meet you!
                    <br />
                    I am a backend <a className="text-red-500 font-medium" href="https://github.com/SamOphis">software developer </a>  
                    ― that's why this site is so simple 😅 ― and also a lover of anything related to space 🚀 and flowers 🌺.
                    <br /><br />

                    I currently play Flex DPS for a team called <a className="text-red-500 font-medium" href="https://twitter.com/PowerDragonsGa1">Power Dragons</a>.
                    I also manage the <a className="text-red-500 font-medium" href="https://powernappers.com">Power Nappers </a> community as well as one of its teams:
                    <a className="text-red-500 font-medium" href="https://twitter.com/PowerBlossomsOW"> Power Blossoms</a> 📋.
                    <br /><br />

                    I'm 18 years old 🎂, use he/they pronouns 🏳️‍🌈 and also stream semi-regularly over 
                    on <a className="text-red-500 font-medium" href="https://twitch.tv/luau_ow">Twitch</a> 🎥.
                    Feel free to contact me by <a className="text-red-500 font-medium" href="mailto:sampritchard0801@gmail.com">email</a> 📧,
                    through <a className="text-red-500 font-medium" href="https://discord.gg/UbXkbrXxT7">Discord</a>, or
                    through <a className="text-red-500 font-medium" href="https://twitter.com/luauOW">Twitter</a>.
                </p>
            </div>
        </div>
    )
}
