import db from "./sqlitedatabase";

db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Alunos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, media DECIMAL);"
    );
});

export const create = (obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //comando SQL modificåvel
            tx.executeSql(
                "INSERT INTO Alunos (nome, media) values (?,?);",
                [obj.nome, obj.media],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject("Error inserting obj: " + JSON.stringify(obj));
                },
                (_, error) => reject(error) // erro interno em tx.executeSqI
            );
        });
    });
};

export const readAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            // SQL query to select all rows from the table
            tx.executeSql(
                "SELECT * FROM Alunos;",
                [],
                (_, { rows }) => {
                    resolve(rows._array);
                },
                (_, error) => reject(error) // internal error in tx.executeSql
            );
        });
    });
};