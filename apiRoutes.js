
const express = require ("express");
const path = require ("path");
const fs = require ("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

   // /api/notes should read the db.json file and return all saved notes as JSON
  app.get("/api/notes"), function(req, res) {
    res.sendFile(path.join(__dirname, "db/db.json"))
  }

  // db.json file will be used to store and retrieve notes using the fs module
  // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "db/db.json", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.end(data);
    });
  

  // API POST Requests

  // ---------------------------------------------------------------------------

  // Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
    app.post("/api/notes", function(req, res) {
    var newNote = req.body;
       
    });


    // Should receive a query parameter containing the id of a note to delete. 
    //  give each note a unique id when it's saved. 
    //  to delete a note, you'll need to read all notes from the db.json file, 
    // remove the note with the given id property, and then rewrite the notes to the db.json file.
    app.delete("/api/notes/:id"), function(req, res) {


    }

  
    app.post("/api/clear", function(req, res) {
        res.json({ ok: true });
    });
};