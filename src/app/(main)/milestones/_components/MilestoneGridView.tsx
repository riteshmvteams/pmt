import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TMilestone = {
  id: number;
  title: string;
};

interface Props {
  data: TMilestone[];
}

export default function MilestoneGridView({ data }: Props) {
  console.log(data, "data==>");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((milestone) => {
        return (
          <Card key={milestone?.id}>
            <CardHeader>ddd</CardHeader>
            <CardContent>
              <p>{milestone?.title}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
