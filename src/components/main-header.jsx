import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Container } from "./container"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion, useCycle } from 'framer-motion'

const navLinks = [
    {
        name: 'Showcase',
        href: '#showcase'
    },
    {
        name: 'How It Works',
        href: '#how-it-works'
    },
    {
        name: 'Pricing',
        href: '#pricing'
    },
    {
        name: 'FAQ',
        href: '#faq'
    }
]

export function MainHeader() {
    const [isOpen, toggleOpen] = useCycle(false, true)

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    return (
        <motion.div
            className="lg:sticky top-0 z-40"
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: {
                    height: '100vh'
                },
                closed: {
                    height: 'fit-content'
                }
            }}
        >
            <header className="backdrop-blur-xl border-b border-b-white/10" >
                <Container className="flex items-center justify-between py-2">
                    <div>
                        <Link className={cn(buttonVariants({ variant: "link" }), "text-lg lg:text-2xl font-bold")} href="/">AI Avatar</Link>
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-16 font-bold">
                            {
                                navLinks.map(item => {
                                    return (
                                        <li key={item.name}>
                                            <Link className={buttonVariants({ variant: "link" })} href={item.href}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="items-center gap-4 flex">
                        <Link className={buttonVariants({ variant: "link" })} href="/login">Log In</Link>
                        <Link className={buttonVariants({ variant: "default", size: 'sm' })} href="/signup">Sign Up</Link>
                        <div className="flex items-center lg:hidden">
                            <MenuToggle toggle={() => toggleOpen()} />
                        </div>
                    </div>
                </Container>
            </header >
            <Navigation toggle={() => toggleOpen()} />
        </motion.div>
    )
}

function Navigation({ toggle }) {
    return (
        <motion.div
            className="absolute left-0 right-0 top-[56px] bottom-0 z-50"
            variants={{
                open: {
                    opacity: 1,
                    display: 'block'
                },
                closed: {
                    opacity: 0,
                    transitionEnd: {
                        display: 'none'
                    }
                }
            }}
            transition={{
                duration: 0.3
            }}
        >
            <Container>
                <nav>
                    <motion.ul
                        className="space-y-8 p-4"
                        variants={{
                            open: {
                                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                            },
                            closed: {
                                transition: { staggerChildren: 0.05, staggerDirection: -1 }
                            }
                        }}
                    >
                        {
                            navLinks.map(item => {
                                return (
                                    <motion.li
                                        key={item.name}
                                        variants={{
                                            open: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    y: { stiffness: 1000, velocity: -100 }
                                                }
                                            },
                                            closed: {
                                                y: 50,
                                                opacity: 0,
                                                transition: {
                                                    y: { stiffness: 1000 }
                                                }
                                            }
                                        }}
                                    >
                                        <Link href={item.href} onClick={toggle}>{item.name}</Link>
                                    </motion.li>
                                )
                            })
                        }
                    </motion.ul>
                </nav>
            </Container>
        </motion.div>
    )
}

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);