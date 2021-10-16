//creating an array and passing the number, questions,options and answers

let questions = [
    {
        numb: 1,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Computer Style Sheets",
            "Colorful Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets"
        ]
    },

    {
        numb: 2,
        question: "What is the correct HTML for referring to an external style sheet?",
        answer: 'link rel="stylesheet" type="text/css" href="mystyle.css"',
        options: [
            'link rel="stylesheet" type="text/css" href="mystyle.css"',
            'style src="mystyle.css"',
            'stylesheet>mystyle.css</stylesheet',
            'stylesheet>htttp://...mystyle.css</stylesheet'
        ]
    },

    {
        numb: 3,
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answer: "In the head section",
        options: [
            "In the head section",
            "At the end of the document",
            "In the body section",
            "In the style section"
        ]
    },

    {
        numb: 4,
        question: "Which HTML tag is used to define an internal style sheet?",
        answer: "style",
        options: [
            "script",
            "style",
            "css",
            "link"
        ]
    },

    {
        numb: 5,
        question: "Which HTML attribute is used to define inline styles?",
        answer: "style  ",
        options: [
            "style  ",
            "font",
            "styles",
            "class"
        ]
}
//,
//     {
//         numb: 6,
//         question: "Which is the correct CSS syntax?",
//         answer: "body {color: black;}",
//         options: [
//             "{body;color:black;}",
//             "body {color: black;}",
//             "body:color=black;",
//             "{body:color=black;}"
//         ]
//     },

//     {
//         numb: 7,
//         question: "How do you insert a comment in a CSS file?",
//         answer: "/* this is a comment */  ",
//         options: [
//             "/* this is a comment */  ",
//             "' this is a comment",
//             "// this is a comment",
//             "// this is a comment //"
//         ]
//     },

//     {
//         numb: 8,
//         question: "Which property is used to change the background color?",
//         answer: "background-color",
//         options: [
//             "background-color",
//             "color",
//             "bgcolor",
//             "backcolor"
//         ]
//     },

//     {
//         numb: 9,
//         question: "How do you add a background color for all <h1> elements?",
//         answer: "h1 {background-color:#FFFFFF;}  ",
//         options: [
//             "h1.all {background-color:#FFFFFF;}",
//             "all.h1 {background-color:#FFFFFF;}",
//             "all h1 {background-color:#FFFFFF;}",
//             "h1 {background-color:#FFFFFF;}  "
//         ]
//     },

//     {
//         numb: 10,
//         question: "Which CSS property is used to change the text color of an element?",
//         answer: "color  ",
//         options: [
//             "color  ",
//             "fgcolor",
//             "text-color",
//             "font-color"
//         ]
//     },
//     {
//         numb: 11,
//         question: "Which CSS property controls the text size?",
//         answer: "font-size",
//         options: [
//             "font-size",
//             "font-style",
//             "text-style",
//             "text-size"
//         ]
//     },

//     {
//         numb: 12,
//         question: "What is the correct CSS syntax for making all the <p> elements bold?",
//         answer: "p {font-weight:bold;} ",
//         options: [
//             'p style="font-size:bold;"',
//             'p style="font-weight:bold;"',
//             'p style="text-size:bold;"',
//             'p {text-style:bold;}'
//         ]
//     },

//     {
//         numb: 13,
//         question: "How do you display hyperlinks without an underline?",
//         answer: "a {text-decoration:none;}",
//         options: [
//             "a {text-decoration:none;}",
//             "a {underline:none;}",
//             "a {decoration:no-underline;}",
//             "a {text-decoration:no-underline;}"
//         ]
//     },

//     {
//         numb: 14,
//         question: "How do you make each word in a text start with a capital letter?",
//         answer: "text-transform:capitalize  ",
//         options: [
//             "You can't do that with CSS",
//             "transform:capitalize",
//             "text-transform:capitalize  ",
//             "text-style:capitalize"
//         ]
//     },

//     {
//         numb: 15,
//         question: "Which property is used to change the font of an element?",
//         answer: "font-family  ",
//         options: [
//             "font-style",
//             "font-family  ",
//             "font-weight",
//             "font-size"
//         ]
//     },
//     {
//         numb: 16,
//         question: "How do you make the text bold?",
//         answer: "font-weight:bold;  ",
//         options: [
//             "font-weight:bold;  ",
//             "font:bold;",
//             "font:bold;",
//             "font-struct:bold;"
//         ]
//     },

//     {
//         numb: 17,
//         question: `How do you display a border like this:
//         The top border = 10 pixels
// The bottom border = 5 pixels
// The left border = 20 pixels
// The right border = 1pixel?
//         `,
//         answer: "border-width:10px 1px 5px 20px;  ",
//         options: [
//             "border-width:10px 1px 5px 20px;  ",
//             "border-width:5px 20px 10px 1px;",
//             "border-width:10px 5px 20px 1px;",
//             "border-width:10px 20px 5px 1px;"
//         ]
//     },

//     {
//         numb: 18,
//         question: "Which property is used to change the left margin of an element?",
//         answer: "margin-left  ",
//         options: [
//             "margin-left  ",
//             "indent",
//             "padding-left",
//             "outline"
//         ]
//     },

//     {
//         numb: 19,
//         question: "When using the padding property; are you allowed to use negative values?",
//         answer: "No",
//         options: [
//             "No",
//             "Yes",
//             "Sometimes",
//             "Always"
//         ]
//     },

//     {
//         numb: 20,
//         question: "How do you make a list that lists its items with squares?",
//         answer: "list-style-type: square;  ",
//         options: [
//             "list-style-type: square;  ",
//             "list-type: square;",
//             "list: square;",
//             "list-type-style: square;"
//         ]
//     },
//     ,

//     {
//         numb: 21,
//         question: "How do you select an element with id 'demo'?",
//         answer: "#demo  ",
//         options: [
//             "#demo  ",
//             "demo",
//             "*demo",
//             ".demo"
//         ]
//     },
//     ,

//     {
//         numb: 22,
//         question: "How do you select elements with class name 'test'?",
//         answer: ".test",
//         options: [
//             ".test",
//             "test",
//             "*test",
//             "#test"
//         ]
//     },
//     ,

//     {
//         numb: 23,
//         question: "How do you select all p elements inside a div element?",
//         answer: "div p  ",
//         options: [
//             "div p  ",
//             "div + p",
//             "div.p",
//             "div ~ p"
//         ]
//     },
//     ,

//     {
//         numb: 24,
//         question: "How do you group selectors?",
//         answer: "Separate each selector with a comma  ",
//         options: [
//             "Separate each selector with a comma  ",
//             "Separate each selector with a plus sign",
//             "Separate each selector with a space",
//             "Separate each selector with a style"
//         ]
//     },
//     ,

//     {
//         numb: 25,
//         question: "What is the default value of the position property?",
//         answer: "static  ",
//         options: [
//             "static  ",
//             "relative",
//             "fixed",
//             "absolute"
//         ]
//     }

]