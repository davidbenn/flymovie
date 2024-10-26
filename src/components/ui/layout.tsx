export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <div className="rounded-lg bg-white px-5 py-5 w-full max-w-5xl mx-auto mt-5 shadow-md">
            {children}
        </div>
    )
}