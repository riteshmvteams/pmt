import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DataTableProps<TData> {
  data: TData[];
}

export default function DataGridView<TData>({ data }: DataTableProps<TData>) {
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
