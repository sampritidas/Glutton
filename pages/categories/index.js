import Image from 'next/image';
import Link from 'next/link';
import {DishCategories} from '../../db/data.json'
import styles from '../../styles/Categories.module.css'

const Categories = ({items}) => {

  return ( 
    <div>

      <div className={styles.categories}>
        {DishCategories.map(categories => (
          <div className="link" key={categories.id}>
            <Link
            href={`/categories/${categories.id}`}
            >
                <div>
                <Image src={`/images/${categories.type}.png`} alt="image" width={300} height={300} className={styles.categoriesImg} />
                  <h3>{categories.type}</h3>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;