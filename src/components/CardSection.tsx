import Card from "./Card";
import { glovesData, IGlove } from "../constants/glovesDb";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";

function CardSection({ showCategory }: { showCategory: string }): JSX.Element {
  const categoryItems: IGlove[] = glovesData[showCategory];
  return (
    <ScrollArea type='always'>
      {showCategory ? <section className='p-2 mr-4 flex flex-wrap gap-4 tablet:justify-center'>
        {categoryItems.map((glove, i) => (
          <Card
            key={i}
            brand={glove.brand}
            title={glove.title}
            img={glove.img}
            country={glove.country}
            stars={glove.stars}
            globalNote={glove.globalNote}
            stats={glove.stats}
            videoUrl={glove.videoUrl}
            buyUrl={glove.buyUrl}
          />
        ))}
      </section> : <div className="w-full">Choose a category</div>}
    </ScrollArea>
  );
}

export default CardSection;
