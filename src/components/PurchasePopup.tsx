import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

const NAMES = [
  "João S.", "Maria C.", "Pedro L.", "Ana O.", "Lucas M.", "Beatriz R.",
  "Rafael T.", "Camila F.", "Bruno A.", "Juliana P.", "Felipe N.", "Larissa D.",
];
const CITIES = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador", "Recife", "Porto Alegre", "Fortaleza"];

export function PurchasePopup() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ name: "", city: "", time: "" });

  useEffect(() => {
    const trigger = () => {
      setData({
        name: NAMES[Math.floor(Math.random() * NAMES.length)],
        city: CITIES[Math.floor(Math.random() * CITIES.length)],
        time: `${Math.floor(Math.random() * 9) + 1} min atrás`,
      });
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    };
    const first = setTimeout(trigger, 4000);
    const id = setInterval(trigger, 12000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 transition-all duration-500 sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="card-premium flex items-center gap-3 rounded-2xl border border-primary/40 px-4 py-3 shadow-neon max-w-[300px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-cta">
          <ShoppingBag className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="text-sm">
          <div className="font-bold text-foreground">{data.name} de {data.city}</div>
          <div className="text-muted-foreground text-xs">acabou de garantir o pack 🔥</div>
          <div className="text-primary text-xs font-semibold mt-0.5">{data.time}</div>
        </div>
      </div>
    </div>
  );
}
