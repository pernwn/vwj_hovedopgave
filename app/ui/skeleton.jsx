import { Spinner } from "@material-tailwind/react";
import styles from "../style";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function HeroSkeleton() {
  return (
    <section
      className={`${shimmer} ${styles.padding} h-fit w-full overflow-hidden bg-gray-300 bg-cover`}
    >
      <div>
        <HeaderSkeleton />
        <div className="bg-gray-300">
          <div className={`w-3/4 xl:w-2/3 space-y-4 ${styles.padding} xl:px-64 h-full py-16`}>
            <div className="w-2/3 h-20 mb-4 rounded-md bg-gray-100" />
            <div className="w-2/4 h-12 mb-4 rounded-lg bg-gray-100" />
            <div className="rounded-full w-36 h-12 bg-gray-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeaderSkeleton() {
  return (
    <div
      className={`${styles.paddingX} mb-4 h-full w-full flex flex-row justify-between items-center bg-gray-300`}
    >
      <div className={`rounded-full w-24 h-24 bg-gray-100`} />
      <div className={`rounded-full w-56 h-20 bg-gray-100`} />
    </div>
  );
}

export function UspSkeleton() {
  const divsNumber = 3;
  const divs = Array.from({ length: divsNumber }).map((_, index) => (
    <div key={index} className={`rounded-full w-24 h-24 bg-gray-300`} />
  ));

  return <div className="flex flex-row justify-evenly h-fit pb-24">{divs}</div>;
}

export function IntroSkeleton() {
  return (
    <div className={`${styles.paddingY} h-fit w-full`}>
      <UspSkeleton />
      <div className={`relative flex items-center justify-center h-fit`}>
        <BackgroundCircles />
        <div
          className={`${shimmer} relative z-5 flex items-center justify-center rounded-full w-[38rem] h-[38em] bg-gray-200 shadow-none`}
        />
      </div>
      <div className={`${shimmer} w-full h-[400px] mt-16 bg-gray-300 flex items-center justify-center`}/>
    </div>
  );
}

const BackgroundCircles = () => {
  return (
    <div className={`${shimmer} absolute inset-0 `}>
      <div
        className="w-[28em] h-[28em] bg-gray-300 rounded-full absolute"
        style={{ top: "2%", left: "8%" }}
      />
      <div
        className="w-[18em] h-[18em] bg-gray-300 rounded-full absolute"
        style={{ top: "50%", left: "22%" }}
      />
      <div
        className="w-[24em] h-[24em] bg-gray-300 rounded-full absolute"
        style={{ top: "34%", right: "8%" }}
      />
    </div>
  );
};

export default function LandingSkeleton() {
  return (
    <div className="h-fit">
      <HeroSkeleton />
      <IntroSkeleton />
    </div>
  );
}
