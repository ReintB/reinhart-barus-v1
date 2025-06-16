import Image from "next/image";
import { Skills } from "./components/skills";
import { ScrollToTop } from "./components/scroll-to-top";

export default function Page() {
  return (
    <>
      <section>
        <Image
          src="/reinhart.JPG"
          alt="Profile photo"
          className="block object-cover object-top mx-auto mt-0 mb-10 bg-gray-100 rounded-full lg:mt-5 lg:mb-5 sm:float-right sm:ml-5 sm:mb-5 aspect-square"
          unoptimized
          width={160}
          height={160}
          priority
        />

        <h1 className="mb-8 text-2xl font-medium">Hello World!</h1>

        <div className="max-w-2xl mx-auto">
          <div className="prose prose-neutral dark:prose-invert">
            <p>
              My name is <strong>Reinhart Barus</strong>, a 12th-grade student
              at a private high school in Bandung. I've had a strong interest in
              technology since I was a child.
            </p>

            <p>
              That interest began with curiosity about electricity and
              eventually grew into a passion for the digital world, especially
              after I started learning <code>HTML</code> in junior high school.
            </p>

            <p>
              Currently, I'm focusing on frontend development using{" "}
              <strong>React.js</strong> and continuously exploring other web
              technologies.
            </p>

            <p>
              After graduation, I plan to pursue a degree in a
              technology-related field such as{" "}
              <strong>Informatics Engineering</strong> or{" "}
              <strong>Computer Science</strong>.
            </p>
          </div>

          <Skills />
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
