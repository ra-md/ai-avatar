import { Container } from "@/components/container";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";
import Link from "next/link";


export default function Login() {

    return (
        <div>
            <Container className="grid place-content-center h-[100vh]">
                <div className="w-[25rem]">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Create an account</CardTitle>
                        <CardDescription>
                            Enter your email below to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid grid-cols-2 gap-6">
                            <Button variant="outline">
                                <Icons.gitHub className="mr-2 h-4 w-4" />
                                Github
                            </Button>
                            <Button variant="outline">
                                <Icons.google className="mr-2 h-4 w-4" />
                                Google
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@example.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Sign Up With Email</Button>
                    </CardFooter>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="#"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="#"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                    <CardFooter className="mt-8">
                        <Link className="hover:underline text-center w-full" href="/login">I already have an account? Log in</Link>
                    </CardFooter>
                </div>
            </Container>
        </div>
    )
}

