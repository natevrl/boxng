import { useState, useEffect, useRef, use } from "react";

type DialogProps = {
  title: string;
  children: React.ReactNode;
  triggerButton: React.ReactNode;
  className?: string;
  handleCloseOnCategorySelect?: {state: boolean, func: () => void};

};

const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  triggerButton,
  className = "",
  handleCloseOnCategorySelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Fonction pour fermer la modal si on clique en dehors
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if(handleCloseOnCategorySelect?.state) {
      setIsOpen(false);
      handleCloseOnCategorySelect.func();
    }
  });

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
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {triggerButton}
      </div>

      {/* Overlay et Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          aria-label={title}
        >
          {/* Dialog box */}
          <div
            ref={dialogRef}
            className={`${className} relative rounded-xl bg-background shadow-lg`}
          >
            {/* Titre */}
            {/* Icone de fermeture */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-3 z-50 text-2xl text-secondary hover:text-secondary/60"
            >
              ✕
            </button>
            {/* Contenu du Dialog */}
            <div className="h-full w-full p-1">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
