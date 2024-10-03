sequenceDiagram
participant browser
participant server

    browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server ->> browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser sends the data to the server, the server receives it and sends the new data, the browser all it does is receive the data and render only the new record
