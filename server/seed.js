import Database from "better-sqlite3"
const db = new Database("database.db");

db.exec(`CREATE TABLE IF NOT EXISTS messages(
    username TEXT,
    message TEXT
)`);

db.exec(`
    INSERT INTO MESSAGES (username, message)
    VALUES
    ('Edd', 'Sup')
`);

db.exec(`
    INSERT INTO MESSAGES (username, message)
    VALUES
    ('Kormir', 'I am you...')
`);

db.exec(`
    INSERT INTO MESSAGES (username, message)
    VALUES
    ('S.o.a.d61', 'Cam can you pick me some flax plz')
`);