import Link from "next/link";
import classes from "./main-header.module.css"
import logoImg from "@/assets/logo.png"
import Image from "next/image";
import MainHeaderBg from "./main-header-bg";

export default function MainHeader () {
     return (
          <>
               <MainHeaderBg/>
               <header className={classes.header}>
                    <Link className={classes.logo} href="/">
                         <Image src={logoImg} alt="a plate with food on it" priority />
                         NextLevel Food
                    </Link>

                    <nav className={classes.nav}>
                         <ul>
                              <li>
                                   <Link href="/meals">Browse Meals</Link>
                              </li>

                              <li>
                                   <Link href="/community">Foodie's Community</Link>
                              </li>
                         </ul>
                    </nav>
               </header>
          </>
     )
}