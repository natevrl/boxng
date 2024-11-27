import { IoMdHelpCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";


/* 
Ce boutton va ouvrir une modal avec : 
  --> Une description claire des categorie (les prix),
  --> Comment les gants sont notés (img box2fit)
  --> Une description de chacune des stats 
*/

// h2 category details
// h2 how we note
// h2 statistics details



export default function HelperDialogButton(): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger>
        <IoMdHelpCircle
          size={40}
          className="icon-shadow rounded-full bg-background text-popover active:translate-y-1 active:shadow-none"
          aria-label="button that display help and settings"
        />
      </DialogTrigger>
        <DialogContent className="sm:max-w-md" aria-describedby={undefined} >
        <DialogHeader>
          <DialogTitle>Informations</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2"></div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
