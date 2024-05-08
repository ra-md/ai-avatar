import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container } from '../container'
import { Button } from '../ui/button'

export function Pricing() {

    return (
        <section className='relative' id="pricing">
            <Container>
                <div className='text-center mb-16'>
                    <span className='block font-bold text-5xl mb-6'>Pricing</span>
                    <span className='block font-bold text-xl md:text-4xl text-accent'>Get premium AI avatars at an affordable cost.</span>
                </div>
                <div className='flex items-center flex-col md:flex-row justify-center gap-6'>
                    <PricingBox
                        price="$10"
                        packageName="Small"
                        pricingDetail={{
                            getAvatars: "Get 50 avatars",
                            styles: "Pick 5 styles",
                            format: '512x512 format'
                        }}
                    />
                    <PricingBox
                        price="$30"
                        packageName="Standard"
                        pricingDetail={{
                            getAvatars: "Get 200 avatars",
                            styles: 'Pick 10 styles',
                            format: "4K format",
                            priority: "Priority access to new features",
                        }}
                    />
                    <PricingBox
                        price="$50"
                        packageName="Plus"
                        pricingDetail={{
                            getAvatars: "Get 500 avatars",
                            styles: "Pick All Styles",
                            format: "4K format",
                            priority: "Priority access to new features",
                            noLimit: "Available even when demand is high",
                        }}
                    />
                </div>
            </Container>
            <motion.div
                className='hidden md:block'
                style={{
                    position: 'absolute',
                    bottom: '-31rem',
                    zIndex: '-2',
                    width: '100%',
                    height: '100%',
                }}
                initial={{
                    scale: 0.5,
                }}
                whileInView={{
                    scale: 1.4,
                    transition: {
                        duration: 1,
                        type: 'spring',
                        bounce: 0.1
                    }
                }}
                viewport={{ margin: '-100px' }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        width: '100%',
                        background: "conic-gradient(from 90deg at center center, black, transparent), conic-gradient(from 270deg at center center, transparent, black)",
                        backgroundSize: "50% 100%, 50% 100%",
                        backgroundPositionX: "0.11%, 100%",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className='absolute inset-[12rem] -z-10 blur-[100px] bg-gradient-to-t from-[#007cf0] to-[#00dfd8]'></div>
            </motion.div>
        </section>
    )
}

function PricingBox({ className, price, packageName, pricingDetail }) {
    return (
        <div
            className={cn("w-full h-[610px] rounded-3xl relative bg-[#060919] border-2 border-gradient-end/20 flex flex-col px-6 py-8", className)}
        >
            <div className='text-center border-b border-gradient-end/20 pb-8 mb-12'>
                <span className='block font-semibold text-2xl mb-4 text-accent'>{packageName}</span>
                <span className='font-bold text-7xl block'>{price}</span>
            </div>
            <div>
                <ul className='flex flex-col gap-6'>
                    {
                        Object.values(pricingDetail).map((pricing, index) => {
                            return <li key={index} className='flex gap-2 items-center'><CheckIcon /> {pricing}</li>
                        })
                    }
                </ul>
            </div>
            <Button className="mt-auto">Get Started With {packageName}</Button>
        </div>
    )
}

function CheckIcon() {
    return (
        <svg fill="#000000" width="16px" height="16px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M13 4.1974q0 .3097-.21677.5265L7.17806 10.329l-1.0529 1.0529q-.21677.2168-.52645.2168-.30968 0-.52645-.2168L4.01935 10.329 1.21677 7.5264Q1 7.3097 1 7t.21677-.5265l1.05291-1.0529q.21677-.2167.52645-.2167.30968 0 .52645.2167l2.27613 2.2839 5.07871-5.0864q.21677-.2168.52645-.2168.30968 0 .52645.2168l1.05291 1.0529Q13 3.8877 13 4.1974z" /></svg>
    )
}
