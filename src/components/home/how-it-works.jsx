import { motion } from 'framer-motion'
import { Container } from '../container'
import { cn, images } from '@/lib/utils'
import Image from 'next/image'

const animatePathLength = {
    offscreen: {
        pathLength: 0
    },
    onscreen: (duration = 10) => {
        return {
            pathLength: 1,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration,
            }
        }
    }
}


export function HowItWorks() {
    return (
        <section id="how-it-works">
            <Container>
                <div className='text-center mb-16'>
                    <span className='block font-bold text-5xl mb-6'>How It Works</span>
                    <span className='block font-bold text-xl md:text-4xl text-accent'>Get your social media avatar AI-generated quickly and effortlessly.</span>
                </div>
                <div className='grid grid-cols-[1fr_0.5fr_1fr] justify-items-center'>
                    <div className='flex flex-col gap-48 py-28'>
                        <div className='flex-1 flex flex-col items-end justify-center'>
                            <Image
                                alt=""
                                className='h-[250px] md:h-[400px] object-cover'
                                src={images[9].source}
                                height={1080}
                                width={2048}
                                loading='lazy'
                                quality={100}
                                blurDataURL={images[9].blurDataURL}
                                placeholder='blur'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 33vw"
                            />
                        </div>
                        <div className='flex-1 flex flex-col items-end justify-center'>
                            <Image
                                alt=""
                                className='h-[250px] md:h-[400px] object-cover'
                                src={images[10].source}
                                height={1080}
                                width={2048}
                                loading='lazy'
                                quality={100}
                                blurDataURL={images[10].blurDataURL}
                                placeholder='blur'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 33vw"
                            />
                        </div>
                        <div className='flex-1 flex flex-col items-end justify-center'>
                            <Image
                                alt=""
                                className='h-[250px] md:h-[400px] object-cover'
                                src={images[11].source}
                                height={1080}
                                width={2048}
                                loading='lazy'
                                quality={100}
                                blurDataURL={images[11].blurDataURL}
                                placeholder='blur'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 33vw"
                            />
                        </div>
                    </div>
                    <div className='relative w-[50px]'>
                        <motion.svg
                            className="absolute -z-10"
                            width="24"
                            height="100%"
                            viewBox="0 0 24 175"
                            viewport={{ once: true }}
                            initial="offscreen"
                            whileInView="onscreen"
                            preserveAspectRatio="none"
                        >
                            <motion.line
                                x1="25"
                                x2="25"
                                y1="0"
                                y2="175"
                                stroke="white"
                                strokeWidth={3}
                                variants={animatePathLength}
                            />
                        </motion.svg>
                        <motion.svg
                            className="absolute -z-20"
                            width="24"
                            height="100%"
                            viewBox="0 0 24 175"
                            initial={{ pathLength: 1 }}
                            preserveAspectRatio="none"
                        >
                            <line
                                x1="25"
                                x2="25"
                                y1="0"
                                y2="175"
                                className='stroke-gray-900'
                                strokeWidth={3}
                            />
                        </motion.svg>
                        <div className='flex flex-col gap-48 items-center justify-around h-full py-28'>
                            <LineCircle className="bg-gradient-to-r from-[#ff0080] to-[#7928ca]">1</LineCircle>
                            <LineCircle className="bg-gradient-to-r from-[#007cf0] to-[#00dfd8]">3</LineCircle>
                            <LineCircle className="bg-gradient-to-r from-[#92FE9D] to-[#00C9FF]">3</LineCircle>
                        </div>
                    </div>
                    <div className='flex flex-col gap-48 py-28 w-[130px] md:w-auto'>
                        <div className='flex-1 flex flex-col items-start justify-center'>
                            <span className='font-bold text-xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff0080] to-[#7928ca] leading-tight'>Select your favorite style</span>
                            <span className='text-accent text-sm md:text-base'>Select a style to define the aesthetic of your avatar. Choose from various artistic influences, photographic, anime, and pixel art to achieve the desired visual effect.</span>
                        </div>
                        <div className='flex-1 flex flex-col items-start justify-center'>
                            <span className='font-bold text-xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#00dfd8] leading-tight'>Upload your preferred photo</span>
                            <span className='text-accent text-sm md:text-base'>Upload your chosen image as the foundation for our AI-powered transformation, enabling personalized and captivating results.</span>
                        </div>
                        <div className='flex-1 flex flex-col items-start justify-center'>
                            <span className='font-bold text-xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#92FE9D] to-[#00C9FF] leading-tight'>Await your personalized avatar generated by our AI</span>
                            <span className='text-accent text-sm md:text-base'>Prepare for the transformation as your selected image is loaded, optimizing the process for enhanced visuals.</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-8 items-center -mt-1'>
                    <div className='h-[50px] w-[50px] relative'>
                        <div>
                            <div className='bg-gradient-to-r inset-0 absolute from-yellow-500 to-red-500 -z-10 rounded-full'></div>
                            <motion.div
                                className='bg-gradient-to-r inset-0 absolute blur-[25px] from-yellow-500 to-red-500 -z-10 rounded-full'
                                initial={{ scale: 0 }}
                                whileInView={{
                                    scale: 1,
                                    transition: {
                                        type: 'spring',
                                        duration: 1,
                                        bounce: 0.2
                                    }
                                }}
                            ></motion.div>
                        </div>
                        <motion.svg
                            viewBox="0 0 50 50"
                            viewport={{ margin: '-50px' }}
                            initial="offscreen"
                            whileInView="onscreen"
                        >
                            <motion.path
                                fill="none"
                                strokeWidth="4"
                                stroke="black"
                                d="M14,26 L 22,33 L 35,16"
                                strokeDasharray="0 1"
                                variants={animatePathLength}
                                custom={1}
                            />
                        </motion.svg>
                    </div>
                    <motion.span
                        className='font-bold block text-4xl bg-clip-text text-center text-transparent bg-gradient-to-r from-yellow-500 to-red-500'
                        initial={{
                            y: 50
                        }}
                        whileInView={{
                            y: 0,
                            transition: {
                                type: 'spring',
                                duration: 1,
                                bounce: 0.2
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        Save your preferred avatar
                    </motion.span>
                </div>
            </Container>
        </section>
    )
}

function LineCircle({ className, children }) {
    return (
        <motion.div
            className='h-[45px] w-[45px] relative'
        >
            <div
                className={cn(`bg-background absolute inset-0 rounded-full border-4 border-background flex items-center justify-center text-background font-bold text-xl`, className)}
            >{children}</div>
            <motion.div
                className={cn('absolute inset-0 blur-[25px]', className)}
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                    transition: {
                        type: 'spring',
                        duration: 1,
                        bounce: 0.2
                    }
                }}
            ></motion.div>
        </motion.div>
    )
}