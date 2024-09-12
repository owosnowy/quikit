import Image from "next/image"
import MaxWidthWrapper from "../ui/MaxWidthWrapper"
import { buttonVariants } from "../ui/button"
import Link from "next/link"

export default function Hero() {
    return(
        <MaxWidthWrapper className="mb-12 mt-8 sm:mt-24 flex flex-col items-center justify-center text-center transition-all ease-in-out">
          <main className="w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Quikit
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          A fast and easy-to-configure Next.js template, designed to streamline
          project setup and development with best practices and optimal defaults.
        </p>
        <Link className={buttonVariants(
            )} href={''}>Get Started</Link> 
        <Image 
        src={'/repo.png'}
        width={1364}
        height={866}
        quality={100}
        className='rounded-xl border-border border-2 mt-8'
        alt=""
        />
            </main>
        </MaxWidthWrapper>   
    )
}