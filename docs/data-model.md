# Data models

# Accounts

The accounts table stores information about user accounts.

CREATE TABLE accounts (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(100) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
hashed_password TEXT NOT NULL
);

The id column is a SERIAL type, which automatically generates a unique integer value for each row added to the table. The name and email columns are both required and must not be null. The email column is also marked as UNIQUE, meaning that each email can only be associated with one account in the table. Finally, the hashed_password column stores the hashed password for each account and is also required and cannot be null.

# Favorites

The favorites table stores information about user favorites.

CREATE TABLE favorites (
id SERIAL PRIMARY KEY NOT NULL,
user_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
api_id TEXT NOT NULL
);

The id column is a SERIAL type, which automatically generates a unique integer value for each row added to the table. The user_id column is a foreign key that references the id column in the accounts table and is set to cascade on delete. The api_id column stores the ID of the user's favorite item and is required and cannot be null.
