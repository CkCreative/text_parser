# Parse Text to Process Numbers

## Running

Ensure you have node installed.

run `npm start`

## Problem

I was an admin of one WhatsApp group collecting contributions towards some event. I did not want to keep updating an Excel spreadsheet all the time. Therefore, this program goes through the text file I copy pasted, finds all the numbers and prints the result.

## How it works

The sample text file is attached. It looks for a **/** symbol and extracts all the numbers into an array and then sums the array.

## Sample data in the `data.txt` file

```text
Contribution

1. Sam 10000/=
2. Emmanuel 1000/=
3. Antony 1000/=
4. Sue 1000/=
5. Chris 1000/=
6. Fatma 1000/=
7. Essie 2000/=
8. Sal 1530/=
9. Epstein 1000/=
10. Trump 1000/=
```

## Sample output when you run `npm start`

```text
> parser@1.0.0 start
> node app.js

Total Contribution:  20,530
```

## How you can customise to add any numbers in a text file

You can replace the **/** symbol with any terminating symbol you used. You could even let it find a **$** sign etc.
