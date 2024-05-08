import Image from 'next/image';

export function AsSeenOnImg({ src, alt }) {
    return (
        <Image
            alt={alt}
            src={src}
            width="150"
            height="28"
            style={{
                filter: 'contrast(0) brightness(2)'
            }}
        />
    );
}
