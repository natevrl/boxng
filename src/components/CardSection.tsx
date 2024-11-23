import Card from "./Card";
import {glovesData, IGlove} from "../utils/itemsDb";
import {ScrollArea, ScrollBar} from "@/src/components/ui/scroll-area";


function CardSection({showCategory}: {showCategory: string}): JSX.Element {
  const categoryItems: IGlove[] = glovesData[showCategory];
  return (
    <ScrollArea type="always">
      <section className="p-2 mr-4 flex flex-wrap gap-4">
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
      </section>
    </ScrollArea>
  );
}

export default CardSection;
