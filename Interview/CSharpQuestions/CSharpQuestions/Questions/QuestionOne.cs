namespace CSharpQuestions.Questions;

public class QuestionOne : IQuestion
{
    public void Run()
    {
        try
        {
            RethrowWithoutException();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }
    }

    private void RethrowWithException()
    {
        try
        {
            throw new Exception("Throwing empty exception");
        }
        catch (Exception ex)
        {
            //log
            throw ex;
        }
    }

    private void RethrowWithoutException()
    {
        try
        {
            throw new Exception("Throwing empty exception");
        }
        catch (Exception ex)
        {
            //log
            throw;
        } 
    }

}