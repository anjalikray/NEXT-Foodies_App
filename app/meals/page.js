import Link from 'next/link';
import { Suspense } from 'react';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
     const meals = await getMeals()
     return <MealsGrid meals={meals}/>
}

export default function MealPage() {

  return (
     <>
          <header className={classes.header}>
               <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
               </h1>
               <p>Choose your favorite recipes and cook it by yourself. It is easy and fun! </p>
               <p className={classes.cta}>
                    <Link href="/meals/share">
                         Share your Favorite Recipe.  
                    </Link>
               </p>
          </header>


          <main className={classes.main}>
               <Suspense fallback={<p className={classes.loading}>Featching Meals..</p>}>
                    <Meals />
               </Suspense>
          </main>
     </>
  );
}