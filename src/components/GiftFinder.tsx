
import { useState } from "react";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import GiftCard from "./GiftCard";
import { giftSuggestions, GiftSuggestion } from "@/data/giftSuggestions";

const GiftFinder = () => {
  const [occasion, setOccasion] = useState("");
  const [recipient, setRecipient] = useState("");
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("");
  const [suggestions, setSuggestions] = useState<GiftSuggestion[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter gifts based on interests and budget
    const filteredGifts = giftSuggestions.filter(
      (gift) =>
        gift.price <= Number(budget) &&
        gift.interests.some((interest) =>
          interests.toLowerCase().includes(interest.toLowerCase())
        )
    );
    setSuggestions(filteredGifts);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Gift
            size={48}
            className="text-purple-600 animate-bounce"
            strokeWidth={1.5}
          />
        </div>

        <Card className="p-8 mb-8 backdrop-blur-sm bg-white/90">
          <h1 className="text-3xl font-bold text-center mb-8">
            AI Instant Gift Finder ✨
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Occasion 🎉</label>
                <Input
                  placeholder="e.g., Birthday, Anniversary"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Recipient 👤</label>
                <Input
                  placeholder="e.g., Sister, Boyfriend"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Interests 💝</label>
                <Input
                  placeholder="e.g., Gaming, Books, Fitness"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Budget 💰</label>
                <Input
                  type="number"
                  placeholder="e.g., 50, 100"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              >
                Find Gifts 🎁
              </Button>
            </div>
          </form>
        </Card>

        {suggestions.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {suggestions.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftFinder;
