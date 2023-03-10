# Ye_Olde_Quiz

:beer::beer::beer:

Ye Olde Quiz is a quiz website inspired by everyone's favorite activity...a Pub Quiz!

This app makes use of the [Open Trivia Database](https://opentdb.com/)

## Motivation :muscle:

This project is part of the futureproof curriculum for LAP 3 project. We were tasked with the creation of a quiz website.

## Installation and Usage

Note: This repository contains the frontend of the application.

You can find the repository for the connected API [here](https://github.com/shedp/YeOldeQuizzBackend).

### Installation :inbox_tray:

- Clone or download this repository
- `npm install` to install the dependencies

### Usage :open_file_folder:

- `npm run dev` to run the UI
- Ensure the server in the [backend repository](https://github.com/shedp/YeOldeQuizzBackend) is running
- In your chosen browser (Chrome recommended) navigate to 'http://localhost:8080'

## Technologies :desktop_computer:

- React
- Babel
- Axios
- Webpack
- Javascript
- CSS
- [Socket.io](https://socket.io/)
- Deployment: [Netlify](https://www.netlify.com/)

## Process :bar_chart:

- Started with a day planning, using tools such as Figma and creating todo tasks in a Trello board.
- Split up work into backend and frontend:
- Once server was working, testing was done.
- Implimented Socket.io on both the front and back end at the same time.
- Worked together to fix any bugs and finalise small featues.
- Deployed website.

# Challeges and Wins

### Challenges :no_entry:

### Wins :trophy:

## Bugs :bug:

### Multiple games at one go

Having multiple games running simultaneously will cause some bugs

## Future Features :timer_clock:

### Displaying questions 1 by 1

Currently each round is displayed as one form with all the questions for that round to aid with simplicity.

A future feature would be to impliment functionality that allows each question to be displayed, then the answer for that question, and then for the next question appear.

### Choosing type of question

The API has two types of questions: multiple choice and true/false. Currently users don't have an option for choosing the type of question they want and there will just be a mix.

A feature feature would be to allow users to select just one type of question or to have a mix

## Contributors

@adamminchella :man_technologist:
@JLP2000 :man_technologist:
@PollyFenne :woman_technologist:
@shedp :man_technologist:
