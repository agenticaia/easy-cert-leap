import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Sun className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Girasol<span className="text-primary">.pe</span>
          </span>
        </div>
        <Button variant="cta" size="sm" onClick={scrollToForm}>
          Obtener 50% OFF
        </Button>
      </div>
    </header>
  );
};

export default Header;
