"use client";

import { useRouter } from "next/navigation";
import "@/styles/footer.css";
import "@/styles/style.css";

export default function Footer() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const feedback = formData.get("feedback");
        console.log("Feedback submitted:", feedback);
    }
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copied to clipboard:", text);
        });
    };

    return(
        <main>
            <div className="div1">
                <div className="pol">f.</div>
            </div>
            <div className="div2">
                <span>Made with ❤︎ &lt;3 and ambition</span>
                <h3>Flaw version@0.1.0</h3>
            </div>
            <div className="div3">
                <h1>LEGALS COMING SOON</h1>
                <h3>when we get registered</h3>
            </div>
            <div className="div4">
                <h2>Feedback</h2>
                <form>
                    <input type="text" placeholder="Your feedback" />
                    <button type="submit" onClick={() => handleSubmit} disabled={true}>Submit</button>
                </form>
            </div>
            <div className="div5">
                <h2>subscribe to our UNTIMELY newsletters or anything new we&apos;ve got</h2>
                <form>
                    <input type="text" placeholder="Your email" />
                    <button type="submit" onClick={() => handleSubmit} disabled={true}>Submit</button>
                </form>
            </div>
            <div className="div6">
                <h2>lost???</h2>
                <button onClick={() => router.push("/docs")}>Docs &rs;</button>
                <button onClick={() => router.push("/products")}>Products &rs;</button>
                <button onClick={() => router.push("/projects")}>Projects &rs;</button>
            </div>
            <div className="div7">
                <h2>socials</h2>
                <button onClick={() => router.push("/twitter")}>Twitter</button>
                <button onClick={() => router.push("https://github.com/flaw-ai")}>GitHub</button>
                <button onClick={() => router.push("/linkedin")}>LinkedIn</button>
            </div>
            <div className="div8">
                <h2>contact</h2>
                <p>Mail at <a href="mailto:rudra070311@gmail.com" onClick={() => copyToClipboard("rudra070311@gmail.com")}>rudra070311@gmail.com</a></p>
            </div>
        </main>
    )
}