import BeltCard from "@/components/ui/BeltCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { categoryData } from "@/constants/categoryDb";
import Dialog from "@/components/ui/Dialog";
import MobileDialogCategory from "@/components/sections/MobileDialogCategory";
import { IoMdHelpCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";

interface CategorySliderProps {
  funcToGetCategory: (category: string) => void;
}

function CategorySlider({
  funcToGetCategory,
}: CategorySliderProps): JSX.Element {
  return (
    <>
      <section className="flex items-center gap-4 tablet:justify-center">
        {/* mobile */}
        <div className="flex items-end gap-4 min-tbl:hidden">
          <MobileDialogCategory funcToGetCategory={funcToGetCategory} />
          <Dialog
            title="helper menu"
            triggerButton={
              <IoMdHelpCircle
                size={40}
                className="icon-shadow rounded-full bg-background text-popover active:translate-y-1 active:shadow-none"
                aria-label="button that display help and settings"
              />
            }
          >
            <h1>Help</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, purus eget cursus pharetra, ex mi ultrices nunc, nec
              tincidunt
            </p>
          </Dialog>
        </div>
        {/* desktop */}
        <div className="flex h-full w-60 flex-col items-center gap-4 py-8 tablet:hidden">
          <h1>Select Category</h1>
          <ScrollArea
            type="always"
            className="w-full whitespace-nowrap rounded-xl"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              {categoryData.map((item, index) => {
                return (
                  <BeltCard
                    key={index}
                    title={item.name}
                    p={item.depiction}
                    img={item.img}
                    funcToGetCategory={funcToGetCategory}
                    mobileDialogState={{ state: false, toggle: () => {} }}
                  />
                );
              })}
            </div>
          </ScrollArea>
          {/* <HelperDialogButton /> */}
        </div>
        <Separator
          className="h-full bg-primary tablet:hidden"
          orientation="vertical"
        />
      </section>
    </>
  );
}

export default CategorySlider;
