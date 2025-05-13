const Featured = () => {
    return (
        <div className="flex px-[200px] mt-[100px]">
            <div className="bg-gray-200 h-[420px] w-[500px] z-10 mt-[20px]">
                <div className="m-10">
                    <h1 className="text-[25px] font-semibold">De ce este importantă donarea de sânge?</h1>
                    <hr className="bg-red-500 w-[150px] h-[3px] my-[20px]" />
                    <span>Donarea de sânge este vitală pentru menținerea stocurilor de sânge și face o diferență semnificativă în viețile celor care au nevoie de acesta.</span>
                    <ul>
                        <li className="mt-3">1. Nevoia de sânge este una urgentă și continuă.</li>
                        <li className="mt-3">2. Lipsa de sânge poate pune viețile pacienților în pericol.</li>
                        <li className="mt-3">3. Țara se confruntă cu o criză de donatori.</li>
                        <li className="mt-3">4. Are beneficii pentru sănătatea ta.</li>
                        <li className="mt-3">5. Are impact pozitiv asupra sănătății mintale.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="h-[450px] w-[500px] ml-[-10px]">
                <video
                    src="/video.mp4"
                    height="450px"
                    width="500px"
                    loop
                    muted
                    autoPlay
                ></video>
            </div>
        </div>
    );
};

export default Featured;