steps = [
    [
        # CREATE TABLE
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(200) UNIQUE NOT NULL,
            hashed_password TEXT NOT NULL
        );
        """,
        # DROP TABLE
        """
        DROP TABLE accounts;
        """
    ]
]
