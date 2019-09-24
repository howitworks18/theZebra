
## Install and run

Clone this repo into a local directory and change into that directory.

Install dependencies:
```bash
npm install
```
Run locally: 
```bash
npm start
```

## Architecture and testing
Moch data comes into ```comparisonScreen.js``` and mapped over using the ```<InfoCard/>``` component.

Each component has its own scss file, classNames are camel-case.    

Built with React.js, scaffold with Yeoman using  @robertoachar/react generator. 

There is one test you can run, ```npm run test```. the test will pass/fail based on if properties are being passed to the main component. 


## License
[MIT](https://choosealicense.com/licenses/mit/)