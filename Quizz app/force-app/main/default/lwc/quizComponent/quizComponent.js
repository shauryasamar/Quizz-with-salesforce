import { LightningElement } from 'lwc';

export default class QuizComponent extends LightningElement {

    selected={} // for storing answers
    correctAnswers = 0 //to show the number of correct answers
    isSubmitted = false // use to show the result
    QuizList = [
        {
            id: 'Question1',
            Question: "What is a data structure?",
            options : {
                a:'programming language',
                b: 'A collection of algorithms',
                c: 'A way to store and organize data',
                d: ' A type of computer hardware'
            },
            currectAns: 'c'
        },
        {
            id: 'Question2',
            Question: "What are the disadvantages of arrays?",
            options : {
                a:'Index value of an array can be negative',
                b: 'Elements are sequentially accessed',
                c: 'Data structure like queue or stack cannot be implemented',
                d: 'There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size'
            },
            currectAns: 'd'
        },
        {
            id: 'Question3',
            Question: 'Which data structure is used for implementing recursion?',
            options : {
                a:' Stack',
                b: 'Queue',
                c: 'List',
                d: 'Array'
            },
            currectAns: 'a'
        },
        {
            id: 'Question4',
            Question: 'The data structure required to check whether an expression contains a balanced parenthesis is?',
            options : {
                a:'Queue',
                b: 'Stack',
                c: 'Tree',
                d: 'Array'
            },
            currectAns: 'b'
        },
        {
            id: 'Question5',
            Question: ' Which of the following is not the application of stack?',
            options : {
                a:'Data Transfer between two asynchronous process',
                b: 'Compiler Syntax Analyzer',
                c: 'Tracking of local variables at run time',
                d: 'A parentheses balancing program'
            },
            currectAns: 'a'
        },
        {
            id: 'Question6',
            Question: 'Which data structure is needed to convert infix notation to postfix notation?',
            options : {
                a:'Tree',
                b: 'Branch',
                c: 'Stack',
                d: 'Queue'
            },
            currectAns: 'c'
        },
        {
            id: 'Question7',
            Question: 'What is the value of the postfix expression 6 3 2 4 + – *?',
            options : {
                a:'74',
                b: '-18',
                c: '22',
                d: '40'
            },
            currectAns: 'b'
        }
    ]
    
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.QuizList.length)
    }

    changeHandler(event){
        // const {name, value} = event.target 
        // this.selected={...this.selected, [name]:value}
        const {name, value} = event.target 
        //const name = event.target.name;
        this.selected={...this.selected, [name]:value}
        // console.log(this.selected[item.id])
        // console.log(name)
        // console.log(value)
    }
     //used for disabling the sumbmit button

    // for applying dynamic styling to our result
    get isScoredFull(){
        return `slds-text-heading_large ${this.QuizList.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    
    submitHandler(event){
        // this.selected[item.id]  { this means ( return selected.question1 = c )  // this.selected={...this.selected, [name]:value}}
        event.preventDefault()
        let correct = this.QuizList.filter(item=>this.selected[item.id] === item.currectAns)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
    //form reset handler
    resetHandler(){
        this.selected ={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
}