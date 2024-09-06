"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Фитнесс приложение по модели месячного абонемента.",
    description:
      "Система вознаграждений с использованием собственного токена и удобный интерфейс для пользователей.",
    image: "/togo.png",
    technologies: ["React", "SwiftUI", "Metamask", "Web3"],
  },
  {
    title: "Сервис электронных визиток.",
    description:
      "Интерактивные ссылки и возможность кастомизации профиля. Оптимизация скорости и SEO для лучшей производительности и видимости в поисковых системах.",
    image: "/blink.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Модульная система предпродажи токенов.",
    description:
      "Ограничение по времени и безопасный вывод средств. Возможность просмотра базы покупателей с количеством приобретенных токенов.",
    image: "/presale.png",
    technologies: ["React", "Tailwind CSS", "Wagmi", "Web3"],
    liveUrl: "https://zksync.io/",
  },
  {
    title: "Платформа для инвестирования в недвижимость. (В разработке)",
    description:
      "Автоматические выплаты и вторичный рынок. Комиссии взимаются в собственном токене.",
    image: "/basis.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Wagmi", "Web3"],
    liveUrl: "https://cryptopif-repo-nextjs.vercel.app/",
  },
  {
    title: "Лэндинг для девелоперской компании (В разработке)",
    description:
      "Привлекательный дизайн и удобная навигация для представления проектов. Оптимизация для SEO и быстрой загрузки страниц.",
    image: "/landing.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO"],
    liveUrl: "https://basis-landing.vercel.app/ru",
  },
];

export function ProjectsSectionRu() {
  return (
    <section
      className="w-full bg-gradient-to-bl from-primary via-background to-background bg-[length:400%_400%] bg-[position:100%_100%] py-12 md:py-24 lg:py-32"
      id="projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Наши проекты
        </h2>
        <p className="mx-auto mb-12 max-w-[800px] text-center text-xl text-muted-foreground">
          Не хватит целого сайта, чтобы показать все наши проекты. Но вот самые
          запоминающиеся из них.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <img
                  src={project.image}
                  alt={`Скриншот проекта ${project.title}`}
                  className="h-64 w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.liveUrl && (
                  <Button asChild variant="outline">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Демо
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

