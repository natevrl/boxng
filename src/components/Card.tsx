import {glovesData} from '@/src/utils/itemsDb';

function Card() {
  return (
    <div className='h-[300px] w-[220px] bg-red-400'>
        {glovesData[0].brand}
    </div>
  )
}

export default Card