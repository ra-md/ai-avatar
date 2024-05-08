import { Inter } from 'next/font/google'
import { MainHeader } from "@/components/main-header"
import { Button, buttonVariants } from "@/components/ui/button"
import { Container } from '@/components/container'
import { AsSeenOnImg } from '../components/home/as-seen-on-img'
import { motion } from 'framer-motion'
import { Pricing } from '@/components/home/pricing'
import { HowItWorks } from '@/components/home/how-it-works'
import { MainFooter } from '@/components/main-footer'
import Image from 'next/image'
import { Showcase } from '@/components/home/showcase'
import { Faq } from '@/components/home/faq'
import { cn, images } from '@/lib/utils'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const titleVariant = {
    offscreen: {
        y: -50,
        opacity: 0
    },
    onscreen: ({ delay = 0 } = {}) => {
        return {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.5,
                delay,
            }
        }
    }
}

export default function Home() {

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98

    return (
        <div className={`${inter.className} relative`}>
            <div
                className='absolute top-0 h-[400px] md:h-[200px] w-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-b-full blur-[300px] -z-10'
            ></div>
            <MainHeader />
            <main>
                <section className="text-center flex flex-col gap-5 md:gap-10 items-center max-w-6xl mx-auto mt-16 px-4">
                    <motion.h1
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        variants={titleVariant}
                        className="text-2xl md:text-5xl font-bold "
                    >
                        Generate a stylish and impressive AI-powered avatar for your social media profiles
                    </motion.h1>
                    <motion.p
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        variants={titleVariant}
                        custom={{ delay: 0.3 }}
                        className="max-w-3xl text-accent"
                    >
                        Obtain a cool avatar within minutes using our AI-powered system. Simply upload your photos, choose a style, and receive over 100+ generated avatars.
                    </motion.p>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        variants={titleVariant}
                        custom={{ delay: 0.5 }}
                    >
                        <Link
                            href="/signup"
                            className={cn(buttonVariants({ variants: 'link' }), "bg-gradient-to-br group from-gradient-start-1 to-gradient-end-1 text-primary transition-shadow shadow-lg hover:shadow-gradient-end/30")}
                        >
                            Start Crafting Your Unique Avatar
                            <span className='h-6 w-6 relative flex items-center justify-center overflow-hidden'>
                                <span className='inline-block absolute transition-transform -translate-x-8 group-hover:translate-x-0 motion-reduce:transform-none duration-300'>
                                    -&gt;
                                </span>
                                <span className='inline-block absolute transition-transform group-hover:translate-x-8 motion-reduce:transform-none duration-300'>
                                    -&gt;
                                </span>
                            </span>
                        </Link>
                    </motion.div>
                </section>
                {
                    isMobile ? <Showcase disableAnimation={true} /> : <Showcase />
                }
                <div className='flex flex-col gap-28'>
                    <section
                        className='flex items-center flex-wrap gap-16 md:gap-24 justify-center'
                    >
                        <AsSeenOnImg alt="instagram icon" src='/instagram.png' />
                        <AsSeenOnImg alt="tiktok icon" src='/tiktok.png' />
                        <AsSeenOnImg alt="msn icon" src='/msn.png' />
                        <AsSeenOnImg alt="techcrunch icon" src='/techcrunch.png' />
                        <AsSeenOnImg alt="yahoo icon" src='/yahoo.png' />
                    </section>
                    <HowItWorks />
                    <Pricing />
                    <Faq />
                    <Container className="my-24">
                        <section className='bg-gradient-to-r from-gradient-start to-gradient-end rounded-[42px] p-1 relative'>
                            <div className='flex gap-6 flex-col md:flex-row justify-between p-6 md:p-14 rounded-[38px] text-center md:text-left bg-background'>
                                <div className='grid justify-start'>
                                    <div className='flex flex-col gap-4 max-w-lg'>
                                        <span className='font-bold text-3xl mb-3 md:mb-6'>Get Your Avatar</span>
                                        <span>Take a moment to effortlessly create your own cool avatar, a true reflection of your uniqueness, by simply clicking a few buttons. Once you&apos;ve crafted your avatar to perfection, proudly share it with your friends, allowing them to marvel at the best possible representation of yourself.</span>
                                    </div>
                                    <Button className="justify-self-start self-end mt-8 mx-auto md:mx-0">Create Your Avatar</Button>
                                </div>
                                <Image
                                    alt=""
                                    className="w-full md:w-[400px] rounded-[28px] object-cover"
                                    src={images[12].source}
                                    height={1080}
                                    width={2048}
                                    loading='lazy'
                                    quality={100}
                                    blurDataURL={images[12].blurDataURL}
                                    placeholder='blur'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 33vw"
                                />
                            </div>
                            <motion.div
                                className='absolute inset-0 blur-[100px] bg-gradient-to-r from-gradient-start to-gradient-end -z-10'
                                initial={{ scale: .1 }}
                                whileInView={{
                                    scale: 1.1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 1,
                                    }
                                }}
                            ></motion.div>
                        </section>
                    </Container>
                </div>
            </main>
            <MainFooter />
        </div>
    )
}


