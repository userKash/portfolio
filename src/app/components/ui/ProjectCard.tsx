import { DecryptButton } from "@/app/components/ui/decrypt-button";
import { PointerHighlight } from "@/app/components/ui/PointerHighlight";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  gradientFrom: string;
  gradientTo: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  imageSrc,
  gradientFrom,
  gradientTo,
  link,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-6 rounded-3xl shadow-lg h-full`}
    >
      <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col text-left">
        <p className="text-sm text-neutral-500 font-medium mb-1">{category}</p>

        {title.includes("EngliQuest") ? (
          <p className="text-lg font-bold text-white mb-2">
            EngliQuest:{" "}
            <PointerHighlight
              rectangleClassName="bg-blue-800 border-blue-400"
              pointerClassName="text-blue-400"
            >
              Gamifying
            </PointerHighlight>{" "}
            English Skills for All Ages
          </p>
        ) : title.includes("NextTrip") ? (
          <p className="text-lg font-bold text-white mb-2">
            NextTrip: Your{" "}
            <PointerHighlight
              rectangleClassName="bg-yellow-800 border-yellow-400"
              pointerClassName="text-yellow-400"
            >
              AI-powered
            </PointerHighlight>{" "}
            Travel Assistant
          </p>
        ) : (
          <p className="text-lg font-bold text-white mb-2">{title}</p>
        )}

        <p className="text-sm text-neutral-400 mb-6">{description}</p>

        <a href={link} className="w-full mt-auto">
          <DecryptButton text="View Case Study" icon="↗" />
        </a>
      </div>
    </div>
  );
}
