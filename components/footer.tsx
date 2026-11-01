"use client";

import { useRouter } from "next/navigation";
import "@/styles/footer.css";
import "@/styles/style.css";
import { faXTwitter, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FooterProps {
  currentYear: number;
}

export default function Footer({currentYear}: FooterProps) {
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
        <>
            <main>
                <div className="div0">
                    <div className="nest1">
                        <div className="div1">
                            <div className="pol">f.</div>
                        </div>
                    </div>
                    <div className="div3">
                        <h1>LEGALS COMING SOON</h1>
                        <h3>when we get registered</h3>
                    </div>
                </div>
                <div className="nest2">
                    <div className="div4">
                        <h2>Feedback</h2>
                        <form>
                            <input type="text" placeholder="Your feedback" />
                            <button type="submit" onClick={() => handleSubmit} disabled={true}>Submit</button>
                        </form>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="div5">
                        <h2>subscribe to our UNTIMELY newsletters or anything new we&apos;ve got</h2>
                        <form>
                            <input type="text" placeholder="Your email" />
                            <button type="submit" onClick={() => handleSubmit} disabled={true}>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="div6">
                    <h2>lost???</h2>
                    <button className="butta1" onClick={() => router.push("/docs")}>Docs &gt;</button><br />
                    <button className="butta1" onClick={() => router.push("/products")}>Products &gt;</button><br />
                    <button className="butta1" onClick={() => router.push("/projects")}>Projects &gt;</button><br />
                </div>
                <div className="socials">
                    <div className="div7">
                        <h2>socials</h2>
                        <FontAwesomeIcon className="icons" icon={faXTwitter} onClick={() => router.push("/twitter")} />
                        <FontAwesomeIcon className="icons" icon={faInstagram} onClick={() => router.push("/instagram")} />
                        <FontAwesomeIcon className="icons" icon={faGithub} onClick={() => router.push("https://github.com/flaw-ai")} />
                        <FontAwesomeIcon className="icons" icon={faLinkedinIn} onClick={() => router.push("https://linkedin.com/in/rudra-pratap-sinha")} />
                    </div>
                    <div className="div8">
                        <h2>contact</h2>
                        <p>Mail at <br /><a href="mailto:rudra070311@gmail.com" onClick={() => copyToClipboard("rudra070311@gmail.com")}>rudra070311@gmail.com</a></p>
                    </div>
                </div>
            </main>
            <hr /><br />
            <div className="div9">
                <p>&copy; {currentYear} Flaw AI. All rights reserved.</p>
                <div className="div2">
                    <div className="livebutton" />
                    <div className="div22">
                        <h3>Flaw version@0.1.0</h3>
                        <span>Made with ❤︎ and ambition</span>
                    </div>
                </div>
            </div>
        </ >
    )
}