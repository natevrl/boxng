import { useState, useEffect, useRef } from "react";



/* 
Ce boutton va ouvrir une modal avec : 
  --> Une description claire des categorie (les prix),
  --> Comment les gants sont notés (img box2fit)
  --> Une description de chacune des stats 
*/

// h2 category details
// h2 how we note
// h2 statistics details
// function HelperContent() : JSX.Element {
//   return (
//     <div>

//     </div>
//   );
// }


type DialogProps = {
  title: string;
  children: React.ReactNode;
  triggerButton: React.ReactNode; // Le bouton déclencheur personnalisé
};

const Dialog: React.FC<DialogProps> = ({ title, children, triggerButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Fonction pour fermer le modal si on clique en dehors
  const handleClickOutside = (event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Bouton déclencheur */}
      <div onClick={() => setIsOpen(true)}>{triggerButton}</div>

      {/* Overlay et Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Dialog box */}
          <div
            ref={dialogRef}
            className="relative bg-white rounded-lg shadow-lg w-96 p-6"
          >
            {/* Titre */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              {/* Icone de fermeture */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            {/* Contenu du Dialog */}
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};


export default Dialog;

// function HelperDialog(): JSX.Element {
//   return <section on className="center-absolute center- h-4/6 w-4/6 max-w-screen-xl bg-red-400">test</section>;
// }

// export default function HelperDialogButton(): JSX.Element {
//   const [isOpen, setIsOpen] = useState(false);
//   function handleOpening() {
//     setIsOpen((state) => !state);
//   }
//   return (
//     <>
//       <button onClick={handleOpening}>
//         <IoMdHelpCircle
//           size={40}
//           className="icon-shadow rounded-full bg-background text-popover active:translate-y-1 active:shadow-none"
//           aria-label="button that display help and settings"
//         />
//       </button>

//       {isOpen && <HelperDialog />}
//     </>
//   );
// }
