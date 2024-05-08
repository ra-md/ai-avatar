import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "../container"

export function Faq() {
    return (
        <section id="faq" className='md:px-16 mt-[8rem]'>
            <Container>
                <div className='text-center mb-16'>
                    <span className='block font-bold text-5xl mb-6'>Frequently Asked Questions</span>
                    <span className='block font-bold text-xl md:text-4xl text-accent'>Answers to common questions about our Avatar AI Servicet.</span>
                </div>
                <Accordion type="multiple" collapsible="true" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What are the ideal photo types to upload for AI avatar creation?</AccordionTrigger>
                        <AccordionContent>
                            The ideal photo types to upload for AI avatar creation are clear, well-lit, and high-resolution images. It is best to choose photos that prominently feature your face, with minimal obstructions such as sunglasses or hats. Front-facing photos with a neutral expression tend to yield the best results. Additionally, photos with a plain background help the AI algorithms focus on your facial features accurately.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Which photo formats are preferred for AI avatar generation?</AccordionTrigger>
                        <AccordionContent>
                            For AI avatar generation, it is recommended to upload photos in commonly supported formats such as avif, PNG, or TIFF. These formats are widely compatible with AI algorithms and image processing techniques. When choosing a photo format, prioritize the highest quality option available to preserve the details and clarity of the image. This ensures that the AI algorithms can accurately analyze and replicate your facial features in the generated avatar. Additionally, avoid heavily compressed or low-quality image formats, as they may result in a loss of important details during the avatar creation process.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Is a refund possible?</AccordionTrigger>
                        <AccordionContent>
                            Unfortunately, refunds are not possible due to the high costs associated with training AI models. The process of training AI models involves significant expenses, including computational resources, data acquisition, and infrastructure maintenance. These costs make it challenging to offer refunds for AI-related services. However, we strive to ensure customer satisfaction by providing quality services and addressing any concerns or issues that may arise during the process. Please feel free to reach out to our customer support team if you have any specific questions or require further assistance.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-21">
                        <AccordionTrigger>What happens to my photo after I upload it? Is there a possibility of it being sold to advertising programs?</AccordionTrigger>
                        <AccordionContent>
                            We value your privacy, and we assure you that your uploaded photo will be handled with utmost care. Once the avatar creation process is complete, we will promptly delete your photo from our systems. We do not engage in selling or sharing user photos with any advertising programs or third parties. Our commitment is to provide a secure and reliable service while prioritizing the confidentiality and privacy of our users.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-111">
                        <AccordionTrigger>Is the payment method secure?</AccordionTrigger>
                        <AccordionContent>
                            Yes, the payment method we employ is highly secure. We prioritize the protection of our customers&apos; financial information and utilize industry-standard security measures to ensure a safe payment experience. Our payment system is encrypted, which means that all your payment details are transmitted securely and cannot be accessed or intercepted by unauthorized parties. We continually monitor and update our security protocols to stay ahead of any potential threats. Rest assured, you can confidently make payments through our secure platform.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-211">
                        <AccordionTrigger>Which payment methods are accepted?</AccordionTrigger>
                        <AccordionContent>
                        We accept various methods of payment to provide convenience and flexibility to our customers. Currently, we accept major credit cards such as Visa, Mastercard, and American Express. Additionally, we also support payments through popular digital payment platforms such as Stripe. These payment options offer a secure and reliable means of completing transactions. If you have any specific payment inquiries or require assistance with a particular payment method, please feel free to reach out to our customer support team, and they will be happy to assist you.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>
        </section>
    )
}