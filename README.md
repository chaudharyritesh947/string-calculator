<div style="background: BLACK;
    color: green;">
Given below is a sample project which is developed in nest js

Problem:
Create a simple String calculator with a method signature:

int Add(string numbers)
The method can take up to two numbers, separated by commas, and will return their sum.

For example "" or "1" or "1,2" as inputs. (for an empty string it will return 0)

Hints:

Start with the simplest test case of an empty string and move to one and two numbers
Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
Remember to refactor after each passing test
Allow the Add method to handle an unknown amount of numbers

Allow the Add method to handle new lines between numbers (instead of commas).

The following input is ok: "1\n2,3" (will equal 6)
The following input is NOT ok: "1,\n" (not need to prove it - just clarifying)
Support different delimiters

To change a delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]" for example "//;\n1;2" should return three where the default delimiter is ";"
The first line is optional. all existing scenarios should still be supported
Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.

If there are multiple negatives, show all of them in the exception message.

Problem link: https://blog.incubyte.co/blog/tdd-assessment/

<p>
<b>Setup</b>
<ul>
 <li>
    Step1: Make sure you have nest.js in your system 
 </li>
 <li>
   Step2: Do a git clone for this repo by running the command git clone <url>
 </li>
 <li>
   Step3: Run npm install while being the repo folder.
 </li>
</ul>
</p>

<p>
<b>How to run the app on server ?</b>
<ul>
 <li>
    Run, npm run start
 </li>
</ul>


<b>How to run Tests ?</b>
<ul>
 <li>
    Run, npm run test
  </li>
</ul>




<div>
    <div> <b>Author</b>: <i>Ritesh Kumar</i> </div>
    <div> <b>Contact</b>: <i>+91-9140300647</i> </div>
    <div> <b>Email</b>: <i>chaudharyritesh947@gmail.com</i> </div>

</div>

</p>

</div>