# Getting Started with NLP Application
![image](https://github.com/muhammad2022sculptor/nlp_app_ui/assets/104428479/f3800923-d7c7-4692-9f50-77ad90cc3645)

It has a very simple feature to Ask Questions about 3 different documents data [already extracted!]
The data is limited to get the answers faster as the model used for question answer feature has a limit of about 512 tokens at a time and for the purpose of increasing accuracy I have managed to get it to 2000 tokens at a time. But yes the time to process has increase too. The good news is that it is still in seconds.

You can ask for example:
  Give me the dates discussed!
  What are the Business names?
  etc..
  
- key functionalities of the UI;
It allows the user to put the question in the textfield and get the answer below.

- the API endpoints the UI uses;
/unique_doc_names for selecting the document to ask questions about it.
/answer_question for getting the answer.

- the key challenges you faced in building the front-end;
The biggest challenge was to get the accuracy because the model had a very small limit of reading the context of data.

- how would you improve the front-end, if you had more time to work on it?
I would've increase the features like uploading you own document and added question answering about it.
Maybe added more styling to it too.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Make sure to run the backend first!
