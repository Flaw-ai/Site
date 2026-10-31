"use client";

import "@/styles/style.css";
import "@/styles/main.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/project_card";

export default function Home() {
  const router = useRouter();
  function handle(path: string) {
    router.push(path);
  }
  return (
    <div className="bg">
      <main className="bg">
        {/*<Nav />*/}
        <div className="header">
          <div className="fle">
            <h1 className="title">flaw</h1>
            <h6 className="subtitle">AI LABS</h6>
          </div>
          <p className="description">
            Building Intelligence From the Ground Up
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button className="butto" onClick={() => handle("/features")}>Explore Features ➤</button>
        </div>
        <div className="about">
          <h2>not us. just me.</h2>
          <p>i&apos;m a student, an independent builder, and someone who&apos;s more interested in understanding how things work than simply using them. flaw ai labs is my attempt to build intelligence from the ground up — training models from scratch, engineering datasets, experimenting with architectures, and learning through every failure along the way.</p>
          <span>no big team . no fancy lab . just curiosity, code, and the willingness to start from zero.</span>
        </div>
        <hr style={{"fontSize": 20}}></hr>
        <div className="projects">
          <a href="/projects">projects</a>
          <p>i&apos;ve been working on a few projects that i&apos;m excited to share. these are the ones that i&apos;ve been able to make public so far, but there are many more in the works.</p>
          <p>if you&apos;re interested in collaborating or contributing to any of these projects, feel free to reach out!</p>
          <p>you can also check out my github for more of my work: <a className="git" href="https://github.com/rudra070311">https://github.com/rudra070311</a></p>
          <div className="project-cards">
            <ProjectCard title="flaw" description="an open-source, self-hosted, and privacy-focused ai assistant that can be run on your own machine." link="/flaw" />
            <ProjectCard title="flaw studio" description="a platform for training and deploying custom ai models, with a focus on accessibility and ease of use." link="/studio" />
          </div>
          <button className="butto" onClick={() => handle("/projects")}>see all projects ➤</button>
        </div>
        <Footer />
      </main>
    </div>
  );
}
