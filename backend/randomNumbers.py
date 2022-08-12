import random
import string

#Creating pollcard numbers randomly instead of incremently
def createPollCard (school, numOfCards):
    create = 0
    i = numOfCards
    pollCards = []

    while create < i:
        pollNumber = ""
        
        schoolNumber = school["data"]["urn"]
    
       
        # select 2 digits at random
        digits = random.choices(string.digits, k=2)
        # select 9 uppercase letters at random
        letters = random.choices(string.ascii_uppercase, k=4)
        # shuffle both letters + digits
        sample = random.sample(digits + letters, 6)

        voteID = "" + ''.join(sample)

        pollNumber = schoolNumber+'-'+voteID
        

        if pollCards.count(pollNumber) == 1:
            pass

        else:
            pollCards.append(pollNumber)
        
        create = create + 1
    
    return pollCards

school1 = {"data":
        {"name":"St John Fisher Catholic High School",
        "urn":"110907",
        "address":{
            "postcode":"PE1 5JN"}}}


print(createPollCard(school1, 10))