import unittest
from app import Pollcards, matching_pollcard, has_voted, get_urn, get_voter_id, get_id



class TestPollcardMethods(unittest.TestCase):
    def setUp(self):

        self.mock_pollcard_new = Pollcards(
            school_urn=123123,
            voter_ID=12,
            age=None,
            vote=None
        )
        self.mock_pollcard_used = Pollcards(
            school_urn=123123,
            voter_ID=12,
            age=14,
            vote="Labour"
        )

        self.mock_pollcard_not_found = None



    def test_matching_pollcard_returns_true_when_pollcard_found(self):
        self.assertTrue(matching_pollcard(self.mock_pollcard_new))
    
    def test_matching_pollcard_returns_true_when_pollcard_not_found(self):
        self.assertFalse(matching_pollcard(self.mock_pollcard_not_found))

    def test_has_voted_returns_false_if_not_voted(self):
        self.assertFalse(has_voted(self.mock_pollcard_new))

    def test_has_voted_returns_true_if_voted(self):
        self.assertTrue(has_voted(self.mock_pollcard_used))

    def test_get_urn_returns_urn_from_pollcard_id(self):
        self.assertEqual(get_urn("1231230012"),"123123")

    def test_get_voter_id_returns_voter_id_from_pollcard_id(self):
        self.assertEqual(get_voter_id("1231230012"),"0012")




    # def test_create_pollcard_returns_success_if_created(self):
    #     with self.assertRaises(success):
    #         create_pollcard(123123, 20)
    
    def test_get_id_returns_id_plus_zeros(self):
        self.assertEqual(get_id(12, 4),"0012")


    # def test_pollcard_check_if_number_in_db(self):
    #     self.assertEqual(pollcard_check(1231230012),1231230012)
    
    # def test_pollcard_check_raises_error_if_number_not_in_db(self):
    #     with self.assertRaises(Exception):
    #         (pollcard_check(1231230013()))

    
    # def test_add_pollcards_db_is_correct_number(self): 
    #     self.assertEqual(add_pollcards_db(123123, 1)1231230001)

    # def test_add_pollcards(self):


    # def test_vote_submits_vote(self):


if __name__ == '__main__':
    unittest.main()