import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TicketIcon, UserIcon } from "lucide-react"; // Icons from Lucide React (or use any other icon library)

// Props definition for the WinnerCard
interface WinnerCardProps {
  ticketNumber: number;
  username: string | null;
  chatId: string;
  level: number;
}

// Example background gradients based on the winner's level
const levelColors: { [key: number]: string } = {
  1: 'from-yellow-400 to-yellow-600', // Gold for level 1 (First Prize)
  2: 'from-gray-400 to-gray-600',     // Silver for level 2 (Second Prize)
  3: 'from-yellow-900 to-yellow-500', // Bronze for level 3 (Third Prize)
};

// WinnerCard component
const WinnerCard = ({ ticketNumber, username, chatId, level }: WinnerCardProps) => {
  return (
    <Card className={`max-w-sm p-4 shadow-xl rounded-lg bg-gradient-to-r ${levelColors[level]} hover:scale-105 transform transition-all duration-300`}>
      <CardHeader className="text-white">
        <CardTitle className="text-2xl font-bold">Winner - Level {level}</CardTitle>
        <CardDescription className="flex items-center space-x-2 mt-2">
          <Badge className="bg-white text-black font-semibold">Level {level}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        <div className="flex items-center space-x-2 my-3">
          <TicketIcon className="w-6 h-6 text-white" />
          <p className="text-lg font-semibold">
            Ticket Number: <span className="font-bold">{ticketNumber}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserIcon className="w-6 h-6 text-white" />
          <p className="text-lg">
            <strong>Username:</strong> {username ?? "N/A"}
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <p className="text-lg">
            <strong>Chat ID:</strong> {chatId}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WinnerCard;
