import Card from "@/components/ui/Card";
import { glovesData, IGlove } from "@/constants/glovesDb";
import { ScrollArea } from "@/components/ui/scroll-area";

function CardSection({ showCategory }: { showCategory: string }): JSX.Element {
  const categoryItems: IGlove[] = glovesData[showCategory];
  const sortedList = categoryItems.sort((a, b) => b.globalNote - a.globalNote);
  
  return (
    <ScrollArea type="always">
      {showCategory ? (
        <section className="mr-4 flex flex-wrap gap-4 p-2 tablet:justify-center">
          {sortedList.map((glove, i) => (
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
      ) : (
        <div className="w-full">Choose a category</div>
      )}
    </ScrollArea>
  );
}

export default CardSection;
