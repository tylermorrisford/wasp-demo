import { Nav } from "./Nav"

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Nav />
            {children}
        </div>
    )
}