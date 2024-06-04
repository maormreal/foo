using Newtonsoft.Json;

namespace CSharpQuestions.Questions;

public class QuestionTwo : IQuestion
{
    public void Run()
    {
        Person maor = new Person(29);
        UpdatePerson(maor);

        Console.WriteLine(JsonConvert.SerializeObject(maor, Formatting.Indented));
    }

    private void UpdatePerson(Person person)
    {
        person.Age = 30;
        person = null;
    }
}

public class Person
{
    public int Age { get; set; }

    public Person(int age)
    {
        Age = age;
    }
}