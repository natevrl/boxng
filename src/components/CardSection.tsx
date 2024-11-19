import Card from './Card';
import {gloves} from '../utils/itemsDb';

function CardSection({ showCategory }: { showCategory: string }) : JSX.Element {
  const categoryItems = gloves["middle"];
  return (
    <section className='flex flex-col justify-center items-center'>
      {categoryItems.map((item, i) => (
        <Card key={i} img={item.img} />
      ))}
    </section>
  )
}

export default CardSection