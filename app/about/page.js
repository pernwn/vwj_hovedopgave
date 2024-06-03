import React from 'react';
import styles from '../style';
import Link from 'next/link';


const page = () => {
  return (
    <div className={`${styles.padding}`}>
      <h3 className="text-h3">Heyhey, hvis du ser det her så er der ikke noget indhold endnu.</h3>
      <p className="text-h5">Jeg genopfrisker bare Nextjs routing.</p>

      <Link href="/">
      <button className="bg-cmprimary p-2 my-2 rounded-lg hover:cursor-pointer"><p className="text-p text-cmwhite">Tilbage til startsiden</p></button>
      </Link>
    </div>
  );
}

export default page;
