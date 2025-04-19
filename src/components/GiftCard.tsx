
import { ExternalLink } from "lucide-react";
import { GiftSuggestion } from "@/data/giftSuggestions";
import { Card } from "@/components/ui/card";

interface GiftCardProps {
  gift: GiftSuggestion;
}

const GiftCard = ({ gift }: GiftCardProps) => {
  return (
    <Card className="p-6 hover:scale-105 transition-transform duration-200">
      <h3 className="text-xl font-semibold mb-2">{gift.name}</h3>
      <p className="text-gray-600 mb-4">{gift.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">${gift.price}</span>
        <a
          href={gift.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
        >
          View <ExternalLink size={16} />
        </a>
      </div>
    </Card>
  );
};

export default GiftCard;
