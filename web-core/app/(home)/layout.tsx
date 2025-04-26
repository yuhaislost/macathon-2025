import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function HomeLayout({ children } : { children : React.ReactNode }){

    const user = auth();

    if (!user)
    {
        redirect("/sign-in")
    }

    
    return(
        <>
            {children}
        </>
    )
}