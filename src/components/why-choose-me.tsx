"use client";

import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function WhyChooseMe() {
  const reasons = [
    {
      title: "Учет ваших потребностей",
      description:
        "Мы тщательно изучаем ваши потребности и цели, чтобы предложить решения, которые идеально соответствуют вашему бизнесу.",
    },

    {
      title: "Современные технологии",
      description:
        "Мы используем новейшие, но в то же время проверенные веб технологии, гарантируя, что ваш проект будет не только передовым, но и надежным.",
    },
    {
      title: "Проверенный опыт",
      description:
        "Мы успешно реализовали более 20 проектов для различных отраслей, демонстрируя надежность и качество.",
    },
    {
      title: "Своевременная доставка",
      description:
        "Мы гарантируем соблюдение сроков без ущерба для качества, обеспечивая запуск вашего проекта по графику.",
    },
    {
      title: "Отличная коммуникация",
      description:
        "Мы обеспечиваем ясное и постоянное общение на протяжении всего жизненного цикла проекта, держа вас в курсе на каждом этапе.",
    },
    {
      title: "Гибкость",
      description:
        "Мы адаптируемся к вашим требованиям и изменениям, обеспечивая наилучший результат.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-tl from-primary via-background to-background bg-[length:400%_400%] bg-[position:0%_100%] py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Нам доверяют
        </h2>
        <p className="mx-auto mb-12 max-w-[800px] text-center text-xl text-muted-foreground">
          Мы объединяем техническую экспертизу, креативные решения и
          бизнес-мышление, чтобы каждый проект был уникальным и эффективным.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-2 flex items-center rounded-xl bg-primary p-2">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

