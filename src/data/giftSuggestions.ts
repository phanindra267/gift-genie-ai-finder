
export type GiftSuggestion = {
  id: string;
  name: string;
  description: string;
  price: number;
  link: string;
  interests: string[];
  occasions: string[];
};

export const giftSuggestions: GiftSuggestion[] = [
  {
    id: "1",
    name: "Nintendo Switch",
    description: "Perfect for gaming enthusiasts",
    price: 299.99,
    link: "https://amazon.com",
    interests: ["Gaming", "Technology"],
    occasions: ["Birthday", "Christmas"]
  },
  {
    id: "2",
    name: "Kindle Paperwhite",
    description: "For the book lovers",
    price: 139.99,
    link: "https://amazon.com",
    interests: ["Books", "Reading"],
    occasions: ["Birthday", "Anniversary"]
  },
  {
    id: "3",
    name: "Yoga Mat Set",
    description: "Complete yoga kit for fitness enthusiasts",
    price: 49.99,
    link: "https://amazon.com",
    interests: ["Fitness", "Wellness"],
    occasions: ["Birthday", "Christmas"]
  },
  {
    id: "4",
    name: "Art Supply Set",
    description: "Professional art supplies for creatives",
    price: 79.99,
    link: "https://amazon.com",
    interests: ["Art", "Creativity"],
    occasions: ["Birthday", "Christmas"]
  }
];
