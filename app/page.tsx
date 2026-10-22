import Image from "next/image";
import "@/styles/style.css";

export default function Home() {
  return (
    <div className="bg">
      <main className="bg">
        <div className="header">
          <h1 className="title">Flaw AI Labs</h1>
          <p className="description">
            Building Intelligence From the Ground Up
          </p>
        </div>
        <div>
          <button>Explore Features ➤</button>
        </div>
        <div className="about">
          <h2>About Us</h2>
          <p>We are a team of passionate engineers and researchers working on the cutting edge of artificial intelligence.</p>
        </div>
      </main>
    </div>
  );
}
