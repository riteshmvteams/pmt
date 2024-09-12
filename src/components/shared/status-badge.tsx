import { Badge } from "../ui/badge";

export const getStatusBadge = (status: string) => {
  switch (status?.toLowerCase()) {
    case "open":
    case "low":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-destructiveBg text-status-destructive"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-destructive"></span>{" "}
          {status}
        </Badge>
      );
    case "in progress":
    case "medium":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-pendingBg text-status-pending"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-pending"></span>{" "}
          {status}
        </Badge>
      );
    case "resolved":
    case "closed":
    case "completed":
    case "high":
      return (
        <Badge
          variant="outline"
          className="font-normal rounded-md gap-2 bg-status-successBg text-status-success"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-status-success"></span>{" "}
          {status}
        </Badge>
      );
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};
