using CSharpQuestions.Questions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpQuestions;

public class QuestionFactory
{
    public IQuestion GetQuestion(QuestionType questionType)
    {
        switch (questionType)
        {
            case QuestionType.One:
                return new QuestionOne();
            case QuestionType.Two:
                return new QuestionTwo();
            case QuestionType.Three:
                return new QuestionThree();
            case QuestionType.Four:
                return new QuestionFour();
            default:
                throw new ArgumentException("Question Doesn't exists");
        }
    }
}

public enum QuestionType
{
    One,
    Two,
    Three,
    Four
}
