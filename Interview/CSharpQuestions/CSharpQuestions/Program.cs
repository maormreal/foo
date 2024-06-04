// See https://aka.ms/new-console-template for more information
using CSharpQuestions;
using CSharpQuestions.Questions;

var foo = new QuestionFactory();
IQuestion question = foo.GetQuestion(QuestionType.One);
question.Run();
