import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function Questions() {
  return (
    <div className="w-full mx-auto max-w-4xl">
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-1 w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-2 border-black px-6">
            ¿Es gratis usar la plataforma?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance border-2 border-black px-6 rounded-lg mt-1 pt-4">
            <p>
              Sí. Puedes empezar gratis y usar todas las funciones básicas sin
              límites.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="border-2 border-black px-6">
            ¿Necesito instalar algo?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance border-2 border-black px-6 rounded-lg mt-1 pt-4">
            <p>
              No. Funciona directamente desde tu navegador, y también desde tu
              móvil.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="border-2 border-black px-6">
            ¿Mis enlaces son privados?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance border-2 border-black px-6 rounded-lg mt-1 pt-4">
            <p>
              Totalmente. Solo tú puedes verlos, a menos que decidas
              compartirlos.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="border-2 border-black px-6">
            ¿Puedo organizar mis enlaces por categorías?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance border-2 border-black px-6 rounded-lg mt-1 pt-4">
            <p>
              Sí. Puedes agregar una descripción, etiquetas y vistas
              personalizadas.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="border-2 border-black px-6">
            ¿Necesito una cuenta para guardar enlaces?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance border-2 border-black px-6 rounded-lg mt-1 pt-4">
            <p>
              No. Puedes guardar y organizar tus enlaces directamente, sin
              registrarte.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Questions;
