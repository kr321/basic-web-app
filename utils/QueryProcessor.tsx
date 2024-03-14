'use str'
export default function QueryProcessor(query: string): string {

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "KR"
    );
  }
  if (query.toLowerCase().includes("plus")) {
    const str = query.toLowerCase();
    const regex = /what is (\d+) plus (\d+)/;
    const numbers = str.match(regex);
    if (numbers)
    {
      const firstNumber = parseInt(numbers[1]);
      const secondNumber = parseInt(numbers[2]);
      const sum = firstNumber + secondNumber;
      return (
        sum.toString()
      );
    }
  }
  if (query.toLowerCase().includes("multiplied by")) {
    const str = query.toLowerCase();
    const regex = /what is (\d+) multiplied by (\d+)/;
    const numbers = str.match(regex);
      if (numbers)
      {
        const firstNumber = parseInt(numbers[0]);
        const secondNumber = parseInt(numbers[1]);
        const sum = firstNumber * secondNumber;
        return (
          sum.toString()
        );
      }
    }
  

  return "";
}
