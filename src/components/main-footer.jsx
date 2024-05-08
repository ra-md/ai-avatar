import { Container } from "./container";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export function MainFooter() {
    return (
        <footer className='bg-gradient-end/5 border-t border-gradient-end/10 mt-28'>
            <Container>
                <div className='py-4 md:px-10 flex flex-col md:flex-row gap-16 text-center items-center justify-between'>
                    <div>
                        <ul className='flex items-center gap-8'>
                            <li>
                                <Link className={buttonVariants({ variant: "link" })} href="#">Contact Us</Link>
                            </li>
                            <li>
                                <Link className={buttonVariants({ variant: "link" })} href="#">Terms of Service</Link>
                            </li>
                            <li>
                                <Link className={buttonVariants({ variant: "link" })} href="#">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-8'>
                        <Link href="https://instagram.com" target="_blank" rel="noopener">
                            <Image alt="" src="/icon_Instagram.png" height="15" width="15" />
                        </Link>
                        <Link href="https://tiktok.com" target="_blank" rel="noopener">
                            <Image alt="" src="/icon_TikTok.png" height="15" width="15" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener">
                            <Image alt="" src="/icon_Twitter.png" height="15" width="15" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}