steps = [
    [
        # CREATE FAVORITES
        """
        CREATE TABLE favorites (
            id SERIAL PRIMARY KEY NOT NULL,
            user_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
            api_id TEXT NOT NULL
        );
        """,
        # DROP FAVORITES
        """
        DROP TABLE favorites;
        """
    ]
]