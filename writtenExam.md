## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

# forEach:

    The forEach executes the called function once for each element in the array.
    ex.
    var words = ['uno', 'dos', 'tres', 'cuatro'];
    words.forEach(function(word) {
    console.log(word);

# .map

    This method creates a new array with the results of calling a provided function on every element of the calling array.
    ex.
    const = Array = [1, 2, 3, 4]
    const function = Array.map(x = x + 25)
    console.log(function)

# .filter

    This method creates a new array filled with the elements that follow the condition stablished in the given function
    ex.
    const names = ['mauro', 'facundo', 'emiliano]
    const result = names.filter(names => word.lenght > 3)
    console.log(result)

# .find

    This method returns the value of the first element in the provided array if it satisfies the given function
    ex.
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.find(element => element > 10);
    console.log(found);
