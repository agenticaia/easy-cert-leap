import { useState, useCallback } from "react";
import { Upload, FileCheck, AlertCircle, HelpCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FormSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      validateAndSetFile(droppedFile);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      validateAndSetFile(selectedFile);
    }
  }, []);

  const validateAndSetFile = (file: File) => {
    const validExtensions = ['.cer', '.xml'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!validExtensions.includes(fileExtension)) {
      toast({
        title: "Formato no válido",
        description: "Por favor sube un archivo .CER o XML firmado.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(file);
  };

  const handleSubmit = async () => {
    if (!file) return;
    
    setIsValidating(true);
    
    // Simulating validation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsValidating(false);
    toast({
      title: "¡Archivo validado correctamente!",
      description: "Tu cupón del 50% de descuento ha sido generado.",
    });
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <section id="form-section" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Canjea tu descuento aquí
            </h2>
            <p className="text-muted-foreground text-lg">
              Esta oferta es exclusiva para usuarios que migran desde otra Entidad de Certificación. 
              Simplemente valida tu certificado actual y el descuento es tuyo.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-background rounded-3xl shadow-card p-8 md:p-10">
            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300 cursor-pointer
                ${isDragging 
                  ? "border-primary bg-primary/5 scale-[1.02]" 
                  : file 
                    ? "border-secondary bg-secondary/5" 
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }
              `}
            >
              <input
                type="file"
                accept=".cer,.xml"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {file ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                    className="text-sm text-accent hover:underline"
                  >
                    Cambiar archivo
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Arrastra y suelta tu archivo aquí
                    </p>
                    <p className="text-sm text-muted-foreground">
                      o haz clic para buscar
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Formatos aceptados: Clave pública (.CER) o XML firmado
                  </p>
                </div>
              )}
            </div>

            {/* Help Link */}
            <div className="mt-4 flex items-center justify-center gap-2 text-sm">
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
              <a href="#" className="text-primary hover:underline">
                ¿No tienes el archivo .CER? Descubre cómo descargarlo aquí
              </a>
            </div>

            {/* Submit Button */}
            <Button
              variant="cta"
              size="xl"
              className="w-full mt-8"
              disabled={!file || isValidating}
              onClick={handleSubmit}
            >
              {isValidating ? (
                <>
                  <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Validando...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Validar y Obtener Descuento
                </>
              )}
            </Button>

            {/* Disclaimer */}
            <div className="mt-6 flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
              <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Nota:</strong> Oferta válida para renovaciones desde otros proveedores. 
                No aplica para certificados emitidos directamente por Reniec (Sunat).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
