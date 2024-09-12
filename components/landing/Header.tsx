import Link from "next/link";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";

export default function Header() {
    return(
        <div className="w-full h-16">
            <MaxWidthWrapper className="flex items-center justify-between h-full">
                <Link href={''} className="text-2xl font-bold uppercase">quikit</Link>
                <Link className={buttonVariants(
            )} href={''}>Get Started</Link> 
            </MaxWidthWrapper>
        </div>
    )
}