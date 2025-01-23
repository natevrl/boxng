import Card from "@/components/ui/Card";
import { glovesData, IGlove } from "@/constants/glovesDb";
import { shoesData } from "@/src/constants/shoesDb";
import { ScrollArea } from "@/components/ui/scroll-area";

function CardSection({
  showCategory,
  isGloves = false,
}: {
  showCategory?: string;
  isGloves?: boolean;
}): JSX.Element {
  return (
    <ScrollArea type="always">
      {isGloves ? <GlovesDeck category={showCategory} /> : <ShoesDeck />}
    </ScrollArea>
  );
}

function GlovesDeck({ category }: { category?: string }): JSX.Element {
  const categoryItems: IGlove[] = category && glovesData[category];
  const sortedList = categoryItems.sort((a, b) => b.globalNote - a.globalNote);

  return (
    <>
      {category ? (
        <section className="mr-4 mt-4 flex flex-wrap justify-center gap-6 p-2 tablet:justify-center">
          {sortedList.map((glove, i) => (
            <Card
              isGloves
              key={`card-${i}`}
              brand={glove.brand}
              title={glove.title}
              img={glove.img}
              country={glove.country}
              stars={glove.stars}
              globalNote={glove.globalNote}
              stats={glove.stats}
              videoUrl={glove.videoUrl}
              buyUrl={glove.buyUrl}
              classement={i + 1}
            />
          ))}
        </section>
      ) : (
        <div className="w-full">Choose a category</div>
      )}
    </>
  );
}

function ShoesDeck(): JSX.Element {
  const sortedList = shoesData.sort((a, b) => b.globalNote - a.globalNote);

  return (
    <>
      <section className="flex flex-wrap justify-center gap-6 p-2 mobile:my-4 tablet:justify-center min-mbl:m-8">
        {sortedList.map((shoe, i) => (
          <Card
            key={`card-${i}`}
            brand={shoe.brand}
            title={shoe.title}
            img={shoe.img}
            stars={shoe.stars}
            globalNote={shoe.globalNote}
            stats={shoe.stats}
            videoUrl={shoe.videoUrl}
            buyUrl={shoe.buyUrl}
            classement={i + 1}
          />
        ))}
      </section>
    </>
  );
}

export default CardSection;
