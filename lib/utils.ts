import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


  // <div
  //           className="box-card hover:scale-[1.1] transition-transform ease-in-out duration-250 cursor-pointer bg-white/10 backdrop-blur-3xl border-[2px] border-white/10 w-full max-w-[320px] rounded-2xl p-5 flex flex-col space-y-5 shadow-md"
  //           key={box.id}
  //         >
  //           <div className="h-[60px] w-[60px] rounded-lg flex items-center justify-center">
  //             {box.icon}
  //           </div>
  //           <div className="flex flex-col space-y-5">
  //             <h1 className="text-xl sm:text-2xl font-michroma-base font-semibold text-gold">
  //               {box.heading}
  //             </h1>
  //             <h3 className="font-sora-base text-xs text-white/80">
  //               {box.description}
  //             </h3>
  //           </div>
  //           <Link
  //             href={box.link}
  //             className="flex items-center justify-between text-sm sm:text-base font-medium text-white hover:underline"
  //           >
  //             Explore now
  //             <ArrowUpRight size={18} className="text-gold" />
  //           </Link>
  //         </div>