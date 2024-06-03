
import Link from "next/link";
import styles from "./style"
import CyberBlueLogo from "@/app/assets/icons/logo-blue.svg"

export default async function NotFound() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-cmwhite">
    <div className={`${styles.padding} flex flex-col items-center justify-center text-center space-y-4`}>
      <Link href="/" className="absolute top-12 hover:bg-cmprimary/10 p-2 py-4 rounded-full transition ease-in-out duration-300"><CyberBlueLogo className="w-65 h-65 "/></Link> 
      <h1 className="text-[10em]">Oops!</h1>
      <p className="text-h5 w-2/3">Siden du leder efter er desværre ikke tilgængelig endnu, men vi arbejder på sagen!</p>
      <Link href="/" className="rounded-lg p-4 bg-cmprimary mt-8 hover:cursor-pointer hover:bg-[#002699] transition ease-in-out duration-300">
        <p className="text-p text-cmwhite">Tilbage til startsiden</p>
      </Link>
    </div>
    </section>
  );
}
