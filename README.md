# AlgoPirate - A ship that can assure a smooth sailing in your coding journey
Site link: https://algo-pirate.vercel.app/
Tutorial: https://drive.google.com/file/d/1CZZ80nqkn6NPRnnJVYgrkPMlhnpYl04Y/view?usp=sharing

# Task to achieve
- Re-engineer the "RUN-ALL-TESTS" button to validate user solution

# AlgoPirate key features
- codemirror text editor in dark theme with support for multiple languages (currently added support for C++ only)
- Facilitate compilation and building of the program using rapidAPI's Online Compiler API.
- Interactive and modern UI
- Compile and run a single testcase
- Run all tests
- User's submitted solution runtime and memory chart built using chart.js
- local storage of written code.
- CHATGPT integration using rapidAPI's OPEN AI by PR labs

# API and external package link
- Chatgpt API: https://rapidapi.com/rphrp1985/api/open-ai21
- Compiler API: https://rapidapi.com/realbrain-realbrain-default/api/code-compiler10
- Codemirror: https://www.npmjs.com/package/codemirror

# Approach
- Design a layout of the UI to enable user to write, run and debug code at the same place.
- Utilized codermirror module to build text editor with language support.
- Utilised compiler API to enable compilation of code.
- Built various custom hooks to cater the needs of frequently used functions.
- Utilised chatgpt API to enable user write better and faster code.
- Built runtime and memory graph using Chart.js to enable user gauge his/her performance againt other users.
- Utilized local storage to store code and added boiler plate support

# Assumptions 
- Database is already present and custom hooks such as useGetProblemStat, usedataGen extract data from these databases. (Reality: Code has been written to generate random user data)
- Compiler API is not sophisticated enough. Therfore, added random values regarding cpuTime and memory for the compiled code written in text editor.

These assumptions seems fit for this problem statement and code would work fine once it gets access to backend and good compiler !

# Future prospects
- UX improvement by adding loaders/shimmer UI
- @media queries to make site portable on various devices
- Making prompt UI better.
- Link django as the backend.
- Have better custom input.
- Fix: compile and run button.

