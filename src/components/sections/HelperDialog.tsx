import Image from "next/image";
import Dialog from "@/components/ui/Dialog";
import { statsData } from "@/constants/statsData";
import { categoryData } from "@/constants/categoryDb";
import { IoMdHelpCircle } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function HelperDialogButton(): JSX.Element {
  return (
    <>
      <IoMdHelpCircle
        size={40}
        className="icon-shadow rounded-full bg-background text-popover"
        aria-label="button that display help and settings"
      />
    </>
  );
}
function HelperDialogContent(): JSX.Element {
  const helperContent = [
    {
      key: 1,
      title: "category details",
      content: (
        <table>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Price range (€)</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>{item.depiction}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ),
    },
    {
      key: 2,
      title: "statistics details",
      content: (
        <Accordion type="single" collapsible className="w-5/6">
          {statsData.map((stat, i) => {
            return (
              <AccordionItem key={i} value={stat.abbreviation}>
                <AccordionTrigger className="link-hover-effect">
                  {stat.name} ({stat.abbreviation})
                </AccordionTrigger>
                <AccordionContent>{stat.details}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      ),
    },
    {
      key: 3,
      title: "how we note",
      content: (
        <div className="relative h-[400px] w-full mobile:h-[300px]">
          <Image
            src="/images/rating-cards-key.webp"
            alt="how we note image"
            priority
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-top"
          />
        </div>
      ),
    },
  ];

  const content = helperContent.map((item, i) => {
    return (
      <div
        key={item.key}
        className="flex flex-col items-center gap-8 text-center"
      >
        <h2 className="mb-4 font-bold uppercase">{item.title}</h2>
        {item.content}
        {i !== helperContent.length - 1 && (
          <Separator className="my-8 bg-popover" />
        )}
      </div>
    );
  });

  return (
    <ScrollArea type="always" className="h-full rounded-xl">
      <div className="flex flex-col p-8">{content}</div>
    </ScrollArea>
  );
}

function HelperDialog() {
  return (
    <Dialog
      title="helper menu"
      triggerButton={<HelperDialogButton />}
      className="h-5/6 w-5/6 max-w-screen-xl"
    >
      <section className="h-full w-full rounded-xl border-2 border-popover">
        <HelperDialogContent />
      </section>
    </Dialog>
  );
}

export default HelperDialog;
