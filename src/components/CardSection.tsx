import Card from "./Card";
import { gloves } from "../utils/itemsDb";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";

function CardSection({ showCategory }: { showCategory: string }): JSX.Element {
  const categoryItems = gloves["middle"];
  return (
    <ScrollArea type="always">
      <section className='p-2 mr-4 flex flex-wrap gap-4'>
        {categoryItems.map((item, i) => (
          <Card key={i} img={item.img} />
        ))}
      </section>
    </ScrollArea>
  );
}

export default CardSection;
