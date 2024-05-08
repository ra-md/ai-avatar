import { motion } from 'framer-motion'
import { cn, images } from '@/lib/utils'
import Image from 'next/image'

export function Showcase({ disableAnimation }) {

    const cardVariants = {
        offscreen: {
            y: '60vh'
        },
        onscreen: ({ duration = 0.8, delay = 0 } = {}) => {
            return {
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: disableAnimation ? 0 : duration,
                    delay: disableAnimation ? 0 : delay,
                }
            }
        }
    }

    return (
        <section id="showcase" className='flex gap-5 md:gap-10 justify-center my-36'>
            <div className='flex flex-col gap-5 md:gap-10'>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div variants={cardVariants} custom={{ delay: 1.2, duration: 1 }}>
                        <ImageContainer src={images[0].source} blurDataURL={images[0].blurDataURL} />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <ImageContainer src={images[1].source} blurDataURL={images[1].blurDataURL} />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <ImageContainer src={images[2].source} blurDataURL={images[2].blurDataURL} />
                    </motion.div>
                </motion.div>
            </div>
            <div className='flex flex-col gap-5 md:gap-10 -translate-y-24'>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants} custom={{ delay: 1, duration: 1 }}>
                        <ImageContainer src={images[3].source} blurDataURL={images[3].blurDataURL} />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <ImageContainer src={images[4].source} blurDataURL={images[4].blurDataURL} />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <ImageContainer src={images[5].source} blurDataURL={images[5].blurDataURL} />
                    </motion.div>
                </motion.div>
            </div>
            <div className='flex flex-col gap-5 md:gap-10'>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants} custom={{ delay: 1.2, duration: 1 }}>
                        <ImageContainer src={images[6].source} blurDataURL={images[6].blurDataURL} />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <ImageContainer src={images[7].source} blurDataURL={images[7].blurDataURL} />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="card" variants={cardVariants}>
                        <ImageContainer src={images[8].source} blurDataURL={images[8].blurDataURL} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export function ImageContainer({ className, src, alt = "", blurDataURL }) {
    return (
        <div>
            <Image
                alt={alt}
                className={cn("rounded-md object-cover w-[100px] h-[160px] md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[600px] shadow-lg", className)}
                src={src}
                height={1080}
                width={2048}
                loading='lazy'
                blurDataURL={blurDataURL}
                placeholder='blur'
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 33vw"
            />
        </div>
    )
}