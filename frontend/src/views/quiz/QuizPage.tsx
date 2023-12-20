import Card from "../../components/UI/Card";
import QuizCard from "../../components/UI/QuizCard";
import { useGetAllQuizzesQuery } from "../../store/api-slice";

const QuizPage = () => {
  const { data, isLoading } = useGetAllQuizzesQuery();
  return (
    <main>
      <Card loading={isLoading} className="min-h-[60vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data?.map((quiz) => (
            <Card key={quiz._id}>
              <QuizCard quiz={quiz} />
            </Card>
          ))}
        </div>
      </Card>
    </main>
  );
};

export default QuizPage;
