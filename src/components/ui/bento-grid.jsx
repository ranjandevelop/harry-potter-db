import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-2 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, image }) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none max-h-full",
        className
      )}
    >
      <Link
        to={`/characters/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="h-full flex flex-col justify-between"
      >
        <div
          className="w-full h-40 md:h-48 rounded-xl bg-no-repeat bg-center bg-initial bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {/* {icon} */}
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};
