"use client";

import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLink,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Chip } from "@nextui-org/chip";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="md:mx-5">
      <Card className="md:p-10 p-5">
        <CardBody>
          <div className="flex md:flex-row flex-col-reverse items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-2">
                Hi I'm {siteConfig.name}
              </h1>
              <p className="text-gray-400 font-bold text-xl">
                aka {siteConfig.alias}
              </p>

              <p className="text-tiny text-gray-500 my-5 md:w-2/3">
                {siteConfig.description}
              </p>
            </div>

            <Image src={siteConfig.icon} className="md:mb-0 mb-10" />
          </div>
        </CardBody>
      </Card>

      <div className="my-8"></div>

      <div className="flex  md:flex-row flex-col items-center">
        <Card className="md:w-1/2 p-5 ">
          <CardHeader>ABOUT</CardHeader>
          <CardBody>
            <h2 className="font-bold">{siteConfig.intro}</h2>
            <p className="text-tiny text-gray-400 my-2">{siteConfig.about}</p>
          </CardBody>
        </Card>

        <div className="md:w-1/2">
          <Card className="p-5 md:m-5 md:mt-0 mt-3">
            <CardHeader>SKILLS</CardHeader>
            <CardBody>
              <p className="text-tiny mb-5 text-gray-400">
                {siteConfig.skills.heading}
              </p>

              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center mb-2">
                  {siteConfig.skills.tech.map((e, i) => (
                    <Image
                      src={`/${e}.png`}
                      key={i}
                      className="w-8 h-8 mx-1 object-fill"
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  {siteConfig.os.map((e, i) => (
                    <Image
                      src={`/${e}.png`}
                      key={i}
                      className="w-8 h-8 mx-1 object-fill"
                    />
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="my-8"></div>

      <h2 className="text-xl font-bold uppercase mb-2">Projects</h2>
      <div className="overflow-x-auto mt-4 mb-12 scrollbar-hide">
        <div className="flex space-x-4">
          {siteConfig.projects.map((p, i) => (
            <Card
              key={i}
              isFooterBlurred
              className="md:min-w-[300px] md:h-[300px] min-w-[200px] h-[200px] col-span-12 sm:col-span-7"
            >
              <CardHeader className="absolute z-10 flex-col items-start bg-black/50">
                <p>
                  {p.tech.map((e, i) => (
                    <Chip
                      key={i}
                      size="sm"
                      className="text-[8px] uppercase mr-1"
                    >
                      {e}
                    </Chip>
                  ))}
                </p>
              </CardHeader>

              <Image
                removeWrapper
                className="z-0 w-full h-full object-fill"
                src={p.img}
              />

              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    className="rounded-full w-10 h-10 bg-black"
                    src={p.img}
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{p.name}</p>
                    <p className="text-tiny text-white/60"></p>
                  </div>
                </div>

                <Link href={p.url} target="_blank">
                  <Button radius="full" size="sm" isIconOnly>
                    <FontAwesomeIcon icon={faLink} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-4 mb-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <h1 className="text-xl font-bold">Work Experience</h1>
          <p className="text-gray-400 text-sm text-center ">
            Here's a glimpse of my working experience over the years staring
            from the very basics to where I'm right now.
          </p>
        </div>

        <div className="md:grid grid-cols-4 gap-2 mt-5">
          {siteConfig.timeline.map((e, i) => (
            <Card key={i} className="md:my-0 my-2">
              <CardHeader>
                <div>
                  <p className="text-small">{e.title}</p>
                  <p className="text-tiny text-gray-400">{e.subtitle}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-xs text-gray-300">{e.desc}</p>
              </CardBody>
              <CardFooter className="text-xs justify-end">{e.date}</CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <Card className="md:p-5">
          <CardHeader className="flex flex-col items-center justify-center mb-3">
            <h1 className="text-2xl font-bold">Reach out to me</h1>

            <p className="text-sm text-center text-gray-400">
              Reach out to me to know more about my areas of work, or you can
              reach out to me for work related queries.
            </p>
          </CardHeader>

          <CardBody>
            <div className="flex items-center justify-evenly">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    className="p-4 text-2xl bg-gray-800 rounded-lg mx-3"
                  />

                  <div>
                    {siteConfig.contact.phone.map((e, i) => (
                      <a href={`tel:${e}`} key={i}>
                        <p className="md:text-medium text-sm"> +91 {e}</p>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="my-2"></div>

                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="p-3 text-2xl bg-gray-800 rounded-lg mx-3"
                  />

                  <a href={`mailto:${siteConfig.contact.email}`}>
                    <p className="md:text-medium text-sm">
                      {siteConfig.contact.email}
                    </p>
                  </a>
                </div>
              </div>

              <Image src={siteConfig.icon} className="md:block hidden" />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
