namespace CSharpQuestions.Questions;

public class QuestionThree : IQuestion
{
    public void Run()
    {
        try
        {
            throw new NotImplementedException();
            throw new Exception();
        }
        catch (NotImplementedException ex)
        {
            Console.WriteLine("NotImplementedException caught");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Exception caught");
        }
        finally
        {
            Console.WriteLine("From finally clause");
        }
    }
}