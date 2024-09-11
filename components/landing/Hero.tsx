import MaxWidthWrapper from "../ui/MaxWidthWrapper"

export default function Hero() {
    return(
        <MaxWidthWrapper className="mb-12 mt-8 sm:mt-48 flex flex-col items-center justify-center text-center transition-all ease-in-out">
          <main className="w-full flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Quikit
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          A fast and easy-to-configure Next.js template, designed to streamline
          project setup and development with best practices and optimal defaults.
        </p>
            </main>
        </MaxWidthWrapper>   
    )
}