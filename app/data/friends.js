// module.exports =
// [
//     {
//         name: 'Elias',
//         photo: "https://media.giphy.com/media/APcFiiTrG0x2/giphy.gif",
//         scores: [ 4, 5, 1, 2, 1, 5, 2, 2, 2, 2 ]
//     },
//     {
//         name: 'Dennis',
//         photo: "https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif",
//         scores: [ 4, 1, 1, 2, 5, 3, 2, 3, 5, 2 ]
//     },
//     {
//         name: 'Sarah',
//         photo: 'https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif',
//         scores: [ 2, 3, 4, 2, 3, 1, 4, 4, 4, 5 ]
//     },
//     {
//         name: 'Amanda',
//         photo: 'https://media.giphy.com/media/G3773sSDJHHy0/giphy.gif',
//         scores: [ 1, 5, 1, 4, 2, 1, 2, 2, 1, 4 ]
//     },
//     {
//         name: 'Margaret',
//         photo: 'https://media.giphy.com/media/6TWkEij704KHu/giphy.gif',
//         scores: [ 4, 2, 1, 5, 2, 4, 3, 2, 5, 1 ]
//     },
//     {
//         name: 'Christopher',
//         photo: 'https://media.giphy.com/media/XKYjR0Hsjh5cs/giphy.gif',
//         scores: [ 4, 2, 2, 3, 2, 4, 5, 4, 5, 3 ]
//     },
//     {
//         name: 'David',
//         photo: 'https://media.giphy.com/media/f1GG38RQLvdgQ/giphy.gif',
//         scores: [ 2, 1, 5, 2, 4, 4, 4, 4, 3, 3 ]
//     },
//     {
//         name: 'Kathy',
//         photo: 'https://media.giphy.com/media/L9E28br6rFvYk/giphy.gif',
//         scores: [ 2, 5, 2, 5, 5, 5, 2, 5, 2, 5 ]
//     },
//     {
//         name: 'Maria',
//         photo: 'https://media.giphy.com/media/26tOZxcbcZzxDlek8/giphy.gif',
//         scores: [ 5, 1, 5, 5, 3, 5, 4, 2, 2, 5 ]
//     },
//     {
//         name: 'Robert',
//         photo: 'https://media.giphy.com/media/TIyJGNK325XGciFEnI/giphy.gif',
//         scores: [ 5, 1, 5, 1, 4, 1, 4, 5, 1, 3 ]
//     }
// ];
// var mysql = require('mysql');
// module.exports = function() {
//     var friendsArray = [];
//     var connection = mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: 'root',
//         database: 'friend_finderdb'
//     });
//     connection.connect(function(error) {
//         if (error) throw error;
//         console.log("connected as id " + connection.threadId);
//         connection.query(
//             'SELECT * FROM friends',
//             function(error, reply) {
//                 if (error) throw error;
//                 for (var i = 0; i < reply.length; i++) {
//                     var questArray = reply[i].questions.split(',');
//                     var questIntArray = [];
//                     for (var j = 0; j < questArray.length; j++) {
//                         questIntArray.push(parseInt(questArray[j]));
//                     }
//                     var friendObject = {name: reply[i].name, photo: reply[i].photo, questions: questIntArray};
//                     friendsArray.push(friendObject);
//                 }
//                 console.log(friendsArray);
//                 return friendsArray;    
//             }
//         );
//     });
// }

