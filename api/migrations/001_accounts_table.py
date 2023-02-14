steps = [
    [
        # CREATE TABLE
        """
        CREATE TABLE accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(200) UNIQUE NOT NULL,
            password VARCHAR(20) NOT NULL
        );
        """,
        # DROP TABLE
        """
        DROP TABLE accounts;
        """
    ]
]
