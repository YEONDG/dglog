import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ProjectName = "dglog" | "cutechatting" | "pokemon" | "image-app";

type ProjectImagesMap = {
  [key in ProjectName]: string[];
};

const projectImagesData: ProjectImagesMap = {
  cutechatting: [
    "/project-img/cutechatting-1webp.webp",
    "/project-img/cutechatting-2webp.webp",
    "/project-img/cutechatting-3webp.webp",
    "/project-img/cutechatting-4webp.webp",
  ],
  dglog: [
    "/project-img/dglog-1webp.webp",
    "/project-img/dglog-2webp.webp",
    "/project-img/dglog-3webp.webp",
    "/project-img/dglog-4webp.webp",
  ],
  pokemon: [
    "/project-img/pokemon-1webp.webp",
    "/project-img/pokemon-2webp.webp",
    "/project-img/pokemon-3webp.webp",
    "/project-img/pokemon-4webp.webp",
  ],
  "image-app": [
    "/project-img/image-app-1webp.webp",
    "/project-img/image-app-2webp.webp",
  ],
};

interface ProjectCarouselProps {
  projectName: ProjectName;
}

export function ProjectCarousel({ projectName }: ProjectCarouselProps) {
  const images = projectImagesData[projectName];

  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-video items-center justify-center p-6">
                  <Image
                    src={imageUrl}
                    fill
                    alt={`${projectName} image ${index + 1}`}
                    className="rounded-xl object-contain"
                    sizes="(max-width: 512px) 100vw, 512px"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
