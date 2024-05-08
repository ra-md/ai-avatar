export function Container({ children, className }) {
    return <div className={`container max-w-6xl mx-auto px-4 ${className}`}>{children}</div>
}