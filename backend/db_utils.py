# pip install mysql-connector-python
import mysql.connector
from config import USER, PASSWORD, HOST


class DbConnectionError(Exception):
    pass


def _connect_to_db(db_name):
    cnx = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        auth_plugin='mysql_native_password',
        database=db_name
    )
    return cnx

def get_voter_info(voter_num):
    query_results = []

    try:
        db_name = 'youth_vote'
        db_connection = _connect_to_db(db_name)
        cur = db_connection.cursor()
        print("Connected to DB: %s" % db_name)

        query = """
        SELECT *
        FROM voters_test
        """.format(voter_num)

        cur.execute(query)

        result = cur.fetchall()
        query_results = result
        # print(query_results)

        cur.close()

    except Exception:
        raise DbConnectionError("Failed to read data from DB")

    finally:
        if db_connection:
            db_connection.close()
            print("DB connection is closed")

    return query_results

# get_voter_info(11111)