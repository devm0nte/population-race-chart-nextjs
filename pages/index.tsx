import Head from "next/head";
import RaceChart from "./racechart";

export default function Home() {
    return (
        <div className="w-full">
            <Head>
                <title>Population Chart Race</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto h-full max-w-full mt-10">
                <div className="w-full h-full border-black justify-center">
                    <RaceChart />
                </div>
            </div>
        </div>
    );
}
