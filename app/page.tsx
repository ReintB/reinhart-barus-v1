import Image from "next/image";
import { socialLinks } from "./config";
import { GitHubContributions } from "./components/github-contributions";
import { DiscordStatus } from "./components/discord-status";
import { SpotifyStatus } from "./components/spotify-status";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { ScrollToTop } from "./components/scroll-to-top";
import { ScrollAnimation } from "./components/scroll-animation";

export default function Page() {
  return (
    <>
      <section>
        <ScrollAnimation type="scale">
          <a href={socialLinks.github} target="_blank">
            <Image
              src="/reinhart.JPG"
              alt="Profile photo"
              className="block object-cover object-top mx-auto mt-0 mb-10 bg-gray-100 rounded-full lg:mt-5 lg:mb-5 sm:float-right sm:ml-5 sm:mb-5 aspect-square"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>
        </ScrollAnimation>

        <ScrollAnimation type="slideRight">
          <h1 className="mb-8 text-2xl font-medium">Hello World! 👋</h1>
        </ScrollAnimation>

        <div className="max-w-2xl mx-auto">
          <div className="prose prose-neutral dark:prose-invert">
            <ScrollAnimation type="slideUp" delay={0.1}>
              <p>
                My name is <strong>Reinhart Barus</strong>, a 12th-grade student at
                a private high school in Bandung. I've had a strong interest in
                technology since I was a child. 🔍
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="slideUp" delay={0.2}>
              <p>
                ⚡ That interest began with curiosity about electricity and
                eventually grew into a passion for the digital world, especially
                after I started learning <code>HTML</code> in junior high school. 💻
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="slideUp" delay={0.3}>
              <p>
                🚀 Currently, I'm focusing on frontend development using{" "}
                <strong>React.js</strong> and continuously exploring other web
                technologies. 🌐
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="slideUp" delay={0.4}>
              <p>
                🎓 After graduation, I plan to pursue a degree in a
                technology-related field such as{" "}
                <strong>Informatics Engineering</strong> or{" "}
                <strong>Computer Science</strong>. 🎯
              </p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation type="slideLeft">
            <Skills />
          </ScrollAnimation>

          <ScrollAnimation type="slideRight">
            <Contact />
          </ScrollAnimation>

          <div className="mt-8 space-y-4">
            <ScrollAnimation type="slideUp" delay={0.1}>
              <GitHubContributions />
            </ScrollAnimation>
            <ScrollAnimation type="slideUp" delay={0.2}>
              <DiscordStatus />
            </ScrollAnimation>
            <ScrollAnimation type="slideUp" delay={0.3}>
              <SpotifyStatus />
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
