"use client";

import "@/styles/resize.css";
import ProjectCard from "@/components/project_card";

export default function Products() {
    return(
        <main className="bg">
            <div className="header">
                <h1>Projects</h1>
            </div>
            <div className="pro">
                <ProjectCard
                title="FlawForCausalLM"
                description="An independently developed, scratch-trained causal language model exploring original architecture design, training and evaluation."
                link=""
                />
                <br />
                <ProjectCard
                title="DESET"
                description="A dataset engineering system for acquisition, normalization, validation, quality assessment and reliable AI training data."
                link=""
                />
                <br />
                <ProjectCard
                title="ruPal"
                description="An experimental neural architecture initiative exploring innovative activation functions and more efficient AI systems."
                link=""
                />
                <br />
                <ProjectCard
                title="Flaw Developer Toolkit"
                description="A collection of lightweight developer utilities for intelligent logging, analytics, diagnostics and automated project insights. In development planning."
                link=""
                />
                <br />
                <ProjectCard
                title="zetOS"
                description="An independently developed operating system and computing platform, exploring system-level engineering, developer tools and integrated AI assistance."
                link=""
                />
                <br />
                <ProjectCard
                title="AURA"
                description="An AI-powered educational platform bringing together personalized learning, tutoring, examination preparation and productivity tools."
                link="https://aura--edu.vercel.app"
                />
                <br />
                <ProjectCard
                title="Investt"
                description="A financial literacy and market simulation platform designed to help learners understand financial concepts through interactive experiences."
                link="https://investt-web.vercel.app"
                />
                <br />
                <ProjectCard
                title="iDeez"
                description="An independent software engineering initiative focused on intelligent applications, automation and practical AI-powered systems."
                link=""
                />
                <br />
                <ProjectCard
                title="FieldGuard"
                description="An offline-first computer vision experiment exploring lightweight facial recognition and privacy-conscious identity verification."
                link=""
                />
                <br />
            </div>
        </main>
    )
}